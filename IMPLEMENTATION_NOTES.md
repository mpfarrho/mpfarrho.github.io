# Implementation notes — al-folio redesign (home + research)

Reproduces the two standalone mockups in [`mockups/`](mockups/) inside al-folio.
`mockups/` is read-only reference and is excluded from the Jekyll build.

## Build verification status

The local Jekyll build **could not be run in this environment**:

- System Ruby is 2.6.10; Jekyll 4.4.1 (per `Gemfile.lock`) requires Ruby ≥ 3.0.
- `bundler` 4.0.4 (required by the lockfile) is not installed and cannot run on
  Ruby 2.6.
- Docker / `docker compose` is not installed, so al-folio's container build is
  unavailable.

What was verified instead:

- `_data/cv.yml` and `_config.yml` parse as valid YAML (system Ruby `psych`):
  7 sections with the expected block counts.
- The **full stylesheet compiles** with Dart Sass 1.100.0 — a Liquid-free copy of
  `assets/css/main.scss` (all al-folio partials + the new `custom` partial) built
  against `--load-path=_sass` with **zero errors and zero deprecation warnings**;
  `color-mix()` and `aspect-ratio: 1/1.12` are emitted correctly.
- The Liquid/HTML templates were reviewed by hand; no template references the
  deleted pages or the old `_data/cv.yml` shape (`cv.liquid`, which still reads the
  old shape, is never rendered — `cv.md` was removed).

**The al-folio GitHub Actions workflow is the build of record** and should be
checked after pushing. For a local Jekyll build, install Ruby ≥ 3.0
(e.g. `brew install ruby` + `gem install bundler && bundle install`) or Docker.

## Open questions / decisions taken (conservative readings)

- **`mockups/` created from the attached files.** The directory did not exist;
  the two mockups were written verbatim from the provided sources to serve as the
  on-disk source of truth, then excluded from the build (`exclude:` in
  `_config.yml`).
- **Google Analytics.** `assets/js/google-analytics-setup.js` is referenced by
  `_includes/scripts.liquid` but is **missing from the repo**, so GA is already
  effectively broken site-wide. The custom home/research layouts do not load
  `scripts.liquid` (to stay JS-minimal and avoid the hero-photo zoom / al-folio
  toggle), so a small working inline `gtag` snippet was added to
  `_includes/footer.liquid` (gated by `enable_google_analytics`, loaded only on
  the two redesigned pages → no double-load). Remove it if a zero-extra-JS build
  is preferred.
- **Theme + scroll-spy script lives in `_includes/head.liquid`.** It is the
  mockup's logic, but: (a) the theme is applied before first paint to avoid a
  flash; (b) the toggle/scroll-spy is wrapped in `DOMContentLoaded`; (c) a
  `localStorage` value guard falls back to `prefers-color-scheme` for any stored
  value that isn't `light`/`dark`; (d) a `determineComputedTheme()` shim keeps
  al-folio's `common.js` from throwing now that `theme.js` is removed. One shared
  copy means the toggle also works on the retained `/project18765/` page.
- **Prior redesign partials left untouched.** `_sass/_redesign.scss` and the
  in-partial palette edits from the earlier redesign were not modified — their
  rules target al-folio classes (`.publications`, `.cv`, `.rd-*`) that the new
  custom pages don't use, so they are inert here. `_sass/_custom.scss` is imported
  last and wins.
- **`/project18765/` and `404` remain on al-folio's `default.liquid`.** They now
  render the replaced (mockup) header but no footer. This is outside the
  redesign's pixel scope and was left as-is.

## Flagged for human check (rendered verbatim from the mockup — not "fixed")

| Item                                               | In mockup                            | Action needed                                                                                                                                       |
| -------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Job title in hero eyebrow + lead                   | "Assistant Professor"                | **Resolved** — confirmed **Assistant** Professor (kept as-is).                                                                                       |
| Coauthor spelling, AAS climate paper               | "with Kristzin and Huber"            | Likely **Krisztin** — verify and correct in the mockup + layout.                                                                                    |
| "Direct Gaussian Process Predictive Regressions…"  | "Working paper · 2024"               | Verify the **year**.                                                                                                                                |
| arXiv profile link (research lead)                 | `https://arxiv.org/a/pfarrhofer_m_1` | Best-guess author URL — **verify before shipping**.                                                                                                 |
| Gravatar links (home profile strip + both footers) | present                              | **Resolved** — removed from the built site per Michael (the read-only mockups still show them, so the site deliberately deviates from the mockup here). |

## TODO — placeholder pills (`href="#"`)

