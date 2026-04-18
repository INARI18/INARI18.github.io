import { useMemo } from 'react';

export type Star = {
  size: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
};

export function useStars(count = 90): Star[] {
  return useMemo(() => {
    const list: Star[] = [];
    for (let i = 0; i < count; i++) {
      list.push({
        size: Math.random() < 0.7 ? 2 : 3,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 2 + Math.random() * 4,
        delay: Math.random() * 3,
      });
    }
    return list;
  }, [count]);
}
