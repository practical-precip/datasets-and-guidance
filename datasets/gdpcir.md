# GDPCIR

- __Provider:__ Climate Impact Lab; Microsoft Planetary Computer distribution
- __Verified On:__ 2026-09-11
- __Id:__ gdpcir
- __Name:__ GDPCIR
- __Version:__ Dataset described by Gergel et al. (2024); collection licenses vary by model.
- __Summary:__ Global daily CMIP6 projections using quantile delta mapping and localized-analog downscaling.
- __Source Scope:__ Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested.
- __Kind:__ downscaled-projection

## Method

- __Family:__ Statistical downscaling
- __Description:__ Quantile Delta Mapping (QDM), then Quantile-Preserving Localized-Analog Downscaling (QPLAD).
- __Reference Dataset:__ ERA5
- __Training Period:__ 1995-2014

## Coverage

- __Domain:__ Global quarter-degree grid; verify application masks.
- __Grid:__ Regular latitude-longitude grid.
- __Timestep:__ Daily
- __Historical:__ 1950-2014
- __Future:__ 2015-2099 or 2100, depending on the source GCM.
- __Calendar:__ 365-day record excluding leap days, according to the Planetary Computer collection description.

### Grid Spacing

- __Value:__ 0.25
- __Unit:__ degrees

### Scenarios

- SSP1-2.6
- SSP2-4.5
- SSP3-7.0
- SSP5-8.5

### Variables

1. __Name:__ pr
   - __Unit:__ Daily cumulative precipitation; verify units in the selected Zarr store.
   - __Description:__ Daily precipitation.

2. __Name:__ tasmin
   - __Unit:__ K; verify the selected distribution.
   - __Description:__ Daily minimum near-surface temperature.

3. __Name:__ tasmax
   - __Unit:__ K; verify the selected distribution.
   - __Description:__ Daily maximum near-surface temperature.

## Ensemble

- __Driving Models:__ CMIP6
- __Model Count:__ 25
- __Members:__ One selected ensemble member per GCM; scenario availability varies.

### Member Counts

1. __Model:__ Each GCM in the described archive
   - __Count:__ 1
   - __Scope:__ A selected member for each GCM; available scenarios differ.
   - __Source Url:__ https://gmd.copernicus.org/articles/17/191/2024/

## Access

- __Landing Page:__ https://github.com/ClimateImpactLab/downscaleCMIP6
- __Data:__ https://planetarycomputer.microsoft.com/dataset/group/cil-gdpcir/
- __Format:__ Partitioned Zarr stores on Microsoft Planetary Computer.
- __License:__ Model-dependent collections: CC0-1.0 or CC-BY-4.0. Check the collection containing each selected model.
- __License Url:__ https://planetarycomputer.microsoft.com/dataset/cil-gdpcir-cc-by
- __Subsetting:__ Chunked Zarr stores allow client-side selection of variables, regions, and time. This is not a claim of a server-side subset API.
- __Cost:__ The paper describes freely available data. User compute, storage, or platform charges are not estimated.

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- gergel-gdpcir

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, Climate Impacts Lab / Quantile Delta Mapping row.

2. __Url:__ https://gmd.copernicus.org/articles/17/191/2024/
   - __Locator:__ Abstract and sections 2-3: reference period, models, scenarios, and method. Publication date, section 2.1, Results, code/data availability, and Financial support.

3. __Url:__ https://planetarycomputer.microsoft.com/api/stac/v1/collections/cil-gdpcir-cc-by
   - __Locator:__ Collection description: licenses, daily calendar, end-year variation, and Zarr layout.

## Generation

- CMIP6

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ 2024-01-11
- __Notes:__ Publication date of Gergel et al.; not a creation or release timestamp for all Zarr stores.

## Existing Uses

1. __Description:__ The dataset paper analyzes climate trends and quantile changes at global, city, and administrative-region scales.
   - __Url:__ https://gmd.copernicus.org/articles/17/191/2024/

## Funding

1. __Agency:__ Rockefeller Foundation
   - __Award:__ 2021 NFR 005
   - __Notes:__ Financial support listed in the paper.
   - __Source Url:__ https://gmd.copernicus.org/articles/17/191/2024/

## Associated Resources

1. __Label:__ Provider documentation
   - __Url:__ https://github.com/ClimateImpactLab/downscaleCMIP6
   - __Description:__ Product descriptions and links maintained by the provider.

2. __Label:__ Downscaling code
   - __Url:__ https://github.com/ClimateImpactLab/downscaleCMIP6
   - __Description:__ QDM/QPLAD pipeline and reproducibility resources.

## Aliases

No entries.

## Expert Guidance

- __Title:__ GDPCIR evaluation guidance
- __Summary:__ Draft interpretation of documented product properties; expert review is pending.

### Review

- __Status:__ draft
- __Updated:__ 2026-09-11

#### Contributors

- Initial AI-assisted draft

### Evidence

1. __Statement:__ The published workflow applies QDM followed by QPLAD using ERA5 over 1995-2014.
   - __Paper:__ gergel-gdpcir
   - __Locator:__ Abstract and sections 2-3.
   - __Scope:__ Method and training design of the 2024 release; not a validation of every precipitation metric.

## Guidance

## Application guidance

Consider this product for studies requiring global daily coverage and an explicit quantile-trend preservation method. Compare against other reference datasets as well as ERA5.

## Limits and evaluation checks

Test whether the target statistic is preserved after spatial and temporal aggregation. A method designed to preserve GCM quantile changes cannot establish the accuracy of those future changes. Keep model-specific licenses with downloaded subsets.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@gergel-gdpcir]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
