import React, { FC, ReactNode } from 'react';
import {
  Field as ChakraField,
  Switch as ChakraSwitch,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { switchComponentRecipe } from 'src/themes/shared/slotRecipes/switchComponent';

type SwitchComponentVariantProps = RecipeVariantProps<
  typeof switchComponentRecipe
>;

export type SwitchComponentProps = SwitchComponentVariantProps &
  Pick<ChakraSwitch.RootProps, 'onCheckedChange' | 'checked' | 'disabled'> & {
    id: string;
    label?: ReactNode;
  };

const SwitchComponent: FC<SwitchComponentProps> = ({
  id,
  onCheckedChange,
  checked,
  disabled,
  label,
  ...props
}) => {
  const recipe = useSlotRecipe({ key: 'switchComponent' });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles = recipe(recipeProps);

  console.log('SwitchComponent styles:', styles);
  return (
    <ChakraField.Root display="flex" alignItems="center" disabled={disabled}>
      <ChakraSwitch.Root
        onCheckedChange={onCheckedChange}
        checked={checked}
        disabled={disabled}
        css={styles.root}
        {...props}
      >
        <ChakraSwitch.HiddenInput />
        <ChakraSwitch.Control css={styles.control}>
          <ChakraSwitch.Thumb css={styles.thumb} />
        </ChakraSwitch.Control>
      </ChakraSwitch.Root>
      {label ? (
        <ChakraField.Label fontWeight="regular" htmlFor={id} mb={0}>
          {label}
        </ChakraField.Label>
      ) : null}
    </ChakraField.Root>
  );
};
export default SwitchComponent;
