# IM3/HyperFACETS TGW

| Field | Value |
| --- | --- |
| Provider | IM3 / HyperFACETS collaboration; MSD-LIVE data portal |
| Verified On | 2026-09-11 |
| Id | tgw |
| Name | IM3/HyperFACETS TGW |
| Version | Jones et al. (2023) thermodynamic warming experiments. |
| Summary | CONUS WRF simulations of historical weather repeated under four warming trajectories. |
| Source Scope | Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested. |
| Kind | downscaled-projection |

## Method

| Field | Value |
| --- | --- |
| Family | Dynamical downscaling with thermodynamic perturbations |
| Description | WRF 4.2.1 driven by ERA5, then by ERA5 with time-varying temperature and moisture perturbations. |
| Reference Dataset | ERA5 historical weather sequence. |
| Training Period | No statistical calibration. Historical weather baseline is 1980-2019. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Continental United States regional model domain. |
| Grid | WRF regional grid, 425 by 300 cells in the paper. |
| Timestep | Hourly for 25 variables and 3-hourly for more than 200 variables in the 2023 description. |
| Historical | 1980-2019 |
| Future | 2020-2059 and 2060-2099, each replaying the 1980-2019 weather sequence. |
| Calendar | Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 12 |
| Unit | km |

### Scenarios

- SSP2-4.5, lower-sensitivity warming
- SSP2-4.5, higher-sensitivity warming
- SSP5-8.5, lower-sensitivity warming
- SSP5-8.5, higher-sensitivity warming

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| precipitation (WRF variable names) | Inspect accumulation variables, resets, and output intervals. | Precipitation. Confirm whether the selected variable is a rate or accumulated amount. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | ERA5 weather with warming signals derived from groups of CMIP6 models. |
| Model Count | (not recorded) |
| Members | Four 80-year warming trajectories, implemented as eight 40-year future simulations, plus the historical simulation. Not an initial-condition ensemble. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://tgw-data.msdlive.org/ |
| Data | https://tgw-data.msdlive.org/ |
| Format | NetCDF data with Globus access through MSD-LIVE. |
| License | Dataset reuse terms were not verified. Consult the provider; the article or code license is not a data license. |
| License Url | (not recorded) |
| Subsetting | Download access is documented; a server-side spatial/time subsetting service has not been verified. |
| Cost | Public access is documented. Download fees and platform processing costs have not been independently checked. |

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- jones-tgw

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, IM3/HyperFACETS TGW row; use paper for 12 km native grid. |
| https://www.nature.com/articles/s41597-023-02485-5 | Abstract, experimental design, WRF configuration, Data Records, and Usage Notes. Publication date, Data Records, Usage Notes, and Acknowledgements. |
| https://tgw-data.msdlive.org/ | Data access and experiment naming. |

## Generation

- CMIP6

## Dates

| Field | Value |
| --- | --- |
| Created | (not recorded) |
| Released | (not recorded) |
| Publication | 2023-09-28 |
| Notes | Dataset paper publication date; historical weather years and scenario years are not data creation dates. |

## Existing Uses

| Description | Url |
| --- | --- |
| Dataset paper evaluates historical precipitation and tropical cyclones and demonstrates paired historical/warmed event analysis. | https://www.nature.com/articles/s41597-023-02485-5 |

## Funding

| Agency | Award | Notes | Source Url |
| --- | --- | --- | --- |
| US Department of Energy, Office of Science | (not recorded) | IM3 and HyperFACETS support through MultiSector Dynamics and Regional and Global Model Analysis. | https://www.nature.com/articles/s41597-023-02485-5 |

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider documentation | https://tgw-data.msdlive.org/ | Product descriptions and links maintained by the provider. |
| MSD-LIVE dataset portal | https://tgw-data.msdlive.org/ | Experiment descriptions and Globus access. |

## Aliases

- IM3/HyperFACETS

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | IM3/HyperFACETS TGW evaluation guidance |
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
| The simulations repeat 1980-2019 weather under four future thermodynamic warming trajectories. | jones-tgw | Abstract and experimental design. | Conditional changes to historical weather; not a sample of changes in future circulation occurrence. |

## Guidance

## Application guidance

Use paired historical and warmed events to examine thermodynamic changes in storm precipitation, timing, and compound impacts. Preserve the mapping from each future year to its baseline weather year.

## Limits and evaluation checks

These experiments replay historical circulation and are not independent future weather realizations. Do not treat repeated baseline events as independent samples in an extremes fit. Inspect the 2020 and 2060 transitions when computing long-term trends.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@jones-tgw]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
