import React, { FC, PropsWithChildren } from 'react';
import { useSlotRecipe } from '@chakra-ui/react';

import type { ResponsiveValue } from 'src/types/responsiveValue';
import type { BreakpointName } from 'src/themes/shared/breakpoints';

import { Box } from '../box';

interface Props {
  onClick: () => void;
  slideIndex: number;
  totalSlides: number;
  isCurrent: boolean;
  fullScreen: boolean;
  slidesPerView: ResponsiveValue<number> | 1;
}

export const Slide: FC<PropsWithChildren<Props>> = ({
  onClick,
  slideIndex,
  totalSlides,
  isCurrent,
  children,
  fullScreen,
  slidesPerView,
}) => {
  const recipe = useSlotRecipe({ key: 'carousel' });
  const styles = recipe(fullScreen ? { variant: 'fullScreen' } : {});

  const flexBasisTokenOrVar =
    slidesPerView === 1 ? 'full' : 'var(--carousel-slide-basis)';

  const basisVarResponsive: ResponsiveValue<string> | undefined =
    slidesPerView === 1
      ? undefined
      : (() => {
          const map = slidesPerView as Partial<Record<BreakpointName, number>>;
          const result: ResponsiveValue<string> = {};
          (Object.keys(map) as BreakpointName[]).forEach((bp) => {
            const value = map[bp];
            if (typeof value === 'number') {
              result[bp] = `calc(100% / ${value})`;
            }
          });
          return result;
        })();

  return (
    <Box
      css={{
        ...styles.slide,
        ...(basisVarResponsive
          ? { '--carousel-slide-basis': basisVarResponsive }
          : {}),
      }}
      flexBasis={flexBasisTokenOrVar}
      paddingLeft={slidesPerView === 1 ? '0' : { base: 'md', md: '2xl' }}
      onClick={onClick}
      aria-roledescription="slide"
      aria-label={`${slideIndex + 1} of ${totalSlides}`}
      aria-current={isCurrent}
    >
      {children}
    </Box>
  );
};
