# GDPCIR

| Field | Value |
| --- | --- |
| Provider | Climate Impact Lab; Microsoft Planetary Computer distribution |
| Verified On | 2026-09-11 |
| Id | gdpcir |
| Name | GDPCIR |
| Version | Dataset described by Gergel et al. (2024); collection licenses vary by model. |
| Summary | Global daily CMIP6 projections using quantile delta mapping and localized-analog downscaling. |
| Source Scope | Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested. |
| Kind | downscaled-projection |

## Method

| Field | Value |
| --- | --- |
| Family | Statistical downscaling |
| Description | Quantile Delta Mapping (QDM), then Quantile-Preserving Localized-Analog Downscaling (QPLAD). |
| Reference Dataset | ERA5 |
| Training Period | 1995-2014 |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Global quarter-degree grid; verify application masks. |
| Grid | Regular latitude-longitude grid. |
| Timestep | Daily |
| Historical | 1950-2014 |
| Future | 2015-2099 or 2100, depending on the source GCM. |
| Calendar | 365-day record excluding leap days, according to the Planetary Computer collection description. |

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
| pr | Daily cumulative precipitation; verify units in the selected Zarr store. | Daily precipitation. |
| tasmin | K; verify the selected distribution. | Daily minimum near-surface temperature. |
| tasmax | K; verify the selected distribution. | Daily maximum near-surface temperature. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CMIP6 |
| Model Count | 25 |
| Members | One selected ensemble member per GCM; scenario availability varies. |

### Member Counts

| Model | Count | Scope | Source Url |
| --- | --- | --- | --- |
| Each GCM in the described archive | 1 | A selected member for each GCM; available scenarios differ. | https://gmd.copernicus.org/articles/17/191/2024/ |

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://github.com/ClimateImpactLab/downscaleCMIP6 |
| Data | https://planetarycomputer.microsoft.com/dataset/group/cil-gdpcir/ |
| Format | Partitioned Zarr stores on Microsoft Planetary Computer. |
| License | Model-dependent collections: CC0-1.0 or CC-BY-4.0. Check the collection containing each selected model. |
| License Url | https://planetarycomputer.microsoft.com/dataset/cil-gdpcir-cc-by |
| Subsetting | Chunked Zarr stores allow client-side selection of variables, regions, and time. This is not a claim of a server-side subset API. |
| Cost | The paper describes freely available data. User compute, storage, or platform charges are not estimated. |

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- gergel-gdpcir

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, Climate Impacts Lab / Quantile Delta Mapping row. |
| https://gmd.copernicus.org/articles/17/191/2024/ | Abstract and sections 2-3: reference period, models, scenarios, and method. Publication date, section 2.1, Results, code/data availability, and Financial support. |
| https://planetarycomputer.microsoft.com/api/stac/v1/collections/cil-gdpcir-cc-by | Collection description: licenses, daily calendar, end-year variation, and Zarr layout. |

## Generation

- CMIP6

## Dates

| Field | Value |
| --- | --- |
| Created | (not recorded) |
| Released | (not recorded) |
| Publication | 2024-01-11 |
| Notes | Publication date of Gergel et al.; not a creation or release timestamp for all Zarr stores. |

## Existing Uses

| Description | Url |
| --- | --- |
| The dataset paper analyzes climate trends and quantile changes at global, city, and administrative-region scales. | https://gmd.copernicus.org/articles/17/191/2024/ |

## Funding

| Agency | Award | Notes | Source Url |
| --- | --- | --- | --- |
| Rockefeller Foundation | 2021 NFR 005 | Financial support listed in the paper. | https://gmd.copernicus.org/articles/17/191/2024/ |

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider documentation | https://github.com/ClimateImpactLab/downscaleCMIP6 | Product descriptions and links maintained by the provider. |
| Downscaling code | https://github.com/ClimateImpactLab/downscaleCMIP6 | QDM/QPLAD pipeline and reproducibility resources. |

## Aliases

No entries.

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | GDPCIR evaluation guidance |
| Summary | Draft interpretation of documented product properties; expert review is pending. |

### Review

| Field | Value |
| --- | --- |
| Status | draft |
| Updated | 2026-09-11 |

#### Contributors

- Initial AI-assisted draft

### Evidence

| Statement | Paper | Locator | Scope |
| --- | --- | --- | --- |
| The published workflow applies QDM followed by QPLAD using ERA5 over 1995-2014. | gergel-gdpcir | Abstract and sections 2-3. | Method and training design of the 2024 release; not a validation of every precipitation metric. |

## Guidance

## Application guidance

Consider this product for studies requiring global daily coverage and an explicit quantile-trend preservation method. Compare against other reference datasets as well as ERA5.

## Limits and evaluation checks

Test whether the target statistic is preserved after spatial and temporal aggregation. A method designed to preserve GCM quantile changes cannot establish the accuracy of those future changes. Keep model-specific licenses with downloaded subsets.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@gergel-gdpcir]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
