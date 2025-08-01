import React, { FC, MutableRefObject } from 'react';

import { CloseButton, useRecipe } from '@chakra-ui/react';

import { clearButtonRecipe } from 'src/themes/shared/recipes/clearButton';

import { CloseIcon } from '../icons';

type Props = {
  inputRef: MutableRefObject<HTMLInputElement | null>;
};

const triggerNativeEventFor = (
  elm: Element,
  { event, ...valueObj }: Record<string, unknown> & { event: Event['type'] },
) => {
  if (!(elm instanceof Element)) {
    throw new Error(`Expected an Element but received ${elm} instead!`);
  }

  const [prop, value] = Object.entries(valueObj)[0] ?? [];
  const desc = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(elm),
    prop,
  );

  desc?.set?.call(elm, value);
  elm.dispatchEvent(new Event(event, { bubbles: true }));
};

export const ClearButton: FC<Props> = ({ inputRef }) => {
  const recipe = useRecipe({ recipe: clearButtonRecipe });
  const styles = recipe();

  return (
    <CloseButton
      css={styles}
      role="button"
      onClick={() => {
        if (!inputRef.current) return;

        triggerNativeEventFor(inputRef.current, {
          event: 'input',
          value: '',
        });
        inputRef.current.focus();
      }}
    >
      <CloseIcon w="xs" h="xs" />
    </CloseButton>
  );
};
