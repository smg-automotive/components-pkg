import React, { FC } from 'react';
import { useI18n } from '@smg-automotive/i18n-pkg';
import { chakra } from '@chakra-ui/react';

import { CompareIcon } from 'src/components/icons';
import Count from 'src/components/count';
import Box from 'src/components/box';

import { Link } from '../link';

export const shouldShowComparisonLink = (
  comparisonItemIds?: number[] | null,
): comparisonItemIds is number[] => {
  return !!comparisonItemIds && Array.isArray(comparisonItemIds);
};

export const getComparisonUrl = (comparisonItemIds: number[]) => {
  const basePathSegment = 'comparison';
  if (comparisonItemIds.length === 0) return basePathSegment;
  return `${basePathSegment}/${comparisonItemIds.join('/')}`;
};

type Props = {
  link: Link;
  count: number;
};

const ComparisonItem: FC<Props> = ({ link, count }) => {
  const { t, language } = useI18n();

  return (
    <chakra.a
      position="relative"
      href={link.link?.[language]}
      onClick={link.onClick}
      aria-label={t(link.translationKey ?? '', link.translationParameters)}
      mr="15px"
    >
      <CompareIcon color="gray.900" />
      <Box position="absolute" top={-10} right={-15}>
        {count > 0 ? <Count count={count} /> : null}
      </Box>
    </chakra.a>
  );
};

export default ComparisonItem;
