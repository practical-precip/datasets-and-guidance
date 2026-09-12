# CanRCM4 Large Ensemble

- __Id:__ canrcm4-le
- __Name:__ CanRCM4 Large Ensemble
- __Provider:__ Environment and Climate Change Canada
- __Version:__ Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications.
- __Summary:__ A large initial-condition ensemble samples internal variability under one parent GCM. It does not span structural uncertainty across many GCMs. This is distinct from bias-adjusted CanLEAD.
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

- __Family:__ Dynamical downscaling
- __Description:__ Canadian Regional Climate Model version 4
- __Reference Dataset:__ Physical regional modeling driven by CanESM2; not statistical training
- __Training Period:__ Not established from the sources checked.

## Coverage

- __Domain:__ North America
- __Grid:__ Latitude-longitude output grid described in the matrix; confirm coordinates in selected files.
- __Timestep:__ Hourly in the matrix; confirm variable-specific output
- __Historical:__ Historical component of 1950-2100; experiment transition must be checked.
- __Future:__ Future component of 1950-2100; not every model/scenario is necessarily complete.
- __Calendar:__ Not established from the sources checked.

### Grid Spacing

- __Value:__ 0.44
- __Unit:__ degree (approximately 50 km)

### Scenarios

- RCP8.5

### Variables

1. __Name:__ precipitation
   - __Unit:__ Verify units and accumulation interval in selected files.
   - __Description:__ Precipitation is covered by this record. Additional atmospheric variables require a complete archive-specific inventory.

## Ensemble

- __Driving Models:__ CanESM2
- __Model Count:__ 1
- __Members:__ Not established from the sources checked.

### Member Counts

1. __Model:__ CanESM2
   - __Count:__ 50
   - __Scope:__ 50-member regional large ensemble described in the matrix; variable/run completeness not checked.
   - __Source Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf

## Access

- __Landing Page:__ https://open.canada.ca/data/en/dataset/83aa1b18-6616-405e-9bce-af7ef8c2031c
- __Data:__ https://open.canada.ca/data/en/dataset/83aa1b18-6616-405e-9bce-af7ef8c2031c
- __Format:__ Not established from the sources checked.
- __License:__ Not established. Public access does not itself specify reuse terms.
- __License Url:__ (not recorded)
- __Subsetting:__ Not verified. The linked documentation may describe access, rather than provide a working subset service.
- __Cost:__ Not established from the sources checked.

## References

No entries.

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, dataset row 20: CanRCM4 Large Ensemble. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability.

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

1. __Label:__ Provider or method documentation
   - __Url:__ https://open.canada.ca/data/en/dataset/83aa1b18-6616-405e-9bce-af7ef8c2031c
   - __Description:__ Follow-up resource; availability of data must be confirmed.

2. __Label:__ Related publication or technical report
   - __Url:__ https://journals.ametsoc.org/view/journals/clim/29/1/jcli-d-15-0161.1.xml
   - __Description:__ Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration.

## Aliases

No entries.

## Expert Guidance

- __Title:__ CanRCM4 Large Ensemble evaluation guidance
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

A large initial-condition ensemble samples internal variability under one parent GCM. It does not span structural uncertainty across many GCMs. This is distinct from bias-adjusted CanLEAD.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://journals.ametsoc.org/view/journals/clim/29/1/jcli-d-15-0161.1.xml) is available for further review.
