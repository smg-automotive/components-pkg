import React, { FC, ReactNode } from 'react';
import {
  Switch as ChakraSwitch,
  SystemStyleObject,
  useSlotRecipe,
} from '@chakra-ui/react';

export type SwitchComponentProps = Pick<
  ChakraSwitch.RootProps,
  'onCheckedChange' | 'checked' | 'disabled'
> & {
  id: string;
  label?: ReactNode;
};

type SwitchComponentSlots = 'root' | 'control' | 'thumb' | 'label';

export const SwitchComponent: FC<SwitchComponentProps> = ({
  id,
  disabled,
  onCheckedChange,
  checked,
  label,
  ...props
}) => {
  const recipe = useSlotRecipe({ key: 'switchComponent' });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles: Partial<Record<SwitchComponentSlots, SystemStyleObject>> =
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
