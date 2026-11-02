import { TECH_ICONS } from './techIcons';

// grid characters: X = accent, x = darker shade, Y = pale, o = neutral (stems, metal)
const SHADES: Record<string, string> = {
  X: 'currentColor',
  x: 'var(--rose)',
  Y: 'var(--rose-pale)',
  o: 'var(--text-muted)',
};

type Props = { name?: string; rows?: string[]; size: number; className?: string; fit?: boolean };

/** Pixel icon from the grid in techIcons.ts. Finer grids (24+) carry their own margins, so they get a bigger box. */
export function TechIcon({ name, rows: given, size, className, fit }: Props) {
  const rows = given ?? (name ? TECH_ICONS[name] : undefined);
  if (!rows) return null;
  const n = rows.length;
  // fit: same box for every grid (codex); otherwise finer grids grow to compensate their margins (bag)
  const px = !fit && n > 16 ? Math.round(size * 1.23) : size;
  return (
    <svg
      viewBox={`0 0 ${n} ${n}`}
      className={className}
      style={{ width: px, height: px, margin: `${(size - px) / 2}px 0` }}
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      {rows.flatMap((row, y) =>
        [...row].map((c, x) =>
          c in SHADES ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={SHADES[c]} /> : null,
        ),
      )}
    </svg>
  );
}
