<!-- TODO: THIS IS A RAW MARKDOWN REPORT FROM GEMINI - CREATE HTML REPORT WHEN TASKED-->



# Evaluating the Water-Energy Nexus of AI Infrastructure: Verifying FWPCOA Claims and Assessing 2026 Watershed Impacts


## Executive Summary

The rapid proliferation of artificial intelligence (AI) infrastructure has fundamentally altered the resource consumption profile of the global digital economy. As hyperscale data centers expand to accommodate high-density computing clusters required for generative AI models, the thermodynamic necessity of thermal rejection has placed unprecedented strain on regional water resources. This research report provides an exhaustive, expert-level analysis of direct and indirect data center water consumption in the United States as of 2026, with a specific focus on highly stressed, over-allocated watersheds.

A central objective of this investigation is the systematic verification of claims presented in the Florida Water Pollution Control Operators Association (FWPCOA) article, "Myths vs. Reality: Data Centers And Water Usage," published on January 23, 2026.<sup>1</sup> The comprehensive analysis confirms the underlying thermodynamic premises of the FWPCOA article—namely, that open-loop evaporative cooling remains the dominant paradigm across legacy facilities and that closed-loop systems offer significant freshwater savings. However, empirical verification against 2024–2026 data from the Lawrence Berkeley National Laboratory (LBNL), the International Energy Agency (IEA), the Houston Advanced Research Center (HARC), and hyperscaler sustainability disclosures reveals that several volumetric baselines cited in the FWPCOA article require critical revision to reflect the exponential escalation driven by AI hardware density.<sup>3</sup>

The synthesis of contemporary data yields three primary, debate-ready insights regarding the ongoing expansion of AI infrastructure:

First, the industry faces an unavoidable thermodynamic energy-water tradeoff. The transition from evaporative cooling to zero-water, closed-loop liquid cooling represents a shift of the resource burden rather than an absolute reduction in environmental impact. Eliminating direct water evaporation inherently increases the mechanical parasitic load (chillers and secondary cooling loops), thereby elevating on-site energy consumption. Consequently, this expands the facility's indirect water footprint at thermoelectric power plants, which can eclipse direct water savings depending on the regional grid mix.<sup>6</sup>

Second, there is a severe geographic mismatch between AI deployment and hydrological carrying capacity. More than 45% of existing and planned hyperscale data centers are located in regions projected to face high to extreme water stress by 2050.<sup>9</sup> Crucial technology markets such as Phoenix, Arizona, and the Potomac River Basin in Northern Virginia are rapidly approaching structural limits where unregulated industrial water demand threatens municipal supply reliability during peak summer conditions and prolonged drought events.<sup>11</sup>

Third, the legislative landscape in 2026 has aggressively transitioned from voluntary disclosure to mandated engineering. Driven by public backlash over resource opacity and the use of non-disclosure agreements, states are moving beyond basic water-use reporting mandates toward aggressive, restrictive legislation. Proposed bills in South Carolina and Kansas aim to legally mandate closed-loop, zero-evaporation cooling systems, fundamentally altering the economic calculus of data center site selection in the United States.<sup>13</sup>


## Theoretical Foundation: The Thermodynamics of Data Center Cooling

Data-center thermal rejection is immutably governed by the second law of thermodynamics: the electrical energy consumed by processing hardware (primarily Central Processing Units and Graphics Processing Units) is entirely converted into heat. To maintain operational integrity and prevent catastrophic silicon failure, this heat must be continuously transferred to an external environmental sink. The efficiency and resource intensity of a cooling system depend entirely on the physical mechanism of this heat transfer.

Open-loop evaporative cooling has historically been the preferred methodology due to its superior energy efficiency. This system exploits the latent heat of vaporization of water, which requires approximately 2260 kilojoules of energy to convert one kilogram of liquid water into vapor at standard atmospheric conditions.<sup>8</sup> By forcing ambient air across wetted media or spraying water directly into cooling towers, the system absorbs massive quantities of heat as the water changes phase. This method relies on the wet-bulb temperature depression rather than mechanical refrigeration, allowing for highly efficient "free cooling" in conducive climates. However, this thermodynamic efficiency incurs severe consumptive losses. Approximately 70% to 80% of the water withdrawn for evaporative cooling is permanently evaporated and lost to the atmosphere, leaving behind concentrated dissolved solids that form wastewater "blowdown".<sup>1</sup>

Conversely, closed-loop cooling systems (including dry coolers, direct-to-chip liquid cooling, and dielectric immersion) rely on sensible heat transfer. Because the specific heat capacity of air is relatively low (roughly 1.006 kilojoules per kilogram-Kelvin), removing heat without the phase change of water requires substantially higher volumetric flow rates. This necessitates large, energy-intensive fans and mechanical chillers.<sup>6</sup> Liquid cooling utilizes fluids with higher thermal capacities (such as water or engineered dielectrics) directly at the silicon level, capturing heat efficiently before transporting it to a secondary dry cooler loop. While this minimizes or eliminates the direct evaporation of water on-site, it requires more electricity to operate the secondary heat rejection mechanisms, driving up the facility's Power Usage Effectiveness (PUE).

The standard metric for evaluating direct water efficiency is Water Usage Effectiveness (WUE), defined mathematically as the liters of water consumed per kilowatt-hour of IT equipment energy. The legacy industry average for open-loop evaporative cooling systems hovers around 1.8 liters per kilowatt-hour.<sup>1</sup> In contrast, highly optimized hybrid systems or facilities relying primarily on air-cooled chillers and direct-to-chip architectures can achieve WUE values below 0.3 liters per kilowatt-hour.<sup>17</sup>

However, evaluating WUE in isolation fundamentally ignores the facility's indirect water footprint. Electricity generated by thermoelectric power plants (nuclear, coal, natural gas) requires vast quantities of cooling water to condense steam back into liquid within the Rankine cycle. Depending on the regional grid mix, the indirect water consumed to generate the electricity for a data center can be 4 to 12 times greater than the direct water evaporated on-site.<sup>3</sup> The Lawrence Berkeley National Laboratory (LBNL) calculates that while direct U.S. data center water consumption was 66 billion liters in 2023, the indirect water footprint via the power grid was approximately 800 billion liters.<sup>3</sup> Therefore, robust environmental accounting requires synthesizing both direct site WUE and indirect source water impacts based on localized grid emission and water intensity factors.


## Practical Applications: Mitigation Trajectories and Zero-Evaporation Architectures

Recognizing the severe operational, financial, and reputational risks associated with massive freshwater withdrawals in stressed basins, the industry's dominant hyperscalers have initiated aggressive hydrological mitigation strategies in 2025 and 2026. These applications center on shifting from potable municipal water to reclaimed wastewater, alongside deploying advanced zero-evaporation reference architectures.

Amazon Web Services (AWS) has aggressively pursued reclaimed water infrastructure to achieve its 2030 "water positive" pledge. AWS aims to utilize recycled wastewater at over 120 locations globally by the end of the decade. By treating and utilizing municipal wastewater that would otherwise be discharged, AWS projects this transition will preserve over 530 million gallons of potable drinking water annually.<sup>20</sup> AWS has already implemented these systems successfully in Virginia and California, noting that combining recycled water with optimized evaporative cooling can reduce potable water reliance by up to 85% compared to conventional methodologies.<sup>20</sup> By 2024, AWS reported reaching 53% of its water positive goal, operating at a highly efficient global average WUE of 0.15 liters per kilowatt-hour.<sup>17</sup>

