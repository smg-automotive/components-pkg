import React, { FC } from 'react';
import { Select as ChakraSelect, SelectProps } from '@chakra-ui/react';

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

const Select: FC<Props> = (props) => {
  return (
    <ChakraSelect {...props} variant="outline">
      {props.options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.option}
        </option>
      ))}
    </ChakraSelect>
  );
};

export default Select;
