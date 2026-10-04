import type { LoaderFunctionArgs } from 'react-router';
import { cached, coordinates, fetchJSON } from '~/weather/api.server';
export async function loader({ request }: LoaderFunctionArgs) {
  const p = coordinates(request);
  try {
    const result = await cached(
      `alerts:${p.latitude},${p.longitude}`,
      300000,
      async () => {
        // NWS point lookup establishes coverage; no guessed bounding-box assurance.
        const point = await fetchJSON(
          `https://api.weather.gov/points/${p.latitude},${p.longitude}`,
          6500
        ).catch(() => null);
        if (!point?.properties?.forecast)
          return { status: 'unavailable', alerts: [] };
        const response = await fetchJSON(
          `https://api.weather.gov/alerts/active?point=${p.latitude},${p.longitude}`,
          6500
        );
        if (!Array.isArray(response.features))
          throw new Error('Invalid alerts');
        return {
          status: 'ok',
          alerts: response.features.slice(0, 12).map((f: any) => {
            const a = f.properties;
            return {
              id: f.id,
              event: a.event,
              headline: a.headline,
              severity: a.severity,
              description: a.description,
              instruction: a.instruction,
              expires: a.expires,
              url: `https://forecast.weather.gov/MapClick.php?lat=${p.latitude}&lon=${p.longitude}`,
            };
          }),
        };
      }
    );
    return Response.json(result, {
      headers: { 'Cache-Control': 'public, max-age=120, s-maxage=300' },
    });
  } catch {
    return Response.json(
      { status: 'unavailable', alerts: [] },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
