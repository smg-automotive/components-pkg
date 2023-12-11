import React, { Fragment, PropsWithChildren } from 'react';
import { ModalBody } from '@chakra-ui/react';

type Props = {
  shouldWrap?: boolean;
};

const ModalBodyWrapper = ({
  children,
  shouldWrap,
}: PropsWithChildren<Props>) =>
  shouldWrap ? (
    <ModalBody>{children}</ModalBody>
  ) : (
    <Fragment>{children}</Fragment>
  );

export default ModalBodyWrapper;
