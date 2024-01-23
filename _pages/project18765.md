---
permalink: /project18765/
title: "OeNB Jubiläumsfonds, Project 18765"
excerpt: "Inference with Bayesian nonparametric models in the presence of measurement errors and outliers"
author_profile: true
redirect_from: 
  - "/oenb18765/"
  - "/oenb18765.html"
---

Inference with Bayesian nonparametric models in the presence of measurement errors and outliers
======

This page is dedicated to a collection of materials in the context of project 18765, funded by the [Jubiläumsfonds](https://www.oenb.at/en/About-Us/Research-Promotion/The-OeNB-Anniversary-Fund.html) of the Oesterreichische Nationalbank with EUR 168,000.00 for the period from 12/2022 to 11/2024.

**Abstract** Data is often imperfect and incomplete when it is first released. A related problem are outlying observations such as those during the recent Covid-19 pandemic, which may severely affect parameter estimates in conventional linear models. On a related note, there may be changes in transmission channels of fiscal or monetary policies, which linear models are not equipped to detect. Particularly for structural and predictive inference, measurement errors and outliers may severely bias parameter estimates and thus yield misleading and suboptimal policy implications. 

This project aims to develop new Bayesian nonparametric methods that are robust to nonlinear relationships in the data, measurement errors and outliers. In addition, the proposed framework is capable of handling highly nonstandard data that is potentially irregular and sampled at different frequencies than key economic series of interest. The proposed research extends state-of-the-art econometric methods for high-dimensional nonlinear time series analysis (used for both scenario analysis and predictions). A key contribution is a flexible model for measurement errors that captures the full history of vintages for a set of crucial economic indicators.

# Publications and working papers
## Forecasts with Bayesian vector autoregressions under real time conditions 
forthcoming in the _Journal of Forecasting_ [[DOI](https://doi.org/10.1002/for.3055)/[WP](https://arxiv.org/abs/2004.04984)]

**Abstract** This paper investigates the sensitivity of forecast performance metrics to taking a real time versus pseudo out-of-sample perspective. I use monthly vintages of two popular datasets for the United States and the euro area. Variants of vector autoregressions, varying the size of the information sets and the conditional mean and variance specification, are considered. The results suggest differences in the relative ordering of model performance for point and density forecasts depending on the forecast simulation design used to evaluate predictive accuracy. Differentials are more pronounced for the European dataset, and stochastic volatility is a particularly attractive model feature to obtain accurate forecasts in real time.

## Bayesian nonparametric methods for macroeconomic forecasting
chapter for the book _Handbook of Macroeconomic Forecasting_ edited by M. Clements and A.B. Galvao, joint work with M. Marcellino [[Draft](https://www.dropbox.com/scl/fi/4j4f1qf1oyucz7qxzx6c4/npvars_draft.pdf?rlkey=s85jbqzkeb5ax3ktu3h4ertv5&dl=0)]

**Abstract** We review specification and estimation of multivariate Bayesian nonparametric models for forecasting (possibly large sets of) macroeconomic and financial variables. The focus is on Bayesian Additive Regression Trees and Gaussian Processes. We then apply various versions of these models for point, density and tail forecasting using datasets for the euro area and the US. The performance is compared with that of several variants of Bayesian VARs to assess the relevance of accounting for general forms of nonlinearities. We find that medium-scale linear VARs with stochastic volatility are tough benchmarks to beat. Some gains in predictive accuracy arise for nonparametric approaches, most notably for short-run forecasts of unemployment and longer-run predictions of inflation, and during recessionary or otherwise non-standard economic episodes.

## Bayesian Modeling of TVP-VARs Using Regression Trees
project member Niko Hauzenberger co-authored this paper with F. Huber, G. Koop and J. Mitchell [[WP](https://arxiv.org/abs/2209.11970)]

**Abstract** In light of widespread evidence of parameter instability in macroeconomic models, many time-varying parameter (TVP) models have been proposed. This paper proposes a nonparametric TVP-VAR model using Bayesian additive regression trees (BART) that models the TVPs as an unknown function of effect modifiers. The novelty of this model arises from the fact that the law of motion driving the parameters is treated nonparametrically. This leads to great flexibility in the nature and extent of parameter change, both in the conditional mean and in the conditional variance. Parsimony is achieved through adopting nonparametric factor structures and use of shrinkage priors. In an application to US macroeconomic data, we illustrate the use of our model in tracking both the evolving nature of the Phillips curve and how the effects of business cycle shocks on inflation measures vary nonlinearly with changes in the effect modifiers.

## Enhanced Bayesian Neural Networks for Macroeconomics and Finance
project member Niko Hauzenberger co-authored this paper with F. Huber, K. Klieber and M. Marcellino [[WP](https://arxiv.org/abs/2211.04752)]

**Abstract** We develop Bayesian neural networks (BNNs) that permit to model generic nonlinearities and time variation for (possibly large sets of) macroeconomic and financial variables. From a methodological point of view, we allow for a general specification of networks that can be applied to either dense or sparse datasets, and combines various activation functions, a possibly very large number of neurons, and stochastic volatility (SV) for the error term. From a computational point of view, we develop fast and efficient estimation algorithms for the general BNNs we introduce. From an empirical point of view, we show both with simulated data and with a set of common macro and financial applications that our BNNs can be of practical use, particularly so for observations in the tails of the cross-sectional or time series distributions of the target variables, which makes the method particularly informative for policy making in uncommon times.

# Presentations of project-related materials
* Presentation at 16th International Conference on Computational and Financial Econometrics (CFE) in London by Niko Hauzenberger

# Real-time data sets
* United States [Real-Time Data Set for Macroeconomists](https://www.philadelphiafed.org/surveys-and-data/real-time-data-research/real-time-data-set-for-macroeconomists)
* United Kingdom [Gross Domestic Product Real-Time Database](https://www.bankofengland.co.uk/statistics/gdp-real-time-database)
* Australia [Australian Real-Time Macroeconomic Database](https://fbe.unimelb.edu.au/economics/macrocentre/artmdatabase)
