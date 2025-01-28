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


console.log(tseslint.configs.recommended)

export default [
  langConfig,ignores,...tseslint.configs.recommended,pluginJs.configs.recommended,...nextConfig,

];

