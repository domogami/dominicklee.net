import {
  index,
  layout,
  route,
  type RouteConfig,
} from '@react-router/dev/routes';
export default [
  index('routes/_index.tsx'),
  route('weather', 'routes/weather.tsx'),
  route('weather/api', 'routes/weather.api.ts'),
  route('weather/search', 'routes/weather.search.ts'),
  route('weather/alerts', 'routes/weather.alerts.ts'),
  route('calculator', 'routes/calculator.tsx'),
  route('studies/haptics', 'routes/haptics-study.tsx'),
  route('archive/portfolio', 'routes/archive.portfolio.ts'),
  layout('routes/legacy-layout.tsx', [
    route('startpage', 'routes/startpage.tsx', [
      index('routes/startpage._index.tsx'),
    ]),
    route('drinks', 'routes/drinks.tsx', [index('routes/drinks._index.tsx')]),
  ]),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
