<!--CLAUDE, USE THIS FOR REFACTORING ai-water-use-report-1.html WHEN TASKED-->

# Deep Research Report: Perspectives on Water Usage Relative to Energy in AI Data Centers


## Executive Summary

The rapid proliferation of artificial intelligence (AI), characterized by the training and deployment of increasingly complex generative large language models (LLMs), has catalyzed a profound transformation in global digital infrastructure. As computational demands escalate, the physical footprint of the internet is expanding at an unprecedented rate, precipitating a corresponding surge in natural resource consumption. While the carbon footprint and electrical energy demands of warehouse-scale data centers have historically dominated public and regulatory discourse, the parallel consumption of freshwater has emerged as a critical, albeit frequently overlooked, dimension of digital sustainability. The deployment of high-density AI server clusters necessitates extraordinary heat rejection mechanisms, fundamentally tying the future of computational growth to the availability and management of water resources.

This exhaustive research report investigates the intricate water-energy nexus inherent in modern AI data centers. By establishing a rigorous analytical framework centered on the metric of Water Usage Effectiveness (WUE)—expressed in liters per kilowatt-hour (L/kWh)—this document delineates the theoretical foundations, empirical benchmarks, engineering practicalities, and socio-economic controversies defining the industry's resource footprint. The analysis synthesizes data from the Lawrence Berkeley National Laboratory (LBNL), the International Energy Agency (IEA), regional transmission organizations such as the PJM Interconnection, and sustainability disclosures from leading hyperscale cloud service providers.

The findings indicate that while the direct site-level water consumption of highly optimized hyperscale data centers has achieved remarkable efficiencies (ranging from 0.15 to 0.36 L/kWh), the indirect water footprint embedded in the upstream generation of grid electricity remains vastly larger, averaging approximately 4.52 L/kWh nationally in the United States. Consequently, a holistic assessment of an AI facility's hydrological impact must account for both direct evaporative cooling losses and the consumptive water use of the thermal power plants supplying its electricity. Furthermore, while the aggregate global water demand for AI remains statistically marginal compared to legacy sectors such as agriculture and thermoelectric power generation, the extreme spatial concentration of hyperscale facilities in water-stressed basins—such as the American Southwest and Northern Virginia—creates acute, localized hydrological stress.

Through the deployment of advanced engineering mitigations, including adiabatic cooling, direct-to-chip liquid cooling architectures, and the utilization of reclaimed municipal wastewater, the industry possesses the technical capacity to decouple computational growth from watershed depletion. However, realizing this potential requires systemic transparency, aggressive grid decarbonization, and the integration of climate-conscious cooling strategies that dynamically balance energy efficiency against regional water scarcity.


## 1. Introduction: The AI Data Center and the Digital Resource Nexus

The integration of artificial intelligence into the global economy represents a paradigm shift in computational intensity. Unlike traditional cloud computing workloads, which are characterized by transient and highly variable processing demands, the training and inference phases of foundational AI models operate at sustained, near-maximum utilization rates across thousands of interconnected graphics processing units (GPUs). This sustained intensity generates immense thermal loads, necessitating equally massive cooling infrastructure.

The scale of this physical expansion is staggering. The United States Department of Energy (DOE), acting under the mandate of the Energy Act of 2020, recently published the 2024 Report on U.S. Data Center Energy Use produced by the Lawrence Berkeley National Laboratory (LBNL).<sup>1</sup> The LBNL report estimates that data center load growth has tripled over the past decade. In 2023, data centers consumed approximately 176 terawatt-hours (TWh), accounting for 4.4% of total U.S. electricity.<sup>1</sup> Driven by the rise of AI applications, domestic manufacturing growth, and widespread electrification, this electricity demand is projected to double or triple by 2028, potentially reaching between 325 and 580 TWh and accounting for 6.7% to 12% of total U.S. electrical generation.<sup>1</sup>

The global outlook mirrors this domestic trajectory. The International Energy Agency (IEA) projects that global electricity generation required to supply data centers will grow from 460 TWh in 2024 to over 1,000 TWh in 2030, and up to 1,300 TWh by 2035.<sup>7</sup> This represents an annualized growth rate of approximately 15%, which is more than four times faster than the growth of total electricity consumption from all other sectors combined.<sup>8</sup> The United States remains the epicenter of this expansion, possessing the highest per-capita data center consumption in the world—projected to grow from 540 kWh per capita in 2024 to over 1,200 kWh per capita by 2030, an intensity an order of magnitude higher than any other global region.<sup>9</sup>

Crucially, this explosive growth in energy demand carries a proportional, yet frequently opaque, requirement for freshwater. Peer-reviewed academic models estimate that by 2027, the global AI demand will account for 4.2 to 6.6 billion cubic meters of water withdrawal.<sup>10</sup> To contextualize this volume, 6.6 billion cubic meters exceeds the total annual water withdrawal of four to six nations the size of Denmark, or roughly half of the entire United Kingdom.<sup>10</sup> This trajectory is particularly concerning as freshwater scarcity emerges as a paramount global crisis. Ensuring the sustainable scaling of artificial intelligence therefore necessitates a comprehensive understanding of the water-energy nexus—the fundamental physical and economic interdependencies between water resources and electrical power.


## 2. Theoretical Foundations: The Water-Energy Nexus

The water-energy nexus is a conceptual framework describing the inextricable, bidirectional interdependence between water resources and energy generation. An accurate life-cycle assessment of an AI data center must account for both vectors of this nexus: the energy required to treat and transport water, and the water required to generate energy and cool server hardware.<sup>12</sup>


## 2.1 The Energy Intensity of Water Supply Infrastructure

Water supply and wastewater treatment infrastructure is highly energy-intensive. The processes of extracting, purifying, and distributing water require substantial, continuous electrical input. Nationwide, municipal water and wastewater systems in the United States consume approximately 70 billion kWh of electricity annually, representing a significant fraction of total grid demand.<sup>14</sup> On average, supplying water requires approximately 1,900 kWh per million gallons (MG).<sup>13</sup>

This energy intensity is heavily dependent on the hydrological source and the required treatment level. Surface water extraction is typically gravity-driven but still requires roughly 1,200 kWh/MG for baseline pumping and distribution.<sup>13</sup> Groundwater extraction is significantly more energy-intensive, requiring an average of 600 kWh/MG solely to lift the water from subsurface aquifers, before accounting for further purification and distribution.<sup>13</sup> Advanced treatment methodologies, such as desalination, demand one to two orders of magnitude more power than standard surface water treatment.<sup>13</sup> Consequently, when a data center consumes millions of gallons of municipal drinking water for its cooling towers, it is indirectly consuming megawatt-hours of utility power embedded within the local water distribution network.


## 2.2 The Water Intensity of Electrical Generation

Conversely, electrical generation is one of the largest consumers of freshwater globally. In the United States, roughly 73% of utility-scale electricity is generated by thermoelectric power plants, which include coal, natural gas, biomass, and nuclear facilities.<sup>15</sup> These plants operate on the Rankine thermodynamic cycle, which involves boiling water to create high-pressure steam that expands through a turbine to generate electricity. To maintain the necessary pressure differential across the turbine and complete the closed loop, the low-pressure steam exiting the turbine must be rapidly condensed back into liquid water.<sup>17</sup>

This condensation process requires massive volumes of external cooling water. The hydrological impact is determined by the plant's specific cooling technology. Approximately 43% of U.S. power plants utilize "once-through" cooling systems, which withdraw immense volumes of water from a river, lake, or ocean, pass it through a heat exchanger, and discharge it back into the source at an elevated temperature.<sup>17</sup> While withdrawal rates are extraordinarily high, the actual consumptive loss (evaporation) is relatively low. The remaining 57% of plants utilize "closed-cycle" systems featuring recirculating cooling ponds or towers.<sup>17</sup> These systems withdraw significantly less water overall, but they operate by evaporating a portion of the circulating water into the atmosphere to reject heat.<sup>17</sup>

Evaporation constitutes "consumptive use" because the water is permanently removed from the immediate watershed and is no longer available for downstream ecological, agricultural, or municipal applications.<sup>11</sup> The fuel source heavily dictates this consumptive footprint. According to the Energy Information Administration (EIA), coal-fired power plants withdraw an astronomical average of 19,185 gallons per MWh (approximately 72.6 L/kWh), while natural gas combined-cycle plants withdraw 2,803 gallons per MWh (approximately 10.6 L/kWh).<sup>16</sup> The purely consumptive (evaporated) portion of these generation methods averages around 2.0 gallons per kWh (7.6 L/kWh) nationally for older thermal fleets.<sup>20</sup>

