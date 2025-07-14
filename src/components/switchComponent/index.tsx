import React, { FC, ReactNode } from 'react';
import {
    Switch as ChakraSwitch,
    Field as ChakraField,
    useSlotRecipe,
    RecipeVariantProps,
} from '@chakra-ui/react';

import { switchComponentRecipe } from 'src/themes/shared/slotRecipes/switchComponent';

type SwitchComponentVariantProps = RecipeVariantProps<typeof switchComponentRecipe>;

export type SwitchComponentProps = SwitchComponentVariantProps & Pick<
    ChakraSwitch.RootProps,
    'onCheckedChange' | 'checked' | 'disabled'
> & {
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
    const [recipeProps, componentProps] = recipe.splitVariantProps(props);
    const styles = recipe(recipeProps);
    return (
        <ChakraField.Root display="flex" alignItems="center" disabled={disabled}>
            <ChakraSwitch.Root onCheckedChange={onCheckedChange} checked={checked} disabled={disabled} css={styles.root} {...props}>
                <ChakraSwitch.HiddenInput />
                <ChakraSwitch.Control css={styles.control}>
                    <ChakraSwitch.Thumb css={styles.thumb} />
                </ChakraSwitch.Control>
                <ChakraSwitch.Label css={styles.label} />
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