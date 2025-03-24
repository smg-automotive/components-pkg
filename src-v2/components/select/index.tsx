import React, { forwardRef } from 'react';
import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react';

import { ChevronDownLargeIcon } from '../icons';

export type Option<T extends string | number> = {
  value: T;
  label: string;
};

type OptionsAndValue<T extends string | number> = {
  options: Option<T>[];
  value?: T;
};

export type Props = Pick<
  ChakraSelectProps,
  | 'placeholder'
  | 'isInvalid'
  | 'isDisabled'
  | 'onBlur'
  | 'onFocus'
  | 'onChange'
  | 'autoFocus'
  | 'borderLeftRadius'
  | 'borderRightRadius'
> & {
  size?: 'md' | 'lg';
  name: string;
} & (OptionsAndValue<string> | OptionsAndValue<number>);

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ options, ...props }, ref) => {
    return (
      <ChakraSelect {...props} icon={<ChevronDownLargeIcon />} ref={ref}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </ChakraSelect>
    );
  },
);
Select.displayName = 'Select';

export default Select;
