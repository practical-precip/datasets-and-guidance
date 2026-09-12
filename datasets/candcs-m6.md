# CanDCS-M6

| Field | Value |
| --- | --- |
| Id | candcs-m6 |
| Name | CanDCS-M6 |
| Provider | Pacific Climate Impacts Consortium / Environment and Climate Change Canada |
| Version | Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications. |
| Summary | CanDCS-M6 is the multivariate product. CanDCS-U6 uses BCCAQv2 and is a different selection. Check provider errata before downloading. |
| Source Scope | Matrix fields supplemented by the Canadian provider download page checked on 2026-09-11. Errata and file metadata still need review for the selected release. The reference-data and scenario lists retain the matrix configuration. The current provider page describes blended NRCANmet/PNWNAmet and a later SSP3-7.0 subset; check the selected release separately. |
| Verified On | 2026-09-11 |
| Guidance | product-guidance/candcs-m6.md |
| Kind | downscaled-projection |

## Generation

- CMIP6

## Dates

| Field | Value |
| --- | --- |
| Created | (not recorded) |
| Released | (not recorded) |
| Publication | (not recorded) |
| Notes | Exact creation/release dates are not established. Simulation periods and version tokens are not creation dates. |

## Method

| Field | Value |
| --- | --- |
| Family | Statistical downscaling |
| Description | Multivariate bias correction (MBCn) |
| Reference Dataset | AHCCD v3 temperature, adjusted Canadian precipitation, and PNWNAmet as summarized by the matrix |
| Training Period | Not established from the sources checked. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Canada |
| Grid | Latitude-longitude output grid described in the matrix; confirm coordinates in selected files. |
| Timestep | Daily |
| Historical | Historical component of 1950-2100; experiment transition must be checked. |
| Future | Future component of 1950-2100; not every model/scenario is necessarily complete. |
| Calendar | Not established from the sources checked. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 0.08333333333333333 |
| Unit | degree |

### Scenarios

- SSP1-2.6
- SSP2-4.5
- SSP5-8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| precipitation | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |
| minimum temperature | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |
| maximum temperature | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CMIP6 |
| Model Count | (not recorded) |
| Members | Not established from the sources checked. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://climate-scenarios.canada.ca/?page=CanDCS6-data |
| Data | https://climate-scenarios.canada.ca/?page=CanDCS6-data |
| Format | Not established from the sources checked. |
| License | Not established. Public access does not itself specify reuse terms. |
| License Url | (not recorded) |
| Subsetting | Provider offers region, time, variable, model and scenario subsets; not single grid points. |
| Cost | Not established from the sources checked. |

## References

No entries.

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, dataset row 10: CanDCS-M6. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability. |
| https://climate-scenarios.canada.ca/?page=CanDCS6-data | Checked: M6 uses MBCn, time coverage, scenarios, variables and subset controls; page lists updates through October 2025. |

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider or method documentation | https://climate-scenarios.canada.ca/?page=CanDCS6-data | Follow-up resource; availability of data must be confirmed. |
| Related publication or technical report | https://rmets.onlinelibrary.wiley.com/doi/full/10.1002/gdj3.257 | Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration. |

## Aliases

No entries.

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | CanDCS-M6 evaluation guidance |
| Summary | Draft interpretation of documented product properties; expert review is pending. |

### Review

| Field | Value |
| --- | --- |
| Status | draft |
| Updated | 2026-09-11 |

#### Contributors

- Initial AI-assisted draft

### Evidence

No entries.

## Guidance

## Application guidance

CanDCS-M6 is the multivariate product. CanDCS-U6 uses BCCAQv2 and is a different selection. Check provider errata before downloading.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://rmets.onlinelibrary.wiley.com/doi/full/10.1002/gdj3.257) is available for further review.
