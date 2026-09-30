# Contributing

Anyone can read this repository. Sign in to GitHub to propose a change. You do not need to know Git
to use the online editor.

## Edit online

1. Open [INDEX.md](INDEX.md) and choose a dataset's Guidance or Metadata link.
2. Click the pencil above the file. If needed, open the file menu and choose __Edit file__.
3. Edit the Markdown guidance or YAML metadata. Keep existing field names and indentation.
4. For Markdown, use __Preview__ to check the rendered text. For YAML, check the indentation and
   list markers.
5. Click __Commit changes__, create a branch, and open a pull request.
6. Explain what changed, link the supporting source, and state whether guidance is expert advice or
   a published finding.

A reviewer may request edits. A maintainer validates the content in the site before publication.

## Edit dataset metadata

Metadata files are in [datasets](datasets/) and use YAML. Strings containing punctuation may be
quoted. Lists begin with `-`, mappings use `field: value`, unknown optional values use `null`, and
empty lists use `[]`.

```yaml
provider: Scripps Institution of Oceanography
coverage:
  timestep: Daily
  scenarios:
    - SSP2-4.5
    - SSP5-8.5
ensemble:
  model_count: 27
funding: []
```

Do not add `id`, `name`, `aliases`, or `guidance` to metadata. [INDEX.md](INDEX.md) defines those
values and connects the paired files.

## Edit dataset guidance

Guidance files are in [guidance/datasets](guidance/datasets/). Keep the YAML front matter between
the `---` lines. Write ordinary Markdown below it.

```markdown
---
title: New dataset evaluation guidance
summary: Draft guidance awaiting evidence and expert review.
review:
  status: draft
  updated: '2026-09-17'
  contributors:
    - Your name
evidence: []
---

## Application guidance

Describe the evaluated release, region, observations, and limitations.
```

Use paragraphs, lists, links, images, equations, and `[@paper-id]` citations in the Markdown body.
Add or update the matching entry in [references.bib](references.bib) when introducing a citation.
Upload images to `assets/datasets/` and link them as `/content-assets/datasets/file.png`. Include
informative alternative text and use only images you have permission to share.

Update the review date and contributor list when revising guidance. Keep `status: draft` until an
expert review is recorded with `reviewed_by` and `reviewed_on`.

## Add a dataset

1. Copy [the metadata template](templates/dataset.yaml) to `datasets/clear-product-name.yaml`.
2. Copy [the guidance template](templates/dataset-guidance.md) to
   `guidance/datasets/clear-product-name.md`.
3. Replace placeholders and remove claims copied from another product.
4. Add one entry to [INDEX.md](INDEX.md):

```markdown
- __Display name__ ([Guidance](guidance/datasets/clear-product-name.md), [Metadata](datasets/clear-product-name.yaml))
  - Alias: Familiar name
```

The shared filename stem is the stable dataset ID. The index position controls website order. An
ordinary metadata or guidance update does not require an index change.

## Add regional dataset guidance

Copy [the regional dataset guidance template](templates/regional-dataset-guidance.md) to
`guidance/datasets/regional/<dataset>.<region>.md`. Link it from the general dataset guidance front
matter:

```yaml
regions:
  northwest: guidance/datasets/regional/example.northwest.md
```

Region IDs are defined and validated by the site. A regional file cannot contain further regional
overrides.

## Edit application guidance

Application definitions are in `guidance/applications/`. Matrix guidance is in
`guidance/important-for-user/`, with optional regional variants beside the general page. These
files use labeled Markdown lists followed by a `## Guidance` section. The site owns region and table
configuration.

## Edit the bibliography

All references live in [references.bib](references.bib). Keep existing citation keys stable. New
entries require `support` and `scope` fields in addition to standard BibTeX details.

## Use Git

```sh
git clone git@github.com:practical-precip/datasets-and-guidance.git
cd datasets-and-guidance
git switch -c clarify-dataset-guidance
# Edit YAML, Markdown, or references.bib.
git add datasets/your-dataset.yaml guidance/datasets/your-dataset.md INDEX.md
git commit -S -m "Clarify dataset guidance"
git push -u origin clarify-dataset-guidance
```

Open the branch on GitHub and choose __Compare & pull request__. The site repository owns schema and
integration checks.
