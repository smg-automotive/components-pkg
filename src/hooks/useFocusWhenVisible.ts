import { RefObject, useEffect } from 'react';

export const useFocusWhenVisible = (
  ref: RefObject<HTMLElement | null>,
  enabled: boolean = true,
  maxWaitTime: number = 1000,
) => {
  useEffect(() => {
    const el = ref.current;

    if (!enabled || !el) return;

    let rafId: number | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    let hasSucceeded = false;

    const isVisible = (): boolean => {
      const visibility = getComputedStyle(el).visibility;
      return visibility === 'visible';
    };

    const cleanup = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    const checkWithPolling = () => {
      if (hasSucceeded) return;

      if (isVisible()) {
        hasSucceeded = true;
        el.focus();
        cleanup();
      } else {
        rafId = requestAnimationFrame(checkWithPolling);
      }
    };

    rafId = requestAnimationFrame(checkWithPolling);

    timeoutId = setTimeout(() => {
      cleanup();
    }, maxWaitTime);

    return cleanup;
  }, [ref, enabled, maxWaitTime]);
};