The ongoing transition of the macroeconomic electrical grid toward renewable energy profoundly influences this metric. Wind turbines and solar photovoltaic (PV) arrays do not rely on thermal steam cycles and therefore have an operational water-withdrawal intensity approaching zero.<sup>16</sup> Thus, a data center's geographical location and its corresponding regional grid mix entirely dictate the embedded water footprint of its electricity consumption. A highly efficient facility located in a region dependent on legacy fossil fuels will carry a massive indirect water footprint, whereas the same facility powered by a highly renewable grid will possess a negligible indirect footprint.<sup>5</sup>


## 3. Establishing Core Metrics: WUE, PUE, and Thermodynamics

To quantify the operational efficiency and sustainability of a data center, the industry relies on a suite of standardized metrics originally conceptualized by the non-profit consortium The Green Grid.<sup>22</sup> The most critical of these are Power Usage Effectiveness (PUE) and Water Usage Effectiveness (WUE), alongside the emerging Carbon Usage Effectiveness (CUE).


## 3.1 The Mathematics of Water Usage Effectiveness (WUE)

Water Usage Effectiveness (WUE) is the definitive metric for measuring site-level water efficiency. It isolates the volume of water consumed directly by the facility relative to the computational work performed by the IT equipment housed within it.<sup>19</sup> The formula is expressed mathematically as:



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")


A lower WUE indicates superior efficiency, with the theoretical ideal being 0.0 L/kWh. This absolute zero state is achievable only in facilities utilizing strictly air-cooled architectures, closed-loop liquid systems without evaporative assist, or dielectric fluid immersion cooling.<sup>19</sup>

Traditional data centers heavily rely on evaporative cooling towers due to their immense thermodynamic efficiency. This efficiency is governed by the principles of latent heat versus sensible heat. Sensible heat exchange involves changing the temperature of a fluid without a phase change, which is relatively inefficient. The specific heat capacity of water is approximately 4.18 kJ/kg·°C.<sup>25</sup> However, the latent heat of vaporization—the energy required to change water from a liquid to a gas—is roughly 2,257 kJ/kg. By deliberately allowing a portion of the cooling water to evaporate, cooling towers reject massive amounts of thermal energy per unit of water, making it an incredibly potent mechanism for managing the extreme heat loads generated by high-density AI servers.<sup>25</sup>

It is important to note that WUE calculations can vary based on methodological definitions. Standard WUE measurements track gross water withdrawal. However, leading hyperscalers, such as Google, advocate for the "WUE Category 2" metric, which aligns with ISO standards.<sup>22</sup> WUE Category 2 specifically calculates consumptive use, defined as total water input minus water returned to the local watershed.<sup>28</sup> In a typical evaporative cooling tower, roughly 80% of the withdrawn water is evaporated (consumed), while the remaining 20% constitutes "blowdown"—water that is periodically flushed into the municipal sewer system to prevent the hazardous concentration of dissolved minerals and biological scaling.<sup>28</sup> Because blowdown is returned to a treatment facility and theoretically remains in the hydrological cycle, focusing strictly on the 80% evaporated fraction (Category 2) provides a more precise representation of the facility's permanent impact on local water availability.<sup>28</sup>


## 3.2 The Trade-off Between PUE and WUE

Power Usage Effectiveness (PUE) calculates the total facility energy used relative to the IT equipment energy. It is defined as:



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")


While the industry relentlessly strives to drive PUE as close to the theoretical floor of 1.0 as possible, there is a complex, well-documented engineering tension between minimizing PUE and minimizing WUE.<sup>22</sup>

Optimizing for extreme electrical efficiency (a low PUE) frequently necessitates the extensive use of evaporative cooling. Evaporative systems leverage the wet-bulb temperature of the ambient air, allowing operators to chill water to temperatures significantly below the dry-bulb temperature of the surrounding environment.<sup>25</sup> This vastly reduces the need for energy-intensive mechanical compressor chillers, thereby lowering the PUE, but simultaneously driving the WUE higher.<sup>27</sup>

Conversely, if a facility operator attempts to eliminate on-site water use by relying exclusively on mechanical dry air cooling (achieving a WUE of 0.0), they must expend significantly more electrical energy to power high-velocity compressor fans and refrigeration cycles, particularly during periods of elevated ambient temperatures.<sup>27</sup> This inherently drives the PUE higher, increasing operational energy costs and upstream indirect carbon and water emissions.<sup>27</sup> Regulatory bodies must carefully navigate this thermodynamic reality; policies that enforce aggressive WUE limits without considering local psychrometric conditions can inadvertently force operators to abandon evaporative cooling, thereby increasing electrical demand and placing greater stress on an already constrained regional power grid.<sup>31</sup>


<table>
  <tr>
   <td><strong>Metric</strong>
   </td>
   <td><strong>Definition</strong>
   </td>
   <td><strong>Theoretical Ideal</strong>
   </td>
   <td><strong>Primary Trade-off</strong>
   </td>
  </tr>
  <tr>
   <td><strong>PUE</strong>
   </td>
   <td>Total Facility Energy / IT Equipment Energy
   </td>
   <td>1.0
   </td>
   <td>Low PUE often requires evaporative cooling (high WUE) <sup>31</sup>
   </td>
  </tr>
  <tr>
   <td><strong>WUE</strong>
   </td>
   <td>Total Site Water Consumption / IT Equipment Energy
   </td>
   <td>0.0 L/kWh
   </td>
   <td>Low WUE (dry cooling) often increases electrical demand (high PUE) <sup>31</sup>
   </td>
  </tr>
  <tr>
   <td><strong>WUE Cat 2</strong>
   </td>
   <td>Consumptive Water (Evaporated) / IT Equipment Energy
   </td>
   <td>0.0 L/kWh
   </td>
   <td>Excludes blowdown returned to the watershed <sup>28</sup>
   </td>
  </tr>
  <tr>
   <td><strong>CUE</strong>
   </td>
   <td>Total CO2 Emissions / IT Equipment Energy
   </td>
   <td>0.0 kg/kWh
   </td>
   <td>Heavily dependent on regional grid fuel mix <sup>22</sup>
   </td>
  </tr>
</table>



## 4. Benchmarks and Data Layers: Direct and Indirect Footprints

A rigorous assessment of an AI data center's water footprint requires dissecting the aggregate data into direct (site-level) and indirect (grid-level) components. Analyzing both dimensions provides a holistic understanding of the industry's resource consumption profile.


## 4.1 Direct Footprint Benchmarks (Site WUE)

Historically, the global data center industry averaged a WUE of approximately 1.8 to 1.9 L/kWh.<sup>19</sup> This average encompasses older, inefficient enterprise data centers and legacy colocation facilities utilizing outdated air-handling and cooling tower technologies.<sup>23</sup> However, the advent of hyperscale facilities—massive, custom-built environments operated by major cloud service providers (CSPs)—has drastically skewed the average downward through economies of scale and advanced mechanical engineering.<sup>4</sup>

According to the LBNL 2024 U.S. Data Center Energy Usage Report, the aggregate average WUE for U.S. hyperscale and colocation centers hovered around 0.36 L/kWh in 2023.<sup>4</sup> In absolute volumetric terms, U.S. data centers consumed roughly 176 TWh of electricity in 2023, resulting in a direct site-level water consumption of roughly 66 billion liters.<sup>4</sup> Hyperscale and colocation facilities, which host the vast majority of AI workloads, drove approximately 84% of this total.<sup>4</sup>

Sustainability disclosures from the leading CSPs reveal nuanced, highly optimized operational realities:



