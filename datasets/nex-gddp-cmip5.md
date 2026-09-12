# NEX-GDDP CMIP5

| Field | Value |
| --- | --- |
| Provider | NASA Earth Exchange / Climate Analytics Group / NCCS |
| Verified On | 2026-09-11 |
| Id | nex-gddp-cmip5 |
| Name | NEX-GDDP CMIP5 |
| Version | CMIP5 archive, NCCS Version 1 description. |
| Summary | Global daily BCSD projections from 21 CMIP5 models. |
| Guidance | product-guidance/nex-gddp-cmip5.md |
| Source Scope | Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested. |
| Kind | downscaled-projection |

## Method

| Field | Value |
| --- | --- |
| Family | Statistical downscaling |
| Description | Bias correction and spatial disaggregation (BCSD). |
| Reference Dataset | Global Meteorological Forcing Dataset (GMFD), as listed in the NCAR matrix. |
| Training Period | Not recorded in the sources checked; inspect the release documentation. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Global; verify land mask and spatial coverage in the selected files. |
| Grid | Regular latitude-longitude grid. |
| Timestep | Daily |
| Historical | 1950-2005 |
| Future | 2006-2099 in NCCS summary; Earth Engine lists through 2100. Check the selected model/distribution. |
| Calendar | Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 0.25 |
| Unit | degrees |

### Scenarios

- RCP4.5
- RCP8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| pr | kg m-2 s-1 (daily mean precipitation flux in Earth Engine) | Precipitation. Confirm whether the selected variable is a rate or accumulated amount. |
| tasmin | K; verify the selected distribution. | Daily minimum near-surface temperature. |
| tasmax | K; verify the selected distribution. | Daily maximum near-surface temperature. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CMIP5 |
| Model Count | 21 |
| Members | Model/member/scenario availability must be checked in the selected archive. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://www.nccs.nasa.gov/nex-gddp/ |
| Data | https://registry.opendata.aws/nasanex/ |
| Format | NetCDF4 classic; also distributed through Earth Engine. |
| License | Public domain, as stated by the Earth Engine dataset distribution. |
| License Url | https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-GDDP |
| Subsetting | NCCS lists THREDDS search, subset, download, and visualization services. Service operation was not tested. |
| Cost | Data are public domain. Public S3 distribution is listed; optional platform and analysis costs are not estimated. |

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- thrasher-temperature

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, NEX-GDDP combined CMIP5/CMIP6 row; this entry includes only CMIP5. |
| https://www.nccs.nasa.gov/nex-gddp/ | Description and Summary disagree on final year and contain a monthly/daily wording inconsistency. Data Access: service capabilities. |
| https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-GDDP | Daily cadence, precipitation units, model list, date range, and terms of use. |

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

No entries.

## Funding

No entries.

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider documentation | https://www.nccs.nasa.gov/nex-gddp/ | Product descriptions and links maintained by the provider. |
| NASA NEX public archive | https://registry.opendata.aws/nasanex/ | Archive access and distribution details. |

## Aliases

- NASA-NEX-GDDP

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | NEX-GDDP CMIP5 evaluation guidance |
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

Consider this CMIP5 archive for reproducing global daily impact studies. Check wet-day frequency and daily extremes separately from average precipitation.

## Limits and evaluation checks

NCCS contains inconsistent daily/monthly and final-year wording. The Earth Engine catalog specifies daily data and a daily-mean precipitation flux. Verify the chosen files and do not assume the NCAR NASA-NEX label uniquely identifies this release.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@thrasher-temperature]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
