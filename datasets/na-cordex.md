# NA-CORDEX CMIP5

| Field | Value |
| --- | --- |
| Provider | Participating NA-CORDEX modeling groups; NCAR GDEX |
| Verified On | 2026-09-11 |
| Id | na-cordex |
| Name | NA-CORDEX CMIP5 |
| Version | North American CMIP5 archive; distinguish native, regridded, and bias-corrected outputs. |
| Summary | A regional climate-model ensemble with 25 km and 50 km simulations over North America. |
| Guidance | product-guidance/na-cordex.md |
| Source Scope | Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested. |
| Kind | downscaled-projection |

## Method

| Field | Value |
| --- | --- |
| Family | Dynamical downscaling |
| Description | Multiple regional climate models driven by CMIP5 boundary conditions. |
| Reference Dataset | Not applicable to native dynamical runs. Reference data depend on any subsequent bias correction. |
| Training Period | Not applicable to native runs; consult the selected bias-corrected product when relevant. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Most of North America; regional model masks and grids differ. |
| Grid | Native regional grids or derived common grids; record which is used. |
| Timestep | Daily products; other variables and frequencies vary by archive. |
| Historical | 1950-2005 |
| Future | 2006-2100; coverage varies by GCM-RCM experiment. |
| Calendar | Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 0.22 |
| Unit | degrees for approximately 25 km runs; 0.44 degrees for approximately 50 km runs |

### Scenarios

- RCP4.5
- RCP8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| pr | Inspect the variable units and time bounds in the selected files. | Precipitation. Confirm whether the selected variable is a rate or accumulated amount. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CMIP5 |
| Model Count | (not recorded) |
| Members | Uneven GCM-RCM-scenario matrix. Count unique parent GCMs separately from RCMs, resolutions, and simulations. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://na-cordex.org/data-access.html |
| Data | https://gdex.ucar.edu/datasets/d316009/ |
| Format | NetCDF in the core archive; a separately documented Zarr distribution is available on AWS and GDEX d316010. |
| License | NA-CORDEX terms permit commercial use and require dataset citation and acknowledgements; consult the full terms. |
| License Url | https://na-cordex.org/terms-use.html |
| Subsetting | Select archive files by variable, scenario, GCM, RCM, output frequency, grid, and bias correction. The Zarr distribution supports client-side chunk access. |
| Cost | NA-CORDEX documents AWS-sponsored storage and egress for its public Zarr copy. User analysis costs are not included. |

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- bukovsky-na-cordex

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, NA-CORDEX row. |
| https://gdex.ucar.edu/datasets/d316009/ | Abstract: domain, CMIP5 driving models, 1950-2100 coverage, and two grid spacings. |
| https://na-cordex.org/data-access.html | GDEX migration and differences between ESGF and derived archives. |
| https://na-cordex.org/terms-use.html | Terms of Use: citation, acknowledgement, and commercial-use provisions. |
| https://na-cordex.org/na-cordex-on-aws.html | Format, available data, and free storage/egress sponsorship. |
| https://na-cordex.org/dataset-description.html | File naming and variables. |

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
| Bukovsky and Mearns (2020) analyze regional projections and their relation to climate sensitivity. | https://link.springer.com/article/10.1007/s10584-020-02835-x |

## Funding

| Agency | Award | Notes | Source Url |
| --- | --- | --- | --- |
| US Department of Defense ESTCP | (not recorded) | NA-CORDEX archive support credited in its terms of use. | https://na-cordex.org/terms-use.html |

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider documentation | https://na-cordex.org/data-access.html | Product descriptions and links maintained by the provider. |
| Zarr distribution | https://na-cordex.org/na-cordex-on-aws.html | Cloud archive layout, Intake catalog, and GDEX mirror. |
| Dataset file conventions | https://na-cordex.org/dataset-description.html | Naming, output frequencies, and experiment combinations. |

## Aliases

No entries.

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | NA-CORDEX CMIP5 evaluation guidance |
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

Use matched GCM-RCM pairs to examine the contribution of regional modeling to projection spread. Choose native or derived output according to the analysis and document that choice.

## Limits and evaluation checks

The archive is an uneven experiment matrix. Treating all files as equally independent can overweight shared parent models, resolutions, or RCMs. Check the selected run inventory rather than assuming every pairing exists.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@bukovsky-na-cordex]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
