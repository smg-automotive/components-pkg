import React, { FC, ReactNode } from 'react';
import {
  Switch as ChakraSwitch,
  SwitchCheckedChangeDetails,
  SystemStyleObject,
  useSlotRecipe,
} from '@chakra-ui/react';

export type SwitchComponentProps = {
  onChange: (details: SwitchCheckedChangeDetails) => void;
  isDisabled: boolean;
  isChecked: boolean;
  id: string;
  label?: ReactNode;
};

type SwitchComponentSlots = 'root' | 'control' | 'thumb' | 'label';

const SwitchComponent: FC<SwitchComponentProps> = ({
  id,
  isDisabled,
  onChange,
  isChecked,
  label,
  ...props
}) => {
  const recipe = useSlotRecipe({ key: 'switchComponent' });
  const [recipeProps] = recipe.splitVariantProps(props);
  const styles: Partial<Record<SwitchComponentSlots, SystemStyleObject>> =
    recipe(recipeProps);

  return (
    <ChakraSwitch.Root
      onCheckedChange={onChange}
      checked={isChecked}
      disabled={isDisabled}
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
export default SwitchComponent;
