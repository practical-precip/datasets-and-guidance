# EPA Dynamically Downscaled Ensemble (EDDE) v1

| Field | Value |
| --- | --- |
| Id | edde-v1 |
| Name | EPA Dynamically Downscaled Ensemble (EDDE) v1 |
| Provider | US Environmental Protection Agency |
| Version | Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications. |
| Summary | Historical and future time windows differ by model and scenario. A 36 km regional model does not directly resolve local convective rainfall. Check each run before calculating paired changes. |
| Source Scope | Matrix entry supplemented by EPA AWS registry documentation checked on 2026-09-11. |
| Verified On | 2026-09-11 |
| Guidance | product-guidance/edde-v1.md |
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
| Description | WRF dynamical downscaling |
| Reference Dataset | Physical downscaling; no statistical training reference |
| Training Period | Not established from the sources checked. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Conterminous United States |
| Grid | Model or regional output grid; confirm projection and coordinates in selected files. |
| Timestep | Hourly |
| Historical | Historical component of 1975-2005 CESM; 1995-2005 CESM and GFDL-CM3; experiment transition must be checked. |
| Future | RCP4.5 2025-2100 (CESM), RCP6.0 2025-2055 (CESM); inspect RCP8.5 windows for CESM and GFDL-CM3. |
| Calendar | Not established from the sources checked. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 36 |
| Unit | km |

### Scenarios

- RCP4.5
- RCP6.0
- RCP8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| precipitation | Verify units and accumulation interval in selected files. | Precipitation is covered by this record. Additional atmospheric variables require a complete archive-specific inventory. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CESM and GFDL-CM3 |
| Model Count | 2 |
| Members | Not established from the sources checked. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://registry.opendata.aws/epa-edde-v1/ |
| Data | https://registry.opendata.aws/epa-edde-v1/ |
| Format | CF-compliant NetCDF4 |
| License | US government public-domain data unless otherwise specified by EPA. |
| License Url | https://registry.opendata.aws/epa-edde-v1/ |
| Subsetting | Not verified. The linked documentation may describe access, rather than provide a working subset service. |
| Cost | Anonymous S3 download access; optional analysis costs are not estimated. |

## References

No entries.

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, dataset row 26: EPA Dynamically Downscaled Ensemble (EDDE) v1. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability. |
| https://registry.opendata.aws/epa-edde-v1/ | Checked: time windows, models, format, reuse statement and distribution. |

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider or method documentation | https://registry.opendata.aws/epa-edde-v1/ | Follow-up resource; availability of data must be confirmed. |
| Related publication or technical report | https://doi.org/10.5194/acp-18-15471-2018 | Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration. |

## Aliases

No entries.

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | EPA Dynamically Downscaled Ensemble (EDDE) v1 evaluation guidance |
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

Historical and future time windows differ by model and scenario. A 36 km regional model does not directly resolve local convective rainfall. Check each run before calculating paired changes.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://doi.org/10.5194/acp-18-15471-2018) is available for further review.
