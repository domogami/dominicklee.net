import type { LinksFunction, MetaFunction } from 'react-router';
import DesignPage, { designLinks } from '~/preview/DesignPage';
import { designComparison } from '~/preview/config';
export const links: LinksFunction = () =>
  designLinks(designComparison.defaultDesign);
export const meta: MetaFunction = () => [
  { title: 'Dominick Lee — Software, paper & everything in between' },
  {
    name: 'description',
    content:
      'The personal notebook of Dominick Lee. Software engineer, tinkerer, paper folder, calligraphy hobbyist. A collection of projects, ideas, and everyday curiosities.',
  },
];
export default function Index() {
  return <DesignPage version={designComparison.defaultDesign} />;
}
