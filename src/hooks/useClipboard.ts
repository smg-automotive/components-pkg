import { useCallback, useEffect, useRef, useState } from 'react';

type UseClipboardOptions = {
  timeout?: number;
};

type UseClipboardReturn = {
  hasCopied: boolean;
  onCopy: () => Promise<boolean>;
};

const fallbackCopy = (text: string): boolean => {
  if (typeof document === 'undefined') return false;

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  textarea.style.pointerEvents = 'none';

  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();

  let successful = false;

  try {
    successful = document.execCommand('copy');
  } catch {
    successful = false;
  }

  document.body.removeChild(textarea);
  return successful;
};

const copyWithClipboardAPI = async (text: string): Promise<boolean> => {
  if (typeof window === 'undefined') return false;

  const nav = window.navigator as Navigator & {
    clipboard?: {
      writeText?: (value: string) => Promise<void>;
    };
  };

  if (!nav.clipboard || typeof nav.clipboard.writeText !== 'function') {
    return false;
  }

  await nav.clipboard.writeText(text);
  return true;
};

const useClipboard = (
  value: string,
  options: UseClipboardOptions = {},
): UseClipboardReturn => {
  const { timeout = 1500 } = options;
  const [hasCopied, setHasCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const onCopy = useCallback(async (): Promise<boolean> => {
    let copied = false;

    try {
      copied = await copyWithClipboardAPI(value);

      if (!copied) {
        copied = fallbackCopy(value);
      }
    } catch {
      copied = fallbackCopy(value);
    }

    if (!copied) {
      setHasCopied(false);
      return false;
    }

    setHasCopied(true);

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setHasCopied(false);
      timeoutRef.current = null;
    }, timeout);

    return true;
  }, [timeout, value]);

  return {
    hasCopied,
    onCopy,
  };
};

export default useClipboard;
