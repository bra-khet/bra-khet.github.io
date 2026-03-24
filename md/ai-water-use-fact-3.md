<!--

AKA THE BOTTLE OF WATER CLAIM

CLAUDE, USE THIS FOR REFACTORING ai-water-use-report-1.html WHEN TASKED, or needing facts on "How much water does a prompt use"

 -->

<!-----

You have some errors, warnings, or alerts. If you are using reckless mode, turn it off to see useful information and inline alerts.
* ERRORs: 0
* WARNINGs: 0
* ALERTS: 16

Conversion time: 16.161 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs™ to Markdown version 2.0β2
* Mon Mar 23 2026 16:17:58 GMT-0700 (Pacific Daylight Time)
* Source doc: LLM Resource Consumption Benchmarking
* This is a partial selection. Check to make sure intra-doc links work.
* Tables are currently converted to HTML tables.
* This document has images: check for >>>>>  gd2md-html alert:  inline image link in generated source and store images to your server. NOTE: Images in exported zip file from Google Docs may not appear in  the same order as they do in your doc. Please check the images!

----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 0; ALERTS: 16.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>
<a href="#gdcalert3">alert3</a>
<a href="#gdcalert4">alert4</a>
<a href="#gdcalert5">alert5</a>
<a href="#gdcalert6">alert6</a>
<a href="#gdcalert7">alert7</a>
<a href="#gdcalert8">alert8</a>
<a href="#gdcalert9">alert9</a>
<a href="#gdcalert10">alert10</a>
<a href="#gdcalert11">alert11</a>
<a href="#gdcalert12">alert12</a>
<a href="#gdcalert13">alert13</a>
<a href="#gdcalert14">alert14</a>
<a href="#gdcalert15">alert15</a>
<a href="#gdcalert16">alert16</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>



# Fact-Checking and Establishing 2026 Industry-Standard Resource Consumption for LLM Inference


## The Evolution of Artificial Intelligence Environmental Accountability

The exponential proliferation of large language models (LLMs) has catalyzed a global transformation in computational infrastructure, elevating artificial intelligence from a specialized research domain into a foundational layer of the global digital economy. As adoption scales to hundreds of millions of daily users interacting with increasingly sophisticated generative systems, the environmental footprint of these models has transitioned from an abstract academic concern into a critical variable in geopolitical, economic, and ecological planning. In the nascent stages of public LLM deployment, early estimates surrounding the environmental impact of artificial intelligence were frequently hindered by proprietary secrecy. Hardware utilization rates, datacenter power usage effectiveness (PUE), and regional water usage effectiveness (WUE) were fiercely guarded corporate secrets. Consequently, early academic researchers were forced to rely on generalized extrapolations of legacy infrastructure to model the ecological cost of compute. This opacity created an environment ripe for anecdotal metrics, the most prominent being the widely circulated claim that processing a standard 100-word prompt through a frontier model like ChatGPT consumes the equivalent of a standard 519-milliliter bottle of fresh water.<sup>1</sup>

While such analogies were highly effective in raising public awareness regarding the intersection of artificial intelligence and resource depletion, they represent a static snapshot of legacy architectures operating within outdated infrastructure. The reality of the 2026 hyperscale ecosystem is characterized by relentless optimizations in silicon design, algorithmic sparsity, and thermodynamic management.<sup>3</sup> Modern inference workloads operate on vastly different efficiency curves than the dense, monolithic models of 2023 and 2024. Consequently, the industry requires a rigorous, reproducible, and forward-looking framework to quantify the true cost of generative artificial intelligence. Establishing a standardized methodology for measuring energy in Watt-hours (Wh) and water in milliliters (ml) per token or per prompt is no longer merely an academic exercise; it is an operational necessity for enterprise environmental, social, and governance (ESG) reporting, regulatory compliance, and sustainable grid management.<sup>6</sup>

The necessity for precision is underscored by the sheer scale of projected global demand. Macro-level forecasts indicate that global artificial intelligence operations could consume between 85 and 134 Terawatt-hours (TWh) of electricity annually by 2027, with associated global water withdrawals reaching 4.2 to 6.6 billion cubic meters.<sup>7</sup> This volume exceeds the total annual water withdrawal of several developed nations combined, such as Denmark or half of the United Kingdom.<sup>7</sup> Concurrently, the projected evaporative consumption—water permanently removed from local watersheds and dissipated into the atmosphere—is estimated to reach between 0.38 and 0.60 billion cubic meters globally.<sup>7</sup> However, these macroscopic projections often fail to capture the microscopic realities of per-query efficiency. To bridge this gap, it is imperative to dissect the origins of historical claims, analyze the mathematical and physical foundations of artificial intelligence resource consumption, and implement a state-of-the-art benchmarking protocol that accurately reflects the localized, hardware-specific realities of 2026 hyperscale deployments.


## Deconstructing the Historical Baseline and the 519-Milliliter Claim

To establish a modern benchmark, the origin, mathematical derivation, and methodology of the prominent 519-milliliter water consumption claim must first be rigorously deconstructed. The claim originated from an adaptation of pioneering research conducted by Pengfei Li, Shaolei Ren, and their colleagues at the University of California, Riverside, and the University of Texas Arlington in 2023, which was subsequently popularized by a September 2024 analysis published in the Washington Post.<sup>1</sup> The researchers sought to unmask the hidden environmental costs of cloud-based inference by mathematically modeling the thermodynamic requirements necessary to keep artificial intelligence servers operational and adequately cooled.

The original methodology utilized a straightforward but robust theoretical equation to calculate the total operational water footprint (

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")
) of a single inference request. This equation explicitly isolated direct on-site water use from indirect off-site water use:



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")


In this formulation, 

<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")
 represents the server energy consumed during the specific inference request, measured in kilowatt-hours (kWh). The variable 

<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")
 denotes the on-site Water Usage Effectiveness (WUE), measured in liters per kilowatt-hour of IT energy. This represents the direct evaporation from data center cooling towers (Scope 1 emissions in carbon-accounting terms, adapted here for water). The variable 

<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")
 represents the facility's Power Usage Effectiveness (PUE), a ratio of the total facility energy consumed to the actual energy delivered to the IT equipment. Finally, 

<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip")
 signifies the off-site electricity water intensity factor (EWIF), measured in liters per kilowatt-hour, which represents the indirect water consumed by regional thermoelectric power plants to generate the grid electricity used by the datacenter (Scope 2 water footprint).<sup>13</sup>

Under the baseline parameters defined in the 2023 study, a "medium-sized conversation" (approximately 800 words of input and up to 300 words of output) utilizing an OpenAI GPT-3 class model was estimated to require 0.004 kWh of server energy.<sup>15</sup> Utilizing average United States datacenter parameters of the era—specifically a PUE of 1.17, an on-site WUE of 0.55 L/kWh, and an average grid EWIF of 3.142 L/kWh—the equation yielded approximately 16.9 milliliters of water per request [User Query]. Under this framework, a standard 500-milliliter bottle of water would be consumed after 10 to 70 requests, depending entirely on the geographic location of the datacenter. For instance, executing the query in the hot, evaporative-cooled climate of Arizona would consume the bottle in just 10.5 requests, whereas executing it in the cold, air-cooled climate of Ireland would stretch the consumption to 70 requests [User Query]. Crucially, the original researchers noted that direct (Scope 1) evaporative cooling accounted for only about 13 percent of the total water footprint; indirect power-plant water evaporation dominated the environmental cost.<sup>16</sup>

When this methodology was adapted for the Washington Post in 2024 to evaluate the significantly denser compute requirements of early GPT-4 models, the analysts scaled the energy variable (

<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image7.png "image_tooltip")
) upward dramatically to 0.14 kWh for a single 100-word generation.<sup>1</sup> Applying the exact same United States average WUE, PUE, and EWIF parameters to this new energy baseline produced exactly 519 milliliters of water for one 100-word prompt.<sup>1</sup> This calculated output was not representative of a full conversational session, but rather a single prompt-and-response cycle processed under the hardware and cooling assumptions prevalent prior to the dominance of the NVIDIA H100 architecture.

