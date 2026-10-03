# Seyi Adedokun — Portfolio v2

Personal portfolio for **Seyi Adedokun**, Software Engineer (React.js, Next.js, React Native, Node.js).

Editorial, mostly black-and-white layout: huge type, thick rules, numbered sections. Light or dark follows the visitor's device until they pick one with the toggle.

## Stack

Next.js 13 (pages router) · Tailwind CSS · Framer Motion · Space Grotesk + Instrument Serif

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Updating content

All content lives in **`src/data/portfolio.js`** — edit that one file:

| Export     | What it controls                                                      |
|------------|-----------------------------------------------------------------------|
| `profile`  | Name, role, location, email, site URL, résumé link                    |
| `socials`  | Social links in the Contact section                                   |
| `about`    | About: a short statement (lights up word by word) + a small note       |
| `services` | "What I do" rows                                                      |
| `stack`    | Toolkit rows                                                          |
| `work`     | Experience rows (click to expand)                                     |
| `projects` | The work index **and** the `/projects/<slug>` case-study pages        |

### Logos

Logos live in `src/assets/logos/`, imported at the top of `portfolio.js`:

- jobs use `logo` (and optional `logoBg` for the tile colour, e.g. a white logo on dark),
- projects use `img` (and optional `imgBg`).

Anything without a logo shows its initials instead. Afrikdish has no logo (its site is offline);
the Rubies logo is the parent company's (rubiestech.org), as the foundation site is down.

### Résumé

The Résumé links download `public/Seyi_Adedokun_Resume.pdf`. To update it, replace that file
(keep the same name) or change `profile.resume` in `src/data/portfolio.js`.

## Structure

```
src/
├── data/portfolio.js        # all content
├── assets/logos/            # company & project logos
├── pages/
│   ├── index.js             # home page
│   └── projects/[slug].js   # project case-study pages
├── components/
│   ├── layout/              # Navbar, Footer
│   ├── sections/            # Hero, ScrollBand, About, Services, Stack, Experience, Projects, Contact
│   └── ui/                  # Reveal/Mask animations, SectionHeader, LogoTile
└── hooks/useTheme.js        # light/dark toggle (saved in localStorage)
```
