# NEX-GDDP-CMIP6

- __Id:__ nex-gddp-cmip6
- __Name:__ NEX-GDDP-CMIP6
- __Version:__ Original archive described in 2022; later v1 revisions and v2 exist and require separate review.
- __Summary:__ Global daily CMIP6 projections using bias correction and spatial disaggregation at 0.25 degrees.
- __Provider:__ NASA Earth Exchange / NASA Center for Climate Simulation
- __Verified On:__ 2026-09-11
- __Source Scope:__ Provider documentation and selected papers checked. Unresolved fields are marked explicitly; data files and application performance were not tested.
- __Kind:__ downscaled-projection

## Method

- __Family:__ Statistical downscaling
- __Description:__ Bias correction and spatial disaggregation (BCSD).
- __Reference Dataset:__ Global Meteorological Forcing Dataset (GMFD).
- __Training Period:__ 1960-2014 reference data in the 2022 description.

## Coverage

- __Domain:__ Global land coverage, 60 degrees south to 90 degrees north; check masks.
- __Grid:__ Regular latitude-longitude grid.
- __Timestep:__ Daily
- __Historical:__ 1950-2014
- __Future:__ 2015-2100
- __Calendar:__ Check the selected file time coordinate and technical-note handling of model calendars.

### Grid Spacing

- __Value:__ 0.25
- __Unit:__ degrees

### Scenarios

- SSP1-2.6
- SSP2-4.5
- SSP3-7.0
- SSP5-8.5

### Variables

1. __Name:__ pr
   - __Unit:__ kg m-2 s-1 (daily mean precipitation flux)
   - __Description:__ Convert to daily accumulation using the file time interval.

## Ensemble

- __Driving Models:__ CMIP6
- __Model Count:__ 35
- __Members:__ One variant per model in the original 2022 archive; do not interpret model count as within-model member count.

### Member Counts

1. __Model:__ Each GCM in the original 2022 archive
   - __Count:__ 1
   - __Scope:__ One selected variant per model in the described release; later archives require a new inventory.
   - __Source Url:__ https://www.nature.com/articles/s41597-022-01393-4

## Access

- __Landing Page:__ https://www.nccs.nasa.gov/data-collections/nex-gddp-cmip6/
- __Data:__ https://registry.opendata.aws/nex-gddp-cmip6/
- __Format:__ NetCDF4; AWS S3 and NCCS THREDDS access.
- __License:__ CC BY-SA 4.0 for the archive described in the 2022 paper; confirm terms for the selected release.
- __License Url:__ https://creativecommons.org/licenses/by-sa/4.0/
- __Subsetting:__ NCCS THREDDS NetCDF Subset Service supports variable, latitude/longitude, and time selection; public S3 offers file access.
- __Cost:__ AWS registry documents public S3 access without an AWS account. Compute and storage costs for user analyses are not estimated.

## References

- thrasher

## Metadata Sources

1. __Url:__ https://pmc.ncbi.nlm.nih.gov/articles/PMC9163132/
   - __Locator:__ Methods, Data Records, and Usage Notes (original archive).

2. __Url:__ https://www.nccs.nasa.gov/data-collections/nex-gddp-cmip6/
   - __Locator:__ Coverage, resolution, access, and links to v1/v2 technical notes. Subsetting examples.

3. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, combined NEX-GDDP CMIP5/CMIP6 row. Existing version-specific provider metadata takes precedence.

4. __Url:__ https://www.nature.com/articles/s41597-022-01393-4
   - __Locator:__ Publication date, Methods, Technical Validation, and Acknowledgements.

5. __Url:__ https://registry.opendata.aws/nex-gddp-cmip6/
   - __Locator:__ Public S3 access.

## Relevant Rows

- annual-precipitation
- annual-maximum
- intermittency
- spatial-coherence

## Generation

- CMIP6

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ 2022-06-03
- __Notes:__ Date of the Thrasher et al. dataset paper, not the data creation date or a later archive revision.

## Existing Uses

1. __Description:__ Dataset paper evaluates the original downscaled archive. This is documented technical validation, not proof of suitability for all applications.
   - __Url:__ https://www.nature.com/articles/s41597-022-01393-4

## Funding

1. __Agency:__ NASA
   - __Award:__ (not recorded)
   - __Notes:__ NASA Earth Exchange workplan 2018-2022 at Ames Research Center.
   - __Source Url:__ https://www.nature.com/articles/s41597-022-01393-4

## Associated Resources

1. __Label:__ Provider documentation
   - __Url:__ https://www.nccs.nasa.gov/data-collections/nex-gddp-cmip6/
   - __Description:__ Product descriptions and links maintained by the provider.

2. __Label:__ NCCS subsetting examples
   - __Url:__ https://www.nccs.nasa.gov/data-collections/nex-gddp-cmip6/
   - __Description:__ THREDDS and NetCDF Subset Service access examples.

## Aliases

- NASA-NEX-GDDP

## Expert Guidance

- __Title:__ NEX-GDDP-CMIP6 evaluation guidance
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

Consider this archive when daily projections over multiple countries or broad domains are needed. Compare the 0.25-degree spatial support with the basin or site target, and test wet-day frequency and extremes rather than relying only on mean agreement.

## Version and evaluation checks

This entry describes the original archive in [@thrasher]. The provider also distributes revised data and a v2 technical note. Pin the downloaded release and inspect its changes before using this entry's metadata.

Keep climate-model spread separate from internal variability. One variant per model does not supply a large initial-condition ensemble for each model. Daily output does not identify hourly extremes.

## Expert contribution needed

Add application-specific recommendations and failures with product version, reference data, metrics, period, and region. The advice here is an AI-assisted draft awaiting expert review.
