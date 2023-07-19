import React, { FC, ReactNode } from 'react';

import { GridItem, Heading } from '@chakra-ui/react';

import { sizes } from 'src/themes/shared/sizes';

import Link from '../link';
import { ArrowLeftIcon } from '../icons';
import BaseLayout from './BaseLayout';
import BaseGridLayout, { repeatArea } from './BaseGrid';

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export interface TwoColumnsLayoutProps {
  header?: ReactNode;
  title?: string | ReactNode;
  backLink?:
    | {
        text: string;
        url: string;
      }
    | ReactNode;
  left: {
    content: ReactNode;
    columns?: ColumnSize;
  };
  right: {
    content: ReactNode;
    columns?: ColumnSize;
  };
  maxContentWidth?: keyof typeof sizes.container;
}

const TwoColumnsLayout: FC<TwoColumnsLayoutProps> = (props) => {
  const {
    header,
    title,
    left: { content: leftContent, columns: leftColumns = 6 },
    right: { content: rightContent, columns: rightColumns = 6 },
    maxContentWidth = 'lg',
  } = props;

  return (
    <BaseLayout header={header} maxContentWidth={maxContentWidth}>
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
                    'rightContent',
                  )}"`
                : ''
            }
            "${repeatArea(leftColumns, 'leftContent')} ${repeatArea(
              rightColumns,
              'rightContent',
            )}"`,
        }}
        templateRows="minmax(min-content, max-content) minmax(min-content, max-content) 1fr"
      >
        {props.backLink ? (
          <GridItem area="backlink">
            {typeof props.backLink === 'object' && 'url' in props.backLink ? (
              <Link href={props.backLink.url} leftIcon={<ArrowLeftIcon />}>
                {props.backLink.text}
              </Link>
            ) : (
              props.backLink
            )}
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
