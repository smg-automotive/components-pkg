import React, { FC, PropsWithChildren, ReactNode } from 'react';

import Divider from '../divider';

interface Props {
  header: ReactNode;
  footer?: ReactNode;
}

const BaseLayout: FC<PropsWithChildren<Props>> = ({
  header,
  footer,
  children,
}) => {
  return (
    <>
      {header}
      <Divider />
      <div>{children}</div>
      <div>{footer ? footer : null}</div>
    </>
  );
};

export default BaseLayout;