Microsoft has taken an alternative engineering route, prioritizing absolute volumetric reductions over source switching in its newest facilities. In late 2024 and expanding into 2026, Microsoft launched a new datacenter design specifically optimized for AI workloads that consumes zero water for cooling.<sup>18</sup> This architecture utilizes chip-level closed-loop liquid cooling networks. Once filled during initial construction, the primary coolant circulates indefinitely without evaporation, relying on advanced dry coolers for external heat rejection. Microsoft estimates this reference design saves 125 million liters (125,000 cubic meters) of water per facility annually.<sup>18</sup> The company is actively piloting these zero-water designs in arid environments like Phoenix, Arizona, and Mt. Pleasant, Wisconsin, though the tradeoff remains a higher electrical burden to drive the necessary mechanical chilling.<sup>18</sup>

Google approaches mitigation through a localized, watershed-specific framework it terms "climate-conscious cooling." Rather than mandating a single global architecture, Google evaluates local water risk against grid carbon intensity. In water-abundant regions, Google utilizes evaporative cooling to maximize energy efficiency; in arid regions, it deploys air-cooled chillers or negotiates for non-potable industrial water.<sup>23</sup> In 2023, Google's global data center fleet consumed 6.1 billion gallons of potable water.<sup>24</sup> To mitigate this impact, Google focuses heavily on external water replenishment projects. In 2024, the company replenished 4.5 billion gallons of water (representing 64% of its freshwater consumption) through massive investments in agricultural efficiency, leak repairs, and ecosystem restoration, particularly in the stressed Colorado River Basin.<sup>25</sup>


## Verification of FWPCOA Article Claims

The Florida Water Pollution Control Operators Association (FWPCOA) published "Myths vs. Reality: Data Centers And Water Usage" in early 2026 to clarify the industry's hydrological impact.<sup>1</sup> A rigorous verification of its primary claims against 2024–2026 empirical data from LBNL, the IEA, and hyperscaler reports yields the following assessments:

The first claim asserts that 75–90% of data centers worldwide rely on water-based cooling, while only 10–25% are completely water-free, noting that the vast majority of large-scale facilities use open-loop evaporative systems. This claim remains accurate. The structural legacy of the data center industry is built upon the energy efficiency of evaporative cooling towers. LBNL and industry analyses confirm that completely water-free (air-cooled chiller) environments are largely restricted to smaller enterprise facilities, specialized edge deployments, or specific hyperscale builds in highly restricted desert environments.<sup>1</sup>

The second claim posits that closed-loop systems reduce freshwater use by up to 70% and return ~90–95% as wastewater. This claim requires revision and technical clarification. While it is accurate that shifting to closed-loop architectures or hybrid liquid-air systems can reduce evaporative freshwater consumption by 70% compared to legacy open-loop systems, the assertion regarding wastewater return is thermodynamically flawed in the context of pure closed-loop design.<sup>1</sup> A true closed-loop system does not continuously withdraw massive volumes of water to return 95% of it; rather, it requires an initial charge of coolant and almost zero ongoing withdrawal, eliminating the "blowdown" wastewater cycle entirely. The FWPCOA's metric conflates the low consumptive ratio of certain hybrid systems with the operational mechanics of true closed-loop liquid cooling.

The third claim estimates that a medium facility uses ~100 million gallons annually, while hyperscale peak usage reaches 1–5 million gallons per day. This claim is generally accurate but reflects a rapidly evolving baseline. The 100 million gallon annual figure for a "medium" facility is representative of older, less efficient enterprise infrastructure. However, the hyperscale peak metric of 1 to 5 million gallons per day is thoroughly corroborated by 2025 and 2026 data. Facilities engaged in high-density AI training can demand upwards of 3.7 to 5 million gallons daily during peak summer heat when evaporative systems are running at maximum capacity to prevent hardware thermal throttling.<sup>28</sup>

The fourth claim relies on a 2021 baseline, stating the U.S. total consumption is 449 million gallons per day, with an evaporation fraction of 70–80% and a legacy industry-average WUE of ~1.8 liters per kilowatt-hour. The total volumetric claim is severely outdated. The 2024 LBNL United States Data Center Energy Usage Report confirmed that direct water consumption was 66 billion liters (17.4 billion gallons annually, or ~47.7 million gallons per day) in 2023, while indirect consumption at thermoelectric plants reached 800 billion liters (211 billion gallons annually, or ~578 million gallons per day).<sup>3</sup> The combined 2023 footprint heavily eclipses the cited 2021 data, and projections suggest consumption will double or quadruple by 2028. The evaporation fraction (70–80%) and the legacy WUE (1.8 L/kWh) remain thermodynamically accurate for older open-loop infrastructure, though industry leaders have driven their specific WUEs well below 0.3 L/kWh.<sup>1</sup>

The fifth claim highlights Google and AWS as examples of utilizing reclaimed-water. This claim is highly accurate and expanding rapidly. Hyperscaler sustainability disclosures from 2025 and 2026 confirm aggressive scaling of reclaimed wastewater infrastructure. AWS is actively targeting 120 locations for recycled water integration <sup>20</sup>, and Google extensively utilizes non-potable canal and industrial water at massive campuses in Belgium and the Netherlands.<sup>24</sup>


## National and Trend Data (2026 U.S. Focus)

The integration of artificial intelligence has decoupled data center resource trajectories from historical norms. Prior to 2020, massive shifts toward cloud virtualization allowed computing output to grow exponentially while electricity and water usage remained relatively flat.<sup>32</sup> The advent of generative AI, which relies on massively parallel processing across thousands of synchronized chips, has shattered this efficiency plateau.

According to the foundational 2024 LBNL report, total direct water consumption by U.S. data centers in 2023 stood at 66 billion liters (17.4 billion gallons). Of this total, hyperscale and colocation facilities accounted for an overwhelming 84%, reflecting the rapid consolidation of computing power into massive centralized campuses.<sup>3</sup> Due to the rapid deployment of dense AI infrastructure, direct water consumption is projected to double or quadruple by 2028. Under high-growth scenarios, hyperscale facilities alone are forecasted to consume between 60 and 124 billion liters of water annually by the end of the decade.<sup>3</sup> The indirect water footprint remains vastly larger; in 2023, U.S. data centers indirectly consumed approximately 800 billion liters (211 billion gallons) of water through the thermoelectric power plants supplying their electricity.<sup>3</sup>

This hydrological escalation is directly tied to the AI power multiplier. In 2023, data centers consumed roughly 176 to 183 terawatt-hours (TWh) of electricity, representing 4.0% to 4.4% of total U.S. grid demand.<sup>34</sup> A standard internet search consumes approximately 0.3 Watt-hours of electricity. In contrast, an advanced generative AI query requires between 2.9 and 40 Watt-hours, depending on the model's complexity.<sup>35</sup> Image and video generation workloads amplify this requirement by factors of thousands.

Consequently, rack power densities have increased dramatically. Where a conventional cloud server rack historically required 5 to 15 kilowatts (kW) of power, AI-optimized racks housing NVIDIA's advanced GPU architectures (such as the Blackwell series) require 50 kW to 132 kW.<sup>10</sup> Next-generation iterations, such as the projected Rubin Ultra NVL576, are anticipated to reach up to 600 kW or even 1 megawatt per rack by 2027–2028.<sup>10</sup> This density makes traditional air cooling thermodynamically impossible, forcing the rapid adoption of liquid cooling technologies. The IEA and LBNL project that by 2028, data centers could consume between 6.7% and 12.0% of total U.S. electricity, placing immense stress on both power generation infrastructure and the associated indirect water footprint.<sup>34</sup>


## U.S. Location-Specific Deep Dives: Priority High-Risk Areas

