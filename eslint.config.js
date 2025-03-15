import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      rules: {
        "no-use-before-define": false,
        "import/order": [
          "error",
          {
            groups: [
              "builtin", // Built-in types are first
              "external", // External libraries
              "internal", // Internal modules
              ["parent", "sibling"], // Parent and sibling types can be mingled together
              "index", // Then the index file
              "object", // Object imports
            ],
            "newlines-between": "always",
            pathGroups: [
              {
                pattern: "@app/**",
                group: "external",
                position: "after",
              },
            ],
            pathGroupsExcludedImportTypes: ["builtin"],
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
      },
      // Disable prop-types validation
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
