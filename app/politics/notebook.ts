export const NOTEBOOK_KEY = 'dom-politics:2026-general:v1';
export type Notebook = {
  version: 1;
  election: '2026-general';
  choices: Record<string, string>;
  notes: Record<string, string>;
};
export const emptyNotebook = (): Notebook => ({
  version: 1,
  election: '2026-general',
  choices: {},
  notes: {},
});
export function parseNotebook(raw: string): Notebook {
  if (raw.length > 2_000_000) throw new Error('This backup is too large.');
  const data: unknown = JSON.parse(raw);
  if (!data || typeof data !== 'object')
    throw new Error('This is not a notebook backup.');
  const value = data as Record<string, unknown>;
  if (value.version !== 1 || value.election !== '2026-general')
    throw new Error('Choose a 2026 general-election notebook backup.');
  const strings = (input: unknown, maxLength: number) => {
    if (!input || typeof input !== 'object' || Array.isArray(input))
      throw new Error('Invalid notebook entries.');
    const entries = Object.entries(input);
    if (
      entries.length > 3000 ||
      entries.some(
        ([key, text]) =>
          key.length > 200 ||
          typeof text !== 'string' ||
          text.length > maxLength ||
          ['__proto__', 'constructor', 'prototype'].includes(key)
      )
    )
      throw new Error('Invalid notebook entries.');
    return Object.fromEntries(entries) as Record<string, string>;
  };
  return {
    version: 1,
    election: '2026-general',
    choices: strings(value.choices, 200),
    notes: strings(value.notes, 20000),
  };
}
