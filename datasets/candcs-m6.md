# CanDCS-M6

- __Id:__ candcs-m6
- __Name:__ CanDCS-M6
- __Provider:__ Pacific Climate Impacts Consortium / Environment and Climate Change Canada
- __Version:__ Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications.
- __Summary:__ CanDCS-M6 is the multivariate product. CanDCS-U6 uses BCCAQv2 and is a different selection. Check provider errata before downloading.
- __Source Scope:__ Matrix fields supplemented by the Canadian provider download page checked on 2026-09-11. Errata and file metadata still need review for the selected release. The reference-data and scenario lists retain the matrix configuration. The current provider page describes blended NRCANmet/PNWNAmet and a later SSP3-7.0 subset; check the selected release separately.
- __Verified On:__ 2026-09-11
- __Kind:__ downscaled-projection

## Generation

- CMIP6

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ (not recorded)
- __Notes:__ Exact creation/release dates are not established. Simulation periods and version tokens are not creation dates.

## Method

- __Family:__ Statistical downscaling
- __Description:__ Multivariate bias correction (MBCn)
- __Reference Dataset:__ AHCCD v3 temperature, adjusted Canadian precipitation, and PNWNAmet as summarized by the matrix
- __Training Period:__ Not established from the sources checked.

## Coverage

- __Domain:__ Canada
- __Grid:__ Latitude-longitude output grid described in the matrix; confirm coordinates in selected files.
- __Timestep:__ Daily
- __Historical:__ Historical component of 1950-2100; experiment transition must be checked.
- __Future:__ Future component of 1950-2100; not every model/scenario is necessarily complete.
- __Calendar:__ Not established from the sources checked.

### Grid Spacing

- __Value:__ 0.08333333333333333
- __Unit:__ degree

### Scenarios

- SSP1-2.6
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

- __Driving Models:__ CMIP6
- __Model Count:__ (not recorded)
- __Members:__ Not established from the sources checked.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://climate-scenarios.canada.ca/?page=CanDCS6-data
- __Data:__ https://climate-scenarios.canada.ca/?page=CanDCS6-data
- __Format:__ Not established from the sources checked.
- __License:__ Not established. Public access does not itself specify reuse terms.
- __License Url:__ (not recorded)
- __Subsetting:__ Provider offers region, time, variable, model and scenario subsets; not single grid points.
- __Cost:__ Not established from the sources checked.

## References

No entries.

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, dataset row 10: CanDCS-M6. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability.

2. __Url:__ https://climate-scenarios.canada.ca/?page=CanDCS6-data
   - __Locator:__ Checked: M6 uses MBCn, time coverage, scenarios, variables and subset controls; page lists updates through October 2025.

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

1. __Label:__ Provider or method documentation
   - __Url:__ https://climate-scenarios.canada.ca/?page=CanDCS6-data
   - __Description:__ Follow-up resource; availability of data must be confirmed.

2. __Label:__ Related publication or technical report
   - __Url:__ https://rmets.onlinelibrary.wiley.com/doi/full/10.1002/gdj3.257
   - __Description:__ Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration.

## Aliases

No entries.

## Expert Guidance

- __Title:__ CanDCS-M6 evaluation guidance
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

CanDCS-M6 is the multivariate product. CanDCS-U6 uses BCCAQv2 and is a different selection. Check provider errata before downloading.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://rmets.onlinelibrary.wiley.com/doi/full/10.1002/gdj3.257) is available for further review.
