# Guidance table layout

| Field | Value |
| --- | --- |
| Version | 1 |

## Columns

| Id | Title | Subtitle | Definition |
| --- | --- | --- | --- |
| spatial | Spatial resolution | Grid spacing & support | The spacing of the output grid, and the area each value represents. A fine output grid does not by itself establish the scale of credible information. |
| temporal | Temporal resolution | Hourly, daily, monthly | The interval and accumulation window of each output value. Match these to the process and statistic your application needs. |
| models | GCM ensemble size | Different climate models | The number and diversity of driving global climate models. Count models separately from initial-condition members and downscaling methods. |
| members | Internal variability | Members within a model | Multiple simulations of the same climate model and forcing, started from different initial conditions. These sample different plausible climate sequences. |
| domain | Geographic domain | Coverage & boundaries | The geographic footprint of the product, including your complete study area. CONUS means the contiguous United States. |
| coverage | Temporal coverage | Baseline & future period | The years, continuity, and scenarios available for your baseline and planning horizon. This is different from the timestep. |

## Rows

- annual-precipitation
- annual-maximum
- intermittency
- precipitation-phase
- spatial-coherence

