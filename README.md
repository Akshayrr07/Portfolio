# Akshay RR — Portfolio

A responsive, single-page React portfolio for Akshay RR. The home view presents the
candidate profile, skills, experience, featured projects, certifications, and contact
information as one continuously scrolling page. A small project-detail view is also
available for project IDs from the project data.

## Overview

- **Home page:** `src/pages/Home.jsx` composes the sections in this order: Home, About,
  Skills, Experience, Projects, Certifications, and Contact.
- **Section navigation:** the navbar uses URL hashes (`/#about`, `/#skills`, and so on)
  and `src/index.css` enables smooth scrolling.
- **Project details:** `src/pages/ProjectDetail.jsx` reads a project by its `id` from
  `src/assets/data/projects.json`.
- **Deployment:** Vite builds static assets through the Cloudflare Vite plugin, and
  `wrangler.jsonc` configures them for a Cloudflare Worker with single-page-application
  fallback handling.

## Technology stack

- React 19 and React DOM 19
- Vite 8 with `@vitejs/plugin-react`
- Tailwind CSS 4 through `@tailwindcss/postcss` and PostCSS
- Framer Motion for section and card animations
- React Router DOM 7 for the home and project-detail routes
- Lucide React and React Icons for interface icons
- ESLint 10 with the React Hooks and React Refresh plugins
- Cloudflare Workers static assets deployed with Wrangler 4

## Getting started

Use a Node.js version supported by the locked dependencies. The repository CI uses
Node.js 20.

```bash
git clone https://github.com/Akshayrr07/Portfolio.git
cd Portfolio
npm ci
npm run dev
```

Vite serves the app from `http://localhost:5173` by default. Open the URL printed by the
development server if the port is already in use.

## Available commands

Run these commands from the repository root:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create the production bundle in `dist/`. |
| `npm run lint` | Run ESLint across the JavaScript and JSX source. |
| `npm run preview` | Build the app and serve it with `wrangler dev`. |
| `npm run deploy` | Build the app and deploy it with `wrangler deploy`. |

`deploy` requires an authenticated Cloudflare account and sufficient permission for the
Worker named `akshayrr` in `wrangler.jsonc`. CI only installs dependencies, lints, and
builds; it does not deploy the site.

## Application architecture and routes

The app keeps the portfolio content on one page while retaining one dynamic route for
project details:

| Route | View | Notes |
| --- | --- | --- |
| `/` | `Home` | Renders all portfolio sections and their section IDs. |
| `/projects/:id` | `ProjectDetail` | Looks up a project in `projects.json`; an unknown ID shows the not-found state. |

Supported section hashes are:

- `/#home`
- `/#about`
- `/#skills`
- `/#experience`
- `/#projects`
- `/#certifications`
- `/#contact`

The current project grid renders cards and external GitHub links. The detail route is
resolved by the router when a project URL is opened directly; it does not create a
separate route for each portfolio section.

## Project structure

```text
.
├── .github/workflows/
│   ├── ci.yml                 # npm ci, lint, and build checks
│   └── pr-merge.yml           # GitHub auto-merge workflow
├── public/                    # favicon.jpg and logo-original.jpg
├── src/
│   ├── animations/
│   │   └── variants.jsx       # shared Framer Motion variants
│   ├── assets/data/           # portfolio JSON content
│   ├── components/
│   │   ├── common/            # Button, SocialLink, ThemeToggle
│   │   ├── layout/            # Navbar and Footer
│   │   ├── project/           # ProjectGrid and ProjectCard
│   │   └── sections/          # Home-page section components
│   ├── hooks/
│   │   └── useTheme.jsx        # light/dark theme context
│   ├── layouts/
│   │   └── MainLayout.jsx      # shared navbar/content wrapper
│   ├── pages/
│   │   ├── Home.jsx            # composed single-page portfolio
│   │   └── ProjectDetail.jsx   # /projects/:id view
│   ├── routes/
│   │   └── App.jsx             # BrowserRouter and route declarations
│   ├── index.css               # Tailwind import, fonts, and global theme styles
│   ├── styles.css              # supplemental global styles
│   ├── main.jsx                # React entry point
│   └── ...
├── index.html
├── package.json
├── vite.config.js
├── wrangler.jsonc
└── Agents.md
```

