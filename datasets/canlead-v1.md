# CanLEAD v1

- __Id:__ canlead-v1
- __Name:__ CanLEAD v1
- __Provider:__ Environment and Climate Change Canada
- __Version:__ Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications.
- __Summary:__ Distinguish the adjusted global and regional parent ensembles and the two reference datasets. They are not independent GCMs. Use member spread to examine internal variability.
- __Source Scope:__ NCAR matrix transcription. Provider and publication links are supplied for follow-up; only sources explicitly marked checked below were independently read. Download availability and data files were not tested.
- __Verified On:__ 2026-09-11
- __Kind:__ downscaled-projection

## Generation

- CMIP5

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ (not recorded)
- __Notes:__ Exact creation/release dates are not established. Simulation periods and version tokens are not creation dates.

## Method

- __Family:__ Statistical downscaling
- __Description:__ Multivariate bias correction of global and regional large ensembles
- __Reference Dataset:__ S14FD and EWEMBI reference variants
- __Training Period:__ Not established from the sources checked.

## Coverage

- __Domain:__ North America
- __Grid:__ Latitude-longitude output grid described in the matrix; confirm coordinates in selected files.
- __Timestep:__ Daily
- __Historical:__ Historical component of 1950-2100; experiment transition must be checked.
- __Future:__ Future component of 1950-2100; not every model/scenario is necessarily complete.
- __Calendar:__ Not established from the sources checked.

### Grid Spacing

- __Value:__ 0.5
- __Unit:__ degree

### Scenarios

- RCP8.5

### Variables

1. __Name:__ precipitation
   - __Unit:__ Verify units and accumulation interval in selected files.
   - __Description:__ Variable family identified in the matrix; archive names and availability may differ.

2. __Name:__ minimum temperature
   - __Unit:__ Verify units and accumulation interval in selected files.
   - __Description:__ Variable family identified in the matrix; archive names and availability may differ.

3. __Name:__ maximum temperature
   - __Unit:__ Verify units and accumulation interval in selected files.
   - __Description:__ Variable family identified in the matrix; archive names and availability may differ.

## Ensemble

- __Driving Models:__ CanESM2 and nested CanRCM4 large ensembles
- __Model Count:__ 1
- __Members:__ Matrix describes 50-member global and regional ensembles. Match the parent, reference dataset and member rather than pooling configurations.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://open.canada.ca/data/en/dataset/a97edbc1-7fda-4ebc-b135-691505d9a595
- __Data:__ https://open.canada.ca/data/en/dataset/a97edbc1-7fda-4ebc-b135-691505d9a595
- __Format:__ Not established from the sources checked.
- __License:__ Not established. Public access does not itself specify reuse terms.
- __License Url:__ (not recorded)
- __Subsetting:__ Not verified. The linked documentation may describe access, rather than provide a working subset service.
- __Cost:__ Not established from the sources checked.

## References

No entries.

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, dataset row 17: CanLEAD v1. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability.

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

1. __Label:__ Provider or method documentation
   - __Url:__ https://open.canada.ca/data/en/dataset/a97edbc1-7fda-4ebc-b135-691505d9a595
   - __Description:__ Follow-up resource; availability of data must be confirmed.

2. __Label:__ Related publication or technical report
   - __Url:__ https://rmets.onlinelibrary.wiley.com/doi/full/10.1002/gdj3.142
   - __Description:__ Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration.

## Aliases

No entries.

## Expert Guidance

- __Title:__ CanLEAD v1 evaluation guidance
- __Summary:__ Draft interpretation of documented product properties; expert review is pending.

### Review

- __Status:__ draft
- __Updated:__ 2026-09-11

#### Contributors

- Initial AI-assisted draft

### Evidence

No entries.

## Guidance

## Application guidance

Distinguish the adjusted global and regional parent ensembles and the two reference datasets. They are not independent GCMs. Use member spread to examine internal variability.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://rmets.onlinelibrary.wiley.com/doi/full/10.1002/gdj3.142) is available for further review.
