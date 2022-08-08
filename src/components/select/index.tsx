import React, { FC } from 'react';
import { Select as ChakraSelect, SelectProps } from '@chakra-ui/react';

import { ArrowDownIcon } from '../icons';

type Option = {
  value: string | number;
  option: string;
};

type Props = Pick<
  SelectProps,
  | 'placeholder'
  | 'isInvalid'
  | 'isDisabled'
  | 'onBlur'
  | 'onFocus'
  | 'onChange'
  | 'autoFocus'
> & {
  size?: 'md' | 'lg';
  value?: string | number;
  name: string;
  options: Option[];
};

const Select: FC<Props> = ({ options, ...props }) => {
  return (
    <ChakraSelect {...props} icon={<ArrowDownIcon />}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.option}
        </option>
      ))}
    </ChakraSelect>
  );
};

export default Select;