This 519-milliliter calculation was mathematically sound and directionally accurate for the specific technological snapshot it measured. It successfully highlighted the severe environmental toll of deploying highly dense, monolithic neural networks on legacy datacenter infrastructure. However, applying this 2024 metric to the industry standard of 2026 introduces severe analytical distortions. The original estimate relied on several legacy assumptions that have since been aggressively engineered out of frontier artificial intelligence systems. First, it assumed the energy scaling profile of dense neural networks operating on NVIDIA A100-era hardware, failing to account for the massive efficiency leaps introduced by mixture-of-experts (MoE) architectures and Hopper-class silicon. Second, it utilized national average PUE and WUE metrics that encompass aging enterprise data centers, whereas modern hyperscale artificial intelligence clusters operate at significantly higher baseline efficiencies. Finally, the calculation assumed the widespread use of traditional open-loop cooling towers. This cooling technology is rapidly being phased out in new facilities commissioned in 2025 and 2026 in favor of closed-loop and direct-to-chip liquid cooling systems that evaporate near-zero water on-site.<sup>18</sup> Therefore, while the 519-milliliter figure remains a vital historical milestone in sustainability research, empirical evidence confirms that it overestimates the 2026 per-prompt resource consumption by orders of magnitude.<sup>21</sup>


## Theoretical Foundations of Inference Resource Consumption

Transitioning from legacy historical estimates to contemporary 2026 benchmarks requires a highly nuanced understanding of the physical and computational mechanics underlying large language model inference. Resource consumption in generative artificial intelligence is not a monolithic variable; it is fundamentally a product of semiconductor physics, algorithmic complexity, and thermodynamic heat exchange.


## The Mechanics of Token Generation and Computational Asymmetry

Inference is the operational phase where a fully trained model processes user input and generates predictive text [User Query]. This process is divided into two distinct computational phases: the prefill phase and the decode phase. During the prefill phase, the model reads the user's input prompt, processing the entire sequence in parallel to embed the text into a mathematical vector space and populate the Key-Value (KV) cache. Because this process is highly parallelized across the GPU's streaming multiprocessors, it exhibits a relatively high computational efficiency per token.

Conversely, the decode phase is inherently autoregressive. The model generates the output text strictly one token at a time, feeding each newly generated token back into the sequence to predict the subsequent token. This sequential generation process is heavily memory-bandwidth bound rather than compute-bound. It requires the constant, energy-intensive movement of massive parameter weights from the GPU's High Bandwidth Memory (HBM) into the compute cores for every single token generated.<sup>22</sup> Consequently, output tokens require substantially more energy to generate than input tokens. Benchmark-derived estimates indicate that the decode phase frequently demands 2.0 Joules per token, compared to just 0.8 Joules per token for the prefill phase, resulting in an output generation cost that is 2 to 5 times more energy-intensive than input processing.<sup>22</sup>

This structural input-output asymmetry means that resource consumption cannot be accurately measured by a simple aggregate word count. A prompt containing 1,000 input words generating a 10-word response will consume drastically less energy than a 10-word prompt generating a 1,000-word response. To standardize this measurement, the industry relies on the "token" as the atomic unit of compute. In standard English processing, a token equates to roughly three-quarters of a word; thus, a 100-word prompt translates to approximately 130 to 150 tokens [User Query]. Total energy scales linearly with the total number of output tokens processed. However, as user context windows expand into the tens of thousands of tokens, the energy scaling becomes quadratic, causing the attention mechanisms of the Transformer architecture to demand exponentially more compute and memory access, pushing inference energy costs sharply upward.<sup>24</sup>


## Algorithmic Sparsity and Hardware Precision Optimization

The most profound shift in inference efficiency between the 2023 baselines and the 2026 operational standard has been the widespread, near-universal adoption of Mixture-of-Experts (MoE) architectures by frontier model developers. In a traditional dense model, every single neural parameter is activated for every token processed, creating a massive, unavoidable baseline energy cost.<sup>4</sup> MoE architectures—utilized by prominent models such as OpenAI's GPT-4o, Google's Gemini series, Anthropic's Claude 3.7, and DeepSeek's V3—introduce dynamic routing systems. For any given token, only a highly specialized subset (the "experts") of the total parameter count is activated.<sup>5</sup>

For example, a state-of-the-art open-weight model might possess an aggregate of 671 billion parameters, but dynamic MoE routing ensures that only 37 billion parameters are actively engaged during any specific forward pass.<sup>4</sup> This algorithmic sparsity effectively severs the linear relationship between a model's total size and its inference energy cost, allowing artificial intelligence capabilities to scale to extraordinary heights without a proportionate, crippling increase in electricity demand.<sup>25</sup> This architectural trick slashes inference energy by factors of 5 to 10 compared to older, dense parameter models.<sup>9</sup>

Simultaneously, the industry has migrated toward significantly lower-precision quantization formats. Early generative models relied heavily on 16-bit floating-point precision (FP16 or BF16) to maintain mathematical accuracy during generation. Advancements in NVIDIA's Hopper (H100/H200) architectures, and subsequently the Blackwell (B200/B300) generation, alongside vastly improved training distillation methodologies, have enabled models to run seamlessly at 8-bit (FP8) or even 4-bit (FP4) precision with negligible degradation in reasoning quality or output coherence.<sup>26</sup> Lower precision operations drastically reduce the physical memory bandwidth required to load the model weights, while simultaneously decreasing the electrical energy required to perform the core matrix multiplication operations.<sup>3</sup> Moving from FP16 to FP8 precision effectively halves the memory footprint and significantly boosts the tokens-per-second (TPS) throughput, culminating in performance gains and energy reductions per token of up to 50 percent compared to the hardware utilized in 2023.<sup>3</sup>


## Thermodynamics and the Water-Energy Nexus

The physical manifestation of algorithmic computation is thermal energy. The laws of thermodynamics dictate that virtually all of the electrical energy consumed by a graphic processing unit is eventually converted into heat, which must be actively, continuously removed from the data center to prevent catastrophic hardware failure and silicon degradation. The intricate interplay between electricity supply and thermal management forms the core of the water-energy nexus in artificial intelligence sustainability.

Data center efficiency is mathematically governed by three primary metrics. The first, Power Usage Effectiveness (PUE), measures the ratio of the total facility power consumed to the actual power delivered to the IT equipment. An ideal, theoretically perfect PUE is 1.0, indicating that zero energy is wasted on overhead lighting, power distribution losses, or mechanical cooling fans. Modern hyperscale artificial intelligence facilities commissioned for 2026 operations consistently achieve highly optimized PUEs ranging between 1.08 and 1.15.<sup>9</sup> For instance, Google's specialized TPU data centers report an average PUE of 1.09, while Meta operates facilities boasting an industry-leading 1.08.<sup>9</sup>

The second critical metric is Water Usage Effectiveness (WUE), which measures direct, on-site water evaporation. Traditional air-cooled facilities operating in hot or arid climates rely heavily on open evaporative cooling towers. These systems spray fresh municipal water over massive heat exchangers, leveraging the high latent heat of vaporization to cool the circulating air. These legacy cooling systems can exhibit on-site WUEs exceeding 1.5 to 1.8 L/kWh.<sup>16</sup> However, the extreme thermal density of modern artificial intelligence server racks—which frequently exceed 70 kilowatts of power draw per single rack—has rendered traditional air cooling physically inadequate and thermally unsafe.<sup>31</sup>

This physical limitation has driven a rapid, industry-wide adoption of direct-to-chip liquid cooling and liquid immersion cooling technologies.<sup>32</sup> By circulating engineered dielectric fluids or specialized water-glycol coolants directly over the silicon heat sinks, thermal energy can be captured and removed with exceptional efficiency.<sup>19</sup> Crucially for the environmental footprint, the vast majority of these modern systems utilize closed-loop architectures. In a closed-loop system, the coolant is continuously recirculated through sealed dry coolers or advanced heat exchangers rather than being exposed to the atmosphere and evaporated.<sup>19</sup> This technological pivot allows modern facilities to achieve site WUEs well below 0.30 L/kWh. In fact, major operators are increasingly reporting regional WUE averages as low as 0.18 L/kWh, and new flagship pilot facilities are utilizing zero-water evaporated designs that completely decouple extreme compute density from direct municipal freshwater consumption.<sup>9</sup>

