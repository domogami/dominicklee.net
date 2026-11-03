import type { Measure, Source } from './types';

const currentUrl = 'https://app.leg.wa.gov/RCW/default.aspx?cite=28A.605.005';
const proposalUrl =
  'https://lawfilesext.leg.wa.gov/biennium/2025-26/Htm/Initiatives/Initiatives/INITIATIVE%20IL26-001.htm';
const current = (section: string): Source => ({
  label: `Current law · ${section}`,
  url: currentUrl,
});
const proposed = (section: string): Source => ({
  label: `Initiative §1 · ${section}`,
  url: proposalUrl,
});
const law = (cite: string, label: string): Source => ({
  label: `${label} · RCW ${cite}`,
  url: `https://app.leg.wa.gov/RCW/default.aspx?cite=${cite}`,
});
const explanation = (page: number): Source => ({
  label: `Attorney General explanation · PDF p.${page}`,
  url: `https://www.sos.wa.gov/sites/default/files/2026-07/ExStat_IL26-001.pdf#page=${page}`,
});

export const parentalRightsComparison: NonNullable<Measure['comparison']> = {
  checked: '2026-11-02',
  introduction:
    'One vote changes the whole list. Yes restores the 2024 version; No keeps the revised 2025 version. Compare each specific parental right or child-protection safeguard below. Expanded parental access can also mean less confidentiality for the student.',
  clarification: {
    question: 'Does Yes eliminate immediate crime notification?',
    text: 'It replaces the clear report/allegation trigger with an undefined “deemed committed” trigger. Immediate-notification wording remains. A possible delay is the concern; a mandatory waiting period or conviction requirement is not in the text. The separate employee-abuse notification law also remains.',
    sources: [
      current('2(c)–(d)'),
      proposed('3(f)'),
      law('28A.320.160', 'Employee-abuse notice, subsection 1'),
    ],
  },
  rows: [
    {
      id: 'records-deadline',
      topic: 'How quickly parents receive records',
      direction: 'stronger',
      label: 'Stronger · faster access',
      current:
        'Records must be provided within a reasonable period, no more than 45 days.',
      proposed:
        'Copies must be provided within 10 business days after a written request.',
      meaning:
        'A shorter maximum wait for parents. The current limit is 45 days, not 45 business days.',
      currentSources: [current('2(b)(i)')],
      proposedSources: [proposed('3(b)(i)')],
      meaningSources: [explanation(4)],
    },
    {
      id: 'records-scope',
      topic: 'Which school records parents can see',
      direction: 'stronger',
      label: 'Stronger · broader parental access',
      current:
        'Access covers education records. Private, sole-possession memory aids are excluded, and the statute expressly preserves separate health-information disclosure rules.',
      proposed:
        'Expressly includes health, mental-health counseling, vocational counseling and other school-maintained student files. The memory-aid exception and express health-law savings clause disappear from this list.',
      meaning:
        'Broader access can reveal more sensitive information. Separate health-confidentiality and minor-consent laws are not repealed; their interaction with the new school-record language still matters. This is not a guarantee that every counseling record must always be disclosed.',
      currentSources: [current('2(b)(iv)–(vi)')],
      proposedSources: [proposed('3(b)(iv)')],
      meaningSources: [
        explanation(4),
        law('70.02.265', 'Adolescent behavioral-health disclosure'),
        law('71.34.530', 'Adolescent outpatient-treatment consent'),
      ],
    },
    {
      id: 'medical-notices',
      topic: 'Notice of medical services',
      direction: 'stronger',
      label: 'Stronger · added notice duties',
      current:
        'This list has no equivalent general clauses requiring these medical-service notices.',
      proposed:
        'Adds prior notice when medical services are offered; notice as soon as practicable after emergency treatment; notice of insurance-cost effects; and notice of school-arranged treatment needing follow-up care beyond school hours.',
      meaning:
        'These are additional communication duties. Notification is different from consent; the measure does not itself resolve every separate medical-consent or confidentiality rule.',
      currentSources: [current('2')],
      proposedSources: [proposed('3(c)–(e)')],
      meaningSources: [
        explanation(4),
        law('71.34.530', 'Separate consent law'),
      ],
    },
    {
      id: 'police-questioning',
      topic: 'Notice when police question a child',
      direction: 'stronger',
      label: 'Stronger · broader notice trigger',
      current:
        'Immediate notice is tied to a custodial interrogation at school during the school day.',
      proposed:
        'Immediate notice applies when law-enforcement personnel question the child, without those school-day, location or custodial-interrogation limits.',
      meaning:
        'The written trigger is broader. Both versions retain the exception when the parent or guardian is accused of abusing or neglecting the child.',
      currentSources: [current('2(e)')],
      proposedSources: [proposed('3(g)')],
      meaningSources: [explanation(5)],
    },
    {
      id: 'sensitive-activities',
      topic: 'Opt-outs from activities with sensitive questions',
      direction: 'stronger',
      label: 'Stronger · broader opt-outs',
      current:
        'Notice and opt-out rights apply to surveys, analyses and evaluations covering the listed federal categories.',
      proposed:
        'Also names assignments, questionnaires, role-playing, recordings and other student engagements asking about specified sexual, family-belief or mental-health subjects; federal survey categories remain included.',
      meaning:
        'More kinds of activities fall within the written opt-out language. This does not grant a general veto over every lesson or school activity.',
      currentSources: [current('2(h)')],
      proposedSources: [proposed('3(j)')],
      meaningSources: [explanation(5)],
    },
    {
      id: 'instructional-materials',
      topic: 'Examining textbooks and classroom materials',
      direction: 'stronger',
      label: 'Stronger · broader access wording',
      current:
        'Parents may examine curriculum, textbooks and other instructional materials in accordance with policies and procedures.',
      proposed:
        'Retains the right to examine textbooks, curriculum and supplemental materials without repeating that policies-and-procedures qualification.',
      meaning:
        'The express access wording is broader. This is a change to the conditions in this list, not the creation of a first-ever right to see classroom materials.',
      currentSources: [current('2(a)')],
      proposedSources: [proposed('3(a)')],
      meaningSources: [explanation(4)],
    },
    {
      id: 'abuse-records',
      topic: 'Withholding records from an accused parent',
      direction: 'weaker',
      label: 'Weaker · narrower child-protection safeguard',
      current:
        'Schools need not release health-care, social-work, counseling or disciplinary records during a targeted abuse/neglect investigation, or when the parent is a defendant in a criminal proceeding naming the child as victim, unless the parent obtains a court order.',
      proposed:
        'Retains an exception for medical/health and mental-health counseling records during a pending abuse/neglect investigation targeting the parent, unless the parent obtains a court order. It omits the separate criminal-proceeding trigger and the named social-work and disciplinary categories.',
      meaning:
        'The explicit withholding safeguard covers fewer records and circumstances. It does not abolish every abuse or privacy protection. Conversely, it does not preserve this entire current-law safeguard.',
      currentSources: [current('3')],
      proposedSources: [proposed('4')],
      meaningSources: [current('3'), proposed('4')],
    },
    {
      id: 'age-coverage',
      topic: 'Who this particular rights list covers',
      direction: 'weaker',
      label: 'Weaker · narrower age wording',
      current:
        'The list applies to parents and guardians of children enrolled in public school without an express under-18 limit in its introductory sentence.',
      proposed:
        'The replacement list expressly applies to parents and guardians of public-school children younger than 18.',
      meaning:
        'The wording of this list is narrower for families of students aged 18 or older. This does not decide all access rights for adult students: FERPA and separate laws have their own eligibility rules.',
      currentSources: [current('2, introductory sentence')],
      proposedSources: [proposed('3, introductory sentence')],
      meaningSources: [law('28A.605.030', 'Education-record access and FERPA')],
    },
    {
      id: 'crime-notice',
      topic: 'Immediate notice of a crime against or by a child',
      direction: 'mixed',
      label: 'Mixed · broader scope, weaker timing clarity',
      current:
        'Immediate notice begins upon receipt of a report alleging a crime against the child at school during the school day or a school-sponsored activity. School shootings and specified detention on probable cause are explicitly covered.',
      proposed:
        'Requires immediate notice if a crime “is deemed to have been committed” against or by the child. School/time limits disappear, but the report/allegation trigger and specific shooting/detention wording are replaced.',
      meaning:
        'Broader scope, but less clear timing: the text does not define who “deems” a crime committed or when. A delay is a possible consequence, not an express waiting period or conviction requirement. Saying all immediate crime-notice duties disappear overstates the change.',
      currentSources: [current('2(c)')],
      proposedSources: [proposed('3(f)')],
      meaningSources: [current('2(c)'), proposed('3(f)')],
    },
    {
      id: 'record-fees',
      topic: 'Electronic copies and other record fees',
      direction: 'mixed',
      label: 'Mixed · free digital copies, omitted fee safeguards',
      current:
        'No charges for inspection, search or retrieval. Copying fees must be reasonable and cannot prevent access.',
      proposed:
        'Electronic copies must be free and paper-copy fees reasonable. The replacement omits the current express no-search/retrieval-charge and fee-must-not-prevent-access wording.',
      meaning:
        'The free-electronic-copy guarantee is stronger. The list no longer repeats every existing fee safeguard; separate FERPA and access requirements remain relevant.',
      currentSources: [current('2(b)(iii)')],
      proposedSources: [proposed('3(b)(iii)')],
      meaningSources: [
        law('28A.605.030', 'Independent education-record access law'),
        explanation(4),
      ],
    },
    {
      id: 'remote-record-requests',
      topic: 'Remote record requests and identity verification',
      direction: 'mixed',
      label: 'Mixed · broader remote access, narrower express exception',
      current:
        'Schools cannot require parents to appear in person to request or validate a records request, provided the school can ascertain the requester’s identity.',
      proposed:
        'Prohibits requiring an in-person appearance without repeating the identity-verification qualification.',
      meaning:
        'The remote-access guarantee is broader; the express exception for difficulty verifying identity is removed. This does not expressly prohibit schools from checking identity by other means.',
      currentSources: [current('2(b)(ii)')],
      proposedSources: [proposed('3(b)(ii)')],
      meaningSources: [explanation(4)],
    },
    {
      id: 'campus-removal',
      topic: 'Being taken or removed from campus',
      direction: 'mixed',
      label: 'Mixed · added notice, separate removal rules remain',
      current:
        'Restates parental authorization for removal during school hours under a separate statute, and preserves cross-references to shelter and child-protection laws.',
      proposed:
        'Requires immediate notice if a child is taken or removed without parental permission, including to a youth shelter or host home. The existing authorization wording and shelter-law cross-references drop out of this list.',
      meaning:
        'Adds an express immediate-notice duty; it is not a blanket notice rule every time a student leaves campus. The independent removal statute, open-campus rules and exceptions are not repealed. Shelter/child-protection laws also remain relevant.',
      currentSources: [current('2(f)')],
      proposedSources: [proposed('3(h)')],
      meaningSources: [
        law('28A.605.010', 'Campus removal and exceptions'),
        law('13.32A.082', 'Shelter notification and exceptions'),
        explanation(5),
      ],
    },
    {
      id: 'private-lawsuits',
      topic: 'Whether this list creates a private lawsuit',
      direction: 'mixed',
      label: 'Uncertain · disclaimer removed',
      current:
        'Expressly says that nothing in this section creates a private right of action.',
      proposed: 'Omits that disclaimer.',
      meaning:
        'The omission is definite; its legal consequences are not specified. It does not itself promise a new damages lawsuit or a successful claim for every disagreement with a school.',
      currentSources: [current('4')],
      proposedSources: [proposed('full replacement of RCW 28A.605.005')],
      meaningSources: [explanation(5)],
    },
    {
      id: 'academic-updates',
      topic: 'Academic updates and meetings',
      direction: 'mixed',
      label: 'Mixed · meeting wording changes, reporting laws remain',
      current:
        'Names periodic progress reports, state-assessment results and promotion-risk information. Parents can request an in-person teacher/principal meeting about academic support.',
      proposed:
        'Retains promotion-risk information, expressly mentions a student learning plan and says parents are to be offered an in-person meeting. The periodic-report and state-assessment references drop out of this list.',
      meaning:
        'The meeting language becomes an offer rather than a right to request one. Independent progress-report and assessment-notice laws remain; removal of their cross-references is not repeal of those duties.',
      currentSources: [current('2(m)')],
      proposedSources: [proposed('3(o)')],
      meaningSources: [
        law('28A.150.240', 'Periodic progress reports'),
        law('28A.230.195', 'Assessment results and parent notice'),
      ],
    },
    {
      id: 'employee-abuse',
      topic: 'Notice of alleged employee or contractor abuse',
      direction: 'unchanged',
      label: 'Protected elsewhere · immediate notice remains',
      current:
        'The list repeats an immediate-notification duty after reported allegations of employee/contractor physical or sexual abuse, sexual misconduct or assault.',
      proposed:
        'Removes that repeated entry from this list, but does not amend the separate notification statute.',
      meaning:
        'RCW 28A.320.160(1) still independently requires immediate notice after the school district receives a report of these allegations. The broader crime-notification wording does not erase this separate duty.',
      currentSources: [current('2(d)')],
      proposedSources: [proposed('full replacement of RCW 28A.605.005')],
      meaningSources: [
        law('28A.320.160', 'Independent immediate-notice duty, subsection 1'),
      ],
    },
    {
      id: 'bullying-harassment',
      topic: 'Bullying and sexual-harassment complaints',
      direction: 'unchanged',
      label: 'Protected elsewhere · complaints remain available',
      current:
        'The list expressly names parents’ right to file a harassment, intimidation or bullying complaint under RCW 28A.600.477. Sexual-harassment policies and complaint procedures also have independent legal bases.',
      proposed:
        'Omits the bullying-complaint entry from this consolidated list. It does not repeal the underlying bullying or sexual-harassment laws.',
      meaning:
        'Parents can still report bullying and harassment. District bullying procedures and sexual-harassment complaint processes remain; deletion of this list entry does not abolish them.',
      currentSources: [current('2(n)')],
      proposedSources: [proposed('full replacement of RCW 28A.605.005')],
      meaningSources: [
        law('28A.600.477', 'Bullying policies and complaint handling'),
        law(
          '28A.640.020',
          'Sex discrimination and sexual-harassment procedures'
        ),
      ],
    },
    {
      id: 'absence-notices',
      topic: 'Notice of an unexcused absence',
      direction: 'unchanged',
      label: 'Protected elsewhere · attendance notices remain',
      current:
        'The list repeats parents’ right to unexcused-absence notices and efforts to reduce absences under separate attendance statutes.',
      proposed:
        'Omits that repeated attendance-notice entry from the list without repealing the underlying attendance laws.',
      meaning:
        'Existing unexcused-absence notification duties remain under RCW 28A.225.020. These duties are distinct from the proposal’s notice when a child is taken or removed from campus.',
      currentSources: [current('2(u)')],
      proposedSources: [proposed('full replacement of RCW 28A.605.005')],
      meaningSources: [law('28A.225.020', 'Unexcused-absence notification')],
    },
    {
      id: 'nondiscrimination',
      topic: 'Protection against discrimination',
      direction: 'unchanged',
      label: 'Protected elsewhere · broader protections remain',
      current:
        'The list repeats the right to an education without discrimination based on sex, race, religion, disability, sexual orientation, gender identity and other specified protected characteristics.',
      proposed:
        'Replaces that broad entry with assurance against discrimination based on the family’s sincerely held religious beliefs.',
      meaning:
        'The list becomes narrower, but the independent school nondiscrimination statutes retain their broader protections. This measure does not legalize discrimination against the groups omitted from this list.',
      currentSources: [current('2(g)')],
      proposedSources: [proposed('3(i)')],
      meaningSources: [
        law('28A.642.010', 'School nondiscrimination'),
        law('28A.640.020', 'Sex discrimination'),
      ],
    },
    {
      id: 'observation-sex-education',
      topic: 'Classroom observation and sex-education opt-outs',
      direction: 'unchanged',
      label: 'Protected elsewhere · existing rights continue',
      current:
        'Parents may observe under the applicable rules, examine instructional materials and opt out of comprehensive sexual-health education.',
      proposed:
        'Keeps materials access, omits the explicit observation entry and rewrites the sex-education wording while still referring to the same sex-education statute.',
      meaning:
        'Classroom observation remains under RCW 28A.605.020, subject to not disrupting school. The independent sex-education opt-out law remains. These are not entirely new rights created by a Yes vote.',
      currentSources: [current('2(a), 2(i)')],
      proposedSources: [proposed('3(a), 3(k)')],
      meaningSources: [
        law('28A.605.020', 'Classroom observation'),
        law('28A.300.475', 'Sexual-health education and opt-outs'),
      ],
    },
    {
      id: 'other-independent-rights',
      topic: 'Enrollment, language access and special education',
      direction: 'unchanged',
      label: 'Protected elsewhere · list entries removed',
      current:
        'The list repeats rights to specified enrollment options, language services, special-education assistance and hearings, citing the separate laws that establish them.',
      proposed:
        'Omits those entries from this list without repealing the statutes they cite.',
      meaning:
        'Removing the summary entries does not itself abolish the underlying rights. Follow the exact RCW cross-references in current subsections 2(o)–(x), including the examples linked here.',
      currentSources: [current('2(o)–(x)')],
      proposedSources: [proposed('full replacement of RCW 28A.605.005')],
      meaningSources: [
        law('28A.225.215', 'Enrollment without legal residence'),
        law('28A.225.216', 'Military-family enrollment'),
        law('28A.183.040', 'Language-access policies and notices'),
        law('28A.150.220', 'Basic education and bilingual instruction'),
        law('28A.155.020', 'Special-education hearings'),
      ],
    },
  ],
};
