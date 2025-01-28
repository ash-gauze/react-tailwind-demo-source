import globals from 'globals'
import pluginJs from '@eslint/js';
import tseslint  from "typescript-eslint";

 

const ignores = {ignores:['.git/*','.next/*','./node_modules']};
const langConfig = {languageOptions:{globals:{...globals.node,...globals.browser}}};

console.log(tseslint.configs.recommended)

export default [
  langConfig,ignores,...tseslint.configs.recommended,pluginJs.configs.recommended

];

