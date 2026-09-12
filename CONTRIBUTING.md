# Contributing

You need an invitation to this private repository and a GitHub account. Ask an organization maintainer for access if a link shows 404. You do not need to know Git to propose a change.

## Edit online

1. Open [the index](INDEX.md) and choose a dataset or guidance box.
2. Click the pencil icon above the file. If necessary, open the file menu and choose __Edit file__.
3. Change a labeled value, or scroll to __Guidance__ and edit the prose. Keep the existing metadata headings and field labels.
4. Click __Preview__. Check labels, list indentation, links, images, and equations.
5. Click __Commit changes__. Write a short description, such as "Clarify LOCA2 precipitation release". Select __Create a new branch for this commit and start a pull request__.
6. Open the pull request. Explain what changed, link the supporting source, and say whether the text is your expert advice or a published finding. Request a maintainer's review.

A reviewer may suggest edits. You can make them using the same pencil button on your branch. The maintainer will check the content in the site before publishing it.

## Edit metadata

Each field is a labeled bullet point. Use double underscores for the label, with the colon inside: `- __Name:__ LOCA2`. Keep the label and change the value. No columns need lining up.

```markdown
- __Name:__ LOCA2
- __Provider:__ Scripps Institution of Oceanography

## Coverage

- __Timestep:__ Daily
- __Scenarios:__
  - SSP2-4.5
  - SSP5-8.5

## Metadata Sources

1. __Url:__ https://loca.ucsd.edu/
   - __Locator:__ Provider release notice.

2. __Url:__ https://example.org/replace-this
   - __Locator:__ Describe where the paper supports the metadata.
```

This is a shortened formatting example. Keep the other fields in an existing page. Headings such as `### Scenarios` followed by a simple list also work. For several sources, variables, or other records, copy an existing numbered entry and edit its fields. Keep continuation fields indented beneath that entry. Use one list item per value instead of semicolon-separated values.

Long values can wrap onto an indented continuation line. Keep paragraphs and images below `## Guidance`. See [the field guide](FIELDS.md) for unknown values, dates, and review status.

## Write guidance

Everything below the `## Guidance` heading is ordinary Markdown. Use paragraphs, lists, links, images, and equations. For example:

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

Update __Review / Updated__ when you revise guidance. Add your name to __Contributors__. Keep __Status__ as `draft` until an expert has reviewed it. Record reviewers and a review date when using `expert-reviewed`.

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

1. Copy a similar page from `datasets/` using GitHub's __Raw__ view, or start with [the dataset template](templates/dataset.md).
2. Use __Add file > Create new file__ and name it `datasets/clear-product-name.md`. Use lowercase words separated by hyphens. The filename and __Id__ must match.
3. Change the name, ID, facts, sources, and guidance. Use `(not recorded)` only for unknown numeric values, dates, or optional URLs. For other unknown facts, say what is unknown in plain language. Do not leave claims from the copied product.
4. Add the ID to [Dataset order](Dataset%20order.md). Add the page to [the index](INDEX.md), and add any workshop names to [Workshop names](Workshop%20names.md).
5. Propose the changes together in one pull request.

## Add regional guidance

Copy an existing regional page, or use [the regional template](templates/regional-guidance.md). Put a dataset version in `datasets/regional/` or a box version beside the general file in `guidance/cells/`. In the general page, add a __Regions__ section (inside __Expert Guidance__ for a dataset) with a labeled bullet mapping the region ID to its internal file address, such as `- __Northwest:__ product-guidance/loca2.northwest.md`. See [this existing example](datasets/wus-d3.md). A region uses the general guidance unless an override is provided. Regional pages cannot contain further regional overrides.

## Change the guidance table

[Table.md](guidance/Table.md) controls column definitions and row order. Each application page in `guidance/applications/` defines its title and assigns a Markdown box to every column. For a new column, add its definition and a box assignment in every application. For a new row, copy an application page and its box pages, give them stable IDs, and add the ID to the table's row list. Maintainers validate these linked changes together.

## Use Git

```sh
git clone git@github.com:practical-precip/datasets-and-guidance.git
cd datasets-and-guidance
git switch -c clarify-dataset-guidance
# Edit Markdown files in your preferred editor.
git add datasets/your-dataset.md
git commit -S -m "Clarify dataset guidance"
git push -u origin clarify-dataset-guidance
```

Open the branch on GitHub and choose __Compare & pull request__. No Node.js, Python, JSON, or YAML is needed here. Maintainers run validation from the site repository; its [contribution guide](https://github.com/practical-precip/site/blob/main/CONTRIBUTING.md) describes the publication step.
