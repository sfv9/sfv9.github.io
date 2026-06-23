# SFV9 LLC — Design System

> Federal GTM strategy consulting. The missions are serious; the slides don't have to be.

SFV9 LLC is a **single-person consulting practice** helping VC-backed, seed-to-Series-B companies stand up (or scale) a **federal go-to-market practice**. Clients are passionate, technical, defense-adjacent teams; they buy 20+ years of federal-sales experience on a focused monthly retainer. The brand is **credible but not boring** — professional enough for federal buyers, sharp and a little irreverent because the work shouldn't put anyone to sleep.

The visual identity centers on a **dropped-pin-with-trajectory** logo: find the target, plot the course, take off. Primary **blue** (#2563EB) carries the brand; **coral** (#E85D6D) is the signal accent for rhythm and emphasis.

---

## Sources provided
- `uploads/SFV9 Brand Guidelines.docx` — official brand doc (colors, type, components, do's/don'ts). Extracted to `uploads/brand_guidelines.txt`.
- `uploads/SFV9 LLC Logo.PNG` — master logo (1536×1024, transparent). Cropped → `assets/logo-mark.png` (+ recolored `assets/logo-mark-light.png` for dark grounds).
- `uploads/sfv9_home.html` — live marketing site → recreated in `ui_kits/website/`.
- `uploads/sfv9_apps.html` — internal app launcher → recreated in `ui_kits/apps/`.

No Figma, repo, or codebase was provided beyond the two HTML files above.

---

## CONTENT FUNDAMENTALS — how SFV9 writes

**Tone:** Confident, plain-spoken, evidence-based, lightly irreverent. The promise is clarity and an unfair experience advantage, delivered without jargon theater.

**Person:** Direct **second person** to the client ("Win the federal market," "Build *your* federal strategy," "where *you're* headed"). First-person plural ("we'll be in touch") for the practice. Avoid stiff third-person corporate voice.

**Casing:** Sentence case for headlines and body. **UPPERCASE** (with `--ls-eyebrow` tracking) reserved for eyebrows, stat labels, and badges. Never all-caps body copy.

**Acronyms:** Federal sales runs on them (NAICS, GSA MAS, SAM.gov, CAGE, FY26). Use real ones where they add precision — set in **mono** — but never stack acronym soup for its own sake.

**Numbers & proof:** Lead with concrete figures (20+, $500M+, 50+, 95%). Big numerals in Space Grotesk, alternating blue/coral. Don't invent vanity metrics.

**Length:** Headlines short and punchy (3–8 words). Body in tight, scannable sentences at 1.6 line-height. One idea per card.

**Vibe examples**
- ✅ "Win the federal market without the guesswork."
- ✅ "Federal GTM, end to end."
- ✅ "Course plotted." (contact confirmation)
- ✅ "20-hour monthly retainer."
- ❌ "Leverage synergistic best-in-class solutions to optimize your federal vertical."

**Emoji:** Not part of the brand voice in prose. Simple geometric glyphs (⌖ ⇄ ◎) or icon chips are fine as visual anchors; don't use emoji as decoration in copy.

---

## VISUAL FOUNDATIONS

**Color.** Primary **blue** (#2563EB) is the brand + primary CTA. **Coral** (#E85D6D) is the secondary signal — used for rhythm (every 2nd stat/card), never for body text. Neutrals run from near-black ink (#0F0F0F text) to a #F3F3F3 ground. Max **two** accent colors in any one component; never drop accents below ~70% opacity. Full ramps (50→900) live in `tokens/colors.css`.

**The signature gradient** (`--gradient-brand`, 135° blue→coral) is used **sparingly** — highlight words in a headline, thin dividers, never large flat fills. A separate `--gradient-ink` (near-black → slate) backs dark panels (stat strip, footer).

**Type.** Display = **Space Grotesk** (geometric, confident) for all headings, eyebrows, stat numerals, button labels. Body = **Plus Jakarta Sans** at 16–18px / 1.6. **JetBrains Mono** for codes, identifiers, and figures (NAICS, contract numbers, timers). Ramp: 56 / 42 / 28 / 18 / 14. Negative tracking on display (−0.5px h1/h2); positive tracking (0.8px) on uppercase eyebrows. No serifs, ever.

**Spacing.** Strict **8px grid** (`--space-*`), generous whitespace. Section/slide padding 40–60px. Don't crowd — add space between sections rather than tightening.

**Backgrounds.** Mostly clean: white `--paper` cards on a `--ground` (#F3F3F3) page, or very subtle light diagonal washes (160°, white→#F8F9FA) on hero/launcher. Dark moments use `--gradient-ink`. No photography or textures shipped; no busy patterns. Imagery, when added, should read cool/professional.

**Corner radii.** 4px chips/badges, 6px buttons/inputs, **8px cards (canonical)**, 12px large panels, pill for fully rounded. Keep radii consistent within a context — don't mix.

**Cards.** White surface, **soft neutral shadow** (`--shadow-md` = `0 8px 24px rgba(15,15,15,.08)`), 8px radius, optional **3px top accent bar** (alternate blue/coral). Hover lifts −4px to `--shadow-lg`. This is the core container pattern — favor soft shadows over hard borders for depth.

**Buttons.** Primary = solid blue with a colored **glow** shadow (`--shadow-blue`); hover lifts −2px and deepens glow; press scales to 0.98. Secondary = 2px blue outline on white. Signal = coral. Ghost = text only. Space Grotesk 600, 6px radius.

**Shadows / depth.** Layered, soft, low-opacity neutral shadows do the elevation work (xs→xl in `tokens/effects.css`). Brand-tinted glows (`--shadow-blue`, `--shadow-coral`) are reserved for CTAs and emphasized icon chips. The brand explicitly favors **depth over flatness**.

**Motion.** Calm and purposeful. `--ease-out` (decelerate) for entrances/lifts; `--dur-fast` (.15s) for hover color, `--dur-normal` (.3s) for transform/shadow. Hover = lift + shadow; press = slight scale-down. No bounces, no infinite loops, no parallax.

**Hover / press states.** Links shift to blue on hover. Cards & buttons lift. Pressed buttons scale to 0.98. Disabled drops opacity to ~0.5–0.65 with `not-allowed`.

**Transparency / blur.** Used only for modal overlays — `rgba(15,15,15,.45)` + a light `backdrop-filter: blur(3px)`. Not used decoratively.

**Focus.** Visible blue focus ring (`--focus-ring`, 3px rgba(37,99,235,.35)) on inputs and interactive elements.

---

## ICONOGRAPHY

The source material ships **no icon set or icon font** — the original site used emoji (🔍 🤝 📊) inside service chips. For the system we **avoid emoji as icons** and instead use **simple geometric Unicode glyphs** as anchors inside colored icon chips: ⌖ (target/positioning), ⇄ (partnership/exchange), ◎ (enablement/focus), → (forward/CTA), ← (back). These render in any font, match the geometric Space Grotesk feel, and need no asset pipeline.

**Recommendation (flagged):** if/when a richer icon set is needed, adopt **[Lucide](https://lucide.dev)** via CDN — thin, geometric, 2px stroke, consistent with the brand's modern-but-grounded feel. It is *not yet wired in*; ask before standardizing on it. Do **not** hand-roll SVG icons or reintroduce emoji.

**Logo assets** (`assets/`): `logo-mark.png` (dark mark, for light grounds), `logo-mark-light.png` (white mark, for dark grounds). Use the `Logo` component for the lockup. The mark = a location pin whose interior diagonal forms a "9," with a blue paper-plane/navigation arrow breaking out of the top-right.

---

## ⚠️ Font substitution note
The brand specifies **Space Grotesk** and **Plus Jakarta Sans** — both **Google Fonts** — so no licensed binaries were provided or needed. `tokens/fonts.css` loads them (plus **JetBrains Mono** for data) via the Google Fonts CSS endpoint. This works for any online consumer but means the system has **no self-hosted/offline webfont binaries**. If you need offline or self-hosted fonts, send the `.woff2` files and I'll swap `fonts.css` to local `@font-face` rules. (The compiler reports "Fonts: none" for the same reason — the faces live behind Google's remote stylesheet, not in a local `@font-face` it can parse.)

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (@import list only). Consumers link this one file.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible wrapper.

**`tokens/`** — CSS custom properties (`@import`ed by `styles.css`)
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css`

**`assets/`** — `logo-mark.png`, `logo-mark-light.png`

**`components/core/`** — React primitives (namespace `window.SFV9DesignSystem_636214`)
- `Button` · `Badge` · `Card` · `Stat` · `Input` · `Eyebrow` · `Logo`
- `core.card.html` — Design System tab specimen

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand)

**`ui_kits/website/`** — marketing home recreation (hero, services, stats, CTA, footer + contact dialog)

**`ui_kits/apps/`** — internal app launcher + Timesheet sample app

**Design System tab** — every `@dsCard`-tagged HTML (16 foundation cards + core components + 2 UI kits).
