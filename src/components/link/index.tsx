import React, { ElementType, FC, ReactNode } from 'react';
import { chakra, useMultiStyleConfig } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
  as?: ElementType;
  leftIcon?: ElementType;
  rightIcon?: ElementType;
  isDisabled?: boolean;
  isExternal?: boolean;
  [key: string]: unknown;
}

const Link: FC<Props> = ({
  as = chakra.a,
  children,
  isDisabled = false,
  isExternal = false,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const styles = useMultiStyleConfig(`Link`);

  const Component = chakra(as, {
    baseStyle: isDisabled ? styles.disabled : styles.link,
  });
  const LeftComponent = leftIcon;
  const RightComponent = rightIcon;

  return (
    <Component
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
      {...rest}
      // __css={isDisabled ? styles.disabled : styles.link}
    >
      {LeftComponent && <LeftComponent __css={styles.leftIcon} />}
      {children}
      {RightComponent && <RightComponent __css={styles.rightIcon} />}
    </Component>
  );
};

export default Link;
export { Props as LinkProps };
