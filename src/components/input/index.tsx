import { useDebouncedCallback } from 'use-debounce';
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Box,
  Input as ChakraInput,
  InputGroup as ChakraInputGroup,
  RecipeVariantProps,
  useSlotRecipe,
} from '@chakra-ui/react';

import { inputSlotRecipe } from 'src/themes/shared/slotRecipes/input';

import { ClearButton } from './ClearButton';

type InputVariantProps = RecipeVariantProps<typeof inputSlotRecipe>;

type SharedProps = InputVariantProps & {
  placeholder?: string;
  disabled?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  autoFocus?: boolean;
  name: string;
  type?: 'text' | 'number' | 'password';
  icon?: React.ComponentType;
  isClearable?: boolean;
  rightAddonElement?: ReactElement;
  leftAddonElement?: ReactElement;
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

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      onChange,
      value,
      debounce = false,
      setInputValue,
      type = 'text',
      icon: Icon,
      isClearable = false,
      rightAddonElement: RightAddonElement,
      leftAddonElement: LeftAddonElement,
      ...props
    },
    ref,
  ) => {
    const recipe = useSlotRecipe({ key: 'input' });
    const [recipeProps, componentProps] = recipe.splitVariantProps(props);
    const styles = recipe(recipeProps);

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
      <ChakraInputGroup
        {...(LeftAddonElement ? { startAddon: LeftAddonElement } : {})}
        {...(RightAddonElement ? { endAddon: RightAddonElement } : {})}
        {...(Icon
          ? {
              startElement: (
                <Box css={styles.icon}>
                  <Icon />
                </Box>
              ),
            }
          : {})}
        {...(isClearable && internalUIValue
          ? {
              endElement: (
                <Box css={styles.clearButton}>
                  <ClearButton inputRef={inputRef} />
                </Box>
              ),
            }
          : {})}
      >
        <ChakraInput
          {...componentProps}
          css={styles.root}
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
      </ChakraInputGroup>
    );
  },
);

Input.displayName = 'Input';

export { Props as InputProps };
