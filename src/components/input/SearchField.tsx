import React, { FC, useEffect, useRef } from 'react';

import { MagnifierIcon } from '../icons/index';
// eslint-disable-next-line no-restricted-imports
import useMediaQuery from '../../hooks/useMediaQuery';

import Input from './index';

export type SearchFieldOptions = {
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  autofocusOnDesktop?: boolean;
};

type Props = {
  name: string;
  ariaControls?: string;
  searchQuery: string;
  setSearchQuery: (newQuery: string) => void;
} & SearchFieldOptions;

export const SearchField: FC<Props> = ({
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
