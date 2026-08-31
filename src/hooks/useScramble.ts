import { useEffect, useState } from "react";

const GLYPHS = "01<>/#$%&+=*";

/**
 * Scramble-decode text effect. Resolves left-to-right.
 * Honors prefers-reduced-motion by rendering the final text immediately.
 */
export function useScramble(text: string, delay = 0): string {
  const [display, setDisplay] = useState(text);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(text);
      return;
    }

    let frame = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      setStarted(true);
      interval = setInterval(() => {
        frame += 1;
        const resolved = Math.floor(frame / 2.4);
        const next = text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < resolved) return ch;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("");
        setDisplay(next);
        if (resolved >= text.length) {
          setDisplay(text);
          if (interval) clearInterval(interval);
        }
      }, 34);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, delay]);

  // `started` is intentionally tracked so the effect re-runs are explicit.
  void started;
  return display;
}
