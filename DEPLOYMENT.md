# Deployment Guide

This portfolio is built with Next.js and deployed as a static site to GitHub Pages.

## How It Works

1. **Source Code**: The Next.js application lives in the root directory
   - `app/` - Next.js App Router pages and layouts
   - `components/` - React components
   - `public/` - Static assets

2. **Build Process**: 
   ```bash
   npm run build
   ```
   This generates a static export in the `/docs` directory

3. **Deployment**: GitHub Pages serves the site from the `/docs` directory

## Making Changes

1. Edit the source files in `app/` or `components/`
2. Test locally: `npm run dev`
3. Build for production: `npm run build`
4. Commit and push to GitHub
5. GitHub Pages automatically serves the updated `/docs` directory

## Features

- ✅ Static site generation (SSG)
- ✅ Optimized for GitHub Pages
- ✅ No server-side rendering required
- ✅ Fast load times
- ✅ SEO optimized
- ✅ Responsive design
- ✅ Smooth animations with Framer Motion
- ✅ Modern icons with Lucide React

## GitHub Pages Configuration

Make sure your repository settings have:
- **Source**: Deploy from a branch
- **Branch**: `main` or `copilot/make-site-nextjs-based`
- **Folder**: `/docs`

## Custom Domain

The `CNAME` file in `/docs` (copied from `/public`) maintains the custom domain configuration for `thesomewhatyou.me`.
