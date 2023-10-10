import { useDebouncedCallback } from 'use-debounce';
import React, {
  ChangeEventHandler,
  ComponentType,
  FocusEventHandler,
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Input as ChakraInput,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

import InputWrapper from './InputWrapper';
import ClearButton from './ClearButton';

type SharedProps = {
  placeholder?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  size?: 'md' | 'lg';
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  autoFocus?: boolean;
  name: string;
  type?: 'text' | 'number' | 'password';
  icon?: ComponentType;
  isClearable?: boolean;
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

export type Props = ControlledInputProps | InputPros | DebouncedInputPros;

const renderIcon = (Icon?: ComponentType) =>
  Icon ? (
    <InputLeftElement pointerEvents="none">
      <Icon />
    </InputLeftElement>
  ) : null;

const renderClearButton = ({
  isClearable,
  inputRef,
}: {
  isClearable: boolean;
  inputRef: MutableRefObject<HTMLInputElement | null>;
}) =>
  isClearable ? (
    <InputRightElement>
      <ClearButton inputRef={inputRef} />
    </InputRightElement>
  ) : null;

const bindRefBeforeForwarding =
  <T extends Element>({
    forwardedRef,
    localRef,
  }: {
    forwardedRef: ForwardedRef<T>;
    localRef: MutableRefObject<T | null>;
  }) =>
  (node: T | null) => {
    localRef.current = node;
    if (typeof forwardedRef === 'function') {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  };

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      onChange,
      value,
      debounce = false,
      setInputValue,
      type = 'text',
      icon: Icon,
      isClearable = false,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [internalUIValue, setInternalUIValue] = useState(value || '');
    // https://lawsofux.com/doherty-threshold/
    const debounceThreshold = debounce ? 400 : 0;

    const setValueDebounced = useDebouncedCallback((newValue) => {
      if (setInputValue) setInputValue(newValue);
    }, debounceThreshold);

    useEffect(() => {
      if (internalUIValue !== value && !setValueDebounced.isPending()) {
        setInternalUIValue(value || '');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const debouncedOnChangeHandler: ChangeEventHandler<HTMLInputElement> = (
      event,
    ) => {
      const targetValue = event.target.value;
      setInternalUIValue(targetValue);
      setValueDebounced(targetValue);
    };
    const defaultOnChangeHandler: ChangeEventHandler<HTMLInputElement> = (
      e,
    ) => {
      onChange && onChange(e);
      setInternalUIValue(e.target.value);
    };

    const onChangeHandler = debounce
      ? debouncedOnChangeHandler
      : defaultOnChangeHandler;

    return (
      <InputWrapper size={props.size} shouldWrap={!!Icon || isClearable}>
        {renderIcon(Icon)}
        <ChakraInput
          {...props}
          type={type}
          value={internalUIValue}
          onChange={onChangeHandler}
          ref={bindRefBeforeForwarding({
            forwardedRef: ref,
            localRef: inputRef,
          })}
        />
        {renderClearButton({
          isClearable: isClearable && !!internalUIValue,
          inputRef,
        })}
      </InputWrapper>
    );
  },
);
Input.displayName = 'Input';

export default Input;
export { Props as InputProps };
