import React, { forwardRef, useEffect, useRef } from 'react';

import useMediaQuery from 'src/hooks/useMediaQuery';

import { MagnifierIcon } from '../icons/index';

import Input from './index';

export type SearchFieldOptions = {
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  autofocusOnDesktop?: boolean;
  autoComplete?: 'on' | 'off';
};

export type SearchFieldProps = {
  name: string;
  ariaControls?: string;
  searchQuery: string;
  setSearchQuery: (newQuery: string) => void;
} & SearchFieldOptions;

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      name,
      placeholder = '',
      ariaControls = '',
      searchQuery,
      setSearchQuery,
      onFocus = () => null,
      onBlur = () => null,
      autofocusOnDesktop = true,
      autoComplete,
    },
    ref,
  ) => {
    const isDesktopOnly = useMediaQuery({ above: 'md' });
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (autofocusOnDesktop && isDesktopOnly) {
        inputRef.current?.focus();
      }
    }, [isDesktopOnly, autofocusOnDesktop]);

    return (
      <Input
        ref={(input) => {
          if (!input) return;

          inputRef.current = input;

          if (typeof ref === 'function') {
            ref(input);
          } else if (ref) {
            ref.current = input;
          }
        }}
        icon={MagnifierIcon}
        name={name}
        placeholder={placeholder}
        value={searchQuery}
        setInputValue={setSearchQuery}
        size="lg"
        isClearable={true}
        debounce={true}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-controls={ariaControls}
        autoComplete={autoComplete}
      />
    );
  },
);
