# CONUS404

- __Id:__ conus404
- __Name:__ CONUS404
- __Provider:__ NCAR / USGS
- __Version:__ Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications.
- __Summary:__ Use as a historical hydroclimate comparator after evaluating regional biases. This record does not describe a future projection or the future warming experiment mentioned in the matrix.
- __Source Scope:__ Matrix entry reconciled with GDEX d559000 on 2026-09-11. Its abstract and archive time-range fields differ by one water year; both are retained.
- __Verified On:__ 2026-09-11
- __Kind:__ historical-simulation

## Generation

- Other

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ (not recorded)
- __Notes:__ Exact creation/release dates are not established. Simulation periods and version tokens are not creation dates.

## Method

- __Family:__ Dynamical downscaling
- __Description:__ WRF regional reanalysis
- __Reference Dataset:__ ERA5 atmospheric forcing; not statistical calibration
- __Training Period:__ Not applicable to physical reanalysis forcing.

## Coverage

- __Domain:__ CONUS and transboundary basins in Canada and Mexico
- __Grid:__ Lambert conformal model grid
- __Timestep:__ Hourly
- __Historical:__ Water years 1980-2021 in abstract; archive time coverage extends to 2022-09-30
- __Future:__ Not applicable to this historical record.
- __Calendar:__ Not established from the sources checked.

### Grid Spacing

- __Value:__ 4
- __Unit:__ km

### Scenarios

- Not applicable: historical reanalysis

### Variables

1. __Name:__ precipitation
   - __Unit:__ Verify units and accumulation interval in selected files.
   - __Description:__ Precipitation is covered by this record. Additional atmospheric variables require a complete archive-specific inventory.

## Ensemble

- __Driving Models:__ ERA5 reanalysis, not a GCM ensemble
- __Model Count:__ (not recorded)
- __Members:__ Not established from the sources checked.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://gdex.ucar.edu/datasets/d559000/
- __Data:__ https://gdex.ucar.edu/datasets/d559000/
- __Format:__ GDEX archive plus linked Zarr distribution on Microsoft Planetary Computer; inspect native file headers.
- __License:__ Not established. Public access does not itself specify reuse terms.
- __License Url:__ (not recorded)
- __Subsetting:__ Not verified. The linked documentation may describe access, rather than provide a working subset service.
- __Cost:__ Not established from the sources checked.

## References

No entries.

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, dataset row 22: CONUS404. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability.

2. __Url:__ https://gdex.ucar.edu/datasets/d559000/
   - __Locator:__ Checked: model and ERA5 forcing, grid, abstract WY1980-2021 versus archive through WY2022, related Zarr distribution and citations.

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

1. __Label:__ Provider or method documentation
   - __Url:__ https://gdex.ucar.edu/datasets/d559000/
   - __Description:__ Follow-up resource; availability of data must be confirmed.

2. __Label:__ Related publication or technical report
   - __Url:__ https://doi.org/10.1175/BAMS-D-21-0326.1
   - __Description:__ Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration.

## Aliases

- CONUS 404

## Expert Guidance

- __Title:__ CONUS404 evaluation guidance
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

Use as a historical hydroclimate comparator after evaluating regional biases. This record does not describe a future projection or the future warming experiment mentioned in the matrix.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://doi.org/10.1175/BAMS-D-21-0326.1) is available for further review.
