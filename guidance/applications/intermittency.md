# Intermittency

| Field | Value |
| --- | --- |
| Id | intermittency |
| Title | Intermittency |
| Short | Wet & dry spells |
| Use | Drought, agriculture & runoff timing |
| Intro | Define a wet interval before counting wet days or spells. Then evaluate both occurrence and persistence. Matching the precipitation distribution does not establish that the sequence is useful. |

## Metrics

- Wet-interval frequency
- Wet and dry spell lengths
- Occurrence transitions

## References

- lange
- value

## Figure

| Field | Value |
| --- | --- |
| Title | Wet frequency does not identify spell length. |
| Alt | Two constructed 12-day rainfall sequences contain six wet days and 12 mm total. One alternates wet and dry days; the other groups six wet days together. |
| Caption | Both sequences have six wet days and 12 mm of precipitation. At a threshold of 1 mm/day, the longest dry spell within the displayed window is one day in the alternating sequence and six days in the clustered sequence. |
| Image | /content-assets/guidance/figures/intermittency.png |
| Pdf | /content-assets/guidance/figures/intermittency.pdf |
| Provenance | Original synthetic example, generated with Matplotlib. No observations or downscaling product output are shown. |
| Data | /content-assets/guidance/figures/examples.json |
| Code | /content-assets/guidance/figures/make_figures.py |

## Cells

| Field | Value |
| --- | --- |
| Spatial | cells/intermittency/spatial.md |
| Temporal | cells/intermittency/temporal.md |
| Models | cells/intermittency/models.md |
| Members | cells/intermittency/members.md |
| Domain | cells/intermittency/domain.md |
| Coverage | cells/intermittency/coverage.md |

