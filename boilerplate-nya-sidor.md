# Guide: Skapa nya sidor

## Checklista
1. Skapa fil i `pages/` med sidmallen från CLAUDE.md (se "Sidmall (ny sida)")
2. Välj hero-typ: **kompakt** (undersidor) eller **stor** (med bakgrundsbild)
3. Bygg innehållet med komponenter från CLAUDE.md (komponentreferensen)
4. Sidspecifik CSS i `<style>` — delade klasser i `campfire-base.css`
5. Lägg till länkkort i `index.html`
6. Uppdatera filstrukturen i `CLAUDE.md`

---

## Vanliga sektionsmönster

### Sektionsheader med länk
```html
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
    <h2 class="text-2xl font-bold text-[var(--slate-deep)]">Rubrik</h2>
    <a href="#" class="text-[var(--forest)] font-semibold text-sm hover:underline shrink-0">Se alla →</a>
</div>
```

### Innehållsgrid (3 kolumner)
```html
<section class="max-w-6xl mx-auto px-5 py-16">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Kort här -->
    </div>
</section>
```

### 2-kolumns layout (innehåll + sidopanel)
```html
<div class="max-w-6xl mx-auto px-5 py-12">
    <div class="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div class="lg:col-span-2"><!-- Huvudinnehåll --></div>
        <aside class="lg:col-span-1">
            <div class="lg:sticky lg:top-24 space-y-6"><!-- Sidopanel --></div>
        </aside>
    </div>
</div>
```

### CTA-banner (mörk)
```html
<section class="py-16">
    <div class="max-w-6xl mx-auto px-5">
        <div class="deep-gradient rounded-3xl overflow-hidden relative">
            <div class="forest-pattern absolute inset-0 opacity-30"></div>
            <div class="relative text-center py-16 px-6 sm:px-12">
                <h2 class="handwritten text-4xl sm:text-5xl text-[var(--sand-light)] mb-4">Rubrik</h2>
                <p class="text-white/70 text-lg max-w-xl mx-auto mb-8">Beskrivning</p>
                <div class="flex flex-wrap gap-3 justify-center">
                    <button class="bg-white text-[var(--slate-deep)] px-8 py-3 rounded-full font-bold hover:bg-[var(--sand-light)] transition-all shadow-lg text-sm">Primär CTA</button>
                    <button class="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all text-sm">Sekundär CTA</button>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## index.html — länkkort-mall
```html
<li>
  <a href="pages/FILNAMN.html" class="block h-full p-5 rounded-3xl card-shadow card hover:shadow-lg hover:-translate-y-0.5 transition transform">
    <div class="text-lg font-semibold text-[var(--slate-deep)] mb-1">Sidtitel</div>
    <p class="text-sm text-gray-600">Kort beskrivning.</p>
    <div class="mt-4">
      <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full text-white bg-[var(--terracotta)]">Öppna</span>
    </div>
  </a>
</li>
```

---

## Tips
- Navbar/footer laddas automatiskt via `load-components.js` — redigera i `components/`
- Alla CSS-variabler och utility-klasser finns i `campfire-base.css`
- Alla komponenter (knappar, badges, kort, formulär) finns i CLAUDE.md under "Komponentreferens"
- Minimera JS — enbart för demosyfte
