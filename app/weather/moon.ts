import { Body, Illumination, MoonPhase } from 'astronomy-engine';

export type LunarPhase = {
  angle: number;
  fraction: number;
  waxing: boolean;
  name: string;
  light: number;
};

// A bounded minute cache shares calculations between the hero, almanac and hours.
// Unlike a fixed 29.53-day cycle, the ephemeris follows the Moon's uneven orbit.
const phases = new Map<number, LunarPhase>();
export function moonPhase(unixSeconds: number): LunarPhase {
  const minute = Math.floor(unixSeconds / 60);
  const cached = phases.get(minute);
  if (cached) return cached;
  const date = new Date(minute * 60000);
  const angle = MoonPhase(date);
  const fraction = Illumination(Body.Moon, date).phase_fraction;
  const name =
    Math.min(angle, 360 - angle) < 1
      ? 'New moon'
      : Math.abs(angle - 90) < 1
        ? 'First quarter'
        : Math.abs(angle - 180) < 1
          ? 'Full moon'
          : Math.abs(angle - 270) < 1
            ? 'Last quarter'
            : angle < 90
              ? 'Waxing crescent'
              : angle < 180
                ? 'Waxing gibbous'
                : angle < 270
                  ? 'Waning gibbous'
                  : 'Waning crescent';
  const result = {
    angle,
    fraction,
    waxing: angle < 180,
    name,
    light: Math.round(fraction * 100),
  };
  if (phases.size >= 256) phases.delete(phases.keys().next().value!);
  phases.set(minute, result);
  return result;
}

// A lit semicircle joined to an elliptical terminator. Its projected area is
// exactly the calculated illuminated fraction; waxing/waning choose its side.
export function moonGeometry(fraction: number) {
  const bend = 1 - 2 * Math.max(0, Math.min(1, fraction));
  const radius = Math.abs(bend * 75);
  const limb = 'M100 25A75 75 0 0 1 100 175';
  const edge =
    radius < 0.001
      ? 'L100 25'
      : `A${radius.toFixed(5)} 75 0 0 ${bend >= 0 ? 0 : 1} 100 25`;
  return { limb, terminator: `M100 175${edge}`, lit: `${limb}${edge}Z` };
}
