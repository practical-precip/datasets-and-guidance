# Reclamation BCSD climate and hydrology projections

| Field | Value |
| --- | --- |
| Id | reclamation-bcsd |
| Name | Reclamation BCSD climate and hydrology projections |
| Provider | Bureau of Reclamation / archive partners |
| Version | Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications. |
| Summary | Select the archive generation and BCSD collection explicitly. Monthly output cannot resolve daily precipitation extremes. CMIP3 scenarios and archive availability require separate verification. |
| Source Scope | NCAR matrix transcription. Provider and publication links are supplied for follow-up; only sources explicitly marked checked below were independently read. Download availability and data files were not tested. |
| Verified On | 2026-09-11 |
| Kind | downscaled-projection |

## Generation

- CMIP3
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
| Family | Statistical downscaling |
| Description | BCSD |
| Reference Dataset | Maurer et al. (2002), as identified in the matrix |
| Training Period | Not established from the sources checked. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Conterminous United States |
| Grid | Latitude-longitude output grid described in the matrix; confirm coordinates in selected files. |
| Timestep | Monthly in the matrix; archive contains multiple collections |
| Historical | Historical component of 1950-2099 for the matrix CMIP5 collection; experiment transition must be checked. |
| Future | Future component of 1950-2099 for the matrix CMIP5 collection; not every model/scenario is necessarily complete. |
| Calendar | Not established from the sources checked. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 0.125 |
| Unit | degree |

### Scenarios

- RCP2.6
- RCP4.5
- RCP6.0
- RCP8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| precipitation | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |
| minimum temperature | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |
| maximum temperature | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CMIP3 and CMIP5 collections; scenario list here describes CMIP5 |
| Model Count | (not recorded) |
| Members | Not established from the sources checked. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://gdo-dcp.ucllnl.org/ |
| Data | https://gdo-dcp.ucllnl.org/ |
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
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, dataset row 2: Reclamation BCSD climate and hydrology projections. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability. |

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider or method documentation | https://gdo-dcp.ucllnl.org/ | Follow-up resource; availability of data must be confirmed. |
| Related publication or technical report | https://gdo-dcp.ucllnl.org/downscaled_cmip_projections/techmemo/downscaled_climate.pdf | Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration. |

## Aliases

No entries.

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | Reclamation BCSD climate and hydrology projections evaluation guidance |
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

Select the archive generation and BCSD collection explicitly. Monthly output cannot resolve daily precipitation extremes. CMIP3 scenarios and archive availability require separate verification.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://gdo-dcp.ucllnl.org/downscaled_cmip_projections/techmemo/downscaled_climate.pdf) is available for further review.
