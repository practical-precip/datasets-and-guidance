# Contributing

You need an invitation to this private repository and a GitHub account. Ask an organization maintainer for access if a link shows 404. You do not need to know Git to propose a change.

## Edit online

1. Open [the index](INDEX.md) and choose a dataset (`.nt`) or guidance box (`.md`).
2. Click the pencil icon above the file. If necessary, open the file menu and choose __Edit file__.
3. For a dataset, change a NestedText value or its `expert guidance / text` block. For a guidance box, change a labeled value or the __Guidance__ prose. Keep the existing field names and indentation.
4. Check field names and indentation. GitHub shows NestedText as source text; it does not render the Markdown inside it. For Markdown guidance boxes, use __Preview__ to check formatting. A maintainer can preview the rendered dataset guidance in the site.
5. Click __Commit changes__. Write a short description, such as "Clarify LOCA2 precipitation release". Select __Create a new branch for this commit and start a pull request__.
6. Open the pull request. Explain what changed, link the supporting source, and say whether the text is your expert advice or a published finding. Request a maintainer's review.

A reviewer may suggest edits. You can make them using the same pencil button on your branch. The maintainer will check the content in the site before publishing it.

## Edit a dataset in NestedText

Dataset files use [NestedText](https://nestedtext.org/), a standard format for nested mappings, lists, and strings. Use spaces for indentation. Keys are plain text, and values do not need quotes. Do not add Markdown labels such as `__Provider:__` to a dataset file.

```text
provider: Scripps Institution of Oceanography
coverage:
  timestep: Daily
  scenarios:
    - SSP2-4.5
    - SSP5-8.5
ensemble:
  model count: 27
funding:
  []
expert guidance:
  text:
    > ## Evaluation
    >
    > Write Markdown prose with [@pierce-loca2] citations here.
```

This is a shortened example. Keep the other fields in an existing record. A bare key with no value, such as `created:`, means an unknown value only where the field permits one. For an empty list, put `[]` on its own indented line, as shown above. `funding: []` would be the literal string `[]`, not a list.

Multi-line strings use `>` at the start of each indented line. A line containing only `>` is a blank line within the string. This works for paragraphs, image links, and equations. Quotation marks and backslashes are literal text in NestedText; do not escape them as if writing JSON or YAML.

Keep dataset names, IDs, and aliases out of the `.nt` file. [INDEX.md](INDEX.md) is their only definition:

```markdown
- [LOCA2 North America](datasets/loca2.nt)
  - LOCA2
```

The link label is the display name. The filename supplies the ID (`loca2`). Indented names are search aliases. Moving the link changes the dataset's position on the website. To rename a display name, edit only the link label. Changing an ID requires renaming the `.nt` file and updating references to that ID, so keep established IDs stable.

## Edit guidance-box metadata

Guidance boxes and table configuration still use Markdown labeled lists, such as `- __Title:__ Basin guidance`. Keep double underscores around labels and preserve list indentation. Their prose starts below `## Guidance`. The NestedText change applies to dataset records and their regional versions.

## Write guidance

In a guidance box, everything below the `## Guidance` heading is ordinary Markdown. In a dataset, write the same Markdown in the `expert guidance / text` block, prefixing each line with the indented `>` marker. Use paragraphs, lists, links, images, and equations. For example:

```markdown
Compare wet-day frequency over the same observation period.

The evaluation in [@pierce-loca2] concerns a particular release and domain.

![Describe what this figure shows](/content-assets/datasets/my-figure.png)

$$
P_{basin} = \sum_i w_i P_i
$$
```

Upload an image through __Add file > Upload files__ into `assets/datasets/` or `assets/guidance/`. Use the matching `/content-assets/datasets/` or `/content-assets/guidance/` URL in the prose. Include informative alternative text. Use images you have permission to share.

To cite a paper, add or update its entry in [references.bib](references.bib) and use `[@paper-id]`. You can also write a normal HTTPS link to a paper. Record what the paper supports and its scope; a link alone does not establish suitability for an application.

Update the review date and add your name to the contributor list when revising guidance. Keep status as `draft` until an expert has reviewed it. In a dataset these fields are under `expert guidance / review`. Record reviewers and a review date when using `expert-reviewed`.

## Edit the bibliography

All references live in [references.bib](references.bib). Use the same pencil and pull request workflow as for Markdown. Add an entry exported from a reference manager, or copy an existing entry and replace its fields. Keep existing citation keys stable because guidance uses them as `[@paper-id]`.

```bibtex
@article{example-paper,
  author = {Doe, Jane and Smith, John},
  title = {Evaluation of {CMIP6} precipitation},
  journal = {Replace with the journal name},
  year = {2024},
  doi = {10.1234/replace-this},
  url = {https://example.org/replace-this},
  support = {Describe the finding this paper supports.},
  scope = {Identify the region, release, period, and limits of that finding.},
}
```

This is a syntax example, not a real reference. Use lowercase citation keys with letters, digits, and hyphens. Separate authors with `and`. Braces protect acronyms such as `{CMIP6}`. Standard BibTeX fields from an export can remain in the entry; the site uses `author`, `title`, `journal`, `year`, `doi`, and `url`, plus the required custom fields `support` and `scope`. Those two fields preserve expert interpretation and are normally ignored by bibliography styles. Keep them when replacing an entry with a newer export.

The migrated references retain their existing abbreviated author labels as literal names, such as `author = {{Pierce et al.}}`. These are not complete author lists. Replace them with verified author lists when available. No author names were inferred during conversion.

## Add a dataset

1. Copy a similar `.nt` file, or start with [the dataset template](templates/dataset.nt).
2. Use __Add file > Create new file__ and name it `datasets/clear-product-name.nt`. Use lowercase words separated by hyphens.
3. Replace the facts, sources, guidance, and contributor name. Leave unknown optional dates and numbers blank, and describe other unknown facts in plain language. Do not leave claims from the copied product.
4. Add one link to [INDEX.md](INDEX.md) under __Datasets__: `- [Display name](datasets/clear-product-name.nt)`. Add familiar names as indented bullets. Its position in the list sets its website order.
5. Propose the new file and index edit in the same pull request. No separate name or order file is needed.

## Add regional guidance

For a dataset, copy [the regional dataset template](templates/regional-dataset.nt) into `datasets/regional/`. Add your contributor name, evidence, and Markdown text. In the main `.nt` file, add the region under `expert guidance`:

```text
expert guidance:
  regions:
    northwest: datasets/regional/loca2.northwest.nt
```

Keep the other `expert guidance` fields. A regional record has its own review, evidence, and `text` field. It cannot contain further regional overrides. See [WUS-D3](datasets/wus-d3.nt) for an existing example.

For a guidance box, use [the Markdown regional template](templates/regional-guidance.md) and put it beside the general box in `guidance/cells/`. Its general page links the variant in a __Regions__ section. A region uses the general guidance when no override is supplied.

## Change the guidance table

[Table.md](guidance/Table.md) controls column definitions and row order. Each application page in `guidance/applications/` defines its title and assigns a Markdown box to every column. For a new column, add its definition and a box assignment in every application. For a new row, copy an application page and its box pages, give them stable IDs, and add the ID to the table's row list. Maintainers validate these linked changes together.

## Use Git

```sh
git clone git@github.com:practical-precip/datasets-and-guidance.git
cd datasets-and-guidance
git switch -c clarify-dataset-guidance
# Edit NestedText, Markdown, or the shared BibTeX file.
git add datasets/your-dataset.nt INDEX.md
git commit -S -m "Clarify dataset guidance"
git push -u origin clarify-dataset-guidance
```

Open the branch on GitHub and choose __Compare & pull request__. No Node.js, Python, JSON, or YAML is needed here. Maintainers run validation from the site repository; its [contribution guide](https://github.com/practical-precip/site/blob/main/CONTRIBUTING.md) describes the publication step.
