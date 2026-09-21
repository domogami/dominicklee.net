import type { LinksFunction, MetaFunction } from 'react-router';
import Notebook from '~/components/notebook/Notebook';
import styles from '~/styles/notebook.css?url';
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];
export const meta: MetaFunction = () => [
  { title: 'Dominick Lee — Software, paper & everything in between' },
  {
    name: 'description',
    content:
      'The personal notebook of Dominick Lee. Software engineer, tinkerer, paper folder, calligraphy hobbyist. A collection of projects, ideas, and everyday curiosities.',
  },
];
export default function Index() {
  return <Notebook />;
}
