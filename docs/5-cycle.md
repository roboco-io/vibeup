# 4-Day Build + 1-Day Cool-down

The original's reason for choosing six weeks as the cycle length was never the absolute number but the balance of two conditions: long enough to build something meaningful start to finish, and short enough that everyone feels the deadline looming from the very beginning ([Chapter 1: Introduction](https://basecamp.com/shapeup/0.3-chapter-01)).

That balance was struck on the premise that people write the code. Six weeks could be the "long enough to finish" period because building filled six weeks. Keep the two conditions and remove only the premise, and the answer changes.

## The Grounds for Compression, and Its Limits

Something has to be said honestly first. Claims that cycles are getting shorter are everywhere right now, but most of them come from vendors and consulting blogs, and sentences like "six to twelve months becomes six to twelve weeks" are not validated benchmarks ([SDLC in the AI era](https://www.groovyweb.co/blog/sdlc-ai-era-software-development-2026)). The figure closest to a primary source is the roughly 10% improvement in engineering velocity that Google's Sundar Pichai is reported to have stated publicly, a number said to come from a state in which about a quarter of the company's code is written with AI assistance. That is an order of magnitude away from the 10x narrative. Set METR's measurements from Chapter 1 alongside it, and the arithmetic that says implementation got tens of times faster, therefore cycles become a fraction as long, does not hold.

The reason compression holds anyway lies in different arithmetic. The variable that sets cycle length has itself changed. When implementation finishes in minutes or hours, what remains is not build time but the human time spent on shaping and verification. The claim from Chapter 2 that the bottleneck moved to verification and review comes back here as the reason to re-measure the timebox.

One more premise attaches to this. A cycle is not an estimate of working time but a re-betting rhythm. Deployment does not happen in a lump at the end of the cycle but continuously, slice by slice, inside it — so what you buy by shortening the cycle is not faster shipping but more frequent decisions.

## One Week, One Heartbeat: 4 Days + 1 Day

Roboco's VDLC substitutes days for weeks while aligning the heartbeat to the calendar week: a four-working-day build plus a one-day cool-down, one week per heartbeat. You bet on Monday morning and close the week with cool-down on Friday ([VDLC weekly cycle](https://vdlc.roboco.io/ko/cycle)).

| Day | What happens | Completion condition |
|---|---|---|
| Day 0 (Mon morning) | Betting table. Review pitches, allocate parallel bets | Dual-currency appetite (attention, compute) stated for each bet |
| Day 1 (Mon) | Integrate one vertical slice into a deployable state | 1 slice working in the real environment |
| Day 2–3 (Tue, Wed) | Delegate by reading the delegability map | All must-have scope has entered the downhill |
| Day 4 (Thu) | Verification gate. No new coding | Done = Deployed verdict |
| Day 5 (Fri) | Cool-down. Regeneration verification and preparation for the next bet | Regeneration succeeds, or debt reverse-transfer is complete |

The Day 0 terms come from the original. A **pitch** is the deliverable of shaping: a proposal document that holds the problem to solve, an outline of the solution, the appetite, and the boundaries of what will not be done (Chapter 4). The **betting table** is where those pitches are laid out and the decision is made about what to build this cycle — not pulling the next ticket from a backlog, but placing budget on pitches as bets; pitches that are not chosen are let go, not carried over. **Allocating parallel bets** is this era's variation: since agents can run several efforts at once, you do not pick a single bet but split the attention and compute budget across two or three. Chapter 6 covers this rebuild in detail.

The **downhill** in the Day 2–3 completion condition is another of the original's metaphors. Its hill chart likens work to a hill: the uphill is where you are still figuring out the approach, and the downhill is where everything has been figured out and only execution remains ([Chapter 13: Show Progress](https://basecamp.com/shapeup/3.4-chapter-13)). Chapter 7 returns to the hill chart itself.

What Day 1 does is no new invention. It nails down as a one-day rule the original's advice not to pile up disconnected pieces but to integrate one meaningful chunk first ([Chapter 11: Get One Piece Done](https://basecamp.com/shapeup/3.2-chapter-11)). Banning coding on Day 4 likewise exists to force onto the calendar the fact that verification is an allocated stage, not something you do with the time left over.

The cool-down ratio moved from the original's three-to-one to four-to-one. Not because there is less to do in cool-down, but because an agent executes that work too, so a day is enough.

## Cycle Length Is Something You Calibrate

One week is a default, not a floor. Enterprises whose shaping and alignment require leadership sign-off have an upward variant of an eight-day build with a two-day cool-down; teams with mature verification assets, and solo builders, have a downward variant of a two-day build with a one-day cool-down.

Three variables set the length. The first is the maturity of your verification assets: the more that agent cross-review and automated evaluation absorb verification, the shorter the gate a human has to hold. The second is the arrival rate of information. The value of re-betting is tied to how fast new information arrives, so re-betting more often than information arrives only adds meetings held on the same information. The third is comprehension bandwidth. Feedback becomes real only when a person understands the output, and the speed of understanding and curation does not compress with compute.

So rather than fixing a lower bound as a number, you manage it by procedure. Each cool-down, record the time spent shaping and the context breaker trigger rate; if breakers fire often for two cycles running, that is a signal that shaping time is insufficient, so you lengthen to the next variant up. Conversely, if cool-down stays quiet and the verification gate keeps passing on the first attempt, you shorten to the next variant down.

## Cool-down Becomes More Important

In the original, cool-down was a maintenance period for fixing bugs and handling deferred work. In VDLC's cool-down, one ritual takes that place: regeneration verification.

You give the agent this cycle's context documents as the only input, have it build the deliverable again, and check whether that regenerated output passes the verification gate. If it passes, the cycle closes with no debt. If it fails, it means what Chapter 3 named context debt is still there — decisions that exist only in the code and not in the intent documents — so you analyze the difference and reverse-transfer the hidden intent into the documents. Betting on the next cycle is forbidden until that reverse-transfer is finished.

This is where the complexity debt named as the third bottleneck in Chapter 2 gets repaid. The heart of the mechanism is that the repayment point is not left at "sometime when there's slack" but wired in as a precondition of the next bet.

And cool-down is still a recovery period for people. DHH's warning, quoted twice in the introduction and Chapter 2 — that the dopamine loop of shipping continuously with agents raises the risk of burnout — gets translated here into an operating rule. In the same interview he said that half a year earlier he wasn't writing code with AI at all, and that now he barely writes code by hand. Even the person issuing the warning is inside the loop. If this is not a problem individual restraint can solve, then the day you stop has to be fixed in the schedule.

If you re-bet once a week, what comes to that betting table, and by what criteria do you choose? The fact that implementation got cheap changes the character of the bet even more than it changes the length of the cycle.
