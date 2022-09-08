import React, { FC } from 'react';
import {
  Radio as ChakraRadio,
  RadioProps as ChakraRadioProps,
} from '@chakra-ui/react';

const Radio: FC<ChakraRadioProps> = ({
  isChecked,
  isInvalid,
  isDisabled,
  name,
  onChange,
}) => {
  return (
    <ChakraRadio
      name={name}
      isChecked={isChecked}
      isInvalid={isInvalid}
      onChange={onChange}
      isDisabled={isDisabled}
    >
      {name}
    </ChakraRadio>
  );
};

export default Radio;
