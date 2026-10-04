import type { LoaderFunctionArgs } from 'react-router';
import { cached, coordinates, forecast } from '~/weather/api.server';
export async function loader({ request }: LoaderFunctionArgs) {
  const p = coordinates(request);
  try {
    const data = await cached(
      `forecast:${p.latitude},${p.longitude}`,
      900000,
      () => forecast(p)
    );
    return Response.json(data, {
      headers: { 'Cache-Control': 'public, max-age=300, s-maxage=900' },
    });
  } catch {
    return Response.json(
      {
        error: 'The forecast is taking a little break. Try again in a moment.',
      },
      { status: 503, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
