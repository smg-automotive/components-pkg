import React, { FC, ReactNode } from 'react';

import { GridItem, Heading } from '@chakra-ui/react';

import BaseLayout from './BaseLayout';
import BaseGridLayout, { repeatArea } from './BaseGrid';
import Link from '../link';
import { ArrowLeftIcon } from '../icons';

interface Props {
  header: ReactNode;
  title?: string | ReactNode;
  backLink?: {
    text: string;
    url: string;
  };
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

const TwoColumnsLayout: FC<Props> = ({
  header,
  title,
  backLink,
  leftContent,
  rightContent,
}) => {
  return (
    <BaseLayout header={header}>
      <BaseGridLayout
        templateAreas={{
          '2xs': `"backlink" "heading" "rightContent" "leftContent"`,
          md: `
            "${repeatArea(12, 'backlink')}"
            "${repeatArea(6, 'heading')} . ${repeatArea(5, 'rightContent')}"
            "${repeatArea(6, 'leftContent')} . ${repeatArea(
            5,
            'rightContent'
          )}"`,
        }}
        gridTemplateRows="minmax(min-content, max-content) minmax(min-content, max-content) 1fr"
      >
        {backLink ? (
          <GridItem area="backlink">
            <Link href={backLink.url} leftIcon={<ArrowLeftIcon />}>
              {backLink.text}
            </Link>
          </GridItem>
        ) : null}
        {title ? (
          <GridItem area="heading">
            {typeof title === 'string' ? (
              <Heading as="h1" textStyle="heading1">
                {title}
              </Heading>
            ) : (
              title
            )}
          </GridItem>
        ) : null}
        {rightContent ? (
          <GridItem area="rightContent">{rightContent}</GridItem>
        ) : null}
        {leftContent ? (
          <GridItem area="leftContent">{leftContent}</GridItem>
        ) : null}
      </BaseGridLayout>
    </BaseLayout>
  );
};

export default TwoColumnsLayout;
