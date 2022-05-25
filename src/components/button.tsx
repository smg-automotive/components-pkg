import React, { FC, ReactNode } from 'react';
import {
  ButtonProps,
  Button as CUButton,
  useTheme,
  useToken,
} from '@chakra-ui/react';

interface Props extends ButtonProps {
  children: ReactNode;
}

interface ButtonStates {
  normal: ButtonProps;
  hover: ButtonProps;
  active: ButtonProps;
  disabled: ButtonProps;
}

export const Button: FC<Props> = ({ children, ...rest }) => {
  const btnShadowColor = useToken('colors', 'custom.btnShadow');

  const { name } = useTheme();

  let buttonStates: ButtonStates;

  if (name === 'AS24') {
    buttonStates = {
      normal: {
        bg: 'brand.100',
        color: 'gray.900',
        borderRadius: '4',
        boxShadow: `0px 2px 0px ${btnShadowColor}`,
        py: '2.5',
        px: '4',
        fontWeight: 'bold',
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
        color: 'gray.900',
        borderRadius: '4',
        boxShadow: `0px 2px 0px ${btnShadowColor}`,
        py: '2.5',
        px: '4',
        fontWeight: 'bold',
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
        {...rest}
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
