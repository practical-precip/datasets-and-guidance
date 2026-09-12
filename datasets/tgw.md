# IM3/HyperFACETS TGW

- __Provider:__ IM3 / HyperFACETS collaboration; MSD-LIVE data portal
- __Verified On:__ 2026-09-11
- __Id:__ tgw
- __Name:__ IM3/HyperFACETS TGW
- __Version:__ Jones et al. (2023) thermodynamic warming experiments.
- __Summary:__ CONUS WRF simulations of historical weather repeated under four warming trajectories.
- __Source Scope:__ Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested.
- __Kind:__ downscaled-projection

## Method

- __Family:__ Dynamical downscaling with thermodynamic perturbations
- __Description:__ WRF 4.2.1 driven by ERA5, then by ERA5 with time-varying temperature and moisture perturbations.
- __Reference Dataset:__ ERA5 historical weather sequence.
- __Training Period:__ No statistical calibration. Historical weather baseline is 1980-2019.

## Coverage

- __Domain:__ Continental United States regional model domain.
- __Grid:__ WRF regional grid, 425 by 300 cells in the paper.
- __Timestep:__ Hourly for 25 variables and 3-hourly for more than 200 variables in the 2023 description.
- __Historical:__ 1980-2019
- __Future:__ 2020-2059 and 2060-2099, each replaying the 1980-2019 weather sequence.
- __Calendar:__ Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products.

### Grid Spacing

- __Value:__ 12
- __Unit:__ km

### Scenarios

- SSP2-4.5, lower-sensitivity warming
- SSP2-4.5, higher-sensitivity warming
- SSP5-8.5, lower-sensitivity warming
- SSP5-8.5, higher-sensitivity warming

### Variables

1. __Name:__ precipitation (WRF variable names)
   - __Unit:__ Inspect accumulation variables, resets, and output intervals.
   - __Description:__ Precipitation. Confirm whether the selected variable is a rate or accumulated amount.

## Ensemble

- __Driving Models:__ ERA5 weather with warming signals derived from groups of CMIP6 models.
- __Model Count:__ (not recorded)
- __Members:__ Four 80-year warming trajectories, implemented as eight 40-year future simulations, plus the historical simulation. Not an initial-condition ensemble.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://tgw-data.msdlive.org/
- __Data:__ https://tgw-data.msdlive.org/
- __Format:__ NetCDF data with Globus access through MSD-LIVE.
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

- jones-tgw

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, IM3/HyperFACETS TGW row; use paper for 12 km native grid.

2. __Url:__ https://www.nature.com/articles/s41597-023-02485-5
   - __Locator:__ Abstract, experimental design, WRF configuration, Data Records, and Usage Notes. Publication date, Data Records, Usage Notes, and Acknowledgements.

3. __Url:__ https://tgw-data.msdlive.org/
   - __Locator:__ Data access and experiment naming.

## Generation

- CMIP6

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ 2023-09-28
- __Notes:__ Dataset paper publication date; historical weather years and scenario years are not data creation dates.

## Existing Uses

1. __Description:__ Dataset paper evaluates historical precipitation and tropical cyclones and demonstrates paired historical/warmed event analysis.
   - __Url:__ https://www.nature.com/articles/s41597-023-02485-5

## Funding

1. __Agency:__ US Department of Energy, Office of Science
   - __Award:__ (not recorded)
   - __Notes:__ IM3 and HyperFACETS support through MultiSector Dynamics and Regional and Global Model Analysis.
   - __Source Url:__ https://www.nature.com/articles/s41597-023-02485-5

## Associated Resources

1. __Label:__ Provider documentation
   - __Url:__ https://tgw-data.msdlive.org/
   - __Description:__ Product descriptions and links maintained by the provider.

2. __Label:__ MSD-LIVE dataset portal
   - __Url:__ https://tgw-data.msdlive.org/
   - __Description:__ Experiment descriptions and Globus access.

## Aliases

- IM3/HyperFACETS

## Expert Guidance

- __Title:__ IM3/HyperFACETS TGW evaluation guidance
- __Summary:__ Draft interpretation of documented product properties; expert review is pending.

### Review

- __Status:__ draft
- __Updated:__ 2026-09-11

#### Contributors

- Initial AI-assisted draft

### Evidence

1. __Statement:__ The simulations repeat 1980-2019 weather under four future thermodynamic warming trajectories.
   - __Paper:__ jones-tgw
   - __Locator:__ Abstract and experimental design.
   - __Scope:__ Conditional changes to historical weather; not a sample of changes in future circulation occurrence.

## Guidance

## Application guidance

Use paired historical and warmed events to examine thermodynamic changes in storm precipitation, timing, and compound impacts. Preserve the mapping from each future year to its baseline weather year.

## Limits and evaluation checks

These experiments replay historical circulation and are not independent future weather realizations. Do not treat repeated baseline events as independent samples in an extremes fit. Inspect the 2020 and 2060 transitions when computing long-term trends.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@jones-tgw]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