The final metric, the Electricity Water Intensity Factor (EWIF) or source WUE, accounts for the indirect water consumed by the regional power grid. Thermoelectric power plants—predominantly coal, nuclear, and natural gas facilities—boil vast quantities of water to spin generator turbines and require continuous cooling for their own operations. This macro-level infrastructure results in a grid average of roughly 3.14 to 4.35 liters of water evaporated per kilowatt-hour of electricity generated in the United States.<sup>14</sup> Because modern data centers have engineered their direct on-site WUE to near-zero levels, the geographic location of the facility—and the specific energy generation mix of the local grid—now dictates the vast majority of any given AI prompt's total water footprint.


## The Proposed 2026 Industry-Standard Benchmarking Methodology

Given the intricate dependencies between model architecture, dynamic hardware utilization, cooling infrastructure, and regional grid dynamics, historical point estimates derived from isolated server tests are insufficient for establishing a credible industry standard. The gold standard methodology for 2026 relies on the infrastructure-aware benchmarking framework, heavily adapted from the pioneering methodologies proposed by Jegham et al. (2025), augmented by transparent sustainability disclosures from hyperscale providers.<sup>30</sup> This modern approach explicitly abandons deterministic calculations in favor of statistical distributions, recognizing that the environmental cost of a prompt varies continuously based on network latency, dynamic hardware utilization scaling, and geographic load balancing.

The modern protocol executes a rigorous, multi-stage analytical process utilizing Monte-Carlo simulations and Gaussian-copula joint distributions to construct a highly accurate probabilistic model of resource consumption.


## Step 1: Defining the Prompt Cohort

The initial step requires defining a precise, standardized prompt cohort. Rather than relying on vague definitions of "conversations" or arbitrary word counts, the 2026 standard isolates specific input and output token lengths utilizing model-specific tokenizers (e.g., OpenAI's tiktoken or Google's SentencePiece). This ensures precise calculation of the compute burden. A standard benchmark cohort for a short query typically represents 130 input tokens and 150 output tokens, roughly equating to 200 total combined words of prompt and generation [User Query].


## Step 2: Measuring and Estimating Per-Query Energy (

<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image8.png "image_tooltip")
)

To ascertain the raw computational time required for this standardized cohort, researchers must sample public API endpoints across various models. Because network latency, batch sizing, and server loads fluctuate continuously in production environments, execution speed is captured through two interconnected variables: Time-to-First-Token (TTFT) and Tokens-Per-Second (TPS).<sup>40</sup>

When provider-disclosed median energy values are unavailable, the framework utilizes a Gaussian-copula to model the joint distribution of these two variables. This statistical technique allows the framework to generate thousands of realistic inference durations that accurately reflect the empirical correlation between prefill latency and decode speed.<sup>41</sup>

Once a statistically robust distribution of inference times (

<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image9.png "image_tooltip")
) is established, the framework maps these durations to the specific hardware configurations powering the APIs. For frontier models operating in 2026, this predominantly involves 8-way or 10-way NVIDIA H100 or H200 nodes.<sup>28</sup> The power draw of the node is calculated dynamically based on its utilization rate. An H100 GPU operating at maximum utilization draws approximately 700 watts (its Thermal Design Power, or TDP). However, real-world cluster utilization typically averages around 70 percent during inference to maintain strict Service Level Objectives (SLOs) and manage latency.<sup>28</sup> The power utilization profile is therefore modeled using a log-normal distribution to capture the variance in hardware efficiency.<sup>28</sup>

The raw energy of the query is calculated by multiplying the inference time by the total power draw of the active GPUs and the non-GPU host system overhead (CPU, DRAM, networking, idle capacity), and scaling the result by the facility's PUE <sup>39</sup>:



<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image10.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image10.png "image_tooltip")



## Step 3: Applying Geospatial Water Multipliers

The third stage of the methodology transforms the raw energy distribution into precise environmental water footprints using region-specific multipliers. The total operational water consumption (

<p id="gdcalert11" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image11.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert12">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image11.png "image_tooltip")
) in liters is derived by applying the facility's localized site WUE and the regional grid's EWIF (or 

<p id="gdcalert12" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image12.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert13">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image12.png "image_tooltip")
) to the energy calculation:



<p id="gdcalert13" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image13.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert14">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image13.png "image_tooltip")


This dual-factor approach ensures that direct evaporative losses are explicitly segregated from indirect grid consumption [User Query]. For 2026 hyperscale averages, the baseline PUE is set at 1.12, the 

<p id="gdcalert14" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image14.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert15">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image14.png "image_tooltip")
 is mapped between 0.20 and 0.30 L/kWh (reflecting the massive shift toward closed-loop cooling), and the 

<p id="gdcalert15" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image15.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert16">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image15.png "image_tooltip")
 is strictly grid-dependent based on localized utility data.<sup>18</sup>


## Step 4: Generating the Probabilistic Distribution

To represent the reality of global cloud operations, the framework then runs 10,000 Monte-Carlo draws across these established equations.<sup>41</sup> During these iterations, the variables are continuously altered to reflect market realities. Model market share is varied (e.g., assuming GPT-4o-class models handle 40 percent of queries, Gemini handles 25 percent, etc.). The prompt-length histogram is varied to mix short, medium, and long inputs. Most importantly, datacenter geography is probabilistically weighted, routing a percentage of simulated queries to cooler, renewable-heavy grids (like the United States East Coast or the Pacific Northwest) and a percentage to hot, water-stressed environments (like the desert Southwest).<sup>44</sup>

The output is a comprehensive probability density function, reporting the mean, median, and 5th-to-95th percentiles. This produces a scientifically defensible output format, such as: "2026 industry median: 0.35 Wh and 1.8 ml water per 100-word prompt (95% CI 0.2–3.5 ml)" [User Query].


## Step 5: Validation and Sensitivity Testing

The final step requires rigorous cross-checking of the generated distributions against independent empirical sources. The framework validates its energy estimates against the ML.Energy leaderboard and cross-efficiency Data Envelopment Analysis (DEA) scores, ensuring that the theoretical Monte-Carlo outputs align with physical hardware benchmarking.<sup>28</sup> Furthermore, the estimates are cross-referenced against public WUE reports from providers like Microsoft Azure and Google Cloud to ensure the cooling multipliers are accurate.<sup>21</sup> The protocol explicitly excludes Scope 3 embodied carbon and water emissions (the resources consumed during the manufacturing of the servers and construction of the facility) to maintain a pure focus on operational inference efficiency, unless explicitly requested for a full lifecycle analysis.<sup>30</sup>


## Empirical 2026 Benchmarks by Model Architecture

Applying this rigorous, Monte-Carlo-driven methodology to the 2026 landscape reveals a dramatic reduction in per-prompt resource intensity compared to historical estimates. The era of the "500-milliliter bottle" has been thoroughly replaced by hyperscale efficiency. However, this efficiency is not uniformly distributed; it is sharply divided by the fundamental architectural purpose of the specific model being deployed.


