import { useDebouncedCallback } from 'use-debounce';
import { ChangeEventHandler, FocusEventHandler, useEffect } from 'react';

const useDebouncedOnChange = ({
  onChange,
  onBlur,
  debounce,
}: {
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  debounce?: number;
}) => {
  const debouncedOnChange = useDebouncedCallback(
    onChange ||
      (() => {
        return;
      }),
    debounce,
  );

  const onBlurHandler: FocusEventHandler<HTMLInputElement> = (event) => {
    if (debounce && debouncedOnChange.isPending()) {
      debouncedOnChange.flush();
    }

    onBlur?.(event);
  };

  useEffect(() => {
    return () => {
      if (debounce && debouncedOnChange.isPending()) {
        debouncedOnChange.flush();
      }
    };
  }, [debounce, debouncedOnChange]);

  return {
    onChange: debounce ? debouncedOnChange : onChange,
    onBlur: debounce ? onBlurHandler : onBlur,
  };
};

export default useDebouncedOnChange;
