import React, { FC } from 'react';

import { RangeTuple } from 'fuse.js';

import Text from '../text/index';
import HighlightedText from '../text/HighlightedText';
import { CheckmarkIcon, ChevronRightSmallIcon } from '../icons/index';
import Flex from '../flex/index';
import Divider from '../divider/index';
import Box from '../box/index';
import ListItem from './ListItem';

export type ListItemType = {
  label: string;
  value?: string;
  facet?: number;
  onClick: (event: never) => void; // TODO: how to type
  isSelected: boolean;
  showDivider?: boolean;
  showChevron?: boolean;
  highlightIndices?: readonly RangeTuple[];
};

export const SearchableListItem: FC<ListItemType> = ({
  label,
  value,
  facet,
  onClick,
  isSelected,
  showDivider = false,
  showChevron = true,
  highlightIndices = [],
}) => {
  return (
    <ListItem>
      <Box
        as="button"
        // in case facet is 0, the item should still be clickable to allow to save a search
        onClick={onClick}
        cursor="cursor"
        w="full"
        display="flex"
        justifyContent="space-between"
        py="sm"
        aria-current={isSelected}
        whiteSpace="pre-wrap"
        fontWeight={isSelected ? 'bold' : undefined}
        color="gray.900"
        value={value}
      >
        <Flex>
          {isSelected ? (
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
      </Box>
      {showDivider ? <Divider my="sm" /> : null}
    </ListItem>
  );
};
