---
artifact: 04-site-plan
status: complete
game: "Clover RPG"
scope: "English guide; GitHub and Cloudflare Pages release requested by user"
generated_at: "2026-10-25T15:20:22.080963+00:00"
observed_through: "2026-10-25T15:20:22.080963+00:00"
upstream: ["03-source-ledger"]
sources: ["game", "controls", "beginner", "magic", "unlock", "races", "quests", "codes", "links"]
gaps: []
---

## Decision or outcome
Implemented a dependency-free Python static generator, responsive emerald field-guide UI, seven player guides, source/about/privacy pages and custom 404.

## Evidence and analysis
| Route | Purpose/cluster | Evidence | Content contract | Links | State | Acceptance | Local result |
|---|---|---|---|---|---|---|---|
| /beginner-guide/ | Getting started; linked from homepage/footer | beginner, unlock | Rendered HTML, explicit unknowns | Hub-to-guide | implemented | Static audit and browser QA | build and audit passed |
| /magic/ | Magic reference; linked from homepage/footer | magic, unlock | Rendered HTML, explicit unknowns | Hub-to-guide | implemented | Static audit and browser QA | build and audit passed |
| /controls/ | Combat handbook; linked from homepage/footer | controls, game | Rendered HTML, explicit unknowns | Hub-to-guide | implemented | Static audit and browser QA | build and audit passed |
| /quests/ | World & progression; linked from homepage/footer | quests, controls | Rendered HTML, explicit unknowns | Hub-to-guide | implemented | Static audit and browser QA | build and audit passed |
| /races/ | Character reference; linked from homepage/footer | races | Rendered HTML, explicit unknowns | Hub-to-guide | implemented | Static audit and browser QA | build and audit passed |
| /codes/ | Code watch; linked from homepage/footer | codes, game | Rendered HTML, explicit unknowns | Hub-to-guide | implemented | Static audit and browser QA | build and audit passed |
| /links/ | Useful destinations; linked from homepage/footer | game, links | Rendered HTML, explicit unknowns | Hub-to-guide | implemented | Static audit and browser QA | build and audit passed |
| /sources/ | About this field guide; linked from homepage/footer | Site editorial / privacy / tool behavior | Rendered HTML, explicit unknowns | Hub-to-guide | implemented | Static audit and browser QA | build and audit passed |
| /about/ | The project; linked from homepage/footer | Site editorial / privacy / tool behavior | Rendered HTML, explicit unknowns | Hub-to-guide | implemented | Static audit and browser QA | build and audit passed |
| /privacy/ | Site information; linked from homepage/footer | Site editorial / privacy / tool behavior | Rendered HTML, explicit unknowns | Hub-to-guide | implemented | Static audit and browser QA | build and audit passed |
| // | Home; linked from homepage/footer | Site editorial / privacy / tool behavior | Rendered HTML, explicit unknowns | Hub-to-guide | implemented | Static audit and browser QA | build and audit passed |

## Unknowns and conflicts
No in-game testing. Community attribution is part of the content contract, not a build blocker. Official image is labeled.

## Handoff
Build and audit passed for 12 HTML files. Browser confirmed guide search, empty state, saved checklist/reload/reset and 100 rolls at 1% = 63.40%. 390px homepage/menu/quest-filter checks passed without horizontal overflow.