* **Microsoft**: Driven by the immense compute requirements of its strategic partnership with OpenAI, Microsoft's global WUE for the 2024 fiscal year was reported at 0.30 L/kWh.<sup>32</sup> This metric represents a blended average across highly varied regional climates. For instance, Microsoft's European operations achieved an astonishing WUE of 0.03 L/kWh due to favorable ambient conditions allowing for extensive free cooling, while its operations in the Americas averaged 0.38 L/kWh in FY24.<sup>32</sup> In absolute terms, during FY2023, Microsoft's total enterprise water consumption reached 7.844 billion liters against an electricity consumption of 23.56 TWh, yielding an implied enterprise-wide WUE of approximately 0.33 L/kWh.<sup>33</sup> A significant portion of this water—3.28 billion liters—was consumed in regions identified as having high baseline water stress.<sup>33</sup>
* **Amazon Web Services (AWS)**: AWS reported an industry-leading global average WUE of 0.15 L/kWh in 2024, representing a remarkable 40% improvement since 2021.<sup>34</sup> This exceptional metric is likely achieved through the expansive deployment of direct expansion (DX) cooling systems, the utilization of custom-designed Graviton and Inferentia server chips that tolerate higher thermal operating limits, and vast economies of scale.<sup>23</sup>
* **Google**: Utilizing the consumptive "WUE Category 2" metric, Google reported a value of 1.15 L/kWh for its global data center fleet in both 2023 and 2024.<sup>28</sup> Unlike operators pursuing absolute minimum WUEs, Google explicitly utilizes a dynamic operational philosophy termed "climate-conscious cooling." This strategy deliberately balances carbon emissions against water consumption in real-time; in locations where grid electricity is heavily reliant on fossil fuels, Google will utilize evaporative cooling to minimize electrical draw (lowering PUE and CUE), accepting a higher WUE as a necessary ecological trade-off to minimize overall climate impact.<sup>36</sup>
* **Meta**: Meta routinely achieves highly optimized cooling metrics, with specific hyperscale facilities demonstrating WUEs as low as 0.24 L/kWh.<sup>24</sup> In 2024, the company withdrew over 3.7 billion liters of water, primarily for evaporative cooling towers, while continually refining its operations to align with an aggressive corporate commitment to become "water positive" by 2030.<sup>37</sup>


## 4.2 Indirect Footprint Benchmarks (Grid Water Intensity)

While direct site efficiency dominates the public narrative, the indirect water footprint dictated by the regional power grid often dwarfs a facility's direct water use.<sup>19</sup> A comprehensive federal analysis estimated that the indirect water consumption footprint for data centers in the United States was roughly 211 billion gallons (approximately 800 billion liters) in 2023.<sup>4</sup> Given the 176 TWh of electricity consumed by the sector that year, the national average for indirect water consumption is estimated to be 4.52 L/kWh (roughly 1.2 gallons per kWh).<sup>5</sup>

Therefore, for every liter of water evaporated directly at the data center site, an average of 12.5 liters of water is evaporated upstream at the power plants supplying the facility's electricity (assuming a site WUE of 0.36 L/kWh versus a grid intensity of 4.52 L/kWh).<sup>4</sup> This staggering multiplier effect underscores the absolute criticality of grid decarbonization. A zero-water data center utilizing mechanical dry cooling carries an indirect water footprint of millions of liters annually if it is connected to a fossil-heavy regional electrical grid.<sup>19</sup>


<table>
  <tr>
   <td><strong>Data Center Operator / Scope</strong>
   </td>
   <td><strong>Metric Category</strong>
   </td>
   <td><strong>Reported Intensity Value</strong>
   </td>
   <td><strong>Contextual Notes</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Global Industry Average</strong>
   </td>
   <td>Direct Site WUE
   </td>
   <td>1.80 - 1.90 L/kWh
   </td>
   <td>Includes legacy enterprise facilities <sup>19</sup>
   </td>
  </tr>
  <tr>
   <td><strong>U.S. Hyperscale Average</strong>
   </td>
   <td>Direct Site WUE
   </td>
   <td>0.36 L/kWh
   </td>
   <td>Reflects modern LBNL 2023 estimates <sup>4</sup>
   </td>
  </tr>
  <tr>
   <td><strong>Amazon Web Services (AWS)</strong>
   </td>
   <td>Direct Site WUE
   </td>
   <td>0.15 L/kWh
   </td>
   <td>2024 global fleet average <sup>34</sup>
   </td>
  </tr>
  <tr>
   <td><strong>Microsoft</strong>
   </td>
   <td>Direct Site WUE
   </td>
   <td>0.30 L/kWh
   </td>
   <td>FY2024 global fleet average <sup>32</sup>
   </td>
  </tr>
  <tr>
   <td><strong>Google</strong>
   </td>
   <td>Direct Site WUE
   </td>
   <td>1.15 L/kWh
   </td>
   <td>ISO Category 2 (Consumptive Use) <sup>28</sup>
   </td>
  </tr>
  <tr>
   <td><strong>U.S. National Grid Average</strong>
   </td>
   <td>Indirect Grid Intensity
   </td>
   <td>4.52 L/kWh
   </td>
   <td>Aggregated U.S. power generation footprint <sup>5</sup>
   </td>
  </tr>
</table>



## 5. Case Study: The PJM Interconnection and Northern Virginia

To concretely illustrate the collision of massive AI load growth, regional grid dynamics, and localized water stress, an examination of the PJM Interconnection is highly instructive. PJM is the largest Regional Transmission Organization (RTO) in the United States, managing the bulk electric system across 13 states and the District of Columbia.<sup>40</sup> Crucially, PJM serves Northern Virginia, specifically Loudoun, Fairfax, and Prince William counties, an area colloquially known as "Data Center Alley".<sup>26</sup> This region hosts the highest concentration of data centers globally, processing an estimated 70% of the world's internet traffic.<sup>26</sup>


## 5.1 Explosive Load Growth and Grid Forecasting

The proliferation of AI has fundamentally altered PJM's long-term planning horizon. According to the PJM 2025 Long-Term Load Forecast Report, the organization anticipates significant, sustained growth in electricity demand over the next two decades, directly driven by data center development, widespread electrification, and industrial resurgence.<sup>45</sup>

Over the past three years, the five-year forecast of utility peak load growth nationally has increased by a factor of six, with data centers accounting for an estimated 55% of that demand growth.<sup>48</sup> Within PJM specifically, the summer peak load is projected to climb by approximately 70,000 megawatts (MW), reaching 220,000 MW over the next 15 years.<sup>45</sup> The winter peak load is experiencing an even steeper trajectory, closing the historic gap with summer demand and estimated to reach 210,000 MW by 2039.<sup>45</sup> The annualized growth rate over the next 20 years for the summer peak has been revised upward to 2.0%, a highly abnormal trajectory for an industry accustomed to flat or sub-1% growth over the past two decades.<sup>46</sup>


## 5.2 Fuel Mix and the Evolving Indirect Water Footprint

The indirect water footprint of the data centers operating within PJM is entirely dependent on how the RTO meets this surging load. The PJM generation mix is currently undergoing a radical transition. Accelerated retirements of legacy generation units—driven by unit age and environmental public policy—are outpacing the addition of new resources.<sup>47</sup> In 2024 alone, PJM received over 30 deactivation notifications totaling over 2 gigawatts (GW) of capacity.<sup>47</sup>

Historically, coal-fired generation dominated the region. However, competitive wholesale markets and environmental regulations have precipitated a steep decline in coal reliance.<sup>49</sup> Consequently, emission rates within the PJM footprint reached an all-time low in 2023; since 2005, carbon dioxide emission rates have fallen by 43%, nitrogen oxides by 90%, and sulfur dioxide by 96%.<sup>50</sup> Concurrently, the interconnection queue is overwhelmingly dominated by renewable projects; as of late 2024, renewable and storage projects accounted for over 95% of the active queue by project count.<sup>52</sup> PJM observed nearly 4,500 MW of solar capacity added to the grid in 2024 alone, leading to record solar output peaks.<sup>53</sup>

This transition dramatically reduces the indirect water intensity (L/kWh) of the grid, as solar PV and wind generation utilize no consumptive cooling water.<sup>16</sup> However, intermittent renewables possess lower "Effective Load Carrying Capability" (ELCC) compared to dispatchable thermal plants.<sup>52</sup> Because AI data centers operate as flat, baseload consumers drawing power 24/7, PJM continues to rely heavily on natural gas combined-cycle plants and nuclear facilities to maintain fundamental reliability, both of which utilize massive volumes of water for thermal cooling.<sup>21</sup> Consequently, while the L/kWh intensity of the PJM grid is declining, the sheer volumetric explosion of TWh demand from AI facilities ensures that the absolute indirect water footprint remains vast.


