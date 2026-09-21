/** Temporary review settings. Choose a winner, then set enabled to false. */
export type DesignVersion = 'latest' | 'mainline';
export const designComparison = {
  enabled: true,
  defaultDesign: 'latest' as DesignVersion,
  labels: {
    latest: 'Dom’s Idea',
    mainline: 'Ally’s Edit',
  },
  // Frozen deliberately: pushing the new design must not replace Ally’s version.
  baselineCommit: '1a34ac880531a7094c92c395cac83ef98b2877cd',
};
