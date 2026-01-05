import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    js.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: { '@stylistic': stylistic, prettier: pluginPrettier },
        languageOptions: { globals: globals.browser },
        rules: {
            'prettier/prettier': 'error',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
]);
