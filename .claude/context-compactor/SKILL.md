---
name: context-compactor
description: Distills large conversation histories, multi-document sets, or accumulated agent state into token-efficient structured summaries preserving decisions, open tasks, code artifacts, and session continuity. Use whenever the user says /compact, condense context, summarize for continuation, compress this session, optimize tokens, or save context. Also trigger when session length approaches 70% of the context window, when resuming work from a prior session, when the user pastes a prior conversation to continue from, or when switching tasks within a long session. Works as a manual alternative to built-in compaction across Claude.ai, Claude Code, and API.
---

# Context Compactor

## Why This Skill Exists

As conversations grow long, older details compete with recent instructions for influence on responses. This "context rot" degrades performance — Claude may forget decisions, re-explain settled topics, or lose track of open tasks. Compaction counteracts this by replacing verbose history with a high-density structured summary, freeing token budget for new work while preserving everything that matters.

The goal: after compaction, anyone reading only the compacted output should be able to continue the work seamlessly without asking "what were we doing?"

## Instructions

### Step 1: Assess the Input

Before compacting, understand what you're working with:

- **Input type**: Conversation transcript? Document set? Mixed agent state with tool outputs? Codebase exploration log?
- **Current user goal**: What is the user actively trying to accomplish? This anchors every retention decision — content that doesn't trace to this goal (or a plausible next goal) is a pruning candidate.
- **Retention priorities**: Has the user indicated what matters most? ("keep all the SQL queries", "preserve the timeline", "focus on architecture decisions")
- **Target compression**: Default is 75% reduction (output ≈ 25% of input tokens). Adjust if the user specifies otherwise or if must-keep content is unusually dense.

Infer these from context whenever possible. Only ask for clarification if the input is genuinely ambiguous — for instance, a disconnected set of documents with no obvious thread.

### Step 2: Score Content Using the Recency Gradient

Context compaction follows a recency-gradient model — recent events stay vivid and detailed, older events compress into outcomes and causal links. This mirrors how effective human note-taking works: you don't transcribe everything, you capture what you'll need later.

**Three compression zones:**

| Zone | Scope | Treatment |
|------|-------|-----------|
| **Recent** (last 5–10 exchanges) | Active working memory — latest instructions, current errors, code just written | Keep verbatim or lightly edited. Exact wording prevents misunderstandings. |
| **Mid-history** | Earlier work that produced current state | Condense to key events + outcomes. "Refactored auth module → chose JWT → implemented in `src/auth/jwt.ts`." Strip deliberation, keep decisions. |
| **Early history** | Session origin and initial setup | Single-line causal links. "Session goal: build inventory REST API. Scaffolding completed in first 15 turns." Only what explains why the current state exists. |

**Content that survives compression regardless of age:**
- Explicit decisions and their rationale
- Unresolved tasks, blockers, and next steps
- Architectural constraints and invariants ("using PostgreSQL not MongoDB"; "must support IE11")
- Code snippets, file paths, and modification records
- Data artifacts: tables, JSON structures, configuration values
- User-stated session preferences ("use TypeScript", "no semicolons", "explain briefly")
- Unresolved error states

**Content eligible for pruning:**
- Redundant explanations (keep the best version if a concept was explained multiple times)
- Superseded attempts (note that they failed and why; discard implementation details)
- Verbose tool output that led to a simple conclusion ("47 tests passed" replaces the full log)
- Pleasantries, acknowledgments, and filler exchanges

### Step 3: Compress and Assemble

Apply the three-zone gradient from Step 2 and produce output using the structured template below. Structured output matters here because it's dramatically easier to scan, update, and re-compact than prose — information doesn't hide in paragraphs.

Adapt section lengths to the content. Some sessions are decision-heavy with few artifacts; others are the reverse. Omit empty sections rather than including placeholders.

**Output template:**

```
CONTEXT COMPACTION v2.0
Original: ~[X,XXX] tokens → Compacted: ~[Y,YYY] tokens ([Z]% reduction)
Trigger: [user request | threshold | session handoff]
Active goal: [one-sentence restatement of current objective]

## Working State
[One paragraph — the "you are here" marker. What was just accomplished, what's
in progress, what's about to happen next.]

## Decisions & Constraints
- [Decision or constraint with brief rationale] (source: [provenance])
- [...]

## Open Tasks & Blockers
1. [Unresolved action — owner/status if known]
2. [...]

## Key Artifacts
[Code blocks, tables, JSON, file paths, config values at full fidelity.
Group by type if numerous.]

## Session Timeline (Most Recent First)
- [Recent]: [what happened]
- [Mid-session]: [event → outcome]
- [Early]: [one-line origin summary]

## Pruned Content
- [What was removed and why — enables recovery if needed]

---
Compacted: [date/time] | Source: [input description]
Next compaction recommended at ~70% of remaining context window
```

