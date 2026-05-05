import React, { PropsWithChildren } from 'react';
import { InputGroup } from '@chakra-ui/react';

import { Props as InputProps } from '@/src/components/input';

type Props = {
  size?: InputProps['size'];
  shouldWrap?: boolean;
};

const InputWrapper = ({
  children,
  size,
  shouldWrap,
}: PropsWithChildren<Props>) =>
  shouldWrap ? <InputGroup size={size}>{children}</InputGroup> : children;

export default InputWrapper;