The intersection of unprecedented AI infrastructure expansion and geographic water scarcity represents the most critical environmental conflict in the technology sector. Data center development is heavily clustered in specific geographic corridors due to fiber-optic network latency, tax incentives, and energy pricing, regardless of the underlying hydrological carrying capacity.


## Northern Virginia: Data Center Alley and the Potomac Basin

Northern Virginia, specifically Loudoun, Fairfax, and Prince William counties, is universally recognized as "Data Center Alley." It is the most concentrated data center market globally, handling an estimated 70% of worldwide internet traffic.<sup>38</sup> The region contains over 290 distinct data center buildings with an aggregate power demand exceeding 5,400 megawatts.<sup>11</sup>

In 2023, data centers in Loudoun County alone directly consumed approximately 900 million gallons of water, pushing the broader Northern Virginia footprint to nearly 2 billion gallons—a 63% increase from 2019 levels.<sup>39</sup> While data centers currently account for only 1% of total volumetric water withdrawals in the Washington Metropolitan Area (WMA), their high evaporative loss means they represent 9% of annual consumptive use, rising to a critical 12% during peak summer months.<sup>11</sup> In 2025, the average consumptive use was 4 million gallons per day (MGD), but peak-day use surged to 15 MGD.<sup>11</sup>

Baseline models from the Interstate Commission on the Potomac River Basin (ICPRB) project data center water use in the WMA to average 22 MGD by 2050, with peak usage exceeding 80 MGD.<sup>11</sup> The ICPRB has issued stark warnings that under extreme drought conditions, the cumulative impact of this unchecked consumptive use could outstrip emergency reservoir capacity, triggering severe regional water supply shortages and mandatory restrictions across Washington D.C., Maryland, and Virginia by 2030.<sup>40</sup>


## Arizona: The Colorado River Basin Crisis

The Phoenix metropolitan area, encompassing municipalities like Mesa and Goodyear, has become a primary destination for hyperscale development despite severe, ongoing hydrological deficits and the over-allocation of the Colorado River system.

According to the 2024 Ceres report "Drained by Data," data centers in the Phoenix region consumed approximately 385 million gallons of water directly for cooling, while indirectly consuming 2.9 billion gallons through the electricity generated to power them.<sup>12</sup> While the technology sector correctly notes that agriculture and golf courses remain the dominant baseline users of water in Arizona (a single 18-hole golf course can consume upwards of 450,000 gallons per day) <sup>42</sup>, the growth velocity of data centers is alarming. Peak Water Usage Effectiveness (WUE) metrics exceeding 9 liters per kilowatt-hour have been recorded in Arizona during summer heat waves, as hybrid cooling systems shift entirely to evaporative modes to prevent hardware failure.<sup>44</sup> Ceres projects that regional data center cooling water demand could spike by 870% to over 3.7 billion gallons annually, severely straining a water table already operating under federal Tier 1 shortage declarations.<sup>12</sup>


## Texas: ERCOT Grid and Regional Aquifer Strain

Texas, particularly the Dallas-Fort Worth metroplex and emerging rural hubs like Abilene, is experiencing an unprecedented build-out of AI infrastructure. This is highlighted by projects such as the planned 1.2 gigawatt "Stargate One" facility, which will span 940 acres.<sup>46</sup>

As of late 2025, Texas hosted over 400 data centers. The Houston Advanced Research Center (HARC) estimates that these existing facilities consumed approximately 25 billion gallons of water (combining direct cooling and indirect electricity generation) in 2025, accounting for 0.4% of total state water use.<sup>4</sup> However, ERCOT forecasts project electricity demand for data centers to increase massively by 2030. Utilizing these load forecasts, HARC estimates that total Texas data center water consumption will reach between 29 billion and 161 billion gallons annually by 2030, consuming up to 2.7% of the total state water supply.<sup>4</sup> Crucially, HARC notes that this massive industrial growth is occurring outside the purview of the current Texas State Water Plan, creating a systemic planning blind spot for regional water authorities already grappling with a 4.8 million acre-foot structural deficit.<sup>4</sup>


## Additional High-Risk Zones

Several other regions face unique, localized stressors from data center expansion:



* **Georgia (Atlanta):** Metro Atlanta currently hosts over 50 facilities with 40 more proposed. The region relies almost entirely on small surface watersheds, as geographic granite bedrock severely limits groundwater access. Conservationists warn that unchecked evaporative cooling will limit critical return flows to the Chattahoochee River system.<sup>49</sup>
* **California and Nevada:** California data centers consumed an estimated 50 billion liters of water in 2023, projected to reach 116 billion liters by 2028.<sup>51</sup> A UC Riverside study warns that meeting the peak summer water demands of AI data centers will require billions of dollars in new municipal water infrastructure across the state.<sup>52</sup> In Nevada, high desert environments force operators to rely heavily on dry cooling, though hybrid systems still extract millions of gallons locally, sparking community pushback.<sup>53</sup>
* **Iowa (Council Bluffs):** Google’s Council Bluffs campus relies heavily on local groundwater and the Missouri River aquifer. In 2024, the site consumed 1 billion gallons of potable water, functioning as Google's most water-intensive location globally and drawing criticism from local geological surveys.<sup>54</sup>
* **Oregon (The Dalles):** Google facilities consume approximately one-third of the city's total water supply (over 300 million gallons annually), driving conflicts over the city's pursuit of additional groundwater rights in the Mount Hood National Forest.<sup>56</sup>


## Proportional Comparisons and Graph Specifications

To facilitate clear stakeholder communication and debate, the following datasets are structured for direct integration into charting software.


## Table 1: Estimated National Water Withdrawals by Sector (2025/2026 Proportions)


<table>
  <tr>
   <td><strong>Sector</strong>
   </td>
   <td><strong>Estimated Percentage of Total U.S. Withdrawals</strong>
   </td>
   <td><strong>Volumetric Trend (2020-2030)</strong>
   </td>
  </tr>
  <tr>
   <td>Thermoelectric Power
   </td>
   <td>~40.0%
   </td>
   <td>Decreasing
   </td>
  </tr>
  <tr>
   <td>Agriculture (Irrigation)
   </td>
   <td>~37.0%
   </td>
   <td>Stable
   </td>
  </tr>
  <tr>
   <td>Public Supply (Residential/Commercial)
   </td>
   <td>~12.0%
   </td>
   <td>Stable
   </td>
  </tr>
  <tr>
   <td>Industrial / Manufacturing
   </td>
   <td>~5.0%
   </td>
   <td>Stable
   </td>
  </tr>
  <tr>
   <td>Data Centers (Direct + Indirect)
   </td>
   <td>~0.5% - 1.0%
   </td>
   <td>Rapidly Increasing
   </td>
  </tr>
</table>


Sources: USGS Water Use Data; LBNL 2024 Report.<sup>3</sup> **Graph Specification 1 (National Pie Chart):** Construct a pie chart depicting the above proportions. Utilize an exploded slice or high-contrast color for the Data Center segment to emphasize its relatively small macro footprint but rapid growth trajectory relative to stagnant legacy sectors. **Title:** U.S. National Water Withdrawals by Sector.


## Table 2: Phoenix, AZ Regional Water Context (2025)


<table>
  <tr>
   <td><strong>User Category</strong>
   </td>
   <td><strong>Annual Water Consumption (Gallons)</strong>
   </td>
   <td><strong>Percentage of Regional Total</strong>
   </td>
  </tr>
  <tr>
   <td>Total Data Center Direct Cooling
   </td>
   <td>~385 Million
   </td>
   <td>~0.12%
   </td>
  </tr>
  <tr>
   <td>Single 18-Hole Golf Course (Average)
   </td>
   <td>~164 Million
   </td>
   <td>N/A
   </td>
  </tr>
  <tr>
   <td>All Regional Golf Courses (Aggregate)
   </td>
   <td>~60 Billion
   </td>
   <td>~3.8%
   </td>
  </tr>
