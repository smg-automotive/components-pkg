import React, { FC, ReactNode } from 'react';
import {
  ButtonProps,
  Button as CUButton,
  useTheme,
  useToken,
} from '@chakra-ui/react';

interface Props extends ButtonProps {
  children?: ReactNode;
  size: 'md' | 'lg' | 'xl';
  variant: 'primary';
}

const defaultProps: Props = {
  size: 'lg',
  variant: 'primary',
};

interface ButtonStates {
  normal: ButtonProps;
  hover: ButtonProps;
  active: ButtonProps;
  disabled: ButtonProps;
}

const Button: FC<Props> = ({ children, ...props }) => {
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
      py: 0.375,
      px: 3,
    },
    lg: {
      py: 2.5,
      px: 4,
    },
    xl: {
      py: '3.5',
      px: 5,
    },
  };

  const commonStyles = {
    borderRadius: '4',
    boxShadow: `0px 2px 0px ${btnShadowColor}`,
    fontWeight: 'bold',
    ...spacing[props.size],
    ...fontSize[props.size],
  };

  if (name === 'AS24') {
    buttonStates = {
      normal: {
        bg: 'brand.100',
        color: 'gray.900',
        ...commonStyles,
      },
      hover: {
        bg: 'brand.200',
      },
      active: {
        bg: 'brand.100',
        boxShadow: 'none',
      },
      disabled: {
        bg: 'gray.200',
        boxShadow: 'none',
        color: 'gray.600',
        pointerEvents: 'none',
      },
    };
  } else {
    buttonStates = {
      normal: {
        bg: 'brand.500',
        color: 'black',
        ...commonStyles,
      },
      hover: {
        bg: 'brand.200',
      },
      active: {
        bg: 'brand.100',
        boxShadow: 'none',
      },
      disabled: {
        bg: 'gray.200',
        boxShadow: 'none',
        color: 'gray.600',
        pointerEvents: 'none',
      },
    };
  }

  return (
    <>
      <CUButton
        {...props}
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

Button.defaultProps = defaultProps;

export default Button;
