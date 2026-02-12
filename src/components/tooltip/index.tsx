import React, { cloneElement, FC, useState } from 'react';

import {
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipContentProps,
  TooltipPositioner,
  TooltipRoot,
  TooltipRootProps,
  TooltipTrigger,
} from '@chakra-ui/react';

type Placement = Exclude<
  Exclude<TooltipRootProps['positioning'], undefined>['placement'],
  undefined
>;
type Content = TooltipContentProps['content'];
export type TooltipProps = Pick<TooltipRootProps, 'children'> &
  Pick<TooltipContentProps, 'maxWidth'> & {
    placement?: Placement;
    label: Content;
  };

export const Tooltip: FC<TooltipProps> = ({
  children,
  placement = 'bottom',
  maxWidth = '6xl',
  label,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenWithProps = cloneElement(children as React.ReactElement<any>, {
    onMouseEnter: () => setIsOpen(true),
    onMouseLeave: () => setIsOpen(false),
    onClick: () => setIsOpen(true),
  });

  return (
    <TooltipRoot
      positioning={{
        placement,
      }}
      open={isOpen}
    >
      <TooltipTrigger asChild={true}>{childrenWithProps}</TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent maxWidth={maxWidth}>
          <TooltipArrow>
            <TooltipArrowTip />
          </TooltipArrow>
          {label}
        </TooltipContent>
      </TooltipPositioner>
    </TooltipRoot>
  );
};
