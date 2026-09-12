# ORNL DBCCA

- __Id:__ ornl-dbcca
- __Name:__ ORNL DBCCA
- __Provider:__ Oak Ridge National Laboratory
- __Version:__ Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications.
- __Summary:__ Keep DBCCA-Livneh and DBCCA-Daymet separate in comparisons. Differences reflect both reference observations and processing choices.
- __Source Scope:__ NCAR matrix transcription. Provider and publication links are supplied for follow-up; only sources explicitly marked checked below were independently read. Download availability and data files were not tested.
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
- __Description:__ Double bias correction constructed analogs
- __Reference Dataset:__ Separate Livneh and Daymet training variants
- __Training Period:__ Not established from the sources checked.

## Coverage

- __Domain:__ Conterminous United States
- __Grid:__ Latitude-longitude output grid described in the matrix; confirm coordinates in selected files.
- __Timestep:__ Daily
- __Historical:__ Historical component of 1980-2060; experiment transition must be checked.
- __Future:__ Future component of 1980-2060; not every model/scenario is necessarily complete.
- __Calendar:__ Not established from the sources checked.

### Grid Spacing

- __Value:__ 0.041666666666666664
- __Unit:__ degree

### Scenarios

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

- __Driving Models:__ CMIP6; matrix lists six members, not an unambiguous GCM count
- __Model Count:__ (not recorded)
- __Members:__ Not established from the sources checked.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://hydrosource.ornl.gov/dataset/9505V3
- __Data:__ https://hydrosource.ornl.gov/dataset/9505V3
- __Format:__ Not established from the sources checked.
- __License:__ Not established. Public access does not itself specify reuse terms.
- __License Url:__ (not recorded)
- __Subsetting:__ Not verified. The linked documentation may describe access, rather than provide a working subset service.
- __Cost:__ Not established from the sources checked.

## References

No entries.

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, dataset row 7: ORNL DBCCA. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability.

2. __Url:__ https://www.ornl.gov/research-highlight/how-may-choice-downscaling-techniques-and-meteorological-reference-observations
   - __Locator:__ Checked: research highlight identifies RegCM4, DBCCA, Livneh/Daymet comparison and DOE support.

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

1. __Agency:__ US Department of Energy, Water Power Technologies Office
   - __Award:__ (not recorded)
   - __Notes:__ SECURE Water Act Section 9505 assessment, acknowledged by the ORNL research highlight.
   - __Source Url:__ https://www.ornl.gov/research-highlight/how-may-choice-downscaling-techniques-and-meteorological-reference-observations

## Associated Resources

1. __Label:__ Provider or method documentation
   - __Url:__ https://hydrosource.ornl.gov/dataset/9505V3
   - __Description:__ Follow-up resource; availability of data must be confirmed.

2. __Label:__ Related publication or technical report
   - __Url:__ https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022EF002734
   - __Description:__ Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration.

## Aliases

- SWA 9505v3 - DBBCA
- SWA 9505v3 DBBCA

## Expert Guidance

- __Title:__ ORNL DBCCA evaluation guidance
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

Keep DBCCA-Livneh and DBCCA-Daymet separate in comparisons. Differences reflect both reference observations and processing choices.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2022EF002734) is available for further review.
