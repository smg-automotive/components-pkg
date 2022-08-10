import React, { FC } from 'react';
import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react';

import { ChevronIcon } from '../icons';

type OptionsAndValue<T extends string | number> = {
  options: {
    value: T;
    label: string;
  }[];
  value?: T;
};

type Props = Pick<
  ChakraSelectProps,
  | 'placeholder'
  | 'isInvalid'
  | 'isDisabled'
  | 'onBlur'
  | 'onFocus'
  | 'onChange'
  | 'autoFocus'
> & {
  size?: 'md' | 'lg';
  name: string;
} & (OptionsAndValue<string> | OptionsAndValue<number>);

const Select: FC<Props> = ({ options, ...props }) => {
  return (
    <ChakraSelect {...props} icon={<ChevronIcon />}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </ChakraSelect>
  );
};

export default Select;
