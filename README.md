# Datasets and guidance

A shared notebook for choosing and evaluating precipitation data. Dataset facts use YAML and
dataset guidance uses Markdown. You can edit both on GitHub without installing software.

This repository is public. Anyone can read the source and propose edits. A maintainer reviews
changes before they appear on the [public website](https://practical-precip.github.io/site/). Keep
private notes and unpublished material elsewhere.

## Start here

- [Find dataset guidance and metadata](INDEX.md)
- [Edit online or contribute with Git](CONTRIBUTING.md)
- [Understand the fields](FIELDS.md)
- [Read the change history](CHANGELOG.md)
- [See the NCAR matrix coverage](notes/NCAR%20matrix%20coverage.md)
- [Browse the academic references](references.bib)

## A small edit is welcome

Open [INDEX.md](INDEX.md), choose the Guidance or Metadata link for a dataset, and click the pencil
button. Guidance is ordinary Markdown with YAML front matter. Metadata is YAML. Add a source for
factual claims, identify the dataset release and study region, and distinguish published findings
from expert advice. Draft guidance is not an expert endorsement.

The initial dataset metadata was substantially generated with language models and may contain
errors. See the [dataset metadata notice](datasets/README.md) before using or editing it.

## Where things live

- __[datasets](datasets/):__ One YAML metadata file per dataset
- __[guidance/datasets](guidance/datasets/):__ One Markdown guidance file per dataset, plus regional
  variants
- __[guidance/applications](guidance/applications/):__ Application definitions for the guidance
  matrix
- __[guidance/important-for-user](guidance/important-for-user/):__ Markdown guidance for each
  application and dataset property
- __[INDEX.md](INDEX.md):__ Dataset names, IDs, aliases, order, and links to both dataset files
- __[references.bib](references.bib):__ Paper details and the claims they support
- __[assets](assets/):__ Images and PDFs used in guidance

Website configuration, including climate regions and guidance table layout, lives in the
[site repository](https://github.com/practical-precip/site). This repository has no build scripts
or software dependencies. The site repository validates and publishes a selected content revision.
Merging a pull request here does not immediately change the public website.
