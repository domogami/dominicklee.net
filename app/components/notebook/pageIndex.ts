// Stable notebook references, not layout positions. Append new destinations;
// never reuse a number or renumber existing entries when rearranging sections.
export const pageIndex = {
  firstWebsite: {
    number: '00',
    title: 'My first website',
    href: 'https://doms-old-site.netlify.app/',
  },
  previousPortfolio: {
    number: '01',
    title: 'Previous portfolio',
    href: '/archive/portfolio/',
  },
  startpage: { number: '02', title: 'Startpage', href: '/startpage' },
  dotfiles: {
    number: '03',
    title: 'Dotfiles repository',
    href: 'https://github.com/domogami/.dotfiles',
  },
  snap: {
    number: '04',
    title: 'SNAP keyboard',
    href: 'https://nullbits.co/snap/',
  },
  home: { number: '05', title: 'Notebook introduction', href: '#top' },
  works: { number: '06', title: 'Works', href: '#works' },
  now: { number: '07', title: 'About Me', href: '#now' },
  garden: { number: '08', title: 'Garden introduction', href: '#garden' },
  contact: { number: '09', title: 'Contact', href: '#contact' },
  axeSharpening: {
    number: '10',
    title: 'Axe Sharpening note',
    href: 'https://domogami.github.io/blog-posts/axe-sharpening',
  },
  dotfilesNote: {
    number: '11',
    title: 'Dotfiles note',
    href: 'https://domogami.github.io/blog-posts/dotfiles',
  },
  gardenWebsite: {
    number: '12',
    title: 'Digital garden website',
    href: 'https://domogami.github.io/',
  },
  lifeWorthLiving: {
    number: '13',
    title: 'Life Worth Living book notes',
    href: 'https://domogami.github.io/influential-works/life-worth-living',
  },
  officeInc: {
    number: '14',
    title: 'Office Inc.',
    href: 'https://domogami.github.io/side-projects/office-inc',
  },
} as const;

export type NotebookPage = keyof typeof pageIndex;
export const folio = (page: NotebookPage) => `p.${pageIndex[page].number}`;
