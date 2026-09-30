---
title: LOCA2 North America evaluation guidance
summary: >-
  The strongest statistical product evaluated for historical storm structure, and comparable to
  high-resolution dynamical downscaling for that purpose. By design, however, it preserves the
  parent GCM's trends: over the western US it shows no sign of the weakened orographic influence
  that dynamically downscaled simulations produce, so its fine grid should not be interpreted as
  evidence that projected changes resolve terrain. Less of a concern where orographic influence is
  weak.
review:
  status: expert-reviewed
  updated: '2026-09-16'
  contributors:
    - Nicholas Siler (Oregon State University)
    - Initial AI-assisted draft
  reviewed_by:
    - Nicholas Siler (Oregon State University)
  reviewed_on: '2026-09-16'
evidence:
  - statement: >-
      Across seasons and two dynamically downscaled ensembles (WUS-D3 and PGW) over the western US,
      warming weakens orographic influence on precipitation, damping increases on windward slopes
      and amplifying them in rain-shadowed regions. The LOCA2 ensemble shows no sign of this
      behaviour, instead projecting patterns of precipitation change that closely resemble those of
      its parent GCMs (in percentage terms). This follows from the way LOCA2 constrains its trends:
      a form of equidistant quantile matching, which maps the model distribution onto the observed
      one while preserving the percentage change the parent GCM simulates within each quantile of
      its own precipitation distribution. The step is an intentional guard against unphysical
      extrapolation, but it also means that any part of the precipitation response the GCM misses is
      necessarily absent from the downscaled product.
    paper: siler-orographic
    locator: https://doi.org/10.1029/2025GL119251
  - statement: >-
      LOCA2-Hybrid is a finer-resolution (1/32 degree) version of LOCA2 spanning California and
      western Nevada, whose training data set includes an ensemble of 3-km dynamically downscaled
      warming simulations (3-km WUS-D3). Disappointingly, it performs no better than standard LOCA2
      at capturing weakened orographic influence, because it applies the same equidistant quantile
      matching step, which ties the projected trends back to the parent GCM regardless of what the
      training library contains.
    paper: siler-orographic
    locator: https://doi.org/10.1029/2025GL119251
  - statement: >-
      In an object-based evaluation of 8 dynamically and 3 statistically downscaled products over
      CONUS (78 datasets, 1981-2020, 17 regions, four seasons), dynamical downscaling generally
      outperformed statistical downscaling in representing storm spatial structure, but LOCA2 was
      the exception: similar in quality to the 4-6 km dynamical products, while other statistical
      products coarsened the finer structure of precipitation objects. Grid-scale peak intensity was
      comparable across both families.
    paper: chen-object-eval
    locator: https://doi.org/10.1175/BAMS-D-24-0325.1
  - statement: >-
      For projected changes in precipitation flashiness, LOCA2 does capture some of the
      windward-leeward contrast across the Cascades and Sierra Nevada, but becomes GCM-like further
      east and, unlike the RCMs, projects increasing flashiness almost everywhere.
    paper: koszuta-flashiness
---

## Application guidance

LOCA2 is a reasonable candidate for daily applications driven by the historical distribution: basin water balance, wet and dry spell statistics, and similar. Its historical precipitation climatology over the western US is realistic.

It also performs well relative to other statistical products. In an object-based evaluation of 8 dynamically and 3 statistically downscaled products over CONUS (78 datasets, 1981-2020, 17 regions, four seasons), dynamical downscaling generally outperformed statistical downscaling in representing storm spatial structure -- total precipitation volume and spatial extent -- with LOCA2 the exception: it was judged similar in quality to the high-resolution (4-6 km) dynamical products, while the other statistical products coarsened the finer structure of precipitation objects [@chen-object-eval]. For grid-scale features such as peak intensity, statistical and dynamical products performed comparably. If historical storm structure is what your application needs, LOCA2 is a strong choice among statistical products.

An important caveat is that **historical skill does not imply skill in the projected change**. LOCA2's 6 km grid and good historical climatology are not evidence that its projected *changes* resolve terrain. Over the western US, dynamically downscaled ensembles show that warming weakens orographic influence on precipitation -- damping increases on windward slopes and amplifying them in rain shadows -- and LOCA2 shows no sign of this behavior, producing instead a pattern of precipitation sensitivity that resembles its parent GCMs [@siler-orographic].

## Why this happens, and what it implies for other products

LOCA2's limitations stem from a methodological choice. To guard against unphysical extrapolation, LOCA2 applies equidistant quantile matching [@li-edcdfm], which preserves the percentage change within each quantile of the parent GCM's distribution. This means that any part of the precipitation response that the GCM misses, such as a change in orographic gradients, is necessarily absent from the downscaled product.

