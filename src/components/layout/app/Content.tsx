import React from 'react';
import { ComponentWithAs, forwardRef } from '@chakra-ui/react';

import GridItem, { GridItemProps } from 'src/components/grid/GridItem';

const AppLayoutContent: ComponentWithAs<'div', GridItemProps> = forwardRef<
  GridItemProps,
  'div'
>((props, ref) => {
  return (
    <GridItem
      area="content"
      ref={ref}
      {...(props as GridItemProps)}
      marginBottom={{ md: '4xl', base: '3xl' }}
    />
  );
});

AppLayoutContent.displayName = 'AppLayoutContent';

export default AppLayoutContent;
