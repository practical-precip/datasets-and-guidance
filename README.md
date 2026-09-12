# Datasets and guidance

A shared notebook for choosing and evaluating precipitation data. Datasets, climate regions, and table definitions use standard NestedText files. Guidance boxes use Markdown. You can edit it in GitHub without installing anything.

This repository is private. Invited contributors can read and propose edits. Accepted content may appear on the [public website](https://practical-precip.github.io/site/), so keep private notes and unpublished material elsewhere.

## Start here

- [Find a dataset or guidance box](INDEX.md)
- [Edit online, step by step](CONTRIBUTING.md#edit-online)
- [Contribute with Git](CONTRIBUTING.md#use-git)
- [Understand the fields](FIELDS.md)
- [See the NCAR matrix coverage](notes/NCAR%20matrix%20coverage.md)
- [Browse the academic references](references.bib)

## A small edit is welcome

Open a file, click the pencil, and change the text. Dataset guidance is Markdown inside a NestedText `text` block. Guidance boxes have a Markdown __Guidance__ section. Add a source for factual claims, describe the dataset version and study region, and distinguish published findings from your own advice. Draft guidance is not an expert endorsement.

For a dataset correction, edit the value after a NestedText key such as `provider:`. Keep indentation and field names. Change dataset names, IDs, familiar names, and display order in [INDEX.md](INDEX.md). Use __Preview__ to check the formatting, then propose the change on a new branch and open a pull request. A maintainer reviews it before publication.

## Where things live

- __[datasets](datasets/):__ One NestedText file per dataset, with facts, sources, and expert guidance together
- __[guidance/cells](guidance/cells/):__ One page per guidance box, plus optional regional versions
- __[guidance/applications](guidance/applications/):__ Application names, introductions, metrics, and box assignments
- __[Guidance table](guidance/Table.nt):__ Column definitions and application order
- __[INDEX.md](INDEX.md):__ Dataset names, IDs, aliases, and website order
- __[Regions](Regions.nt):__ Region names, state membership, and map label positions
- __[references.bib](references.bib):__ Paper details and the claims they support
- __[assets](assets/):__ Images and PDFs used in guidance

There are no build scripts or software dependencies here. The [site repository](https://github.com/practical-precip/site) converts and validates these pages. A maintainer selects a reviewed content revision and publishes it. Merging a pull request here does not immediately change the public website.
