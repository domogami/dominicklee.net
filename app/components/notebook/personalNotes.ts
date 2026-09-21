import type { NotebookPage } from './pageIndex';

type PersonalNote = {
  id: string;
  mark: string;
  label: string;
  definition: string;
  title: string;
  body: string;
  annotation: string;
  link?: { label: string; page: NotebookPage };
};

// Personal copy is kept here so these small notes are easy to refresh.
export const personalNotes: PersonalNote[] = [
  {
    id: 'task',
    mark: '•',
    label: 'on my list',
    definition: 'Task: something actionable to do.',
    title: 'Building Office Inc.',
    body: 'My current project is a mobile story game set on an office desk. Swipe paper cards to make choices, navigate office politics, and reach different endings.',
    annotation: 'a work in progress.',
    link: { label: 'Peek at Office Inc. ↗', page: 'officeInc' },
  },
  {
    id: 'done',
    mark: '×',
    label: 'made & loved',
    definition: 'Completed task: the work is done.',
    title: 'The first website I built',
    body: 'I kept my first website online as a little time capsule of where I started.',
    annotation: 'page zero, still here.',
    link: { label: 'Visit the first version ↗', page: 'firstWebsite' },
  },
  {
    id: 'event',
    mark: '○',
    label: 'a little happening',
    definition: 'Event: a dated happening, planned or recorded.',
    title: 'A moment to remember',
    body: 'A ride, a café visit, or a good day out. This little page is waiting for its first dated entry.',
    annotation: 'leave a little room for life.',
  },
  {
    id: 'note',
    mark: '–',
    label: 'worth a scribble',
    definition: 'Note: a thought, fact, or observation to remember.',
    title: 'Life Worth Living',
    body: 'A recent read that helped me reflect on what matters beyond work. I collected my thoughts and passages to return to in the garden.',
    annotation: 'a book to keep thinking about.',
    link: { label: 'Read my book notes ↗', page: 'lifeWorthLiving' },
  },
  {
    id: 'migrated',
    mark: '>',
    label: 'carried forward',
    definition:
      'Migrated task: an unfinished task deliberately moved to a later list.',
    title: 'Still worth coming back to',
    body: 'A spot for an unfinished idea I choose to carry into the next list. The next one belongs here.',
    annotation: 'not finished. not forgotten.',
  },
];
