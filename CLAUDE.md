# Campfire Sketches - Instruktioner

## Syfte
Skisser/mockups för en husbilscommunity-plattform. **Ingen utveckling sker här** - enbart HTML-skisser för design och layout. Projektet ska på sikt bli en Blazor WASM/MAUI hybrid-app med Tailwind CSS och Supabase.

## Regler
- **Använd komponentreferensen nedan** istället för att läsa `campfire-styleguide.html`
- **Fråga innan** nya komponenter skapas - lägg i styleguide om godkänt
- **Planera tillsammans** innan ändringar görs (minimera tokens)
- Redigera navbar/footer i `components/` – de laddas dynamiskt av alla sidor
- Delade CSS-klasser läggs i `campfire-base.css`, sidspecifik CSS i respektive fils `<style>`
- Håll denna fil (`CLAUDE.md`) uppdaterad vid förändringar

## Filstruktur
```
index.html                     # Hub med länkar till alla skisser
campfire-base.css              # Delade CSS-variabler & utility-klasser
campfire-framework.html        # Layout-template (använder components/)
campfire-styleguide.html       # Designsystem & komponenter (visuell referens)
components/
  navbar.html                  # Navbar (fixed, scroll-effekt)
  footer.html                  # Gemensam footer
  load-components.js           # JS-loader för navbar + footer
pages/
  campfire-landing.html        # Landningssida
  campfire-checklistor.html    # Checklistor & formulär
  campfire-profil.html         # Profilsida med redigeringsläge
```

## Tech
- Tailwind CSS (CDN), inga byggverktyg
- Google Fonts: **Outfit** (brödtext), **Caveat** (display/handskriven)
- Minimera js, enbart ok för demosyfte. Sidan ska senare byggas med blazor wasm
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

### Layout
- Max-width: `6xl` (innehåll), `4xl` (formulär)
- Spacing: `gap-6` (sektioner), `gap-4` (element), `gap-2` (badges)
- Hover på kort: `hover:shadow-lg hover:-translate-y-0.5 transition-all`

### Navbar
- Fixed, transparent overlay på hero, vit vid scroll
- Hero padding: `pt-24 sm:pt-28`
- Meny: Nyheter, Träffar, Inspiration, Rutter, Forum
- Navbar och footer laddas via `components/load-components.js` – redigera i `components/`

### Delade filer
- `campfire-base.css` – CSS-variabler och utility-klasser (länkas i alla HTML-filer)
- `components/navbar.html` – navbar (fixed, scroll-effekt)
- `components/footer.html` – gemensam footer
- `components/load-components.js` – laddar navbar + footer via fetch

---

## Komponentreferens (copy-paste)

> **Dessa kodsnuttar är den kompletta referensen.** Du behöver INTE läsa `campfire-styleguide.html` för att bygga sidor – all info finns här.

### Knappar
```html
<!-- Primary -->
<button class="bg-[var(--forest)] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[var(--slate-deep)] transition-all shadow-lg text-sm">Primary</button>
<!-- Secondary -->
<button class="bg-[var(--sage-green)] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[var(--forest)] transition-all text-sm">Secondary</button>
<!-- Accent -->
<button class="bg-[var(--terracotta)] text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-all text-sm">Accent</button>
<!-- Gradient -->
<button class="sage-gradient text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg text-sm">Gradient</button>
<!-- Outline -->
<button class="border-2 border-gray-300 text-gray-700 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-50 transition-all text-sm">Outline</button>
<!-- Ghost -->
<button class="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-200 transition-all text-sm">Ghost</button>
<!-- Text Link -->
<button class="px-4 py-2 text-[var(--forest)] hover:bg-[#e4efe8] rounded-lg transition-all text-sm font-medium">Text Link</button>
<!-- Destructive -->
<button class="px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-all text-sm font-medium">Destructive</button>
<!-- På mörk bakgrund -->
<button class="bg-white text-[var(--slate-deep)] px-6 py-2.5 rounded-full font-semibold hover:bg-[var(--sand-light)] transition-all shadow-lg text-sm">Vit Primary</button>
<button class="border-2 border-white text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white/10 transition-all text-sm">Vit Outline</button>
```

