# Precipitation phase

| Field | Value |
| --- | --- |
| Id | precipitation-phase |
| Title | Precipitation phase |
| Short | Rain versus snow |
| Use | Snowpack & seasonal water storage |
| Intro | Total precipitation alone does not identify phase. Establish whether rain and snow are provided directly or diagnosed from other variables, and evaluate the partitioning method. |

## Metrics

- Rain fraction by elevation
- Seasonal snowfall water equivalent
- Phase classification error

## References

- jennings
- lehner

## Figure

| Field | Value |
| --- | --- |
| Title | The assumed transition changes the rain fraction. |
| Alt | Two illustrative sigmoid curves show different rain fractions at the same air temperature when the assumed transition midpoint shifts from 0 to 2 degrees Celsius. |
| Caption | These logistic curves are mathematical illustrations with chosen transition midpoints of 0 and 2 degrees Celsius and slope scale 0.8 degrees Celsius. They are not fitted phase models or recommended thresholds. See Jennings et al. below for observational evidence. |
| Image | /content-assets/guidance/figures/precipitation-phase.png |
| Pdf | /content-assets/guidance/figures/precipitation-phase.pdf |
| Provenance | Original synthetic example, generated with Matplotlib. No observations or downscaling product output are shown. |
| Data | /content-assets/guidance/figures/examples.json |
| Code | /content-assets/guidance/figures/make_figures.py |

## Cells

| Field | Value |
| --- | --- |
| Spatial | cells/precipitation-phase/spatial.md |
| Temporal | cells/precipitation-phase/temporal.md |
| Models | cells/precipitation-phase/models.md |
| Members | cells/precipitation-phase/members.md |
| Domain | cells/precipitation-phase/domain.md |
| Coverage | cells/precipitation-phase/coverage.md |

