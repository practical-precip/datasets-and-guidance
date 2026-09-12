# Global BCCAQ (Gebrechorkos et al.)

| Field | Value |
| --- | --- |
| Id | global-bccaq |
| Name | Global BCCAQ (Gebrechorkos et al.) |
| Provider | Gebrechorkos and collaborators / CEDA |
| Version | Family/configuration described in the pinned NCAR matrix; see source scope and field-specific qualifications. |
| Summary | Evaluate the reference precipitation product in your region. A global grid does not establish regional skill for extremes or mountain precipitation. |
| Source Scope | Matrix entry reconciled with the 2023 dataset paper checked on 2026-09-11. The paper identifies SSP5-3.4-OS where the matrix lists SSP3-7.0; this record follows the paper. |
| Verified On | 2026-09-11 |
| Guidance | product-guidance/global-bccaq.md |
| Kind | downscaled-projection |

## Generation

- CMIP6

## Dates

| Field | Value |
| --- | --- |
| Created | (not recorded) |
| Released | (not recorded) |
| Publication | 2023-09-11 |
| Notes | Exact creation/release dates are not established. Simulation periods and version tokens are not creation dates. |

## Method

| Field | Value |
| --- | --- |
| Family | Statistical downscaling |
| Description | Bias correction constructed analogs and quantile mapping |
| Reference Dataset | MSWX/MSWEP, GloH2O reference products as identified in the matrix |
| Training Period | 1981-2014 |

## Coverage

| Field | Value |
| --- | --- |
| Domain | Global |
| Grid | Latitude-longitude output grid described in the matrix; confirm coordinates in selected files. |
| Timestep | Daily |
| Historical | 1981-2014 |
| Future | 2015-2100 |
| Calendar | Not established from the sources checked. |

### Grid Spacing

| Field | Value |
| --- | --- |
| Value | 0.25 |
| Unit | degree |

### Scenarios

- SSP2-4.5
- SSP5-3.4-OS
- SSP5-8.5

### Variables

| Name | Unit | Description |
| --- | --- | --- |
| precipitation | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |
| minimum temperature | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |
| maximum temperature | Verify units and accumulation interval in selected files. | Variable family identified in the matrix; archive names and availability may differ. |

## Ensemble

| Field | Value |
| --- | --- |
| Driving Models | 18 CMIP6 models |
| Model Count | 18 |
| Members | Not established from the sources checked. |

### Member Counts

No entries.

## Access

| Field | Value |
| --- | --- |
| Landing Page | https://catalogue.ceda.ac.uk/uuid/c107618f1db34801bb88a1e927b82317/ |
| Data | https://catalogue.ceda.ac.uk/uuid/c107618f1db34801bb88a1e927b82317/ |
| Format | Not established from the sources checked. |
| License | Not established. Public access does not itself specify reuse terms. |
| License Url | (not recorded) |
| Subsetting | Not verified. The linked documentation may describe access, rather than provide a working subset service. |
| Cost | Not established from the sources checked. |

## References

- gebrechorkos-bccaq

## Metadata Sources

| Url | Locator |
| --- | --- |
| https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf | Page 1, dataset row 11: Global BCCAQ (Gebrechorkos et al.). Transcribed method, grid, domain, period, scenarios and reference information. Public/in-progress labels describe this snapshot, not verified current availability. |
| https://www.nature.com/articles/s41597-023-02528-x | Checked: Abstract and Methods/Data acquisition establish scenarios (including SSP5-3.4-OS), periods, 18 GCMs, MSWX and MSWEP references. |

## Relevant Rows

- annual-precipitation

## Existing Uses

No entries.

## Funding

No entries.

## Associated Resources

| Label | Url | Description |
| --- | --- | --- |
| Provider or method documentation | https://catalogue.ceda.ac.uk/uuid/c107618f1db34801bb88a1e927b82317/ | Follow-up resource; availability of data must be confirmed. |
| Related publication or technical report | https://www.nature.com/articles/s41597-023-02528-x | Publication linked by the matrix. Its scope may describe a method or historical evaluation rather than every cataloged configuration. |

## Aliases

No entries.

## Expert Guidance

| Field | Value |
| --- | --- |
| Title | Global BCCAQ (Gebrechorkos et al.) evaluation guidance |
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

Evaluate the reference precipitation product in your region. A global grid does not establish regional skill for extremes or mountain precipitation.

## Evaluation and contributions

Check precipitation totals, wet-day frequency, event duration and spatial dependence against independent observations for the intended region and period. Record the selected release, model, member, scenario and reference data. Add prose, images, equations and study citations here, or link a complete regional guidance document in the frontmatter.

These recommendations are AI-assisted draft interpretation, not expert endorsement. The [NCAR matrix](https://raw.githubusercontent.com/NCAR/hydro-climate-evaluation/28f529dc6a265dbf669e6fd38ec20e7ee11c1998/docs/downscalingMethodsMatrixPublic.36x24.pdf) supplies the initial inventory. A [related publication or technical report](https://www.nature.com/articles/s41597-023-02528-x) is available for further review.
