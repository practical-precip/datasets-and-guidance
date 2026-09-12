# MACAv2-METDATA

- __Provider:__ Climatology Lab / University of Idaho; Northwest Knowledge Network distribution
- __Verified On:__ 2026-09-11
- __Id:__ maca-metdata
- __Name:__ MACAv2-METDATA
- __Version:__ CMIP5 MACAv2; provider-described archive.
- __Summary:__ Daily constructed-analog projections with a distinct observational training dataset.
- __Source Scope:__ Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested.
- __Kind:__ downscaled-projection

## Method

- __Family:__ Statistical downscaling
- __Description:__ Multivariate Adaptive Constructed Analogs (MACA).
- __Reference Dataset:__ gridMET (METDATA)
- __Training Period:__ 1979-2012 reference record. This is the available reference-record span, not a confirmed calibration window. The provider FAQ also describes 1979-2009 training statistics; confirm the exact MACAv2 configuration.

## Coverage

- __Domain:__ CONUS-plus; verify the selected grid mask. Livneh coverage includes the Canadian Columbia River basin.
- __Grid:__ Regular latitude-longitude grid.
- __Timestep:__ Daily
- __Historical:__ 1950-2005
- __Future:__ 2006-2100; some model records end in 2099.
- __Calendar:__ Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products.

### Grid Spacing

- __Value:__ 0.041666666666666664
- __Unit:__ degrees (1/24 degree, approximately 4 km)

### Scenarios

- RCP4.5
- RCP8.5

### Variables

1. __Name:__ pr
   - __Unit:__ mm (daily amount in the Earth Engine distribution)
   - __Description:__ Precipitation. Confirm whether the selected variable is a rate or accumulated amount.

2. __Name:__ tasmin
   - __Unit:__ K; verify the selected distribution.
   - __Description:__ Daily minimum near-surface temperature.

3. __Name:__ tasmax
   - __Unit:__ K; verify the selected distribution.
   - __Description:__ Daily maximum near-surface temperature.

## Ensemble

- __Driving Models:__ CMIP5
- __Model Count:__ 20
- __Members:__ Model/member/scenario availability must be checked in the selected archive.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://www.climatologylab.org/maca.html
- __Data:__ https://www.climatologylab.org/maca.html
- __Format:__ NetCDF4 and THREDDS/OPeNDAP; METDATA also has Earth Engine and USGS access.
- __License:__ MACA datasets are public domain in the US and carry a CC0 1.0 dedication unless otherwise noted; cite the dataset and acquisition date.
- __License Url:__ https://www.climatologylab.org/maca.html
- __Subsetting:__ Provider links point CSV extraction, regional NetCDF downloads, and THREDDS/OPeNDAP access.
- __Cost:__ Public-domain data with provider download services. Costs of optional analysis platforms are not established here.

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- abatzoglou-maca

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, constructed analog techniques, MACA row.

2. __Url:__ https://www.climatologylab.org/maca.html
   - __Locator:__ Datasets, data services, and limitations. Reference periods differ between variants. FAQ training-statistics wording and Licensing section. Download interfaces, FAQ, and Licensing: subsetting and funding attribution.

3. __Url:__ https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_MACAv2_METDATA
   - __Locator:__ Terms of Use apply to MACA datasets; variable units here apply specifically to METDATA.

4. __Url:__ https://pmc.ncbi.nlm.nih.gov/articles/PMC5819482/
   - __Locator:__ Data Records and comparison methods: MACAv2-METDATA, MACAv2-LIVNEH, and NEX-DCP30.

## Generation

- CMIP5

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ (not recorded)
- __Notes:__ Exact dataset creation and release dates were not established from the sources reviewed. A paper date, repository timestamp, or simulation year is not a dataset creation date.

## Existing Uses

1. __Description:__ Included in a published comparison of downscaled climate datasets for the Pacific Northwest; this is an evaluation use, not an endorsement.
   - __Url:__ https://pmc.ncbi.nlm.nih.gov/articles/PMC5819482/

## Funding

1. __Agency:__ US government (specific agency not identified)
   - __Award:__ (not recorded)
   - __Notes:__ Provider Licensing section identifies government funding without listing the award.
   - __Source Url:__ https://www.climatologylab.org/maca.html

## Associated Resources

1. __Label:__ Provider documentation
   - __Url:__ https://www.climatologylab.org/maca.html
   - __Description:__ Product descriptions and links maintained by the provider.

## Aliases

- MACAv2
- MACA

## Expert Guidance

- __Title:__ MACAv2-METDATA evaluation guidance
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

Compare annual water balance, wet-day occurrence, and daily extremes before selecting this product for a basin. Where other meteorological inputs are needed, check variable availability for every selected model.

## Limits and evaluation checks

Keep the gridMET-trained variant separate from MACAv2-LIVNEH. Compare simulations with observations through climate statistics, not same-date storm matches.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@abatzoglou-maca]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
