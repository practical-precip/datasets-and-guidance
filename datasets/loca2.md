# LOCA2 North America

| Field | Value |
| --- | --- |
| Id | loca2 |
| Name | LOCA2 North America |
| Version | Precipitation v20240915; original ensemble described by Pierce et al. (2023) |
| Summary | Daily CMIP6 projections using localized constructed analogs on a roughly 6 km North American grid. |
| Provider | Scripps Institution of Oceanography, UC San Diego |
| Verified On | 2026-09-11 |
| Source Scope | Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested. |
| Kind | downscaled-projection |

## Method

| Field | Value |
| --- | --- |
| Family | Statistical downscaling |
| Description | Localized constructed analogs, LOCA version 2. |
| Reference Dataset | Unsplit Livneh precipitation; consult variable-specific training documentation. |
| Training Period | 1950-2014 precipitation training record. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | North American land domain, including CONUS and parts of Canada and Mexico. Check the supplied land mask for the study basin. |
| Grid | Regular latitude-longitude grid. |
| Timestep | Daily |
| Historical | 1950-2014 |
| Future | 2015-2100; inspect individual model end dates. |
| Calendar | Inspect time coordinates and calendars in each selected file. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 0.0625 |
| Unit | degrees (approximately 6 km) |

### Scenarios

- SSP2-4.5
- SSP3-7.0
- SSP5-8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| pr | Read precipitation units and accumulation conventions from the selected files. | Daily precipitation. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CMIP6 |
| Model Count | 27 |
| Members | Up to 10 initial-condition members per model in the 2023 description; availability varies by model and scenario. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://loca.ucsd.edu/ |
| Data | https://loca.ucsd.edu/ |
| Format | NetCDF |
| License | Not recorded here. Confirm redistribution and attribution terms with the provider before redistributing files. |
| License Url | (not recorded) |
| Subsetting | Download access is documented; a server-side spatial/time subsetting service has not been verified. |
| Cost | Public access is documented. Download fees and platform processing costs have not been independently checked. |

## References

- pierce-loca2

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://loca.ucsd.edu/ | September 22, 2024 precipitation release notice and domain description. |
| https://loca.ucsd.edu/training-observed-data-sets/ | LOCA2 precipitation training data. |
| https://cirrus.ucsd.edu/~pierce/papers/Pierce_et_al_JHM_2023_LOCA2_precip_extremes_VoR.pdf | Abstract and data/methods; original ensemble scope. |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, combined LOCA versions 1 and 2 row. Existing version-specific provider metadata takes precedence. |
| https://www.nature.com/articles/s41597-024-04205-z | Methods: comparison datasets, identifying LOCA2 use in the Fifth National Climate Assessment. |

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
| Released | 2024-09-22 |
| Publication | (not recorded) |
| Notes | Provider announced precipitation v20240915 on 2024-09-22. The version token is not asserted to be its creation date. The 2023 paper predates this precipitation release. |

## Existing Uses

| Description | Url |
| --- | --- |
| LOCA2 is identified as a dataset used in the Fifth National Climate Assessment. This documents the product family, not use of precipitation release v20240915. | https://www.nature.com/articles/s41597-024-04205-z |

## Funding

No entries.

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider documentation | https://loca.ucsd.edu/ | Product descriptions and links maintained by the provider. |
| Training data | https://loca.ucsd.edu/training-observed-data-sets/ | Variable-specific observed training datasets. |

## Aliases

- LOCA2

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | LOCA2 North America evaluation guidance |
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

Treat LOCA2 as a candidate for basin water-balance and daily precipitation studies. Evaluate basin totals, wet/dry spells, and spatial dependence at the scale used by the application. Fine grid spacing alone does not demonstrate suitability.

## Version and evaluation checks

Record the precipitation release and the model/member/scenario combination. The provider reports a precipitation update in September 2024. Do not transfer an evaluation of an older release to a new one without checking the changes.

The ensemble study is documented in [@pierce-loca2]. Compare extremes over matched accumulation windows and quantify sampling uncertainty. Daily data alone cannot provide hourly intensity-duration-frequency estimates.

## Expert contribution needed

Add regional evaluation results, diagnostics, and evidence of limitations here. State the product release, basin, reference data, period, and application. These suggestions are an AI-assisted draft and have not been endorsed by a domain expert.
