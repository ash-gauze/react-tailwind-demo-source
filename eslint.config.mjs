import globals from 'globals'
import pluginJs from '@eslint/js';
import tseslint  from "typescript-eslint";
import {FlatCompat} from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory:import.meta.dirname,
})


const ignores = {ignores:['.git/*','.next/*','./node_modules']};
const langConfig = {languageOptions:{globals:{...globals.node,...globals.browser}}};
const nextConfig = compat.config({extends:['next/core-web-vitals']});
const tSConfig  = tseslint.config({rules:
{
  'no-unused-vars': 'off', '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-expressions':'off','@typescript-eslint/no-unused-expressions':'warn'
}
}
);


/*
 default config export is a configArray of config objects   


*/
console.log(tseslint.configs.recommended)

const eslintConfig = [ 
  langConfig,ignores,
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
  ...nextConfig, 
  ...tSConfig
];

export default eslintConfig;
