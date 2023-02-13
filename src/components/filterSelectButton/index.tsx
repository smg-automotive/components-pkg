import React from 'react';
import { FC, ReactNode } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Divider,
  IconButton,
} from '@chakra-ui/react';
import { ArrowDownIcon, ChevronDownSmallIcon, CloseIcon } from '../icons';

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
    <>
      <ButtonGroup isAttached={true} maxWidth="250px" w="full">
        <Button
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
        </Button>
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
            w="36px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="sm"
            {...defaultColorSchema}
          />
        )}
      </ButtonGroup>
      {/* for the dialog - use chakra popover https://chakra-ui.com/docs/components/popover/props */}
    </>
  );
};

export default FilterSelectButton;
