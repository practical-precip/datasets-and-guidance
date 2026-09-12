# GARD-LENS

- __Provider:__ NSF NCAR and Cornell University; NCAR GDEX
- __Verified On:__ 2026-09-11
- __Id:__ gard-lens
- __Name:__ GARD-LENS
- __Version:__ 2024 published ensemble; NCAR GDEX d619000 (DOI 10.5065/5W7W-5224).
- __Summary:__ Daily projections from 200 initial-condition members across three CMIP6 models.
- __Source Scope:__ Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested.
- __Kind:__ downscaled-projection

## Method

- __Family:__ Statistical downscaling
- __Description:__ Generalized Analog Regression Downscaling (GARD), configured for the published large ensemble.
- __Reference Dataset:__ GMET target fields and ERA5 large-scale predictors.
- __Training Period:__ 1980-2014 for CONUS and Alaska; 1990-2014 for Hawaii.

## Coverage

- __Domain:__ CONUS, Alaska, and Hawaii.
- __Grid:__ Regular latitude-longitude grid.
- __Timestep:__ Daily
- __Historical:__ 1950-2014; EC-Earth3 begins in 1970.
- __Future:__ 2015-2100
- __Calendar:__ Not verified from data files. Read the time coordinate, calendar, and accumulation interval before combining products.

### Grid Spacing

- __Value:__ 12
- __Unit:__ km in CONUS; 4 km in Alaska; 1 km in Hawaii (nominal)

### Scenarios

- SSP3-7.0

### Variables

1. __Name:__ pcp
   - __Unit:__ Inspect precipitation accumulation units in the selected NetCDF file.
   - __Description:__ Precipitation. Confirm whether the selected variable is a rate or accumulated amount.

2. __Name:__ t_mean
   - __Unit:__ Check selected files.
   - __Description:__ Daily mean temperature.

3. __Name:__ t_range
   - __Unit:__ Check selected files.
   - __Description:__ Daily temperature range.

## Ensemble

- __Driving Models:__ CMIP6: CESM2, CanESM5, EC-Earth3
- __Model Count:__ 3
- __Members:__ 200 initial-condition members in total. Retain parent-model identity in uncertainty analysis.

### Member Counts

1. __Model:__ CESM2
   - __Count:__ 100
   - __Scope:__ Historical and SSP3-7.0, 1950-2100.
   - __Source Url:__ https://www.nature.com/articles/s41597-024-04205-z

2. __Model:__ CanESM5
   - __Count:__ 50
   - __Scope:__ Historical and SSP3-7.0, 1950-2100.
   - __Source Url:__ https://www.nature.com/articles/s41597-024-04205-z

3. __Model:__ EC-Earth3
   - __Count:__ 50
   - __Scope:__ Historical and SSP3-7.0, 1970-2100.
   - __Source Url:__ https://www.nature.com/articles/s41597-024-04205-z

## Access

- __Landing Page:__ https://gdex.ucar.edu/datasets/d619000/
- __Data:__ https://gdex.ucar.edu/datasets/d619000/
- __Format:__ NetCDF; inspect the selected distribution.
- __License:__ Creative Commons Attribution 4.0 International, explicitly listed under Data License in NCAR GDEX.
- __License Url:__ https://gdex.ucar.edu/datasets/d619000/
- __Subsetting:__ Download access is documented; a server-side spatial/time subsetting service has not been verified.
- __Cost:__ Public access is documented. Download fees and platform processing costs have not been independently checked.

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## References

- hartke-gard-lens

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, GARD-LENS row.

2. __Url:__ https://gdex.ucar.edu/datasets/d619000/
   - __Locator:__ Abstract and temporal range; dataset identifier and training windows. Data Formats and Data License.

3. __Url:__ https://www.nature.com/articles/s41597-024-04205-z
   - __Locator:__ Methods: GCM data, observation data, GARD predictor selection; EC-Earth3 start year. Table 1: members by model; publication date, analysis, and Acknowledgements.

## Generation

- CMIP6

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ 2024-12-18
- __Notes:__ Publication date of the dataset paper. No exact archive creation or release date is asserted.

## Existing Uses

1. __Description:__ The dataset paper demonstrates member-sampling effects on trends and compares downscaled products.
   - __Url:__ https://www.nature.com/articles/s41597-024-04205-z

## Funding

1. __Agency:__ US Department of Defense ESTCP
   - __Award:__ W912HQ23C0002; CR22-7259
   - __Notes:__ Dataset study support.
   - __Source Url:__ https://www.nature.com/articles/s41597-024-04205-z

2. __Agency:__ US Bureau of Reclamation Dam Safety Office
   - __Award:__ R22AC00313
   - __Notes:__ Dataset study support.
   - __Source Url:__ https://www.nature.com/articles/s41597-024-04205-z

3. __Agency:__ US National Science Foundation
   - __Award:__ 1852977
   - __Notes:__ NCAR facility support acknowledged in the paper.
   - __Source Url:__ https://www.nature.com/articles/s41597-024-04205-z

4. __Agency:__ US Department of Energy
   - __Award:__ DE-SC0016605
   - __Notes:__ Partial author support through Regional and Global Climate Modeling.
   - __Source Url:__ https://www.nature.com/articles/s41597-024-04205-z

## Associated Resources

1. __Label:__ Provider documentation
   - __Url:__ https://gdex.ucar.edu/datasets/d619000/
   - __Description:__ Product descriptions and links maintained by the provider.

2. __Label:__ Simulation configuration archive
   - __Url:__ https://doi.org/10.5281/zenodo.12585641
   - __Description:__ GARD-LENS simulation files cited by the dataset paper.

## Aliases

No entries.

## Expert Guidance

- __Title:__ GARD-LENS evaluation guidance
- __Summary:__ Draft interpretation of documented product properties; expert review is pending.

### Review

- __Status:__ draft
- __Updated:__ 2026-09-11

#### Contributors

- Initial AI-assisted draft

### Evidence

1. __Statement:__ The ensemble contains 200 members from three CMIP6 models; EC-Earth3 begins in 1970.
   - __Paper:__ hartke-gard-lens
   - __Locator:__ Abstract and Methods: GCM data.
   - __Scope:__ Published GARD-LENS ensemble under historical and SSP3-7.0 forcing.

### Regions

- __Alaska:__ product-guidance/gard-lens.alaska.md

## Guidance

## Application guidance

Use member-level series to estimate internal variability while keeping results grouped by parent GCM. Compare balanced parent-model summaries with any pooled-member result.

## Limits and evaluation checks

The ensemble samples only three CMIP6 models under one future scenario. The paper identifies all three as relatively high climate-sensitivity models [@hartke-gard-lens], so also examine how their forced responses compare with a broader model ensemble. Do not interpret 200 members as 200 independent climate models or as complete scenario uncertainty. EC-Earth3 starts later, which affects common-period comparisons.

## Documentation and expert contributions

The linked metadata sources describe this archive. Related publication: [@hartke-gard-lens]. Recommendations above are AI-assisted interpretation, not an endorsement from the dataset authors. Add region-specific evaluations with the release, model/member, reference data, period, and diagnostic before marking this guidance reviewed.
