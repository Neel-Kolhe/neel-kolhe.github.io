---
layout: post
title: Master's Thesis Pulsar Timing and Binary Black holes in Hyperbolic orbits
categories: Research
tags: Gravitational-Waves
published: true
---


My master’s thesis was on  ‘Pulsar Timing Array signals from supermassive black hole binaries in hyperbolic orbits’. 
Pulsar timing as a science and pulsar timing arrays in particular have been maturing rapidly. 
They use millisecond pulsars spread across the galaxy as very precise clocks to eventually detect nanohertz gravitational waves. 
This requires high cadence and sensitive observations of pulsars for many years and decades. 
The sensitivity of these experiments is currently high enough to detect the supermassive black hole gravitational wave background (GWB), 
and results are expected in the coming years. 
Later in the decade, when the SKA comes online, it is expected that PTAs will be able to detect individual binaries. 
There currently is a robust collection of models to detect circular and eccentric binaries in PTA data sets whenever they reach appropriate sensitivities. 
However there hasn’t been a lot of work around unbound hyperbolic orbits. 

![Image](/assets/images/banners/hyperbolic.png "Image")
> *PN accurate Hyperbolic orbits* 

These are of particular interest to us because hyperbolic encounters may tip stable orbits into mergers, 
which may contribute the the resolution of the final parsec problem of SMBH mergers and they are also interesting from the perspective of testing GR, 
as they are expected to display the linear memory effect, which is expected to induce a long lasting change in space time metric. 
Hence my supervisor, Professor Achamveedu Gopakumar from the Tata Institute of Fundamental Research  suggested that 
we take up the task of modelling how pulsar timing array residuals will look after making a detection of hyperbolic encounters.
This involved characterising the relativistic unbound orbit in the post newtonian formalism,
integrating it using an efficient solver (we use Seppo Mikkola’s method), 
obtaining the correct polarisation templates and finally calculating how the response will be in pulsar residuals. 

![Image](/assets/images/banners/polarisations.png "Image")
> *plus and cross polarisations of the Grativational wave, the cross polarisation shows the linear memory effect* 

All of this was successfully done till the 1PN order as a part of my thesis as compiled as a python program. 
We clearly see the linear memory effect contributing to the residuals. 
We also concluded that such an encounter will indeed be in the detection sensitivity of the SKA aided PTAs.

 Characterising the orbit was a unique challenge because this is not a periodic orbit, there being no definite start or end point before or after the encounter, 
 it had to be done by using an impact parameter term, and starting the orbit integration from an angle θmax.
 The pulsar position as well as the source position had to be included in the procedure to put in the correct antenna pattern parameters. 
 We are currently working on taking this particular prescription beyond 1PN right up to 3.5PN, 
 which has its own challenges,
 
 
![Image](/assets/images/banners/residuals.png "Image")
> *Residuals at various eccentricities*
 
 
 we expect to have results for the 3.5PN version sometime in early 2022, with burst sources with linear memory studied further. 

 2024 Update: The work for the thesis was taken further  by my colleagues as a part of a larger project, [you can find the paper here.] and [on arxiv]
 [Click here] to read the full thesis!



[Click here]:https://drive.google.com/file/d/1jkfx-3fpyrPwdlL1-jOnyTV78SCdoNB_/view
[you can find the paper here.]:https://journals.aps.org/prd/abstract/10.1103/PhysRevD.108.024013
[on arxiv]:https://arxiv.org/pdf/2305.19318.pdf

