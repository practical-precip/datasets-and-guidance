# NEX-GDDP CMIP5

- __Provider:__ NASA Earth Exchange / Climate Analytics Group / NCCS
- __Verified On:__ 2026-09-11
- __Id:__ nex-gddp-cmip5
- __Name:__ NEX-GDDP CMIP5
- __Version:__ CMIP5 archive, NCCS Version 1 description.
- __Summary:__ Global daily BCSD projections from 21 CMIP5 models.
- __Source Scope:__ Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested.
- __Kind:__ downscaled-projection

## Method

- __Family:__ Statistical downscaling
- __Description:__ Bias correction and spatial disaggregation (BCSD).
- __Reference Dataset:__ Global Meteorological Forcing Dataset (GMFD), as listed in the NCAR matrix.
- __Training Period:__ Not recorded in the sources checked; inspect the release documentation.

## Coverage

- __Domain:__ Global; verify land mask and spatial coverage in the selected files.
- __Grid:__ Regular latitude-longitude grid.
- __Timestep:__ Daily
- __Historical:__ 1950-2005
- __Future:__ 2006-2099 in NCCS summary; Earth Engine lists through 2100. Check the selected model/distribution.
- __Calendar:__ Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products.

### Grid Spacing

- __Value:__ 0.25
- __Unit:__ degrees

### Scenarios

- RCP4.5
- RCP8.5

### Variables

1. __Name:__ pr
   - __Unit:__ kg m-2 s-1 (daily mean precipitation flux in Earth Engine)
   - __Description:__ Precipitation. Confirm whether the selected variable is a rate or accumulated amount.

2. __Name:__ tasmin
   - __Unit:__ K; verify the selected distribution.
   - __Description:__ Daily minimum near-surface temperature.

3. __Name:__ tasmax
   - __Unit:__ K; verify the selected distribution.
   - __Description:__ Daily maximum near-surface temperature.

## Ensemble

- __Driving Models:__ CMIP5
- __Model Count:__ 21
- __Members:__ Model/member/scenario availability must be checked in the selected archive.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://www.nccs.nasa.gov/nex-gddp/
- __Data:__ https://registry.opendata.aws/nasanex/
- __Format:__ NetCDF4 classic; also distributed through Earth Engine.
- __License:__ Public domain, as stated by the Earth Engine dataset distribution.
- __License Url:__ https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-GDDP
- __Subsetting:__ NCCS lists THREDDS search, subset, download, and visualization services. Service operation was not tested.
- __Cost:__ Data are public domain. Public S3 distribution is listed; optional platform and analysis costs are not estimated.

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- thrasher-temperature

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, NEX-GDDP combined CMIP5/CMIP6 row; this entry includes only CMIP5.

2. __Url:__ https://www.nccs.nasa.gov/nex-gddp/
   - __Locator:__ Description and Summary disagree on final year and contain a monthly/daily wording inconsistency. Data Access: service capabilities.

3. __Url:__ https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-GDDP
   - __Locator:__ Daily cadence, precipitation units, model list, date range, and terms of use.

## Generation

- CMIP5

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ (not recorded)
- __Notes:__ Exact dataset creation and release dates were not established from the sources reviewed. A paper date, repository timestamp, or simulation year is not a dataset creation date.

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

1. __Label:__ Provider documentation
   - __Url:__ https://www.nccs.nasa.gov/nex-gddp/
   - __Description:__ Product descriptions and links maintained by the provider.

2. __Label:__ NASA NEX public archive
   - __Url:__ https://registry.opendata.aws/nasanex/
   - __Description:__ Archive access and distribution details.

## Aliases

- NASA-NEX-GDDP

## Expert Guidance

- __Title:__ NEX-GDDP CMIP5 evaluation guidance
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

Consider this CMIP5 archive for reproducing global daily impact studies. Check wet-day frequency and daily extremes separately from average precipitation.

## Limits and evaluation checks

NCCS contains inconsistent daily/monthly and final-year wording. The Earth Engine catalog specifies daily data and a daily-mean precipitation flux. Verify the chosen files and do not assume the NCAR NASA-NEX label uniquely identifies this release.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@thrasher-temperature]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
