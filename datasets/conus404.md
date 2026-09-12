# CONUS404

| Field | Value |
| --- | --- |
| Id | conus404 |
| Name | CONUS404 |
| Provider | NCAR / USGS |
| Version | Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications. |
| Summary | Use as a historical hydroclimate comparator after evaluating regional biases. This record does not describe a future projection or the future warming experiment mentioned in the matrix. |
| Source Scope | Matrix entry reconciled with GDEX d559000 on 2026-09-11. Its abstract and archive time-range fields differ by one water year; both are retained. |
| Verified On | 2026-09-11 |
| Kind | historical-simulation |

## Generation

- Other

## Dates

| Field | Value |
| --- | --- |
| Created | (not recorded) |
| Released | (not recorded) |
| Publication | (not recorded) |
| Notes | Exact creation/release dates are not established. Simulation periods and version tokens are not creation dates. |

## Method

| Field | Value |
| --- | --- |
| Family | Dynamical downscaling |
| Description | WRF regional reanalysis |
| Reference Dataset | ERA5 atmospheric forcing; not statistical calibration |
| Training Period | Not applicable to physical reanalysis forcing. |

## Coverage

| Field | Value |
| --- | --- |
| Domain | CONUS and transboundary basins in Canada and Mexico |
| Grid | Lambert conformal model grid |
| Timestep | Hourly |
| Historical | Water years 1980-2021 in abstract; archive time coverage extends to 2022-09-30 |
| Future | Not applicable to this historical record. |
| Calendar | Not established from the sources checked. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 4 |
| Unit | km |

### Scenarios

- Not applicable: historical reanalysis

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| precipitation | Verify units and accumulation interval in selected files. | Precipitation is covered by this record. Additional atmospheric variables require a complete archive-specific inventory. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | ERA5 reanalysis, not a GCM ensemble |
| Model Count | (not recorded) |
| Members | Not established from the sources checked. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://gdex.ucar.edu/datasets/d559000/ |
| Data | https://gdex.ucar.edu/datasets/d559000/ |
| Format | GDEX archive plus linked Zarr distribution on Microsoft Planetary Computer; inspect native file headers. |
| License | Not established. Public access does not itself specify reuse terms. |
| License Url | (not recorded) |
| Subsetting | Not verified. The linked documentation may describe access, rather than provide a working subset service. |
| Cost | Not established from the sources checked. |

## References

No entries.

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, dataset row 22: CONUS404. Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability. |
| https://gdex.ucar.edu/datasets/d559000/ | Checked: model and ERA5 forcing, grid, abstract WY1980-2021 versus archive through WY2022, related Zarr distribution and citations. |

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider or method documentation | https://gdex.ucar.edu/datasets/d559000/ | Follow-up resource; availability of data must be confirmed. |
| Related publication or technical report | https://doi.org/10.1175/BAMS-D-21-0326.1 | Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration. |

## Aliases

- CONUS 404

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | CONUS404 evaluation guidance |
| Summary | Draft interpretation of documented product properties; expert review is pending. |

### Review

| Field | Value |
| --- | --- |
| Status | draft |
| Updated | 2026-09-11 |

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
