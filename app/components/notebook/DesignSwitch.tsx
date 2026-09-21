import { designComparison, type DesignVersion } from '~/preview/config';

/** Temporary comparison control. Document navigation isolates each design's CSS. */
export default function DesignSwitch({ version }: { version: DesignVersion }) {
  if (!designComparison.enabled) return null;
  const other = version === 'latest' ? 'mainline' : 'latest';
  return (
    <a
      className='design-switch'
      href={
        other === designComparison.defaultDesign ? '/' : '/preview/mainline'
      }
      aria-label={`View ${designComparison.labels[other]}`}
      title={`Viewing ${designComparison.labels[version]}. Switch to ${designComparison.labels[other]}.`}
    >
      <span>{designComparison.labels[version]}</span>
      <span aria-hidden='true'>⇄</span>
    </a>
  );
}
