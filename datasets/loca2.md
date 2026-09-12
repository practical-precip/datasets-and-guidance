# LOCA2 North America

- __Id:__ loca2
- __Name:__ LOCA2 North America
- __Version:__ Precipitation v20240915; original ensemble described by Pierce et al. (2023)
- __Summary:__ Daily CMIP6 projections using localized constructed analogs on a roughly 6 km North American grid.
- __Provider:__ Scripps Institution of Oceanography, UC San Diego
- __Verified On:__ 2026-09-11
- __Source Scope:__ Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested.
- __Kind:__ downscaled-projection

## Method

- __Family:__ Statistical downscaling
- __Description:__ Localized constructed analogs, LOCA version 2.
- __Reference Dataset:__ Unsplit Livneh precipitation; consult variable-specific training documentation.
- __Training Period:__ 1950-2014 precipitation training record.

## Coverage

- __Domain:__ North American land domain, including CONUS and parts of Canada and Mexico. Check the supplied land mask for the study basin.
- __Grid:__ Regular latitude-longitude grid.
- __Timestep:__ Daily
- __Historical:__ 1950-2014
- __Future:__ 2015-2100; inspect individual model end dates.
- __Calendar:__ Inspect time coordinates and calendars in each selected file.

### Grid Spacing

- __Value:__ 0.0625
- __Unit:__ degrees (approximately 6 km)

### Scenarios

- SSP2-4.5
- SSP3-7.0
- SSP5-8.5

### Variables

1. __Name:__ pr
   - __Unit:__ Read precipitation units and accumulation conventions from the selected files.
   - __Description:__ Daily precipitation.

## Ensemble

- __Driving Models:__ CMIP6
- __Model Count:__ 27
- __Members:__ Up to 10 initial-condition members per model in the 2023 description; availability varies by model and scenario.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://loca.ucsd.edu/
- __Data:__ https://loca.ucsd.edu/
- __Format:__ NetCDF
- __License:__ Not recorded here. Confirm redistribution and attribution terms with the provider before redistributing files.
- __License Url:__ (not recorded)
- __Subsetting:__ Download access is documented; a server-side spatial/time subsetting service has not been verified.
- __Cost:__ Public access is documented. Download fees and platform processing costs have not been independently checked.

## References

- pierce-loca2

## Metadata Sources

1. __Url:__ https://loca.ucsd.edu/
   - __Locator:__ September 22, 2024 precipitation release notice and domain description.

2. __Url:__ https://loca.ucsd.edu/training-observed-data-sets/
   - __Locator:__ LOCA2 precipitation training data.

3. __Url:__ https://cirrus.ucsd.edu/~pierce/papers/Pierce_et_al_JHM_2023_LOCA2_precip_extremes_VoR.pdf
   - __Locator:__ Abstract and data/methods; original ensemble scope.

4. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, combined LOCA versions 1 and 2 row. Existing version-specific provider metadata takes precedence.

5. __Url:__ https://www.nature.com/articles/s41597-024-04205-z
   - __Locator:__ Methods: comparison datasets, identifying LOCA2 use in the Fifth National Climate Assessment.

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## Generation

- CMIP6

## Dates

- __Created:__ (not recorded)
- __Released:__ 2024-09-22
- __Publication:__ (not recorded)
- __Notes:__ Provider announced precipitation v20240915 on 2024-09-22. The version token is not asserted to be its creation date. The 2023 paper predates this precipitation release.

## Existing Uses

1. __Description:__ LOCA2 is identified as a dataset used in the Fifth National Climate Assessment. This documents the product family, not use of precipitation release v20240915.
   - __Url:__ https://www.nature.com/articles/s41597-024-04205-z

## Funding

No entries.

## Associated Resources

1. __Label:__ Provider documentation
   - __Url:__ https://loca.ucsd.edu/
   - __Description:__ Product descriptions and links maintained by the provider.

2. __Label:__ Training data
   - __Url:__ https://loca.ucsd.edu/training-observed-data-sets/
   - __Description:__ Variable-specific observed training datasets.

## Aliases

- LOCA2

## Expert Guidance

- __Title:__ LOCA2 North America evaluation guidance
- __Summary:__ Provisional application guidance; evaluate the selected product release.

### Review

- __Status:__ draft
- __Updated:__ 2026-09-11

#### Contributors

- Initial AI-assisted draft

### Evidence

No entries.

## Guidance

## Application guidance

Treat LOCA2 as a candidate for basin water-balance and daily precipitation studies. Evaluate basin totals, wet/dry spells, and spatial dependence at the scale used by the application. Fine grid spacing alone does not demonstrate suitability.

## Version and evaluation checks

Record the precipitation release and the model/member/scenario combination. The provider reports a precipitation update in September 2024. Do not transfer an evaluation of an older release to a new one without checking the changes.

The ensemble study is documented in [@pierce-loca2]. Compare extremes over matched accumulation windows and quantify sampling uncertainty. Daily data alone cannot provide hourly intensity-duration-frequency estimates.

## Expert contribution needed

Add regional evaluation results, diagnostics, and evidence of limitations here. State the product release, basin, reference data, period, and application. These suggestions are an AI-assisted draft and have not been endorsed by a domain expert.