## 5.3 Localized Direct Water Stress in Loudoun County

Beyond the indirect grid effects, the localized direct water consumption of these facilities has triggered acute environmental anxiety. In 2023, the data centers clustered across Northern Virginia consumed nearly 2 billion gallons of highly treated municipal drinking water directly for evaporative cooling, representing a staggering 63% increase from 2019 levels.<sup>19</sup> Loudoun County alone accounted for roughly 900 million gallons of this total.<sup>19</sup>

The vulnerability of this infrastructure was exposed during a severe, months-long drought in the summer of 2024.<sup>26</sup> While local municipalities implemented mandatory water use restrictions for residents to preserve reservoir levels, large hyperscale data centers continued to consume up to 5 million gallons of water per day, an amount equivalent to the indoor water use of a town populated by 10,000 to 50,000 people.<sup>26</sup> This dichotomy has galvanized intense opposition from civil society organizations, such as the Piedmont Environmental Council (PEC), which argue that the unchecked proliferation of maximum-lot-coverage data centers poses an existential threat to regional stream health, aquifer recharge rates, and the long-term viability of the drinking water supply.<sup>43</sup>


## 6. Layman Perspectives: Proportions, Scale, and Analogies

The volumetric scale of billions of liters and terawatt-hours utilized in infrastructure planning can be profoundly abstract and difficult to conceptualize without formal technical grounding. Translating these figures into everyday analogies provides necessary, grounded perspective on the relative impact of artificial intelligence on both global and local water systems.


## 6.1 The Micro Scale: Water Per AI Prompt

At the individual user level, interacting with a generative AI model triggers a measurable, albeit minuscule, chain of physical resource consumption. Sophisticated academic analyses, such as the foundational methodology proposed by Ren et al. (arXiv 2304.03271), estimate the per-prompt water footprint by tracing the energy required for inference through the server architecture to the cooling tower.<sup>11</sup>

These studies estimate that a single conversational interaction with an advanced AI system—such as a standard session consisting of 10 to 50 user prompts on a model akin to ChatGPT—indirectly evaporates roughly 500 milliliters of water.<sup>30</sup> This volume is precisely equivalent to a standard 16.9-ounce plastic water bottle.<sup>56</sup> In isolation, 500 milliliters is entirely negligible, representing less than 1% of an average human's daily drinking requirement, or roughly the amount of water dispensed in two seconds by a standard showerhead.<sup>11</sup>

However, the aggregate impact of billions of daily queries globally scales this micro-consumption into a macro-environmental issue. The training phase of these models is exponentially more resource-intensive than the user inference phase. Training a foundational model like GPT-3 in a state-of-the-art U.S. facility required the direct, continuous evaporation of approximately 700,000 liters of pristine freshwater.<sup>6</sup> To contextualize this massive figure, 700,000 liters is equivalent to the water required to manufacture roughly 320 to 370 passenger vehicles, or enough to sustain the total indoor and outdoor water use of a typical U.S. household for over six years.<sup>56</sup>


## 6.2 The Macro Scale: AI vs. Agriculture and Industry

When evaluating AI's water footprint, it is vital to contrast it against legacy industries to avoid scope insensitivity and accurately diagnose the primary drivers of global water depletion.<sup>58</sup> The global water demand for AI, while growing rapidly and presenting acute local challenges, remains a literal "drop in the bucket" compared to agricultural and traditional industrial usage.<sup>59</sup>

For instance, the production of animal protein is incredibly water-intensive. Producing a single kilogram of beef requires the consumption of approximately 15,400 liters of water (predominantly "green water" utilized for growing cattle feed such as alfalfa).<sup>55</sup> To match the water footprint of producing just one kilogram of beef, a user would need to execute over 1.5 million AI queries.<sup>55</sup> An environmental economist at Pictet Asset Management further illuminated this disparity, noting that producing just 50 grams of beef protein generates the same carbon equivalent as roughly 617,000 AI queries.<sup>60</sup> When evaluated against the global dairy industry, which consumes an estimated staggering 4,555 billion liters of water, the AI sector's footprint represents a minuscule fraction of total human withdrawal.<sup>59</sup>

Similarly, the water consumption of local municipal amenities often dwarfs that of individual data centers. A typical 18-hole golf course in the United States consumes between 100,000 and 2 million gallons of water *per day* to maintain turf, depending heavily on the aridity of the local climate.<sup>61</sup> A large 100-megawatt data center operating at peak load during summer conditions might consume up to 3 million gallons per day, placing a single massive hyperscale facility roughly on par with two to three large golf courses.<sup>26</sup>

Thus, the core issue is not the absolute global volume of water consumed by AI, but rather its spatial density. While data center water use is globally insignificant compared to agriculture, its intensity is highly localized, operating 24/7/365, and competing directly with municipal reservoirs and deep aquifers for highly refined, potable water supplies.<sup>12</sup>


<table>
  <tr>
   <td><strong>Comparative Entity / Action</strong>
   </td>
   <td><strong>Estimated Water Consumption</strong>
   </td>
   <td><strong>Contextual Analogy</strong>
   </td>
  </tr>
  <tr>
   <td><strong>AI User Session (10-50 Prompts)</strong>
   </td>
   <td>~0.5 Liters (500 ml)
   </td>
   <td>Equivalent to one standard plastic water bottle <sup>55</sup>
   </td>
  </tr>
  <tr>
   <td><strong>GPT-3 Model Training Phase</strong>
   </td>
   <td>~700,000 Liters
   </td>
   <td>Equivalent to manufacturing ~350 passenger cars <sup>10</sup>
   </td>
  </tr>
  <tr>
   <td><strong>Beef Production (1 Kilogram)</strong>
   </td>
   <td>~15,400 Liters
   </td>
   <td>Equivalent to >1.5 million AI queries <sup>55</sup>
   </td>
  </tr>
  <tr>
   <td><strong>Typical U.S. Golf Course</strong>
   </td>
   <td>100,000 - 2,000,000 Gallons/Day
   </td>
   <td>Frequently rivals or exceeds a medium data center <sup>61</sup>
   </td>
  </tr>
  <tr>
   <td><strong>Large Hyperscale Data Center</strong>
   </td>
   <td>1,000,000 - 5,000,000 Gallons/Day
   </td>
   <td>Equivalent to the domestic use of a town of 10,000 - 50,000 residents <sup>26</sup>
   </td>
  </tr>
</table>



## 7. Practical Applications and Engineering Mitigations

To decouple computational growth from watershed depletion, hyperscale operators and infrastructure engineering firms are actively transitioning away from traditional open-loop cooling towers toward innovative, water-conservative thermal management systems.


## 7.1 Adiabatic Coolers vs. Evaporative Cooling Towers

The primary mechanical alternative to the traditional evaporative cooling tower is the adiabatic cooler. An understanding of the distinction between these two systems is critical for projecting future facility water demands.

A conventional evaporative cooling tower constantly circulates warm water from the data hall over a physical medium (known as fill). Large fans draw ambient air through the fill, causing a continuous percentage of the water to evaporate.<sup>25</sup> This utilizes latent heat exchange to achieve highly efficient cooling, but it inherently consumes massive volumes of water constantly throughout the year, regardless of the ambient temperature.<sup>63</sup>

Conversely, an adiabatic cooler operates primarily as a dry air cooler utilizing sensible heat exchange. Ambient air is drawn across a closed, finned coil containing the circulating coolant.<sup>25</sup> During the cooler months of the year, the system functions with absolute zero water use, simply dissipating heat into the cool ambient air. However, when ambient temperatures spike during the summer and dry cooling becomes thermodynamically insufficient, the system automatically enters "adiabatic mode".<sup>27</sup>

In adiabatic mode, arrays of fine misting nozzles spray a precise, calculated volume of water directly into the incoming air stream before it reaches the coils.<sup>27</sup> This water evaporates instantaneously, dramatically lowering the dry-bulb temperature of the air (pre-cooling) before it interacts with the finned coils. Because the water is utilized only during peak thermal conditions and is completely evaporated in the pre-cooling stage, an adiabatic system can reduce total annual facility water consumption by up to 90% compared to a traditional open cooling tower.<sup>27</sup> The engineering trade-off for this massive water savings is a substantially larger physical footprint and significantly higher electrical energy consumption, as massive fans are required to pull air through the dense finned coils, thereby increasing the facility's PUE.<sup>27</sup>


