# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website of Yuki Abe built with Next.js 13, TypeScript, and Material-UI. It showcases research projects, publications, and academic activities with support for both English and Japanese languages.
This website should be simple, easy to read, clear, and welcoming to the reader.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files to `out/` directory
- `npm run fordeploy` - Full deployment pipeline (build + export + serve)
- `npm run check` - Serve the exported files locally for testing

## Architecture

### Page Structure

- `pages/index.tsx` - Main English portfolio page
- `pages/ja.tsx` - Japanese version
- `pages/en.tsx` - English version (redirect)
- `pages/projects/` - Individual project detail pages

### Component Organization

- `src/Components/` - Reusable UI components organized by type:
  - `Atoms/` - Basic building blocks
  - `Contents/` - Content display components
  - `Title/` - Title and heading components
  - `Tops/` - Top-level page components
- `src/CMS/` - Content management components (Projects, Publications, News, etc.)
- `src/Fixed/` - Layout components (Header, Footer, Navigation)
- `src/Views/` - Page section components
- `src/Hooks/` - Custom React hooks

### Styling and Theme

- Material-UI with custom theme in `styles/GlobalTheme.ts`
- Responsive breakpoints: xs(0), sm(600), md(992), lg(1025), xl(1536)
- Color palette uses teal primary (#4FADB7) and orange secondary (#E87B43)
- Typography system with Japanese text support

### Path Aliases

TypeScript path mapping configured:

- `@/src/*` → `Src/*`
- `@/components/*` → `src/Components/*`
- `@/styles/*` → `styles/*`
- `@/hooks/*` → `src/Hooks/*`

### Language Support

- Language detection based on URL path (`/ja` for Japanese, default English)
- Content components have language-specific variants (e.g., `News.tsx` vs `News_en.tsx`)
- Projects and publications data includes both English and Japanese descriptions

### Static Assets

- Public files in `public/` directory
- Project images and PDFs organized in subdirectories
- Static export generates files to `out/` directory for deployment

### Recent Refactoring (2025/06/16)

Major code consolidation completed to eliminate redundancy and improve maintainability:

#### Unified Components
- **NewsUnified**: Single component replacing News.tsx/News_en.tsx with language prop support
- **CMSListItem**: Reusable component for Award/Grant/Talk patterns with centralized data structure
- **ProjectPageTemplate**: Generic template consolidating all project pages (RunSight/acd/handheldHMD)

#### Centralized Data Management
- `src/data/awards.ts` - Award data with CMSItem interface
- `src/data/grants.ts` - Grant data with CMSItem interface  
- `src/data/talks.ts` - Talk data with CMSItem interface
- `src/data/projectsData.ts` - Project configuration data with ProjectData interface

#### Code Reduction Achieved
- Project pages: Reduced from 1,500+ lines to <300 lines (90% reduction)
- CMS components: Reduced from 300+ lines to <50 lines each (85% reduction)
- News components: Unified duplicate logic into single component

#### Benefits
- **Easier content management**: All content in centralized data files
- **Consistent patterns**: Reusable components ensure uniformity
- **Reduced maintenance**: Single source of truth for each component type
- **Better performance**: Smaller bundle sizes and optimized components