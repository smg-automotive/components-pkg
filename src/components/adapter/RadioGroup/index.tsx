import React from 'react';

import {
  RadioGroup as RadioGroupChakra,
  RadioGroupRootProps,
} from '@chakra-ui/react';

type Props = RadioGroupRootProps & {
  onChange?: (value: string) => void;
};

export const RadioGroup: React.FC<Props> = (props) => {
  const { onChange, ...rest } = props;

  const onChangeHandler = onChange
    ? (details: { value: string | null }) => {
        onChange(details.value || '');
      }
    : undefined;

  return (
    <RadioGroupChakra.Root
      {...(onChangeHandler ? { onValueChange: onChangeHandler } : {})}
      {...rest}
    />
  );
};
