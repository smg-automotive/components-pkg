import React, { useEffect, useState } from 'react';

import RangeSliderWithChart, {
  Facet,
  NumericMinMaxValue,
} from '../rangeSlider/RangeSliderWithChart';
import RangeFilterInput, {
  ChangeCallback,
  PickedNumberInputProps,
  RangeFilterInputField,
} from '../rangeFilterInput';
import Flex from '../flex';
import Box from '../box';

export type ChangeSliderCallback = {
  touched: 'min' | 'max';
  value: NumericMinMaxValue;
};

export type Props<NameFrom, NameTo> = {
  facets: Array<Facet>;
  from: RangeFilterInputField<NameFrom>;
  onChange: (event: ChangeCallback<NameFrom | NameTo>) => void;
  onBlur?: (event: ChangeCallback<NameFrom | NameTo>) => void;
  to: RangeFilterInputField<NameTo>;
  unit?: string;
} & PickedNumberInputProps;

function RangeFilterInputWithSlider<
  NameFrom extends string,
  NameTo extends string,
>({ facets, unit, onChange, from, to, ...rest }: Props<NameFrom, NameTo>) {
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
    onChange({
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

    onChange(event);
  };

  return (
    <Flex direction="column">
      <Box order={{ base: 1, sm: 0 }} px="md" py={{ base: 'md', sm: 0 }}>
        <RangeSliderWithChart
          onSliderChange={handleSliderChange}
          onSliderRelease={handleSliderRelease}
          selection={appliedValue()}
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
