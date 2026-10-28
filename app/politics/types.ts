export type Source = { label: string; url: string; kind?: string };
export type Fact = {
  text: string;
  url?: string;
  label?: string;
  date?: string;
  kind?: string;
};
export type Candidate = {
  id: string;
  name: string;
  party?: string;
  incumbent?: boolean;
  history: Fact[];
  priorities: Fact[];
  record: Fact[];
  questions: string[];
  sources: Source[];
  social: Source[];
  statements: Fact[];
  researchStatus: string;
  statement?: string;
  photo?: string;
};
export type Race = {
  id: string;
  office: string;
  district: string;
  category: string;
  candidates: Candidate[];
  queenAnne: boolean;
  eligibility?: string;
  source?: string;
};
export type Measure = {
  id: string;
  number: string;
  title: string;
  summary: string;
  currentLaw: string;
  yes: string;
  no: string;
  history: string[];
  tradeoffs: { label: string; text: string }[];
  fiscal: string;
  caveat: string;
  sources: Source[];
};
