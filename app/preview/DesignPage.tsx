import DomNotebook from '~/components/notebook/Notebook';
import AllyNotebook from './mainline/Notebook';
import domStyles from '~/styles/notebook.css?url';
import allyStyles from './mainline/notebook.css?url';
import switchStyles from '~/styles/design-switch.css?url';
import { designComparison, type DesignVersion } from './config';

export function designLinks(version: DesignVersion) {
  return [
    { rel: 'stylesheet', href: version === 'latest' ? domStyles : allyStyles },
    ...(designComparison.enabled
      ? [{ rel: 'stylesheet', href: switchStyles }]
      : []),
  ];
}
export default function DesignPage({ version }: { version: DesignVersion }) {
  return version === 'latest' ? <DomNotebook /> : <AllyNotebook />;
}
