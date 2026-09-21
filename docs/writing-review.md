# Writing review — before publishing

Status: **Dom’s edits applied; current writing and redesign approved for release on September 20, 2026.**

This is a review copy, not a second source of live site text. Update the components after choosing edits here. The common-thread post-it now uses the revised rabbit-hole wording.

## Review checklist (retained for future edits)

- [ ] Confirm Seattle and current Amazon Prime Video / Marketing Automation wording.
- [ ] Confirm the degree, minor and club names; no dates have been invented.
- [ ] Decide whether page title/description and copyright should retain “Dominick Lee” while the visible header/hero use “Dom Lee”.
- [ ] Review “A few folds, a few ideas.” in context.
- [ ] Approve project descriptions and invitation before publishing.

## Header and hero

**Brand:** Dom Lee — index

**Navigation:** Works · About · Garden · Contact

**Location/role:** Seattle · Software Engineer

**Heading:** Dom Lee.

**Rotating line:** Currently distracted by [cubing / origami / calligraphy / journaling / reading / tinkering / exploring / gaming / cycling / yoyoing / coffee]

**Introduction:**

> I write software at Prime Video and spend my off hours optimizing random things in life like my daily routine, lamp schedules, terminal layout, dotfiles, and my keyboard and its shortcuts.

**Actions:** See the works ↘ · Into the garden ↗

**Footnote:** – A place for things I make, learn, and keep coming back to. — p.05

**Crane panel:**

- ONE SHEET. ENDLESS POSSIBILITIES.
- A few folds, a few ideas.
- PAPER, PATIENCE & A LITTLE CURIOSITY

**A little key:** on my list · made & loved · a little happening · worth a scribble · carried forward

**Attribution:** A nod to Bullet Journal / the method behind the marks ↗

## Works

**Margin note:** things I've made & keep making

**Featured build:** × Made & loved · featured build · p.04 — SNAP-75

> A split keyboard, two little screens (one with a little bongo cat), and a whole lot of weekends spent soldering. My reminder that spending time on things I use every day can make me smile.

**Action:** [Build one for your desk ↗](https://nullbits.co/snap/)

**Photo notes:** every little detail. / the first one I ever soldered / two photos, one very happy desk.

| Project            | Description                          | Folio |
| ------------------ | ------------------------------------ | ----- |
| My first website   | where it all started                 | p.00  |
| Previous portfolio | a past version of this little corner | p.01  |
| Startpage          | a small home for every new tab       | p.02  |
| Dotfiles           | my setup, forever unfinished         | p.03  |

All folios belong to one global destination index: projects p.00–p.04, notebook sections p.05–p.09, garden destinations p.10–p.12. See [page-index.md](page-index.md). Repeated numbers only reference the same destination.

## About Me

**Margin note:** a little of my life between the lines

**presently…**

- • Making time for more side projects
- – Exploring Seattle, one cafe at a time
- – Filling notebooks & folding paper
- × Start my Digital Garden
- × Solder my own keyboard

**Post-it:** The common thread / curiosity and willingness to fall down rabbit holes.

**the story so far…**

| Stage                         | Heading                          | Details                                                                                                    |
| ----------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 01 / High school              | Building & finding my voice      | FIRST Robotics & Debate Team                                                                               |
| 02 / UC San Diego             | Following my curiosity           | Mathematics–Computer Science major; Cognitive Science minor; IEEE · ACM · UCSD Cycling                     |
| 03 / Amazon Prime Video       | Prime Video Watch Party          | Synchronizing streams so friends and families could watch Prime Video together, virtually, across devices. |
| 04 / Amazon Prime Video — NOW | Prime Video Marketing Automation | After Watch Party died... This is where I’m building today.                                                |

## Digital garden

**Margin note:** notes to myself, mostly

> Things I'm learning, questions I'm sitting with, and ideas that aren't quite finished. My writing lives in a garden and sometimes it grows unbounded and other days I prune it.

**Action:** Wander through the garden ↗

**Index:** Axe Sharpening — p.10 / Dotfiles — p.11 / The rest of the rabbit hole — p.12

All writing links go to `https://domogami.github.io/` (specific entries use `blog-posts/axe-sharpening` and `blog-posts/dotfiles`). There is no local blog or editor.

## Contact and footer

**Banner:** Send word.

> I love meeting new people.
> Drop a thought or say hello :)

**Address:** domogami@gmail.com

The entire invitation opens that mail address. Social destinations: GitHub `domogami`, LinkedIn `in/domogami`, and the digital garden.

**Colophon:** © [current year] Dominick Lee / Made with intention. Always unfolding. / Motion: on (or quiet) / Back to the top ↑

## Search metadata and error copy

**Title:** Dominick Lee — Software, paper & everything in between

**Description:** The personal notebook of Dominick Lee. Software engineer, tinkerer, paper folder, calligraphy hobbyist. A collection of projects, ideas, and everyday curiosities.

**404:** This page has been folded away. / Try the notebook, or wander through my digital garden.

**Other errors:** Something went wrong. / Please refresh the page and try again.

**Recovery links:** Back to the notebook · Digital garden ↗

## Editing map

- Main copy/contact/links: `app/components/notebook/Notebook.tsx`
- Hobbies: `app/components/notebook/HobbyTagline.tsx`
- Timeline: `app/components/notebook/NotebookDrawings.tsx`
- Search metadata: `app/routes/_index.tsx`
- Error page: `app/root.tsx`

Archive and retained project copy is preserved separately; this review focuses on the new portfolio.
