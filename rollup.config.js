import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import executable from 'rollup-plugin-executable';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy';
import shebang from 'rollup-plugin-add-shebang';
import { dirname } from 'path';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const packageJson = require('./package.json');

console.log('dirname(packageJson.module)', dirname(packageJson.module));

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        dir: dirname(packageJson.module),
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
      copy({
        targets: [
          {
            src: 'src/assets/**/*',
            dest: 'dist',
          },
        ],
        flatten: false,
      }),
    ],
    external: ['react', 'react-dom'],
  },
  // {
  //   input: 'dist/esm/types/index.d.ts',
  //   output: [{ file: 'dist/index.d.ts', format: 'esm' }],
  //   plugins: [dts()],
  // },
  {
    input: 'src/lib/cli/index.ts',
    output: [
      {
        file: 'dist/bin/cli',
        sourcemap: false,
        format: 'cjs',
      },
    ],
    plugins: [
      resolve({ preferBuiltins: true }),
      typescript({ tsconfig: './tsconfig.build.json' }),
      shebang({
        include: 'dist/bin/cli',
      }),
      executable(),
    ],
  },
];
