import { resolve } from 'path';
import { spawnSync } from 'child_process';

const resolveThemeBridgePath = () =>
  resolve(__dirname, 'chakraTypegenTheme.cjs');

export default () => {
  const npxBin = process.platform === 'win32' ? 'npx.cmd' : 'npx';

  const result = spawnSync(
    npxBin,
    ['chakra', 'typegen', resolveThemeBridgePath(), '--clean'],
    {
      cwd: process.cwd(),
      stdio: 'inherit',
    },
  );

  if (result.error) {
    process.exit(1);
  }

  process.exit(result.status ?? 1);
};