## 7.2 Direct-to-Chip Liquid Cooling and Zero-Water Designs

As the thermal design power (TDP) of next-generation AI processors exceeds 1,000 watts per chip (exemplified by architectures such as Nvidia's Blackwell platform), traditional air cooling—even when chilled by water—becomes thermodynamically inadequate.<sup>35</sup> The physical limit of air's heat capacity forces the industry to pivot rapidly toward direct-to-chip, closed-loop liquid cooling.

In August 2024, Microsoft announced the deployment of a next-generation data center architecture specifically optimized for extreme AI workloads that achieves zero evaporative water consumption for cooling.<sup>66</sup> By routing a highly engineered, closed loop of liquid coolant directly over the microprocessor heat sinks, the system achieves precise thermal control without exposing any water to the atmosphere.<sup>66</sup> The concentrated heat is subsequently rejected to the outside environment via massive air-side economizers functioning as dry radiators.<sup>66</sup> While a relatively small, one-time volume of water is required to initially fill the closed loop, there is zero ongoing evaporative loss. Microsoft projects that scaling this zero-water design will avoid the consumption of more than 125 million liters of water per year per data center facility, targeting a near-zero WUE across newly deployed AI fleets.<sup>66</sup>


## 7.3 Reclaimed Municipal Wastewater Synergies

In locations where retrofitting to dry cooling is unfeasible, or where the electrical penalty of adiabatic systems cannot be supported by the local grid, operators are mitigating their impact on fragile potable aquifers by utilizing reclaimed municipal wastewater.<sup>34</sup>

Amazon Web Services (AWS) has aggressively adopted this industrial ecology strategy. As of late 2024, AWS operates 24 data centers globally that utilize recycled "greywater"—water that has already been utilized by the community and processed by a municipal sewage treatment plant—for their cooling towers.<sup>34</sup> By utilizing this degraded water source, AWS avoids competing with residents for highly purified drinking water. The company expects that by expanding this program to over 120 locations by 2030, it will preserve over 530 million gallons of primary drinking water supply in the U.S. annually, effectively insulating local residential communities from the facility's massive evaporative footprint.<sup>34</sup>


## 8. Uncertainties, Opposing Views, and Localized Stress

Despite aggressive corporate efficiency targets and the rapid evolution of cooling hardware, the explosive physical growth of AI infrastructure has ignited fierce pushback from environmental advocacy groups, local governments, and civil society. The contemporary debate is characterized by a stark dichotomy: the immense macroeconomic benefits of digital infrastructure versus the acute, localized strain on physical natural resources.<sup>26</sup>


## 8.1 The Water Scarcity Conflict in the American Southwest

The controversy over AI water use is most pronounced in high-stress, arid watersheds. In the American Southwest, specifically the rapidly expanding tech corridors surrounding Mesa, Arizona, the juxtaposition of hyperscale data center development against historic, climate-driven drought conditions has sparked intense public outrage and political scrutiny.<sup>70</sup>

Critics argue that utilizing highly treated municipal drinking water for evaporative cooling—which must be extensively chemically treated by the municipality to prevent bacterial growth and is subsequently lost entirely to the atmosphere—represents a profound, systemic misallocation of a critical survival resource.<sup>70</sup> The lack of humidity in the Southwest makes evaporative cooling extraordinarily efficient (yielding a low PUE), making the region highly attractive to developers, but placing maximum strain on the depleted Colorado River basin.<sup>70</sup>

Furthermore, civil advocates highlight that current municipal utility pricing structures often fail to disincentivize excessive industrial consumption. Because industrial water rates are highly regulated and typically priced strictly based on the operational cost of conveyance and treatment, tech giants effectively pay mere pennies per thousand gallons.<sup>70</sup> This economic dynamic, critics argue, privatizes the profits of the AI boom while socializing the ecological risks of water scarcity, prioritizing server farms over the basic survival needs of residents and the viability of local agriculture.<sup>70</sup> In extreme cases, local farmers have been forced to fallow fields due to water restrictions, while neighboring data centers continue to evaporate millions of gallons daily.<sup>57</sup>


## 8.2 Economic Perspectives, Tax Revenues, and Data Transparency

Conversely, proponents of unchecked data center expansion counter that these facilities are the foundational economic engines of the modern digital economy. The Joint Legislative Audit and Review Commission (JLARC) of Virginia published a comprehensive 2024 study confirming that data centers inject massive, stabilizing capital investment into state and county economies.<sup>44</sup> While data centers employ relatively few permanent, full-time workers once operational (averaging roughly 50 staff per 250,000 square feet), the initial construction phases and secondary supply chains generate profound, multi-year economic stimulus.<sup>44</sup>

Most importantly, data centers generate extraordinary local commercial tax revenues. These revenues are frequently utilized by host counties to fully fund public school systems, emergency services, and broader infrastructure upgrades without raising residential property taxes.<sup>43</sup> Proponents argue that comparing the economic value generated per liter of water by an AI data center to the economic value generated by water-intensive agricultural exports (such as alfalfa grown in the desert and shipped overseas) reveals that digital infrastructure is vastly more economically efficient and beneficial to the state.<sup>57</sup>

However, a prevailing uncertainty exacerbating this debate stems from corporate opacity. Much of the localized resistance in regions like Virginia and Arizona is driven by a fundamental lack of transparency; developers frequently secure zoning approvals and utility hookups utilizing strict Non-Disclosure Agreements (NDAs) that shield exact operational metrics, peak electrical demands, and maximum water consumption estimates from public scrutiny.<sup>43</sup> Until recently, fewer than a third of global data center operators actively tracked or reported their WUE publicly, leaving municipal water planners forced to guess the true, aggregate hydrological impact of new hyperscale developments on their fragile aquifers.<sup>43</sup>


## 9. Recommendations and Future Outlook

As the deployment of generative AI transitions from the initial training phases of massive foundational models to ubiquitous global inference—where billions of users integrate AI into daily digital tasks—the resource trajectory is set to steepen exponentially. With domestic data center electricity demand projected to reach up to 580 TWh by 2028, and global demand pushing 1,300 TWh by 2035, the indirect and direct water footprints will scale in lockstep unless systemic interventions are widely adopted.<sup>1</sup>

To navigate this impending resource bottleneck and ensure the sustainable growth of artificial intelligence, the industry and regulatory bodies must adopt a holistic, systems-level approach to managing the water-energy nexus:



1. **Mandate Closed-Loop and Adiabatic Architectures in Stressed Basins**: Regulatory bodies and municipal planning commissions must leverage their zoning authorities to mandate zero-water or ultra-low-water cooling designs (such as adiabatic coolers or direct-to-chip liquid loops) for all new data center construction in high-stress watersheds, mirroring the architecture recently debuted by Microsoft.<sup>65</sup> The issuance of permits should be contingent on achieving a strictly defined, exceptionally low site WUE.
2. **Accelerate Upstream Grid Decarbonization**: Because the indirect water footprint of a data center is inextricably tied to the thermodynamic realities of thermoelectric power generation, the most effective macroeconomic method for reducing AI's aggregate water consumption is the aggressive deployment of zero-water, zero-carbon renewables (wind and solar PV).<sup>16</sup> Hyperscalers must accelerate the execution of Power Purchase Agreements (PPAs) that actively displace highly water-intensive coal and natural gas generation on regional grids like PJM.<sup>69</sup>
3. **Standardize and Enforce Public WUE Reporting**: The corporate opacity surrounding AI resource consumption must be dismantled. Regulatory frameworks must require the mandatory, standardized public reporting of site WUE, preferably aligning with the consumptive ISO Category 2 metrics favored by Google.<sup>28</sup> This must be reported concurrently with PUE and carbon intensity data to prevent operators from "gaming" one sustainability metric at the ecological expense of another.<sup>31</sup>
4. **Expand Volumetric Water Restoration and "Water Positive" Initiatives**: Corporate pledges to become "water positive" must rapidly scale from public relations initiatives into verifiable infrastructure projects. Programs initiated by Meta and Amazon, which fund localized hydrological restoration—such as agricultural efficiency subsidies, wetland preservation, and aquifer recharge projects—must become standard practice across the sector.<sup>34</sup> The operational goal must be to verifiably restore >100% of the consumptive water use within the exact watershed where the data center is located, fully offsetting the facility's evaporative footprint.<sup>74</sup>

The intersection of artificial intelligence and physical resource consumption represents one of the defining infrastructural challenges of the 21st century. By addressing the water-energy nexus holistically—optimizing both the physical site design through advanced thermodynamics and the upstream electrical grid through decarbonization—the digital economy can sustain the exponential growth of artificial intelligence without sacrificing the fundamental security of global water resources.


## 

---
Appendix: Clarifying Jargon in Layman’s Terms

To ensure this analysis remains accessible to municipal planners, policymakers, and the general public, the following glossary translates highly technical industry jargon into functional concepts:



* **WUE (Water Usage Effectiveness)**: Functionally similar to a fuel-efficiency rating for an automobile (miles per gallon), but applied to data centers. It measures how many liters of water "disappear" (mostly evaporate for cooling) per unit of computing power utilized (kWh). A lower number is superior; a WUE of 0.0 means the facility operates without consuming water.
* **PUE (Power Usage Effectiveness)**: A metric measuring total energy efficiency. It compares the total electricity pulled from the grid by the entire building (including all cooling fans, lights, and chillers) against the electricity actually used by the computer servers. A perfect score is 1.0, meaning zero energy is wasted on overhead operations.
* **Direct vs. Indirect Water**: "Direct" water is consumed strictly on-site (e.g., water evaporating from cooling towers on the roof of the data center, acting like sweat to cool the building). "Indirect" water is consumed miles away at the power plants (e.g., water evaporated from a nuclear or coal plant to generate the electricity that runs the data center).
* **kWh (Kilowatt-Hour)**: The standard unit of electrical energy billing. It represents the energy consumed by running a 1,000-watt appliance (like a typical microwave or small space heater) continuously for one hour.
* **Latent vs. Sensible Heat**: "Sensible heat" changes the temperature of an object (like a hot pan cooling down in the air). "Latent heat" involves a phase change (like boiling water turning into steam). Because it takes a massive amount of energy to force water to evaporate into gas, using latent heat (evaporative cooling towers) is an incredibly powerful way to remove heat from hot computer chips.
* **Hyperscale**: Massive, warehouse-scale data center facilities typically owned and operated by the world's largest technology and cloud computing companies (e.g., Google, Microsoft, Meta, Amazon). These facilities dwarf standard corporate server rooms in both physical size and electrical demand.
* **The Water-Energy Nexus**: The concept that water and energy are a deeply interlinked system. It takes massive amounts of water to generate electricity, and it takes massive amounts of electricity to pump, clean, and transport water. Utilizing one resource inherently drains the other.


#### Works cited



1. DOE Releases New Report Evaluating Increase in Electricity Demand from Data Centers, accessed March 23, 2026, [https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers](https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers)
2. 2024 United States Data Center Energy Usage Report - eScholarship, accessed March 23, 2026, [https://escholarship.org/uc/item/32d6m0d1](https://escholarship.org/uc/item/32d6m0d1)
3. 2024 United States Data Center Energy Usage Report, accessed March 23, 2026, [https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report](https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report)
4. 2024 United States Data Center Energy Usage Report - MIT Climate Portal, accessed March 23, 2026, [https://climate.mit.edu/sites/default/files/2025-02/lbnl-2024-united-states-data-center-energy-usage-report.pdf](https://climate.mit.edu/sites/default/files/2025-02/lbnl-2024-united-states-data-center-energy-usage-report.pdf)
5. 2024 United States Data Center Energy Usage Report - Publications | LBL ETA Publications - Lawrence Berkeley National Laboratory, accessed March 23, 2026, [https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf](https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf)
6. Making AI Less “Thirsty”: Uncovering and Addressing the Secret Water Footprint of AI Models - arXiv, accessed March 23, 2026, [https://arxiv.org/pdf/2304.03271](https://arxiv.org/pdf/2304.03271)
7. Energy supply for AI – Energy and AI – Analysis - IEA, accessed March 23, 2026, [https://www.iea.org/reports/energy-and-ai/energy-supply-for-ai](https://www.iea.org/reports/energy-and-ai/energy-supply-for-ai)
8. accessed March 23, 2026, [https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai#:~:text=From%202024%20to%202030%2C%20data,global%20electricity%20demand%20remains%20limited.](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai#:~:text=From%202024%20to%202030%2C%20data,global%20electricity%20demand%20remains%20limited.)
9. Energy demand from AI – Energy and AI – Analysis - IEA, accessed March 23, 2026, [https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai)
10. [2304.03271] Making AI Less "Thirsty": Uncovering and Addressing the Secret Water Footprint of AI Models - arXiv, accessed March 23, 2026, [https://arxiv.org/abs/2304.03271](https://arxiv.org/abs/2304.03271)
11. Making AI Less “Thirsty”: Uncovering and Addressing the Secret Water Footprint of AI Models - arXiv, accessed March 23, 2026, [https://arxiv.org/html/2304.03271v4](https://arxiv.org/html/2304.03271v4)
12. Increasing Water Consumption in Data Centers Amplifies Local Water Scarcity, accessed March 23, 2026, [https://wrp.beg.utexas.edu/episode/increasing-water-consumption-in-data-centers-amplifies-local-water-scarcity](https://wrp.beg.utexas.edu/episode/increasing-water-consumption-in-data-centers-amplifies-local-water-scarcity)
13. QUANTIFYING ENERGY USE IN THE U.S. PUBLIC WATER INDUSTRY—A SUMMARY - Hansen, Allen & Luce, Inc., accessed March 23, 2026, [https://www.hansenallenluce.com/wp-content/uploads/2015/11/Energy-Use-Water-Sector.pdf](https://www.hansenallenluce.com/wp-content/uploads/2015/11/Energy-Use-Water-Sector.pdf)
14. IL TRM: Energy per Gallon Factor, accessed March 23, 2026, [https://www.elevatenp.org/wp-content/uploads/Elevate-Energy_Energy-per-Gallon-Ratio-Whitepaper_May-2018.pdf](https://www.elevatenp.org/wp-content/uploads/Elevate-Energy_Energy-per-Gallon-Ratio-Whitepaper_May-2018.pdf)
15. What methods of electricity generation use the most water? - Visualizing Energy, accessed March 23, 2026, [https://visualizingenergy.org/what-methods-of-electricity-generation-use-the-most-water/](https://visualizingenergy.org/what-methods-of-electricity-generation-use-the-most-water/)
16. U.S. electric power sector continues water efficiency gains - U.S. Energy Information Administration (EIA), accessed March 23, 2026, [https://www.eia.gov/todayinenergy/detail.php?id=56820](https://www.eia.gov/todayinenergy/detail.php?id=56820)
17. The Water Footprint of Energy, accessed March 23, 2026, [https://watercalculator.org/footprint/the-water-footprint-of-energy/](https://watercalculator.org/footprint/the-water-footprint-of-energy/)
18. EIA tool compares individual power plants' generation, cooling water use, and emissions - U.S. Energy Information Administration (EIA), accessed March 23, 2026, [https://www.eia.gov/todayinenergy/detail.php?id=39732](https://www.eia.gov/todayinenergy/detail.php?id=39732)
19. Data Centers and Water Consumption | Article | EESI, accessed March 23, 2026, [https://www.eesi.org/articles/view/data-centers-and-water-consumption](https://www.eesi.org/articles/view/data-centers-and-water-consumption)
20. Consumptive Water Use for U.S. Power Production - Publications, accessed March 23, 2026, [https://docs.nrel.gov/docs/fy04osti/33905.pdf](https://docs.nrel.gov/docs/fy04osti/33905.pdf)
21. Comparison of Water Use by Energy Generation Types - Greater Edwards Aquifer Alliance, accessed March 23, 2026, [https://aquiferalliance.org/wp-content/uploads/2025/11/Comparison-of-Water-Use-by-Energy-Generation-Types-Trinity-Spring-Internship-Project.pdf](https://aquiferalliance.org/wp-content/uploads/2025/11/Comparison-of-Water-Use-by-Energy-Generation-Types-Trinity-Spring-Internship-Project.pdf)
22. # 3 Metrics for Datacenter Efficiency: PUE, CUE and WUE | Submer, accessed March 23, 2026, [https://submer.com/blog/pue-cue-and-wue-what-do-these-three-metrics-represent-and-which-is-one-is-the-most-important/](https://submer.com/blog/pue-cue-and-wue-what-do-these-three-metrics-represent-and-which-is-one-is-the-most-important/)
23. A Guide to Data Center Water Usage Effectiveness (WUE) and Best Practices, accessed March 23, 2026, [https://www.datacenterknowledge.com/cooling/a-guide-to-data-center-water-usage-effectiveness-wue-and-best-practices](https://www.datacenterknowledge.com/cooling/a-guide-to-data-center-water-usage-effectiveness-wue-and-best-practices)
24. Data Center Sustainability: How PUE, WUE & CUE can drive green operations - Ctrls, accessed March 23, 2026, [https://www.ctrls.com/blogs-green-datacenter-metrics-pue-wue-cue/](https://www.ctrls.com/blogs-green-datacenter-metrics-pue-wue-cue/)
25. Adiabatic Cooler vs Cooling Tower: - MITA Cooling Technologies, accessed March 23, 2026, [https://www.mitacoolingtechnologies.com/en/sources/technical-articles/comparison-between-cooling-tower-and-adiabatic-cooler/](https://www.mitacoolingtechnologies.com/en/sources/technical-articles/comparison-between-cooling-tower-and-adiabatic-cooler/)
26. Dateline Ashburn: The Thirst for AI Raises Alarms in Virginia - Broadband Breakfast, accessed March 23, 2026, [https://broadbandbreakfast.com/dateline-ashburn-the-thirst-for-ai-raises-alarms-in-virginia/](https://broadbandbreakfast.com/dateline-ashburn-the-thirst-for-ai-raises-alarms-in-virginia/)
27. FAQs | Adiabatic Coolers Vs Open Cooling Towers, accessed March 23, 2026, [https://www.vistechcooling.co.uk/knowledge-centre/articles/faqs-adiabatic-coolers-vs-open-cooling-towers/](https://www.vistechcooling.co.uk/knowledge-centre/articles/faqs-adiabatic-coolers-vs-open-cooling-towers/)
28. Measuring the environmental impact of delivering AI at Google Scale, accessed March 23, 2026, [https://services.google.com/fh/files/misc/measuring_the_environmental_impact_of_delivering_ai_at_google_scale.pdf](https://services.google.com/fh/files/misc/measuring_the_environmental_impact_of_delivering_ai_at_google_scale.pdf)
29. accessed March 23, 2026, [https://arxiv.org/html/2508.15734v1#:~:text=For%20both%202023%20and%202024,value%20was%201.15%20L%2FkWh.](https://arxiv.org/html/2508.15734v1#:~:text=For%20both%202023%20and%202024,value%20was%201.15%20L%2FkWh.)
30. [2304.03271] 1 Introduction - ar5iv - arXiv, accessed March 23, 2026, [https://ar5iv.labs.arxiv.org/html/2304.03271](https://ar5iv.labs.arxiv.org/html/2304.03271)
31. What Is Water Usage Effectiveness (WUE) in Data Centers? - The Equinix Blog, accessed March 23, 2026, [https://blog.equinix.com/blog/2024/11/13/what-is-water-usage-effectiveness-wue-in-data-centers/](https://blog.equinix.com/blog/2024/11/13/what-is-water-usage-effectiveness-wue-in-data-centers/)
32. Measuring energy and water efficiency for Microsoft datacenters, accessed March 23, 2026, [https://datacenters.microsoft.com/sustainability/efficiency/](https://datacenters.microsoft.com/sustainability/efficiency/)
33. 2024 Environmental Sustainability Report Data Fact Sheet - Microsoft, accessed March 23, 2026, [https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/2024-Environmental-Sustainability-Report-Data-Fact.pdf%20](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/2024-Environmental-Sustainability-Report-Data-Fact.pdf%20)
34. Water stewardship - Amazon Sustainability, accessed March 23, 2026, [https://sustainability.aboutamazon.com/natural-resources/water](https://sustainability.aboutamazon.com/natural-resources/water)
35. 2024 Amazon Sustainability Report, AWS Summary, accessed March 23, 2026, [https://sustainability.aboutamazon.com/2024-amazon-sustainability-report-aws-summary.pdf](https://sustainability.aboutamazon.com/2024-amazon-sustainability-report-aws-summary.pdf)
36. Revealed: Big tech's new datacentres will take water from the world's driest areas - The Guardian, accessed March 23, 2026, [https://www.theguardian.com/environment/2025/apr/09/big-tech-datacentres-water](https://www.theguardian.com/environment/2025/apr/09/big-tech-datacentres-water)
37. Volumetric Water Benefits: - Meta Sustainability, accessed March 23, 2026, [https://sustainability.atmeta.com/wp-content/uploads/2025/08/REVISED_FINAL_Meta_2024_Volumetric_Water_Benefit_Report_08.21.2025.pdf](https://sustainability.atmeta.com/wp-content/uploads/2025/08/REVISED_FINAL_Meta_2024_Volumetric_Water_Benefit_Report_08.21.2025.pdf)
38. Meta 2025 Environmental Data Index - Meta Sustainability - atmeta ..., accessed March 23, 2026, [https://sustainability.atmeta.com/wp-content/uploads/2025/10/Meta_2025-Environmental-Data-Index.pdf](https://sustainability.atmeta.com/wp-content/uploads/2025/10/Meta_2025-Environmental-Data-Index.pdf)
39. US map of water and carbon intensity factors for electricity use - Lawrence Berkeley National Laboratory, accessed March 23, 2026, [https://waterimpacttool.lbl.gov/](https://waterimpacttool.lbl.gov/)
40. Electric Power Outlook for Pennsylvania 2023-2028, accessed March 23, 2026, [https://www.puc.pa.gov/media/3124/2024-epo-2023-2028-7-2024_final.pdf](https://www.puc.pa.gov/media/3124/2024-epo-2023-2028-7-2024_final.pdf)
41. Why Prices Are Soaring in the Country's Largest Grid Region, Explained in 5 Charts, accessed March 23, 2026, [https://insideclimatenews.org/news/07082025/inside-clean-energy-pjm-utility-prices-soar/](https://insideclimatenews.org/news/07082025/inside-clean-energy-pjm-utility-prices-soar/)
42. 2023-rtep-report.pdf - PJM.com, accessed March 23, 2026, [https://www.pjm.com/-/media/DotCom/library/reports-notices/2023-rtep/2023-rtep-report.pdf](https://www.pjm.com/-/media/DotCom/library/reports-notices/2023-rtep/2023-rtep-report.pdf)
43. Data Drain: The Land and Water Impacts of the AI Boom - Lincoln Institute of Land Policy, accessed March 23, 2026, [https://www.lincolninst.edu/publications/land-lines-magazine/articles/land-water-impacts-data-centers/](https://www.lincolninst.edu/publications/land-lines-magazine/articles/land-water-impacts-data-centers/)
44. Data Centers in Virginia - JLARC, accessed March 23, 2026, [https://jlarc.virginia.gov/landing-2024-data-centers-in-virginia.asp](https://jlarc.virginia.gov/landing-2024-data-centers-in-virginia.asp)
45. PJM's Updated 20-Year Forecast Continues To See Significant Long-Term Load Growth, accessed March 23, 2026, [https://insidelines.pjm.com/pjms-updated-20-year-forecast-continues-to-see-significant-long-term-load-growth/](https://insidelines.pjm.com/pjms-updated-20-year-forecast-continues-to-see-significant-long-term-load-growth/)
46. 2025 Long-Term Load Forecast Report Predicts Significant Increase in Electricity Demand, accessed March 23, 2026, [https://insidelines.pjm.com/2025-long-term-load-forecast-report-predicts-significant-increase-in-electricity-demand/](https://insidelines.pjm.com/2025-long-term-load-forecast-report-predicts-significant-increase-in-electricity-demand/)
47. PJM Publishes Report Highlighting 2024 Planning Efforts, accessed March 23, 2026, [https://insidelines.pjm.com/pjm-publishes-report-highlighting-2024-planning-efforts/](https://insidelines.pjm.com/pjm-publishes-report-highlighting-2024-planning-efforts/)
48. Power Demand Forecasts Revised Up for Third Year Running, Led by Data Centers - Grid Strategies, accessed March 23, 2026, [https://gridstrategiesllc.com/wp-content/uploads/Grid-Strategies-National-Load-Growth-Report-2025.pdf](https://gridstrategiesllc.com/wp-content/uploads/Grid-Strategies-National-Load-Growth-Report-2025.pdf)
49. PJM Makes the Case for a Reliable, Carbon-Free Future - NRDC, accessed March 23, 2026, [https://www.nrdc.org/bio/claire-lang-ree/pjm-makes-case-reliable-carbon-free-future](https://www.nrdc.org/bio/claire-lang-ree/pjm-makes-case-reliable-carbon-free-future)
50. PJM Releases Annual Emission Rates Report, accessed March 23, 2026, [https://insidelines.pjm.com/pjm-releases-annual-emission-rates-report/](https://insidelines.pjm.com/pjm-releases-annual-emission-rates-report/)
51. Emission Rates in PJM Reach All-Time Low, accessed March 23, 2026, [https://insidelines.pjm.com/emission-rates-in-pjm-reach-all-time-low/](https://insidelines.pjm.com/emission-rates-in-pjm-reach-all-time-low/)
52. 2024 State of the Market Report for PJM - Monitoring Analytics, accessed March 23, 2026, [https://www.monitoringanalytics.com/reports/PJM_State_of_the_Market/2024/2024-som-pjm-sec12.pdf](https://www.monitoringanalytics.com/reports/PJM_State_of_the_Market/2024/2024-som-pjm-sec12.pdf)
53. PJM Response to the 2024 State of the Market Report, accessed March 23, 2026, [https://www.pjm.com/-/media/DotCom/library/reports-notices/state-of-the-market/20250811-pjm-response-to-the-2024-state-of-the-market-report.pdf](https://www.pjm.com/-/media/DotCom/library/reports-notices/state-of-the-market/20250811-pjm-response-to-the-2024-state-of-the-market-report.pdf)
54. Loudoun Proposes Changes to Get a Handle On Data Center Development, accessed March 23, 2026, [https://www.pecva.org/region/loudoun/loudoun-proposes-changes-to-get-a-handle-on-data-center-development/](https://www.pecva.org/region/loudoun/loudoun-proposes-changes-to-get-a-handle-on-data-center-development/)
55. Comparison between beef and AI : r/climatechange - Reddit, accessed March 23, 2026, [https://www.reddit.com/r/climatechange/comments/1qyi2pk/comparison_between_beef_and_ai/](https://www.reddit.com/r/climatechange/comments/1qyi2pk/comparison_between_beef_and_ai/)
56. The Often Overlooked Water Footprint of AI Models | by Julia Barnett, accessed March 23, 2026, [https://generative-ai-newsroom.com/the-often-overlooked-water-footprint-of-ai-models-46991e3094b6](https://generative-ai-newsroom.com/the-often-overlooked-water-footprint-of-ai-models-46991e3094b6)
57. Water use comparisons on the data centers conversation : r/oklahoma - Reddit, accessed March 23, 2026, [https://www.reddit.com/r/oklahoma/comments/1nzlrtn/water_use_comparisons_on_the_data_centers/](https://www.reddit.com/r/oklahoma/comments/1nzlrtn/water_use_comparisons_on_the_data_centers/)
58. When Water Isn't Really Water - Mathematical Association of America, accessed March 23, 2026, [https://maa.org/math-values/when-water-isnt-really-water/](https://maa.org/math-values/when-water-isnt-really-water/)
59. A Drop in the Bucket: Comparing the Water Footprint of AI and The Cattle Industry, accessed March 23, 2026, [https://bryantresearch.co.uk/insight-items/comparing-water-footprint-ai/](https://bryantresearch.co.uk/insight-items/comparing-water-footprint-ai/)
60. Chicken, beef or vegetables: assessing the real environmental impact of AI, accessed March 23, 2026, [https://www.top1000funds.com/2025/09/chicken-beef-or-vegetables-assessing-the-real-environmental-impact-of-ai/](https://www.top1000funds.com/2025/09/chicken-beef-or-vegetables-assessing-the-real-environmental-impact-of-ai/)
61. I analyzed Arizona water usage data - golf courses use 30x more water than data centers : r/OpenAI - Reddit, accessed March 23, 2026, [https://www.reddit.com/r/OpenAI/comments/1q31ogg/i_analyzed_arizona_water_usage_data_golf_courses/](https://www.reddit.com/r/OpenAI/comments/1q31ogg/i_analyzed_arizona_water_usage_data_golf_courses/)
62. Data Center Water Usage: A Comprehensive Guide - Dgtl Infra, accessed March 23, 2026, [https://dgtlinfra.com/data-center-water-usage/](https://dgtlinfra.com/data-center-water-usage/)
63. Adiabatic Coolers vs. Traditional Cooling Towers: A Process Cooling Showdown - The Compressed Air Blog, accessed March 23, 2026, [https://www.thecompressedairblog.com/adiabatic-coolers-vs.-traditional-cooling-towers-a-process-cooling-showdown](https://www.thecompressedairblog.com/adiabatic-coolers-vs.-traditional-cooling-towers-a-process-cooling-showdown)
64. Diferences between adiabatic and evaporative systems - Torraval Cooling, accessed March 23, 2026, [https://www.torraval.com/en/diferences-between-adiabatic-and-evaporative-systems/](https://www.torraval.com/en/diferences-between-adiabatic-and-evaporative-systems/)
65. Adiabatic Coolers vs. Cooling Towers: Which Should You Choose? - Summit Systems, accessed March 23, 2026, [https://summitsystems.co.uk/adiabatic-coolers-vs-cooling-towers/](https://summitsystems.co.uk/adiabatic-coolers-vs-cooling-towers/)
66. Sustainable by design: Next-generation datacenters consume zero water for cooling | The Microsoft Cloud Blog, accessed March 23, 2026, [https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/](https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/)
67. Microsoft commitments, accessed March 23, 2026, [http://datacenters.microsoft.com/wp-content/uploads/2024/08/Iowa%20%28Central%20US%29.pdf](http://datacenters.microsoft.com/wp-content/uploads/2024/08/Iowa%20%28Central%20US%29.pdf)
68. How AWS uses recycled water in data centers - Amazon Sustainability, accessed March 23, 2026, [https://sustainability.aboutamazon.com/stories/how-aws-uses-recycled-water-in-data-centers](https://sustainability.aboutamazon.com/stories/how-aws-uses-recycled-water-in-data-centers)
69. 2024 Amazon Sustainability Report, accessed March 23, 2026, [https://sustainability.aboutamazon.com/2024-amazon-sustainability-report.pdf](https://sustainability.aboutamazon.com/2024-amazon-sustainability-report.pdf)
70. Data centers draining resources in water-stressed communities - The University of Tulsa, accessed March 23, 2026, [https://utulsa.edu/news/data-centers-draining-resources-in-water-stressed-communities/](https://utulsa.edu/news/data-centers-draining-resources-in-water-stressed-communities/)
71. Arizona's water is drying up. That's not stopping the data center rush. - Grist, accessed March 23, 2026, [https://grist.org/technology/arizona-water-data-centers-semiconducters/](https://grist.org/technology/arizona-water-data-centers-semiconducters/)
72. Thirsty for power and water, AI-crunching data centers sprout across the West, accessed March 23, 2026, [https://andthewest.stanford.edu/2025/thirsty-for-power-and-water-ai-crunching-data-centers-sprout-across-the-west/](https://andthewest.stanford.edu/2025/thirsty-for-power-and-water-ai-crunching-data-centers-sprout-across-the-west/)
73. Microsoft 2024 Environmental Sustainability Report, accessed March 23, 2026, [https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/Microsoft-2024-Environmental-Sustainability-Report.pdf](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/Microsoft-2024-Environmental-Sustainability-Report.pdf)
74. An approach to water restoration that benefits communities and the environment, accessed March 23, 2026, [https://sustainability.atmeta.com/blog/2024/12/12/an-approach-to-water-restoration-that-benefits-communities-and-the-environment/](https://sustainability.atmeta.com/blog/2024/12/12/an-approach-to-water-restoration-that-benefits-communities-and-the-environment/)
75. Water - Meta Sustainability, accessed March 23, 2026, [https://sustainability.atmeta.com/water/](https://sustainability.atmeta.com/water/)