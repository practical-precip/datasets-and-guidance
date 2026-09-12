# WUS-D3

- __Provider:__ UCLA Center for Climate Science and collaborators
- __Verified On:__ 2026-09-11
- __Id:__ wus-d3
- __Name:__ WUS-D3
- __Version:__ Original ensemble described by Rahimi et al. (2024); separate from later bias-corrected forcing experiments.
- __Summary:__ WRF dynamical downscaling over the western US, with hourly output for selected variables.
- __Source Scope:__ Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested.
- __Kind:__ downscaled-projection

## Method

- __Family:__ Dynamical downscaling
- __Description:__ WRF 4.1.3, with 45 km outer and 9 km inner domains.
- __Reference Dataset:__ GCM boundary forcing; separate ERA5-driven reference simulation. No statistical training target for the original GCM-driven runs.
- __Training Period:__ Not applicable to the dynamical model. Evaluation in the paper uses 1981-2010.

## Coverage

- __Domain:__ Western United States, including the WECC US region; use the inner-domain mask.
- __Grid:__ WRF regional model grid; use supplied coordinates and projection.
- __Timestep:__ Hourly selected variables; other output frequencies depend on tier.
- __Historical:__ 1980-2014
- __Future:__ 2015-2100
- __Calendar:__ Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products.

### Grid Spacing

- __Value:__ 9
- __Unit:__ km (inner domain; 45 km outer domain)

### Scenarios

- SSP3-7.0
- SSP2-4.5 (CESM2 only in the original paper)
- SSP5-8.5 (CESM2 only in the original paper)

### Variables

1. __Name:__ precipitation (tier-dependent variable names)
   - __Unit:__ Inspect WRF accumulation conventions, resets, and time intervals.
   - __Description:__ Precipitation. Confirm whether the selected variable is a rate or accumulated amount.

## Ensemble

- __Driving Models:__ CMIP6
- __Model Count:__ 14
- __Members:__ 16 simulations in the original paper: 14 SSP3-7.0 projections plus two additional CESM2 scenarios. These are not 16 different GCMs.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://registry.opendata.aws/wrf-cmip6/
- __Data:__ https://registry.opendata.aws/wrf-cmip6/
- __Format:__ WRF NetCDF output, organized into data tiers in AWS S3.
- __License:__ Creative Commons Attribution 4.0 International, per the AWS dataset registry.
- __License Url:__ https://registry.opendata.aws/wrf-cmip6/
- __Subsetting:__ Download access is documented; a server-side spatial/time subsetting service has not been verified.
- __Cost:__ AWS registry provides public S3 access with no AWS account required. User processing and storage costs are not estimated.

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- rahimi-wus-d3

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, WUS-D3 row; scenarios expanded using the original paper.

2. __Url:__ https://gmd.copernicus.org/articles/17/2265/2024/
   - __Locator:__ Sections 2.1-2.2, 3, and data availability: models, scenarios, grid, evaluation, and tiers. Publication date, data-tier description, code/data availability, and Financial support.

3. __Url:__ https://registry.opendata.aws/wrf-cmip6/
   - __Locator:__ License, access, updates, and publications distinguishing bias-corrected experiments.

## Generation

- CMIP6

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ 2024-03-20
- __Notes:__ Original WUS-D3 overview publication date. Later uploads and corrected forcing experiments have separate histories.

## Existing Uses

1. __Description:__ Original ensemble evaluated for historical climate and future mean and extreme precipitation across western US states.
   - __Url:__ https://gmd.copernicus.org/articles/17/2265/2024/

## Funding

1. __Agency:__ US Department of Energy
   - __Award:__ DE-SC0016605
   - __Notes:__ HyperFACETS project support.
   - __Source Url:__ https://gmd.copernicus.org/articles/17/2265/2024/

2. __Agency:__ Strategic Environmental Research and Development Program
   - __Award:__ RC19-1391
   - __Notes:__ Study support.
   - __Source Url:__ https://gmd.copernicus.org/articles/17/2265/2024/

3. __Agency:__ California Energy Commission
   - __Award:__ EPC-20-006
   - __Notes:__ Study support.
   - __Source Url:__ https://gmd.copernicus.org/articles/17/2265/2024/

4. __Agency:__ University of California
   - __Award:__ LRF-18-542511
   - __Notes:__ Climate Ecosystems Future project.
   - __Source Url:__ https://gmd.copernicus.org/articles/17/2265/2024/

## Associated Resources

1. __Label:__ Provider documentation
   - __Url:__ https://registry.opendata.aws/wrf-cmip6/
   - __Description:__ Product descriptions and links maintained by the provider.

2. __Label:__ Model code and analysis archive
   - __Url:__ https://doi.org/10.5281/zenodo.10635867
   - __Description:__ WRF versions, figure notebooks, and geography files for the original study.

## Aliases

No entries.

## Expert Guidance

- __Title:__ WUS-D3 evaluation guidance
- __Summary:__ Draft interpretation of documented product properties; expert review is pending.

### Review

- __Status:__ draft
- __Updated:__ 2026-09-11

#### Contributors

- Initial AI-assisted draft

### Evidence

1. __Statement:__ The original study reports precipitation above PRISM in parts of the western US and discusses uncertainty in mountain reference precipitation.
   - __Paper:__ rahimi-wus-d3
   - __Locator:__ Section 3, Figures 3-5.
   - __Scope:__ Original ensemble and historical evaluation; do not generalize to later bias-corrected experiments.

### Regions

- __Northwest:__ product-guidance/wus-d3.northwest.md

## Guidance

## Application guidance

Consider hourly precipitation and spatial storm structure for western US applications. Evaluate accumulated precipitation, seasonal biases, and extremes against multiple suitable references.

## Limits and evaluation checks

Record whether GCM forcing was bias corrected. Findings from the original ensemble cannot be assigned to later corrected experiments. Confirm WRF accumulation resets and time intervals before calculating hourly or daily extremes.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@rahimi-wus-d3]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