### Step 4: Self-Verify

Before delivering, confirm:
- Every must-keep item from Step 2 is present in the output
- No new facts, analysis, or recommendations were invented — compaction is distillation, not synthesis
- The output reads as standalone: could someone continue the work using only this summary?
- Token reduction meets or exceeds the target ratio
- Important items have provenance markers (e.g., "early session", "turn ~30", "from requirements.md")

If verification reveals gaps, fix them before delivering. A slightly over-target output is better than a lossy one.

## Examples

**Example 1: Coding session (45 turns → compacted)**

```
CONTEXT COMPACTION v2.0
Original: ~38,000 tokens → Compacted: ~8,200 tokens (78% reduction)
Trigger: user request (/compact)
Active goal: Complete CRUD endpoints for inventory API with PostgreSQL backend

## Working State
All four CRUD endpoints for `/api/products` are implemented and tested.
Currently debugging a 500 error on PATCH when updating nested category
objects — traces to a missing foreign key constraint in migration 001.

## Decisions & Constraints
- PostgreSQL over MongoDB (user preference, early session)
- Express.js with TypeScript strict mode (turn ~5)
- RESTful only, no GraphQL (turn ~8)
- Using `pg` driver directly, not Prisma (user preference after ORM discussion)
- Auth deferred to next sprint — no middleware yet (turn ~12)

## Open Tasks & Blockers
1. Fix PATCH /api/products/:id foreign key error on category update [active]
2. Add input validation with Zod [planned]
3. Write integration tests for all endpoints [planned]

## Key Artifacts
src/
├── routes/products.ts     ← all CRUD handlers
├── db/migrations/001.sql  ← current schema
├── db/pool.ts             ← connection config
└── types/product.ts       ← TypeScript interfaces

## Session Timeline (Most Recent First)
- [Recent] Debugging PATCH 500 — identified missing FK constraint in migration
- [~Turn 30] Completed DELETE with soft-delete pattern
- [~Turn 20] Implemented GET with pagination and filtering
- [~Turn 10] Project structure, DB connection, initial migration
- [~Turn 3] Tech stack discussion → Express + TS + PostgreSQL

## Pruned Content
- Prisma vs raw SQL deliberation (3 turns; outcome in Decisions)
- Three iterations of pagination logic (final version retained in products.ts)
- Full test output logs (summary: 12/14 passing, 2 failures = PATCH bug)

---
Compacted: 2026-03-24 | Source: full conversation transcript
Next compaction recommended at ~70% of remaining context window
```

**Example 2: Research/document compaction**

When compacting a multi-document research session, the same template applies. "Key Artifacts" holds data tables, quotes, or citations instead of code. The timeline tracks discovery milestones instead of implementation steps. "Decisions & Constraints" captures methodology choices and inclusion/exclusion criteria.

**Example 3: Resuming from a prior session**

If the user pastes a previous compaction or session notes and says "pick up where I left off," treat the pasted content as input and either:
- Use it directly as working context if it's already well-structured
- Re-compact it if it's stale, verbose, or missing the current goal

## Troubleshooting

**Output exceeds 25% of original size**: Revisit archive-eligible content. Common culprits: preserving full tool output logs, keeping multiple versions of the same artifact, or retaining resolved back-and-forth discussions. Compress these more aggressively.

**Critical context missing after compaction**: A must-keep item was likely miscategorized during scoring. When uncertain whether something matters, keep it — slightly exceeding the target ratio is better than losing something the user needs.

**Very short conversation (under ~20 exchanges)**: Compaction adds overhead with minimal benefit. Tell the user the conversation is short enough that compaction isn't needed yet. Proceed if they insist.

**Mixed input types (conversation + documents + tool output)**: Process each type through the same three-zone model. Note the source type in provenance markers so nothing gets misattributed across sources.

**User wants selective compaction**: If the user says "compact everything except the database schema discussion," honor that constraint. Move the exempted content into the Recent zone regardless of its actual age.
