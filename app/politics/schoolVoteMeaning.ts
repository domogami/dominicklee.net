import { parentalRightsComparison } from './parentalRightsComparison';
import type { Source, VoteMeaning } from './types';

const initiativeUrl =
  'https://lawfilesext.leg.wa.gov/biennium/2025-26/Htm/Initiatives/Initiatives/INITIATIVE%20IL26-001.htm';
const currentUrl = 'https://app.leg.wa.gov/RCW/default.aspx?cite=28A.605.005';
const constitution: Source = {
  label: 'Washington Constitution · Article II, section 41',
  url: 'https://leg.wa.gov/state-laws-and-rules/washington-state-constitution/?section=13c8f0de-58d7-4cee-b367-4478b3be34fb',
};
const fiscal: Source = {
  label: 'OFM · timing assumptions, revenue and costs',
  url: 'https://www.sos.wa.gov/sites/default/files/2026-07/Initiative%20Measure%20NoIL26-001_FIS_FINAL.pdf',
};
const current = (section: string): Source => ({
  label: `Current law · ${section}`,
  url: currentUrl,
});
const proposal = (section: string): Source => ({
  label: `Initiative · ${section}`,
  url: initiativeUrl,
});
const law = (cite: string, label: string): Source => ({
  label: `${label} · RCW ${cite}`,
  url: `https://app.leg.wa.gov/RCW/default.aspx?cite=${cite}`,
});

// Reuse the reviewed topic text and locators so these two reading paths stay
// consistent with the detailed side-by-side comparison.
const changes = parentalRightsComparison.rows.filter(
  (row) => row.direction !== 'unchanged'
);
const qualifications: Record<string, string> = {
  'records-scope':
    'Separate health-confidentiality and minor-consent laws still matter; this is not unlimited access to every counseling record.',
  'sensitive-activities':
    'This is not a general veto over every lesson or activity.',
  'abuse-records':
    'This exception is narrower than current law; other abuse and privacy protections are not all abolished.',
  'age-coverage': 'Separate adult-student and FERPA access rules still apply.',
  'crime-notice':
    'Who makes the determination and when are undefined. Delay is a possible consequence, not an express waiting period or conviction requirement.',
  'record-fees':
    'Separate federal and state access requirements remain relevant to fees.',
  'remote-record-requests':
    'The text does not expressly ban identity checks by other means.',
  'campus-removal':
    'This is not every instance of a child leaving campus; independent removal rules and exceptions remain.',
  'private-lawsuits':
    'The omission does not itself guarantee a new damages lawsuit or a successful claim.',
  'academic-updates':
    'Separate progress-report and assessment-notice duties remain.',
};

