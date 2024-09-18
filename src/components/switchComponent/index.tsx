import React, { FC, ReactNode } from 'react';
import { FlexboxProps } from '@chakra-ui/styled-system';
import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

export type SwitchProps = Pick<
  ChakraSwitchProps,
  'onChange' | 'isChecked' | 'variant' | 'isDisabled'
> & {
  label?: ReactNode;
  labelPosition?: FlexboxProps['flexDirection'];
};

const Switch: FC<SwitchProps> = ({
  onChange,
  isChecked,
  variant,
  isDisabled,
  label,
  labelPosition = 'row',
}) => {
  return (
    <FormControl
      width="min-content"
      display="flex"
      alignItems="center"
      gap="sm"
      flexDirection={labelPosition}
    >
      {label ? (
        <FormLabel htmlFor="switch-component" mb="0">
          {label}
        </FormLabel>
      ) : null}
      <ChakraSwitch
        id="switch-component"
        onChange={onChange}
        isChecked={isChecked}
        variant={variant}
        isDisabled={isDisabled}
      />
    </FormControl>
  );
};
export default Switch;
