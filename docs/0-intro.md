# Introduction: Why Shape Up Again, Now

Shape Up, published in 2019, was a book that reduces to a single sentence: decide what to build, in refined form, inside a fixed budget of six weeks. Instead of producing an estimate of how long a piece of work would take, Basecamp set an [appetite](https://basecamp.com/shapeup/1.2-chapter-03) — a decision about how much time the problem was worth spending. The work of sketching the outline of a solution so that it fits inside that budget was called [shaping](https://basecamp.com/shapeup/1.1-chapter-02), and the resulting [pitch](https://basecamp.com/shapeup/1.5-chapter-06) went to the [betting table](https://basecamp.com/shapeup/2.2-chapter-08), where the next cycle was wagered. One principle runs through every one of these devices: fix the time, and flex the [scope](https://basecamp.com/shapeup/3.3-chapter-12). The original's full picture is laid out in [Chapter 1: Introduction](https://basecamp.com/shapeup/0.3-chapter-01).

This guide, *Vibe Up*, asks whether that book still holds after vibe coding — and if it does, what changes. The short answer is that most of the original's principles survive, while a good many of the numbers and mechanisms they were attached to no longer mean what they used to. Drawing that line is what this guide does.

## If Implementation Gets Cheap, Does Shaping Become Unnecessary?

The first intuition goes something like this. Planning mattered because building was expensive. Getting it wrong burned weeks, so you refined what to build before you built it. But if the cost of implementation converges on zero, isn't it faster to just build the thing in the time you would have spent refining it? And if so, shouldn't shaping, appetite, and the fixed six weeks all disappear together?

This guide argues the opposite. **Bottlenecks do not vanish; they move.** As the cost of building falls, the cost of checking and taking responsibility for what got built rises, and the human attention needed to choose what to build becomes relatively scarcer. If the bottleneck has moved, the process has to be rebuilt where it landed. This is not the moment to discard the principles — it is the moment to re-aim them.

Tellingly, the first hint of this reinterpretation came from the original camp itself. In an April 2026 interview, Basecamp co-founder David Heinemeier Hansson spoke directly of "the end of the two-month cycle Shape Up described," saying that now that AI has made development faster, that timeline feels slow, and the methodology therefore needs to be rewritten ([Pragmatic Engineer interview](https://newsletter.pragmaticengineer.com/p/dhhs-new-way-of-writing-code)). What he said alongside it, though, was that the bar for quality and craftsmanship has not moved, and that the dopamine loop of shipping continuously with agents actually raises the risk of burnout. In other words, there is a line between what must change and what must be held onto. This guide follows that line.

## How This Guide Is Organized

Three parts, seven chapters.

- **Part 1: What Changed** — how far the cost of implementation has actually collapsed and what has not moved, followed by the three resources that have newly become scarce.
- **Part 2: What Doesn't Change** — why appetite and shaping are not discarded but in fact grow heavier, and how their contents get redefined instead.
- **Part 3: The New Cycle** — the rhythm the six-week cycle and two-week [cool-down](https://basecamp.com/shapeup/2.2-chapter-08) compress into, and how betting and the definition of done get rewritten.

You can follow this guide without having read Shape Up. Each time an idea from the original appears for the first time, it comes with a short explanation and a link to the relevant chapter of the [free web edition](https://basecamp.com/shapeup). If you already know the original, you can read each chapter simply for the answer to "which device from the book gets inverted, and in which direction."

## What This Guide Is Not About

It is not about how to use any particular AI tool. Which agent you run under which settings changes within six months, and knowledge at that layer has a different shelf life than what this guide is trying to say. Tools appear only as examples.

Nor is it meant to replace the original. This guide is closer to a new lens for reading Shape Up. Even the passages where it says "this changes" come into much sharper focus if you have read the book.

Finally, a complete definition of the working process is not this guide's job. That role belongs to Roboco's [VDLC (Vibe-Driven Development Lifecycle)](https://vdlc.roboco.io). This guide is the bridge from the original to VDLC. It explains why the cycle gets shorter and why verification is promoted to a stage of its own, and then hands off the question of how you actually run it to VDLC's definitions. It will not rebuild the destination while standing on the bridge.
