# React Project Template

A modern React + TypeScript template powered by Vite, with ESLint/Prettier and Git hooks (Husky + lint-staged + commitlint) to keep code and commits consistent.[1]

## Libraries & tools

### Core UI
- **React** — UI library used to build components. Docs: https://react.dev/learn
- **React DOM** — Renders React components into the browser DOM. Docs: https://react.dev/reference/react-dom

### Build & development
- **Vite** — Fast dev server + production bundling. Docs: https://vite.dev
- **@vitejs/plugin-react-swc** — Uses SWC for fast React transforms (JSX/TSX + fast refresh). Docs: https://www.npmjs.com/package/@vitejs/plugin-react-swc
- **TypeScript** — Static typing for safer refactors and better IDE help. Docs: https://www.typescriptlang.org/docs/

### Linting & formatting (code quality)
- **ESLint** — Finds potential bugs and enforces code rules (and can auto-fix many issues). Docs: https://eslint.org/docs/latest/
- **Prettier** — Opinionated code formatter (the “make it pretty automatically” tool). Docs: https://prettier.io/docs/en/
- **typescript-eslint** (`@typescript-eslint/parser` + `@typescript-eslint/eslint-plugin` + `typescript-eslint`) — TypeScript support inside ESLint. Docs: https://typescript-eslint.io/getting-started/
- **eslint-plugin-react** — React-specific lint rules. Docs: https://github.com/jsx-eslint/eslint-plugin-react
- **eslint-plugin-prettier** — Runs Prettier as an ESLint rule so formatting problems show up in ESLint output. Docs: https://github.com/prettier/eslint-plugin-prettier
- **eslint-config-prettier** — Disables ESLint rules that conflict with Prettier. Docs: https://github.com/prettier/eslint-config-prettier
- **@stylistic/eslint-plugin** — Stylistic rules extracted from ESLint core (format/style enforcement). Docs: https://eslint.style/
- **globals** — Shared global variables definitions for ESLint configs. Docs: https://www.npmjs.com/package/globals
- **eslint-import-resolver-typescript** — Helps ESLint resolve TS path aliases/imports correctly. Docs: https://www.npmjs.com/package/eslint-import-resolver-typescript

### Git hooks & commit standards
- **Husky** — Runs scripts on Git hooks (ex: pre-commit, commit-msg). Docs: https://typicode.github.io/husky/
- **lint-staged** — Runs linters/formatters only on *staged files* (fast, and keeps commits clean). Docs: https://github.com/lint-staged/lint-staged
- **commitlint** (`@commitlint/cli` + `@commitlint/config-conventional`) — Enforces Conventional Commit messages (ex: `feat: ...`, `fix: ...`). Docs: https://github.com/conventional-changelog/commitlint

### Types (DX / editor support)
- **@types/react**, **@types/react-dom**, **@types/node** — Type definitions for better autocomplete and type checking in TS.

***

## Getting started

1. Install dependencies:
```bash
npm install
```

2. Start dev server:
```bash
npm run dev
```

3. Production build:
```bash
npm run build
```

4. Preview production build locally:
```bash
npm run preview
```

***

## Scripts

- `npm run dev` — Start Vite dev server.
- `npm run build` — Type-check/build TS + bundle with Vite.
- `npm run lint` — Run ESLint on the project.
- `npm run lint:fix` — Run ESLint and auto-fix what’s fixable.
- `npm run prepare` — Installs Husky hooks after install.

***

## Commit message format (important)

This repo expects Conventional Commits, for example:
- `feat: add login screen`
- `fix: handle null user state`
- `chore: update dependencies`

If you really need to bypass hooks once:
```bash
git commit -m "whatever" --no-verify
```


***

If you want, share your current `eslint.config.ts` and `.lintstagedrc.json` contents and the README can include a small “How auto-fix works on commit” section tailored exactly to your setup.