<table>
  <tr>
   <td><strong>Metric (Normalized per 100-word prompt / ~130 total tokens)</strong>
   </td>
   <td><strong>2024 Baseline Estimate (GPT-4 on A100)</strong>
   </td>
   <td><strong>2026 Base Conversational Average (H100/H200)</strong>
   </td>
   <td><strong>2026 Highly Optimized Hyperscale (Gemini Median)</strong>
   </td>
   <td><strong>2026 System-2 Reasoning Model (DeepSeek-R1 / o3)</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Server Architecture</strong>
   </td>
   <td>NVIDIA A100
   </td>
   <td>NVIDIA H100 / H200
   </td>
   <td>Custom TPU (Ironwood)
   </td>
   <td>NVIDIA H100 / B200 NVL8
   </td>
  </tr>
  <tr>
   <td><strong>Average Energy (Wh)</strong>
   </td>
   <td>~ 140.0 Wh
   </td>
   <td>0.35 - 0.42 Wh
   </td>
   <td>0.24 Wh
   </td>
   <td>33.0 - 40.0 Wh
   </td>
  </tr>
  <tr>
   <td><strong>Site WUE (L/kWh)</strong>
   </td>
   <td>0.55
   </td>
   <td>0.20 - 0.30
   </td>
   <td>&lt; 0.20
   </td>
   <td>0.20 - 0.30
   </td>
  </tr>
  <tr>
   <td><strong>Total Water (ml)</strong>
   </td>
   <td>519.0 ml
   </td>
   <td>1.5 - 2.5 ml
   </td>
   <td>0.26 ml
   </td>
   <td>140.0 - 200.0 ml
   </td>
  </tr>
</table>



## Dense vs. Mixture-of-Experts Standard Models

The overwhelming majority of global inference workloads today are handled by highly optimized MoE architectures such as OpenAI's GPT-4o, Google's Gemini 1.5 and 2.5, and Anthropic's Claude 3.5 and 3.7 families. These systems demonstrate remarkable thermodynamic frugality. Empirical benchmarking executed by Jegham et al. (2025) across 30 state-of-the-art models operating in commercial data centers indicates that a standard, short GPT-4o query consumes approximately 0.42 Watt-hours (Wh) of electricity, with a variance of 

<p id="gdcalert16" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image16.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert17">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image16.png "image_tooltip")
 0.13 Wh.<sup>30</sup> This empirical testing aligns almost perfectly with direct corporate disclosures; OpenAI has noted a median query energy of roughly 0.34 Wh for its default deployments.<sup>30</sup>

Google has pushed the efficiency frontier even further through strict vertical integration. By running its Gemini assistant on custom, highly efficient 7th-generation Ironwood Tensor Processing Units (TPUs) within facilities boasting PUEs of 1.09, Google reported in a detailed 2025 environmental analysis that its median text prompt requires just 0.24 Wh of electricity and consumes a mere 0.26 milliliters of total water—roughly the equivalent of five drops.<sup>21</sup> To place this in a practical context, processing a standard prompt via Gemini uses less electrical energy than powering an LED lightbulb for 14 seconds, or watching nine seconds of television.<sup>21</sup> Anthropic's Claude 3.7 Sonnet similarly ranks at the absolute peak of the eco-efficiency index, scoring 0.886 on cross-efficiency Data Envelopment Analysis (DEA), proving conclusively that frontier cognitive capabilities can be delivered with minimal environmental overhead when the underlying architecture is properly optimized.<sup>9</sup>

For standard base conversational models across the industry in 2026, the generalized normalization rules stand at roughly 1.2 to 2.0 Wh of electricity and 0.7 to 1.2 ml of water per 1,000 total tokens processed, assuming an average grid EWIF of 1.9 L/kWh [User Query].


## Open-Weight Heavyweights

The democratization of artificial intelligence through the release of massive open-weight models presents a uniquely different environmental profile, as these models are frequently deployed on unoptimized, heterogeneous, or legacy hardware infrastructure by downstream users. A prime example is Meta's Llama 3.1 405B, a massive dense transformer model. When operating at FP8 precision on a standard 8-way NVIDIA H100 node, empirical measurements indicate the model consumes approximately 1.99 to 2.22 Wh per query.<sup>24</sup> While this energy draw represents a fivefold increase over the highly optimized proprietary MoE APIs managed by hyperscalers, it remains astronomically lower than the 2024 baselines, underscoring the universal, industry-wide impact of hardware precision advancements.<sup>28</sup>


## The Reasoning Penalty: Inference Inflation

The most significant and disruptive variable in 2026 inference benchmarking is the rapid emergence and widespread deployment of System-2 "reasoning" models, such as OpenAI's o1 and o3 series, and the DeepSeek-R1 architecture. These models fundamentally alter the compute paradigm; they eschew standard, rapid autoregressive generation in favor of executing extensive internal Chain-of-Thought (CoT) processing. Before delivering a final, visible answer to the user, a reasoning model engages in a hidden cognitive monologue, generating thousands or tens of thousands of internal tokens to self-correct, plan, and verify its logical steps.<sup>4</sup>

This architectural shift effectively trades training compute for test-time compute, resulting in a phenomenon researchers have termed "inference inflation." While a base conversational model might consume 0.42 Wh for a standard prompt, models like DeepSeek-R1 and OpenAI's o3 routinely consume upwards of 33.0 to 40.0 Wh per long prompt.<sup>5</sup> This represents an astonishing 70x to 100x multiplier in energy intensity per individual interaction.<sup>4</sup> For an enterprise deploying reasoning models at scale, the environmental and financial implications are profound. Processing just 76,000 interactions through an o3-class reasoning model can consume 3,000 kWh—equivalent to the annual air-conditioning budget of a typical American household.<sup>24</sup>

Consequently, the 2026 industry standard protocol must explicitly and permanently segregate base inference metrics from reasoning inference metrics. Blending the two into a single "average query" metric obscures the unique, massive thermodynamic burden of test-time compute and renders corporate sustainability reporting functionally meaningless.


## Geospatial Variability and Grid Dynamics

While algorithmic architecture and hardware efficiency define the baseline for electrical energy consumption, the ultimate ecological impact—particularly the aggregate water footprint—is governed almost entirely by geographic location. Artificial intelligence data centers are physically bound to regional power grids, each with its own specific carbon and water intensities. Analyzing the divergence between different grids illuminates the profound second-order effects of datacenter siting and exposes the vulnerabilities of macro-level capacity planning.

To thoroughly illustrate this dynamic, it is necessary to contrast the environmental profiles of deploying an AI cluster in the desert grid of Arizona (within the Western Electricity Coordinating Council, or WECC, sub-region) versus the PJM Interconnection grid spanning heavily industrialized states like Pennsylvania.


## The Western Interconnection: Arizona

Arizona has rapidly developed into a major hub for hyperscale data center construction, driven by vast land availability, historically favorable energy policies, and access to fiber networks. However, the region is categorized as highly water-stressed, facing chronic threats to the Colorado River supply. The electricity generation mix in Arizona as of 2025 is composed of approximately 44 percent natural gas, 26 percent nuclear power, and 16 percent solar energy.<sup>52</sup> While the growing share of utility-scale and behind-the-meter solar energy helps suppress the overall carbon intensity of the grid (averaging around 287 gCO2eq/kWh), the heavy reliance on traditional thermal plants and large nuclear facilities dictates a substantial regional EWIF.<sup>17</sup> The regional power plants require massive volumes of water for cooling makeup to maintain operations.<sup>37</sup>

To mitigate local hydrological strain and comply with public pressure, hyperscale operators in Arizona are aggressively pivoting toward completely waterless datacenter cooling. Microsoft, for instance, implemented zero-water evaporated data center designs for its new facilities, piloting in Phoenix and Mt. Pleasant by 2026 and scaling broadly by 2027.<sup>18</sup> These advanced facilities utilize closed-loop direct-to-chip cooling paired with massive dry heat rejection systems (essentially giant external radiators), effectively dropping the site WUE to near-zero during normal operations.<sup>18</sup>

However, the thermodynamic paradox of waterless cooling is that dry heat rejection typically demands significantly more mechanical energy—to power massive circulation fans and supplemental mechanical chillers—than evaporative cooling.<sup>55</sup> This "energy penalty" slightly increases the facility's overall PUE and total electricity draw.<sup>55</sup> Because the local Arizona grid still requires water to generate that extra electricity at the natural gas and nuclear plants, eliminating direct Scope 1 water consumption at the datacenter can inadvertently increase the indirect Scope 2 water consumption. This effectively transfers the water burden from the municipal water utility adjacent to the datacenter directly to the regional river basin supplying the power plant.<sup>37</sup>


