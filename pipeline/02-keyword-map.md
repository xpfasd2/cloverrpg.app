---
artifact: 02-keyword-map
status: partial
game: "Clover RPG"
scope: "English guide; GitHub and Cloudflare Pages release requested by user"
generated_at: "2026-10-25T15:20:22.080963+00:00"
observed_through: "2026-10-25T15:20:22.080963+00:00"
upstream: ["01-opportunity-report"]
sources: ["game", "controls", "beginner", "magic", "unlock", "races", "quests", "codes", "links"]
gaps: ["No measured keyword volumes"]
---

## Decision or outcome
Build seven non-duplicative player intents, with homepage as navigation hub.

## Evidence and analysis
| Cluster | Query | Locale | Intent | Demand | Competition | Target | Disposition | Priority |
|---|---|---|---|---|---|---|---|---|
| K01 | Clover RPG beginner guide | English/global | A practical Kamo starting route, a saved tutorial checklist, and the path to your first grimoire. | Current SERP coverage; volume unknown | Existing community pages in source ledger | /beginner-guide/ | build | P0 for beginner/magic; P1 otherwise |
| K02 | Clover RPG magic & grimoires | English/global | Find the first grimoire quest, compare seven reported magic roll chances, and explore a probability calculator. | Current SERP coverage; volume unknown | Existing community pages in source ledger | /magic/ | build | P0 for beginner/magic; P1 otherwise |
| K03 | Clover RPG controls & combat | English/global | A compact PC key reference based on the developer controls post, with a simple practice routine. | Current SERP coverage; volume unknown | Existing community pages in source ledger | /controls/ | build | P0 for beginner/magic; P1 otherwise |
| K04 | Clover RPG quest notebook | English/global | Pick a Kamo quest by task type and keep the next objective close while you play. | Current SERP coverage; volume unknown | Existing community pages in source ledger | /quests/ | build | P0 for beginner/magic; P1 otherwise |
| K05 | Clover RPG race reference | English/global | Compare the seven reported races by their general strengths, without treating disputed probabilities as confirmed. | Current SERP coverage; volume unknown | Existing community pages in source ledger | /races/ | build | P0 for beginner/magic; P1 otherwise |
| K06 | Clover RPG codes: current status | English/global | No working Clover RPG codes were verified in our October 25 research. See the evidence and avoid codes for other games. | Current SERP coverage; volume unknown | Existing community pages in source ledger | /codes/ | build | P0 for beginner/magic; P1 otherwise |
| K07 | Clover RPG game & community links | English/global | Find the correct Roblox experience, its developer group and useful references without confusing similarly named games. | Current SERP coverage; volume unknown | Existing community pages in source ledger | /links/ | build | P0 for beginner/magic; P1 otherwise |

## Unknowns and conflicts
No search-volume tool was used. Do not equate observed SERP coverage with measured demand. Tier lists and full item catalogs deferred.

## Handoff
Collect source-level support for each route; merge grimoire unlock and odds into /magic/ to prevent overlapping thin pages.
