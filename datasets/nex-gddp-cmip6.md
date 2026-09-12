# NEX-GDDP-CMIP6

| Field | Value |
| --- | --- |
| Id | nex-gddp-cmip6 |
| Name | NEX-GDDP-CMIP6 |
| Version | Original archive described in 2022; later v1 revisions and v2 exist and require separate review. |
| Summary | Global daily CMIP6 projections using bias correction and spatial disaggregation at 0.25 degrees. |
| Provider | NASA Earth Exchange / NASA Center for Climate Simulation |
| Verified On | 2026-09-11 |
| Source Scope | Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested. |
| Kind | downscaled-projection |

## Method

| Field | Value |
| --- | --- |
| Family | Statistical downscaling |
| Description | Bias correction and spatial disaggregation (BCSD). |
| Reference Dataset | Global Meteorological Forcing Dataset (GMFD). |
| Training Period | 1960-2014 reference data in the 2022 description. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Global land coverage, 60 degrees south to 90 degrees north; check masks. |
| Grid | Regular latitude-longitude grid. |
| Timestep | Daily |
| Historical | 1950-2014 |
| Future | 2015-2100 |
| Calendar | Check the selected file time coordinate and technical-note handling of model calendars. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 0.25 |
| Unit | degrees |

### Scenarios

- SSP1-2.6
- SSP2-4.5
- SSP3-7.0
- SSP5-8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| pr | kg m-2 s-1 (daily mean precipitation flux) | Convert to daily accumulation using the file time interval. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CMIP6 |
| Model Count | 35 |
| Members | One variant per model in the original 2022 archive; do not interpret model count as within-model member count. |

### Member Counts

| Model | Count | Scope | Source Url |
| --- | --- | --- | --- |
| Each GCM in the original 2022 archive | 1 | One selected variant per model in the described release; later archives require a new inventory. | https://www.nature.com/articles/s41597-022-01393-4 |

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://www.nccs.nasa.gov/data-collections/nex-gddp-cmip6/ |
| Data | https://registry.opendata.aws/nex-gddp-cmip6/ |
| Format | NetCDF4; AWS S3 and NCCS THREDDS access. |
| License | CC BY-SA 4.0 for the archive described in the 2022 paper; confirm terms for the selected release. |
| License Url | https://creativecommons.org/licenses/by-sa/4.0/ |
| Subsetting | NCCS THREDDS NetCDF Subset Service supports variable, latitude/longitude, and time selection; public S3 offers file access. |
| Cost | AWS registry documents public S3 access without an AWS account. Compute and storage costs for user analyses are not estimated. |

## References

- thrasher

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC9163132/ | Methods, Data Records, and Usage Notes (original archive). |
| https://www.nccs.nasa.gov/data-collections/nex-gddp-cmip6/ | Coverage, resolution, access, and links to v1/v2 technical notes. Subsetting examples. |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, combined NEX-GDDP CMIP5/CMIP6 row. Existing version-specific provider metadata takes precedence. |
| https://www.nature.com/articles/s41597-022-01393-4 | Publication date, Methods, Technical Validation, and Acknowledgements. |
| https://registry.opendata.aws/nex-gddp-cmip6/ | Public S3 access. |

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## Generation

- CMIP6

## Dates

| Field | Value |
| --- | --- |
| Created | (not recorded) |
| Released | (not recorded) |
| Publication | 2022-06-03 |
| Notes | Date of the Thrasher et al. dataset paper, not the data creation date or a later archive revision. |

## Existing Uses

| Description | Url |
| --- | --- |
| Dataset paper evaluates the original downscaled archive. This is documented technical validation, not proof of suitability for all applications. | https://www.nature.com/articles/s41597-022-01393-4 |

## Funding

| Agency | Award | Notes | Source Url |
| --- | --- | --- | --- |
| NASA | (not recorded) | NASA Earth Exchange workplan 2018-2022 at Ames Research Center. | https://www.nature.com/articles/s41597-022-01393-4 |

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider documentation | https://www.nccs.nasa.gov/data-collections/nex-gddp-cmip6/ | Product descriptions and links maintained by the provider. |
| NCCS subsetting examples | https://www.nccs.nasa.gov/data-collections/nex-gddp-cmip6/ | THREDDS and NetCDF Subset Service access examples. |

## Aliases

- NASA-NEX-GDDP

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | NEX-GDDP-CMIP6 evaluation guidance |
| Summary | Provisional application guidance; evaluate the selected product release. |

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

Consider this archive when daily projections over multiple countries or broad domains are needed. Compare the 0.25-degree spatial support with the basin or site target, and test wet-day frequency and extremes rather than relying only on mean agreement.

## Version and evaluation checks

This entry describes the original archive in [@thrasher]. The provider also distributes revised data and a v2 technical note. Pin the downloaded release and inspect its changes before using this entry's metadata.

Keep climate-model spread separate from internal variability. One variant per model does not supply a large initial-condition ensemble for each model. Daily output does not identify hourly extremes.

## Expert contribution needed

Add application-specific recommendations and failures with product version, reference data, metrics, period, and region. The advice here is an AI-assisted draft awaiting expert review.
