# Editing the content

- `catalog.yaml`: ordered dataset IDs shown by consumers of this catalog.
- `products/<id>.yaml`: structured facts. Keep the ID identical to the file name.
- `product-guidance/<id>.md`: recommendations, explanations and regional findings.
- `names.yaml`: workshop names, their source groups and matching dataset IDs.
  One familiar name can map to several versions. `unresolved` keeps uncertain
  identity visible rather than silently choosing a dataset.
- `papers.yaml`: bibliography records. Use supporting provider links in
  `metadata_sources` when a paper does not establish the property.
- `notes/ncar-matrix-coverage.yaml`: the original PDF inventory crosswalk.

| Fields | What to enter |
| --- | --- |
| `name`, `aliases`, `kind` | Familiar name, alternate names and type of dataset |
| `version`, `source_scope` | Exact release or family scope and what has been checked |
| `generation` | CMIP generation if applicable; `[]` if not established/applicable |
| `coverage` | Domain, grid, spacing, cadence, historical/future periods, scenarios, variables and calendar |
| `method` | Method family, explanation, reference data and training period |
| `ensemble` | Driving models, model count, member description and sourced counts by model |
| `access` | Documentation/data links, format, license, subsetting and cost |
| `dates` | Creation, release and publication dates, plus explanatory notes |
| `references`, `metadata_sources` | Paper keys and source URLs with locations or scope |
| `existing_uses`, `funding`, `associated_resources` | Sourced uses, agency/award support and related resources |
| `guidance`, `relevant_rows` | Markdown file path and optional application IDs |

Dataset kinds are `downscaled-projection`, `historical-simulation`, `observation`,
`reanalysis`, `model-ensemble`, `collection`, or `unresolved`. Workshop groupings
are retained separately in `names.yaml`; a group label does not override the
scientific type. For example, CMIP6 is a collection and GHCN has station data.

A missing `grid_spacing.value` or `model_count` uses `null`. Explain whether the
quantity is unknown, variable or not applicable in the neighboring text field.
Do not assign a gridded resolution to station observations. Empty funding/use
lists mean not entered. A public download does not establish reuse terms.
Creation dates are not publication dates, simulation years or file timestamps.

The [metadata whiteboard](notes/dataset_metadata.jpg) records the requested
fields. The typed workshop list in `names.yaml` supersedes the handwritten
[datasets image](notes/datasets.jpg). Additional catalog entries from the NCAR
PDF remain available even when absent from the workshop list.
