# EPA Dynamically Downscaled Ensemble (EDDE) v1

- __Id:__ edde-v1
- __Name:__ EPA Dynamically Downscaled Ensemble (EDDE) v1
- __Provider:__ US Environmental Protection Agency
- __Version:__ Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications.
- __Summary:__ Historical and future time windows differ by model and scenario. A 36 km regional model does not directly resolve local convective rainfall. Check each run before calculating paired changes.
- __Source Scope:__ Matrix entry supplemented by EPA AWS registry documentation checked on 2026-09-11.
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
- __Description:__ WRF dynamical downscaling
- __Reference Dataset:__ Physical downscaling; no statistical training reference
- __Training Period:__ Not established from the sources checked.

## Coverage

- __Domain:__ Conterminous United States
- __Grid:__ Model or regional output grid; confirm projection and coordinates in selected files.
- __Timestep:__ Hourly
- __Historical:__ Historical component of 1975-2005 CESM; 1995-2005 CESM and GFDL-CM3; experiment transition must be checked.
- __Future:__ RCP4.5 2025-2100 (CESM), RCP6.0 2025-2055 (CESM); inspect RCP8.5 windows for CESM and GFDL-CM3.
- __Calendar:__ Not established from the sources checked.

### Grid Spacing

- __Value:__ 36
- __Unit:__ km

### Scenarios

- RCP4.5
- RCP6.0
- RCP8.5

### Variables

1. __Name:__ precipitation
   - __Unit:__ Verify units and accumulation interval in selected files.
   - __Description:__ Precipitation is covered by this record. Additional atmospheric variables require a complete archive-specific inventory.

## Ensemble

- __Driving Models:__ CESM and GFDL-CM3
- __Model Count:__ 2
- __Members:__ Not established from the sources checked.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://registry.opendata.aws/epa-edde-v1/
- __Data:__ https://registry.opendata.aws/epa-edde-v1/
- __Format:__ CF-compliant NetCDF4
- __License:__ US government public-domain data unless otherwise specified by EPA.
- __License Url:__ https://registry.opendata.aws/epa-edde-v1/
- __Subsetting:__ Not verified. The linked documentation may describe access, rather than provide a working subset service.
- __Cost:__ Anonymous S3 download access; optional analysis costs are not estimated.

## References

No entries.

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, dataset row 26: EPA Dynamically Downscaled Ensemble (EDDE) v1. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability.

2. __Url:__ https://registry.opendata.aws/epa-edde-v1/
   - __Locator:__ Checked: time windows, models, format, reuse statement and distribution.

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

1. __Label:__ Provider or method documentation
   - __Url:__ https://registry.opendata.aws/epa-edde-v1/
   - __Description:__ Follow-up resource; availability of data must be confirmed.

2. __Label:__ Related publication or technical report
   - __Url:__ https://doi.org/10.5194/acp-18-15471-2018
   - __Description:__ Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration.

## Aliases

No entries.

## Expert Guidance

- __Title:__ EPA Dynamically Downscaled Ensemble (EDDE) v1 evaluation guidance
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

Historical and future time windows differ by model and scenario. A 36 km regional model does not directly resolve local convective rainfall. Check each run before calculating paired changes.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://doi.org/10.5194/acp-18-15471-2018) is available for further review.
