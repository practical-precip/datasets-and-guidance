# LOCA CMIP5

- __Provider:__ Scripps Institution of Oceanography, UC San Diego
- __Verified On:__ 2026-09-11
- __Id:__ loca-cmip5
- __Name:__ LOCA CMIP5
- __Version:__ Original LOCA CMIP5 archive at native 1/16 degree; not LOCA_8th evaluation data.
- __Summary:__ Daily localized constructed-analog projections from the CMIP5 generation.
- __Source Scope:__ Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested.
- __Kind:__ downscaled-projection

## Method

- __Family:__ Statistical downscaling
- __Description:__ Localized constructed analogs (LOCA).
- __Reference Dataset:__ Livneh; distinct from the unsplit precipitation training used for LOCA2.
- __Training Period:__ Not recorded in the sources checked; inspect the release documentation.

## Coverage

- __Domain:__ North America from central Mexico through southern Canada.
- __Grid:__ Regular latitude-longitude grid.
- __Timestep:__ Daily
- __Historical:__ 1950-2005
- __Future:__ 2006-2100; some model records end in 2099.
- __Calendar:__ Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products.

### Grid Spacing

- __Value:__ 0.0625
- __Unit:__ degrees (1/16 degree)

### Scenarios

- RCP4.5
- RCP8.5

### Variables

1. __Name:__ pr
   - __Unit:__ Inspect the variable units and time bounds in the selected files.
   - __Description:__ Precipitation. Confirm whether the selected variable is a rate or accumulated amount.

2. __Name:__ tasmin
   - __Unit:__ K; verify the selected distribution.
   - __Description:__ Daily minimum near-surface temperature.

3. __Name:__ tasmax
   - __Unit:__ K; verify the selected distribution.
   - __Description:__ Daily maximum near-surface temperature.

## Ensemble

- __Driving Models:__ CMIP5
- __Model Count:__ 32
- __Members:__ Model/member/scenario availability must be checked in the selected archive.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://loca.ucsd.edu/
- __Data:__ https://loca.ucsd.edu/
- __Format:__ NetCDF; inspect the selected distribution.
- __License:__ Dataset reuse terms were not verified. Consult the provider; the article or code license is not a data license.
- __License Url:__ (not recorded)
- __Subsetting:__ Download access is documented; a server-side spatial/time subsetting service has not been verified.
- __Cost:__ Public access is documented. Download fees and platform processing costs have not been independently checked.

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- pierce-loca

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, LOCA versions 1 and 2 row; generations separated in this catalog.

2. __Url:__ https://loca.ucsd.edu/
   - __Locator:__ CMIP5 description: 32 models, domain, native grid, and historical/future periods.

3. __Url:__ https://github.com/NCAR/hydro-climate-evaluation/blob/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/README.md#downscaling-methods
   - __Locator:__ LOCA_8th is an evaluation label, not evidence of the native archive resolution.

4. __Url:__ https://v2.cal-adapt.org/tools/extended-drought/
   - __Locator:__ Data description and scenario construction.

## Generation

- CMIP5

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ (not recorded)
- __Notes:__ Exact dataset creation and release dates were not established from the sources reviewed. A paper date, repository timestamp, or simulation year is not a dataset creation date.

## Existing Uses

1. __Description:__ Cal-Adapt extended-drought tool describes CMIP5 LOCA projections as inputs; the tool uses selected scenarios and transformations.
   - __Url:__ https://v2.cal-adapt.org/tools/extended-drought/

## Funding

No entries.

## Associated Resources

1. __Label:__ Provider documentation
   - __Url:__ https://loca.ucsd.edu/
   - __Description:__ Product descriptions and links maintained by the provider.

2. __Label:__ Cal-Adapt extended drought
   - __Url:__ https://v2.cal-adapt.org/tools/extended-drought/
   - __Description:__ An application of the CMIP5 LOCA archive.

## Aliases

- LOCA

## Expert Guidance

- __Title:__ LOCA CMIP5 evaluation guidance
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

Useful as a candidate when reproducing studies built on CMIP5 LOCA. Test precipitation occurrence and spatial dependence at the basin scale.

## Limits and evaluation checks

The NCAR map label LOCA_8th does not identify this native 1/16-degree archive. Obtain the evaluation preprocessing and version before transferring its results. Do not use LOCA2 release notes to describe this product.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@pierce-loca]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