</table>


Sources: Ceres "Drained by Data"; Local Municipal Data.<sup>7</sup> **Graph Specification 2 (Comparative Bar Chart):** Construct a horizontal bar chart comparing the aggregate direct cooling water of all Phoenix data centers against the aggregate water use of the region's golf courses. **Title:** Contextualizing Phoenix Water Use: Data Centers vs. Golf Courses.


## Table 3: Time-Series Escalation of U.S. Data Center Water Consumption


<table>
  <tr>
   <td><strong>Year</strong>
   </td>
   <td><strong>Direct Water Consumption (Billion Liters)</strong>
   </td>
   <td><strong>Indirect Water Consumption (Billion Liters)</strong>
   </td>
   <td><strong>AI Share of Compute Workload</strong>
   </td>
  </tr>
  <tr>
   <td>2020
   </td>
   <td>~35
   </td>
   <td>~450
   </td>
   <td>&lt; 5%
   </td>
  </tr>
  <tr>
   <td>2023
   </td>
   <td>66
   </td>
   <td>800
   </td>
   <td>~15%
   </td>
  </tr>
  <tr>
   <td>2028 (Projected)
   </td>
   <td>124
   </td>
   <td>1,500+
   </td>
   <td>~40%
   </td>
  </tr>
</table>


Sources: LBNL 2024 Report; IEA Projections; Industry Forecasts.<sup>3</sup> **Graph Specification 3 (Time-Series Line Chart):** Plot a dual-axis line chart. The primary Y-axis (left) should track Direct and Indirect water volumes in billions of liters (stacked area or independent lines). The secondary Y-axis (right) should track the AI Share of Compute Workload as a percentage line, demonstrating the correlation between AI adoption and water escalation. **Title:** Projected Escalation of U.S. Data Center Water Consumption (2020-2028).


## Table 4: The Resource Asymmetry of Hyperscale Infrastructure (Household Equivalents)


<table>
  <tr>
   <td><strong>Infrastructure Unit</strong>
   </td>
   <td><strong>Water Equivalent (Households/Yr)</strong>
   </td>
   <td><strong>Electricity Equivalent (Households/Yr)</strong>
   </td>
  </tr>
  <tr>
   <td>Medium Enterprise Data Center
   </td>
   <td>~1,000 households
   </td>
   <td>~10,000 households
   </td>
  </tr>
  <tr>
   <td>Single 100 MW Hyperscale Facility
   </td>
   <td>~10,000 - 50,000 households
   </td>
   <td>~100,000 households
   </td>
  </tr>
  <tr>
   <td>1 GW AI Mega-Campus
   </td>
   <td>~100,000+ households
   </td>
   <td>~1,000,000 households
   </td>
  </tr>
</table>


Assumptions: Household water use = ~300 gallons/day. Household electricity = ~10,000 kWh/yr. Sources: IEA, EESI, HARC.<sup>28</sup> **Graph Specification 4 (Household Equivalents Infographic):** Construct a visual infographic using proportional icons (e.g., houses). Show that a single 1 GW AI Mega-Campus requires the electrical generation capacity of 1 million homes and the municipal water flow of a mid-sized city. **Title:** The Resource Asymmetry of AI Infrastructure.

**Graph Specification 5 (Per-Facility Scatter Plot):** Construct a scatter plot where the X-axis represents Facility IT Capacity (Megawatts) and the Y-axis represents Annual Direct Water Consumption (Millions of Gallons). Color-code the data points based on cooling topology: Blue for Open-Loop Evaporative, Green for Hybrid/Reclaimed, and Red for Closed-Loop/Air-Cooled. **Title:** Facility Megawatt Rating vs. Annual Water Consumption by Cooling Type.


## Risk Assessment for Over-Allocated Water-Table Areas

The uncoordinated, rapid deployment of AI data centers in the American West and Mid-Atlantic presents acute systemic risks to already over-allocated hydrological basins. Water is a strictly localized resource; massive demands cannot be easily transmitted across state lines like electricity.

**The Colorado River Basin:** The Colorado River system is currently operating under federal Tier 1 shortage conditions, a reality that has already forced the reduction of agricultural water allocations.<sup>45</sup> Despite this structural deficit, hyperscaler development in the Phoenix and Las Vegas metropolitan areas continues unabated. Because the basin's water budget is a strict zero-sum equation, the projected 870% increase in regional data center cooling demand identified by Ceres will invariably force municipalities to acquire agricultural water rights to sustain industrial growth.<sup>12</sup> This accelerates the retirement of arable land and heightens community tension regarding resource prioritization.

**The Potomac River Basin:** Unlike the desert Southwest, the Potomac Basin generally experiences abundant annual rainfall. However, its vulnerability stems from seasonal peak demands and highly limited reservoir storage capacity. The ICPRB’s 2025 Washington Metropolitan Area Water Supply Study explicitly models data centers as a primary disruption variable. If data centers within the region hit peak evaporative demands of 80 MGD during a late-summer low-flow period, the draw could rapidly deplete the region's limited emergency reservoirs (such as Jennings Randolph and Little Seneca). The ICPRB models indicate this could trigger mandatory municipal water restrictions across Washington D.C., Maryland, and Virginia by the early 2030s.<sup>11</sup>

**Texas Aquifers and the Ogallala:** In Texas, the absence of centralized state-level oversight has allowed developers to target rural areas (such as Abilene) that rely on localized surface water and deep groundwater aquifers. HARC emphasizes that the potential 161 billion gallon demand by 2030 will intersect with a pre-existing 4.8 million acre-foot statewide water shortage. Deep groundwater aquifers in these regions, including the southern extents of the Ogallala and the Trinity aquifers, lack rapid recharge rates. Relying on them for constant baseload industrial cooling inevitably leads to structural depletion, reduced well pressure for local residents, and long-term land subsidence.<sup>47</sup>


## Global Perspective

The localized challenges observed in the United States are mirrored on a global scale. The International Energy Agency estimates that global data center electricity demand, which stood at roughly 415 TWh in 2024, will more than double to reach 945 TWh by 2030.<sup>5</sup> This immense energy intensity dictates an equally staggering global water footprint.

Geospatial analysis conducted by MSCI in 2025 indicates that approximately 45% of the roughly 9,000 global data center assets analyzed are situated in regions projected to experience high to extreme water scarcity by 2050.<sup>9</sup> The rapid build-out of data centers to power AI coincides directly with intensifying global water stress.

Internationally, governments have responded more aggressively than the U.S. to local infrastructure stress:



* **Ireland:** Facing data centers consuming an astonishing 22% of the national electrical grid, regulatory authorities have enacted strict connection moratoriums in the Dublin region.<sup>67</sup>
* **Netherlands & Singapore:** Both jurisdictions have previously placed strict limitations on hyperscale builds and now mandate rigorous power and water efficiency standards. Singapore has effectively banned new data centers from using potable water for cooling without massive offsetting measures.<sup>69</sup>
* **Chile and Spain:** Proposals for massive AI data centers have met severe local backlash over watershed depletion. In Chile, public outcry over water consumption forced companies like Google to abandon highly efficient evaporative cooling plans in favor of air-cooled chillers, accepting a severe electrical efficiency penalty to secure community approval.<sup>7</sup>


## Mitigation, Innovation, and Policy Landscape

In 2025 and early 2026, the legislative posture in the United States transitioned from passive observation to active intervention, reflecting growing public anxiety over AI resource consumption. This has resulted in a patchwork of state-level mandates.

