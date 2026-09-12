# MACAv2-LIVNEH

| Field | Value |
| --- | --- |
| Provider | Climatology Lab / University of Idaho; Northwest Knowledge Network distribution |
| Verified On | 2026-09-11 |
| Id | maca-livneh |
| Name | MACAv2-LIVNEH |
| Version | CMIP5 MACAv2; provider-described archive. |
| Summary | Daily constructed-analog projections with a distinct observational training dataset. |
| Guidance | product-guidance/maca-livneh.md |
| Source Scope | Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested. |
| Kind | downscaled-projection |

## Method

| Field | Value |
| --- | --- |
| Family | Statistical downscaling |
| Description | Multivariate Adaptive Constructed Analogs (MACA). |
| Reference Dataset | Livneh et al. (2013) |
| Training Period | 1950-2011 reference record. This is the available reference-record span, not a confirmed calibration window. The provider FAQ also describes 1979-2009 training statistics; confirm the exact MACAv2 configuration. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | CONUS-plus; verify the selected grid mask. Livneh coverage includes the Canadian Columbia River basin. |
| Grid | Regular latitude-longitude grid. |
| Timestep | Daily |
| Historical | 1950-2005 |
| Future | 2006-2100; some model records end in 2099. |
| Calendar | Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 0.0625 |
| Unit | degrees (1/16 degree, approximately 6 km) |

### Scenarios

- RCP4.5
- RCP8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| pr | Verify daily precipitation units in the selected NetCDF archive. | Precipitation. Confirm whether the selected variable is a rate or accumulated amount. |
| tasmin | K; verify the selected distribution. | Daily minimum near-surface temperature. |
| tasmax | K; verify the selected distribution. | Daily maximum near-surface temperature. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CMIP5 |
| Model Count | 20 |
| Members | Model/member/scenario availability must be checked in the selected archive. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://www.climatologylab.org/maca.html |
| Data | https://www.climatologylab.org/maca.html |
| Format | NetCDF4 and THREDDS/OPeNDAP; METDATA also has Earth Engine and USGS access. |
| License | MACA datasets are public domain in the US and carry a CC0 1.0 dedication unless otherwise noted; cite the dataset and acquisition date. |
| License Url | https://www.climatologylab.org/maca.html |
| Subsetting | Provider links point CSV extraction, regional NetCDF downloads, and THREDDS/OPeNDAP access. |
| Cost | Public-domain data with provider download services. Costs of optional analysis platforms are not established here. |

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- abatzoglou-maca

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, constructed analog techniques, MACA row. |
| https://www.climatologylab.org/maca.html | Datasets, data services, and limitations. Reference periods differ between variants. FAQ training-statistics wording and Licensing section. Download interfaces, FAQ, and Licensing: subsetting and funding attribution. |
| https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_MACAv2_METDATA | Terms of Use apply to MACA datasets; variable units here apply specifically to METDATA. |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC5819482/ | Data Records and comparison methods: MACAv2-METDATA, MACAv2-LIVNEH, and NEX-DCP30. |

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
| Included in a published comparison of downscaled climate datasets for the Pacific Northwest; this is an evaluation use, not an endorsement. | https://pmc.ncbi.nlm.nih.gov/articles/PMC5819482/ |

## Funding

| Agency | Award | Notes | Source Url |
| --- | --- | --- | --- |
| US government (specific agency not identified) | (not recorded) | Provider Licensing section identifies government funding without listing the award. | https://www.climatologylab.org/maca.html |

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider documentation | https://www.climatologylab.org/maca.html | Product descriptions and links maintained by the provider. |

## Aliases

- MACAv2
- MACA

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | MACAv2-LIVNEH evaluation guidance |
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

Use this entry when the Livneh-trained MACA archive is required, including studies connected to Columbia River basin coverage. Check basin masks and the observation record used for validation.

## Limits and evaluation checks

Differences from MACAv2-METDATA combine training-data and grid differences. A paired comparison should match model, scenario, period, and aggregation scale.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@abatzoglou-maca]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
