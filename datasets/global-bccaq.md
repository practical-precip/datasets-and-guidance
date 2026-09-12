# Global BCCAQ (Gebrechorkos et al.)

- __Id:__ global-bccaq
- __Name:__ Global BCCAQ (Gebrechorkos et al.)
- __Provider:__ Gebrechorkos and collaborators / CEDA
- __Version:__ Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications.
- __Summary:__ Evaluate the reference precipitation product in your region. A global grid does not establish regional skill for extremes or mountain precipitation.
- __Source Scope:__ Matrix entry reconciled with the 2023 dataset paper checked on 2026-09-11. The paper identifies SSP5-3.4-OS where the matrix lists SSP3-7.0; this record follows the paper.
- __Verified On:__ 2026-09-11
- __Kind:__ downscaled-projection

## Generation

- CMIP6

## Dates

- __Created:__ (not recorded)
- __Released:__ (not recorded)
- __Publication:__ 2023-09-11
- __Notes:__ Exact creation/release dates are not established. Simulation periods and version tokens are not creation dates.

## Method

- __Family:__ Statistical downscaling
- __Description:__ Bias correction constructed analogs and quantile mapping
- __Reference Dataset:__ MSWX/MSWEP, GloH2O reference products as identified in the matrix
- __Training Period:__ 1981-2014

## Coverage

- __Domain:__ Global
- __Grid:__ Latitude-longitude output grid described in the matrix; confirm coordinates in selected files.
- __Timestep:__ Daily
- __Historical:__ 1981-2014
- __Future:__ 2015-2100
- __Calendar:__ Not established from the sources checked.

### Grid Spacing

- __Value:__ 0.25
- __Unit:__ degree

### Scenarios

- SSP2-4.5
- SSP5-3.4-OS
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

- __Driving Models:__ 18 CMIP6 models
- __Model Count:__ 18
- __Members:__ Not established from the sources checked.

### Member Counts

No entries.

## Access

- __Landing Page:__ https://catalogue.ceda.ac.uk/uuid/c107618f1db34801bb88a1e927b82317/
- __Data:__ https://catalogue.ceda.ac.uk/uuid/c107618f1db34801bb88a1e927b82317/
- __Format:__ Not established from the sources checked.
- __License:__ Not established. Public access does not itself specify reuse terms.
- __License Url:__ (not recorded)
- __Subsetting:__ Not verified. The linked documentation may describe access, rather than provide a working subset service.
- __Cost:__ Not established from the sources checked.

## References

- gebrechorkos-bccaq

## Metadata Sources

1. __Url:__ https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf
   - __Locator:__ Page 1, dataset row 11: Global BCCAQ (Gebrechorkos et al.). Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability.

2. __Url:__ https://www.nature.com/articles/s41597-023-02528-x
   - __Locator:__ Checked: Abstract and Methods/Data acquisition establish scenarios (including SSP5-3.4-OS), periods, 18 GCMs, MSWX and MSWEP references.

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

1. __Label:__ Provider or method documentation
   - __Url:__ https://catalogue.ceda.ac.uk/uuid/c107618f1db34801bb88a1e927b82317/
   - __Description:__ Follow-up resource; availability of data must be confirmed.

2. __Label:__ Related publication or technical report
   - __Url:__ https://www.nature.com/articles/s41597-023-02528-x
   - __Description:__ Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration.

## Aliases

No entries.

## Expert Guidance

- __Title:__ Global BCCAQ (Gebrechorkos et al.) evaluation guidance
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

Evaluate the reference precipitation product in your region. A global grid does not establish regional skill for extremes or mountain precipitation.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://www.nature.com/articles/s41597-023-02528-x) is available for further review.