**Reporting Mandates:** Initially, legislative efforts focused on establishing transparency. California's AB 1577 and SB 57, alongside similar bills in Iowa (HF 2447) and Michigan (SB 762), mandate that data center operators report detailed PUE, WUE, and total volumetric water consumption data to state energy commissions or public utilities boards.<sup>13</sup> These bills seek to lift the veil of non-disclosure agreements (NDAs) that have historically shielded data center operations from public scrutiny.

**Engineering and Closed-Loop Mandates:** Several states are moving beyond basic reporting to dictate specific thermodynamic designs. South Carolina's proposed "Data Center Responsibility Act" (S. 902 / H. 4583) and Kansas's SB 400 represent a radical shift in regulatory philosophy. These bills would legally mandate the use of closed-loop liquid cooling systems, resulting in zero net water withdrawal and net zero wastewater discharge. They explicitly prohibit the use of municipal water or groundwater extraction for cooling, forcing operators to utilize dry cooling or direct-to-chip liquid topologies.<sup>13</sup>

**Reclaimed Water Incentives:** In regions where evaporative cooling remains legally permissible, states are heavily incentivizing the use of reclaimed (non-potable) wastewater. Virginia's General Assembly has debated budget amendments (SB 30) that would condition the state's lucrative data center tax credits on the utilization of reclaimed wastewater or other advanced environmental management practices.<sup>13</sup> Facilities in Loudoun Water's jurisdiction are already utilizing over 700 million gallons of reclaimed water annually via a dedicated 20-mile "purple pipe" network, avoiding an equivalent draw on the potable Potomac River supply.<sup>39</sup>

**The Economic and Environmental Trade-off:**

The transition to closed-loop or air-cooled chillers completely eliminates the evaporation of potable water but imposes a massive energy penalty. Operating chillers in high-ambient environments like Phoenix or Austin requires more electricity—often generated by fossil fuels. This increases the facility's Scope 2 carbon emissions and expands its indirect water footprint at the power plant level. Regulators and hyperscalers must navigate this delicate balance: preserving local water security at the expense of regional grid stability and global carbon decarbonization goals.


## Balanced Debate Framing: Siting AI Infrastructure in Stressed Basins

The public discourse surrounding AI infrastructure expansion is highly polarized. Informing policy requires a balanced evaluation of the competing viewpoints.

**The Pro-Expansion View:** Proponents argue that the macroeconomic and societal benefits of AI heavily outweigh the localized resource impacts. The technology sector points out that data center direct consumption still represents less than 1.0% of national water withdrawals—a mere fraction of the water allocated to agriculture or thermoelectric generation.<sup>3</sup> Furthermore, hyperscalers are driving unprecedented efficiency gains; average WUE metrics have dropped by 30–50% among industry leaders over the past five years. AWS operates at a global average WUE of 0.15 L/kWh, and Microsoft operates at 0.27 L/kWh.<sup>31</sup> Proponents emphasize that the aggressive transition to recycled wastewater and zero-evaporation designs effectively decouples data center growth from municipal drinking supplies.<sup>18</sup> Finally, the massive capital investments in data centers act as a catalyst for grid modernization, accelerating the retirement of water-intensive coal plants in favor of wind, solar, and advanced nuclear power, which possess virtually zero indirect water footprints.<sup>27</sup>

**The Critical View:** Conversely, environmental advocates, hydrologists, and local municipalities argue that macro-level percentages obscure devastating local impacts. While data centers may use less than 1% of water nationally, their geographic clustering concentrates immense peak demands in vulnerable watersheds. Critics highlight the severe lack of transparency, noting that tech companies frequently use Non-Disclosure Agreements (NDAs) to hide resource consumption from the public, preventing accurate municipal planning.<sup>77</sup> Furthermore, critics emphasize that corporate "water positive" replenishment pledges—such as funding distant agricultural leak repairs or watershed restorations—do not offset the immediate, physical loss of millions of gallons of water from the specific municipal pipes feeding a local data center.<sup>79</sup> Finally, the staggering energy demands of AI are keeping legacy fossil-fuel power plants online longer than anticipated, actively worsening the indirect water footprint, increasing local air pollution, and delaying broader climate goals.<sup>76</sup>


## Conclusion

The expansion of AI infrastructure represents a profound paradigm shift in industrial resource consumption. As demonstrated by the verification of the FWPCOA claims and the synthesis of 2024–2026 data from LBNL, HARC, and the IEA, the thermodynamic realities of high-density computing dictate that heat rejection will command vast quantities of either water or electricity.

To ensure the sustainable deployment of AI infrastructure in water-constrained regions, policymakers and industry leaders must adopt a holistic, systemic approach to resource management. First, state and federal regulators must standardize and mandate the reporting of site-level PUE and WUE metrics, alongside indirect energy-water calculations; it is impossible to manage a resource that remains hidden behind corporate non-disclosure agreements. Second, municipalities should condition zoning approvals and tax incentives on the utilization of non-potable, reclaimed wastewater for cooling. Third, rather than instituting blanket mandates for closed-loop cooling, policies should reflect local realities. In hydrologically stressed basins like Arizona and Texas, zero-evaporation liquid cooling should be required despite the energy penalty. However, in regions with highly constrained electrical grids but abundant water, highly efficient evaporative cooling using reclaimed water may remain the optimal systemic choice. Ultimately, future infrastructure planning must view data centers not as isolated buildings, but as massive, interdependent nodes within the broader water-energy nexus.


#### Works cited