export const schoolVoteMeaning: VoteMeaning = {
  introduction:
    'These lists describe the outcome if Yes or No wins on IL26-001. One vote decides the whole package; the individual changes cannot be selected separately. Read the shared section too: several protections remain under either result.',
  yes: [
    {
      title: 'Approve the replacement law.',
      text: 'Restore the 2024 parental-rights list in RCW 28A.605.005, undoing its 2025 revisions. This changes one statute, not every provision of HB 1296, and concerns public schools.',
      sources: [
        proposal('section 1'),
        law('28A.150.010', 'Public-school definition'),
      ],
    },
    ...changes.map((row) => ({
      title: `${row.topic}.`,
      text: `${row.proposed}${qualifications[row.id] ? ` ${qualifications[row.id]}` : ''}`,
      sources: [
        ...row.proposedSources,
        ...(qualifications[row.id] ? row.meaningSources : []),
      ].filter(
        (source, index, all) =>
          all.findIndex(
            (other) => other.url === source.url && other.label === source.label
          ) === index
      ),
    })),
    {
      title: 'Remove some repeated rights from this list.',
      text: 'The explicit entries for employee-abuse notice, bullying complaints, broad nondiscrimination, classroom observation, attendance, enrollment, language services and special education are omitted or narrowed. The independently operative laws described below remain; removal from this list alone does not abolish those rights.',
      sources: [current('2(a), 2(d), 2(g), 2(n)–(x)'), proposal('section 1')],
    },
    {
      title: 'Adopt the interpretation and severability clauses.',
      text: 'Direct courts to interpret the act broadly to carry out its purposes. If a provision or application is invalidated, the remaining provisions and applications are preserved. The act receives the short title Washington Parents’ Bill of Rights.',
      sources: [proposal('sections 2–4')],
    },
    {
      title: 'Apply voter-approved-law amendment rules.',
      text: 'For the first two years, legislative repeal is barred. Legislative amendments require two-thirds of all elected members in each house, plus the constitution’s rules for review by the governor. Voters can amend or repeal directly. This is not an absolute freeze, and the law does not expire after two years.',
      sources: [constitution, proposal('section 1(1)')],
    },
    {
      title: 'Implement the change prospectively.',
      text: 'OFM’s official analysis assumes a December 3, 2026 effective date and prospective, not retroactive, application. Those are the analysis’s stated assumptions.',
      sources: [fiscal],
    },
    {
      title: 'Change school duties without a new tax.',
      text: 'OFM estimates no state fiscal impact and no state or local revenue change. Districts could incur minor costs to update policies and procedures; the amount is indeterminate.',
      sources: [fiscal],
    },
  ],
  no: [
    {
      title: 'Reject this replacement and keep current law.',
      text: 'Keep the revised 2025 parental-rights framework in RCW 28A.605.005. No does not remove parents’ existing rights, enact a different proposal or freeze current law permanently.',
      sources: [current('entire section'), proposal('section 1')],
    },
    ...changes.map((row) => ({
      title: `${row.topic}.`,
      text: row.current,
      sources: row.currentSources,
    })),
    {
      title: 'Keep the expressly listed additional rights.',
      text: 'The list continues to name employee-abuse notification, bullying complaints, broad nondiscrimination, classroom observation, unexcused-absence notices, military-family and other enrollment options, language services, and special-education assistance, appeals and hearings.',
      sources: [current('2(a), 2(d), 2(g), 2(n)–(x)')],
    },
    {
      title: 'Do not enact this initiative’s extra clauses or timetable.',
      text: 'The proposed liberal-construction clause, severability clause, short title and replacement-law start date are not adopted. This initiative gains no new two-year voter-approval protection; existing law remains subject to the applicable lawmaking process.',
      sources: [proposal('sections 1–4'), constitution, fiscal],
    },
    {
      title: 'Do not implement this replacement.',
      text: 'Schools continue under the existing framework rather than implementing this replacement. No does not create a new school tax or funding program.',
      sources: [current('entire section'), fiscal],
    },
  ],
  eitherWay: [
    {
      title: 'Calendar, school-fee and dress-code information continues.',
      text: 'Parents receive the school calendar at least 30 days before the year starts and written notice of revisions as soon as feasible. Annual information about required fees, their uses, hardship treatment and applicable dress codes remains in the list.',
      sources: [current('2(j)–(l)'), proposal('section 1(3)(l)–(n)')],
    },
    {
      title: 'Separate abuse-notice, bullying and harassment laws remain.',
      text: 'Immediate notice of reported allegations of employee/contractor abuse or misconduct still has its own statute. District bullying policies, complaint handling and sexual-harassment procedures also remain independently required.',
      sources: [
        law('28A.320.160', 'Employee-abuse notification'),
        law('28A.600.477', 'Bullying complaints'),
        law('28A.640.020', 'Sexual-harassment policies'),
      ],
    },
    {
      title:
        'Nondiscrimination, observation, opt-outs and attendance protections remain.',
      text: 'The initiative does not repeal the independent school nondiscrimination law, nondisruptive classroom-observation right, comprehensive sex-education opt-out or unexcused-absence notice duties. Their summaries appear differently in the two versions of the list.',
      sources: [
        law('28A.642.010', 'School nondiscrimination'),
        law('28A.605.020', 'Classroom observation'),
        law('28A.300.475', 'Sex-education opt-out'),
        law('28A.225.020', 'Attendance notification'),
      ],
    },
    {
      title:
        'Independent enrollment, language and special-education rights remain.',
      text: 'The underlying laws for enrollment options, language access, bilingual instruction and special-education assistance, appeals and hearings are not repealed. Current subsections 2(o)–(x) identify the exact statutes; some examples are linked here.',
      sources: [
        current('2(o)–(x), including statutory cross-references'),
        law('28A.183.040', 'Language-access notices'),
        law('28A.155.020', 'Special-education hearings'),
      ],
    },
    {
      title: 'Separate medical consent and confidentiality laws still matter.',
      text: 'Notice and consent are different. Separate adolescent treatment and health-disclosure laws are not repealed. Broader school-record language could reveal sensitive information, but the initiative has no explicit clause requiring notification of every pronoun or gender-identity change.',
      sources: [
        law('70.02.265', 'Adolescent behavioral-health disclosure'),
        law('71.34.530', 'Adolescent treatment consent'),
        proposal('section 1, full text'),
      ],
    },
    {
      title: 'Other school and teacher laws continue.',
      text: 'The measure does not repeal all of HB 1296. Teacher antiretaliation protections and the separate process for choosing instructional materials remain. Neither vote gives teachers unlimited discretion to conceal information or parents unlimited authority over every school decision.',
      sources: [
        law('28A.400.312', 'Teacher antiretaliation protections'),
        law('28A.320.230', 'Instructional-material selection'),
        proposal('section 1'),
      ],
    },
  ],
};
