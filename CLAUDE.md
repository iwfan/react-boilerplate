# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with hot reload (runs on localhost:5173 with HTTPS)
- `pnpm build` - Build for production (runs TypeScript check then Vite build)
- `pnpm test` - Run tests with Vitest
- `pnpm lint` - Run ESLint on the codebase
- `pnpm preview` - Preview production build locally

## Architecture Overview

This is a modern React 19 boilerplate built with Vite, featuring:

### Project Structure
- `src/components/` - Reusable UI components with test files
- `src/pages/` - Page-level components organized by feature
- `src/shared/` - Shared utilities and configurations
- `src/shared/i18n/` - Internationalization setup and locale files

### Key Architecture Decisions
- **Routing**: Uses React Router v7 with nested routes configured in `src/AppRoutes.tsx`
- **Styling**: Tailwind CSS v4 with Class Variance Authority for component variants
- **Testing**: Vitest with React Testing Library, test files use `.test.tsx` extension
- **Internationalization**: i18next with browser language detection, supports en-US and zh-CN
- **Build**: Vite with TypeScript compilation, uses pnpm as package manager
- **Development**: HTTPS enabled by default using mkcert plugin

### Component Architecture
- Components use Class Variance Authority for styling variants
- Test files are co-located with components
- Shared utilities in `src/shared/utils.ts`
- Uses `clsx` and `tailwind-merge` for conditional styling

### I18n Configuration
- Language files in `src/shared/i18n/locales/[lang]/`
- Default namespace is "common"
- Fallback language is en-US
- Language detection via query string, cookie, localStorage, and navigator
- Configuration in `src/shared/i18n/config.ts`

### Testing Configuration
- Vitest integrated into Vite config with globals enabled
- Setup file at `vitest.setup.ts` for global test configuration
- Test pattern: `./src/**/*.{test,spec}.?(c|m)[jt]s?(x)`
- Uses jsdom environment for DOM testing

### Development Tools
- ESLint with Prettier integration and TypeScript support
- Husky for git hooks with commitlint for conventional commits
- Bundle analysis with rollup-plugin-visualizer (opens in production builds)
- TypeScript with strict configuration and total-typescript/ts-reset

## Testing

Run individual test files: `pnpm test [filename]`
All test files should be placed alongside components with `.test.tsx` extension.

## Build Requirements

- Node.js >= 20.0.0
- pnpm >= 10.0.0

Always run `pnpm build` to ensure TypeScript compilation passes before committing changes.