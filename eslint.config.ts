import stylistic from "@stylistic/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        plugins: { "@stylistic": stylistic },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
        rules: {
            "@stylistic/indent": ["error", 2],
            "prefer-double": "warn",
        },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
]);
