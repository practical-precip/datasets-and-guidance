# CarbonPlan MACA

- __Id:__ carbonplan-maca
- __Name:__ CarbonPlan MACA
- __Provider:__ CarbonPlan
- __Version:__ Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications.
- __Summary:__ This ERA5-trained global implementation is distinct from MACAv2-METDATA and MACAv2-LIVNEH. Use the run catalog to align models and scenarios across methods.
- __Source Scope:__ Matrix fields supplemented by the CarbonPlan release article checked on 2026-09-11. Run-specific availability and data licenses still require verification.
- __Verified On:__ 2026-09-11
- __Kind:__ downscaled-projection

## Generation

- CMIP6

## Dates

- __Created:__ (not recorded)
- __Released:__ 2022-06-30
- __Publication:__ (not recorded)
- __Notes:__ Date of the first-release article, not dataset creation or every later run.

## Method

- __Family:__ Statistical downscaling
- __Description:__ MACA implementation
- __Reference Dataset:__ ERA5
- __Training Period:__ Not established from the sources checked.

## Coverage

- __Domain:__ Global except Antarctica
- __Grid:__ Latitude-longitude output grid described in the matrix; confirm coordinates in selected files.
- __Timestep:__ Daily
- __Historical:__ Historical component of 1950-2099; experiment transition must be checked.
- __Future:__ Future component of 1950-2099; not every model/scenario is necessarily complete.
- __Calendar:__ Not established from the sources checked.

### Grid Spacing

- __Value:__ 0.25
- __Unit:__ degree

### Scenarios

- SSP2-4.5
- SSP5-8.5

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

- __Driving Models:__ MRI-ESM2-0 and NorESM2 variants in matrix; verify run catalog
- __Model Count:__ (not recorded)
- __Members:__ Not established from the sources checked.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://carbonplan.org/research/cmip6-downscaling-explainer
- __Data:__ https://carbonplan.org/research/cmip6-downscaling-explainer
- __Format:__ Not established from the sources checked.
- __License:__ Not established. Public access does not itself specify reuse terms.
- __License Url:__ (not recorded)
- __Subsetting:__ Not verified. The linked documentation may describe access, rather than provide a working subset service.
- __Cost:__ Not established from the sources checked.

## References

No entries.

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, dataset row 9: CarbonPlan MACA. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability.

2. __Url:__ https://carbonplan.org/research/cmip6-downscaling-explainer
   - __Locator:__ Checked: first-release date, method distinctions, coverage and funding. Run counts are not GCM counts.

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

1. __Agency:__ Microsoft AI for Earth
   - __Award:__ (not recorded)
   - __Notes:__ Grant acknowledged in release article.
   - __Source Url:__ https://carbonplan.org/research/cmip6-downscaling-explainer

2. __Agency:__ NASA
   - __Award:__ 80NSSC21M0065
   - __Notes:__ Contributing support acknowledged in release article.
   - __Source Url:__ https://carbonplan.org/research/cmip6-downscaling-explainer

## Associated Resources

1. __Label:__ Provider or method documentation
   - __Url:__ https://carbonplan.org/research/cmip6-downscaling-explainer
   - __Description:__ Follow-up resource; availability of data must be confirmed.

2. __Label:__ Run catalog
   - __Url:__ https://github.com/carbonplan/cmip6-downscaling/blob/main/datasets.md
   - __Description:__ Resolve method, GCM, scenario and run availability.

## Aliases

No entries.

## Expert Guidance

- __Title:__ CarbonPlan MACA evaluation guidance
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

This ERA5-trained global implementation is distinct from MACAv2-METDATA and MACAv2-LIVNEH. Use the run catalog to align models and scenarios across methods.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory.
