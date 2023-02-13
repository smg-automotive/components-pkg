import React from 'react';
import { FC, ReactNode } from 'react';
import {
  Box,
  Button as ChakraButton,
  ButtonGroup,
  chakra,
  Divider,
  IconButton,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowDownIcon, ChevronDownSmallIcon, CloseIcon } from '../icons';
import Flex from '../flex';
import Text from '../text';
import Button from '../button';

type Props = {
  applyButton: {
    // if primary search button is shown
    label: string;
    onClick: () => void;
  };

  // events
  displayValue: string; // used for the value if a filter is applied in the dark gray box
  filter: ReactNode; // used to pass the UI for the filter
  initialState?: 'open' | 'closed';
  isApplied: boolean; //to know if a filter is applied or not (keeping the component independent) - for styling and primary/secondary button switch
  label: string; // used for placeholder in default state and for the value if a filter is applied
  onDialogClose?: () => void; // when dialog is closed - for tracking?
  onDialogOpen?: () => void; // when dialog gets open - for tracking?
  onResetFilter: () => void; // for the reset button on the dialog and the close button of the filter button
};

const FilterSelectButton: FC<Props> = (props) => {
  const { onOpen, onClose, isOpen, onToggle } = useDisclosure();
  /*
   * design:
   * mobile: https://www.figma.com/file/WvYYKrx8rxw80fwkzhAQwh/Search-Results-%26-Advanced-Search?node-id=871%3A179771&t=ZhQtXXEVuEgwU5Sn-0
   * desktop: https://www.figma.com/file/WvYYKrx8rxw80fwkzhAQwh/Search-Results-%26-Advanced-Search?node-id=101%3A62741&t=vmcTmi1JMle1Lj6Q-0
   * */

  const appliedColorScheme = {
    backgroundColor: 'gray.900',
    color: 'white',
  };

  const defaultColorSchema = {
    backgroundColor: 'gray.100',
    color: 'gray.900',
  };

  return (
    <Popover
      placement="bottom-start"
      isLazy={true}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <ButtonGroup isAttached={true} maxWidth="250px" w="full">
        <PopoverTrigger>
          <ChakraButton
            onClick={onToggle}
            w="full"
            display="flex"
            justifyContent="flex-start"
            borderRadius="sm"
            paddingY="xs"
            paddingX="md"
            borderRightColor={props.isApplied ? 'white' : undefined}
            borderRightWidth={props.isApplied ? '1px' : undefined}
            {...(props.isApplied ? appliedColorScheme : defaultColorSchema)}
          >
            <chakra.span>{props.label}</chakra.span>
            <chakra.span>
              {props.displayValue ? `: ${props.displayValue}` : null}
            </chakra.span>
          </ChakraButton>
        </PopoverTrigger>
        {props.isApplied ? (
          <IconButton
            icon={<CloseIcon w="16px" h="16px" />}
            aria-label="reset filter"
            onClick={props.onResetFilter}
            w="36px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="sm"
            {...appliedColorScheme}
          />
        ) : (
          <IconButton
            icon={<ChevronDownSmallIcon w="16px" h="16px" />}
            aria-label="open filter"
            onClick={onToggle}
            w="36px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="sm"
            {...defaultColorSchema}
          />
        )}
      </ButtonGroup>
      <PopoverContent
        backgroundColor="white"
        borderRadius="sm"
        shadow="xs"
        padding="2xl"
        width={{ base: 'full', sm: '320px' }}
      >
        <PopoverHeader paddingBottom="2xl">
          <Flex justifyContent="space-between">
            <Text textStyle="heading3">{props.label}</Text>
            <PopoverCloseButton />
          </Flex>
          <ChakraButton
            onClick={props.onResetFilter}
            display="flex"
            justifyContent="flex-start"
          >
            Zurücksetzen
          </ChakraButton>
        </PopoverHeader>
        <PopoverBody>{props.filter}</PopoverBody>
        <PopoverFooter paddingTop="2xl">
          <Button
            variant={props.isApplied ? 'primary' : 'secondary'}
            onClick={
              props.isApplied
                ? () => {
                    props.applyButton.onClick();
                    onClose();
                  }
                : onClose
            }
            width="full"
          >
            {props.isApplied ? props.applyButton.label : 'Schliessen'}
          </Button>
        </PopoverFooter>
      </PopoverContent>
      {/* for the dialog - use chakra popover https://chakra-ui.com/docs/components/popover/props */}
    </Popover>
  );
};

export default FilterSelectButton;
