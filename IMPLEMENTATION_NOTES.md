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
- **Google Analytics.** _(Superseded — GA was later removed entirely; see
  "Privacy & third-party hardening" below.)_ `assets/js/google-analytics-setup.js` is referenced by
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

## Privacy & third-party hardening (later pass)

The site was made GDPR-conscious and self-contained: **no third-party resource
request fires on any page** (verified by scanning the built `_site/` for external
`script` / `link` / `img` hosts — only same-origin URLs and the
`<link rel="canonical">` remain).

- **Google Analytics removed entirely.** `enable_google_analytics: false` and an
  empty `google_analytics:`; the `gtag` `<script>` blocks were deleted from
  `_includes/scripts.liquid` and `_includes/distill_scripts.liquid`; the inline
  snippet was removed from `_includes/footer.liquid`; and the generating source
  `_scripts/google-analytics-setup.js` (which shipped to `/assets/js/`) was
  deleted. `ANALYTICS.md` and this file are in `exclude:` so they are not
  published.
- **Fonts self-hosted.** EB Garamond + IBM Plex Sans + IBM Plex Mono `woff2`
  (latin + latin-ext) in `assets/fonts/`, declared in `assets/css/fonts.css` and
  linked from `_includes/head.liquid`; the remote Google Fonts stylesheet +
  preconnects and the `google_fonts` library entry were removed. No
  `fonts.googleapis.com` / `fonts.gstatic.com` request.
- **MDB + jQuery self-hosted.** `head.liquid` links the local
  `assets/css/mdb.min.css`; `scripts.liquid` loads local `assets/js/jquery.min.js`
  and `assets/js/mdb.min.js`. No `cdn.jsdelivr.net` request (Bootstrap CSS/JS were
  already local).
- **Unused CDN features disabled** (they only ever loaded on `default.liquid`
  pages such as `404`): `enable_masonry`, `enable_math`, `enable_medium_zoom`, and
  `enable_publication_badges.altmetric` / `dimensions` are all `false` — removing
  MathJax (cdnjs), the medium-zoom CDN, and the Altmetric/Dimensions badge scripts.
- **Analytics scaffolding removed.** The cookie-consent, Cronitor, Pirsch and
  Openpanel `<script>` blocks were deleted from both script partials, and
  `_scripts/{cookie-consent,cronitor-analytics,open-panel-analytics}-setup.js`
  were deleted.
- **Sample/demo blog disabled.** `external_sources` is empty, so the
  external-posts plugin fetches nothing (no `medium.com` requests) and no demo
  blog pages are generated.

### Other changes in this pass

- **Legal Notice & Privacy page** at `/legal/` on a new single-column
  `page-plain` layout, linked from the footer (§5 ECG / §25 MedienG imprint +
  GDPR privacy policy).
- **Footer:** the colophon is the name only ("· WU Vienna" dropped, so WU is not
  implied as responsible for the content); profile links use the site accent
  colour with the body link's hover tint, and the **Legal notice** link sits
  inline after them, set off by a middot.
- **GitHub icon removed from the navbar** (the email icon is kept — the legal
  page points visitors to it).
- **Content:** added the _Scottish Journal of Political Economy (SJPE) Best Paper
  2021_ honor (for the COVID-19 US monetary-policy paper) to `_data/cv.yml`.

> Outbound `<a>` links (profiles, DOIs, GitHub repos) are user-initiated
> navigations, not automatic requests, and are unaffected.

## Flagged for human check (rendered verbatim from the mockup — not "fixed")

| Item                                               | In mockup                            | Action needed                                                                                                                                           |
| -------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Job title in hero eyebrow + lead                   | "Assistant Professor"                | **Resolved** — confirmed **Assistant** Professor (kept as-is).                                                                                          |
| Coauthor spelling, AAS climate paper               | "with Kristzin and Huber"            | Likely **Krisztin** — verify and correct in the mockup + layout.                                                                                        |
| "Direct Gaussian Process Predictive Regressions…"  | "Working paper · 2024"               | Verify the **year**.                                                                                                                                    |
| arXiv profile link (research lead)                 | `https://arxiv.org/a/pfarrhofer_m_1` | Best-guess author URL — **verify before shipping**.                                                                                                     |
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
- ~~Optionally restore a real `assets/js/google-analytics-setup.js` (or remove GA).~~
  **Done — GA removed entirely (see "Privacy & third-party hardening").**
