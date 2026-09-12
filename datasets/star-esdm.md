# STAR-ESDM

- __Id:__ star-esdm
- __Name:__ STAR-ESDM
- __Provider:__ Texas Tech University / collaborators
- __Version:__ Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications.
- __Summary:__ The matrix describes an earlier configuration and labels it not yet public. Later STAR-ESDM1-0 files exist in DRCDP; their domain, reference data, and release scope must not be substituted silently.
- __Source Scope:__ NCAR matrix transcription. Provider and publication links are supplied for follow-up; only sources explicitly marked checked below were independently read. Download availability and data files were not tested.
- __Verified On:__ 2026-09-11
- __Kind:__ downscaled-projection

## Generation

- CMIP6

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ (not recorded)
- __Notes:__ Exact creation/release dates are not established. Simulation periods and version tokens are not creation dates.

## Method

- __Family:__ Statistical downscaling
- __Description:__ Signal decomposition into trends, climatologies and daily variability, separately bias-corrected and reassembled.
- __Reference Dataset:__ NClimGrid-Daily
- __Training Period:__ Not established from the sources checked.

## Coverage

- __Domain:__ Conterminous United States in the matrix
- __Grid:__ Latitude-longitude output grid described in the matrix; confirm coordinates in selected files.
- __Timestep:__ Daily
- __Historical:__ Historical component of 1950-2100; experiment transition must be checked.
- __Future:__ Future component of 1950-2100; not every model/scenario is necessarily complete.
- __Calendar:__ Not established from the sources checked.

### Grid Spacing

- __Value:__ 0.041666666666666664
- __Unit:__ degree

### Scenarios

- SSP2-4.5
- SSP5-8.5

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

- __Driving Models:__ 25 CMIP6 models in the matrix
- __Model Count:__ 25
- __Members:__ Not established from the sources checked.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://meetingorganizer.copernicus.org/EGU21/EGU21-13931.html
- __Data:__ https://meetingorganizer.copernicus.org/EGU21/EGU21-13931.html
- __Format:__ Not established from the sources checked.
- __License:__ Not established. Public access does not itself specify reuse terms.
- __License Url:__ (not recorded)
- __Subsetting:__ Not verified. The linked documentation may describe access, rather than provide a working subset service.
- __Cost:__ Not established from the sources checked.

## References

No entries.

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, dataset row 16: STAR-ESDM. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability.

2. __Url:__ https://esgf-node.ornl.gov/thredds/dodsC/user_pub_work/DRCDP/NAM/TTU/STAR-ESDM1-0/CMIP6/ScenarioMIP/historical-ssp585/ACCESS-CM2/r1i1p1f1/day/pr/v20250429/pr_NAM_TTU_STAR-ESDM1-0_CMIP6_historical-ssp585_ACCESS-CM2_r1i1p1f1_day_20900101-20941231.nc.html
   - __Locator:__ Indexed header checked: later public STAR-ESDM1-0 file exists. Its file-level license and CMOR table creation date are not applied to the older matrix family.

3. __Url:__ https://meetingorganizer.copernicus.org/EGU21/EGU21-13931.html
   - __Locator:__ Checked: EGU21-13931 abstract describes signal decomposition and bias correction, not an ensemble of downscaling methods.

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

1. __Label:__ Provider or method documentation
   - __Url:__ https://meetingorganizer.copernicus.org/EGU21/EGU21-13931.html
   - __Description:__ Follow-up resource; availability of data must be confirmed.

2. __Label:__ Later DRCDP STAR-ESDM1-0 file metadata
   - __Url:__ https://esgf-node.ornl.gov/thredds/dodsC/user_pub_work/DRCDP/NAM/TTU/STAR-ESDM1-0/CMIP6/ScenarioMIP/historical-ssp585/ACCESS-CM2/r1i1p1f1/day/pr/v20250429/pr_NAM_TTU_STAR-ESDM1-0_CMIP6_historical-ssp585_ACCESS-CM2_r1i1p1f1_day_20900101-20941231.nc.html
   - __Description:__ Public indexed file header, a later configuration requiring separate release reconciliation.

## Aliases

No entries.

## Expert Guidance

- __Title:__ STAR-ESDM evaluation guidance
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

The matrix describes an earlier configuration and labels it not yet public. Later STAR-ESDM1-0 files exist in DRCDP; their domain, reference data, and release scope must not be substituted silently.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory.
