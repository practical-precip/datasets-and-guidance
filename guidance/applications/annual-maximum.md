# Annual maximum precipitation

| Field | Value |
| --- | --- |
| Id | annual-maximum |
| Title | Annual maximum precipitation |
| Short | Annual maxima |
| Use | Extreme rainfall & flood studies |
| Intro | Define the accumulation duration and spatial support first. A maximum hourly point value, a maximum daily grid value, and a basin-average storm maximum answer different questions. |

## Metrics

- Duration-specific annual maxima
- Return-level uncertainty
- Areal extreme bias

## References

- kendon
- extremes
- maraun

## Figure

| Field | Value |
| --- | --- |
| Title | A daily total does not identify an hourly peak. |
| Alt | Two synthetic 24-hour storms both total 48 mm. One is steady at 2 mm each hour; the other places all 48 mm in two hours with a peak of 30 mm. |
| Caption | The constructed storms have identical daily accumulations of 48 mm and different hourly maxima. Daily output alone cannot distinguish these within-day sequences. |
| Image | /content-assets/guidance/figures/annual-maximum.png |
| Pdf | /content-assets/guidance/figures/annual-maximum.pdf |
| Provenance | Original synthetic example, generated with Matplotlib. No observations or downscaling product output are shown. |
| Data | /content-assets/guidance/figures/examples.json |
| Code | /content-assets/guidance/figures/make_figures.py |

## Cells

| Field | Value |
| --- | --- |
| Spatial | cells/annual-maximum/spatial.md |
| Temporal | cells/annual-maximum/temporal.md |
| Models | cells/annual-maximum/models.md |
| Members | cells/annual-maximum/members.md |
| Domain | cells/annual-maximum/domain.md |
| Coverage | cells/annual-maximum/coverage.md |