Unfortunately, LOCA2-Hybrid does not solve this problem. LOCA2-Hybrid is a companion product available only over California and western Nevada, on a finer 1/32 degree grid, and trained not only on historical weather patterns but on a library of end-of-century patterns taken from the 3-km WUS-D3 simulations [@pierce-loca2-hybrid]. In principle that should let it represent emergent responses to warming that cannot be extrapolated from historical variability. In practice it performs no better than standard LOCA2 at capturing weakened orographic influence, because it applies the same equidistant quantile-matching step, which ties the trends back to the parent GCM regardless of what the training library contains [@siler-orographic].

This behavior is also not specific to LOCA2. Trend preservation in some form is common to BCSD, MACA2, STAR-ESDM and ClimateNA among others, so the same limitation should be expected of them in mountainous terrain unless demonstrated otherwise [@siler-orographic].

It is worth separating the two parts of the method, because they do opposite things. The analog step selects historical days whose large-scale pattern matches the model's, and so reproduces observed storm structure by construction -- this is why LOCA2 scores as well as it does on historical evaluation [@chen-object-eval]. The quantile-matching step then constrains the projected change to the parent GCM's. The strength and the limitation come from different components.

## Where trend preservation is not a problem

Trend preservation is intended to safeguard against unphysical extrapolation, and it is only a liability where the local change signal departs from the large-scale one. In terrain where orographic influence on precipitation is weak, there is little reason to expect the local response to differ from the GCM's, and quantile-based trend preservation therefore makes sense because it avoids extrapolating beyond the training distribution. The concern raised above applies to mountainous regions, and by extension to any setting where an emergent local process is expected to alter the change pattern.

Despite its quantile-based trend preservation, LOCA2's precipitation response is not uniformly GCM-like, and precipitation flashiness is a useful illustration. Flashiness here means the temporal concentration of precipitation -- what fraction of the annual total arrives in a small number of intense events, versus being spread across many light and moderate days. Models robustly project a widespread increase under warming, for a well-understood reason: extreme precipitation scales at roughly the Clausius-Clapeyron rate of about 7% per K, because most of the water vapour converging into an intense storm precipitates out, while global mean precipitation is held to 2-3% per K by energetic constraints. If the extremes rise faster than the mean, the remaining days must rise more slowly or dry out, and the distribution concentrates. This matters for impacts because flashiness strongly influences the fraction of precipitation that becomes surface runoff.

That global argument need not hold locally, where mean precipitation is not constrained by the global energy budget and where terrain shapes storm behaviour. Over the western US the dynamically downscaled simulations project *decreasing* flashiness in some rain-shadowed basins, against the near-universal increase the GCMs give. LOCA2 captures some of the resulting windward-leeward contrast across the Cascades and Sierra Nevada, but it resembles the GCMs further east and, unlike the RCMs, projects increased flashiness almost everywhere [@koszuta-flashiness].


## Ensemble size

For applications where sampling uncertainty matters -- internal variability, or the spread across driving GCMs -- LOCA2's ensemble is far larger than any existing dynamically downscaled ensembles, and that advantage can outweigh its limitations on the change pattern. A statistical product spanning many GCMs may characterize the range of plausible futures better than a small RCM ensemble, even if each individual member's change pattern is less credible over terrain.

## Temporal resolution

LOCA2 is daily. It cannot support sub-daily intensity-duration-frequency estimates directly, and sub-daily guidance derived from it rests on an assumed sub-daily-to-daily relationship supplied from elsewhere. For durations of one day and longer it can be compared like-for-like with hourly products only if those products are first aggregated to daily accumulations; comparing daily LOCA2 against a running maximum of hourly data gives the hourly product an unfair sampling advantage.

## Evaluation checks

- Record the precipitation release (the provider announced v20240915 in September 2024) together with the model, member and scenario. Do not carry an evaluation of an earlier release forward without checking what changed.
- Match the driving GCMs when comparing LOCA2 against another downscaled product, or differences between products are confounded with differences in ensemble membership.
- Evaluate the change signal, not only the historical climatology, at the spatial scale the application actually uses. Comparing the downscaled change pattern against the parent GCM's is a quick and informative check: if they are nearly identical, the downscaling is adding resolution but not new information about the change.
- Quantify sampling uncertainty before interpreting spatial structure in extremes. Return-level fields from 30-year windows carry substantial sampling noise, and apparent fine-scale detail may not be reproducible.

## Scope of this guidance

Based on comparisons over the western US against the WUS-D3 and PGW dynamically downscaled ensembles and the parent CMIP6 GCMs, using LOCA2 realizations matched to the same parent models. Seasonal and annual mean precipitation and flashiness were examined. Other regions have not been evaluated here, though the trend-preservation mechanism is not region-specific and would be expected to matter most wherever the local change signal departs from the large-scale one.
