# Field guide

Metadata uses labeled Markdown lists. Keep the double-underscore labels, such as `- __Name:__`, and edit the text after them. Keep the section headings and list indentation. Guidance prose starts at `## Guidance` and can have any subheadings.

- __Id:__ Stable lowercase identifier; keep it consistent with the filename
- __Name / Aliases:__ Full product name and familiar workshop names
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

Use `(not recorded)` for a missing number, date, or optional URL. Use a clear sentence for other unknown values. An empty collection is written `No entries.`; replace that line with list items when adding information. For a nested field, write `- __Funding:__ No entries.` until you have entries to add.

Use one item per line for lists of scenarios, aliases, references, state codes, and other values. Do not join several items with semicolons. Within a single value, a semicolon or vertical bar is just punctuation and needs no escaping.

Collections of records, such as metadata sources or climate regions, use numbered entries. The first labeled field starts the entry; its other fields are indented bullet points. Copy an existing entry to add another. Keep its indentation, and place the entries in the order you want them to appear.

State membership uses two-digit US FIPS codes, including leading zeros. Map coordinates are label positions, not geographic bounds.

You can wrap a long value onto the next line. Indent the continuation beneath its field; the site treats a soft wrap as a space. For paragraphs, images, and equations, use the __Guidance__ section.
