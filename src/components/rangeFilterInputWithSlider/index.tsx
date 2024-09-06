import React, { useEffect, useState } from 'react';

import RangeSliderWithScale, {
  NumericMinMaxValue,
} from '../rangeSlider/RangeSliderWithScale';
import RangeSliderWithChart, {
  Facet,
  RangeSliderWithChartProps,
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

type ChangeRangeInputWithSliderCallback<Name> = {
  changeType?: 'inputfield' | 'slider';
} & ChangeCallback<Name>;

type RangeSliderProps = {
  facets?: Facet[];
  rangeSliderScale?: number[];
  chartHeight?: RangeSliderWithChartProps['chartHeight'];
} & (
  | { facets: Facet[]; chartHeight?: string; rangeSliderScale?: never }
  | { rangeSliderScale: number[]; facets?: never; chartHeight?: never }
);

export type Props<NameFrom, NameTo> = {
  from: RangeFilterInputField<NameFrom>;
  onChange: (
    event: ChangeRangeInputWithSliderCallback<NameFrom | NameTo>,
  ) => void;
  onBlur?: (
    event: ChangeRangeInputWithSliderCallback<NameFrom | NameTo>,
  ) => void;
  to: RangeFilterInputField<NameTo>;
  unit?: string;
} & RangeSliderProps &
  PickedNumberInputProps;

function RangeFilterInputWithSlider<
  NameFrom extends string,
  NameTo extends string,
>({
  rangeSliderScale,
  facets,
  unit,
  onChange,
  from,
  to,
  chartHeight,
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

  const handleSliderChange = (event: ChangeSliderCallback) => {
    if (!isSliding) {
      setIsSliding(true);
    }
    setValuesWhileSliding((prevValuesWhileSliding: NumericMinMaxValue) => ({
      ...prevValuesWhileSliding,
      [event.touched]: event.value[event.touched],
    }));
  };

  const handleSliderRelease = (event: ChangeSliderCallback) => {
    setIsSliding(false);
    onChange({
      name: event.touched === 'min' ? from.name : to.name,
      value: event.value[event.touched],
      changeType: 'slider',
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

    onChange({ ...event, changeType: 'inputfield' });
  };

  return (
    <Flex direction="column">
      <Box order={{ base: 1, sm: 0 }} px="md" py={{ base: 'md', sm: 0 }}>
        {facets ? (
          <RangeSliderWithChart
            onSliderChange={handleSliderChange}
            onSliderRelease={handleSliderRelease}
            selection={appliedValue()}
            facets={facets}
            chartHeight={chartHeight}
          />
        ) : (
          <RangeSliderWithScale
            onSliderChange={handleSliderChange}
            onSliderRelease={handleSliderRelease}
            selection={appliedValue()}
            scale={rangeSliderScale}
          />
        )}
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
