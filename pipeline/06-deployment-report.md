---
artifact: 06-deployment-report
status: complete
game: "Clover RPG"
scope: "English guide; GitHub and Cloudflare Pages release requested by user"
generated_at: "2026-10-25T15:20:22.080963+00:00"
observed_through: "2026-10-25T15:20:22.080963+00:00"
upstream: ["05-seo-audit"]
sources: ["game", "controls", "beginner", "magic", "unlock", "races", "quests", "codes", "links"]
gaps: ["Google Analytics report receipt, indexing and physical-device testing are unverified"]
---

## Decision or outcome
Deployed to Cloudflare Pages from GitHub. Custom-domain HTTPS returned 200 with the correct page and single GA4 configuration. Cloudflare now reports domain status, ownership verification and certificate validation all active.

## Evidence and analysis
| Field | Observed result |
|---|---|
| Repository | https://github.com/xpfasd2/cloverrpg.app (public) |
| Source revision | b9d77483d68a3286c76c97c8169756463cb7f34e |
| Project | cloverrpg-app |
| Initial deployment | 26dedc55-c825-4351-94d7-6d54778eea20 |
| Build | python3 scripts/build.py && python3 scripts/audit.py; success |
| Output | dist |
| Initial deployment finished | 2026-10-25T15:21:53Z |
| Pages URL | https://cloverrpg-app.pages.dev/ |
| Custom domain | https://cloverrpg.app/ |
| DNS | CNAME cloverrpg.app → cloverrpg-app.pages.dev, proxied; verified in dashboard |
| Git integration | GitHub xpfasd2/cloverrpg.app main; production deployments enabled |
| Live checks | All 11 content routes, robots, sitemap, image returned 200 on Pages; missing route returned 404 |

The root domain previously had two A records. Their values were recorded locally in outputs/dns-before.json before authorized cutover. The older A records were replaced by one CNAME through Cloudflare's DNS dashboard because Wrangler OAuth lacks DNS permissions.

## Unknowns and conflicts
Google Analytics report receipt, search indexing and physical mobile devices have not been verified. A Python urllib probe received 403 at the edge; curl fetched correct pages successfully. Browser initially saw an old-origin 522 during cutover; subsequent browser loads and domain verification succeeded.

## Handoff
The first real GitHub push deployment, 70a30e7a-ebd4-4b14-a03e-f7c2936a28cb, succeeded for b13b28ea69664c23a18ba78ac29bf0b74b4421c8. This verifies Git push synchronization independently of the initial API-triggered deployment.

The user-selected Atlas redesign passed local design QA and is released through the same main-branch pipeline. Its exact deployment revision and live evidence are recorded in local outputs after provider success; see design-qa.md for the implementation verification.

| Volatile facts | Owner / source | Trigger | Gate | Failure behavior | Schedule |
|---|---|---|---|---|---|
| Codes | Site editor / developer announcements | New announcement or manual review | Verify code and exact interface before publishing | Keep status unknown | proposed only |
| Magic, quests, races | Site editor / current community + game evidence | Game patch | Reconcile conflicts, build/audit | Hold unsupported values | proposed only |
| Official links | Site editor / Roblox page | Broken link report | Verify destination | Remove stale destination | proposed only |

No cron or recurring content automation was created. Git push auto-deployment is enabled as requested.