## Content and data

The section components consume content from `src/assets/data/`:

| File | Consumer | Main fields |
| --- | --- | --- |
| `projects.json` | `ProjectGrid`, `ProjectCard`, and `ProjectDetail` | `id`, `title`, `description`, `category`, `status`, `techStack`, `github`, `liveDemo`, `image` |
| `experience.json` | `Experience` | `id`, `title`, `company`, `location`, `dateRange`, `type`, `highlights`, `technologies` |
| `skills.json` | `Skills` | category keys such as `frontend`, `backend`, `tools`, and `ai_ml`; each skill has `name` and `level` |
| `certifications.json` | `Certifications` | `id`, `type`, `title`, `issuer`, `description`, `icon`, `year` |
| `social.json` | `Contact` and `SocialLink` | `email`, `linkedin`, `github`, `twitter`, and `portfolio` URLs |

The Hero and About sections also contain static copy and highlight/stat arrays in their
JSX files. Update JSON-backed lists and those component-owned strings deliberately;
not every portfolio string lives in a JSON file.

Before publishing, replace placeholder URLs in the data files. In particular, review
`social.json` and the `github`/`liveDemo` values in `projects.json` rather than assuming
the sample values are production links.

## Deployment

`vite.config.js` loads `@cloudflare/vite-plugin` alongside the React plugin. Build and
deploy with:

```bash
npm run deploy
```

`wrangler.jsonc` is the deployment source of truth. It names the Worker `akshayrr`,
enables observability and `nodejs_compat`, and sets
`assets.not_found_handling` to `single-page-application` so a direct browser request for
an application path can fall back to the SPA entry point.

For a local deployment-shaped check, use:

```bash
npm run preview
```

This builds the same production output and runs it through Wrangler locally. A normal
local UI iteration can use `npm run dev` instead.

## Branching and CI

GitHub currently reports `main` as the repository's default branch. Use `main` as the
integration base and create focused topic branches for changes. `Dev` and `Migration` are
existing tracked branches, but neither is the default branch. The old `master` name is a
stale local reference and is no longer a remote branch.

The checked-in `ci.yml` currently listens for pushes and pull requests targeting
`master` and `Dev`, while the repository default is `main`; that branch-filter mismatch
is an existing workflow issue and is outside this documentation change. Check the
workflow's actual trigger before assuming a `main` pull request ran CI. The
`pr-merge.yml` workflow enables GitHub auto-merge when the configured pull-request
conditions are met.

## Troubleshooting

- **`npm run lint` reports that `eslint` is missing:** install the locked dependencies
  with `npm ci`, then rerun the command from the repository root.
- **The production build fails:** confirm the active Node.js version, run `npm ci`, and
  inspect the first Vite or Tailwind error rather than changing source files blindly.
- **A section link does not scroll:** use one of the `/#section` hashes from the list
  above. Section IDs belong to the `/` view; they are not separate React routes.
- **A direct project URL shows “Project not found”:** use an `id` that exactly matches an
  entry in `src/assets/data/projects.json` and use `/projects/<id>`.
- **The project or contact CTA appears to do nothing:** the current Hero CTA values in
  `src/components/sections/Hero.jsx` still use `/projects` and `/contact`, which are not
  route entries in `src/routes/App.jsx`. The supported section URLs are `/#projects` and
  `/#contact`; changing those CTAs is a separate application fix.
- **A deployed deep link returns the wrong page:** confirm the Worker is using the
  current `wrangler.jsonc` and that the SPA not-found fallback is active.
- **Links or email buttons are placeholders:** update the relevant JSON file, then run
  `npm run build` and review the affected section.
- **There is no test script:** this repository currently provides `lint` and `build`
  checks only; add tests only as a separately scoped change.

## Further agent guidance

See [`Agents.md`](Agents.md) for the repository conventions, architecture map, validation
expectations, and deployment safeguards.
