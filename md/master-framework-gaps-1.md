# Ireland Trip — Gap Analysis
## Reference Itinerary: master-framework-1.md
## Traveler Profile: Retired couple — 66M (average endurance, limiting factor) + 62F (good shape), fully mobile, low-stress preference

---

**Parameters used:**
- `{traveler_profile}`: Retired couple, 66M average shape/endurance (limiting factor), 62F good shape, fully mobile, low-stress
- `{alignment_criteria}`: Low-stress, high cultural value/depth, high-reward
- `{gap_limit}`: 7 (raised from default 5 — consequence severity warranted full surface)
- `{data_sources}`: 8 JSON files (poi_extracted_1 through poi_extracted_8)
- `{reference_itinerary}`: master-framework-1.md

---

## Gap Analysis (Top 7 of 7)

---

### Gap 1 — Kilmainham Gaol Booking Deadline

- **Type**: Operations
- **Itinerary segment affected**: May 29 (Dublin Day 2) — Kilmainham Gaol listed as major sight
- **What's missing**: Confirmed booking status and precise booking lead-time for the May 29 date, which falls on the Ireland June Bank Holiday weekend (bank holiday is June 1, but holiday demand typically inflates the preceding Friday–Sunday). Kilmainham tours are guided-only with capped group sizes; the site routinely sells out 28+ days in advance under normal conditions. No booking confirmation is documented in the data.
- **Consequence if unresolved**: Arrival at Kilmainham on May 29 without a pre-booked slot is near-certain to result in no entry. This is the single highest-consequence unresolved booking in the itinerary — losing Kilmainham removes the anchor cultural experience of Dublin Day 2.
- **Suggested research prompt**: "What is the exact booking lead time for Kilmainham Gaol guided tours in late May / early June 2026? Does demand spike for the June Bank Holiday weekend? Is there a same-day standby queue, and if so, what arrival time is recommended? Book directly at kilmainhamgaol.ie or confirm availability now for May 29."

---

### Gap 2 — May 31 Drive-Day Transit Timing (Kilkenny → Cashel → Blarney → Cork)

- **Type**: Logistics
- **Itinerary segment affected**: May 31 full drive day — Rock of Cashel + Blarney Castle en route to Cork
- **What's missing**: Actual time budget for both stops given their combined visit durations, drive segments between them, and known crowd conditions. Rock of Cashel: minimum 1.5–2 hrs on-site. Blarney Castle: 1.5–2 hrs including queue for the Blarney Stone, which runs 45–90 min on busy days (Blarney is one of Ireland's highest-throughput tourist sites). Drive segments: Kilkenny → Cashel ~45 min, Cashel → Blarney ~1 hr, Blarney → Cork ~30 min. Total implied day: 7–8 hrs. No time plan is documented. May 31 is a Sunday — Blarney queue data for Sundays in the bank holiday weekend is absent from the data set.
- **Consequence if unresolved**: If the day runs late, one stop is likely dropped. Blarney Castle is the higher-effort POI (grounds, steep tower staircase, Blarney Stone queue). Without a time plan, the travelers may rush both sites or arrive in Cork after dinner service.
- **Suggested research prompt**: "What are the recommended arrival windows at Rock of Cashel and Blarney Castle on a Sunday in late May / early June to minimize queues? Does Blarney Castle require pre-booking? What is the realistic combined visit duration for both sites for a low-stress pace? Are there timed-entry slots available at either location?"

---

### Gap 3 — Cork Sunday Programming (English Market Closed)

- **Type**: Operations
- **Itinerary segment affected**: May 31 evening / June 1 morning — Cork stay (Shandon Bells Guest House)
- **What's missing**: The English Market — Cork's primary food/culture draw and a natural first morning stop — is CLOSED on Sundays. The itinerary does not document this constraint, nor does it identify alternative Sunday-accessible Cork programming. The data flags the closure but no Sunday alternatives are explicitly planned.
- **Consequence if unresolved**: Travelers arrive in Cork on Sunday evening (May 31) and have Sunday morning (June 1) before departing for Killarney. Without a planned alternative, the Cork stay loses its primary cultural anchor. St Fin Barre's Cathedral, Crawford Art Gallery (check Sunday hours), Honan Chapel, and Nano Nagle Place are all viable Sunday alternatives documented in the data but unscheduled.
- **Suggested research prompt**: "What are the Sunday opening hours for Crawford Art Gallery, St Fin Barre's Cathedral, Honan Chapel, and Nano Nagle Place in Cork? Which are walkable from the Shandon Bells Guest House area? Identify the best 2-hour Sunday morning cultural circuit in Cork city for a low-stress retired couple, given the English Market is closed."

---

### Gap 4 — Ross Castle June 1 Access (Bank Holiday First-Come-First-Served)

- **Type**: Operations / Seasonal
- **Itinerary segment affected**: June 1 — Ross Castle listed as a stop en route Killarney → Dingle
- **What's missing**: June 1 is the Ireland June Bank Holiday. Ross Castle (OPW site, guided tours only) operates first-come-first-served on peak days and bank holidays. No pre-booking mechanism exists for Ross Castle. Queue wait times on bank holidays can reach 1.5–2 hrs. The data notes this constraint but no arrival time or contingency is documented.
- **Consequence if unresolved**: If the travelers arrive mid-morning on the bank holiday, they may face a prohibitive queue that conflicts with the Dingle arrival target and the West Kerry Sheepdogs booking (if pre-booked for June 1 afternoon). The exterior grounds and lake views are accessible without a tour — but interior access could be lost entirely.
- **Suggested research prompt**: "What is the recommended arrival time at Ross Castle on a June Bank Holiday to avoid a long queue? Is there any pre-booking option for OPW Ross Castle tours? What is the tour duration and last tour time? Is the lakeside exterior walk worthwhile as a standalone activity if the tour queue is too long?"