## The PJM Interconnection: Pennsylvania

Conversely, Pennsylvania operates within the footprint of the PJM Interconnection, the largest wholesale electricity market in the United States. PJM is currently confronting unprecedented load growth, driven explicitly by artificial intelligence data center expansion. Long-term grid forecasts published in 2025 and 2026 project the addition of upwards of 166 Gigawatts (GW) of new peak demand over the forecast period, with data centers acting as the primary driver for over half of that growth.<sup>57</sup> Pennsylvania's localized grid relies exceptionally heavily on fossil fuels and thermal generation, with natural gas generating nearly 59 percent of the state's electricity in 2024, followed closely by a robust nuclear fleet accounting for 31 percent.<sup>60</sup>

The high concentration of thermal generation in Pennsylvania results in a drastically different resource profile compared to the Southwest. Thermoelectric cooling systems in the PJM region, particularly older once-through cooling systems or standard recirculating cooling towers installed at legacy gas and nuclear facilities, establish a regional grid EWIF that dictates a high indirect water footprint for every megawatt drawn by an AI facility.<sup>37</sup> Estimates suggest these older power plant cooling systems require 2.3 to 4.5 liters of water to generate a single kilowatt-hour of electricity.<sup>37</sup>

If an AI operator routes a reasoning-intensive model requiring 33 Wh per query to a datacenter situated on the PJM grid, the resulting Scope 2 water evaporation at the regional power plants will vastly overshadow any localized WUE efficiency gains achieved by the AI datacenter itself.


<table>
  <tr>
   <td><strong>Geospatial Grid Characteristics (2025-2026)</strong>
   </td>
   <td><strong>Arizona Grid (WECC sub-region)</strong>
   </td>
   <td><strong>Pennsylvania Grid (PJM Interconnection)</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Primary Energy Source</strong>
   </td>
   <td>Natural Gas (44%), Nuclear (26%), Solar (16%)
   </td>
   <td>Natural Gas (59%), Nuclear (31%)
   </td>
  </tr>
  <tr>
   <td><strong>Datacenter Cooling Strategy</strong>
   </td>
   <td>Intense focus on dry, zero-water evaporative cooling due to extreme local scarcity.
   </td>
   <td>Mixed cooling; leveraging local waterways, transitioning to closed-loop designs.
   </td>
  </tr>
  <tr>
   <td><strong>Grid Challenge</strong>
   </td>
   <td>Balancing peak summer load against solar duck curve; protecting Colorado River water.
   </td>
   <td>Absorbing massive multi-gigawatt load additions from new data centers; reliability risks.
   </td>
  </tr>
  <tr>
   <td><strong>Scope 2 Vulnerability</strong>
   </td>
   <td>Increased datacenter PUE from dry-cooling draws more power, impacting thermal plants.
   </td>
   <td>Heavy reliance on water-cooled nuclear/gas means high indirect EWIF per kWh.
   </td>
  </tr>
</table>


These distinct regional profiles dictate that the 2026 industry-standard water consumption for an LLM prompt cannot, and must not, be expressed as a single, static global number. Instead, it must be represented as a geospatial matrix. The exact same 100-word query, processed by the exact same Mixture-of-Experts model, on the exact same NVIDIA H100 silicon, will evaporate a fraction of a milliliter of water if routed to a wind-powered, immersion-cooled datacenter in Norway. Yet, that identical computational task could approach several milliliters of water consumption if processed during peak load hours in a fossil-heavy, high-temperature region operating on older thermal grid infrastructure.


## Macro-Economic Implications and Policy Recommendations

The establishment of rigorous, micro-level benchmarks reveals a critical macro-economic paradox that defines the 2026 artificial intelligence landscape. As meticulously detailed through the empirical benchmarks above, the energy and water required to process a single prompt have plummeted dramatically. Hardware optimizations, MoE architectures, quantization, and cooling innovations have rendered the individual query hyper-efficient. Yet, aggregate energy and water consumption by the artificial intelligence sector continues to surge unabated.<sup>9</sup>


## The Jevons Paradox in Artificial Intelligence

This phenomenon is a textbook, modern manifestation of the Jevons Paradox. First observed in the 19th century regarding coal efficiency and the steam engine, the paradox posits that technological progress increasing the efficiency with which a resource is used tends to increase, rather than decrease, the overall rate of consumption of that resource.

As LLM inference costs drop—both financially and computationally—entirely new utility horizons are unlocked.<sup>30</sup> In 2023, LLMs were largely utilized via manual, single-turn chat interfaces by human operators. By 2026, low-cost API inference has enabled the pervasive deployment of agentic AI. Millions of autonomous agents continuously poll data, draft software code, negotiate APIs, and analyze sentiment in the background, executing thousands of unseen queries for every single human interaction.<sup>63</sup> Furthermore, the introduction of multi-modal models—specifically video and high-resolution image generation, which require orders of magnitude more compute than text generation—ensures that hardware efficiency gains are instantly consumed by increased software ambition.<sup>9</sup> Consequently, while a single text prompt uses less energy than watching nine seconds of television, scaling this to billions of autonomous daily queries results in regional grid strain requiring new power plant construction and massive capacity market adjustments.<sup>21</sup>


## Democratic Compute vs. Centralized Reasoning

The shifting economics of inference also carry deep structural implications for the global technology sector. The ability of bottom-up, efficient architectures (demonstrated by open-weight releases and heavily optimized distilled models) to operate effectively at very low energy thresholds actively lowers the barrier to entry.<sup>4</sup> It facilitates the rise of "Sovereign AI," enabling smaller enterprises, developing nations, and academic institutions to run highly capable models on localized, sustainable hardware clusters without relying entirely on the centralized, multi-gigawatt mega-clusters built by a handful of hyperscale providers.<sup>4</sup>

However, the current industry arms race toward System-2 reasoning models threatens to reverse this democratization. The intense test-time compute requirements of deep chain-of-thought processing re-centralize power around entities capable of absorbing extreme energy and cooling costs, threatening to fracture the artificial intelligence landscape into highly efficient local agents and massively resource-intensive centralized oracles.<sup>4</sup>


## Strategic Recommendations and Standardization

To navigate the systemic environmental risks posed by the ongoing artificial intelligence expansion, regulatory bodies, corporate sustainability officers, and hardware engineers must abandon legacy narratives and adopt empirically grounded, transparent frameworks. The following standards are critical for establishing sustainable operating protocols:



1. **Mandatory Full-Stack Disclosures:** Policymakers and regulatory agencies should require cloud providers to explicitly disclose per-token energy consumption and localized site WUE/PUE data via API headers or regular reporting. Transparency initiatives, mirroring Google's comprehensive environmental report precedent, must become the mandated industry standard, allowing downstream consumers to factor ecological costs directly into their API selection and routing logic.<sup>21</sup>
2. **Standardized Metric Adoption:** Corporate ESG reporting must transition away from vague "per query" or "per conversation" metrics, which are easily manipulated by altering token counts. The industry must adopt normalized metrics: **Watt-hours per 1,000 user tokens** and **milliliters of water per 1,000 user tokens**. Crucially, sustainability reports must explicitly segment base inference models from test-time reasoning models to prevent statistical dilution and provide accurate carbon accounting [User Query].
3. **Incentivizing Geographic Load Balancing:** Energy-aware routing algorithms should be implemented at the foundational API layer. Non-latency-sensitive workloads—such as massive batch data processing, model fine-tuning, or background agentic tasks—should be automatically routed to data centers currently operating on high levels of renewable generation or within regions experiencing low grid water stress. This practice is readily enabled by real-time telemetry from grid operators like PJM and WECC.<sup>67</sup>
4. **Hardware Circularity and E-Waste Management:** As hyperscale data centers rapidly decommission functional A100-era hardware to install H200 and Blackwell racks purely for energy efficiency and density gains, the lifecycle emissions (Scope 3 embodied carbon) and electronic waste impacts increase exponentially. Adopting strict circular economy principles—such as harvesting and recertifying decommissioned server components and utilizing hybrid timber-steel facility construction—is essential to ensure that operational efficiency is not achieved at the unacceptable expense of embodied environmental degradation.<sup>17</sup>

