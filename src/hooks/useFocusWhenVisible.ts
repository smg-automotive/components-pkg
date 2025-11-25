import { RefObject, useEffect } from 'react';

const useFocusWhenVisible = ({
  ref,
  enabled = true,
  maxWaitTime = 1000,
}: {
  ref: RefObject<HTMLElement | null>;
  enabled?: boolean;
  maxWaitTime?: number;
}) => {
  useEffect(() => {
    const el = ref.current;

    if (!enabled || !el) return;

    let rafId: number | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    let shouldStop = false;

    const isVisible = (): boolean => {
      if (el.offsetParent === null) {
        const style = getComputedStyle(el);
        return style.position === 'fixed' && style.visibility === 'visible';
      }

      return getComputedStyle(el).visibility === 'visible';
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
      if (shouldStop) return;

      if (isVisible()) {
        el.focus();

        if (document.activeElement === el) {
          shouldStop = true;
          cleanup();
          return;
        }
      }

      rafId = requestAnimationFrame(checkWithPolling);
    };

    rafId = requestAnimationFrame(checkWithPolling);
    timeoutId = setTimeout(() => {
      shouldStop = true;
      cleanup();
    }, maxWaitTime);

    return cleanup;
  }, [ref, enabled, maxWaitTime]);
};

export default useFocusWhenVisible;
