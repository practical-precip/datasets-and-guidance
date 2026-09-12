# Guidance table layout

- __Version:__ 1

## Columns

1. __Id:__ spatial
   - __Title:__ Spatial resolution
   - __Subtitle:__ Grid spacing & support
   - __Definition:__ The spacing of the output grid, and the area each value represents. A fine output grid does not by itself establish the scale of credible information.

2. __Id:__ temporal
   - __Title:__ Temporal resolution
   - __Subtitle:__ Hourly, daily, monthly
   - __Definition:__ The interval and accumulation window of each output value. Match these to the process and statistic your application needs.

3. __Id:__ models
   - __Title:__ GCM ensemble size
   - __Subtitle:__ Different climate models
   - __Definition:__ The number and diversity of driving global climate models. Count models separately from initial-condition members and downscaling methods.

4. __Id:__ members
   - __Title:__ Internal variability
   - __Subtitle:__ Members within a model
   - __Definition:__ Multiple simulations of the same climate model and forcing, started from different initial conditions. These sample different plausible climate sequences.

5. __Id:__ domain
   - __Title:__ Geographic domain
   - __Subtitle:__ Coverage & boundaries
   - __Definition:__ The geographic footprint of the product, including your complete study area. CONUS means the contiguous United States.

6. __Id:__ coverage
   - __Title:__ Temporal coverage
   - __Subtitle:__ Baseline & future period
   - __Definition:__ The years, continuity, and scenarios available for your baseline and planning horizon. This is different from the timestep.

## Rows

- annual-precipitation
- annual-maximum
- intermittency
- precipitation-phase
- spatial-coherence

