# UW-Madison Probabilistic Downscaling (UW-PD)

- __Id:__ uw-pd-cmip5
- __Name:__ UW-Madison Probabilistic Downscaling (UW-PD)
- __Provider:__ University of Wisconsin-Madison / NOAA distribution
- __Version:__ Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications.
- __Summary:__ Distinguish a daily probability distribution from a sampled weather sequence. Stochastic realizations are not additional GCM initial-condition members. Check space-time dependence for basin applications.
- __Source Scope:__ Matrix fields supplemented by the NOAA AWS registry description checked on 2026-09-11.
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
- __Description:__ Probabilistic statistical downscaling
- __Reference Dataset:__ NCEP Reanalysis
- __Training Period:__ Not established from the sources checked.

## Coverage

- __Domain:__ United States and southern Canada east of the Rocky Mountains
- __Grid:__ Latitude-longitude output grid described in the matrix; confirm coordinates in selected files.
- __Timestep:__ Daily distributions and sampled realizations
- __Historical:__ Historical component of 1950-2100; experiment transition must be checked.
- __Future:__ Future component of 1950-2100; not every model/scenario is necessarily complete.
- __Calendar:__ Not established from the sources checked.

### Grid Spacing

- __Value:__ 0.1
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

- __Driving Models:__ 24 CMIP5 GCMs in the matrix
- __Model Count:__ 24
- __Members:__ Registry describes 14 stochastic precipitation realizations and 3 temperature realizations. These are not GCM initial-condition member counts.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://registry.opendata.aws/noaa-uwpd-cmip5/
- __Data:__ https://registry.opendata.aws/noaa-uwpd-cmip5/
- __Format:__ NetCDF
- __License:__ NOAA open-use terms request attribution and prohibit implying NOAA endorsement.
- __License Url:__ https://registry.opendata.aws/noaa-uwpd-cmip5/
- __Subsetting:__ Not verified. The linked documentation may describe access, rather than provide a working subset service.
- __Cost:__ Anonymous S3 access is documented; analysis costs depend on the user environment.

## References

No entries.

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, dataset row 18: UW-Madison Probabilistic Downscaling (UW-PD). Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability.

2. __Url:__ https://registry.opendata.aws/noaa-uwpd-cmip5/
   - __Locator:__ Checked: distribution method, stochastic realization counts, file naming, license and anonymous access.

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

1. __Label:__ Provider or method documentation
   - __Url:__ https://registry.opendata.aws/noaa-uwpd-cmip5/
   - __Description:__ Follow-up resource; availability of data must be confirmed.

2. __Label:__ Method documentation
   - __Url:__ https://djlorenz.github.io/downscaling2/main.html
   - __Description:__ Distribution-based downscaling methodology.

## Aliases

- UWPD

## Expert Guidance

- __Title:__ UW-Madison Probabilistic Downscaling (UW-PD) evaluation guidance
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

Distinguish a daily probability distribution from a sampled weather sequence. Stochastic realizations are not additional GCM initial-condition members. Check space-time dependence for basin applications.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory.
