# ORNL DBCCA

| Field | Value |
| --- | --- |
| Id | ornl-dbcca |
| Name | ORNL DBCCA |
| Provider | Oak Ridge National Laboratory |
| Version | Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications. |
| Summary | Keep DBCCA-Livneh and DBCCA-Daymet separate in comparisons. Differences reflect both reference observations and processing choices. |
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
| Description | Double bias correction constructed analogs |
| Reference Dataset | Separate Livneh and Daymet training variants |
| Training Period | Not established from the sources checked. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Conterminous United States |
| Grid | Latitude-longitude output grid described in the matrix; confirm coordinates in selected files. |
| Timestep | Daily |
| Historical | Historical component of 1980-2060; experiment transition must be checked. |
| Future | Future component of 1980-2060; not every model/scenario is necessarily complete. |
| Calendar | Not established from the sources checked. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 0.041666666666666664 |
| Unit | degree |

### Scenarios

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
| Driving Models | CMIP6; matrix lists six members, not an unambiguous GCM count |
| Model Count | (not recorded) |
| Members | Not established from the sources checked. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://hydrosource.ornl.gov/dataset/9505V3 |
| Data | https://hydrosource.ornl.gov/dataset/9505V3 |
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
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, dataset row 7: ORNL DBCCA. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability. |
| https://www.ornl.gov/research-highlight/how-may-choice-downscaling-techniques-and-meteorological-reference-observations | Checked: research highlight identifies RegCM4, DBCCA, Livneh/Daymet comparison and DOE support. |

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

| Agency | Award | Notes | Source Url |
| --- | --- | --- | --- |
| US Department of Energy, Water Power Technologies Office | (not recorded) | SECURE Water Act Section 9505 assessment, acknowledged by the ORNL research highlight. | https://www.ornl.gov/research-highlight/how-may-choice-downscaling-techniques-and-meteorological-reference-observations |

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider or method documentation | https://hydrosource.ornl.gov/dataset/9505V3 | Follow-up resource; availability of data must be confirmed. |
| Related publication or technical report | https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022EF002734 | Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration. |

## Aliases

- SWA 9505v3 - DBBCA
- SWA 9505v3 DBBCA

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | ORNL DBCCA evaluation guidance |
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

Keep DBCCA-Livneh and DBCCA-Daymet separate in comparisons. Differences reflect both reference observations and processing choices.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022EF002734) is available for further review.
