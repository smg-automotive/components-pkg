import React, { useEffect, useState } from 'react';

import RangeFilterInput, {
  ChangeCallback,
  PickedNumberInputProps,
  RangeFilterInputField,
} from '../rangeFilterInput';
import Flex from '../flex';
import Box from '../box';
import RangeSliderWithChart, {
  NumericMinMaxValue,
} from './RangeSliderWithChart';

export type ChangeSliderCallback = {
  touched: 'min' | 'max';
  value: NumericMinMaxValue;
};

export type Props<NameFrom, NameTo> = {
  /**
   * The facets for each element of the scale. The keys are generated automatically based on the scale
   * e.g. { "*-100": 100, "100-200": 200, "200-500": 5000, "500-*": 80  }
   */
  facets: Record<string, number>;
  withReversedOrder?: boolean;
  from: RangeFilterInputField<NameFrom>;
  handleChange: (event: ChangeCallback<NameFrom | NameTo>) => void;
  onBlur?: (event: ChangeCallback<NameFrom | NameTo>) => void;
  to: RangeFilterInputField<NameTo>;
  unit?: string;
} & PickedNumberInputProps;

function RangeFilterInputWithSlider<
  NameFrom extends string,
  NameTo extends string
>({
  facets,
  unit,
  handleChange,
  withReversedOrder = false,
  from,
  to,
  min,
  max,
  ...rest
}: Props<NameFrom, NameTo>) {
  const value = {
    min: from.value,
    max: to.value,
  };

  const [valuesWhileSliding, setValuesWhileSliding] =
    useState<NumericMinMaxValue>(value);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    setValuesWhileSliding({
      min: from.value,
      max: to.value,
    });
  }, [from.value, to.value]);

  const handleSliderChange = (newValue: NumericMinMaxValue) => {
    if (!isSliding) {
      setIsSliding(true);
    }
    setValuesWhileSliding(newValue);
  };

  const handleSliderRelease = (event: ChangeSliderCallback) => {
    setIsSliding(false);
    handleChange({
      name: event.touched === 'min' ? from.name : to.name,
      value: event.value[event.touched],
    });
  };

  const isFilterApplied = () =>
    valuesWhileSliding.min === from.value &&
    valuesWhileSliding.max === to.value;

  const appliedValue = (): NumericMinMaxValue => {
    if (isSliding || !isFilterApplied()) {
      return valuesWhileSliding;
    } else {
      return value;
    }
  };

  const handleInputChange = (event: ChangeCallback<NameFrom | NameTo>) => {
    // sync slider with input
    setValuesWhileSliding({
      ...valuesWhileSliding,
      [event.name === from.name ? 'min' : 'max']: event.value,
    });

    handleChange(event);
  };

  return (
    <Flex direction="column">
      <Box order={withReversedOrder ? 1 : 0} px="md">
        <RangeSliderWithChart
          onChange={handleSliderChange}
          onSliderRelease={handleSliderRelease}
          selection={appliedValue()}
          initialSelection={value}
          facets={facets}
          {...rest}
        />
      </Box>
      <RangeFilterInput
        from={{
          ...from,
          value: appliedValue().min,
        }}
        to={{
          ...to,
          value: appliedValue().max,
        }}
        handleChange={handleInputChange}
        onBlur={handleInputChange}
        unit={unit}
        {...rest}
      />
    </Flex>
  );
}

export default RangeFilterInputWithSlider;
