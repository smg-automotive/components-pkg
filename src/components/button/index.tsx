import React, { FC, ReactNode } from 'react';
import {
  ButtonProps,
  Button as CUButton,
  StyleProps,
  useTheme,
  useToken,
} from '@chakra-ui/react';

interface Props extends ButtonProps {
  children: ReactNode;
  size?: 'md' | 'lg' | 'xl';
  variant?: 'primary';
}
interface ButtonStates {
  normal: StyleProps;
  hover: StyleProps;
  active: StyleProps;
  disabled: StyleProps;
}

const Button: FC<Props> = ({
  children,
  variant = 'primary',
  size = 'lg',
  ...rest
}) => {
  const btnShadowColor = useToken('colors', 'custom.btnShadow');

  const { name } = useTheme();

  let buttonStates: ButtonStates;

  const fontSize = {
    md: {
      fontSize: 'sm',
    },
    lg: {
      fontSize: 'md',
    },
    xl: {
      fontSize: 'md',
    },
  };

  const spacing = {
    md: {
      py: 'sm',
      px: 'md',
    },
    lg: {
      py: 'md',
      px: 'lg',
    },
    xl: {
      py: 'lg',
      px: 'xl',
    },
  };

  const commonNormalState: StyleProps = {
    borderRadius: 'sm',
    boxShadow: `0px 2px 0px ${btnShadowColor}`,
    fontWeight: 'bold',
    ...spacing[size],
    ...fontSize[size],
  };

  const disabledState: StyleProps = {
    bg: 'gray.100',
    boxShadow: 'none',
    color: 'gray.400',
    pointerEvents: 'none',
  };

  if (name === 'AS24') {
    buttonStates = {
      normal: {
        bg: 'brand.100',
        color: 'gray.900',
        ...commonNormalState,
      },
      hover: {
        bg: 'brand.200',
      },
      active: {
        bg: 'brand.100',
        boxShadow: 'none',
      },
      disabled: disabledState,
    };
  } else {
    buttonStates = {
      normal: {
        bg: 'brand.500',
        color: 'black',
        ...commonNormalState,
      },
      hover: {
        bg: 'brand.200',
      },
      active: {
        bg: 'brand.100',
        boxShadow: 'none',
      },
      disabled: disabledState,
    };
  }

  return (
    <>
      <CUButton
        {...rest}
        {...{ size, variant }}
        {...buttonStates.normal}
        _hover={buttonStates.hover}
        _active={buttonStates.active}
        _pressed={buttonStates.active}
        _disabled={buttonStates.disabled}
      >
        {children}
      </CUButton>
    </>
  );
};

export default Button;
