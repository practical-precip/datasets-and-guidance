# Catchment spatial support

- __Title:__ Catchment spatial support
- __Priority:__ context
- __Summary:__ Choose a spatial scale that represents your catchment and elevation gradients. Fine grid spacing is not a guarantee of accurate basin totals.

## Evidence

No entries.

## Review

- __Status:__ draft
- __Updated:__ 2026-09-11

### Contributors

- Initial AI-assisted draft

## Regions

- __Northwest:__ important-for-user/annual-precipitation/spatial.northwest.md
- __Southwest:__ important-for-user/annual-precipitation/spatial.southwest.md
- __Alaska:__ important-for-user/annual-precipitation/spatial.alaska.md
- __Hawaii:__ important-for-user/annual-precipitation/spatial.hawaii.md

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

_Illustrative synthetic data, not observations or a product benchmark. The figure uses constructed monthly totals to illustrate seasonal differences._
