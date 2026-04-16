import React from 'react';

import { Tabs as TabsComponents, TabsProps } from 'src/components/tab';

type Props = Omit<TabsProps, 'onChange'> & {
  onChange?: (value: string) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { onChange, ...rest } = props;

  const handleChange = ({ value }: { value: string }) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <TabsComponents
      {...rest}
      {...(onChange ? { onValueChange: handleChange } : {})}
    />
  );
};
