# Washington 2026 general-election candidate research

Checked October 28, 2026. No Firecrawl used.

## Scope and official roster

The authoritative King County list is the [2026 general-election candidate page](https://info.kingcounty.gov/kcelections/Vote/contests/candidates.aspx?eid=55). Its 97 contests contain 153 candidates, including unopposed races. The [countywide sample ballot](https://cdn.kingcounty.gov/-/media/king-county/depts/elections/current-election/2026/11/sample-ballot.pdf) explicitly says it contains all county contests and that an individual voter is not eligible for every one.

The complete machine-readable roster is `king-county-2026.json`. Candidate identity, ballot order and party preference come from that official list. Campaign URLs come from each contest’s official contact page. Street and mailing addresses were deliberately omitted from the consolidated data.

For Queen Anne, the working subset is Congressional District 7, Legislative District 36, countywide offices, County Council District 4, statewide Supreme Court, Court of Appeals Division 1 District 1, King County District Court West Electoral District, and Seattle Municipal Court. This is a neighborhood filter, not an address-verified personal ballot. The official [My Voter Information service](https://info.kingcounty.gov/kcelections/vote/myvoterinfo.aspx) remains the check for exact applicability.

## Statewide judicial matchups

| Seat            | Candidates in official ballot order | Term             |
| --------------- | ----------------------------------- | ---------------- |
| Supreme Court 1 | Colleen Melody / Scott Edwards      | 2-year unexpired |
| Supreme Court 3 | David Stevens / Jaime Michelle Hawk | 6 years          |
| Supreme Court 4 | Ian Birk / Sean O’Donnell           | 6 years          |
| Supreme Court 5 | Theo Angelis / Dave Larson          | 2-year unexpired |
| Supreme Court 7 | Debra L. Stephens / Todd A. Bloom   | 6 years          |

All ten have direct [TVW candidate video statements](https://tvw.org/video-voters-guide/) linked individually in the data. Some video descriptions incorrectly use a generic six-year label for seats 1 and 5; the official filing and ballot term govern. An NPI article’s claim that Bloom did not record a video is contradicted by the current [direct Bloom video page](https://tvw.org/video/2026-video-voters-guide-todd-a-bloom-2026061212/), so that claim was not used.

## Evidence method

Each profile separates a brief history from campaign priorities. Sources distinguish official biographies, recorded votes, candidate-authored questionnaires, candidate video statements, and campaign websites. A campaign promise is not described as an accomplished result or prediction of a future judicial ruling.

The core Queen Anne set of 37 candidates has concise histories. Supreme Court and appellate histories use official court biographies where available, with candidate accounts identified. The local court summaries condense their candidate-submitted 2026 pamphlet statements; King County states that it does not fact-check those statements. Pooja Vaddadi submitted no current pamphlet statement, so her history instead comes from Seattle’s official court biography. No current platform was inferred for her or the two unopposed appellate judges.

The remaining countywide browsing inventory has uneven depth: all 153 names and official sources are verified, 129 had a filed campaign website, and 68 have at least a short history. Many legislative profiles outside the Queen Anne subset remain roster and contact records, explicitly marked as such. The dataset does not claim exhaustive independent vetting of every county candidate.

## Direct evidence related to the three statewide initiatives

The CD7 and LD36 enrichment adds official roll calls and statements that help connect candidates to relevant policy:

- Pramila Jayapal voted against H.R. 28 on January 14, 2025 ([House Clerk roll call](https://clerk.house.gov/Votes/202512)). Her 2026 [Trans Bill of Rights announcement](https://jayapal.house.gov/2026/02/11/jayapal-markey-introduce-landmark-trans-bill-of-rights-2/) supports protections including participation in school athletics. That announcement is not an enacted law.
- Nirav Sheth’s campaign education page supports parental-rights and girls’ sports initiatives; it is labeled as his campaign position. A public-safety route on his site returned unrelated gambling content during retrieval and was excluded from policy evidence.
- Noel Frame, Julia Reed and Liz Berry’s positions on HB 1296 and ESSB 6346 are linked to the [official HB 1296 roll calls](https://app.leg.wa.gov/bi/RollCallsOnABill/RollCall?biennium=2025-26&billNumber=1296&initiative=False) and [ESSB 6346 roll calls](https://app.leg.wa.gov/bi/RollCallsOnABill/RollCall?biennium=2025-26&billNumber=6346&initiative=False), with chamber-specific dates in the data.

## Social evidence limitations

Social accounts are included only when linked by a candidate’s campaign or attributable source. Dated individual statements are included where retrievable, including Jayapal’s X statement, Frame’s embedded Facebook statement and Berry’s embedded Instagram posts. For other candidates the dataset distinguishes an account link from a reviewed individual post. A missing or inaccessible social statement is a research gap, not evidence that a candidate has no position.

Additional structured files: `congress-enriched-2026.json`, `judicial-enriched-2026.json`, `seattle-judicial-enriched-2026.json`, and `county-enrichment-2026.json`. Their relevant fields have been merged into the main roster.
