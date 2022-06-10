import React, { FC, ReactElement } from 'react';
import { chakra, HTMLChakraProps, useMultiStyleConfig } from '@chakra-ui/react';

interface Props extends HTMLChakraProps<'a'> {
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  isDisabled?: boolean;
  isExternal?: boolean;
}

const Link: FC<Props> = ({
  children,
  isDisabled = false,
  isExternal = false,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const styles = useMultiStyleConfig(`Link`);

  return (
    <chakra.a
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
      {...rest}
      __css={isDisabled ? styles.disabled : styles.link}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </chakra.a>
  );
};

export default Link;
export { Props as LinkProps };
