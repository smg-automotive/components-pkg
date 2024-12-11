import { InputType } from '@storybook/core/types';
import type { RecipeDefinition, SlotRecipeDefinition } from '@chakra-ui/react';

import { autoScout24System } from 'src';

const getControlsFromRecipe = (
  recipe: RecipeDefinition | SlotRecipeDefinition,
) => {
  if (!recipe) {
    return {};
  }

  return Object.entries(recipe.variants || {}).reduce(
    (acc, [variantProp, variantDefinitions]) => {
      const variantNames = Object.keys(variantDefinitions);
      const isBooleanish = variantNames.every((x) =>
        ['true', 'false'].includes(x),
      );

      return {
        ...acc,
        [variantProp]: isBooleanish
          ? { control: { type: 'boolean' } }
          : {
              control: { type: 'select' },
              options: variantNames,
            },
      };
    },
    {},
  );
};

const getControlsFromRecipeName = (recipeName: string) =>
  getControlsFromRecipe(
    autoScout24System.getRecipe(recipeName) ||
      autoScout24System.getSlotRecipe(recipeName),
  );

export function getRecipeControls(key: string): Record<string, InputType>;
export function getRecipeControls(
  recipe: RecipeDefinition | SlotRecipeDefinition,
): Record<string, InputType>;

export function getRecipeControls(
  arg: string | RecipeDefinition | SlotRecipeDefinition,
) {
  if (typeof arg === 'string') {
    return getControlsFromRecipeName(arg);
  }

  return getControlsFromRecipe(arg as RecipeDefinition | SlotRecipeDefinition);
}
