import React, { FC, JSX } from 'react';
import { useRadioGroup, UseRadioGroupProps, VStack } from '@chakra-ui/react';

import Divider from '../divider';
import { RadioListItem } from './RadioListItem';

type RadioListProps = {
  options: JSX.Element[];
} & Pick<UseRadioGroupProps, 'name' | 'defaultValue' | 'onChange'>;

const RadioList: FC<RadioListProps> = ({
  name,
  defaultValue,
  options,
  onChange,
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    onChange,
  });
  const group = getRootProps();

  return (
    <VStack {...group} spacing={0} divider={<Divider key="divider" />}>
      {options.map((option) => {
        const radio = getRadioProps({ value: option.key });
        return (
          <RadioListItem key={option.key} {...radio}>
            {option}
          </RadioListItem>
        );
      })}
    </VStack>
  );
};

export default RadioList;
