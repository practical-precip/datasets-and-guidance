# NEX-DCP30

| Field | Value |
| --- | --- |
| Provider | NASA Earth Exchange / NCCS |
| Verified On | 2026-09-11 |
| Id | nex-dcp30 |
| Name | NEX-DCP30 |
| Version | NCCS Version 1, CMIP5 monthly archive. |
| Summary | Monthly projections on a 30 arc-second CONUS grid for climate summaries. |
| Guidance | product-guidance/nex-dcp30.md |
| Source Scope | Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested. |
| Kind | downscaled-projection |

## Method

| Field | Value |
| --- | --- |
| Family | Statistical downscaling |
| Description | Bias correction and spatial disaggregation (BCSD). |
| Reference Dataset | PRISM |
| Training Period | Not recorded in the sources checked; inspect the release documentation. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Conterminous United States |
| Grid | Regular latitude-longitude grid. |
| Timestep | Monthly |
| Historical | 1950-2005 |
| Future | 2006-2099 in NCCS documentation; inspect individual records. |
| Calendar | Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 30 |
| Unit | arc-seconds (1/120 degree) |

### Scenarios

- RCP2.6
- RCP4.5
- RCP6.0
- RCP8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| pr | Check the monthly precipitation rate/amount convention in the selected file. | Monthly precipitation, not a daily event series. |
| tasmin | K; verify the selected distribution. | Monthly average of daily minimum near-surface temperature. |
| tasmax | K; verify the selected distribution. | Monthly average of daily maximum near-surface temperature. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CMIP5 |
| Model Count | 33 |
| Members | Model/member/scenario availability must be checked in the selected archive. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://www.nccs.nasa.gov/nex-dcp30/ |
| Data | https://registry.opendata.aws/nasanex/ |
| Format | NetCDF4 classic; Earth Engine distribution also available. |
| License | Public domain, as stated by the Earth Engine dataset distribution. |
| License Url | https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-DCP30 |
| Subsetting | NCCS lists THREDDS search, subset, download, and visualization services. Service operation was not tested. |
| Cost | Data are public domain. Public S3 distribution is listed; optional platform and analysis costs are not estimated. |

## Relevant Rows

- annual-precipitation

## References

- thrasher-dcp30

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, NEX-DCP30 row: method and reference data. |
| https://www.nccs.nasa.gov/nex-dcp30/ | Description and Summary: 33 models, monthly cadence, 30 arc-second grid, time ranges. Data Access: service capabilities. |
| https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-DCP30 | Terms of Use and dataset citation. |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC5819482/ | Data Records: NASA NEX-DCP30. |

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
| Compared with other downscaled climate products in a Pacific Northwest intercomparison. | https://pmc.ncbi.nlm.nih.gov/articles/PMC5819482/ |

## Funding

No entries.

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider documentation | https://www.nccs.nasa.gov/nex-dcp30/ | Product descriptions and links maintained by the provider. |
| NASA NEX public archive | https://registry.opendata.aws/nasanex/ | Archive access and distribution details. |

## Aliases

- NASA-NEX-DCP30

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | NEX-DCP30 evaluation guidance |
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

Consider this product for monthly or annual climate summaries. Integrate precipitation rates over the correct month length before computing totals.

## Limits and evaluation checks

Monthly data cannot supply wet/dry spells or annual maximum daily precipitation. The fine spatial grid does not restore missing daily or hourly variability.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@thrasher-dcp30]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