No DOIs / arXiv IDs / repository URLs were invented. Every pill points to `#`
**except** the three working-paper `wp` pills that already carry real arXiv URLs
in the mockup (kept live):

- _A Bayesian Gaussian Process Dynamic Factor Model_ → `arxiv.org/abs/2509.04928`
- _Large Bayesian VARs for Binary and Censored Variables_ → `arxiv.org/abs/2506.01422`
- _Scenario analysis with multivariate Bayesian machine learning models_ → `arxiv.org/abs/2502.08440`

All pills below need real targets wired in (in `_layouts/research.liquid`):

### Working papers

| Paper                                                                    | Placeholder pills |
| ------------------------------------------------------------------------ | ----------------- |
| Are there asymmetries in euro area monetary policy?                      | wp, bib           |
| A Bayesian Gaussian Process Dynamic Factor Model                         | bib               |
| Large Bayesian VARs for Binary and Censored Variables                    | bib               |
| Scenario analysis with multivariate Bayesian machine learning models     | bib               |
| Interpretable Bayesian machine learning … climate news shocks …          | wp, bib           |
| General Seemingly Unrelated Local Projections                            | wp, bib           |
| Asymmetries in International Financial Spillovers                        | wp, bib           |
| Direct Gaussian Process Predictive Regressions with Mixed Frequency Data | wp, bib           |

### Published papers

| Paper                                                                         | Placeholder pills |
| ----------------------------------------------------------------------------- | ----------------- |
| Belief shocks and implications of expectations about growth-at-risk           | (none)            |
| Introducing shrinkage in heavy-tailed state space models …                    | doi, wp           |
| Sparse time-varying parameter VECMs … electricity prices                      | doi, wp, code     |
| Investigating growth-at-risk … quantile factor model                          | doi, wp, code     |
| Forecasting euro area inflation … survey expectations                         | doi, wp           |
| Forecasts with Bayesian vector autoregressions under real time conditions     | doi, wp           |
| Financial markets and legal challenges to unconventional monetary policy      | doi, wp, code     |
| Tail forecasting with multivariate Bayesian additive regression trees         | doi, wp           |
| Measuring international uncertainty … drifting parameters                     | doi, wp, code     |
| A Bayesian panel vector autoregression … climate shocks                       | doi, wp           |
| General Bayesian time-varying parameter VARs … bond yields                    | doi, wp           |
| Nowcasting in a pandemic … mixed frequency VARs                               | doi, wp, code     |
| Approximate Bayesian inference … huge-dimensional panel VARs                  | doi, wp           |
| Modeling tail risks of inflation … quantile regressions                       | doi, wp, code     |
| Bayesian state-space modeling … network effects of US monetary policy         | doi, wp, code     |
| The dynamic impact of monetary policy on regional housing prices …            | doi, wp           |
| On the effectiveness of the ECB's … policies under uncertainty                | doi, wp           |
| Measuring the effectiveness of US monetary policy during COVID-19             | doi, wp           |
| Stochastic model specification in Markov switching VECMs                      | doi, wp, code     |
| Dynamic shrinkage in TVP stochastic volatility in mean models                 | doi, wp, data     |
| The regional transmission of uncertainty shocks on income inequality …        | doi, wp           |
| A multi-country dynamic factor model … business cycle analysis                | doi, wp           |
| Flexible shrinkage in high-dimensional Bayesian spatial autoregressive models | doi, wp           |

### Book chapters

| Chapter                                                              | Placeholder pills |
| -------------------------------------------------------------------- | ----------------- |
| Bayesian nonparametric methods for macroeconomic forecasting         | chapter           |
| Factor Augmented Vector Autoregressions, Panel VARs, and Global VARs | chapter           |

### Policy & media

| Item                                              | Placeholder pills |
| ------------------------------------------------- | ----------------- |
| Was genau ist eigentlich eine Rezession?          | link              |
| Wie hoch sind die Inflationsrisiken wirklich?     | link              |
| Wie sich ein zweiter Lockdown … auswirken würde   | link              |
| Makroökonomische Entwicklungen unter Unsicherheit | link              |
| Zur Treffsicherheit von Notenbank-Prognosen …     | link              |
| Brexit – Folgen für Österreich und die EU         | link              |

## Follow-ups (out of scope for this pass)

- **Drive the research page from `_bibliography/papers.bib`** via jekyll-scholar
  instead of the hardcoded entries in `_layouts/research.liquid`. The entries were
  hardcoded per the task; jekyll-scholar remains installed and configured.
- Wire the real DOI / arXiv / code / data / chapter / media URLs into the pills
  (table above), then drop the `href="#"` placeholders.
- Optionally restore a real `assets/js/google-analytics-setup.js` (or remove GA).
