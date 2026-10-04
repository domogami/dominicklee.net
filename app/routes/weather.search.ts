import type { LoaderFunctionArgs } from 'react-router';
import { cached, fetchJSON } from '~/weather/api.server';
export async function loader({ request }: LoaderFunctionArgs) {
  const query = new URL(request.url).searchParams.get('q')?.trim() ?? '';
  if (query.length < 2 || query.length > 80)
    return Response.json({ results: [] });
  try {
    const results = await cached(
      `search:${query.toLowerCase()}`,
      3600000,
      async () => {
        const data = await fetchJSON(
          `https://geocoding-api.open-meteo.com/v1/search?${new URLSearchParams({ name: query, count: '7', language: 'en', format: 'json' })}`
        );
        return (data.results ?? []).map((p: any) => ({
          name: p.name,
          latitude: p.latitude,
          longitude: p.longitude,
          region: p.admin1,
          country: p.country_code,
        }));
      }
    );
    return Response.json(
      { results },
      { headers: { 'Cache-Control': 'public, max-age=3600' } }
    );
  } catch {
    return Response.json(
      { error: 'Place search is unavailable. Try again shortly.' },
      { status: 503 }
    );
  }
}
