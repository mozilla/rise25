# Rise25

Website for announcing Mozilla's Rise 25 competition winners

## Stack

Simplified stack for a flat, single-page site.

- [Vite](https://vitejs.dev/) for frontend tooling / build
- [Typescript](https://www.typescriptlang.org/) for programming language
- [Alpine.js](https://alpinejs.dev/) for frontend interactivity and state management
- [Tailwind CSS](https://tailwindcss.com/) for styling
  <<<<<<< HEAD
- # [Vercel](https://vercel.com/) for deployment
- [Netlify](https://www.netlify.com/) for deployment
  > > > > > > > c7c7dd78b3c89042d30f7226b7f73daf901c1daa

## Local Development

```bash
# install dependencies if you haven't already
npm install

# run dev server and check your console for the local URL
npm run dev
```

- `index.html` file is the entrypoint for the site.
- `src/winners.ts` contains winners, categories, and groups.
- `src/components` directory contains all the Alpine.js components. Each component is a single file. Components are imported into `main.ts`.
- `src/styles` directory contains all the Tailwind CSS styles.
- `src/assets` directory contains all the static assets.

## Deployment

This site uses Netlify for deployment. Any changes to the `main` branch will be automatically deployed to a preview site, and changes to the `prod` branch will be automatically deployed to the production site.
