/* 8x8 pixel icons drawn as SVG rects. Add a name here and a row map below. */
export type PixelIconName = 'research' | 'app' | 'web' | 'trophy' | 'shield' | 'flag';

const PIXELS: Record<PixelIconName, string[]> = {
  research: [
    '.XXX....',
    'X...X...',
    'X...X...',
    'X...X...',
    '.XXX.X..',
    '.....XX.',
    '......XX',
    '.......X',
  ],
  app: [
    '.XXXXX..',
    '.X...X..',
    '.X...X..',
    '.X...X..',
    '.X...X..',
    '.X...X..',
    '.XX.XX..',
    '.XXXXX..',
  ],
  web: [
    '..XXXX..',
    '.X.XX.X.',
    'X..XX..X',
    'XXXXXXXX',
    'XXXXXXXX',
    'X..XX..X',
    '.X.XX.X.',
    '..XXXX..',
  ],
  trophy: [
    'XXXXXXX.',
    'X.XXX.X.',
    'X.XXX.X.',
    '.XXXXX..',
    '..XXX...',
    '...X....',
    '..XXX...',
    '.XXXXX..',
  ],
  shield: [
    'XXXXXXXX',
    'X.XXXX.X',
    'X.XXXX.X',
    'XX.XX.XX',
    'XX.XX.XX',
    '.XX..XX.',
    '..XXXX..',
    '...XX...',
  ],
  flag: [
    'X.......',
    'XXXXXXX.',
    'XXXXXXXX',
    'XXXXXXX.',
    'XXXXX...',
    'X.......',
    'X.......',
    'X.......',
  ],
};

type Props = { name: PixelIconName; className?: string };

export function PixelIcon({ name, className }: Props) {
  return (
    <svg
      viewBox="0 0 8 8"
      width="1em"
      height="1em"
      className={className}
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      {PIXELS[name].flatMap((row, y) =>
        [...row].map((c, x) =>
          c === 'X' ? (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="currentColor" />
          ) : null,
        ),
      )}
    </svg>
  );
}
