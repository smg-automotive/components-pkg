import React, { FC } from 'react';
import { RadioGroup, VStack } from '@chakra-ui/react';

import { StackSeparator } from 'src/components/stack';

import { RadioListItem } from './RadioListItem';

type RadioListProps = {
  options: React.ReactElement[];
  name?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

export const RadioList: FC<RadioListProps> = ({
  name,
  defaultValue,
  options,
  onChange,
}) => {
  const handleValueChange = (details: { value: string | null }) => {
    if (details.value != null) {
      onChange?.(details.value);
    }
  };

  return (
    <RadioGroup.Root
      name={name}
      defaultValue={defaultValue}
      onValueChange={handleValueChange}
    >
      <VStack
        gap="0"
        align="stretch"
        separator={<StackSeparator borderColor="gray.100" />}
      >
        {options.map((option, idx) => {
          // Chakra v3 RadioGroup expects item values to be strings.
          // Since React `option.key` may be a number, we explicitly convert it to `String(key)`.
          const value = option.key != null ? String(option.key) : String(idx);

          return (
            <RadioListItem key={option.key ?? idx} value={value}>
              {option}
            </RadioListItem>
          );
        })}
      </VStack>
    </RadioGroup.Root>
  );
};
