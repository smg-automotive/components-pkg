import React, { FC, ReactNode } from 'react';

import { GridItem, Heading } from '@chakra-ui/react';

import BaseGridLayout, { repeatArea } from './BaseGrid';
import Link from '../link';
import { ArrowLeftIcon } from '../icons';
import Divider from '../divider';

interface Props {
  header: ReactNode;
  title?: string;
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
    <BaseGridLayout
      templateAreas={{
        xs: `"header" "backlink" "heading" "rightContent" "leftContent"`,
        lg: `
            "${repeatArea(12, 'header')}"
            "${repeatArea(12, 'backlink')}"
            "${repeatArea(6, 'heading')} . ${repeatArea(5, 'rightContent')}"
            "${repeatArea(6, 'leftContent')} . ${repeatArea(
          5,
          'rightContent'
        )}"`,
      }}
      gridTemplateRows="minmax(min-content, max-content) minmax(min-content, max-content) minmax(min-content, max-content) 1fr"
    >
      <GridItem area="header">
        {header}
        <Divider />
      </GridItem>
      {backLink ? (
        <GridItem area="backlink">
          <Link href={backLink.url} leftIcon={<ArrowLeftIcon />}>
            {backLink.text}
          </Link>
        </GridItem>
      ) : null}
      {title ? (
        <GridItem area="heading">
          <Heading as="h1" textStyle="heading1">
            {title}
          </Heading>
        </GridItem>
      ) : null}
      {rightContent ? (
        <GridItem area="rightContent">{rightContent}</GridItem>
      ) : null}
      {leftContent ? (
        <GridItem area="leftContent">{leftContent}</GridItem>
      ) : null}
    </BaseGridLayout>
  );
};

export default TwoColumnsLayout;
