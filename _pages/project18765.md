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

This page is dedicated to a collection of materials in the context of project **18765**, funded by the [Jubiläumsfonds](https://www.oenb.at/en/About-Us/Research-Promotion/The-OeNB-Anniversary-Fund.html) of the _Oesterreichische Nationalbank_ with EUR 168,000.00 for the period from 12/2022 to 11/2024.

**Abstract**: Data is often imperfect and incomplete when it is first released. A related problem are outlying observations such as those during the recent Covid-19 pandemic, which may severely affect parameter estimates in conventional linear models. On a related note, there may be changes in transmission channels of fiscal or monetary policies, which linear models are not equipped to detect. Particularly for structural and predictive inference, measurement errors and outliers may severely bias parameter estimates and thus yield misleading and suboptimal policy implications. 

This project aims to develop new Bayesian nonparametric methods that are robust to nonlinear relationships in the data, measurement errors and outliers. In addition, the proposed framework is capable of handling highly nonstandard data that is potentially irregular and sampled at different frequencies than key economic series of interest. The proposed research extends state-of-the-art econometric methods for high-dimensional nonlinear time series analysis.

# Publications and working papers
## Forecasts with Bayesian vector autoregressions under real time conditions 
_Journal of Forecasting_ **43**(3), 771-801, 2024; by M.Pfarrhofer [[DOI](https://doi.org/10.1002/for.3055)]
> This paper investigates the sensitivity of forecast performance metrics to taking a real time versus pseudo out-of-sample perspective. I use monthly vintages of two popular datasets for the United States and the euro area. Variants of vector autoregressions, varying the size of the information sets and the conditional mean and variance specification, are considered. The results suggest differences in the relative ordering of model performance for point and density forecasts depending on the forecast simulation design used to evaluate predictive accuracy. Differentials are more pronounced for the European dataset, and stochastic volatility is a particularly attractive model feature to obtain accurate forecasts in real time.

## Forecasting euro area inflation using a huge panel of survey expectations
_International Journal of Forecasting_ **40**(3), 1042-1054, 2024; by F. Huber, L. Onorante and M. Pfarrhofer [[DOI](https://doi.org/10.1016/j.ijforecast.2023.09.003)]
> In this paper, we forecast euro area inflation and its main components using a massive number of time series on survey expectations obtained from the European Commission’s Business and Consumer Survey. To make the estimation of such a huge model tractable, we use recent advances in computational statistics to carry out posterior simulation and inference. Our findings suggest that including a wide range of firms’ and consumers’ opinions about future economic developments offers useful information to forecast prices and assess tail risks to inflation. These predictive improvements arise from surveys related to expected inflation and other questions related to the general economic environment. Finally, we find that firms’ expectations about the future seem to have more predictive content than consumer expectations.

## Dynamic Shrinkage Priors for Large Time-Varying Parameter Regressions Using Scalable Markov Chain Monte Carlo Methods
_Studies in Nonlinear Dynamics & Econometrics_ **28**(2), 201-225, 2024; project member N. Hauzenberger co-authored this paper with F. Huber and G. Koop [[DOI](https://www.degruyter.com/document/doi/10.1515/snde-2022-0077/html)]
> Time-varying parameter (TVP) regression models can involve a huge number of coefficients. Careful prior elicitation is required to yield sensible posterior and predictive inferences. In addition, the computational demands of Markov Chain Monte Carlo (MCMC) methods mean their use is limited to the case where the number of predictors is not too large. In light of these two concerns, this paper proposes a new dynamic shrinkage prior which reflects the empirical regularity that TVPs are typically sparse (i.e. time variation may occur only episodically and only for some of the coefficients). A scalable MCMC algorithm is developed which is capable of handling very high dimensional TVP regressions or TVP Vector Autoregressions. In an exercise using artificial data we demonstrate the accuracy and computational efficiency of our methods. In an application involving the term structure of interest rates in the eurozone, we find our dynamic shrinkage prior to effectively pick out small amounts of parameter change and our methods to forecast well.

## Sparse time-varying parameter VECMs with an application to modeling electricity prices
forthcoming in the _International Journal of Forecasting_, by N. Hauzenberger, M. Pfarrhofer and L. Rossini [[DOI](https://doi.org/10.1016/j.ijforecast.2024.09.001)]
> In this paper we propose a time-varying parameter (TVP) vector error correction model (VECM) with heteroskedastic disturbances. We propose tools to carry out dynamic model specification in an automatic fashion. This involves using global–local priors and postprocessing the parameters to achieve truly sparse solutions. Depending on the respective set of coefficients, we achieve this by minimizing auxiliary loss functions. Our two-step approach limits overfitting and reduces parameter estimation uncertainty. We apply this framework to modeling European electricity prices. When considering daily electricity prices for different markets jointly, our model highlights the importance of explicitly addressing cointegration and nonlinearities. In a forecasting exercise focusing on hourly prices for Germany, our approach yields competitive metrics of predictive accuracy.

## Bayesian nonparametric methods for macroeconomic forecasting
forthcoming chapter for the book _Handbook of Macroeconomic Forecasting_ edited by M. Clements and A.B. Galvao, by M. Marcellino and M. Pfarrhofer [[SSRN](https://dx.doi.org/10.2139/ssrn.4857173)]
> We review specification and estimation of multivariate Bayesian nonparametric models for forecasting (possibly large sets of) macroeconomic and financial variables. The focus is on Bayesian Additive Regression Trees and Gaussian Processes. We then apply various versions of these models for point, density and tail forecasting using datasets for the euro area and the US. The performance is compared with that of several variants of Bayesian VARs to assess the relevance of accounting for general forms of nonlinearities. We find that medium-scale linear VARs with stochastic volatility are tough benchmarks to beat. Some gains in predictive accuracy arise for nonparametric approaches, most notably for short-run forecasts of unemployment and longer-run predictions of inflation, and during recessionary or otherwise non-standard economic episodes.

## Bayesian neural networks for macroeconomic analysis
forthcoming _Journal of Econometrics_, project member N. Hauzenberger co-authored this paper with F. Huber, K. Klieber and M. Marcellino [[DOI](https://doi.org/10.1016/j.jeconom.2024.105843)]
> Macroeconomic data is characterized by a limited number of observations (small ), many time series (big K) but also by featuring temporal dependence. Neural networks, by contrast, are designed for datasets with millions of observations and covariates. In this paper, we develop Bayesian neural networks (BNNs) that are well-suited for handling datasets commonly used for macroeconomic analysis in policy institutions. Our approach avoids extensive specification searches through a novel mixture specification for the activation function that appropriately selects the form of nonlinearities. Shrinkage priors are used to prune the network and force irrelevant neurons to zero. To cope with heteroskedasticity, the BNN is augmented with a stochastic volatility model for the error term. We illustrate how the model can be used in a policy institution through simulations and by showing that BNNs produce more accurate point and density forecasts compared to other machine learning methods.

## Nowcasting with Mixed Frequency Data Using Gaussian Processes
working paper, by N. Hauzenberger, M. Marcellino, M. Pfarrhofer and A. Stelzer [[WP](https://arxiv.org/abs/2402.10574)]
> We develop Bayesian machine learning methods for mixed data sampling (MIDAS) regressions. This involves handling frequency mismatches and specifying functional relationships between many predictors and the dependent variable. We use Gaussian processes (GPs) and compress the input space with structured and unstructured MIDAS variants. This yields several versions of GP-MIDAS with distinct properties and implications, which we evaluate in short-horizon now- and forecasting exercises with both simulated data and data on quarterly US output growth and inflation in the GDP deflator. It turns out that our proposed framework leverages macroeconomic Big Data in a computationally efficient way and offers gains in predictive accuracy compared to other machine learning approaches along several dimensions.

## Bayesian Modeling of TVP-VARs Using Regression Trees
project member N. Hauzenberger co-authored this paper with F. Huber, G. Koop and J. Mitchell [[WP](https://arxiv.org/abs/2209.11970)]
> In light of widespread evidence of parameter instability in macroeconomic models, many time-varying parameter (TVP) models have been proposed. This paper proposes a nonparametric TVP-VAR model using Bayesian additive regression trees (BART) that models the TVPs as an unknown function of effect modifiers. The novelty of this model arises from the fact that the law of motion driving the parameters is treated nonparametrically. This leads to great flexibility in the nature and extent of parameter change, both in the conditional mean and in the conditional variance. Parsimony is achieved through adopting nonparametric factor structures and use of shrinkage priors. In an application to US macroeconomic data, we illustrate the use of our model in tracking both the evolving nature of the Phillips curve and how the effects of business cycle shocks on inflation measures vary nonlinearly with changes in the effect modifiers.

# Presentations
## Conference presentations by project members
* Presentation of _Gaussian Process VARs and Macroeconomic Uncertainty_ at 16th International Conference on Computational and Financial Econometrics (CFE) in London by project member N. Hauzenberger

## Presentations of project-related papers and materials
* Presentation of _Nowcasting with mixed frequency data using Gaussian processes_ at IAAE Annual Conference 2024 in Rethymno, IHS Research Seminar and OeNB Freitagsseminar  by M. Pfarrhofer
* Presentation of _Bayesian nonparametric methods for macroeconomic forecasting_ at [12th ECB Conference on Forecasting Techniques](https://www.ecb.europa.eu/press/conferences/html/20230612_12th_conference_on_forecasting_techniques.en.html) by co-author M. Marcellino

# Other materials
## Noteworthy achievements by project members
* N. Hauzenberger was appointed Senior Lecturer at the University of Strathclyde, Scotland, UK in September 2023
* M. Pfarrhofer successfully achieved a habilitation at the University of Salzburg in January 2023; further, he was appointed Assistant Professor (tenure-track) at WU Vienna in September 2023

## Code repositories
* Nonparametric mixed-frequency Bayesian Additive Regression Trees [[mf-bavart](https://github.com/mpfarrho/mf-bavart)]
* Nonparametric quantile regression [[qf-bart](https://github.com/mpfarrho/qf-bart)]
* Gaussian Process MIDAS models [[gp-midas](https://github.com/mpfarrho/gp-midas)] _to be uploaded upon publication of the corresponding paper_

## Collection of real-time data sets
* United States, [Real-Time Data Set for Macroeconomists](https://www.philadelphiafed.org/surveys-and-data/real-time-data-research/real-time-data-set-for-macroeconomists)
* United Kingdom, [Gross Domestic Product Real-Time Database](https://www.bankofengland.co.uk/statistics/gdp-real-time-database)
* Australia, [Australian Real-Time Macroeconomic Database](https://fbe.unimelb.edu.au/economics/macrocentre/artmdatabase)
* Canada, [CAN-MD-QD, Homepage of D. Stevanovic](http://www.stevanovic.uqam.ca/DS_LCMD.html)
