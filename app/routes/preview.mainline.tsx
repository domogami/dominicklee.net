import type { LinksFunction, MetaFunction } from 'react-router';
import DesignPage, { designLinks } from '~/preview/DesignPage';
import { designComparison } from '~/preview/config';
const alternative =
  designComparison.defaultDesign === 'latest' ? 'mainline' : 'latest';
export const links: LinksFunction = () => designLinks(alternative);
export const meta: MetaFunction = () => [
  { title: `${designComparison.labels[alternative]} — Design comparison` },
  { name: 'robots', content: 'noindex, nofollow' },
];
export default function DesignPreview() {
  return <DesignPage version={alternative} />;
}