---

### Gap 5 — West Kerry Sheepdogs Pre-Booking Availability (June 1)

- **Type**: Operations
- **Itinerary segment affected**: June 1 (Dingle, Night 1) — West Kerry Sheepdogs listed as activity
- **What's missing**: West Kerry Sheepdogs is a small-capacity, family-run operation. It is unknown whether the June 1 session is available and pre-booked, or still open. Given the June Bank Holiday weekend, June 1 is a high-demand date for all Kerry activities. No booking confirmation is documented in the data.
- **Consequence if unresolved**: West Kerry Sheepdogs is one of the highest-net-value activities in the Dingle segment (experiential gain 9.0, Net 7.5 in the scoring table). If not pre-booked and the June 1 slot fills, the activity is lost with no direct equivalent available on short notice in the area.
- **Suggested research prompt**: "Confirm availability and pre-booking process for West Kerry Sheepdogs on June 1, 2026. What time slots are typically offered? Is advance booking required or strongly recommended? Website or booking contact for West Kerry Sheepdogs."

---

### Gap 6 — Inis Mór Ferry Return Timing vs. Galway Folk Festival (June 5 Evening)

- **Type**: Logistics
- **Itinerary segment affected**: June 5 — Inis Mór day trip + potential Galway Folk Festival evening event
- **What's missing**: Last ferry departure time from Inis Mór back to Rossaveal/Galway, and whether the travelers can realistically return in time for a 19:30 evening event (e.g., Lisa O'Neill at Townhall Theatre, identified as the highest-net-value evening event in the dataset). The data documents the ferry crossing as 40 min each way from Rossaveal + 1 hr drive from Galway, but last departure times from the island are not captured. June 5 is a Saturday — ferry demand may affect last-boat availability if not pre-booked for the return.
- **Consequence if unresolved**: If the last Inis Mór ferry departs at 18:00 or later, the 19:30 Galway event is unreachable. Conversely, if last ferry is 17:00, there is time to return for a 19:30 event. Without this data, the travelers cannot plan whether to attempt both. Missing the Lisa O'Neill concert represents a loss of the top-ranked evening event in the full dataset.
- **Suggested research prompt**: "What is the last ferry departure time from Inis Mór (Kilronan) back to Rossaveal on a Saturday in early June 2026? Are return ferry slots bookable in advance and how far out do they fill? Can a day-trip to Inis Mór realistically allow return to Galway city by 19:00?"

---

### Gap 7 — Giant's Causeway Pre-Booking Requirement (June 7)

- **Type**: Operations
- **Itinerary segment affected**: June 7 — Giant's Causeway listed as stop en route Donegal → Belfast
- **What's missing**: Giant's Causeway Visitor Centre operates a timed-entry ticketing system managed by the National Trust. Parking also requires pre-booking in peak season. June 7 is a Sunday in peak early-summer season. No booking confirmation is documented in the data. The causeway stones themselves are free to access via the coastal path, but the visitor centre (essential for context) and shuttle bus require tickets.
- **Consequence if unresolved**: Arriving without pre-booked tickets on a peak Sunday risks: (a) no visitor centre access, (b) no shuttle bus (significant uphill walk each way, effort cost concern for 66M), (c) parking unavailable at the main car park. The Belfast arrival window (and Belfast Black Taxi Tour scheduled for June 7 evening) tightens this day further.
- **Suggested research prompt**: "Does Giant's Causeway Visitor Centre require advance ticket booking in June 2026? Is the shuttle bus separately bookable? What is the recommended arrival window to avoid peak crowds on a Sunday morning? Is there an accessible alternative parking or drop-off point if the main car park is full? Book via nationaltrust.org.uk if pre-booking is confirmed as required."

---

## Summary Table

| # | Gap | Type | Day | Consequence | Priority |
|---|-----|------|-----|-------------|----------|
| 1 | Kilmainham Gaol booking | Operations | May 29 | Miss anchor Dublin sight | CRITICAL — act now |
| 2 | May 31 drive-day timing | Logistics | May 31 | Drop a site or rush both | HIGH |
| 3 | Cork Sunday programming | Operations | May 31–Jun 1 | Cork stay loses cultural anchor | HIGH |
| 4 | Ross Castle bank holiday queue | Operations/Seasonal | Jun 1 | Long wait or no interior access | SIGNIFICANT |
| 5 | West Kerry Sheepdogs booking | Operations | Jun 1 | Lose highest-value Dingle activity | SIGNIFICANT |
| 6 | Inis Mór ferry return time | Logistics | Jun 5 | Can't plan Folk Festival evening | SIGNIFICANT |
| 7 | Giant's Causeway pre-booking | Operations | Jun 7 | No visitor centre + shuttle access | SIGNIFICANT |

---

Total gaps found: 7
Gaps surfaced: 7
**Recommendation: Address Gap 1 first — booking window for Kilmainham Gaol on a bank holiday weekend may already be at or past the 28-day threshold. All other gaps are researchable within the next 1–2 weeks.**
