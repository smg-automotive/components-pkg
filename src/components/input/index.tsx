import { useDebouncedCallback } from 'use-debounce';
import React, {
  ChangeEventHandler,
  ComponentType,
  FocusEventHandler,
  ForwardedRef,
  forwardRef,
  KeyboardEventHandler,
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Input as ChakraInput,
  HStack,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
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
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  autoFocus?: boolean;
  name: string;
  type?: 'text' | 'number' | 'password';
  icon?: ComponentType;
  isClearable?: boolean;
  endElement?: ReactElement;
  rightAddonElement?: ReactElement;
  leftAddonElement?: ReactElement;
  autoComplete?: 'on' | 'off';
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

const renderEndElements = ({
  isClearable,
  inputRef,
  endElement,
}: {
  isClearable: boolean;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  endElement?: ReactElement;
}) =>
  isClearable || endElement ? (
    <InputRightElement width="auto" insetInlineEnd="lg">
      <HStack spacing="sm">
        {isClearable ? <ClearButton inputRef={inputRef} /> : null}
        {endElement}
      </HStack>
    </InputRightElement>
  ) : null;

const renderLeftAddonElement = (LeftAddonElement?: ReactElement) =>
  LeftAddonElement ? <InputLeftAddon>{LeftAddonElement}</InputLeftAddon> : null;

const renderRightAddonElement = (RightAddonElement?: ReactElement) =>
  RightAddonElement ? (
    <InputRightAddon>{RightAddonElement}</InputRightAddon>
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
      endElement,
      rightAddonElement: RightAddonElement,
      leftAddonElement: LeftAddonElement,
      ...props
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [internalUIValue, setInternalUIValue] = useState(value || '');
    // https://lawsofux.com/doherty-threshold/
    const debounceThreshold = debounce ? 400 : 0;
    const inputValue = debounce ? internalUIValue : value;

    const setValueDebounced = useDebouncedCallback((newValue) => {
      if (setInputValue) setInputValue(newValue);
    }, debounceThreshold);

    useEffect(() => {
      if (internalUIValue !== value && !setValueDebounced.isPending()) {
        setInternalUIValue(value || '');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const defaultOnChangeHandler: ChangeEventHandler<HTMLInputElement> = (
      e,
    ) => {
      onChange?.(e);
      setInternalUIValue(e.target.value);
    };

    const debouncedOnChangeHandler: ChangeEventHandler<HTMLInputElement> = (
      event,
    ) => {
      const targetValue = event.target.value;
      setInternalUIValue(targetValue);
      setValueDebounced(targetValue);
    };

    const onChangeHandler = debounce
      ? debouncedOnChangeHandler
      : defaultOnChangeHandler;

    return (
      <InputWrapper
        size={props.size}
        shouldWrap={Boolean(LeftAddonElement || RightAddonElement)}
      >
        {renderLeftAddonElement(LeftAddonElement)}
        <InputWrapper
          size={props.size}
          shouldWrap={!!Icon || isClearable || !!endElement}
        >
          {renderIcon(Icon)}
          <ChakraInput
            {...props}
            type={type}
            value={inputValue}
            onChange={onChangeHandler}
            ref={bindRefBeforeForwarding({
              forwardedRef: ref,
              localRef: inputRef,
            })}
            borderRightRadius={RightAddonElement ? '0' : 'sm'}
            borderLeftRadius={LeftAddonElement ? '0' : 'sm'}
          />
          {renderEndElements({
            isClearable: isClearable && !!internalUIValue,
            inputRef,
            endElement,
          })}
        </InputWrapper>
        {renderRightAddonElement(RightAddonElement)}
      </InputWrapper>
    );
  },
);
Input.displayName = 'Input';

export default Input;
export { Props as InputProps };