### Badges
```html
<span class="badge bg-[var(--sand-light)] text-[var(--terracotta)]">Nyhet</span>
<span class="badge bg-[#e8f4e8] text-[var(--sage-green)]">Event</span>
<span class="badge bg-[#e4efe8] text-[var(--forest)]">Tips</span>
<span class="badge bg-yellow-100 text-yellow-700">Utkast</span>
```

### Taggar (borttagbara)
```html
<span class="px-4 py-2 bg-[#e4efe8] text-[var(--forest)] rounded-full font-semibold text-sm flex items-center gap-2">
    Bohuslän <button class="hover:text-red-500 text-base leading-none">&times;</button>
</span>
<!-- Lägg till-knapp -->
<button class="px-4 py-2 border-2 border-dashed border-gray-300 text-gray-500 rounded-full font-semibold text-sm hover:border-[var(--forest)] hover:text-[var(--forest)] transition-all">+ Lägg till</button>
```

### Formulär
```html
<!-- Textfält -->
<div class="space-y-1.5">
    <label class="block text-sm font-semibold text-gray-700">Label</label>
    <input type="text" class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--forest)] focus:outline-none transition-colors">
</div>
<!-- Select -->
<select class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--forest)] focus:outline-none transition-colors">
    <option>Alternativ</option>
</select>
<!-- Textarea -->
<textarea rows="3" class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[var(--forest)] focus:outline-none transition-colors"></textarea>
<!-- Upload-yta -->
<div class="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:border-[var(--forest)] transition-colors cursor-pointer">
    <p class="text-gray-500 text-sm font-semibold">Klicka för att ladda upp</p>
    <p class="text-xs text-gray-400 mt-0.5">PNG, JPG upp till 10MB</p>
</div>
<!-- Checkbox-taggar -->
<label class="flex items-center gap-2 px-4 py-2 bg-[#e8f4e8] text-[var(--sage-green)] rounded-full cursor-pointer border-2 border-[#d0e8d0] text-sm">
    <input type="checkbox" checked class="w-4 h-4 accent-[var(--sage-green)]">
    <span class="font-semibold">Guidning</span>
</label>
<!-- Mini checkbox-taggar (faciliteter) -->
<label class="flex items-center gap-2 px-3 py-1 bg-[#e4efe8] rounded-full text-sm cursor-pointer">
    <input type="checkbox" class="w-3 h-3 accent-[var(--forest)]"><span>Parkering</span>
</label>
<!-- Notifieringsrad (toggle) -->
<label class="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-[var(--forest)] transition-colors cursor-pointer">
    <div>
        <div class="font-semibold text-gray-800 text-sm">Rubrik</div>
        <div class="text-xs text-gray-500">Beskrivning</div>
    </div>
    <input type="checkbox" class="w-6 h-6 accent-[var(--forest)]">
</label>
```

### Nyhetskort
```html
<div class="bg-white rounded-3xl overflow-hidden card-shadow hover:shadow-lg hover:-translate-y-0.5 transition-all">
    <div class="h-40 deep-gradient flex items-center justify-center text-white/30 text-sm">Bild 800×400</div>
    <div class="p-5 space-y-2.5">
        <div class="flex gap-2 items-center">
            <span class="badge bg-[var(--sand-light)] text-[var(--terracotta)]">Nyhet</span>
            <span class="text-xs text-gray-500">2 timmar sedan</span>
        </div>
        <h3 class="text-lg font-bold text-gray-800">Rubrik</h3>
        <p class="text-gray-600 text-sm leading-relaxed">Beskrivning.</p>
        <a href="#" class="inline-flex items-center text-[var(--forest)] font-semibold text-sm">Läs mer <span class="ml-1">→</span></a>
    </div>
</div>
```

### Träffrad (listrad med datumblock)
```html
<div class="border-2 border-gray-100 rounded-2xl p-5 hover:border-[var(--forest)] hover:shadow-lg hover:-translate-y-0.5 transition-all">
    <div class="flex flex-col sm:flex-row gap-4">
        <!-- Datumblock -->
        <div class="flex-shrink-0">
            <div class="w-20 h-20 rounded-2xl deep-gradient flex flex-col items-center justify-center text-white">
                <div class="text-2xl font-bold">15</div>
                <div class="text-xs uppercase tracking-wide">Aug</div>
            </div>
        </div>
        <div class="flex-grow space-y-1.5">
            <h3 class="text-lg font-bold text-gray-800">Rubrik</h3>
            <p class="text-gray-600 text-sm">Plats · Datum</p>
            <div class="flex flex-wrap gap-1.5 pt-1">
                <span class="badge bg-[#e4efe8] text-[var(--forest)]">45 deltagare</span>
                <span class="badge bg-[var(--sand-light)] text-[var(--terracotta)]">Grillkväll</span>
            </div>
        </div>
        <div class="flex-shrink-0 flex items-center">
            <button class="px-5 py-2 bg-[var(--sage-green)] text-white rounded-full font-semibold hover:bg-[var(--forest)] transition-all text-sm">Anmäl dig</button>
        </div>
    </div>
</div>
```

