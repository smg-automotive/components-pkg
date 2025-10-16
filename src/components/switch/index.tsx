import React, { FC, ReactNode } from 'react';
import {
  Switch as ChakraSwitch,
  SystemStyleObject,
  useSlotRecipe,
} from '@chakra-ui/react';

export type SwitchProps = Pick<
  ChakraSwitch.RootProps,
  'onCheckedChange' | 'checked' | 'disabled'
> & {
  id: string;
  label?: ReactNode;
};

type SwitchSlots = 'root' | 'control' | 'thumb' | 'label';

export const Switch: FC<SwitchProps> = ({
  id,
  disabled,
  onCheckedChange,
  checked,
  label,
  ...props
}) => {
  const recipe = useSlotRecipe({ key: 'switch' });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles: Partial<Record<SwitchSlots, SystemStyleObject>> =
    recipe(recipeProps);

  return (
    <ChakraSwitch.Root
      onCheckedChange={onCheckedChange}
      checked={checked}
      disabled={disabled}
      css={styles.root}
    >
      <ChakraSwitch.HiddenInput />
      <ChakraSwitch.Control css={styles.control}>
        <ChakraSwitch.Thumb css={styles.thumb} />
      </ChakraSwitch.Control>
      {label ? (
        <ChakraSwitch.Label css={styles.label}>{label}</ChakraSwitch.Label>
      ) : null}
    </ChakraSwitch.Root>
  );
};
