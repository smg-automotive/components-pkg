import { useDebouncedCallback } from 'use-debounce';
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';

type SharedProps = {
  placeholder?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  size?: 'md' | 'lg';
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  autoFocus?: boolean;
  name: string;
  type?: 'text' | 'number';
};

type ControlledInputProps = {
  debounce?: false;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  setInputValue?: never;
} & SharedProps;

type InputPros = {
  debounce?: false;
  value?: never;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  setInputValue?: never;
} & SharedProps;

type DebouncedInputPros = {
  value: string | number;
  onChange?: never;
  debounce: true;
  setInputValue: (value: string) => void;
} & SharedProps;

type Props = ControlledInputProps | InputPros | DebouncedInputPros;

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      onChange,
      value,
      debounce = false,
      setInputValue,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const [internalUIValue, setInternalUIValue] = useState(value);
    // https://lawsofux.com/doherty-threshold/
    const debounceThreshold = debounce ? 400 : 0;
    const inputValue = debounce ? internalUIValue : value;

    const setValueDebounced = useDebouncedCallback((newValue) => {
      if (setInputValue) setInputValue(newValue);
    }, debounceThreshold);

    useEffect(() => {
      if (internalUIValue !== value && !setValueDebounced.isPending()) {
        setInternalUIValue(value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const debouncedOnChangeHandler: ChangeEventHandler<HTMLInputElement> = (
      event
    ) => {
      const targetValue = event.target.value;
      setInternalUIValue(targetValue);
      setValueDebounced(targetValue);
    };
    const onChangeHandler = debounce ? debouncedOnChangeHandler : onChange;

    return (
      <ChakraInput
        {...props}
        type={type}
        value={inputValue}
        onChange={onChangeHandler}
        ref={ref}
      />
    );
  }
);
Input.displayName = 'Input';

export default Input;
export { Props as InputProps };