1. Myths vs. Reality: Data Centers And Water Usage - Florida Water and Pollution Control Operators Association, accessed March 23, 2026, [https://www.fwpcoa.org/content.aspx?page_id=5&club_id=859275&item_id=130961](https://www.fwpcoa.org/content.aspx?page_id=5&club_id=859275&item_id=130961)
2. News / Articles - Florida Water and Pollution Control Operators Association, accessed March 23, 2026, [https://www.fwpcoa.org/content.aspx?page_id=3&club_id=859275](https://www.fwpcoa.org/content.aspx?page_id=3&club_id=859275)
3. Data Center Water Consumption in the US: Challenges, Trends, and Market Opportunities for 2025–2030 - Apstech Advisors, accessed March 23, 2026, [https://apstechadvisors.com/data-center-water-consumption-in-the-us-challenges-trends-and-market-opportunities-for-2025-2030/](https://apstechadvisors.com/data-center-water-consumption-in-the-us-challenges-trends-and-market-opportunities-for-2025-2030/)
4. Texas Data Center Boom Could Consume Up to 161 Billion Gallons of Water Annually by 2030, accessed March 23, 2026, [https://harcresearch.org/news/texas-data-center-boom-could-consume-up-to-161-billion-gallons-of-water-annually-by-2030/](https://harcresearch.org/news/texas-data-center-boom-could-consume-up-to-161-billion-gallons-of-water-annually-by-2030/)
5. How AI, Data Centers and Water Will Impact Energy Transition in 2026-2030, accessed March 23, 2026, [https://business20channel.tv/how-ai-data-centers-and-water-will-impact-energy-transition-in-2026-2030-25-01-2026](https://business20channel.tv/how-ai-data-centers-and-water-will-impact-energy-transition-in-2026-2030-25-01-2026)
6. Regulating Data Center Water Use in California - UC Berkeley Law, accessed March 23, 2026, [https://www.law.berkeley.edu/research/clee/research/wheeler/water-innovation/data-center-water-use/](https://www.law.berkeley.edu/research/clee/research/wheeler/water-innovation/data-center-water-use/)
7. How Much Water Do AI Data Centers Really Use? - Undark Magazine, accessed March 23, 2026, [https://undark.org/2025/12/16/ai-data-centers-water/](https://undark.org/2025/12/16/ai-data-centers-water/)
8. Thirsty Servers: The Water Crisis Sparked by Data Center Cooling, accessed March 23, 2026, [https://datacentredigest.com/thirsty-servers-the-water-crisis-sparked-by-data-center-cooling/](https://datacentredigest.com/thirsty-servers-the-water-crisis-sparked-by-data-center-cooling/)
9. Beneath the surface: Water stress in data centers | S&P Global, accessed March 23, 2026, [https://www.spglobal.com/sustainable1/en/insights/special-editorial/beneath-the-surface-water-stress-in-data-centers](https://www.spglobal.com/sustainable1/en/insights/special-editorial/beneath-the-surface-water-stress-in-data-centers)
10. How AI Growth Is Intensifying Data Center Water Consumption - Net Zero Insights, accessed March 23, 2026, [https://netzeroinsights.com/resources/how-ai-intensifying-data-center-water-consumption/](https://netzeroinsights.com/resources/how-ai-intensifying-data-center-water-consumption/)
11. Data Centers and Water Use in the Potomac River Basin - ICPRB, accessed March 23, 2026, [https://www.potomacriver.org/focus-areas/water-resources-and-drinking-water/water-resources/planning/data-centers-and-water-use-in-the-potomac-river-basin/](https://www.potomacriver.org/focus-areas/water-resources-and-drinking-water/water-resources/planning/data-centers-and-water-use-in-the-potomac-river-basin/)
12. Drained by Data: The Cumulative Impact of Data Centers on Regional Water Stress - Ceres, accessed March 23, 2026, [https://www.ceres.org/resources/reports/drained-by-data-the-cumulative-impact-of-data-centers-on-regional-water-stress](https://www.ceres.org/resources/reports/drained-by-data-the-cumulative-impact-of-data-centers-on-regional-water-stress)
13. State Data Center Water Usage Legislation Gains Momentum - MultiState Associates, accessed March 23, 2026, [https://www.multistate.us/insider/2026/3/3/state-data-center-water-usage-legislation-gains-momentum-in-2025](https://www.multistate.us/insider/2026/3/3/state-data-center-water-usage-legislation-gains-momentum-in-2025)
14. 2025-2026 Bill 902: Data Centers - South Carolina Legislature Online, accessed March 23, 2026, [https://www.scstatehouse.gov/sess126_2025-2026/bills/902.htm](https://www.scstatehouse.gov/sess126_2025-2026/bills/902.htm)
15. AI power: Expanding data center capacity to meet growing demand - McKinsey, accessed March 23, 2026, [https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/ai-power-expanding-data-center-capacity-to-meet-growing-demand](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/ai-power-expanding-data-center-capacity-to-meet-growing-demand)
16. Managing the Growing Water Needs of Data Centers, Critical Minerals Mining, and Agriculture in the Great Lakes Region, accessed March 23, 2026, [https://greatlakes.org/wp-content/uploads/2025/08/AGL_WaterUse_Report_Aug2025_Final.pdf](https://greatlakes.org/wp-content/uploads/2025/08/AGL_WaterUse_Report_Aug2025_Final.pdf)
17. Water stewardship - Amazon Sustainability, accessed March 23, 2026, [https://sustainability.aboutamazon.com/natural-resources/water](https://sustainability.aboutamazon.com/natural-resources/water)
18. Sustainable by design: Next-generation datacenters consume zero water for cooling | The Microsoft Cloud Blog, accessed March 23, 2026, [https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/](https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/)
19. Tips for Researching Massive Water Consumption by Data Centers, accessed March 23, 2026, [https://gijn.org/stories/researching-water-consumption-data-centers/](https://gijn.org/stories/researching-water-consumption-data-centers/)
20. Amazon to expand water recycling to more than 120 data centre locations across the U.S. by 2030, accessed March 23, 2026, [https://smartwatermagazine.com/news/smart-water-magazine/amazon-expand-water-recycling-more-120-data-centre-locations-across-us](https://smartwatermagazine.com/news/smart-water-magazine/amazon-expand-water-recycling-more-120-data-centre-locations-across-us)
21. Amazon's AWS More than Halfway to Achieving 2030 Water Positive Goal - ESG Today, accessed March 23, 2026, [https://www.esgtoday.com/amazons-aws-more-than-halfway-to-achieving-2030-water-positive-goal/](https://www.esgtoday.com/amazons-aws-more-than-halfway-to-achieving-2030-water-positive-goal/)
22. Our 2025 Environmental Sustainability Report - Microsoft On the Issues, accessed March 23, 2026, [https://blogs.microsoft.com/on-the-issues/2025/05/29/environmental-sustainability-report/](https://blogs.microsoft.com/on-the-issues/2025/05/29/environmental-sustainability-report/)
23. Advancing responsible water use at our data centers, accessed March 23, 2026, [https://datacenters.google/water/](https://datacenters.google/water/)
24. Google's data centers use as much water as 41 golf courses. Here are the 10 thirstiest, accessed March 23, 2026, [https://qz.com/google-data-center-consume-water-energy-climate-change-1851760734](https://qz.com/google-data-center-consume-water-energy-climate-change-1851760734)
25. Google's 2026 Water Stewardship Portfolio, accessed March 23, 2026, [https://blog.google/company-news/outreach-and-initiatives/sustainability/2026-water-stewardship-portfolio/](https://blog.google/company-news/outreach-and-initiatives/sustainability/2026-water-stewardship-portfolio/)
26. Sustainability Reports & Case Studies, accessed March 23, 2026, [https://sustainability.google/google-2025-environmental-report/](https://sustainability.google/google-2025-environmental-report/)
27. Data Center Impacts on the Environment, Public Health, and Energy Costs Memo - Agencies - Colorado, accessed March 23, 2026, [https://content.leg.colorado.gov/sites/default/files/r26-49-data-center-impacts-on-economy-and-the-environment-accessible.pdf](https://content.leg.colorado.gov/sites/default/files/r26-49-data-center-impacts-on-economy-and-the-environment-accessible.pdf)
28. Data Centers and Water Consumption | Article | EESI, accessed March 23, 2026, [https://www.eesi.org/articles/view/data-centers-and-water-consumption](https://www.eesi.org/articles/view/data-centers-and-water-consumption)
29. Data Centers and Water Use - - Nature Forward, accessed March 23, 2026, [https://natureforward.org/data-centers-and-water-use/](https://natureforward.org/data-centers-and-water-use/)
30. Water Implications of AI-Driven Digital Infrastructure Expansion, accessed March 23, 2026, [https://trendsresearch.org/insight/water-implications-of-ai-driven-digital-infrastructure-expansion/](https://trendsresearch.org/insight/water-implications-of-ai-driven-digital-infrastructure-expansion/)
31. Measuring energy and water efficiency for Microsoft datacenters, accessed March 23, 2026, [https://datacenters.microsoft.com/sustainability/efficiency/](https://datacenters.microsoft.com/sustainability/efficiency/)
32. Data centres & networks - IEA, accessed March 23, 2026, [https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks](https://www.iea.org/energy-system/buildings/data-centres-and-data-transmission-networks)
33. 2024 United States Data Center Energy Usage Report - Publications | LBL ETA Publications - Lawrence Berkeley National Laboratory, accessed March 23, 2026, [https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf](https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf)
34. DOE Releases New Report Evaluating Increase in Electricity Demand from Data Centers, accessed March 23, 2026, [https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers](https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers)
35. AI Energy Consumption Analysis 2025–2030 | by Asrar - Medium, accessed March 23, 2026, [https://medium.com/@asrar7787/ai-energy-consumption-executive-analysis-2025-2030-e911613c6834](https://medium.com/@asrar7787/ai-energy-consumption-executive-analysis-2025-2030-e911613c6834)
36. Electricity 2024 - Analysis and forecast to 2026, accessed March 23, 2026, [https://iea.blob.core.windows.net/assets/6b2fd954-2017-408e-bf08-952fdd62118a/Electricity2024-Analysisandforecastto2026.pdf](https://iea.blob.core.windows.net/assets/6b2fd954-2017-408e-bf08-952fdd62118a/Electricity2024-Analysisandforecastto2026.pdf)
37. How AI is shaping the future of data center power infrastructure design | Cummins Inc., accessed March 23, 2026, [https://www.cummins.com/en-na/news/2025/11/24/how-ai-shaping-future-data-center-power-infrastructure-design](https://www.cummins.com/en-na/news/2025/11/24/how-ai-shaping-future-data-center-power-infrastructure-design)
38. Northern Virginia's Data Center Alley Processes 70% of Global Internet Traffic – HSToday, accessed March 23, 2026, [https://www.hstoday.us/subject-matter-areas/infrastructure-security/northern-virginias-data-center-alley-equates-to-70-of-global-internet-traffic/](https://www.hstoday.us/subject-matter-areas/infrastructure-security/northern-virginias-data-center-alley-equates-to-70-of-global-internet-traffic/)
39. Dateline Ashburn: The Thirst for AI Raises Alarms in Virginia - Broadband Breakfast, accessed March 23, 2026, [https://broadbandbreakfast.com/dateline-ashburn-the-thirst-for-ai-raises-alarms-in-virginia/](https://broadbandbreakfast.com/dateline-ashburn-the-thirst-for-ai-raises-alarms-in-virginia/)
40. DC's Water Supply Could Run Dry by 2030—New Report Reveals a Crisis No One Is Prepared For - Fox Homes Team, accessed March 23, 2026, [https://www.foxessellfaster.com/blog/dcs-water-supply-could-run-dry-by-2030new-report-reveals-a-crisis-no-one-is-prepared-for/](https://www.foxessellfaster.com/blog/dcs-water-supply-could-run-dry-by-2030new-report-reveals-a-crisis-no-one-is-prepared-for/)
41. News Release: New report exposes the vulnerabilities of the Washington metropolitan area's water supply - ICPRB - Interstate Commission on the Potomac River Basin, accessed March 23, 2026, [https://www.potomacriver.org/news/news-release-new-report-exposes-the-vulnerabilities-of-the-washington-metropolitan-areas-water-supply/](https://www.potomacriver.org/news/news-release-new-report-exposes-the-vulnerabilities-of-the-washington-metropolitan-areas-water-supply/)
42. Artificial Intelligence and Its Impacts on the Environment | O'Odham Action News, accessed March 23, 2026, [https://oan.srpmic-nsn.gov/artificial-intelligence-and-its-impacts-on-the-environment/](https://oan.srpmic-nsn.gov/artificial-intelligence-and-its-impacts-on-the-environment/)
43. Why America's Water Economics Make No Sense | by Daniel French | Medium, accessed March 23, 2026, [https://medium.com/@danielfrench44/why-americas-water-economics-make-no-sense-1e484c56159e](https://medium.com/@danielfrench44/why-americas-water-economics-make-no-sense-1e484c56159e)
44. 1 Introduction - arXiv, accessed March 23, 2026, [https://arxiv.org/html/2603.02705v2](https://arxiv.org/html/2603.02705v2)
45. Colorado River Operations - Central Arizona Project, accessed March 23, 2026, [https://www.cap-az.com/water/water-supply/colorado-river-operations-2/](https://www.cap-az.com/water/water-supply/colorado-river-operations-2/)
46. Big Tech's big thirst — AI's demand for Texas water | TPR - Texas Public Radio, accessed March 23, 2026, [https://www.tpr.org/environment/2025-08-15/big-techs-big-thirst-ais-demand-for-texas-water](https://www.tpr.org/environment/2025-08-15/big-techs-big-thirst-ais-demand-for-texas-water)
47. The Texas AI Boom Is Outpacing Water Regulations, accessed March 23, 2026, [https://www.texasobserver.org/texas-ai-data-centers-water-usage-regulation/](https://www.texasobserver.org/texas-ai-data-centers-water-usage-regulation/)
48. Thirsty Data and the Lone Star State: The Impact of Data Center Growth on Texas' Water Supply, accessed March 23, 2026, [https://harcresearch.org/wp-content/uploads/2026/01/Thirsty-Data-Water-Use-and-The-Projected-Data-Center-Boom-in-Texas.pdf](https://harcresearch.org/wp-content/uploads/2026/01/Thirsty-Data-Water-Use-and-The-Projected-Data-Center-Boom-in-Texas.pdf)
49. Data Centers and Water Resources in Our Region - Metropolitan North Georgia Water Planning District, accessed March 23, 2026, [https://northgeorgiawater.org/residents-schools-businesses/conserve-our-water/data-centers-and-water-resources-in-our-region/](https://northgeorgiawater.org/residents-schools-businesses/conserve-our-water/data-centers-and-water-resources-in-our-region/)
50. Data centers use a lot of water. Georgia counties and conservationists are looking for solutions - WABE, accessed March 23, 2026, [https://www.wabe.org/data-centers-use-a-lot-of-water-georgia-counties-and-conservationists-are-looking-for-solutions/](https://www.wabe.org/data-centers-use-a-lot-of-water-georgia-counties-and-conservationists-are-looking-for-solutions/)
51. Data centers and water conservation in California - Mustang News, accessed March 23, 2026, [https://mustangnews.net/data-centers-water-usage-california/](https://mustangnews.net/data-centers-water-usage-california/)
52. Data center water spikes could cost billions - UCR News - UC Riverside, accessed March 23, 2026, [https://news.ucr.edu/articles/2026/03/09/data-center-water-spikes-could-cost-billions](https://news.ucr.edu/articles/2026/03/09/data-center-water-spikes-could-cost-billions)
53. Data Center Water and Electricity Consumption in Nevada - DRI, accessed March 23, 2026, [https://www.dri.edu/datacenters/](https://www.dri.edu/datacenters/)
54. Data Centers and Water Use - NASUCA, accessed March 23, 2026, [https://www.nasuca.org/wp-content/uploads/2025/02/2025-06-10-NASUCA-Data-Centers-Final-Schneider.pdf](https://www.nasuca.org/wp-content/uploads/2025/02/2025-06-10-NASUCA-Data-Centers-Final-Schneider.pdf)
55. Ranked: Google's Thirstiest Data Centers - Visual Capitalist, accessed March 23, 2026, [https://www.visualcapitalist.com/mapped-googles-data-centers-water-use/](https://www.visualcapitalist.com/mapped-googles-data-centers-water-use/)
56. As Google's water demands grow, The Dalles aims to pull more from Mount Hood forest, accessed March 23, 2026, [https://www.opb.org/article/2026/01/15/as-googles-water-demands-grow-the-dalles-aims-to-pull-more-from-mount-hood-forest/](https://www.opb.org/article/2026/01/15/as-googles-water-demands-grow-the-dalles-aims-to-pull-more-from-mount-hood-forest/)
57. A Closer Look: Columbia River Data Centers, accessed March 23, 2026, [https://www.columbiariverkeeper.org/wp-content/uploads/2026/02/2026.02.26-Data-Center-Closer-Look-Report.pdf](https://www.columbiariverkeeper.org/wp-content/uploads/2026/02/2026.02.26-Data-Center-Closer-Look-Report.pdf)
58. U.S. Water Supply and Distribution Factsheet | Center for Sustainable Systems - Ann Arbor, accessed March 23, 2026, [https://css.umich.edu/publications/factsheets/water/us-water-supply-and-distribution-factsheet](https://css.umich.edu/publications/factsheets/water/us-water-supply-and-distribution-factsheet)
59. Total Water Use in the United States | U.S. Geological Survey - USGS.gov, accessed March 23, 2026, [https://www.usgs.gov/water-science-school/science/total-water-use-united-states](https://www.usgs.gov/water-science-school/science/total-water-use-united-states)
60. 2026 Data Center Trends: AI, Cooling & Power Insights, accessed March 23, 2026, [https://datacenterworld.com/article/2026-data-center-trends-ai-cooling-power-insights/](https://datacenterworld.com/article/2026-data-center-trends-ai-cooling-power-insights/)
61. Geographic concentration of data centers and their future: resilience of current options and new possibilities. - BITA, accessed March 23, 2026, [https://bita.ghost.io/geographic-concentration-of-data-centers-and-their-future-resilience-of-current-options-and-new-possibilities/](https://bita.ghost.io/geographic-concentration-of-data-centers-and-their-future-resilience-of-current-options-and-new-possibilities/)
62. Data centers are coming to Colorado. Can the parched state handle their big water needs?, accessed March 23, 2026, [https://coloradosun.com/2026/01/26/colorado-data-center-explainer-water-use-ai/](https://coloradosun.com/2026/01/26/colorado-data-center-explainer-water-use-ai/)
63. Arizona is building a future the Colorado River cannot supply, accessed March 23, 2026, [https://azcapitoltimes.com/news/2026/02/06/arizona-is-building-a-future-the-colorado-river-cannot-supply/](https://azcapitoltimes.com/news/2026/02/06/arizona-is-building-a-future-the-colorado-river-cannot-supply/)
64. 2025 Washington Metropolitan Area Water Supply Study, accessed March 23, 2026, [https://www.potomacriver.org/wp-content/uploads/2025/12/2025_WMA_Water_Supply_Study_ICPRB_Dec-2025.pdf](https://www.potomacriver.org/wp-content/uploads/2025/12/2025_WMA_Water_Supply_Study_ICPRB_Dec-2025.pdf)
65. How data centres can avoid doubling their energy use by 2030 | World Economic Forum, accessed March 23, 2026, [https://www.weforum.org/stories/2025/12/data-centres-and-energy-demand/](https://www.weforum.org/stories/2025/12/data-centres-and-energy-demand/)
66. When AI Meets Water Scarcity: Data Centers in a Thirsty World | MSCI, accessed March 23, 2026, [https://www.msci.com/research-and-insights/blog-post/when-ai-meets-water-scarcity-data-centers-in-a-thirsty-world](https://www.msci.com/research-and-insights/blog-post/when-ai-meets-water-scarcity-data-centers-in-a-thirsty-world)
67. SUSTAINABLE DATA CENTERS ROADMAP - Innovation for Cool Earth Forum (ICEF), accessed March 23, 2026, [https://icef.go.jp/wp-content/themes/icef_new/pdf/roadmap/icef2025_roadmap%20Oct%209.pdf](https://icef.go.jp/wp-content/themes/icef_new/pdf/roadmap/icef2025_roadmap%20Oct%209.pdf)
68. How Much Electricity Does a Data Center Use? Complete 2025 Analysis - IAEI Magazine, accessed March 23, 2026, [https://iaeimagazine.org/electrical-fundamentals/how-much-electricity-does-a-data-center-use-complete-2025-analysis/](https://iaeimagazine.org/electrical-fundamentals/how-much-electricity-does-a-data-center-use-complete-2025-analysis/)
69. Data Centre Energy Use: Critical Review of Models and Results - IEA 4E, accessed March 23, 2026, [https://www.iea-4e.org/wp-content/uploads/2025/05/Data-Centre-Energy-Use-Critical-Review-of-Models-and-Results.pdf](https://www.iea-4e.org/wp-content/uploads/2025/05/Data-Centre-Energy-Use-Critical-Review-of-Models-and-Results.pdf)
70. Bill Text: CA AB1577 | 2025-2026 | Regular Session | Introduced - LegiScan, accessed March 23, 2026, [https://legiscan.com/CA/text/AB1577/id/3306901](https://legiscan.com/CA/text/AB1577/id/3306901)
71. Bill Text: CA SB57 | 2025-2026 | Regular Session | Amended - LegiScan, accessed March 23, 2026, [https://legiscan.com/CA/text/SB57/id/3209224](https://legiscan.com/CA/text/SB57/id/3209224)
72. SC H4583 - BillTrack50, accessed March 23, 2026, [https://www.billtrack50.com/billdetail/1918583](https://www.billtrack50.com/billdetail/1918583)
73. Bill tracking in South Carolina - H 4583 (2025-2026 legislative session) - FastDemocracy, accessed March 23, 2026, [https://fastdemocracy.com/bill-search/sc/2025-2026/bills/SCB00023696/](https://fastdemocracy.com/bill-search/sc/2025-2026/bills/SCB00023696/)
74. Arizona's Water is Drying Up; Data Centres Not Stopping - The Energy Mix, accessed March 23, 2026, [https://www.theenergymix.com/arizonas-water-is-drying-up-thats-not-stopping-the-data-centre-rush/](https://www.theenergymix.com/arizonas-water-is-drying-up-thats-not-stopping-the-data-centre-rush/)
75. Spotlight: Protecting water resources - Amazon Sustainability, accessed March 23, 2026, [https://sustainability.aboutamazon.com/stories/spotlight-on-water](https://sustainability.aboutamazon.com/stories/spotlight-on-water)
76. Data Center Energy Demand Is Putting Pressure on U.S. Water Supplies - Circle of Blue, accessed March 23, 2026, [https://www.circleofblue.org/2025/water-energy/data-center-energy-demand-is-putting-pressure-on-u-s-water-supplies/](https://www.circleofblue.org/2025/water-energy/data-center-energy-demand-is-putting-pressure-on-u-s-water-supplies/)
77. Data center set to use 6 water towers worth of water per day in Georgia - WSB-TV, accessed March 23, 2026, [https://www.wsbtv.com/news/local/data-centers-water-secrets-companies-using-ndas-hide-water-usage-georgia/ESYQS4GRDVAM7A6EJUQKGXTPWY/](https://www.wsbtv.com/news/local/data-centers-water-secrets-companies-using-ndas-hide-water-usage-georgia/ESYQS4GRDVAM7A6EJUQKGXTPWY/)
78. Data Drain: The Land and Water Impacts of the AI Boom - Lincoln Institute of Land Policy, accessed March 23, 2026, [https://www.lincolninst.edu/publications/land-lines-magazine/articles/land-water-impacts-data-centers/](https://www.lincolninst.edu/publications/land-lines-magazine/articles/land-water-impacts-data-centers/)
79. Can you build data centers in a desert without draining the water supply? Utah is finding out., accessed March 23, 2026, [https://grist.org/technology/utah-data-center-water-supply-meta-novva/](https://grist.org/technology/utah-data-center-water-supply-meta-novva/)
80. Artificial Intelligence: Big Tech's Big Threat to Our Water and Climate - Food & Water Watch, accessed March 23, 2026, [https://www.foodandwaterwatch.org/2025/04/09/artificial-intelligence-water-climate/](https://www.foodandwaterwatch.org/2025/04/09/artificial-intelligence-water-climate/)