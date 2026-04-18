import { useEffect, useRef } from 'react';
import styles from './GhostSprite.module.css';

const PX = 10;
const GHOST = [
  '0000001111110000',
  '0000111111111100',
  '0001111111111110',
  '0011111111111111',
  '0011110011100111',
  '0011100011000111',
  '0011111111111111',
  '0011111111111111',
  '0011111111111111',
  '0011111111111111',
  '0011111111111111',
  '0011111111111111',
  '0011011110111101',
  '0010011110111100',
  '0000011100011100',
  '0000000000000000',
];
const SPARK_POS: [number, number][] = [
  [160, 15],
  [162, 55],
  [155, 95],
  [8, 25],
  [12, 70],
  [170, 130],
];

export function GhostSprite() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let fy = 0;
    let fd = 1;
    let raf = 0;

    const drawGhost = (oy: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.shadowColor = '#a855f7';
      ctx.shadowBlur = 16;
      GHOST.forEach((row, y) => {
        row.split('').forEach((c, x) => {
          if (c === '1') {
            ctx.fillStyle = '#9333ea';
            ctx.fillRect(x * PX, y * PX + oy, PX, PX);
          }
        });
      });

      ctx.shadowBlur = 0;
      ctx.fillStyle = '#fff';
      [
        [3 * PX, 4 * PX],
        [9 * PX, 4 * PX],
      ].forEach(([ex, ey]) => ctx.fillRect(ex, ey + oy, PX * 2, PX * 2));
      ctx.fillStyle = '#1a0a2e';
      [
        [4 * PX, 5 * PX],
        [10 * PX, 5 * PX],
      ].forEach(([ex, ey]) => ctx.fillRect(ex, ey + oy, PX, PX));

      SPARK_POS.forEach(([sx, sy], i) => {
        const p = Math.sin(frame * 0.06 + i) * 0.5 + 0.5;
        ctx.globalAlpha = 0.3 + p * 0.7;
        ctx.fillStyle = p > 0.6 ? '#f0abfc' : '#c084fc';
        ctx.fillRect(sx, sy, 4, 4);
      });
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      fy += 0.04 * fd;
      if (Math.abs(fy) > 7) fd *= -1;
      frame++;
      drawGhost(Math.round(fy));
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={styles.wrap} aria-hidden="true">
      <canvas ref={canvasRef} width={180} height={200} />
    </div>
  );
}
