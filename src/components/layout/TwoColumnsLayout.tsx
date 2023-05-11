import React, { FC, ReactNode } from 'react';

import { GridItem, Heading } from '@chakra-ui/react';

import Link from '../link';
import { ArrowLeftIcon } from '../icons';
import BaseLayout from './BaseLayout';
import BaseGridLayout, { repeatArea } from './BaseGrid';

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

interface Props {
  header?: ReactNode;
  title?: string | ReactNode;
  backLink?: {
    text: string;
    url: string;
  };
  left: {
    content: ReactNode;
    columns?: ColumnSize;
  };
  right: {
    content: ReactNode;
    columns?: ColumnSize;
  };
}

const TwoColumnsLayout: FC<Props> = ({
  header,
  title,
  backLink,
  left: { content: leftContent, columns: leftColumns = 6 },
  right: { content: rightContent, columns: rightColumns = 6 },
}) => {
  return (
    <BaseLayout header={header} maxContentWidth="lg">
      <BaseGridLayout
        templateAreas={{
          '2xs': `"backlink" ${
            title ? '"heading"' : ''
          } "rightContent" "leftContent"`,
          md: `
            "${repeatArea(leftColumns + rightColumns, 'backlink')}"
            ${
              title
                ? `"${repeatArea(leftColumns, 'heading')} ${repeatArea(
                    rightColumns,
                    'rightContent'
                  )}"`
                : ''
            }
            "${repeatArea(leftColumns, 'leftContent')} ${repeatArea(
            rightColumns,
            'rightContent'
          )}"`,
        }}
        templateRows="minmax(min-content, max-content) minmax(min-content, max-content) 1fr"
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
