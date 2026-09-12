# Reclamation BCSD climate and hydrology projections

- __Id:__ reclamation-bcsd
- __Name:__ Reclamation BCSD climate and hydrology projections
- __Provider:__ Bureau of Reclamation / archive partners
- __Version:__ Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications.
- __Summary:__ Select the archive generation and BCSD collection explicitly. Monthly output cannot resolve daily precipitation extremes. CMIP3 scenarios and archive availability require separate verification.
- __Source Scope:__ NCAR matrix transcription. Provider and publication links are supplied for follow-up; only sources explicitly marked checked below were independently read. Download availability and data files were not tested.
- __Verified On:__ 2026-09-11
- __Kind:__ downscaled-projection

## Generation

- CMIP3
- CMIP5

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ (not recorded)
- __Notes:__ Exact creation/release dates are not established. Simulation periods and version tokens are not creation dates.

## Method

- __Family:__ Statistical downscaling
- __Description:__ BCSD
- __Reference Dataset:__ Maurer et al. (2002), as identified in the matrix
- __Training Period:__ Not established from the sources checked.

## Coverage

- __Domain:__ Conterminous United States
- __Grid:__ Latitude-longitude output grid described in the matrix; confirm coordinates in selected files.
- __Timestep:__ Monthly in the matrix; archive contains multiple collections
- __Historical:__ Historical component of 1950-2099 for the matrix CMIP5 collection; experiment transition must be checked.
- __Future:__ Future component of 1950-2099 for the matrix CMIP5 collection; not every model/scenario is necessarily complete.
- __Calendar:__ Not established from the sources checked.

### Grid Spacing

- __Value:__ 0.125
- __Unit:__ degree

### Scenarios

- RCP2.6
- RCP4.5
- RCP6.0
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

- __Driving Models:__ CMIP3 and CMIP5 collections; scenario list here describes CMIP5
- __Model Count:__ (not recorded)
- __Members:__ Not established from the sources checked.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://gdo-dcp.ucllnl.org/
- __Data:__ https://gdo-dcp.ucllnl.org/
- __Format:__ Not established from the sources checked.
- __License:__ Not established. Public access does not itself specify reuse terms.
- __License Url:__ (not recorded)
- __Subsetting:__ Not verified. The linked documentation may describe access, rather than provide a working subset service.
- __Cost:__ Not established from the sources checked.

## References

No entries.

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, dataset row 2: Reclamation BCSD climate and hydrology projections. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability.

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

1. __Label:__ Provider or method documentation
   - __Url:__ https://gdo-dcp.ucllnl.org/
   - __Description:__ Follow-up resource; availability of data must be confirmed.

2. __Label:__ Related publication or technical report
   - __Url:__ https://gdo-dcp.ucllnl.org/downscaled_cmip_projections/techmemo/downscaled_climate.pdf
   - __Description:__ Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration.

## Aliases

No entries.

## Expert Guidance

- __Title:__ Reclamation BCSD climate and hydrology projections evaluation guidance
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

Select the archive generation and BCSD collection explicitly. Monthly output cannot resolve daily precipitation extremes. CMIP3 scenarios and archive availability require separate verification.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://gdo-dcp.ucllnl.org/downscaled_cmip_projections/techmemo/downscaled_climate.pdf) is available for further review.
