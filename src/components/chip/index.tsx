import React, { FC, PropsWithChildren } from 'react';
import { Box, Flex, FlexProps, Text, useRecipe } from '@chakra-ui/react';

import { chipRecipe } from 'src/themes/shared/recipes/chip';
import { CheckmarkIcon } from 'src/components/icons/CheckmarkIcon';

export type ChipProps = {
  variant?: 'default' | 'selected' | 'disabled';
  onClick?: () => void;
  href?: string;
  'aria-label'?: string;
};

const Chip: FC<PropsWithChildren<ChipProps>> = ({
  children,
  variant = 'default',
  onClick,
  href,
  'aria-label': ariaLabel,
  ...rest
}) => {
  const recipe = useRecipe({ recipe: chipRecipe });
  const [recipeProps] = recipe.splitVariantProps({
    variant,
  });
  const styles = recipe(recipeProps);

  const isDisabled = variant === 'disabled';

  const handleClick = () => {
    if (!isDisabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isDisabled && (event.key === 'Enter' || event.key === ' ')) {
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
      {...(isLink && !isDisabled ? { href } : {})}
      {...(!isLink ? { type: 'button' } : {})}
      onClick={!isDisabled ? handleClick : undefined}
      onKeyDown={handleKeyDown}
      tabIndex={isDisabled ? -1 : 0}
      {...commonProps}
    >
      {variant === 'selected' ? (
        <Box
          mr="xs"
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

export default Chip;
