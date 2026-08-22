# info.aspenini.com

Notes, lists, and guides. Built with **SvelteKit + TypeScript**, installed and run with **Bun**, deployed as a static site on GitHub Pages.

```sh
bun install
bun run dev
bun run build
bun run preview
```

GitHub Pages must be set to **GitHub Actions** (not “Deploy from a branch”). The workflow in `.github/workflows/pages.yml` builds with Bun and publishes the `build/` folder.

Custom domain: `info.aspenini.com` (`static/CNAME`).
