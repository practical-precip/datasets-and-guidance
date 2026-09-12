# CarbonPlan DeepSD

| Field | Value |
| --- | --- |
| Id | carbonplan-deepsd |
| Name | CarbonPlan DeepSD |
| Provider | CarbonPlan |
| Version | Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications. |
| Summary | Distinguish DeepSD and bias-corrected DeepSD-BC. Test dry-day frequency and intensity tails explicitly before using this experimental implementation for precipitation extremes. |
| Source Scope | Matrix fields supplemented by the CarbonPlan release article checked on 2026-09-11. Run-specific availability and data licenses still require verification. |
| Verified On | 2026-09-11 |
| Guidance | product-guidance/carbonplan-deepsd.md |
| Kind | downscaled-projection |

## Generation

- CMIP6

## Dates

| Field | Value |
| --- | --- |
| Created | (not recorded) |
| Released | 2022-06-30 |
| Publication | (not recorded) |
| Notes | Date of the first-release article, not dataset creation or every later run. |

## Method

| Field | Value |
| --- | --- |
| Family | Machine learning |
| Description | DeepSD machine-learning super-resolution |
| Reference Dataset | ERA5 |
| Training Period | Not established from the sources checked. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Global |
| Grid | Latitude-longitude output grid described in the matrix; confirm coordinates in selected files. |
| Timestep | Daily |
| Historical | Historical component of 1950-2099; experiment transition must be checked. |
| Future | Future component of 1950-2099; not every model/scenario is necessarily complete. |
| Calendar | Not established from the sources checked. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 0.25 |
| Unit | degree |

### Scenarios

- SSP2-4.5
- SSP3-7.0
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
| Driving Models | CanESM5 and MRI-ESM2-0 examples in the matrix; verify run catalog |
| Model Count | (not recorded) |
| Members | Not established from the sources checked. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://carbonplan.org/research/cmip6-downscaling-explainer |
| Data | https://carbonplan.org/research/cmip6-downscaling-explainer |
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
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, dataset row 28: CarbonPlan DeepSD. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability. |
| https://carbonplan.org/research/cmip6-downscaling-explainer | Checked: first-release date, method distinctions, coverage and funding. Run counts are not GCM counts. |

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

| Agency | Award | Notes | Source Url |
| --- | --- | --- | --- |
| Microsoft AI for Earth | (not recorded) | Grant acknowledged in release article. | https://carbonplan.org/research/cmip6-downscaling-explainer |
| NASA | 80NSSC21M0065 | Contributing support acknowledged in release article. | https://carbonplan.org/research/cmip6-downscaling-explainer |

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider or method documentation | https://carbonplan.org/research/cmip6-downscaling-explainer | Follow-up resource; availability of data must be confirmed. |
| Related publication or technical report | https://doi.org/10.1145/3097983.3098004 | DeepSD method paper linked by the CarbonPlan release article. It does not describe every CarbonPlan run. |
| Run catalog | https://github.com/carbonplan/cmip6-downscaling/blob/main/datasets.md | Resolve method, GCM, scenario and run availability. |

## Aliases

No entries.

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | CarbonPlan DeepSD evaluation guidance |
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

Distinguish DeepSD and bias-corrected DeepSD-BC. Test dry-day frequency and intensity tails explicitly before using this experimental implementation for precipitation extremes.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://doi.org/10.1145/3097983.3098004) is available for further review.
