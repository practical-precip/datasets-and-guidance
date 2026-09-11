import test from 'node:test';import assert from 'node:assert/strict';import {cpSync,mkdtempSync,readFileSync,writeFileSync,rmSync,existsSync} from 'node:fs';import {tmpdir} from 'node:os';import {join} from 'node:path';import yaml from 'js-yaml';import {root,checkContent} from './validate.mjs';
function fixture(fn){const dir=mkdtempSync(join(tmpdir(),'precip-metadata-'));try{cpSync(root,dir,{recursive:true,filter:p=>!p.includes('node_modules')&&!p.includes('/.git')&&!p.includes('/.worktrees')});fn(dir);}finally{rmSync(dir,{recursive:true,force:true});}}
test('all contributed content validates',()=>assert.ok(checkContent().entries>0));
test('missing Markdown source fails with a useful error',()=>fixture(dir=>{const datasets=existsSync(join(dir,'catalog.yaml'));const cfg=yaml.load(readFileSync(join(dir,datasets?'catalog.yaml':'table.yaml'),'utf8'));const id=(datasets?cfg.products:cfg.rows)[0];const file=join(dir,datasets?`products/${id}.yaml`:`rows/${id}.yaml`);const p=yaml.load(readFileSync(file,'utf8'),{schema:yaml.JSON_SCHEMA});if(datasets)p.guidance='product-guidance/missing.md';else p.cells[Object.keys(p.cells)[0]]='cells/missing.md';writeFileSync(file,yaml.dump(p));assert.throws(()=>checkContent(dir),/missing.md/);}));
test('unknown metadata field fails',()=>fixture(dir=>{const name=existsSync(join(dir,'catalog.yaml'))?'catalog.yaml':'table.yaml';const file=join(dir,name);writeFileSync(file,readFileSync(file,'utf8')+'misspelled_field: true\n');assert.throws(()=>checkContent(dir),/additional properties/);}));
test('every typed workshop label has a valid mapping',()=>{
 const lines=readFileSync(join(root,'notes/workshop-datasets.txt'),'utf8').trim().split('\n').filter(s=>!s.endsWith(':'));
 const names=yaml.load(readFileSync(join(root,'names.yaml'),'utf8')).entries;
 assert.deepEqual(names.map(n=>n.name),lines);
 assert.equal(names.length,53);
});
