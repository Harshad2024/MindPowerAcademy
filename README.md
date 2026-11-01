# Mind Power Academy — Website

A responsive marketing website for Mind Power Academy, a personality-development and handwriting-improvement institute in Hubballi, Karnataka.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.4.5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

**Live site:** [mindpoweracademy.vercel.app](https://mindpoweracademy.vercel.app/)

---

## About

The site showcases the academy's courses, workshops, gallery, and legal pages, and lets visitors send an enquiry through a contact form.

It is a static single-page React app — no server, no database, no user accounts. Enquiries are delivered by [EmailJS](https://www.emailjs.com/) straight from the browser, and the site is hosted free on Vercel.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + Vite 6 | UI and build tooling |
| Tailwind CSS 3 | Styling |
| React Router 6 | Page routing |
| Framer Motion 11 | Scroll and layout animations |
| React Icons | Icon sets |
| EmailJS | Contact form delivery |
| Vercel | Hosting and CDN |

---

## Features

- Home page with hero, academy intro, animated stats, course grid, testimonials, and FAQ
- Full course catalogue with eight courses and sub-track details
- About page with founder profile and embedded YouTube videos
- Upcoming events with poster lightbox and WhatsApp registration links
- Past events gallery with category filters and a keyboard-navigable lightbox
- Contact page with phone/email/address cards, Google Map, and enquiry form
- Floating call/WhatsApp buttons and scroll-to-top
- Fully responsive with a mobile navigation drawer
- Terms, Privacy Policy, and Disclaimer pages

---

## Project Structure

```text
src/
├── components/          # Home-page sections + shared UI
│   ├── common/          # Navbar, ScrollToTop, ImagePlaceholder
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Courses.jsx
│   ├── WhyChooseUs.jsx
│   ├── Testimonials.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   └── FloatingButtons.jsx
├── pages/               # One file per route
├── App.jsx              # Routes and layout shell
├── index.css            # Tailwind entry and shared classes
└── main.jsx             # React entry point

public/
├── images/              # Logo, hero background, course thumbnails
├── gallary/             # Event gallery photos
└── upcoming-events/     # Workshop posters
```

---

## Getting Started

**Requires Node.js 18+ and npm.**

```bash
git clone <repository-url>
cd mindacademy-web
npm install
```

Create a `.env` file in the project root with your EmailJS credentials:

```dotenv
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
```

Then start the dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add a **Gmail** service and connect the academy mailbox. Copy the **Service ID**.
3. Create a template using these variables: `{{name}}`, `{{phone}}`, `{{email}}`, `{{course}}`, `{{message}}`.
   Set **To Email** to the academy address and **Reply To** to `{{email}}`.
4. Copy the **Template ID** and your **Public Key** from **Account → General**.
5. Add all three values to `.env` and restart `npm run dev`.

The public key is safe to expose — it ships in the browser bundle by design. Never put the EmailJS *private* key in a `VITE_` variable.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server on port 5173 |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |

There is no automated test suite; verify changes by building and clicking through the site.

---

## Editing Content

Content lives in plain arrays at the top of each file.

| What | File |
|---|---|
| Courses (home grid) | `src/components/Courses.jsx` |
| Courses (detail page) | `src/pages/CoursesPage.jsx` |
| Testimonials | `src/components/Testimonials.jsx` |
| FAQs | `src/components/FAQ.jsx`, `src/pages/ContactUs.jsx` |
| Upcoming workshops | `src/pages/UpcomingEvents.jsx` |
| Gallery photos | `src/pages/PastEvents.jsx` |
| Phone, email, address | `src/components/common/Navbar.jsx`, `Footer.jsx`, `src/pages/ContactUs.jsx` |
| Brand colours | `tailwind.config.js` |

Images go in `public/` and are referenced by absolute path, e.g. `/images/logo.png`.

---

## Deployment

Hosted on **Vercel** with automatic deploys from the `main` branch.

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite

`vercel.json` rewrites all routes to `index.html` so page refreshes work.

Add the three `VITE_EMAILJS_*` variables under **Project Settings → Environment Variables** for Production, Preview, and Development.

> Vite inlines environment variables at build time. After adding or changing one, **redeploy** — editing it alone does nothing.

---

## Known Limitations

- No per-route SEO — every page shares one title and description
- No `sitemap.xml`, `robots.txt`, or structured data
- No spam protection on the contact form (EmailJS free tier is 200 emails/month)
- No automated tests or CI
- No error boundary or dedicated 404 page
- `src/components/Contact.jsx` and `src/components/Navbar.jsx` are unused legacy files
- `axios` and `react-scroll` are installed but not used

---

## License

No license file is present. All rights reserved by Mind Power Academy.

---

<p align="center">Empowering Minds • Shaping Futures</p>
