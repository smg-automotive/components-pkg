import React, { FC, useEffect, useRef } from 'react';

import useMediaQuery from 'src/hooks/useMediaQuery';

import { MagnifierIcon } from '../icons/index';

import Input from './index';

export type SearchFieldOptions = {
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  autofocusOnDesktop?: boolean;
};

export type SearchFieldProps = {
  name: string;
  ariaControls?: string;
  searchQuery: string;
  setSearchQuery: (newQuery: string) => void;
} & SearchFieldOptions;

export const SearchField: FC<SearchFieldProps> = ({
  name,
  placeholder = '',
  ariaControls = '',
  searchQuery,
  setSearchQuery,
  onFocus = () => null,
  onBlur = () => null,
  autofocusOnDesktop = true,
}) => {
  const isDesktopOnly = useMediaQuery({ above: 'md' });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocusOnDesktop && isDesktopOnly) {
      inputRef.current?.focus();
    }
  }, [isDesktopOnly, autofocusOnDesktop]);

  return (
    <Input
      ref={inputRef}
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
    />
  );
};
