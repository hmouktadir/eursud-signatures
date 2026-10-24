# My Optique — Design System

A refined, dark-capable design system for **My Optique**, a multi-tenant SaaS platform that gives independent opticians in Morocco one numerical workshop for clients, prescriptions, sales and inventory. The voice is **precise, professional and warm** — editorial rather than clinical, in the register of Linear, Vercel and Stripe but dressed in bronze, sand and an italic serif.

> The product app is **light-first** ("paper"); the marketing site is **dark-first** ("ink"). Every token and component supports both via `:root` (light) and `[data-theme="dark"]` / `.theme-dark`.

---

## Source

Recreated from the product codebase — explore it for deeper fidelity:

- **GitHub:** `hmouktadir/soc-app` — https://github.com/hmouktadir/soc-app (branch `tests-dev`)
  - `resources/views/dashboard.blade.php` — the "L'Atelier" pilotage dashboard (stat tiles, featured revenue card, recent sales)
  - `resources/views/layouts/app.blade.php` — sidebar + main-panel shell, Roman-numeral nav
  - `resources/views/auth/login.blade.php` — the "L'Accès" editorial auth screen
  - `resources/views/billing/index.blade.php` — plan cards & invoices
  - `public/images/logo.png` — the **Socrate Optic** boutique mark (an example tenant), copied to `assets/`

The repo is a Laravel app; "My Optique" is the platform brand, "Socrate Optic" is the demo boutique whose logo ships here.

---

## Content fundamentals

- **Language:** French (Moroccan SaaS). Currency is **MAD**, written after the figure with a thin gap: `47 499 MAD`. Thousands use a space separator; decimals a comma (`599,00`).
- **Voice — the editorial conceit:** the product is framed as *an atelier* (workshop). Sections carry definite-article titles set in serif italic: **L'Atelier**, **La Collection**, **Les Clients**, **Les Ventes**, **Le Bilan**, **L'Accès**. Nav items are numbered with **Roman numerals** (`I. L'Atelier`, `II. La Collection`).
- **Address:** warm second person plural — *« Veuillez vous identifier pour entrer »*, *« Entrer dans l'atelier »*. Greets the user by first name in a wide-tracked eyebrow: **BONJOUR, HAMZA**.
- **Casing:** two registers only — large **Fraunces italic** for headings/metrics, and tiny **ALL-CAPS** labels with very wide tracking (0.2–0.35em) for eyebrows, nav, table headers and buttons. Sentence case for body and helper copy.
- **Tone examples:** *« Votre boutique, vue de plus haut. »* (hero), *« Trois gestes, tout le métier. »* (features), *« L'Astuce du Jour »* (in-app tip). Confident, unhurried, a little literary — never jargony or exclamatory.
- **Emoji:** none. Iconography is Font Awesome Solid only.

---

## Visual foundations

