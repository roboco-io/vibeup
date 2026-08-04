# Shaping Is Still Human Work

The original book summed up the state a shaped idea has to reach in three words. It is rough, solved, and bounded ([Chapter 2: Principles of Shaping](https://basecamp.com/shapeup/1.1-chapter-02)). Rough, because the details are left open for the builders to fill in. Solved, because the key elements and how they connect are already settled, so nobody loses the thread. Bounded, because what will *not* be built is nailed down alongside what will.

Those three words were originally addressed to people. Yet once the builder shifted from a person to an agent, the same three words became more precise, not less.

## The Rediscovery of Spec-First

The industry's answer to the failure modes vibe coding left behind was spec-driven development: treat the specification as the primary artifact and the code as an output you can regenerate from it. The prototype of the idea was already present in AWS's AI-DLC in November 2024 ([AI-DLC implements spec-driven development](https://buildwithdc.substack.com/p/aidlc-implements-spec-driven-development)). In 2025 GitHub released Spec Kit, pinning specification, planning, tasks, and implementation into ordered stages ([GitHub blog](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)), and in July of the same year AWS shipped Kiro, which asks you to write requirements in EARS notation. By 2026 every major coding tool had a version of this structure built in.

Seen through Shape Up eyes, none of this is unfamiliar. Fix what will be built first, hand off the implementation whole on the strength of that document, and stay out of the details after the handoff — the structure is identical. Writing a pitch and entrusting it to a team, and writing a spec and entrusting it to an agent, have the same shape.

The destination was the same; the reasons for setting out were not. Shape Up chose this structure to guarantee shipping within six weeks; spec-first chose it to prevent the accident of an agent building the wrong thing. Two different problems converging on the same answer is evidence that this structure is closer to a principle than to a tool.

## The Pitch Becomes the Briefing Document As-Is

The five ingredients of a pitch, as the original defines them, are the problem, the appetite, the solution, the rabbit holes, and the no-gos ([Chapter 6: Write the Pitch](https://basecamp.com/shapeup/1.5-chapter-06)). Read that list again today and it is indistinguishable from the fields you have to fill in when you hand work to an agent. There is no need to invent a new template. One already exists. But the last two ingredients change meaning substantially.

Rabbit holes were originally risks the shaper found in advance and filled in ([Chapter 5: Risks and Rabbit Holes](https://basecamp.com/shapeup/1.4-chapter-05)). For a human team, a warning — "fall in here and you lose the cycle" — was enough. People who walk into a dead end generally stop on their own and come back to ask. Agents do not stop; they keep producing plausible answers even where the grounds for them are thin. So VDLC's pitch template rewrites this field. A rabbit hole is an explicit declaration of the stretch where the agent must escalate to a human rather than decide for itself.

The change in the status of no-gos is larger still. For a human team, no-gos were a nice safeguard to have. Even unwritten, the team mostly wouldn't build those things. With agents there is no "mostly." An agent will always do what you have not explicitly forbidden, which is why VDLC's annotation on this field says it is the single most important ingredient of the pitch and that you should write at least three. What used to be listed fifth has moved to first.

## The Level of Abstraction Is Still "Just Right"

If agents cause accidents by filling blanks arbitrarily, the natural thought is to leave no blanks — to write more detail. In practice it goes the other way. A spec drawn down to wireframe fidelity closes off, in advance, the room an agent has to find a better approach. The original's advice to leave only intent in a fat marker sketch is more valid than before, precisely because filling in the details got faster.

VDLC formalizes this instinct as a principle it calls intent resolution, and it borrows the original's three words verbatim to do so. A wireframe is too concrete and kills the agent's exploration; a one-line requirement is too abstract and the agent fills it in arbitrarily; so breadboarding, which defines only affordances and connections, is the right resolution. And it promotes the pitch from a document that persuades people to an executable primary artifact the agent consumes directly ([VDLC weekly cycle](https://vdlc.roboco.io/ko/cycle)). This principle applies to structure and logic, though, with UI and look-and-feel as the exception. Taste is not something for the agent to explore but something for a human to settle.

The way shaping itself is done changes too. The original refined solutions through sketches and prose because building something cost more than talking about it. Vibe coding flipped that inequality, and so shaping in VDLC is not documentation work but an experimental activity with prototype rounds built into it. When you need to confirm a direction, you run a convergent round: build one, use it, revise, repeat. When you need to adjudicate a matter of taste that is hard to put into words, you run a divergent round: build two or three — up to five — prototypes of the same problem side by side and pick one. Prototypes are only instruments for deciding, so none of them go to production, winner included; only the settled intent moves into the pitch and gets built again during the build cycle.

In a divergent round, the human's job is not building but choosing — curation. Even the ceiling on how many you can line up is set not by compute but by the attention a person can actually spend comparing and judging, which is the same resource Chapter 3 put on the budget.

Which is why the line from Karpathy quoted in Chapter 1 — that agents are something like interns, and that taste and judgment, aesthetics and supervision, still have to stay in human hands ([Sequoia Ascent 2026](https://karpathy.bearblog.dev/sequoia-ascent-2026/)) — reads more accurately as a description of shaping than as advice about code review. Narrowing down what to build, writing down where to stop, and choosing one option among several: this is the work that does not get automated away.

If prototypes pull judgment forward and the pitch becomes an executable input outright, is there any reason left for the period that follows the pitch to be six weeks? In the first chapter of Part 3, we take the measure of the cycle again.
