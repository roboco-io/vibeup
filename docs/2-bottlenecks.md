# The Three New Bottlenecks

What happens in a factory when you double the speed of one production line? Total output almost never doubles. Instead, inventory starts piling up behind that line. The bottleneck did not disappear; it moved to the next station, and the factory's pace is now set by whatever happens there.

That was the question left hanging at the end of the last chapter: if the cost of implementation went down, where did it go? This chapter walks through the three places where the inventory piled up. Later chapters will use these three names without redefining them.

## The First Bottleneck: Verification and Review

Unfold the Faros AI data cited in the previous chapter a little further and the trace of the move is right there. On teams with high AI adoption, merged PRs rose 98% and completed work items rose 21%. On those same teams, time spent on PR review rose 91%, average PR size grew 154%, and bugs rose 9% ([Faros AI](https://www.faros.ai/blog/best-ai-coding-agents-2026)).

Line the numbers up and the story is clear. Much of what was earned twofold on the generation side is being spent right back in the review queue. On top of that, the incoming PRs are twice as numerous and two and a half times as large each, so the total volume of code one person has to read climbs far more steeply. The structure is one where organizational gains get absorbed at a single point: review.

The more awkward part is that the reading itself has gotten harder. Code written by a person shows its clumsiness when it is clumsy. **Code written by AI, by contrast, is plausible enough to pass a skim — which is exactly what makes it harder to review.** Because the wrong parts do not look wrong, catching a bad assumption or a missing edge case requires reading along the intent rather than scanning the prose. In one survey, senior developers spent an average of 4.3 minutes reviewing a single piece of AI-generated code against 1.2 minutes for human-written code ([LogRocket](https://blog.logrocket.com/ai-coding-tools-shift-bottleneck-to-review/)). Reading the same amount takes more than three times the attention.

So verification did not automatically get cheaper just because generation did. If anything, the per-unit cost went up while the volume doubled.

## The Second Bottleneck: Attention and Focus

The second resource is the human attention that goes into choosing what to build.

Back when building took two days, the idea list filtered itself. Most ideas could not survive their own cost and fell away before anyone started, and that attrition effectively made the prioritization decision for you. That filter is gone now. Any halfway reasonable idea takes shape in an afternoon, so the question "can we build this?" no longer screens out anything at all. When anything can be built, **what not to build** becomes nearly the whole of the decision.

There is a more dangerous wrinkle attached to this: building has become fun. David Heinemeier Hansson's warning, touched on briefly in the introduction, becomes the main point here. What he singled out was not the quality of the tools but the rhythm they produce. In an environment where output comes back within seconds, the act of entering the next prompt is itself the reward, and the dopamine loop that forms works addictively — raising, rather than lowering, the risk of burnout ([Pragmatic Engineer interview](https://newsletter.pragmaticengineer.com/p/dhhs-new-way-of-writing-code)). The first thing pushed aside when you cannot stop is the time spent asking why you are building this at all.

The counterweight comes from his business partner. Jason Fried argues that speed, commit counts, and headcount — even headcount that includes agents — do not make a product fundamentally better ([37signals](https://37signals.com/podcast/bring-your-ai-agents/)). Nothing guarantees that a product built more is a product built better. And yet today's tools remove friction only on the side of building more. The friction on the side of selecting stays where it was, and the resource that does the selecting is a person's focus, of which there are only a few hours a day.

## The Third Bottleneck: Complexity Debt

The third is the item whose invoice arrives only after time has passed.

There is an old proposition that code is a liability, not an asset. Code costs you something merely by existing. It has to be read, understood, traced through its dependencies, and updated when a vulnerability turns up. Back when generation was expensive, this proposition was somewhat rhetorical. Because building was hard, the volume built was naturally limited, and debt accumulated only as fast as you could carry it.

When generation gets cheap, accumulation gets cheap. The cost of maintaining what accumulated does not get cheap alongside it. What a feature bolted on in twenty minutes leaves behind is not those twenty minutes but the maintenance and security updates payable for as long as that code stays alive, plus the extra cognitive load carried by everyone who ever tries to understand this system. Whoever next tries to change something nearby has to make judgments across a correspondingly wider surface. That may be you a few months from now, or an agent.

There is also a loop here running back to the first two bottlenecks. The more complex the system, the more context a single change requires to review, and the more interactions have to be weighed when deciding what to build. What was easy to make later makes verification more expensive and eats more attention. For this item there is not yet a solid figure worth citing the way there is for the other two. But the structure — accumulation speeding up several times over while repayment speed stays put — is clear enough without numbers.

## What the Three Have in Common

Set the three resources side by side and one thing they share stands out. All three sit on the human side, and all three are finite. Compute grows if you pay more, but the attention available for review, the focus available for judgment, and the capacity to hold a system in your head do not grow when you raise the budget. The place the bottleneck moved to turned out to be a resource that does not scale.

And this is exactly where Shape Up comes back in. The original was, from the start, a book about treating a finite resource as a budget. The device for setting that budget was appetite, and back then the budget's unit was time ([Chapter 3: Set Boundaries](https://basecamp.com/shapeup/1.2-chapter-03)). If the finite resource is no longer time alone, what has to be discarded is not the device but the unit it counts in. The next chapter rewrites appetite as a budget across all three resources.
