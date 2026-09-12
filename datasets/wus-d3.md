# WUS-D3

| Field | Value |
| --- | --- |
| Provider | UCLA Center for Climate Science and collaborators |
| Verified On | 2026-09-11 |
| Id | wus-d3 |
| Name | WUS-D3 |
| Version | Original ensemble described by Rahimi et al. (2024); separate from later bias-corrected forcing experiments. |
| Summary | WRF dynamical downscaling over the western US, with hourly output for selected variables. |
| Source Scope | Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested. |
| Kind | downscaled-projection |

## Method

| Field | Value |
| --- | --- |
| Family | Dynamical downscaling |
| Description | WRF 4.1.3, with 45 km outer and 9 km inner domains. |
| Reference Dataset | GCM boundary forcing; separate ERA5-driven reference simulation. No statistical training target for the original GCM-driven runs. |
| Training Period | Not applicable to the dynamical model. Evaluation in the paper uses 1981-2010. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Western United States, including the WECC US region; use the inner-domain mask. |
| Grid | WRF regional model grid; use supplied coordinates and projection. |
| Timestep | Hourly selected variables; other output frequencies depend on tier. |
| Historical | 1980-2014 |
| Future | 2015-2100 |
| Calendar | Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 9 |
| Unit | km (inner domain; 45 km outer domain) |

### Scenarios

- SSP3-7.0
- SSP2-4.5 (CESM2 only in the original paper)
- SSP5-8.5 (CESM2 only in the original paper)

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| precipitation (tier-dependent variable names) | Inspect WRF accumulation conventions, resets, and time intervals. | Precipitation. Confirm whether the selected variable is a rate or accumulated amount. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CMIP6 |
| Model Count | 14 |
| Members | 16 simulations in the original paper: 14 SSP3-7.0 projections plus two additional CESM2 scenarios. These are not 16 different GCMs. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://registry.opendata.aws/wrf-cmip6/ |
| Data | https://registry.opendata.aws/wrf-cmip6/ |
| Format | WRF NetCDF output, organized into data tiers in AWS S3. |
| License | Creative Commons Attribution 4.0 International, per the AWS dataset registry. |
| License Url | https://registry.opendata.aws/wrf-cmip6/ |
| Subsetting | Download access is documented; a server-side spatial/time subsetting service has not been verified. |
| Cost | AWS registry provides public S3 access with no AWS account required. User processing and storage costs are not estimated. |

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- rahimi-wus-d3

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, WUS-D3 row; scenarios expanded using the original paper. |
| https://gmd.copernicus.org/articles/17/2265/2024/ | Sections 2.1-2.2, 3, and data availability: models, scenarios, grid, evaluation, and tiers. Publication date, data-tier description, code/data availability, and Financial support. |
| https://registry.opendata.aws/wrf-cmip6/ | License, access, updates, and publications distinguishing bias-corrected experiments. |

## Generation

- CMIP6

## Dates

| Field | Value |
| --- | --- |
| Created | (not recorded) |
| Released | (not recorded) |
| Publication | 2024-03-20 |
| Notes | Original WUS-D3 overview publication date. Later uploads and corrected forcing experiments have separate histories. |

## Existing Uses

| Description | Url |
| --- | --- |
| Original ensemble evaluated for historical climate and future mean and extreme precipitation across western US states. | https://gmd.copernicus.org/articles/17/2265/2024/ |

## Funding

| Agency | Award | Notes | Source Url |
| --- | --- | --- | --- |
| US Department of Energy | DE-SC0016605 | HyperFACETS project support. | https://gmd.copernicus.org/articles/17/2265/2024/ |
| Strategic Environmental Research and Development Program | RC19-1391 | Study support. | https://gmd.copernicus.org/articles/17/2265/2024/ |
| California Energy Commission | EPC-20-006 | Study support. | https://gmd.copernicus.org/articles/17/2265/2024/ |
| University of California | LRF-18-542511 | Climate Ecosystems Future project. | https://gmd.copernicus.org/articles/17/2265/2024/ |

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider documentation | https://registry.opendata.aws/wrf-cmip6/ | Product descriptions and links maintained by the provider. |
| Model code and analysis archive | https://doi.org/10.5281/zenodo.10635867 | WRF versions, figure notebooks, and geography files for the original study. |

## Aliases

No entries.

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | WUS-D3 evaluation guidance |
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
| The original study reports precipitation above PRISM in parts of the western US and discusses uncertainty in mountain reference precipitation. | rahimi-wus-d3 | Section 3, Figures 3-5. | Original ensemble and historical evaluation; do not generalize to later bias-corrected experiments. |

### Regions

| Field | Value |
| --- | --- |
| Northwest | product-guidance/wus-d3.northwest.md |

## Guidance

## Application guidance

Consider hourly precipitation and spatial storm structure for western US applications. Evaluate accumulated precipitation, seasonal biases, and extremes against multiple suitable references.

## Limits and evaluation checks

Record whether GCM forcing was bias corrected. Findings from the original ensemble cannot be assigned to later corrected experiments. Confirm WRF accumulation resets and time intervals before calculating hourly or daily extremes.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@rahimi-wus-d3]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
