import { transform } from 'babel-core';
import AmdModuleTransform from 'babel-plugin-transform-es2015-modules-amd';

export default function (code) {
  const result = transform(code, {
    plugins: [
      AmdModuleTransform,
      './src/index.js'
    ],
  });

  return result.code;
}