# NEX-DCP30

- __Provider:__ NASA Earth Exchange / NCCS
- __Verified On:__ 2026-09-11
- __Id:__ nex-dcp30
- __Name:__ NEX-DCP30
- __Version:__ NCCS Version 1, CMIP5 monthly archive.
- __Summary:__ Monthly projections on a 30 arc-second CONUS grid for climate summaries.
- __Source Scope:__ Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested.
- __Kind:__ downscaled-projection

## Method

- __Family:__ Statistical downscaling
- __Description:__ Bias correction and spatial disaggregation (BCSD).
- __Reference Dataset:__ PRISM
- __Training Period:__ Not recorded in the sources checked; inspect the release documentation.

## Coverage

- __Domain:__ Conterminous United States
- __Grid:__ Regular latitude-longitude grid.
- __Timestep:__ Monthly
- __Historical:__ 1950-2005
- __Future:__ 2006-2099 in NCCS documentation; inspect individual records.
- __Calendar:__ Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products.

### Grid Spacing

- __Value:__ 30
- __Unit:__ arc-seconds (1/120 degree)

### Scenarios

- RCP2.6
- RCP4.5
- RCP6.0
- RCP8.5

### Variables

1. __Name:__ pr
   - __Unit:__ Check the monthly precipitation rate/amount convention in the selected file.
   - __Description:__ Monthly precipitation, not a daily event series.

2. __Name:__ tasmin
   - __Unit:__ K; verify the selected distribution.
   - __Description:__ Monthly average of daily minimum near-surface temperature.

3. __Name:__ tasmax
   - __Unit:__ K; verify the selected distribution.
   - __Description:__ Monthly average of daily maximum near-surface temperature.

## Ensemble

- __Driving Models:__ CMIP5
- __Model Count:__ 33
- __Members:__ Model/member/scenario availability must be checked in the selected archive.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://www.nccs.nasa.gov/nex-dcp30/
- __Data:__ https://registry.opendata.aws/nasanex/
- __Format:__ NetCDF4 classic; Earth Engine distribution also available.
- __License:__ Public domain, as stated by the Earth Engine dataset distribution.
- __License Url:__ https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-DCP30
- __Subsetting:__ NCCS lists THREDDS search, subset, download, and visualization services. Service operation was not tested.
- __Cost:__ Data are public domain. Public S3 distribution is listed; optional platform and analysis costs are not estimated.

## Relevant Rows

- annual-precipitation

## References

- thrasher-dcp30

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, NEX-DCP30 row: method and reference data.

2. __Url:__ https://www.nccs.nasa.gov/nex-dcp30/
   - __Locator:__ Description and Summary: 33 models, monthly cadence, 30 arc-second grid, time ranges. Data Access: service capabilities.

3. __Url:__ https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-DCP30
   - __Locator:__ Terms of Use and dataset citation.

4. __Url:__ https://pmc.ncbi.nlm.nih.gov/articles/PMC5819482/
   - __Locator:__ Data Records: NASA NEX-DCP30.

## Generation

- CMIP5

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ (not recorded)
- __Notes:__ Exact dataset creation and release dates were not established from the sources reviewed. A paper date, repository timestamp, or simulation year is not a dataset creation date.

## Existing Uses

1. __Description:__ Compared with other downscaled climate products in a Pacific Northwest intercomparison.
   - __Url:__ https://pmc.ncbi.nlm.nih.gov/articles/PMC5819482/

## Funding

No entries.

## Associated Resources

1. __Label:__ Provider documentation
   - __Url:__ https://www.nccs.nasa.gov/nex-dcp30/
   - __Description:__ Product descriptions and links maintained by the provider.

2. __Label:__ NASA NEX public archive
   - __Url:__ https://registry.opendata.aws/nasanex/
   - __Description:__ Archive access and distribution details.

## Aliases

- NASA-NEX-DCP30

## Expert Guidance

- __Title:__ NEX-DCP30 evaluation guidance
- __Summary:__ Draft interpretation of documented product properties; expert review is pending.

### Review

- __Status:__ draft
- __Updated:__ 2026-09-11

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
