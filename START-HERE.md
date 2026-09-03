# Chidozie Deborah Portfolio

This package contains the complete editable source code and public assets for the portfolio website.

## Requirements

- Node.js 22.13 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local address displayed in the terminal.

## Build for production

```bash
npm install
npm run build
```

The project uses React, Next.js-compatible routing, Vite and Cloudflare Vinext. It is best suited to Cloudflare Workers or another platform that supports its generated Worker output.

## Main files

- `app/page.tsx` — homepage content and structure
- `app/globals.css` — complete visual styling and responsive rules
- `app/layout.tsx` — page metadata and shared layout
- `public/` — images, icons and other public assets
- `package.json` — dependencies and available commands

## Connect a custom domain

After deploying the project, open the domain settings in your hosting provider, add your custom domain, and copy the DNS records it provides into your domain registrar. DNS changes may take some time to propagate.

Do not upload the ZIP itself to a Git-based hosting provider. Extract it first, then upload or push the extracted project folder.