- **Colour vibe:** warm throughout. Light mode is a stack of paper creams (`#FDFCF8 → #E4DFD5`) on near-white cards; dark mode is near-black "ink" (`#080706 → #111009`). The single accent is **bronze `#AB8362`** with a **sand `#DCC7A9`** secondary — used as *accent*, never as a flood (see the bronze do/don't card). Status colours (emerald, red, amber, blue, violet) appear only as soft-tinted chips and alerts.
- **Type:** **Fraunces** (italic, weight 200–300, optical sizing) for all display, headings and large metrics; **Plus Jakarta Sans** (300–800) for everything else. Hero 88px → H2 38px → body 16px → 9px caps label. Signature move: **serif-italic numerals** for big figures, with the unit in tiny bronze caps.
- **Backgrounds:** flat warm fills, no photography in chrome. The dark hero carries a **low-opacity radial grid-dot** texture, radially masked so it fades at the edges. The featured card has a slow **rotating conic bronze glow** behind a charcoal face.
- **Cards & surfaces:** generous radii — buttons 10px, chips/small cards 16–20px, feature panels 32px, hero panels 40px, and **100px pills** for CTAs and status. Borders are warm hairlines (`linen #E6E1D7` / sand). Shadows are soft and **warm-tinted** (toward charcoal/bronze), layered; CTAs get a bronze glow.
- **Elevation:** the app main content sits on a **floating white panel** (36px radius) over the paper canvas, with a hairline sidebar separator (a vertical gradient rule, not a solid border).
- **Motion:** quiet. The signature is a **section reveal** — `translateY(24px) → 0` over 0.75s ease-out. The marketing **navbar fades transparent → frosted glass** on scroll. The nav CTA **inverts** between modes (dark on light / light on dark). Respect `prefers-reduced-motion`.
- **Hover / press:** hover lifts cards `translateY(-2/-3px)` with a warm shadow and a stronger border; buttons darken bronze and lift 1–2px; icon buttons fill with accent and **press shrinks** to `scale(.94)`. Focus rings are a 3px bronze-tinted halo.
- **Transparency & blur:** glass is used deliberately — the scrolled navbar, elevated/stat cards (`backdrop-filter: blur(16px)` over a translucent fill), and modal scrims (`blur(2px)` over a charcoal/ink wash).

---

## Iconography

- **System:** **Font Awesome 6 Solid** (`fa-solid`), loaded from CDN in the cards and kits. Icons render at **14–16px** and are tinted with the **accent or a semantic colour**, never left as default ink. `fa-regular` is used sparingly for timestamps (`fa-regular fa-clock`).
- **Logo:** the **Socrate Optic** boutique mark (`assets/socrate-optic-logo.png`) — a glasses pictograph over a serif wordmark with an Arabic sub-line. Use it on paper or ink (see the Brand cards). `assets/favicon.ico` is the platform favicon.
- **No emoji, no hand-drawn SVG.** When a glyph is needed, reach for a Font Awesome Solid name first.

> **Substitution flag:** Fraunces and Plus Jakarta Sans load from **Google Fonts** (`tokens/fonts.css`), and Font Awesome from CDN. The original repo ships these the same way; if you need self-hosted binaries for offline use, drop `.woff2` files in `assets/fonts/` and swap the `@import` for `@font-face` rules. Flag any brand-exact font files you'd like substituted.

---

## Index — what's in this system

**Foundations (root)**
- `styles.css` — the single entry consumers link (imports only).
- `tokens/colors.css` · `typography.css` · `spacing.css` · `fonts.css` · `base.css` — all CSS custom properties + `@font-face`/imports.
- `foundations/*.html` — specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Components** (`window.MyOptiqueDesignSystem_*`) — `components/<group>/`
- **buttons** — `Button` (primary · cta · dark · ghost · danger), `IconButton`
- **forms** — `Input` (boxed · underline), `Select`, `Checkbox`, `Switch`
- **cards** — `Card` (default · elevated · featured), `StatCard`, `PlanCard`
- **feedback** — `Badge`, `Alert`, `Toast`, `Modal` (center · drawer)
- **navigation** — `Navbar` (transparent→glass), `SidebarNavItem` (Roman-numeral)
- **data** — `DataTable`
- **brand** — `BrowserMockup`

**UI kits** — `ui_kits/`
- `platform/` — the boutique app: **L'Accès** login → **L'Atelier** dashboard → **Les Clients** registry (interactive).
- `marketing/` — the dark landing page: editorial hero with product mockup, features, pricing.

**Skill**
- `SKILL.md` — makes this system usable as a downloadable Agent Skill.

---

## Using it

Link the one stylesheet, load the bundle, read components off the namespace:

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, StatCard, Badge } = window.MyOptiqueDesignSystem_b73eb9;
</script>
```

Wrap any subtree in `class="theme-dark"` (or `data-theme="dark"`) to flip to the ink palette. Reference **semantic tokens** (`--surface-card`, `--text-primary`, `--accent`) in new work so both themes resolve automatically.
