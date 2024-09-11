import React, { FC } from 'react';

import Text from '../text/index';
import HighlightedText from '../text/HighlightedText';
import { CheckmarkIcon, ChevronRightSmallIcon } from '../icons/index';
import Flex from '../flex/index';
import { ListItemType } from './SearchableListItem';

type LabelProps = Pick<
  ListItemType,
  | 'label'
  | 'isSelected'
  | 'showChevron'
  | 'highlightIndices'
  | 'facet'
  | 'isCheckbox'
>;

export const SearchableListItemLabel: FC<LabelProps> = ({
  label,
  isSelected,
  showChevron = true,
  highlightIndices = [],
  isCheckbox = false,
  facet,
}) => {
  return (
    <Flex
      width="full"
      justifyContent="space-between"
      whiteSpace="pre-wrap"
      fontWeight={isSelected && !isCheckbox ? 'bold' : undefined}
      color="gray.900"
    >
      <Flex>
        {isSelected && !isCheckbox ? (
          <CheckmarkIcon w="xs" mr="xs" color="gray.900" />
        ) : null}
        <HighlightedText
          text={label}
          highlightIndices={highlightIndices}
          textAlign="left"
        />
      </Flex>
      <Flex as="span">
        {facet ? (
          <Text
            as="span"
            color="gray.400"
            mr={showChevron ? 'lg' : 0}
            ml="sm"
            minW="6ch"
            textAlign="right"
            fontWeight="regular"
          >
            {facet}
          </Text>
        ) : null}
        {showChevron ? (
          <ChevronRightSmallIcon color="gray.500" w="sm" h="sm" />
        ) : null}
      </Flex>
    </Flex>
  );
};
