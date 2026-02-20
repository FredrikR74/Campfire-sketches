# Campfire Sketches - Instruktioner

## Syfte
Skisser/mockups för en husbilscommunity-plattform. **Ingen utveckling sker här** - enbart HTML-skisser för design och layout. Projektet ska på sikt bli en Blazor WASM/MAUI hybrid-app med Tailwind CSS och Supabase.

## Regler
- **Läs INTE projektfiler i onödan** — CLAUDE.md + `boilerplate-nya-sidor.md` innehåller all info. Läs bara enskilda filer om du behöver se ett specifikt mönster som saknas här
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
boilerplate-nya-sidor.md       # Guide för att skapa nya sidor (steg-för-steg)
components/
  navbar.html                  # Navbar (fixed, scroll-effekt)
  footer.html                  # Gemensam footer
  load-components.js           # JS-loader för navbar + footer
  pages/
  campfire-landing.html        # Landningssida
  campfire-checklistor.html    # Checklistor & formulär
  campfire-loggbok.html        # Loggbok: listvy med sök, filter och paginering
  campfire-editera-loggbok.html        # Loggbok: skapa/ändra stopp med karta, väder och kostnader
  campfire-profil.html         # Profilsida med redigeringsläge
  campfire-profiler.html       # Profilsök med filter för medlemmar och resepreferenser
  campfire-nyheter-inspiration.html  # Artikelsida (nyheter/inspiration)
  campfire-traff-detaljer.html  # Detaljvy för en husbilsträff med temataggar
  campfire-traff-edit.html     # Formulär för att redigera husbilsträff (info, schema och kapacitet)
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

### Header under navbar (funktionssidor)
- Gäller **funktionssidor** (t.ex. checklistor, loggbok, profilöversikt) – **inte** redaktionella sidor (landing, artiklar, inspiration) och **inte** undersidor som `redigera profil`/`redigera loggbok`
- Använd kompakt hero direkt under navbar med:
  - Wrapper: `text-white pt-24 sm:pt-28 pb-12 sm:pb-16`
  - Bakgrund: dubbla gradients enligt standard underside-hero
  - Innehåll: `max-w-6xl mx-auto px-5`
  - Struktur: `flex flex-col sm:flex-row sm:items-end justify-between gap-4`
  - Vänsterblock: ikon + sidtitel (`text-3xl sm:text-4xl font-bold`) + kort ingress (`text-white/70 text-sm sm:text-base max-w-md`)
  - Högerblock (valfritt): snabba primära actions/tabs i hero (som i checklistor)

### Delade filer
- `campfire-base.css` – CSS-variabler och utility-klasser (länkas i alla HTML-filer)
- `components/navbar.html` – navbar (fixed, scroll-effekt)
- `components/footer.html` – gemensam footer
- `components/load-components.js` – laddar navbar + footer via fetch

### Delade utility-klasser (campfire-base.css)
| Klass | Beskrivning |
|-------|-------------|
| `.page` / `.page.active` | Toggle-mönster för sidvyer (display:none/block + fadeIn-animation) |
| `.fade-up` / `.fade-up.visible` | Scroll-animering (opacity 0→1, translateY 30px→0) |
| `.stagger-1` … `.stagger-4` | Fördröjning 0.1s–0.4s för staggerade animationer |
| `.card-hover` | Kort/rad hover-effekt (translateY -2px + shadow) |
| `.cf-input:focus` | Input focus-stil (border-color: forest, outline: none) |

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

