import { ComponentType, lazy } from 'react';
export default (
  resolver: () => Promise<Record<string, ComponentType>>,
  name = 'default',
) => {
  return lazy(async () => {
    const resolved = await resolver();
    return { default: resolved[name] };
  });
};