This comprehensive infrastructure-aware framework ensures that environmental claims surrounding artificial intelligence are falsifiable, location-aware, and forward-looking. By replacing anecdotal "bottle of water" rhetoric with engineering-grade quantification, the industry can accurately assess its impact and engineer sustainable pathways for the continued expansion of machine intelligence.


## Appendix: Glossary of Key Terms



* **LLM Inference:** The operational "thinking" phase where a fully trained model reads user input (the prompt) and generates text iteratively, token by token. This is distinct from the highly energy-intensive, one-time process of model training [User Query].
* **Tokens:** The fundamental internal unit of computation for an artificial intelligence model. A token represents chunks of characters rather than whole words; in standard English, a token is roughly equivalent to three-quarters of a word. A standard 100-word prompt translates to approximately 130 to 150 tokens [User Query].
* **PUE (Power Usage Effectiveness):** An efficiency ratio measuring the total facility energy consumed divided by the energy directly utilized by the IT equipment. Lower is better. Modern AI data centers achieve PUEs near 1.1, indicating that almost all electricity goes directly to the compute chips, with very little wasted on overhead lighting or mechanical fans [User Query].
* **WUE (Water Usage Effectiveness):** An efficiency ratio measuring the water used by a facility divided by the IT equipment energy, expressed in Liters per Kilowatt-hour (L/kWh).
* **Scope 1 vs. Scope 2 Water:** Scope 1 refers to the direct, physical water evaporated on-site at the data center (typically through cooling towers). Scope 2 refers to the indirect water used off-site at regional power plants to generate the electricity that powers the datacenter [User Query].
* **EWIF (Electricity Water Intensity Factor):** Also known as source WUE, this measures the liters of water evaporated per kilowatt-hour of electricity generated by the regional power grid. This number is high for thermal plants (nuclear, coal, gas) and near-zero for solar and wind [User Query].
* **MoE (Mixture-of-Experts):** A highly efficient algorithmic architecture utilized in modern frontier models. Instead of activating the entire neural network for every word, only a specialized fraction (the "experts") of the network activates per query, slashing inference energy by factors of 5 to 10 compared to older, dense models [User Query].
* **Closed-Loop / Immersion Cooling:** Modern data center thermal management systems that recycle cooling water through sealed loops or utilize non-evaporative dielectric liquids. These technologies can cut direct freshwater use by 70 percent or more compared to traditional "open" evaporative cooling towers [User Query].
* **Reasoning Models (System-2 AI):** Models that utilize deep Chain-of-Thought (CoT) processing, generating thousands of hidden internal tokens to verify logic before responding. This significantly increases accuracy on complex tasks but incurs a massive "inference inflation" energy penalty, drawing up to 100 times more power per query than standard conversational models.<sup>4</sup>


#### Works cited



