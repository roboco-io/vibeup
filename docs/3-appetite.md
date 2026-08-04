# Redefining Appetite

In the original, appetite means the upper bound of time you are willing to spend on a problem ([Chapter 3: Set Boundaries](https://basecamp.com/shapeup/1.2-chapter-03)). You decide first whether this is a two-week or a six-week problem, and then you look for a solution that fits inside it.

Where this parts ways with an estimate is the direction of the question. An estimate asks, "how long will it take to build this?" It starts from a design and ends in a number, so you can only answer it once you have already settled on a solution. An appetite asks, "how much is this problem worth spending?" It starts from a number and ends in a design, so it must be answered before the solution is chosen. Appetite is therefore not a prediction but a decision — and, right there on the spot, a creative constraint that forces shaping.

## The Limits of a Time Budget

This device worked as discipline because time was expensive. The verdict "this is not a six-week thing" carried weight. Saying you would spend six weeks meant one team would not be doing everything else, and everyone in the room knew what that weighed.

Say the same sentence today and the force has drained out of it. Declaring "our appetite is two weeks" for a feature that genuinely takes a day to build stops nothing. It is well under the ceiling, so it passes. And this is where the most awkward rebuttal arrives: "if it only takes a day, why not build it?" A time budget has no language for answering that, because the premise of the rebuttal is true. It really does take a day. The problem is that the day is not the whole of what the feature will bill you for — and in units of time, the rest of the invoice is invisible.

## Into Three Budgets

What has to change, then, is not the device but the unit. The three bottlenecks named in the previous chapter become three budgets directly.

**The verification budget** asks, "how far does what we can check and stand behind actually extend?" If a payment edge case bolted on in a day produced twenty branches and there is no one who will read all of them through, then no matter how little time the implementation took, this budget is already blown. What goes out unchecked has not been built; it has been deferred.

**The attention budget** asks, "how much of our focus is this problem worth occupying?" There is always some settings screen that takes half a day to build and then takes half of the team's discussion for weeks afterward. The implementation invoice is half a day; the attention invoice is weeks. The latter is far more expensive, and it is written down nowhere.

**The complexity budget** asks, "are we willing to keep carrying the surface area this feature adds?" If you wired up one external service integration in two days, then after those two days come costs paid out in small installments every time the API version changes, every time that service has an outage, and every time someone tries to change something nearby.

Exceeding any one of the three makes "we are not building it" a legitimate answer. The earlier rebuttal now has a reply. Yes, it takes a day to build. But we have neither the time to check it nor the capacity to keep carrying the surface it widens.

## VDLC's Dual-Currency Appetite

VDLC's dual-currency appetite is this redefinition implemented as a budget form you actually fill in. Every pitch writes down two currencies as numbers. The human attention budget is split into N hours of shaping and N hours of verification; the compute budget is written as a ceiling on tokens or sessions ([VDLC weekly cycle](https://vdlc.roboco.io/cycle)).

Here is how three budgets fold into two currencies. The verification budget goes into the "N hours of verification" line inside the human attention budget. The focus that goes into choosing what to build and the focus that goes into checking what got built come out of the same person's same day, so bundling them into one currency matches how they are actually consumed better than counting them separately. The complexity budget is absorbed into managing context debt — decisions that live in the code but not in any document recording the intent. A widened surface area to carry is, in effect, an increase in decisions no one else can read back and reconstruct. The remaining compute budget is a resource that grows with money rather than a human one, but you write down a ceiling for it anyway. Compute burning faster than expected is itself a signal that the work is harder than it was shaped to be.

## The Principle That Doesn't Change

The unit changed; the principle did not. Scope is not determined by how long it will take, but by how much you want it.

The contrast with estimates holds just as well. If anything, estimates have become so easy to obtain that the distinction matters more now. Ask an agent and a plan with a duration comes back in seconds. It is plausible, it is confident, and sometimes it is right. But it is still an estimate — an answer that starts from a design and ends in a number, an answer premised on a solution already chosen. Whether the AI says two hours or two days, the ceiling on what we are willing to spend here is not that number but our appetite.

So the original's "fixed time, variable scope" is not discarded but generalized one step: "fixed budget, variable scope." All that has changed is that what gets fixed went from time alone to three resources; the motion of nailing down the budget first and then carving scope until it fits is unchanged. Which raises the question of who does that carving — who now sketches the outline of a solution that fits inside the budget. That is the subject of the next chapter.
