import { readFileSync, readdirSync, existsSync, realpathSync } from 'node:fs';
import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import Ajv from 'ajv';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { visit } from 'unist-util-visit';
import katex from 'katex';
export const root = fileURLToPath(new URL('../', import.meta.url));
export function checkContent(dir = root) {
  const schema = JSON.parse(readFileSync(resolve(dir, 'schema.json')));
  const ajv = new Ajv({allErrors:true,format:'full',jsonPointers:true});
  ajv.addSchema(schema, 'metadata');
  const seen = new Set();
  const safe = (file) => {
    const p = resolve(dir, file);
    if (!p.startsWith(resolve(dir)+sep) || !realpathSync(p).startsWith(realpathSync(dir)+sep)) throw Error(`Path outside repository: ${file}`);
    return p;
  };
  const read = (file) => {seen.add(file);return readFileSync(safe(file),'utf8');};
  const validate = (kind, data, file) => {
    const fn=ajv.getSchema(`metadata#/definitions/${kind}`);
    if(!fn(data))throw Error(`${file}: ${ajv.errorsText(fn.errors)}`);
    return data;
  };
  const load = (file,kind) => validate(kind,yaml.load(read(file),{schema:yaml.JSON_SCHEMA,filename:file}),file);
  const papers=load('papers.yaml','papers');
  const cite=(id,file)=>{if(!Object.hasOwn(papers,id))throw Error(`${file}: unknown paper ${id}`);};
  const unique=(xs,label)=>{if(new Set(xs).size!==xs.length)throw Error(`${label}: duplicate IDs`);};
  const parser=unified().use(remarkParse).use(remarkGfm).use(remarkMath);
  const isDataset=existsSync(resolve(dir,'catalog.yaml'));
  const repo=isDataset?'datasets':'guidance';
  function document(file,cell=false,regional=false) {
    const match=read(file).replace(/\r\n/g,'\n').match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if(!match || !match[2].trim())throw Error(`${file}: expected frontmatter and Markdown prose`);
    const meta=validate('document',yaml.load(match[1],{schema:yaml.JSON_SCHEMA}),file);
    if(cell&&!meta.priority)throw Error(`${file}: missing cell priority`);
    if(regional&&meta.regions)throw Error(`${file}: nested regional documents are not supported`);
    for(const e of meta.evidence)cite(e.paper,file);
    for(const m of match[2].matchAll(/\[@([a-z][a-z0-9-]*)\]/g))cite(m[1],file);
    visit(parser.parse(match[2]),node=>{
      if(node.type==='html')throw Error(`${file}: raw HTML is not supported`);
      if(['math','inlineMath'].includes(node.type))katex.renderToString(node.value,{throwOnError:true,strict:'error',trust:false});
      if(['image','link','definition'].includes(node.type)){
        if(!/^(https:\/\/|\/(?!\/)|#)/.test(node.url))throw Error(`${file}: unsafe or unsupported link ${node.url}`);
        if(node.type==='image'&&!node.alt?.trim())throw Error(`${file}: image needs alt text`);
        if(node.url.startsWith('/content-assets/')){
          const prefix=`/content-assets/${repo}/`;
          if(!node.url.startsWith(prefix))throw Error(`${file}: use assets from this repository`);
          safe('assets/'+decodeURIComponent(node.url.slice(prefix.length).split(/[?#]/)[0]));
        }else if(node.type==='image'&&node.url.startsWith('/'))throw Error(`${file}: local image must use /content-assets/${repo}/...`);
      }
    });
    for(const [region,path] of Object.entries(meta.regions??{})){
      if(!isDataset&&!regions.some(r=>r.id===region))throw Error(`${file}: unknown region ${region}`);
      document(path,cell,true);
    }
  }
  let ids,folders,regions=[];
  if(isDataset){
    const catalog=load('catalog.yaml','catalog');ids=catalog.products;folders=['products','product-guidance'];unique(ids,'catalog');
    for(const id of ids){const file=`products/${id}.yaml`;const p=load(file,'product');if(p.id!==id)throw Error(`${file}: ID differs from filename`);for(const ref of p.references)cite(ref,file);document(p.guidance);}
    const crosswalk=resolve(dir,'notes/ncar-matrix-coverage.yaml');
    if(existsSync(crosswalk))for(const row of yaml.load(readFileSync(crosswalk,'utf8')).rows){if(!row.products.length)throw Error('Empty NCAR row');for(const id of row.products)if(!ids.includes(id))throw Error(`NCAR crosswalk: unknown product ${id}`);}
    const aliases=resolve(dir,'names.yaml');
    if(existsSync(aliases)){const names=yaml.load(readFileSync(aliases,'utf8'));unique(names.entries.map(e=>e.name),'names');for(const e of names.entries){if(!['matched','new','unresolved'].includes(e.status)||!e.products.length)throw Error(`names.yaml: invalid mapping ${e.name}`);for(const id of e.products)if(!ids.includes(id))throw Error(`names.yaml: unknown product ${id}`);}}
  }else{
    const table=load('table.yaml','table');regions=load('regions.yaml','regions');ids=table.rows;folders=['rows','cells'];unique(ids,'rows');const cols=table.columns.map(c=>c.id);unique(cols,'columns');unique(regions.map(r=>r.id),'regions');unique(regions.flatMap(r=>r.states),'state memberships');
    for(const id of ids){const file=`rows/${id}.yaml`;const p=load(file,'row');if(p.id!==id)throw Error(`${file}: ID differs from filename`);if(cols.length!==Object.keys(p.cells).length||cols.some(c=>!Object.hasOwn(p.cells,c)))throw Error(`${file}: cells must match columns`);for(const ref of p.references)cite(ref,file);for(const cell of Object.values(p.cells))if(cell!==null)document(cell,true);if(p.figure)for(const key of ['image','pdf','data','code'])if(p.figure[key]){const prefix='/content-assets/guidance/';if(!p.figure[key].startsWith(prefix))throw Error(`${file}: figure must use repository assets`);safe('assets/'+p.figure[key].slice(prefix.length));}}
  }
  function walk(folder){for(const f of readdirSync(safe(folder),{withFileTypes:true})){const p=folder+'/'+f.name;if(f.isDirectory())walk(p);else if(/\.(md|yaml)$/.test(p)&&!seen.has(p))throw Error(`${p}: unreferenced content file`);}}
  for(const f of folders)walk(f);
  return {repo,entries:ids.length,documents:[...seen].filter(f=>f.endsWith('.md')).length};
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{const r=checkContent();console.log(`Validated ${r.repo}: ${r.entries} entries and ${r.documents} Markdown documents.`);}catch(e){console.error(e.message);process.exitCode=1;}
}