1. Sending One Email With ChatGPT is the Equivalent of Consuming One Bottle of Water, accessed March 23, 2026, [https://www.techrepublic.com/article/generative-ai-data-center-water-use/](https://www.techrepublic.com/article/generative-ai-data-center-water-use/)
2. AI programs consume large volumes of scarce water - UCR News - UC Riverside, accessed March 23, 2026, [https://news.ucr.edu/articles/2023/04/28/ai-programs-consume-large-volumes-scarce-water](https://news.ucr.edu/articles/2023/04/28/ai-programs-consume-large-volumes-scarce-water)
3. NVIDIA H100 vs H200: Benchmarks, specs & which GPU to choose - CUDO Compute, accessed March 23, 2026, [https://www.cudocompute.com/blog/nvidia-h100-vs-h200-how-will-they-compare](https://www.cudocompute.com/blog/nvidia-h100-vs-h200-how-will-they-compare)
4. An Alternative Trajectory for Generative AI - arXiv, accessed March 23, 2026, [https://arxiv.org/pdf/2603.14147](https://arxiv.org/pdf/2603.14147)
5. An Alternative Trajectory for Generative AI - arXiv, accessed March 23, 2026, [https://arxiv.org/html/2603.14147v1](https://arxiv.org/html/2603.14147v1)
6. As Use of A.I. Soars, So Does the Energy and Water It Requires - Yale E360, accessed March 23, 2026, [https://e360.yale.edu/features/artificial-intelligence-climate-energy-emissions](https://e360.yale.edu/features/artificial-intelligence-climate-energy-emissions)
7. Making AI Less 'Thirsty', accessed March 23, 2026, [https://crystal.uta.edu/~mislam/pdfs/2025_CACM.pdf](https://crystal.uta.edu/~mislam/pdfs/2025_CACM.pdf)
8. Uncovering and Addressing the Secret Water Footprint of AI Models - SciSpace, accessed March 23, 2026, [https://scispace.com/pdf/making-ai-less-thirsty-uncovering-and-addressing-the-secret-2a6mq02b.pdf](https://scispace.com/pdf/making-ai-less-thirsty-uncovering-and-addressing-the-secret-2a6mq02b.pdf)
9. AI Energy Consumption Analysis 2025–2030 | by Asrar - Medium, accessed March 23, 2026, [https://medium.com/@asrar7787/ai-energy-consumption-executive-analysis-2025-2030-e911613c6834](https://medium.com/@asrar7787/ai-energy-consumption-executive-analysis-2025-2030-e911613c6834)
10. Health implications of the rapid rise of data centers in Virginia: an exploratory assessment, accessed March 23, 2026, [https://www.frontiersin.org/journals/climate/articles/10.3389/fclim.2026.1648912/full](https://www.frontiersin.org/journals/climate/articles/10.3389/fclim.2026.1648912/full)
11. Health Implications of the Rapid Rise of Data Centers in Virginia: An Exploratory Assessment - ResearchGate, accessed March 23, 2026, [https://www.researchgate.net/publication/400077921_Health_Implications_of_the_Rapid_Rise_of_Data_Centers_in_Virginia_An_Exploratory_Assessment](https://www.researchgate.net/publication/400077921_Health_Implications_of_the_Rapid_Rise_of_Data_Centers_in_Virginia_An_Exploratory_Assessment)
12. [2304.03271] Making AI Less "Thirsty": Uncovering and Addressing the Secret Water Footprint of AI Models - arXiv, accessed March 23, 2026, [https://arxiv.org/abs/2304.03271](https://arxiv.org/abs/2304.03271)
13. Making AI Less “Thirsty”: Uncovering and Addressing the Secret Water Footprint of AI Models - arXiv, accessed March 23, 2026, [https://arxiv.org/html/2304.03271v4](https://arxiv.org/html/2304.03271v4)
14. 2024 United States Data Center Energy Usage Report, accessed March 23, 2026, [https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report.pdf?utm_source=substack&utm_medium=email](https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report.pdf?utm_source=substack&utm_medium=email)
15. Does AI use lots of water? - Skeptics Stack Exchange, accessed March 23, 2026, [https://skeptics.stackexchange.com/questions/57326/does-ai-use-lots-of-water](https://skeptics.stackexchange.com/questions/57326/does-ai-use-lots-of-water)
16. Forecasting US data center CO2 emissions using AI models: emissions reduction strategies and policy recommendations - Frontiers, accessed March 23, 2026, [https://www.frontiersin.org/journals/sustainability/articles/10.3389/frsus.2024.1507030/full](https://www.frontiersin.org/journals/sustainability/articles/10.3389/frsus.2024.1507030/full)
17. Forecasting US data center CO2 emissions using AI models: emissions reduction strategies and policy recommendations - ResearchGate, accessed March 23, 2026, [https://www.researchgate.net/publication/388124266_Forecasting_US_data_center_CO2_emissions_using_AI_models_emissions_reduction_strategies_and_policy_recommendations](https://www.researchgate.net/publication/388124266_Forecasting_US_data_center_CO2_emissions_using_AI_models_emissions_reduction_strategies_and_policy_recommendations)
18. Sustainable by design: Next-generation datacenters consume zero water for cooling | The Microsoft Cloud Blog, accessed March 23, 2026, [https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/](https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/)
19. The Future is Liquid: How In-Rack and Direct-to-Chip Cooling are Revolutionizing Data Centers - CyrusOne, accessed March 23, 2026, [https://www.cyrusone.com/resources/blogs/in-rack-and-direct-to-chip-cooling-revolutionizing-data-centers](https://www.cyrusone.com/resources/blogs/in-rack-and-direct-to-chip-cooling-revolutionizing-data-centers)
20. Microsoft datacenters in Wisconsin, accessed March 23, 2026, [https://local.microsoft.com/wp-content/uploads/2024/04/Microsoft-datacenters-in-Wisconsin.pdf](https://local.microsoft.com/wp-content/uploads/2024/04/Microsoft-datacenters-in-Wisconsin.pdf)
21. Measuring the environmental impact of delivering AI at Google Scale, accessed March 23, 2026, [https://services.google.com/fh/files/misc/measuring_the_environmental_impact_of_delivering_ai_at_google_scale.pdf](https://services.google.com/fh/files/misc/measuring_the_environmental_impact_of_delivering_ai_at_google_scale.pdf)
22. How Hungry is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference, accessed March 23, 2026, [https://www.researchgate.net/publication/391741710_How_Hungry_is_AI_Benchmarking_Energy_Water_and_Carbon_Footprint_of_LLM_Inference](https://www.researchgate.net/publication/391741710_How_Hungry_is_AI_Benchmarking_Energy_Water_and_Carbon_Footprint_of_LLM_Inference)
23. NVIDIA Blackwell Delivers Massive Performance Leaps in MLPerf Inference v5.0, accessed March 23, 2026, [https://developer.nvidia.com/blog/nvidia-blackwell-delivers-massive-performance-leaps-in-mlperf-inference-v5-0/](https://developer.nvidia.com/blog/nvidia-blackwell-delivers-massive-performance-leaps-in-mlperf-inference-v5-0/)
24. Scale or Surrender: When watts determine freedom - Tim Davis, accessed March 23, 2026, [https://www.timdavis.com/blog/scale-or-surrender-when-watts-determine-freedom](https://www.timdavis.com/blog/scale-or-surrender-when-watts-determine-freedom)
25. ChatGPT vs. Gemini: Energy Efficiency Compared - NanoGPT, accessed March 23, 2026, [https://nano-gpt.com/blog/chatgpt-vs-gemini-energy-efficiency-comparison](https://nano-gpt.com/blog/chatgpt-vs-gemini-energy-efficiency-comparison)
26. Comparing Blackwell vs Hopper | B200 & B100 vs H200 & H100 | Exxact Blog, accessed March 23, 2026, [https://www.exxactcorp.com/blog/hpc/comparing-nvidia-tensor-core-gpus](https://www.exxactcorp.com/blog/hpc/comparing-nvidia-tensor-core-gpus)
27. NVIDIA Blackwell Delivers World-Record DeepSeek-R1 Inference Performance, accessed March 23, 2026, [https://developer.nvidia.com/blog/nvidia-blackwell-delivers-world-record-deepseek-r1-inference-performance/](https://developer.nvidia.com/blog/nvidia-blackwell-delivers-world-record-deepseek-r1-inference-performance/)
28. Energy Use of AI Inference: Efficiency Pathways and Test-Time Compute - arXiv.org, accessed March 23, 2026, [https://arxiv.org/pdf/2509.20241](https://arxiv.org/pdf/2509.20241)
29. AI Benchmark Democratization and Carpentry - Fermilab | Technical Publications, accessed March 23, 2026, [https://lss.fnal.gov/archive/2025/pub/fermilab-pub-25-0835-csaid.pdf](https://lss.fnal.gov/archive/2025/pub/fermilab-pub-25-0835-csaid.pdf)
30. arxiv.org, accessed March 23, 2026, [https://arxiv.org/html/2505.09598v5](https://arxiv.org/html/2505.09598v5)
31. Making AI Less “Thirsty”: Uncovering and Addressing the Secret Water Footprint of AI Models - arXiv, accessed March 23, 2026, [https://arxiv.org/pdf/2304.03271](https://arxiv.org/pdf/2304.03271)
32. Preparing the Workforce for Liquid-Cooled Data Centers - LVI Associates, accessed March 23, 2026, [https://www.lviassociates.com/en-us/industry-insights/hiring-advice/preparing-the-workforce-for-liquid-cooled-data-centers](https://www.lviassociates.com/en-us/industry-insights/hiring-advice/preparing-the-workforce-for-liquid-cooled-data-centers)
33. The New Backbone of High-Density Data Centers - Liquid Cooling - Stellarix, accessed March 23, 2026, [https://stellarix.com/insights/articles/liquid-cooling-the-new-backbone-of-high-density-data-centers/](https://stellarix.com/insights/articles/liquid-cooling-the-new-backbone-of-high-density-data-centers/)
34. What new water circularity can look like for data centres | World Economic Forum, accessed March 23, 2026, [https://www.weforum.org/stories/2025/11/data-centres-and-water-circularity/](https://www.weforum.org/stories/2025/11/data-centres-and-water-circularity/)
35. Data Center Cooling Market Outlook 2026-2034, accessed March 23, 2026, [https://www.intelmarketresearch.com/global-data-center-cooling-forecast-market-776](https://www.intelmarketresearch.com/global-data-center-cooling-forecast-market-776)
36. Comment - Nature, accessed March 23, 2026, [https://media.nature.com/original/magazine-assets/d41586-025-02641-4/51368154](https://media.nature.com/original/magazine-assets/d41586-025-02641-4/51368154)
37. Escalating Water Demand for Energy Production and the Potential for Use of Treated Municipal Wastewater, accessed March 23, 2026, [https://pubs.acs.org/doi/pdf/10.1021/es1040305](https://pubs.acs.org/doi/pdf/10.1021/es1040305)
38. How Hungry is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference, accessed March 23, 2026, [https://arxiv.org/html/2505.09598v1](https://arxiv.org/html/2505.09598v1)
39. Toward Sustainable AI: A Scoping Review of Carbon Footprint and Environmental Impacts Across Training and Inference Stages - IEEE Xplore, accessed March 23, 2026, [https://ieeexplore.ieee.org/iel8/6287639/11323511/11369929.pdf](https://ieeexplore.ieee.org/iel8/6287639/11323511/11369929.pdf)
40. GreenLLM: SLO-Aware Dynamic Frequency Scaling for Energy-Efficient LLM Serving, accessed March 23, 2026, [https://arxiv.org/html/2508.16449v1](https://arxiv.org/html/2508.16449v1)
41. proceedings book - International Conference on Mathematics and Mathematics Education (ICMME 2025), accessed March 23, 2026, [http://theicmme.org/ICMME-2025-Proceedings-Book.pdf](http://theicmme.org/ICMME-2025-Proceedings-Book.pdf)
42. YOLO Series: A Decadal Review | PDF - Scribd, accessed March 23, 2026, [https://www.scribd.com/document/883884553/s10462-025-11253-3](https://www.scribd.com/document/883884553/s10462-025-11253-3)
43. Tam Metin Kitabı - Bildiri Otomasyonu, accessed March 23, 2026, [https://kongre.akademikiletisim.com/files/icar16/icar16_tam_metin_kitabi.pdf](https://kongre.akademikiletisim.com/files/icar16/icar16_tam_metin_kitabi.pdf)
44. (PDF) Environmental impact and net-zero pathways for sustainable artificial intelligence servers in the USA - ResearchGate, accessed March 23, 2026, [https://www.researchgate.net/publication/397459735_Environmental_impact_and_net-zero_pathways_for_sustainable_artificial_intelligence_servers_in_the_USA](https://www.researchgate.net/publication/397459735_Environmental_impact_and_net-zero_pathways_for_sustainable_artificial_intelligence_servers_in_the_USA)
45. Toward Sustainable AI: A Scoping Review of Carbon Footprint and Environmental Impacts Across Training and Inference Stages - ResearchGate, accessed March 23, 2026, [https://www.researchgate.net/publication/400391344_Toward_Sustainable_AI_A_Scoping_Review_of_Carbon_Footprint_and_Environmental_Impacts_Across_Training_and_Inference_Stages](https://www.researchgate.net/publication/400391344_Toward_Sustainable_AI_A_Scoping_Review_of_Carbon_Footprint_and_Environmental_Impacts_Across_Training_and_Inference_Stages)
46. 2025 Environmental Sustainability Report - Microsoft, accessed March 23, 2026, [https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/2025-Microsoft-Environmental-Sustainability-Report-PDF.pdf](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/2025-Microsoft-Environmental-Sustainability-Report-PDF.pdf)
47. THE SYSTEMIC ENVIRONMENTAL RISKS OF ARTFICIAL INTELLIGENCE - GI Digital Library, accessed March 23, 2026, [https://dl.gi.de/bitstreams/3daed86b-d50f-4301-b320-7c5e01bde158/download](https://dl.gi.de/bitstreams/3daed86b-d50f-4301-b320-7c5e01bde158/download)
48. How Hungry is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference - arXiv, accessed March 23, 2026, [https://arxiv.org/pdf/2505.09598?](https://arxiv.org/pdf/2505.09598)
49. Simon Willison on ai-energy-usage, accessed March 23, 2026, [https://simonwillison.net/tags/ai-energy-usage/](https://simonwillison.net/tags/ai-energy-usage/)
50. What's the environmental cost of that Gemini prompt? Google ran the numbers - RCR Wireless News, accessed March 23, 2026, [https://www.rcrwireless.com/20250821/fundamentals/gemini-prompt-google](https://www.rcrwireless.com/20250821/fundamentals/gemini-prompt-google)
51. Measuring the environmental impact of AI inference | Google Cloud Blog, accessed March 23, 2026, [https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference/](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference/)
52. Arizona - United States - U.S. Energy Information Administration (EIA), accessed March 23, 2026, [https://www.eia.gov/states/AZ/analysis](https://www.eia.gov/states/AZ/analysis)
53. Arizona Electricity Generation Mix 2025 | Low-Carbon Power Data, accessed March 23, 2026, [https://lowcarbonpower.org/region/Arizona](https://lowcarbonpower.org/region/Arizona)
54. Microsoft to launch zero water consumption cooling for future data centers - Network World, accessed March 23, 2026, [https://www.networkworld.com/article/3621842/microsoft-to-launch-zero-water-consumption-cooling-for-future-data-centers.html](https://www.networkworld.com/article/3621842/microsoft-to-launch-zero-water-consumption-cooling-for-future-data-centers.html)
55. Microsoft and Digital Realty cut data center water use - Trellis, accessed March 23, 2026, [https://trellis.net/article/digital-realty-microsoft-take-water-out-of-data-centers/](https://trellis.net/article/digital-realty-microsoft-take-water-out-of-data-centers/)
56. Water-energy tradeoffs in data centers: A case study in hot-arid climates - ResearchGate, accessed March 23, 2026, [https://www.researchgate.net/publication/358737912_Water-energy_tradeoffs_in_data_centers_A_case_study_in_hot-arid_climates](https://www.researchgate.net/publication/358737912_Water-energy_tradeoffs_in_data_centers_A_case_study_in_hot-arid_climates)
57. PUC 2025 Electric Power Outlook Report Underscores Planning for Pennsylvania's Changing Energy Landscape - Public Utility Commission, accessed March 23, 2026, [https://www.puc.pa.gov/press-release/2025/puc-2025-electric-power-outlook-report-underscores-planning-for-pennsylvania-s-changing-energy-landscape-09122025](https://www.puc.pa.gov/press-release/2025/puc-2025-electric-power-outlook-report-underscores-planning-for-pennsylvania-s-changing-energy-landscape-09122025)
58. Power Demand Forecasts Revised Up for Third Year Running, Led by Data Centers - Grid Strategies, accessed March 23, 2026, [https://gridstrategiesllc.com/wp-content/uploads/Grid-Strategies-National-Load-Growth-Report-2025.pdf](https://gridstrategiesllc.com/wp-content/uploads/Grid-Strategies-National-Load-Growth-Report-2025.pdf)
59. 2025 PJM Long-Term Load Forecast Report, accessed March 23, 2026, [https://www.pjm.com/-/media/DotCom/library/reports-notices/load-forecast/2025-load-report.pdf](https://www.pjm.com/-/media/DotCom/library/reports-notices/load-forecast/2025-load-report.pdf)
60. IFO - File Download - Independent Fiscal Office, accessed March 23, 2026, [https://www.ifo.state.pa.us/download.cfm?file=Resources/Documents/Electricity_Update_RB_2026_03.pdf](https://www.ifo.state.pa.us/download.cfm?file=Resources/Documents/Electricity_Update_RB_2026_03.pdf)
61. Pennsylvania - United States - U.S. Energy Information Administration (EIA), accessed March 23, 2026, [https://www.eia.gov/states/PA/analysis](https://www.eia.gov/states/PA/analysis)
62. Projected Emission factors for New York State Grid Electricity - nyserda - NY.Gov, accessed March 23, 2026, [https://www.nyserda.ny.gov/-/media/Project/Nyserda/Files/Publications/Energy-Analysis/22-18-Projected-Emission-Factors-for-New-York-Grid-Electricity.pdf](https://www.nyserda.ny.gov/-/media/Project/Nyserda/Files/Publications/Energy-Analysis/22-18-Projected-Emission-Factors-for-New-York-Grid-Electricity.pdf)
63. Anthropic's Claude 3.7 Sonnet is available on Vertex AI | Google Cloud Blog, accessed March 23, 2026, [https://cloud.google.com/blog/products/ai-machine-learning/anthropics-claude-3-7-sonnet-is-available-on-vertex-ai](https://cloud.google.com/blog/products/ai-machine-learning/anthropics-claude-3-7-sonnet-is-available-on-vertex-ai)
64. This Is Taking Too Long - Investigating Time as a Proxy for Energy Consumption of LLMs, accessed March 23, 2026, [https://arxiv.org/html/2603.15699v1](https://arxiv.org/html/2603.15699v1)
65. US power demand seen hitting records through 2026 - Energies Media, accessed March 23, 2026, [https://energiesmedia.com/us-power-demand-hitting-records-through-2026/](https://energiesmedia.com/us-power-demand-hitting-records-through-2026/)
66. Impact of PJM's 2025/2026 Capacity Market and Reliability Must-Run Units on Maryland Electric Customers | Synapse Energy, accessed March 23, 2026, [https://www.synapse-energy.com/impact-pjms-20252026-capacity-market-and-reliability-must-run-units-maryland-electric-customers](https://www.synapse-energy.com/impact-pjms-20252026-capacity-market-and-reliability-must-run-units-maryland-electric-customers)
67. electric power outlook for pennsylvania 2024–2029, accessed March 23, 2026, [https://www.puc.pa.gov/media/3586/final-draft-2025-epo-2024-2029-8-2025.pdf](https://www.puc.pa.gov/media/3586/final-draft-2025-epo-2024-2029-8-2025.pdf)
68. 2026 - PJM Load Forecast Report, accessed March 23, 2026, [https://www.pjm.com/-/media/DotCom/library/reports-notices/load-forecast/2026-load-report.pdf](https://www.pjm.com/-/media/DotCom/library/reports-notices/load-forecast/2026-load-report.pdf)
69. Environmental Sustainability Report 2025 - Microsoft, accessed March 23, 2026, [https://www.microsoft.com/en-us/corporate-responsibility/sustainability/report/](https://www.microsoft.com/en-us/corporate-responsibility/sustainability/report/)