### Sektions-headers
```html
<!-- Med knapp -->
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
    <h2 class="text-2xl font-bold text-[var(--slate-deep)]">Rubrik</h2>
    <button class="bg-[var(--forest)] text-white px-5 py-1.5 rounded-full font-semibold text-sm self-start sm:self-auto shrink-0">+ Skapa</button>
</div>
<!-- Med länk -->
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
    <h2 class="text-2xl font-bold text-[var(--slate-deep)]">Rubrik</h2>
    <a href="#" class="text-[var(--forest)] font-semibold text-sm hover:underline shrink-0">Se alla →</a>
</div>
```

### Kort & ytor
```html
<!-- Standard kort -->
<div class="bg-white rounded-3xl p-6 card-shadow">...</div>
<!-- Med forest-pattern -->
<div class="bg-white rounded-3xl p-6 card-shadow forest-pattern">...</div>
<!-- Mörkt kort -->
<div class="deep-gradient rounded-3xl p-6 text-white">...</div>
```

### Avatar
```html
<div class="w-20 h-20 rounded-full deep-gradient flex items-center justify-center text-white text-2xl font-bold">JA</div>
```

### Hero-gradient
```css
/* Standard hero (undersidor) */
background: linear-gradient(135deg, rgba(30,58,58,0.92) 0%, rgba(74,122,107,0.85) 50%, rgba(97,138,124,0.78) 100%),
            linear-gradient(135deg, #1e3a3a 0%, #4a7a6b 100%);
/* Stor hero (landing, med bakgrundsbild) */
background: linear-gradient(135deg, rgba(30,58,58,0.92) 0%, rgba(74,122,107,0.85) 50%, rgba(97,138,124,0.78) 100%),
            url('bild.jpg') center/cover no-repeat;
background-color: var(--slate-deep); /* fallback */
```

### Kompakt hero (undersidor)
```html
<div class="text-white pt-24 sm:pt-28 pb-12 sm:pb-16" style="background: linear-gradient(135deg, rgba(30,58,58,0.92) 0%, rgba(74,122,107,0.85) 50%, rgba(97,138,124,0.78) 100%), linear-gradient(135deg, #1e3a3a 0%, #4a7a6b 100%);">
    <div class="max-w-6xl mx-auto px-5 text-center">
        <h1 class="text-3xl sm:text-4xl font-extrabold mb-3">Sidtitel</h1>
        <p class="text-white/70 text-sm max-w-lg mx-auto">Beskrivning</p>
    </div>
</div>
```

### Tabell (admin)
```html
<div class="bg-white rounded-2xl p-5 card-shadow overflow-x-auto">
    <table class="w-full text-sm">
        <thead>
            <tr class="border-b-2 border-gray-200">
                <th class="text-left py-3 px-3 font-semibold text-gray-700">Rubrik</th>
                <th class="text-right py-3 px-3 font-semibold text-gray-700">Åtgärder</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
            <tr class="hover:bg-gray-50 transition-colors">
                <td class="py-3 px-3">Innehåll</td>
                <td class="py-3 px-3">
                    <div class="flex gap-1 justify-end">
                        <button class="px-3 py-1.5 text-[var(--forest)] hover:bg-[#e4efe8] rounded-lg transition-all text-xs font-medium">Redigera</button>
                        <button class="px-3 py-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-all text-xs font-medium">Ta bort</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

### Sidmall (ny sida)
```html
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Campfire – SIDNAMN</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Caveat:wght@600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../campfire-base.css">
    <style>
        /* Sidspecifik CSS här */
    </style>
</head>
<body>

<div id="navbar-slot" data-variant="dark"></div>

<!-- SIDINNEHÅLL -->

<div id="footer-slot"></div>
<script src="../components/load-components.js"></script>
</body>
</html>
```
