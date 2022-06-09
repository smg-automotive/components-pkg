import React, { ElementType, FC } from 'react';
import {
  Box,
  Link as ChakraLink,
  HTMLChakraProps,
  useMultiStyleConfig,
} from '@chakra-ui/react';

interface Props extends HTMLChakraProps<'a'> {
  leftIcon?: ElementType;
  rightIcon?: ElementType;
}

const Link: FC<Props> = ({ children, leftIcon, rightIcon, ...rest }) => {
  const styles = useMultiStyleConfig(`Link`);
  const LeftComponent = leftIcon;
  const RightComponent = rightIcon;

  return (
    <Box __css={styles.link}>
      {LeftComponent && <LeftComponent __css={styles.leftIcon} />}
      <ChakraLink {...rest}>{children}</ChakraLink>
      {RightComponent && <RightComponent __css={styles.rightIcon} />}
    </Box>
  );
};

export default Link;
