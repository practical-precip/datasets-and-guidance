# CanRCM4 Large Ensemble

| Field | Value |
| --- | --- |
| Id | canrcm4-le |
| Name | CanRCM4 Large Ensemble |
| Provider | Environment and Climate Change Canada |
| Version | Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications. |
| Summary | A large initial-condition ensemble samples internal variability under one parent GCM. It does not span structural uncertainty across many GCMs. This is distinct from bias-adjusted CanLEAD. |
| Source Scope | NCAR matrix transcription. Provider and publication links are supplied for follow-up; only sources explicitly marked checked below were independently read. Download availability and data files were not tested. |
| Verified On | 2026-09-11 |
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
| Family | Dynamical downscaling |
| Description | Canadian Regional Climate Model version 4 |
| Reference Dataset | Physical regional modeling driven by CanESM2; not statistical training |
| Training Period | Not established from the sources checked. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | North America |
| Grid | Latitude-longitude output grid described in the matrix; confirm coordinates in selected files. |
| Timestep | Hourly in the matrix; confirm variable-specific output |
| Historical | Historical component of 1950-2100; experiment transition must be checked. |
| Future | Future component of 1950-2100; not every model/scenario is necessarily complete. |
| Calendar | Not established from the sources checked. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 0.44 |
| Unit | degree (approximately 50 km) |

### Scenarios

- RCP8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| precipitation | Verify units and accumulation interval in selected files. | Precipitation is covered by this record. Additional atmospheric variables require a complete archive-specific inventory. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | CanESM2 |
| Model Count | 1 |
| Members | Not established from the sources checked. |

### Member Counts

| Model | Count | Scope | Source Url |
| --- | --- | --- | --- |
| CanESM2 | 50 | 50-member regional large ensemble described in the matrix; variable/run completeness not checked. | https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf |

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://open.canada.ca/data/en/dataset/83aa1b18-6616-405e-9bce-af7ef8c2031c |
| Data | https://open.canada.ca/data/en/dataset/83aa1b18-6616-405e-9bce-af7ef8c2031c |
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
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, dataset row 20: CanRCM4 Large Ensemble. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability. |

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider or method documentation | https://open.canada.ca/data/en/dataset/83aa1b18-6616-405e-9bce-af7ef8c2031c | Follow-up resource; availability of data must be confirmed. |
| Related publication or technical report | https://journals.ametsoc.org/view/journals/clim/29/1/jcli-d-15-0161.1.xml | Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration. |

## Aliases

No entries.

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | CanRCM4 Large Ensemble evaluation guidance |
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

A large initial-condition ensemble samples internal variability under one parent GCM. It does not span structural uncertainty across many GCMs. This is distinct from bias-adjusted CanLEAD.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://journals.ametsoc.org/view/journals/clim/29/1/jcli-d-15-0161.1.xml) is available for further review.
