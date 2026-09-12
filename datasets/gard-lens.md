# GARD-LENS

| Field | Value |
| --- | --- |
| Provider | NSF NCAR and Cornell University; NCAR GDEX |
| Verified On | 2026-09-11 |
| Id | gard-lens |
| Name | GARD-LENS |
| Version | 2024 published ensemble; NCAR GDEX d619000 (DOI 10.5065/5W7W-5224). |
| Summary | Daily projections from 200 initial-condition members across three CMIP6 models. |
| Source Scope | Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested. |
| Kind | downscaled-projection |

## Method

| Field | Value |
| --- | --- |
| Family | Statistical downscaling |
| Description | Generalized Analog Regression Downscaling (GARD), configured for the published large ensemble. |
| Reference Dataset | GMET target fields and ERA5 large-scale predictors. |
| Training Period | 1980-2014 for CONUS and Alaska; 1990-2014 for Hawaii. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | CONUS, Alaska, and Hawaii. |
| Grid | Regular latitude-longitude grid. |
| Timestep | Daily |
| Historical | 1950-2014; EC-Earth3 begins in 1970. |
| Future | 2015-2100 |
| Calendar | Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 12 |
| Unit | km in CONUS; 4 km in Alaska; 1 km in Hawaii (nominal) |

### Scenarios

- SSP3-7.0

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| pcp | Inspect precipitation accumulation units in the selected NetCDF file. | Precipitation. Confirm whether the selected variable is a rate or accumulated amount. |
| t_mean | Check selected files. | Daily mean temperature. |
| t_range | Check selected files. | Daily temperature range. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CMIP6: CESM2, CanESM5, EC-Earth3 |
| Model Count | 3 |
| Members | 200 initial-condition members in total. Retain parent-model identity in uncertainty analysis. |

### Member Counts

| Model | Count | Scope | Source Url |
| --- | --- | --- | --- |
| CESM2 | 100 | Historical and SSP3-7.0, 1950-2100. | https://www.nature.com/articles/s41597-024-04205-z |
| CanESM5 | 50 | Historical and SSP3-7.0, 1950-2100. | https://www.nature.com/articles/s41597-024-04205-z |
| EC-Earth3 | 50 | Historical and SSP3-7.0, 1970-2100. | https://www.nature.com/articles/s41597-024-04205-z |

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://gdex.ucar.edu/datasets/d619000/ |
| Data | https://gdex.ucar.edu/datasets/d619000/ |
| Format | NetCDF; inspect the selected distribution. |
| License | Creative Commons Attribution 4.0 International, explicitly listed under Data License in NCAR GDEX. |
| License Url | https://gdex.ucar.edu/datasets/d619000/ |
| Subsetting | Download access is documented; a server-side spatial/time subsetting service has not been verified. |
| Cost | Public access is documented. Download fees and platform processing costs have not been independently checked. |

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- hartke-gard-lens

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, GARD-LENS row. |
| https://gdex.ucar.edu/datasets/d619000/ | Abstract and temporal range; dataset identifier and training windows. Data Formats and Data License. |
| https://www.nature.com/articles/s41597-024-04205-z | Methods: GCM data, observation data, GARD predictor selection; EC-Earth3 start year. Table 1: members by model; publication date, analysis, and Acknowledgements. |

## Generation

- CMIP6

## Dates

| Field | Value |
| --- | --- |
| Created | (not recorded) |
| Released | (not recorded) |
| Publication | 2024-12-18 |
| Notes | Publication date of the dataset paper. No exact archive creation or release date is asserted. |

## Existing Uses

| Description | Url |
| --- | --- |
| The dataset paper demonstrates member-sampling effects on trends and compares downscaled products. | https://www.nature.com/articles/s41597-024-04205-z |

## Funding

| Agency | Award | Notes | Source Url |
| --- | --- | --- | --- |
| US Department of Defense ESTCP | W912HQ23C0002; CR22-7259 | Dataset study support. | https://www.nature.com/articles/s41597-024-04205-z |
| US Bureau of Reclamation Dam Safety Office | R22AC00313 | Dataset study support. | https://www.nature.com/articles/s41597-024-04205-z |
| US National Science Foundation | 1852977 | NCAR facility support acknowledged in the paper. | https://www.nature.com/articles/s41597-024-04205-z |
| US Department of Energy | DE-SC0016605 | Partial author support through Regional and Global Climate Modeling. | https://www.nature.com/articles/s41597-024-04205-z |

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider documentation | https://gdex.ucar.edu/datasets/d619000/ | Product descriptions and links maintained by the provider. |
| Simulation configuration archive | https://doi.org/10.5281/zenodo.12585641 | GARD-LENS simulation files cited by the dataset paper. |

## Aliases

No entries.

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | GARD-LENS evaluation guidance |
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
| The ensemble contains 200 members from three CMIP6 models; EC-Earth3 begins in 1970. | hartke-gard-lens | Abstract and Methods: GCM data. | Published GARD-LENS ensemble under historical and SSP3-7.0 forcing. |

### Regions

| Field | Value |
| --- | --- |
| Alaska | product-guidance/gard-lens.alaska.md |

## Guidance

## Application guidance

Use member-level series to estimate internal variability while keeping results grouped by parent GCM. Compare balanced parent-model summaries with any pooled-member result.

## Limits and evaluation checks

The ensemble samples only three CMIP6 models under one future scenario. The paper identifies all three as relatively high climate-sensitivity models [@hartke-gard-lens], so also examine how their forced responses compare with a broader model ensemble. Do not interpret 200 members as 200 independent climate models or as complete scenario uncertainty. EC-Earth3 starts later, which affects common-period comparisons.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@hartke-gard-lens]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
