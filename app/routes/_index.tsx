import type { LinksFunction, MetaFunction } from 'react-router';
import Notebook from '~/components/notebook/Notebook';
import styles from '~/styles/notebook.css?url';
import { siteMetadata } from '~/siteMetadata';
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];
export const meta: MetaFunction = () => [
  { title: siteMetadata.title },
  { name: 'description', content: siteMetadata.description },
  { tagName: 'link', rel: 'canonical', href: siteMetadata.url },
  { property: 'og:type', content: 'website' },
  { property: 'og:site_name', content: 'Dom Lee' },
  { property: 'og:url', content: siteMetadata.url },
  { property: 'og:title', content: siteMetadata.title },
  { property: 'og:description', content: siteMetadata.description },
  { property: 'og:image', content: siteMetadata.image },
  { property: 'og:image:type', content: 'image/png' },
  { property: 'og:image:width', content: '1200' },
  { property: 'og:image:height', content: '630' },
  { property: 'og:image:alt', content: siteMetadata.imageAlt },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: siteMetadata.title },
  { name: 'twitter:description', content: siteMetadata.description },
  { name: 'twitter:image', content: siteMetadata.image },
  { name: 'twitter:image:alt', content: siteMetadata.imageAlt },
];
export default function Index() {
  return <Notebook />;
}
