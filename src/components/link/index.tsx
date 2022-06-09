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
    <ChakraLink {...rest}>
      <Box __css={styles.link}>
        {LeftComponent && <LeftComponent __css={styles.leftIcon} />}
        {children}
        {RightComponent && <RightComponent __css={styles.rightIcon} />}
      </Box>
    </ChakraLink>
  );
};

export default Link;
