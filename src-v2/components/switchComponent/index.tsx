import React, { FC, ReactNode } from 'react';
import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

export type SwitchProps = Pick<
  ChakraSwitchProps,
  'onChange' | 'isChecked' | 'isDisabled' | 'aria-label'
> & {
  id: string;
  label?: ReactNode;
};

const Switch: FC<SwitchProps> = ({
  id,
  onChange,
  isChecked,
  isDisabled,
  label,
  ...rest
}) => {
  return (
    <FormControl display="flex" alignItems="center" isDisabled={isDisabled}>
      <ChakraSwitch
        id={id}
        onChange={onChange}
        isChecked={isChecked}
        isDisabled={isDisabled}
        mr="sm"
        {...rest}
      />
      {label ? (
        <FormLabel fontWeight="regular" htmlFor={id} mb={0}>
          {label}
        </FormLabel>
      ) : null}
    </FormControl>
  );
};
export default Switch;
