# Faiq Khan - Developer Portfolio

Static frontend portfolio: React + Vite + Tailwind CSS + React Router + Framer Motion + Lucide.
No backend, no database, no uploads. Deploys to Vercel or Netlify.

## Folder structure
```
faiq-portfolio/
├── public/
│   ├── projects/          <- PUT PROJECT IMAGES HERE
│   ├── favicon.svg  robots.txt  sitemap.xml
├── src/
│   ├── components/        Navbar, Footer, Hero, ProjectCard, ProjectFilter, ServiceCard,
│   │                      TechCard, Lightbox, SafeImage, ContactForm, Button, Reveal, Seo ...
│   ├── sections/          About, Stats, FeaturedProjects, Services, Process, TechStack, Why, Expect, Contact
│   ├── pages/             Home, About, Projects, ProjectDetails, Services, Contact
│   ├── data/
│   │   ├── site.js        <- contact links, SEO, form settings
│   │   ├── projects.js    <- ALL project content
│   │   └── content.js     <- stats, services, process, tech stack, filters
│   ├── App.jsx  main.jsx  index.css
├── index.html  tailwind.config.js  vercel.json  package.json
```

## Commands
```bash
npm install        # install
npm run dev        # dev server (http://localhost:5173)
npm run build      # production build -> dist/
npm run preview    # preview the build
```

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. vercel.com -> Add New Project -> import the repo.
3. Framework preset: Vite (build `npm run build`, output `dist`). Deploy.
   `vercel.json` already handles deep links like `/projects/edgefund`.
   Or from the terminal: `npm i -g vercel && vercel --prod`.
4. After deploying, set your real domain in `src/data/site.js` (`url`), `public/robots.txt` and `public/sitemap.xml`.

## Project images
Drop files into `public/projects/` and reference them as `/projects/<file>` in `projects.js`:
```
public/projects/edgefund.webp  edgefund-1.webp  edgefund-2.webp  nail-atelier.webp ...
```
Use WebP around 1600x1000 (16:10). Missing images show a "Project Preview" placeholder automatically.
Also add a 1200x630 `public/og-image.png` for link previews.

## Edit project info
`src/data/projects.js`. The starter descriptions are placeholders: replace them with your real details.
Leave `github` / `liveDemo` as `""` to hide those buttons.

## Change GitHub / LinkedIn / email / WhatsApp
`src/data/site.js`. Replace every `YOUR_*` value. WhatsApp format: `https://wa.me/923001234567`.

## Add a new project
Copy one object in `projects.js`, give it a unique `id` and `slug`, set `filters` (must match names in `projectFilters` in `content.js`), add images to `public/projects/`, and add the URL to `public/sitemap.xml`.

## Contact form
With `formEndpoint: ''` the form opens the visitor's email app (mailto). To send for real, create a Formspree form and paste its URL into `formEndpoint` in `site.js`. The form only shows success when the service confirms.

## Testimonials
There are none, so the section shows "What you can expect". Add real ones to `testimonials` in `content.js` (`{ quote, name, role }`) and they replace it.

## Profile photo and CV
- Photo: save as `public/profile.webp` (portrait, about 800x1000). Until then, a "Project Preview"-style placeholder shows.
- CV: save as `public/Faiq-Khan-CV.pdf`. The View/Download CV buttons (hero and About) appear automatically once the file exists.
- Names are set in `src/data/site.js` (`photo`, `cv`).

## Demo videos (LinkedIn)
Each project has a `video: ""` field in `projects.js`. Paste the LinkedIn post URL there and a "Watch Video" button appears on the card and a "Watch Demo Video" button on the case-study page.
