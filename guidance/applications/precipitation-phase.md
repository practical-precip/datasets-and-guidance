# Precipitation phase

- __Id:__ precipitation-phase
- __Title:__ Precipitation phase
- __Short:__ Rain versus snow
- __Use:__ Snowpack & seasonal water storage
- __Intro:__ Total precipitation alone does not identify phase. Establish whether rain and snow are provided directly or diagnosed from other variables, and evaluate the partitioning method.

## Metrics

- Rain fraction by elevation
- Seasonal snowfall water equivalent
- Phase classification error

## References

- jennings
- lehner

## Figure

- __Title:__ The assumed transition changes the rain fraction.
- __Alt:__ Two illustrative sigmoid curves show different rain fractions at the same air temperature when the assumed transition midpoint shifts from 0 to 2 degrees Celsius.
- __Caption:__ These logistic curves are mathematical illustrations with chosen transition midpoints of 0 and 2 degrees Celsius and slope scale 0.8 degrees Celsius. They are not fitted phase models or recommended thresholds. See Jennings et al. below for observational evidence.
- __Image:__ /content-assets/guidance/figures/precipitation-phase.png
- __Pdf:__ /content-assets/guidance/figures/precipitation-phase.pdf
- __Provenance:__ Original synthetic example, generated with Matplotlib. No observations or downscaling product output are shown.
- __Data:__ /content-assets/guidance/figures/examples.json
- __Code:__ /content-assets/guidance/figures/make_figures.py

## Cells

- __Spatial:__ cells/precipitation-phase/spatial.md
- __Temporal:__ cells/precipitation-phase/temporal.md
- __Models:__ cells/precipitation-phase/models.md
- __Members:__ cells/precipitation-phase/members.md
- __Domain:__ cells/precipitation-phase/domain.md
- __Coverage:__ cells/precipitation-phase/coverage.md

