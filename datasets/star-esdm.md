# STAR-ESDM

| Field | Value |
| --- | --- |
| Id | star-esdm |
| Name | STAR-ESDM |
| Provider | Texas Tech University / collaborators |
| Version | Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications. |
| Summary | The matrix describes an earlier configuration and labels it not yet public. Later STAR-ESDM1-0 files exist in DRCDP; their domain, reference data, and release scope must not be substituted silently. |
| Source Scope | NCAR matrix transcription. Provider and publication links are supplied for follow-up; only sources explicitly marked checked below were independently read. Download availability and data files were not tested. |
| Verified On | 2026-09-11 |
| Kind | downscaled-projection |

## Generation

- CMIP6

## Dates

| Field | Value |
| --- | --- |
| Created | (not recorded) |
| Released | (not recorded) |
| Publication | (not recorded) |
| Notes | Exact creation/release dates are not established. Simulation periods and version tokens are not creation dates. |

## Method

| Field | Value |
| --- | --- |
| Family | Statistical downscaling |
| Description | Signal decomposition into trends, climatologies and daily variability, separately bias-corrected and reassembled. |
| Reference Dataset | NClimGrid-Daily |
| Training Period | Not established from the sources checked. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Conterminous United States in the matrix |
| Grid | Latitude-longitude output grid described in the matrix; confirm coordinates in selected files. |
| Timestep | Daily |
| Historical | Historical component of 1950-2100; experiment transition must be checked. |
| Future | Future component of 1950-2100; not every model/scenario is necessarily complete. |
| Calendar | Not established from the sources checked. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 0.041666666666666664 |
| Unit | degree |

### Scenarios

- SSP2-4.5
- SSP5-8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| precipitation | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |
| minimum temperature | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |
| maximum temperature | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | 25 CMIP6 models in the matrix |
| Model Count | 25 |
| Members | Not established from the sources checked. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://meetingorganizer.copernicus.org/EGU21/EGU21-13931.html |
| Data | https://meetingorganizer.copernicus.org/EGU21/EGU21-13931.html |
| Format | Not established from the sources checked. |
| License | Not established. Public access does not itself specify reuse terms. |
| License Url | (not recorded) |
| Subsetting | Not verified. The linked documentation may describe access, rather than provide a working subset service. |
| Cost | Not established from the sources checked. |

## References

No entries.

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, dataset row 16: STAR-ESDM. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability. |
| https://esgf-node.ornl.gov/thredds/dodsC/user_pub_work/DRCDP/NAM/TTU/STAR-ESDM1-0/CMIP6/ScenarioMIP/historical-ssp585/ACCESS-CM2/r1i1p1f1/day/pr/v20250429/pr_NAM_TTU_STAR-ESDM1-0_CMIP6_historical-ssp585_ACCESS-CM2_r1i1p1f1_day_20900101-20941231.nc.html | Indexed header checked: later public STAR-ESDM1-0 file exists. Its file-level license and CMOR table creation date are not applied to the older matrix family. |
| https://meetingorganizer.copernicus.org/EGU21/EGU21-13931.html | Checked: EGU21-13931 abstract describes signal decomposition and bias correction, not an ensemble of downscaling methods. |

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider or method documentation | https://meetingorganizer.copernicus.org/EGU21/EGU21-13931.html | Follow-up resource; availability of data must be confirmed. |
| Later DRCDP STAR-ESDM1-0 file metadata | https://esgf-node.ornl.gov/thredds/dodsC/user_pub_work/DRCDP/NAM/TTU/STAR-ESDM1-0/CMIP6/ScenarioMIP/historical-ssp585/ACCESS-CM2/r1i1p1f1/day/pr/v20250429/pr_NAM_TTU_STAR-ESDM1-0_CMIP6_historical-ssp585_ACCESS-CM2_r1i1p1f1_day_20900101-20941231.nc.html | Public indexed file header, a later configuration requiring separate release reconciliation. |

## Aliases

No entries.

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | STAR-ESDM evaluation guidance |
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

The matrix describes an earlier configuration and labels it not yet public. Later STAR-ESDM1-0 files exist in DRCDP; their domain, reference data, and release scope must not be substituted silently.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory.
