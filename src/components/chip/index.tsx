import React, { FC, PropsWithChildren } from 'react';
import {
  Box,
  Flex,
  FlexProps,
  RecipeVariantProps,
  Text,
  useRecipe,
} from '@chakra-ui/react';

import { chipRecipe } from 'src/themes/shared/recipes/chip';
import { CheckmarkIcon } from 'src/components/icons/CheckmarkIcon';

export type ChipProps = {
  onClick?: () => void;
  href?: string;
  'aria-label'?: string;
} & RecipeVariantProps<typeof chipRecipe>;

export const Chip: FC<PropsWithChildren<ChipProps>> = ({
  children,
  onClick,
  href,
  'aria-label': ariaLabel,
  ...rest
}) => {
  const recipe = useRecipe({ recipe: chipRecipe });
  const [recipeProps] = recipe.splitVariantProps(rest);
  const styles = recipe(recipeProps);

  const handleClick = () => {
    onClick?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  const commonProps = {
    css: styles,
    'aria-label': ariaLabel,
    ...rest,
  } as Partial<FlexProps>;

  const isLink = Boolean(href);
  const asType = isLink ? 'a' : 'button';

  return (
    <Flex
      as={asType}
      {...(isLink && onClick ? { href } : {})}
      {...(!isLink ? { type: 'button' } : {})}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...commonProps}
    >
      {recipeProps.selected ? (
        <Box
          mx="xs"
          color="currentColor"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CheckmarkIcon height="xs" width="xs" />
        </Box>
      ) : null}
      <Box as="span" whiteSpace="nowrap">
        <Text textStyle="body-small">{children}</Text>
      </Box>
    </Flex>
  );
};

Chip.displayName = 'Chip';
