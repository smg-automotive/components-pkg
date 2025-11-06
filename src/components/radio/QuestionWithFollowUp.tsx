import React, { forwardRef, PropsWithChildren } from 'react';

import FormControlSection from '../formControlSection';
import Flex from '../flex';
import Divider from '../divider';

import Radio from './index';
import { RadioGroup as ChakraRadioGroup } from '.';

export type Option = { label: string; value: string };

export type FollowUpProps = {
  id: string;
  name: string;
  options: { label: string; value: string }[];
  groupLabel: string;
  tooltip?: string;
  hint?: string;
  followUps?: Partial<Record<string, FollowUpProps>>;
};

export type Props<TOptions extends readonly Option[] = Option[]> = {
  id: string;
  name: string;
  values: Record<string, string>;
  onChange: (values: Record<string, string>) => void;
  options: TOptions;
  groupLabel: string;
  tooltip?: string;
  errorMessage?: string;
  hint?: string;
  followUps?: Partial<Record<TOptions[number]['value'], FollowUpProps>>;
};

type RadioGroupWithFollowUpProps = {
  id: string;
  name: string;
  values: Record<string, string>;
  onChange: (values: Record<string, string>) => void;
  options: Option[];
  followUps?: Partial<Record<string, FollowUpProps>>;
  inputRef?: React.Ref<HTMLInputElement>;
};

const RadioGroupWithFollowUp: React.FC<RadioGroupWithFollowUpProps> = ({
  id,
  name,
  values,
  onChange,
  options,
  followUps,
  inputRef,
}) => {
  const currentValue = values[id];

  const handleChange = (groupId: string, value: string) => {
    const newValues = { ...values, [groupId]: value };

    if (followUps) {
      for (const [key, followUp] of Object.entries(followUps)) {
        if (!followUp) continue;
        if (key !== value && followUp.id in newValues) {
          delete newValues[followUp.id];
        }
      }
    }

    onChange(newValues);
  };

  return (
    <ChakraRadioGroup
      value={currentValue || ''}
      onChange={(value) => handleChange(id, value)}
    >
      <Flex flexDirection="column">
        {options.map(({ label, value }) => (
          <Radio
            key={value}
            name={name}
            value={value}
            isChecked={value === currentValue}
            ref={inputRef}
            label={label}
            isInvalid={false}
          />
        ))}

        {followUps?.[currentValue] ? (
          <>
            <Divider marginY="xl" />
            <RadioGroupWithFollowUp
              {...followUps[currentValue]}
              values={values}
              onChange={onChange}
            />
          </>
        ) : null}
      </Flex>
    </ChakraRadioGroup>
  );
};

const QuestionWithFollowUp = forwardRef<
  HTMLInputElement,
  PropsWithChildren<Props>
>(
  (
    {
      id,
      name,
      values,
      onChange,
      options,
      groupLabel,
      tooltip,
      errorMessage,
      hint,
      followUps,
    },
    ref,
  ) => {
    return (
      <FormControlSection
        id={id}
        errorMessage={errorMessage}
        label={groupLabel}
        hint={hint}
        tooltip={tooltip}
      >
        <RadioGroupWithFollowUp
          id={id}
          name={name}
          values={values}
          onChange={onChange}
          options={options}
          followUps={followUps}
          inputRef={ref}
        />
      </FormControlSection>
    );
  },
);

QuestionWithFollowUp.displayName = 'QuestionWithFollowUp';

export default QuestionWithFollowUp;
