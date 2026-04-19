# HM Consulting — Website

Static website for HM Consulting, a home repair, restoration, and remodeling company.

## Pages

| File | URL |
|------|-----|
| `index.html` | Home |
| `services.html` | Services (with Ozone Remediation specialty) |
| `about.html` | About |
| `contact.html` | Contact |
| `privacy.html` | Privacy Policy |
| `terms.html` | Terms of Service |

## Before Deploying

Update the following placeholders:

- **Phone number** — search for `Phone — coming soon` in all HTML files
- **Address** — search for `Address — coming soon` in all HTML files
- **Canonical URLs** — update `hmhomeconsulting.com` in `<link rel="canonical">` tags once the domain is confirmed
- **Analytics** — add your own Google Analytics or Tag Manager snippet (separate property from any other sites)
- **Contact form** — wire the form in `contact.html` to a real endpoint (e.g., Formspree, Netlify Forms, or a backend)
- **Stock photos** — replace Unsplash images with licensed stock photos from your preferred library

## Deploying to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to `Deploy from a branch`
4. Select branch `main`, folder `/ (root)`
5. Save — the site will be live at `https://<username>.github.io/<repo-name>/`

To use a custom domain, add a `CNAME` file to the root:
```
hmhomeconsulting.com
```
Then configure your DNS with a CNAME record pointing to `<username>.github.io`.

## Design System

| Token | Value |
|-------|-------|
| Primary accent | `#B5572A` (terracotta) |
| Background | `#FAF7F2` (warm off-white) |
| Text / Headings | `#2D2926` (charcoal) |
| Body text | `#6B5F57` (warm gray) |
| Sand / dividers | `#E5D3BA` |
| Serif headings | Fraunces (Google Fonts) |
| Sans body | Inter (Google Fonts) |

## Contact

`hmhomerepairsolutions@gmail.com`
