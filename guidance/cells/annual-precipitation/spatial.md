# Catchment spatial support

| Field | Value |
| --- | --- |
| Title | Catchment spatial support |
| Priority | context |
| Summary | Choose a spatial scale that represents your catchment and elevation gradients. Fine grid spacing is not a guarantee of accurate basin totals. |

## Evidence

No entries.

## Review

| Field | Value |
| --- | --- |
| Status | draft |
| Updated | 2026-09-11 |

### Contributors

- Initial AI-assisted draft

## Regions

| Field | Value |
| --- | --- |
| Northwest | cells/annual-precipitation/spatial.northwest.md |
| Southwest | cells/annual-precipitation/spatial.southwest.md |
| Alaska | cells/annual-precipitation/spatial.alaska.md |
| Hawaii | cells/annual-precipitation/spatial.hawaii.md |

## Guidance

Choose a spatial scale that represents your catchment and elevation gradients. Fine grid spacing is not a guarantee of accurate basin totals.

## Evaluation check

Compare area-weighted annual totals and elevation bands with an appropriate reference. Record the regridding method.

## Basin aggregation

For grid-cell precipitation $P_i$ and overlapping basin areas $A_i$, the area-weighted mean is

$$
\bar{P} = \frac{\sum_i A_i P_i}{\sum_i A_i}.
$$

Use consistent units and account for cells with missing values. This equation defines the aggregation, not product skill.

![Synthetic monthly totals illustrating why seasonal evaluation matters](/content-assets/guidance/figures/annual-precipitation.png)

_Illustrative synthetic data, not observations or a product benchmark. See the application figure for provenance._
