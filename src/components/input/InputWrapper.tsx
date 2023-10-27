import React, { Fragment, PropsWithChildren } from 'react';
import { InputGroup } from '@chakra-ui/react';

import { Props as InputProps } from '../input';

type Props = {
  size?: InputProps['size'];
  shouldWrap?: boolean;
};

const InputWrapper = ({
  children,
  size,
  shouldWrap,
}: PropsWithChildren<Props>) =>
  shouldWrap ? (
    <InputGroup size={size}>{children}</InputGroup>
  ) : (
    <Fragment>{children}</Fragment>
  );

export default InputWrapper;
