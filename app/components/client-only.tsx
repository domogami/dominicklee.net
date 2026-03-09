import { type ReactNode, useEffect, useState } from 'react';

type ClientOnlyProps = {
  children: () => ReactNode;
  fallback?: ReactNode;
};

export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? children() : fallback}</>;
}
