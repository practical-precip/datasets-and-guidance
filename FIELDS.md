# Field guide

Dataset facts use YAML. Dataset names, IDs, aliases, display order, and links are defined in
[INDEX.md](INDEX.md). The ID is the shared filename stem, such as `loca2` in `datasets/loca2.yaml`
and `guidance/datasets/loca2.md`.

- __Kind:__ `downscaled-projection`, `historical-simulation`, `observation`, `reanalysis`,
  `model-ensemble`, `collection`, or `unresolved`
- __Version:__ Specific release or family covered by the record
- __Source scope:__ What was checked and what remains unverified
- __Dates:__ Creation, public release, and publication dates are distinct; use `YYYY-MM-DD`
- __Method:__ Downscaling method, reference dataset, and training period
- __Coverage:__ Domain, spacing, timestep, periods, scenarios, variables, and calendar
- __Ensemble:__ Driving models, model count, and initial condition members
- __Access:__ Landing page, data link, file format, license, subsetting, and costs
- __Metadata sources:__ Source URL and the section supporting the recorded facts
- __References:__ Citation keys from `references.bib`
- __Existing uses:__ Documented applications with a source
- __Funding:__ Agency, award, scope, and supporting source
- __Associated resources:__ Related documentation, code, or publications
- __Relevant rows:__ Application IDs used by the guidance table

Use `null` for unknown optional dates, numbers, and URLs. Use a clear sentence for other unknown
facts. Use `[]` for an empty list. Quote date strings and two digit codes when YAML could interpret
them as another type.

Dataset guidance uses YAML front matter for its title, summary, review record, evidence, and optional
regional files. Everything after the closing `---` is ordinary Markdown. Cite papers with
`[@citation-key]`. Evidence entries require `statement` and `paper`; `locator` and `scope` are
optional when the statement or cited source already supplies that context.

Application and matrix cell pages retain their existing labeled Markdown format. Use `__Field:__`
labels, `(not recorded)` for an optional unknown value, and `No entries.` for an empty collection.
Guidance prose follows `## Guidance`.
