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
  value?: string | number;
  autoFocus?: boolean;
  name: string;
  debounce?: boolean;
};

type InputPros = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  setInputValue: never;
} & SharedProps;

type DebouncedInputPros = {
  onChange?: never;
  setInputValue: (value: string) => void;
} & SharedProps;

type Props = InputPros | DebouncedInputPros;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ onChange, value, debounce = false, setInputValue, ...props }, ref) => {
    const [internalUIValue, setInternalUIValue] = useState(value);
    // https://lawsofux.com/doherty-threshold/
    const debounceThreshold = debounce ? 400 : 0;

    const setValueDebounced = useDebouncedCallback((newValue) => {
      setInputValue(newValue);
    }, debounceThreshold);

    useEffect(() => {
      if (internalUIValue !== value && !setValueDebounced.isPending()) {
        setInternalUIValue(value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
      const targetValue = event.target.value;
      setInternalUIValue(targetValue);
      setValueDebounced(targetValue);
    };

    return <ChakraInput {...props} onChange={onChangeHandler} ref={ref} />;
  }
);
Input.displayName = 'Input';

export default Input;
export { Props as InputProps };
