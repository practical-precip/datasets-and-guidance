# UW-Madison Probabilistic Downscaling (UW-PD)

| Field | Value |
| --- | --- |
| Id | uw-pd-cmip5 |
| Name | UW-Madison Probabilistic Downscaling (UW-PD) |
| Provider | University of Wisconsin-Madison / NOAA distribution |
| Version | Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications. |
| Summary | Distinguish a daily probability distribution from a sampled weather sequence. Stochastic realizations are not additional GCM initial-condition members. Check space-time dependence for basin applications. |
| Source Scope | Matrix fields supplemented by the NOAA AWS registry description checked on 2026-09-11. |
| Verified On | 2026-09-11 |
| Guidance | product-guidance/uw-pd-cmip5.md |
| Kind | downscaled-projection |

## Generation

- CMIP5

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
| Description | Probabilistic statistical downscaling |
| Reference Dataset | NCEP Reanalysis |
| Training Period | Not established from the sources checked. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | United States and southern Canada east of the Rocky Mountains |
| Grid | Latitude-longitude output grid described in the matrix; confirm coordinates in selected files. |
| Timestep | Daily distributions and sampled realizations |
| Historical | Historical component of 1950-2100; experiment transition must be checked. |
| Future | Future component of 1950-2100; not every model/scenario is necessarily complete. |
| Calendar | Not established from the sources checked. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 0.1 |
| Unit | degree |

### Scenarios

- RCP2.6
- RCP4.5
- RCP6.0
- RCP8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| precipitation | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |
| minimum temperature | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |
| maximum temperature | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | 24 CMIP5 GCMs in the matrix |
| Model Count | 24 |
| Members | Registry describes 14 stochastic precipitation realizations and 3 temperature realizations. These are not GCM initial-condition member counts. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://registry.opendata.aws/noaa-uwpd-cmip5/ |
| Data | https://registry.opendata.aws/noaa-uwpd-cmip5/ |
| Format | NetCDF |
| License | NOAA open-use terms request attribution and prohibit implying NOAA endorsement. |
| License Url | https://registry.opendata.aws/noaa-uwpd-cmip5/ |
| Subsetting | Not verified. The linked documentation may describe access, rather than provide a working subset service. |
| Cost | Anonymous S3 access is documented; analysis costs depend on the user environment. |

## References

No entries.

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, dataset row 18: UW-Madison Probabilistic Downscaling (UW-PD). Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability. |
| https://registry.opendata.aws/noaa-uwpd-cmip5/ | Checked: distribution method, stochastic realization counts, file naming, license and anonymous access. |

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider or method documentation | https://registry.opendata.aws/noaa-uwpd-cmip5/ | Follow-up resource; availability of data must be confirmed. |
| Method documentation | https://djlorenz.github.io/downscaling2/main.html | Distribution-based downscaling methodology. |

## Aliases

- UWPD

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | UW-Madison Probabilistic Downscaling (UW-PD) evaluation guidance |
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

Distinguish a daily probability distribution from a sampled weather sequence. Stochastic realizations are not additional GCM initial-condition members. Check space-time dependence for basin applications.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory.
