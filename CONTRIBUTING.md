# Contributing to datasets

Start with the [content index](INDEX.md). Improve one subject at a time and cite
the source supporting a factual change. Plain prose, links, images and equations
are welcome. Keep findings separate from your interpretation and state the
region, period and dataset version to which a recommendation applies.

## Edit online

The [README](README.md) walks through a single-file edit. Use a GitHub account,
open a file, select the pencil, make your change and preview it. Choose a new
branch when offered, then propose the change as a pull request. This private repository requires an invitation and write access for branch edits.
If you can read but cannot create a branch, request write access from a maintainer
or submit an issue. Forking private repositories depends on organization policy.

To change several files together, open this repository in
[github.dev](https://github.dev/practical-precip/datasets). Its file explorer and
Source Control panel let you edit and commit multiple files on one branch.
Alternatively, make your first edit on a new branch, select that branch in
GitHub, and edit additional files there before opening the pull request.
[GitHub's editing guide](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files)
explains the available controls.

## Formatting and evidence

- Keep field names and indentation in YAML. Use spaces, not tabs. A colon in
  prose is easiest to enter in a block beginning with `>-` on the value line.
- Write dates as quoted ISO strings, such as `'2026-09-11'`. Use `null` for an
  unknown nullable value. Empty lists mean not recorded, not zero or none.
- Put prose below the Markdown frontmatter. Link a paper with ordinary
  `[descriptive text](https://...)`, or add it to `papers.yaml` and cite its key
  using `[@paper-key]`.
- Upload figures under `assets/` using GitHub's **Add file / Upload files**.
  Reference them as `![Description](/content-assets/datasets/your-image.png)`.
  Keep file names simple and include useful alternative text. Do not upload an
  image without the right to redistribute it.
- Use `$x$` for inline equations and `$$` on separate lines for a display equation.
  GitHub previews and the website can render math differently, so the website
  preview remains the final rendering check.
- Keep `review.status: draft` for unreviewed changes. `expert-reviewed` requires
  named reviewers and a review date. Automated checks cannot grant this status.

A regional Markdown document is a complete replacement for the general document,
not an appended paragraph. Link it from the general document's `regions` mapping.
Region and application IDs come from the guidance repository. The website checks
those links when it assembles both repositories.

## Add a record

Copy a nearby example or a file from [templates](templates/), change its ID and
file name, then register it in `catalog.yaml`.
The [field guide](FIELDS.md) explains the other files to update. Unknown facts
are acceptable when clearly marked. Do not invent release dates, licenses or
model counts to fill fields.

## Review and publication

Run `npm ci`, `npm run check`, and `npm test` for local validation. A pull request
should explain the evidence, affected region or version, and unresolved details.
When a check fails, open **Details** beside the failed check to find the file and
error. Ask for help in the pull request if the message is unclear.

Maintainers review facts and recommendations, merge the content, then update the
website's selected metadata commit. Website build checks catch incompatible
application/region references across repositories. New guidance can therefore be
reviewed independently of changes to the website's appearance.
