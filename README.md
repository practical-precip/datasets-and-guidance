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

Open a page, click the pencil, and change the text. For guidance, scroll to **Guidance** and write normal paragraphs. Add a source for factual claims, describe the dataset version and study region, and distinguish published findings from your own advice. Draft guidance is not an expert endorsement.

For a metadata correction, change the value in the table. Keep the field names and section headings so the site can recognize them. Use **Preview** to check the formatting, then propose the change on a new branch and open a pull request. A maintainer reviews it before publication.

## Where things live

| Folder or page | What you can edit |
| --- | --- |
| [datasets](datasets/) | One page per dataset, with facts, sources, and expert guidance together |
| [guidance/cells](guidance/cells/) | One page per guidance box, plus optional regional versions |
| [guidance/applications](guidance/applications/) | Application names, introductions, metrics, and box assignments |
| [Guidance table](guidance/Table.md) | Column definitions and application order |
| [Dataset order](Dataset%20order.md) | Dataset order on the site |
| [Regions](Regions.md) | Region names, state membership, and map label positions |
| [references.bib](references.bib) | Paper details and the claims they support |
| [assets](assets/) | Images and PDFs used in guidance |

There are no build scripts or software dependencies here. The [site repository](https://github.com/practical-precip/site) converts and validates these pages. A maintainer selects a reviewed content revision and publishes it. Merging a pull request here does not immediately change the public website.
