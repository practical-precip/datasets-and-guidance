# NA-CORDEX CMIP5

- __Provider:__ Participating NA-CORDEX modeling groups; NCAR GDEX
- __Verified On:__ 2026-09-11
- __Id:__ na-cordex
- __Name:__ NA-CORDEX CMIP5
- __Version:__ North American CMIP5 archive; distinguish native, regridded, and bias-corrected outputs.
- __Summary:__ A regional climate-model ensemble with 25 km and 50 km simulations over North America.
- __Source Scope:__ Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested.
- __Kind:__ downscaled-projection

## Method

- __Family:__ Dynamical downscaling
- __Description:__ Multiple regional climate models driven by CMIP5 boundary conditions.
- __Reference Dataset:__ Not applicable to native dynamical runs. Reference data depend on any subsequent bias correction.
- __Training Period:__ Not applicable to native runs; consult the selected bias-corrected product when relevant.

## Coverage

- __Domain:__ Most of North America; regional model masks and grids differ.
- __Grid:__ Native regional grids or derived common grids; record which is used.
- __Timestep:__ Daily products; other variables and frequencies vary by archive.
- __Historical:__ 1950-2005
- __Future:__ 2006-2100; coverage varies by GCM-RCM experiment.
- __Calendar:__ Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products.

### Grid Spacing

- __Value:__ 0.22
- __Unit:__ degrees for approximately 25 km runs; 0.44 degrees for approximately 50 km runs

### Scenarios

- RCP4.5
- RCP8.5

### Variables

1. __Name:__ pr
   - __Unit:__ Inspect the variable units and time bounds in the selected files.
   - __Description:__ Precipitation. Confirm whether the selected variable is a rate or accumulated amount.

## Ensemble

- __Driving Models:__ CMIP5
- __Model Count:__ (not recorded)
- __Members:__ Uneven GCM-RCM-scenario matrix. Count unique parent GCMs separately from RCMs, resolutions, and simulations.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://na-cordex.org/data-access.html
- __Data:__ https://gdex.ucar.edu/datasets/d316009/
- __Format:__ NetCDF in the core archive; a separately documented Zarr distribution is available on AWS and GDEX d316010.
- __License:__ NA-CORDEX terms permit commercial use and require dataset citation and acknowledgements; consult the full terms.
- __License Url:__ https://na-cordex.org/terms-use.html
- __Subsetting:__ Select archive files by variable, scenario, GCM, RCM, output frequency, grid, and bias correction. The Zarr distribution supports client-side chunk access.
- __Cost:__ NA-CORDEX documents AWS-sponsored storage and egress for its public Zarr copy. User analysis costs are not included.

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- bukovsky-na-cordex

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, NA-CORDEX row.

2. __Url:__ https://gdex.ucar.edu/datasets/d316009/
   - __Locator:__ Abstract: domain, CMIP5 driving models, 1950-2100 coverage, and two grid spacings.

3. __Url:__ https://na-cordex.org/data-access.html
   - __Locator:__ GDEX migration and differences between ESGF and derived archives.

4. __Url:__ https://na-cordex.org/terms-use.html
   - __Locator:__ Terms of Use: citation, acknowledgement, and commercial-use provisions.

5. __Url:__ https://na-cordex.org/na-cordex-on-aws.html
   - __Locator:__ Format, available data, and free storage/egress sponsorship.

6. __Url:__ https://na-cordex.org/dataset-description.html
   - __Locator:__ File naming and variables.

## Generation

- CMIP5

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ (not recorded)
- __Notes:__ Exact dataset creation and release dates were not established from the sources reviewed. A paper date, repository timestamp, or simulation year is not a dataset creation date.

## Existing Uses

1. __Description:__ Bukovsky and Mearns (2020) analyze regional projections and their relation to climate sensitivity.
   - __Url:__ https://link.springer.com/article/10.1007/s10584-020-02835-x

## Funding

1. __Agency:__ US Department of Defense ESTCP
   - __Award:__ (not recorded)
   - __Notes:__ NA-CORDEX archive support credited in its terms of use.
   - __Source Url:__ https://na-cordex.org/terms-use.html

## Associated Resources

1. __Label:__ Provider documentation
   - __Url:__ https://na-cordex.org/data-access.html
   - __Description:__ Product descriptions and links maintained by the provider.

2. __Label:__ Zarr distribution
   - __Url:__ https://na-cordex.org/na-cordex-on-aws.html
   - __Description:__ Cloud archive layout, Intake catalog, and GDEX mirror.

3. __Label:__ Dataset file conventions
   - __Url:__ https://na-cordex.org/dataset-description.html
   - __Description:__ Naming, output frequencies, and experiment combinations.

## Aliases

No entries.

## Expert Guidance

- __Title:__ NA-CORDEX CMIP5 evaluation guidance
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

Use matched GCM-RCM pairs to examine the contribution of regional modeling to projection spread. Choose native or derived output according to the analysis and document that choice.

## Limits and evaluation checks

The archive is an uneven experiment matrix. Treating all files as equally independent can overweight shared parent models, resolutions, or RCMs. Check the selected run inventory rather than assuming every pairing exists.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@bukovsky-na-cordex]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
