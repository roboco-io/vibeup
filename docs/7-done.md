# Verification and the Definition of Done

The original's definition of done is one sentence: done means deployed. At the end of the cycle the team deploys its own work, and a team carrying several small projects ships them inside the cycle as they become ready ([Chapter 10: Hand Over Responsibility](https://basecamp.com/shapeup/3.1-chapter-10)). It was a declaration that handing work to the next person's queue is not done.

That definition was sufficient only on the premise that a person wrote the code themselves and ran it themselves. If generation is finished and the tests are green but nobody has read the code, can we call that done?

## Hill Chart → Delegability Map

The original has one tool for showing progress: the hill chart. Every task has two phases — the uphill, where you're figuring out what approach to take, and the downhill, where everything involved is in view and only execution remains. Plot each scope as a dot somewhere on the hill and you can see the situation without asking for a status update ([Chapter 13: Show Progress](https://basecamp.com/shapeup/3.4-chapter-13)).

VDLC changes what the same chart is for. What was a progress-reporting tool becomes a tool for dividing work between humans and agents. A scope on the uphill means unknowns remain, and if unknowns remain, human judgment is required, so it is not fully delegated to an agent. A scope on the downhill means the intent is settled, and if it is settled, execution can be handed over whole ([VDLC weekly cycle](https://vdlc.roboco.io/ko/cycle)).

That changes the weight of moving a dot over the crest as well. In the original it was a report — "I know how to do this now." In VDLC it is a declaration: "the intent of this scope has been described completely in the context documents." Something solved only inside your head is not downhill. Understanding that is not written down does not reach the agent, so the test here is the document, not the owner's confidence.

## QA Moves from the Edges to the Verification Gate

In the original, QA was the role that took the edges. The builder had already confirmed that the main flow works, so QA concentrated on finding exceptional situations, and the issues it surfaced came in as nice-to-haves by default, with only serious ones promoted to must-have ([Chapter 14: Decide When to Stop](https://basecamp.com/shapeup/3.5-chapter-14)).

That whole division of labor rests on a single premise: that a human implementer has already walked the main flow by hand. Agent-generated code carries no such premise, so a main flow can exist that nobody has ever stepped through. That is why verification in VDLC is promoted from a side activity done with leftover time to an explicit stage, with all of Day 4 from Chapter 5 assigned to it. New coding is banned that day; only fixes for defects found during verification are allowed.

The gate checks five items.

- Has the problem the pitch wrote down actually been resolved (compared against the baseline)?
- Are there no no-go violations?
- Has a human verified the main flow directly?
- Do the automated edge-case tests pass?
- Done = Deployed — is it deployed to the real environment?

This is where the first bottleneck named in Chapter 2 gets absorbed at the process level. The figure that PR review time rose 91% at teams with high AI adoption shows where the burden gets pushed when verification is left as an activity with no place in the schedule. Assigning it a day means paying that overage inside the cycle rather than in the evening.

## Scope Hammering → Context Hammering

Finishing inside a fixed period means cutting what's left. The original uses a stronger word than "trim" for this work: scope hammering. You ask again and again whether something is really a must-have, and anything judged not to be gets a tilde and is knocked down to nice-to-have ([Chapter 14: Decide When to Stop](https://basecamp.com/shapeup/3.5-chapter-14)).

The asking survives intact, but what gets cut changes. Deleting code accomplishes nothing as long as the same intent document remains, because the next generation brings it right back. So hammering in VDLC pounds on the context document, not the code. If you've decided to cut a use case, you don't delete the implementation — you take the item out of the intent document and regenerate. Hence the name context hammering.

The definition of done takes on a condition too. Regenerable is added to Done = Deployed: it is truly done only if the same thing can be built again from the context documents alone. The regeneration verification in cool-down from Chapter 5 measures this condition every week. If it deployed but regeneration fails, that cycle did not complete — it left context debt behind.

## When to Stop

Even so, the fact that there is more to do than there is time does not change. The original's answer was to change the direction of comparison. Don't look up and compare against an ideal finished version; look down and compare against the baseline — the awkward workaround customers are living with today, without this feature. If what you've built beats that, you can ship it.

This standard has nothing to do with how cheap implementation is, because it asks only whether the customer ends up better off than they are now. So this part of the original's answer needs no revision; the only thing that changed is the size of the temptation. Proposals to build more used to carry a price tag of weeks, which filtered them naturally. Now it takes an hour, and it's hard to find a reason to stop. Jason Fried's line, quoted in Chapter 2, is needed again here: neither speed, nor commit count, nor headcount makes a product fundamentally better. That you *can* build more is not a reason you *should*.

## Closing

The cost of implementation really did collapse, but it did not collapse uniformly everywhere, and new scarce resources — verification, attention, and complexity — moved into the vacated space (Part 1). Appetite and shaping were therefore not discarded but made heavier, with appetite changing its contents from a single currency of time to two, human attention and compute, and shaping changing from documentation into an activity with prototype rounds built in (Part 2). Cycle, bet, and the verdict on done were reassembled around a weekly heartbeat of a four-day build plus a one-day cool-down, and within it the circuit breaker moved into position as a return mechanism, the hill chart as a delegability map, and QA as a gate (Part 3).

Drawing that boundary line is as far as this goes. The next step is to lay the operating rules built on that line onto a real week, and the full definition of those rules lives in the [VDLC weekly cycle](https://vdlc.roboco.io/ko/cycle) document. Betting on Monday morning, standing up the gate on Thursday, and asking for a regeneration on Friday is a sufficient start.

The original's [conclusion](https://basecamp.com/shapeup/3.7-conclusion) ends with the hope that you can borrow some of its language and concepts even if you don't adopt the whole methodology. This guide ends in the same place. One thing to add: Karpathy, who coined the name vibe coding and set it down a year later, and DHH, who was first to say Shape Up's cycle was over, set out from opposite directions and arrived at the same conclusion. Building can be handed off, but the standard of quality has to stay in human hands. Which is what Shape Up was saying from the beginning.
