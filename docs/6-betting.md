# Rebuilding the Betting Table

In the original, a finished pitch does not go into a backlog. Before the cycle starts, the betting table convenes, and the only things on it are pitches from the last cycle plus pitches someone deliberately revived and brought back. The decision about what to put on the line for the next cycle is the bet, and pitches you decide not to bet on are let go rather than tracked ([Chapter 7: Bets, Not Backlogs](https://basecamp.com/shapeup/2.1-chapter-07), [Chapter 8: The Betting Table](https://basecamp.com/shapeup/2.2-chapter-08)).

If this meeting happens weekly instead of once every six weeks, how do the decisions on the table change?

## The Case Against Backlogs Gets Stronger

The original gave two reasons for refusing backlogs: that the more items pile up that you will never find time to touch, the more you feel permanently behind even when you aren't; and that the time spent reviewing and grooming stale ideas keeps you from pushing on the work that is timely now.

When implementation gets cheap, this argument doesn't weaken — it strengthens. It isn't only the cost of building that fell. The cost of writing an idea down fell too: ask an agent and a plausible list of candidate features comes back in seconds. But reading that list, sorting it, and judging whether an item is still valid still comes out of human attention. The resource named as the second bottleneck in Chapter 2 gets billed here. If the production rate of the list goes up by a factor of tens while the digestion rate stays flat, the backlog swells far faster and rots far faster than before.

So the original's alternative holds as it stands. Important ideas come back. If something truly matters, someone will bring it up again with its context attached; and if it was forgotten, it was never that important to begin with.

## A Bet Becomes an Option Purchase

A bet in the original was an expensive decision. It meant binding one team to one project for six weeks, and those six weeks could not be spent on anything else. Being irreversible, it demanded care, and care demanded that only a handful of well-shaped candidates reach the table.

When implementation gets cheap, that calculation changes. A bet moves closer to buying an option than to making a commitment. VDLC defines this shift as parallel betting: on a pitch with high uncertainty, you place two or three different approaches to the same pitch side by side and pick the winner inside the cycle ([VDLC weekly cycle](https://vdlc.roboco.io/ko/cycle)).

One condition rides along with this. The criteria for picking the winner are written into the document at Day 0, at betting time, in measurable form. They have to be criteria that yield the same answer no matter who looks later — p95 response latency, code regeneration success rate, whether a particular edge case passes. Deciding by taste after the fact is banned. If you choose the criteria after seeing all the results, parallel betting stops being comparison and becomes rationalization.

The currency that caps how many bets you can run in parallel is not compute. By compute alone you could run ten. The cap comes from human attention. The ceiling is the number a person can actually compare and adjudicate against the criteria written in the document, and the default is two or three. Within that, compute divides freely, as long as it stays under the pitch's total appetite.

The character of the betting table changes with it. In the original this meeting convened rarely and carried weight; in a weekly cycle it becomes a light Monday-morning ritual. What rides on a single decision is four days, not six weeks.

## The Solo Builder's Bet

A person building alone has no betting table. But they still have bets. There are simply no stakeholders to persuade; what to stake the week on still has to be decided.

If anything, the solo case is riskier. An organization has a physical ceiling in its number of teams, so the count of projects that can run at once is limited automatically. An individual running parallel agents has no such ceiling. The solo builder's scarce resource is their own attention, and it is the one resource being overdrawn without a limit.

So the solo version of the betting table is deciding for yourself how many bets you will run at once — imposing on yourself the rule that opening a new one requires closing or releasing another. Since nobody else will ask on your behalf, declaring an appetite is even more urgent than it is inside an organization. On the cycle-length side, the downward variant from Chapter 5 — a two-day build with a one-day cool-down — is already defined as the default for solo builders and small teams.

## Circuit Breaker → Context Breaker

The original has one device for keeping projects from dragging on: the circuit breaker. A project that didn't ship within its cycle is not extended automatically; by default it stops, and doing it again means winning at the next betting table ([Chapter 8: The Betting Table](https://basecamp.com/shapeup/2.2-chapter-08), circuit breaker section).

The original had already made the same diagnosis. If it didn't finish in six weeks, the shaping was wrong, so the circuit breaker pushes the work back into the shaping track to be reworked. In the meantime, though, the default behavior was still to stop.

What VDLC inverts is not the diagnosis but the default behavior and the trigger point. Instead of stopping, immediate return to the shaping track becomes the default. Rebuilding is already cheap; what is expensive is human time spent circling the same spot holding on to unclear intent.

Triggering does not wait for the end of the cycle. If any one of the following three conditions is met, it fires on the spot.

1. At the end of Day 1 there is not a single deployable vertical slice.
2. The compute budget is exhausted while scope marked must-have is still uphill.
3. The agent has repeated mutually contradictory approaches on the same scope three or more times.

The second condition is a conjunction, not a disjunction. Exhausting the budget alone does not fire it, and having work still uphill while the budget is comfortable is normal. The signal is the combination: everything available has been spent and must-haves are still uphill.

What has to be produced when the breaker fires is not a failure report but a return memo. It records which intent was unclear and which rabbit hole was left undeclared in the pitch. This memo becomes input to the shaping track and fixes the next pitch. That is the point at which the breaker becomes a learning device rather than a punishment.

What settles a bet that survives to the end of the cycle without tripping the breaker? In the original, the answer was shipping. But in an era where code no human has read a line of gets deployed, the standard for done demands one more item.
