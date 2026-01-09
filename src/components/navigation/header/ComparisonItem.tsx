import React, { FC } from 'react';
import { chakra } from '@chakra-ui/react';

import { useI18n } from 'src/utilities/i18nInit';
import { CompareIcon } from 'src/components/icons';
import { Count } from 'src/components/count';
import { Box } from 'src/components/box';

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

export const ComparisonItem: FC<Props> = ({ link, count }) => {
  const { t, language } = useI18n();

  return (
    <chakra.a
      position="relative"
      display="block"
      href={link.link?.[language]}
      onClick={link.onClick}
      aria-label={t(link.translationKey ?? '', link.translationParameters)}
      mr="lg"
    >
      <CompareIcon color="gray.900" />
      <Box position="absolute" css={{ top: '-10px', right: '-15px' }}>
        {count > 0 ? <Count count={count} /> : null}
      </Box>
    </chakra.a>
  );
};
