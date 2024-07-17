import React, { FC } from 'react';

import { useMultiStyleConfig } from '@chakra-ui/system';

import Box from 'src/components/box';

import { MarkProps } from '.';

const Highlight: FC<MarkProps> = (props) => {
  const { mark } = useMultiStyleConfig('MarkedText', props);

  return (
    <Box
      __css={mark}
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 155 24"
      fill="none"
      preserveAspectRatio="none"
    >
      <Box
        as="path"
        fill={props.highlightColor}
        d="M152.76 13.91c-.231.328-.309.657-.231 1.095.154.547-.078 1.15-.309 1.697-.155.548-.541 1.096-.773 1.588-.231.384-.463.822-.695 1.26.541.493.387.438-.695 1.314.232.165.386.384.618.603-.927.164-1.776.328-2.78.328-2.471 0-4.943.164-7.414.274l-18.613.493c-2.239.055-4.402-.055-6.641-.055-.927 0-1.931-.055-2.858 0-.463 0-1.004.11-1.467.11-1.468 0-2.858 0-4.325-.055-.154 0-.386-.055-.541 0-2.394.164-4.865-.11-7.26-.055-1.158.055-2.316.055-3.475.055h-3.938c-3.321 0-6.642 0-9.963-.055-2.935-.055-5.87-.164-8.804-.219-1.93-.055-3.939-.055-5.947-.055-1.004 0-2.008-.054-3.012-.054-.85 0-1.622.054-2.471.054-.618 0-1.236-.164-1.93-.164-.928 0-1.854.11-2.858.11l-10.35-.165H34.137c-1.159 0-2.24.11-3.399.11-.463 0-1.004-.11-1.467-.11-1.622 0-3.166.055-4.788.055-.31 0-.618 0-.773.274 0 .11-.386.11-.617.164l-9.963.164c-1.313 0-2.548.055-3.861.11-.696.055-1.313.219-2.008.219-1.39-.055-2.78-.11-4.17-.219-.464-.055-.85-.274-1.236-.548-.85-.602-1.468-1.314-1.545-2.19-.077-.712-.232-1.479-.309-2.19 0-.33.077-.658.154-.986.078-.22.078-.438.155-.658.154-.985.077-2.026.386-3.011.155-.712.309-1.424.155-2.136 0-.164.231-.329.308-.548.31-.876.541-1.807.85-2.683.154-.493.54-1.04.386-1.479-.232-.766.54-1.478.077-2.19-.154-.22.078-.548.232-.822 0-.109.232-.273.155-.273-.464-.329 0-.657.154-.877.309-.438 0-.93.695-1.369C4.247.493 4.711.33 5.329.33c1.699-.055 3.475-.11 5.174-.11C13.361.164 16.141.109 19 .109 22.165.056 25.409.056 28.575 0h14.751c1.313 0 2.548 0 3.861.055 1.622 0 3.167 0 4.789.055 2.394 0 4.71.054 7.105.109l7.26.164c2.239.055 4.401.055 6.641.165 3.012.11 6.024.219 9.036.273 2.085.055 4.17-.054 6.255 0 2.24.055 4.557.165 6.797.165 2.626 0 5.251-.055 7.954-.055 4.325 0 8.65.055 12.898.055 3.089 0 6.178-.055 9.345-.11l10.966-.164c3.167-.055 6.256-.22 9.345-.329 2.471-.11 5.02-.164 7.568-.219.541 0 1.004.165 1.545.274-.232.657-.154 1.095.232 1.424-.618.274-.386.548 0 .712-.232.328-.464.602-.541.876-.154.329-.077.657.618.657-.386.164-.695.274-1.158.438.077.11.154.22.231.274.618.22 1.004 1.04.541 1.424-.155.164-.618.164-.927.219v.164c.695.22.541.712.618 1.095 0 .439-.155.767-.541 1.15-.154.165 0 .493-.077.767 0 .164.077.383 0 .493-.695.712-.618 1.533-.695 2.355 0 .219-.077.383-.154.547-.078.165-.618.493-.078.877"
      />
    </Box>
  );
};

export default Highlight;
