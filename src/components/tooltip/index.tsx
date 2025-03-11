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

type Props = Pick<TooltipRootProps, 'children' | 'positioning'> &
  Pick<TooltipContentProps, 'content' | 'maxWidth'>;
// type Props = {
//   children: React.ReactNode;
// } & Pick<TooltipProps, 'children' | 'label' | 'placement' | 'maxWidth'>;

// type Props = {
//   children: React.ReactNode;
//   placement?: string;
//   maxWidth?: string;
//   label: string;
// };

// var getTransformOrigin = (arrow2) => ({
//   top: "bottom center",
//   "top-start": arrow2 ? `${arrow2.x}px bottom` : "left bottom",
//   "top-end": arrow2 ? `${arrow2.x}px bottom` : "right bottom",
//   bottom: "top center",
//   "bottom-start": arrow2 ? `${arrow2.x}px top` : "top left",
//   "bottom-end": arrow2 ? `${arrow2.x}px top` : "top right",
//   left: "right center",
//   "left-start": arrow2 ? `right ${arrow2.y}px` : "right top",
//   "left-end": arrow2 ? `right ${arrow2.y}px` : "right bottom",
//   right: "left center",
//   "right-start": arrow2 ? `left ${arrow2.y}px` : "left top",
//   "right-end": arrow2 ? `left ${arrow2.y}px` : "left bottom"
// });

type Positioning = Props['positioning'];

const Tooltip: FC<Props> = ({
  children,
  positioning = { placement: 'auto' },
  maxWidth = '6xl',
  label,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const tooltip = useContext(TooltipContext);

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenWithProps = cloneElement(children as React.ReactElement<any>, {
    onMouseEnter: () => setIsOpen(true),
    onMouseLeave: () => setIsOpen(false),
    onClick: () => setIsOpen(true),
  });

  console.log('placement', placement);

  return (
    <TooltipRoot
      positioning={{
        placement,
        // middleware: {
        //   arrow: true, // ✅ Ensures arrow is positioned correctly
        //   flip: true, // ✅ Allows tooltip to flip when needed
        //   shift: true, // ✅ Prevents tooltip from being cut off
        // },
      }}
      open={isOpen}
    >
      <TooltipTrigger asChild={true}>{childrenWithProps}</TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent hasArrow={true} maxWidth={maxWidth}>
          <TooltipArrow>
            <TooltipArrowTip />
          </TooltipArrow>
          {label}
        </TooltipContent>
      </TooltipPositioner>
    </TooltipRoot>
  );
};

export default Tooltip;
