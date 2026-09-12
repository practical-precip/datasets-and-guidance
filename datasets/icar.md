# ICAR dataset in the NCAR matrix

| Field | Value |
| --- | --- |
| Id | icar |
| Name | ICAR dataset in the NCAR matrix |
| Provider | NCAR / collaborators |
| Version | Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications. |
| Summary | The matrix describes data available on request. Confirm the configuration and availability with the provider. Do not treat the planned CMIP6 scenarios as released data. |
| Source Scope | NCAR matrix transcription. Provider and publication links are supplied for follow-up; only sources explicitly marked checked below were independently read. Download availability and data files were not tested. |
| Verified On | 2026-09-11 |
| Kind | downscaled-projection |

## Generation

- CMIP5

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
| Family | Dynamical downscaling |
| Description | Intermediate Complexity Atmospheric Research model |
| Reference Dataset | Physical downscaling; no statistical training reference identified |
| Training Period | Not established from the sources checked. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Western conterminous United States |
| Grid | Model or regional output grid; confirm projection and coordinates in selected files. |
| Timestep | 3-hourly |
| Historical | Historical component of 1950-2100; experiment transition must be checked. |
| Future | Future component of 1950-2100; not every model/scenario is necessarily complete. |
| Calendar | Not established from the sources checked. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 6 |
| Unit | km in one configuration; 12 km in another |

### Scenarios

- RCP4.5
- RCP8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| precipitation | Verify units and accumulation interval in selected files. | Precipitation is covered by this record. Additional atmospheric variables require a complete archive-specific inventory. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CMIP5; CMIP6 development is described as in progress in the matrix |
| Model Count | (not recorded) |
| Members | Not established from the sources checked. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://github.com/NCAR/icar |
| Data | https://github.com/NCAR/icar |
| Format | Not established from the sources checked. |
| License | Not established. Public access does not itself specify reuse terms. |
| License Url | (not recorded) |
| Subsetting | Not verified. The linked documentation may describe access, rather than provide a working subset service. |
| Cost | Not established from the sources checked. |

## References

No entries.

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, dataset row 19: ICAR dataset in the NCAR matrix. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability. |

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider or method documentation | https://github.com/NCAR/icar | Follow-up resource; availability of data must be confirmed. |
| Related publication or technical report | https://journals.ametsoc.org/view/journals/hydr/17/3/jhm-d-15-0155_1.xml | Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration. |

## Aliases

- ICAR? (not publicly available yet)

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | ICAR dataset in the NCAR matrix evaluation guidance |
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

The matrix describes data available on request. Confirm the configuration and availability with the provider. Do not treat the planned CMIP6 scenarios as released data.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://journals.ametsoc.org/view/journals/hydr/17/3/jhm-d-15-0155_1.xml) is available for further review.
