# Datasets and guidance

A shared notebook for choosing and evaluating precipitation data. Each dataset and each guidance box is an ordinary Markdown page. You can edit it in GitHub without installing anything.

This repository is private. Invited contributors can read and propose edits. Accepted content may appear on the [public website](https://practical-precip.github.io/site/), so keep private notes and unpublished material elsewhere.

## Start here

- [Find a dataset or guidance box](INDEX.md)
- [Edit online, step by step](CONTRIBUTING.md#edit-online)
- [Contribute with Git](CONTRIBUTING.md#use-git)
- [Understand the fields](FIELDS.md)
- [Match workshop dataset names](Workshop%20names.md)
- [See the NCAR matrix coverage](notes/NCAR%20matrix%20coverage.md)
- [Browse the academic references](references.bib)

## A small edit is welcome

Open a page, click the pencil, and change the text. For guidance, scroll to __Guidance__ and write normal paragraphs. Add a source for factual claims, describe the dataset version and study region, and distinguish published findings from your own advice. Draft guidance is not an expert endorsement.

For a metadata correction, change the text after a label such as `- __Name:__`. Keep the field names and section headings so the site can recognize them. Use __Preview__ to check the formatting, then propose the change on a new branch and open a pull request. A maintainer reviews it before publication.

## Where things live

- __[datasets](datasets/):__ One page per dataset, with facts, sources, and expert guidance together
- __[guidance/cells](guidance/cells/):__ One page per guidance box, plus optional regional versions
- __[guidance/applications](guidance/applications/):__ Application names, introductions, metrics, and box assignments
- __[Guidance table](guidance/Table.md):__ Column definitions and application order
- __[Dataset order](Dataset%20order.md):__ Dataset order on the site
- __[Regions](Regions.md):__ Region names, state membership, and map label positions
- __[references.bib](references.bib):__ Paper details and the claims they support
- __[assets](assets/):__ Images and PDFs used in guidance

There are no build scripts or software dependencies here. The [site repository](https://github.com/practical-precip/site) converts and validates these pages. A maintainer selects a reviewed content revision and publishes it. Merging a pull request here does not immediately change the public website.
