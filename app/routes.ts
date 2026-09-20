import {
  index,
  layout,
  route,
  type RouteConfig,
} from '@react-router/dev/routes';
export default [
  index('routes/_index.tsx'),
  route('archive/portfolio', 'routes/archive.portfolio.ts'),
  layout('routes/legacy-layout.tsx', [
    route('startpage', 'routes/startpage.tsx', [
      index('routes/startpage._index.tsx'),
    ]),
    route('drinks', 'routes/drinks.tsx', [index('routes/drinks._index.tsx')]),
  ]),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
