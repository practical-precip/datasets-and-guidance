# Field guide

Datasets use NestedText. Names, IDs, aliases, and display order are defined only in [INDEX.md](INDEX.md). All other dataset fields are in the linked `.nt` file. The site reads NestedText strings and converts numeric fields according to its schema.

- __Id:__ Stable lowercase identifier; needs to match the filename
- __Name / Aliases:__ Link label and indented familiar names in INDEX.md
- __Kind:__ `downscaled-projection`, `historical-simulation`, `observation`, `reanalysis`, `model-ensemble`, `collection`, or `unresolved`
- __Version:__ Specific release or family covered by the record
- __Source Scope:__ What was checked, and what remains unverified
- __Dates:__ Creation, public release, and publication dates are different; use YYYY-MM-DD
- __Method:__ Downscaling method, reference dataset, and training period
- __Coverage:__ Domain, spacing, timestep, time periods, scenarios, variables, and calendar
- __Ensemble:__ Driving models, model count, and initial-condition members
- __Access:__ Landing page, data link, file format, license, subsetting, and costs
- __Metadata Sources:__ The source URL and where to find support for the recorded facts
- __References:__ Citation keys in references.bib
- __Existing Uses:__ Documented applications, with a source
- __Funding:__ Agency, award, scope, and supporting source
- __Associated Resources:__ Related documentation, code, or publications
- __Expert Guidance:__ Review status, contributors, evidence, and optional regional overrides
- __Relevant Rows:__ Application IDs from the guidance table

For datasets, leave unknown optional dates, numbers, and URLs blank after the colon. These become unknown values in the site, not zero. Use a clear sentence for other unknown facts. Empty lists use an indented `[]` on its own line.

Use one NestedText list item per scenario, variable, reference, or source. Strings are not quoted or escaped. Longer guidance uses a multi-line string under `expert guidance / text`; each line starts with an indented `>`. That string is rendered as Markdown, including citations, images, and equations.

For guidance boxes and application pages, the existing Markdown labeled-list format still applies. Use `__Field:__` labels, `(not recorded)` for optional unknown values, and `No entries.` for empty collections. Guidance prose follows `## Guidance`.

State membership in Regions.nt uses two-digit US FIPS codes, including leading zeros. Map coordinates are label positions, not geographic bounds.
