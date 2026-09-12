# LOCA CMIP5

| Field | Value |
| --- | --- |
| Provider | Scripps Institution of Oceanography, UC San Diego |
| Verified On | 2026-09-11 |
| Id | loca-cmip5 |
| Name | LOCA CMIP5 |
| Version | Original LOCA CMIP5 archive at native 1/16 degree; not LOCA_8th evaluation data. |
| Summary | Daily localized constructed-analog projections from the CMIP5 generation. |
| Guidance | product-guidance/loca-cmip5.md |
| Source Scope | Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested. |
| Kind | downscaled-projection |

## Method

| Field | Value |
| --- | --- |
| Family | Statistical downscaling |
| Description | Localized constructed analogs (LOCA). |
| Reference Dataset | Livneh; distinct from the unsplit precipitation training used for LOCA2. |
| Training Period | Not recorded in the sources checked; inspect the release documentation. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | North America from central Mexico through southern Canada. |
| Grid | Regular latitude-longitude grid. |
| Timestep | Daily |
| Historical | 1950-2005 |
| Future | 2006-2100; some model records end in 2099. |
| Calendar | Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 0.0625 |
| Unit | degrees (1/16 degree) |

### Scenarios

- RCP4.5
- RCP8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| pr | Inspect the variable units and time bounds in the selected files. | Precipitation. Confirm whether the selected variable is a rate or accumulated amount. |
| tasmin | K; verify the selected distribution. | Daily minimum near-surface temperature. |
| tasmax | K; verify the selected distribution. | Daily maximum near-surface temperature. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CMIP5 |
| Model Count | 32 |
| Members | Model/member/scenario availability must be checked in the selected archive. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://loca.ucsd.edu/ |
| Data | https://loca.ucsd.edu/ |
| Format | NetCDF; inspect the selected distribution. |
| License | Dataset reuse terms were not verified. Consult the provider; the article or code license is not a data license. |
| License Url | (not recorded) |
| Subsetting | Download access is documented; a server-side spatial/time subsetting service has not been verified. |
| Cost | Public access is documented. Download fees and platform processing costs have not been independently checked. |

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- pierce-loca

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, LOCA versions 1 and 2 row; generations separated in this catalog. |
| https://loca.ucsd.edu/ | CMIP5 description: 32 models, domain, native grid, and historical/future periods. |
| https://github.com/NCAR/hydro-climate-evaluation/blob/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/README.md#downscaling-methods | LOCA_8th is an evaluation label, not evidence of the native archive resolution. |
| https://v2.cal-adapt.org/tools/extended-drought/ | Data description and scenario construction. |

## Generation

- CMIP5

## Dates

| Field | Value |
| --- | --- |
| Created | (not recorded) |
| Released | (not recorded) |
| Publication | (not recorded) |
| Notes | Exact dataset creation and release dates were not established from the sources reviewed. A paper date, repository timestamp, or simulation year is not a dataset creation date. |

## Existing Uses

| Description | Url |
| --- | --- |
| Cal-Adapt extended-drought tool describes CMIP5 LOCA projections as inputs; the tool uses selected scenarios and transformations. | https://v2.cal-adapt.org/tools/extended-drought/ |

## Funding

No entries.

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider documentation | https://loca.ucsd.edu/ | Product descriptions and links maintained by the provider. |
| Cal-Adapt extended drought | https://v2.cal-adapt.org/tools/extended-drought/ | An application of the CMIP5 LOCA archive. |

## Aliases

- LOCA

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | LOCA CMIP5 evaluation guidance |
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

Useful as a candidate when reproducing studies built on CMIP5 LOCA. Test precipitation occurrence and spatial dependence at the basin scale.

## Limits and evaluation checks

The NCAR map label LOCA_8th does not identify this native 1/16-degree archive. Obtain the evaluation preprocessing and version before transferring its results. Do not use LOCA2 release notes to describe this product.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@pierce-loca]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
