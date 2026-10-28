import inventory from './data/candidates.json';
import measureData from './data/measures.json';
import type { Candidate, Fact, Measure, Race, Source } from './types';
const facts = (values: unknown): Fact[] =>
  Array.isArray(values)
    ? values.map((value) =>
        typeof value === 'string' ? { text: value } : (value as Fact)
      )
    : [];
export const races: Race[] = inventory.races.map((r) => {
  const office = r.office.replace(/\s+,\s+/g, ' · ');
  const queenAnne =
    (r.category === 'Federal' && r.district === '7') ||
    office.startsWith('Legislative District No. 36 ') ||
    ['Prosecuting Attorney', 'Assessor', 'Director of Elections'].includes(
      office
    ) ||
    office.includes('Council District No. 4') ||
    office.startsWith('Supreme Court') ||
    ['king-187084', 'king-187085'].includes(r.id) ||
    office.startsWith('West Electoral District') ||
    office.startsWith('City of Seattle · Municipal');
  return {
    ...r,
    office: ['king-187084', 'king-187085'].includes(r.id)
      ? `Court of Appeals · Division 1, District 1 · ${office}`
      : office,
    queenAnne,
    candidates: r.candidates.map((c) => {
      const candidate = c as unknown as Partial<Candidate> & {
        id: string;
        name: string;
      };
      return {
        ...candidate,
        history: facts(candidate.history),
        priorities: facts(candidate.priorities),
        record: facts(candidate.record),
        questions:
          candidate.questions ??
          (c as unknown as { considerations?: string[] }).considerations ??
          [],
        sources: candidate.sources ?? [],
        social: candidate.social ?? [],
        statements: [
          ...facts(candidate.statements),
          ...(
            (candidate.social ?? []) as (Source & {
              statement?: string;
              date?: string;
            })[]
          )
            .filter((s) => s.statement && s.date)
            .map((s) => ({
              text: s.statement!,
              url: s.url,
              date: s.date,
              kind: 'social statement',
            })),
        ],
        researchStatus: candidate.researchStatus ?? 'Official roster verified.',
      } as Candidate;
    }),
  };
});
export const measures = measureData as Measure[];
export const guideSources: Source[] = [
  {
    label: 'King County · full candidate roster',
    url: inventory.source,
    kind: 'official',
  },
  {
    label: 'King County · local voters’ pamphlet',
    url: 'https://cdn.kingcounty.gov/-/media/king-county/depts/elections/how-to-vote/voters-pamphlets/2026/11/local-edition.pdf',
    kind: 'official',
  },
  {
    label: 'State · initiative texts and analyses',
    url: 'https://www.sos.wa.gov/so/node/12667',
    kind: 'official',
  },
  {
    label: 'King County · district maps',
    url: 'https://kingcounty.gov/en/dept/elections/maps',
    kind: 'official',
  },
  {
    label: 'Verify your own ballot at VoteWA',
    url: 'https://votewa.gov/',
    kind: 'official',
  },
];
