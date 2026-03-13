import React, { FocusEventHandler } from 'react';

import {
  RangeFilterInputWithSlider as RangeFilterInputWithSliderComponents,
  RangeFilterInputWithSliderProps,
} from 'src/components/rangeFilterInputWithSlider';

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, K>
  : never;

type AdapterProps<NFrom extends string, NTo extends string> = DistributiveOmit<
  RangeFilterInputWithSliderProps<NFrom, NTo>,
  'disabled' | 'onFocus'
> & {
  isDisabled?: boolean;
  onFocus?: FocusEventHandler<HTMLInputElement>;
};

export function RangeFilterInputWithSlider<
  NFrom extends string,
  NTo extends string,
>(props: AdapterProps<NFrom, NTo>) {
  const { isDisabled, onFocus, ...rest } = props;
  return (
    <RangeFilterInputWithSliderComponents
      {...rest}
      disabled={isDisabled}
      onFocus={onFocus}
    />
  );
}