### Träffrad (listrad med datum-badge i bild)
```html
<div class="border-2 border-gray-100 rounded-2xl p-5 hover:border-[var(--forest)] hover:shadow-lg hover:-translate-y-0.5 transition-all">
    <div class="flex flex-col sm:flex-row gap-4">
        <!-- Bild + datum-badge -->
        <div class="relative flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=700&q=80" alt="Husbilar parkerade vid havet" class="w-full sm:w-52 h-40 sm:h-32 object-cover rounded-2xl border-2 border-gray-100">
            <div class="absolute top-3 left-3 px-3 py-2 rounded-xl deep-gradient text-white text-center shadow-lg leading-tight min-w-[64px]">
                <div class="text-xl font-bold">15</div>
                <div class="text-[11px] uppercase tracking-wide">Aug</div>
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

### Kompakt hero (undersidor / funktionssidor)
```html
<div class="text-white pt-24 sm:pt-28 pb-12 sm:pb-16" style="background: linear-gradient(135deg, rgba(30,58,58,0.92) 0%, rgba(74,122,107,0.85) 50%, rgba(97,138,124,0.78) 100%), linear-gradient(135deg, #1e3a3a 0%, #4a7a6b 100%);">
    <div class="max-w-6xl mx-auto px-5">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
                <div class="flex items-center gap-3 mb-2">
                    <!-- Valfri ikon -->
                    <h1 class="text-3xl sm:text-4xl font-bold">Sidtitel</h1>
                </div>
                <p class="text-white/70 text-sm sm:text-base max-w-md">Beskrivning</p>
            </div>
            <!-- Valfritt högerblock med actions/tabs -->
        </div>
    </div>
</div>

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

### Tillbaka-header (redigera-sidor)
Används på undersidor där användaren redigerar något (t.ex. redigera logg, redigera profil). Ingen kompakt hero – enbart en smal mörk remsa med tillbaka-knapp och sidtitel.
```html
<div class="deep-gradient">
    <div class="max-w-4xl mx-auto px-6 pt-24 sm:pt-28 pb-8">
        <div class="flex items-center gap-3">
            <button class="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <h1 class="text-2xl font-bold text-white">Sidtitel</h1>
        </div>
    </div>
</div>
```

### Ikon-picker (radio pill grid)
Radioknappar med SVG-ikoner i ett rutnät – används för t.ex. väder. Kräver `.weather-pill` CSS i sidans `<style>`.
```html
<!-- CSS i <style>: -->
<!-- .weather-pill input:checked + label { border-color: var(--forest); background: #e4efe8; color: var(--slate-deep); transform: translateY(-1px); } -->
<div class="grid grid-cols-4 sm:grid-cols-7 gap-2 weather-pill max-w-xl">
    <div>
        <input id="icon-sun" type="radio" name="weather" class="sr-only" checked>
        <label for="icon-sun" aria-label="Soligt" title="Soligt"
               class="border-2 border-gray-200 rounded-xl h-12 flex items-center justify-center cursor-pointer transition-all">
            <svg class="w-6 h-6" style="stroke-linecap:round;stroke-linejoin:round" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"/>
            </svg>
        </label>
    </div>
    <!-- Fler alternativ på samma sätt... -->
</div>
```

### Stjärnbetyg
Fem klickbara stjärnor som radio-inputs. Kräver `.rating-stars` / `.rating-star` / `.rating-star.is-active` CSS + JS för att sätta `is-active` på stjärnor ≤ valt värde. Använd `--terracotta` för aktiv färg.
```html
<!-- CSS i <style>: -->
<!-- .rating-stars { color: #cbd5e1; } -->
<!-- .rating-star { transition: color 0.2s ease; } -->
<!-- .rating-star.is-active { color: var(--terracotta); } -->
<div class="rating-stars flex items-center gap-1.5" role="radiogroup" aria-label="Betyg">
    <label class="rating-star cursor-pointer" data-value="1" title="1 stjärna">
        <input type="radio" name="rating" value="1" class="sr-only">
        <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.56L12 17.52 6.12 20.62l1.12-6.56-4.76-4.64 6.58-.96L12 2.5z"/></svg>
    </label>
    <!-- Upprepa för data-value 2–5 -->
</div>
<!-- JS: -->
<!-- document.querySelectorAll('.rating-star').forEach(star => star.classList.toggle('is-active', +star.dataset.value <= value)); -->
