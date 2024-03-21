import React from 'react';

import Alert, { type AlertProps } from './index';

export const Template = ({
  onDismiss,
  dismissible,
  description,
  ...args
}: AlertProps) => (
  <Alert
    description={description}
    {...args}
    {...(dismissible ? { dismissible, onDismiss } : {})}
  />
);
