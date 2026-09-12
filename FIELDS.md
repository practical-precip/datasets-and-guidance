# Field guide

Metadata uses ordinary Markdown tables and lists. Keep the field labels and headings, and edit their values. Guidance prose starts at `## Guidance` and can have any subheadings.

| Field or section | Meaning |
| --- | --- |
| Id | Stable lowercase identifier; keep it consistent with the filename |
| Name / Aliases | Full product name and familiar workshop names |
| Kind | `downscaled-projection`, `historical-simulation`, `observation`, `reanalysis`, `model-ensemble`, `collection`, or `unresolved` |
| Version | Specific release or family covered by the record |
| Source Scope | What was checked, and what remains unverified |
| Dates | Creation, public release, and publication dates are different; use YYYY-MM-DD |
| Method | Downscaling method, reference dataset, and training period |
| Coverage | Domain, spacing, timestep, time periods, scenarios, variables, and calendar |
| Ensemble | Driving models, model count, and initial-condition members |
| Access | Landing page, data link, file format, license, subsetting, and costs |
| Metadata Sources | The source URL and where to find support for the recorded facts |
| References | IDs of papers in the references folder |
| Existing Uses | Documented applications, with a source |
| Funding | Agency, award, scope, and supporting source |
| Associated Resources | Related documentation, code, or publications |
| Expert Guidance | Review status, contributors, evidence, and optional regional overrides |
| Relevant Rows | Application IDs from the guidance table |

Use `(not recorded)` for a missing number, date, or optional URL. Use a clear sentence for other unknown values. An empty collection is written `No entries.`; replace that line with a list or table when adding items. `(omit)` in a table means the field does not apply to that row.

Most lists have one item per line. In a table cell that holds multiple values, separate them with `; ` (semicolon and space). This applies to workshop product IDs, region state codes, and map coordinates. State membership uses two-digit US FIPS codes, including leading zeros. Map coordinates are label positions, not geographic bounds.

In a metadata table, escape a literal vertical bar as `\|`. Use `<br>` only for a line break inside a metadata value. Write longer advice below **Guidance** instead of inside a table.

A dataset record identifies a product or a carefully scoped family. A workshop name does not automatically establish a unique release. Preserve unresolved names and state uncertainty. Public download access does not establish a reuse license. Fine grid spacing does not demonstrate skill at that scale.
