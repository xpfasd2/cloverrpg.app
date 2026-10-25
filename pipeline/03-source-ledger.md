---
artifact: 03-source-ledger
status: partial
game: "Clover RPG"
scope: "English guide; GitHub and Cloudflare Pages release requested by user"
generated_at: "2026-10-25T15:20:22.080963+00:00"
observed_through: "2026-10-25T15:20:22.080963+00:00"
upstream: ["02-keyword-map"]
sources: ["game", "controls", "beginner", "magic", "unlock", "races", "quests", "codes", "links"]
gaps: ["Community gameplay claims not independently playtested", "Some original source pages unavailable"]
---

## Decision or outcome
Release only supported facts or expressly attributed community reports.

## Evidence and analysis
| ID | Source | Publisher/type | Observed at | Supported evidence and scope | Freshness | Reliability |
|---|---|---|---|---|---|---|
| game | [Roblox · official experience](https://www.roblox.com/games/8248164019/Clover-RPG) | Official | 2026-10-25T15:20:22.080963+00:00 | Game identity, developer, PC and console. Live Roblox API inspected on October 25, 2026. | Review after patches; codes at next source review | Community facts remain attributed |
| controls | [Roblox Developer Forum · controls](https://devforum.roblox.com/t/clover-rpg-controls/1665918) | Developer | 2026-10-25T15:20:22.080963+00:00 | Developer-authored controls. Search-index text checked; live forum returned a browser verification screen. In-game bindings take precedence. | Review after patches; codes at next source review | Community facts remain attributed |
| beginner | [Community wiki · beginner route](https://cloverrpgwiki.wiki/guides/beginner-guide/) | Community | 2026-10-25T15:20:22.080963+00:00 | Kamo tutorial order. Community documentation, not an in-game playtest. | Review after patches; codes at next source review | Community facts remain attributed |
| magic | [Community wiki · magic catalog](https://cloverrpgwiki.wiki/magics/) | Community | 2026-10-25T15:20:22.080963+00:00 | Seven magic types and reported roll probabilities. Not independently measured. | Review after patches; codes at next source review | Community facts remain attributed |
| unlock | [Community wiki · grimoire quest](https://cloverrpg.org/how-to-get-magic/) | Community | 2026-10-25T15:20:22.080963+00:00 | Release-version level 15 quest. Older level 10 guidance conflicts with release reporting. | Review after patches; codes at next source review | Community facts remain attributed |
| races | [Community wiki · race reference](https://cloverrpg.org/races/) | Community | 2026-10-25T15:20:22.080963+00:00 | Race identities and qualitative perks. Conflicting race probabilities are excluded from this guide. | Review after patches; codes at next source review | Community facts remain attributed |
| quests | [Community wiki · quest reference](https://cloverrpg.org/quests/) | Community | 2026-10-25T15:20:22.080963+00:00 | Selected Kamo tasks and reported rewards. Repeat timers vary between sources and are not treated as fixed. | Review after patches; codes at next source review | Community facts remain attributed |
| codes | [Destructoid · code status](https://www.destructoid.com/clover-rpg-codes/) | Editorial | 2026-10-25T15:20:22.080963+00:00 | October 22 article lists no active codes; predates launch. No working codes were independently verified in this research. | Review after patches; codes at next source review | Community facts remain attributed |
| links | [Pro Game Guides · community links](https://progameguides.com/roblox/clover-rpg-discord-wiki-trello-links/) | Editorial | 2026-10-25T15:20:22.080963+00:00 | Community discovery reference; no developer-confirmed Trello located. | Review after patches; codes at next source review | Community facts remain attributed |

### Claim index
| Route | Claim group | Source IDs |
|---|---|---|
| /beginner-guide/ | Getting started | beginner, unlock |
| /magic/ | Magic reference | magic, unlock |
| /controls/ | Combat handbook | controls, game |
| /quests/ | World & progression | quests, controls |
| /races/ | Character reference | races |
| /codes/ | Code watch | codes, game |
| /links/ | Useful destinations | game, links |

## Unknowns and conflicts
- Level 10 pre-release guidance vs level 15 release reporting: publish attributed release route, current game prompts win.
- Race probabilities conflict (1% vs 2% rare races): omit all race probabilities and exact passive percentages.
- Repeat timers conflict (5–10 vs fixed 10 minutes): omit exact timing.
- Codes article predates release: say none independently verified, never assert a confirmed absence of a code interface.
- Fandom inaccessible; do not claim direct Fandom verification. DevForum source text is search indexed, direct page requires browser verification.
- Official promotional image downloaded through Roblox thumbnail API, not a new screenshot or proof of licensed reuse. Attribution retained.

## Handoff
Proceed with evidence limitations visible in guides. No fake working codes, live counters, untested tier rankings or unverified exact values.
