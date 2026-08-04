# The Collapse of Implementation Cost

In February 2025, Andrej Karpathy posted a tweet introducing a new way of coding — one where you "fully give in to the vibes, embrace exponentials, and forget that the code even exists." He wrote that he accepts every diff the agent produces without reading it, and that when an error comes up he just pastes the message straight back in. The tweet passed 4.5 million views and left behind a name: vibe coding ([a history of the term](https://www.coderabbit.ai/blog/a-semantic-history-how-the-term-vibe-coding-went-from-a-tweet-to-prod)).

What matters is that this was neither cynicism nor a joke. It was an observation that a moment had arrived in which something real actually gets finished even when you accept everything without reading a single line. Which means the first thing to work out is exactly what became that cheap.

## What Actually Got Cheaper

What got cheaper beyond doubt is **the cost of bringing a first version into existence**. The distance from a blank screen to something that runs; prototypes; boilerplate; the first connection to an unfamiliar library. A stretch that used to take a day now takes minutes.

But the more important change sits right next to it: **the cost of throwing work away collapsed toward zero as well.** An approach you spent two hours on is one you cling to because discarding it hurts; an approach that took twenty minutes you can delete without regret and rebuild in another direction. Actually building three things before choosing one became, for the first time, a realistic option. This is a point we will return to in Part 3, when we revisit how you decide what to bet on.

The shift shows up in organization-level telemetry too. Faros AI analyzed data from 1,255 teams and roughly 10,000 developers and found that teams with high AI adoption merged 98% more PRs ([Faros AI](https://www.faros.ai/blog/best-ai-coding-agents-2026)). The sheer volume of code being produced and coming in has, in fact, nearly doubled.

## What Did Not Get Cheaper

If the story stopped here, there would be only one conclusion: build instead of planning. And yet one of the most solid measurements from the same period points in exactly the opposite direction.

In July 2025, METR ran a randomized controlled trial in which 16 experienced open-source developers worked on 246 real issues in repositories they had maintained for a long time. Under the condition where AI tools were allowed, they finished their tasks **19% more slowly**. What deserves closer attention is what came next. Even after the experiment ended, participants believed they had been about 20% **faster**. A 39-percentage-point gap had opened between perception and measurement ([METR, arXiv:2507.09089](https://arxiv.org/abs/2507.09089)).

This result does not overturn the previous section. The two diverge on conditions. Generation did get faster, and that gain lands fully in your hands when you accept code without reading it. But in a codebase someone has long been responsible for, at the moment you have to understand an incoming change, review it, and merge it under your own name, the cost that had been removed comes back under a different line item. In other words, "the cost of implementation converges on zero" is a **conditional truth**. It is zero exactly to the extent that you do not verify, and the bill returns to the extent that you start checking and taking responsibility.

And what the 39-point gap tells us is that we are bad at seeing that returned cost ourselves. This is precisely why perceived speed is not a safe basis for redesigning a process.

## The Namer's Retreat

The person who arrived at the same conclusion by another route is the one who coined the term. About a year after the tweet, in February 2026, Karpathy set the vibe coding framing down and moved to agentic engineering. Not because the tools got worse, but because as the tools crossed a quality threshold, the framing began leading people somewhere wrong.

> "Vibe coding is about raising the floor. Agentic engineering is about holding the quality baseline of professional software. Having vibe coded is not a license to let vulnerabilities in. You are still responsible for your own software."

> "Agents today are like interns. Taste, judgment, sensibility, and supervision still have to stay with you."
>
> — Andrej Karpathy ([Sequoia Ascent 2026](https://karpathy.bearblog.dev/sequoia-ascent-2026/))

The migration of the term over a single year is itself a piece of testimony. The floor of what can be built this way has clearly risen, but the seat where someone has to hold onto what was built did not disappear — it only changed location. The namer himself is pointing at that new location with the words "responsibility" and "supervision."

So where exactly did the cost move to? In the next chapter we will work through the three resources that have newly become scarce.
