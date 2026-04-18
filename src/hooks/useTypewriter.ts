import { useEffect, useState } from 'react';

type Options = {
  typeDelay?: number;
  deleteDelay?: number;
  pauseAfterType?: number;
  pauseBeforeNext?: number;
};

export function useTypewriter(
  words: string[],
  {
    typeDelay = 95,
    deleteDelay = 55,
    pauseAfterType = 2000,
    pauseBeforeNext = 350,
  }: Options = {},
) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (words.length === 0) return;
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      const current = words[wordIdx];
      charIdx = deleting ? charIdx - 1 : charIdx + 1;
      setText(current.slice(0, charIdx));

      let delay = deleting ? deleteDelay : typeDelay;
      if (!deleting && charIdx === current.length) {
        delay = pauseAfterType;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        delay = pauseBeforeNext;
      }
      timer = setTimeout(step, delay);
    };

    timer = setTimeout(step, typeDelay);
    return () => clearTimeout(timer);
  }, [words, typeDelay, deleteDelay, pauseAfterType, pauseBeforeNext]);

  return text;
}
