# Campfire Sketches - Instruktioner

## Syfte
Skisser/mockups för en husbilscommunity-plattform. **Ingen utveckling sker här** - enbart HTML-skisser för design och layout. Projektet ska på sikt bli en Blazor WASM/MAUI hybrid-app med Tailwind CSS och Supabase.

## Regler
- Alla skisser baseras på befintliga `campfire-styleguide.html` och `campfire-framework.html`
- **Fråga innan** nya komponenter skapas - lägg i styleguide om godkänt
- **Planera tillsammans** innan ändringar görs (minimera tokens)
- Håll denna fil (`CLAUDE.md`) uppdaterad vid förändringar

## Filstruktur
```
index.html                     # Hub med länkar till alla skisser
campfire-framework.html        # Nav + footer (shared template)
campfire-styleguide.html       # Designsystem & komponenter
pages/
  campfire-landing.html        # Landningssida
  campfire-checklistor.html    # Checklistor & formulär
  campfire-profil.html         # Profilsida med redigeringsläge
```

## Tech
- Tailwind CSS (CDN), inga byggverktyg
- Google Fonts: **Outfit** (brödtext), **Caveat** (display/handskriven)
- Vanilla JS, inga ramverk
- Allt innehåll på svenska

## Designsystem (snabbreferens)

### Färger (CSS-variabler)
| Variabel | Hex | Användning |
|----------|-----|------------|
| `--slate-deep` | #1e3a3a | Primär mörk (nav, footer, gradient) |
| `--forest` | #4a7a6b | Primär accent |
| `--sage-green` | #618a7c | Sekundär accent |
| `--sand-light` | #e8dcc4 | Varm sand |
| `--terracotta` | #c17c5c | Accentfärg (CTA, knappar) |
| `--warm-gray` | #5a5a5a | Neutral grå |
| `--bg-mist` | #f8f8f6 | Bakgrund |

### Typografi
- Display: Caveat 700 | H1: Outfit 800 | Underrubriker: Outfit 700
- Labels: Outfit 600 | Brödtext: Outfit 400

### Radier & skuggor
- Inputs: `rounded-xl` | Kort insida: `rounded-2xl` | Kort utsida: `rounded-3xl` | Knappar/badges: `rounded-full`
- Skugga: `0 8px 30px rgba(30,58,58,0.08)`
- Border: 2px solid, gray-200 default, forest vid focus/hover

### Knappar
Primary (forest), Secondary (sage), Accent (terracotta), Gradient, Outline, Ghost, Text Link, Destructive

### Layout
- Max-width: `6xl` (innehåll), `4xl` (formulär)
- Spacing: `gap-6` (sektioner), `gap-4` (element), `gap-2` (badges)
- Hover: `hover:shadow-lg hover:-translate-y-0.5 transition-all`

### Navbar
- Fixed, transparent overlay på hero, vit vid scroll
- Hero padding: `pt-24 sm:pt-28`
- Meny: Nyheter, Träffar, Inspiration, Rutter, Forum
