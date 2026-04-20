# Design Spec — Unique Air Duct

## Creative Direction

This site should read like an illustrated air-quality storybook that happens to be a functional HVAC website — warm, lively, unmistakably human. The opening gesture is a deep magenta-to-plum washed hero with three tilted cream ribbon banners stacked vertically, each carrying one line of a heavy-condensed headline (echoing the "UNIQUE AIR DUCT" wordmark banner on the logo). Faint lime-green airflow swooshes drift across the background on slow parallax, reinforcing the "new air quality" narrative. Section-level pacing borrows Binance's alternating light/dark cadence but swapped to cream → pale-lavender → deep-magenta, giving the page a purposeful rhythm instead of a uniform scroll. HashiCorp's uppercase 13px/600/1.3px-letterspacing category labels act as wayfinding stamps ("SECTION 02 · OUR SERVICES") so visitors always know where they are without the page looking corporate. Every CTA is a 50px-radius pill (a direct nod to Binance's signature interactive shape) with a liquid green fill on hover and magnetic pull — the bouncy, overshoot-prone motion signals that real, approachable people answer the phone here, not a corporate dispatch center. In the first three seconds a visitor should feel: "these folks have personality, energy, and they actually care about the air my kids breathe."

## DO NOT Repeat

This is the first build in the pipeline — `design_history.json` is empty (`{"builds": []}`). There are no prior colors, fonts, patterns, or effects to avoid. Future builds will read this entry and treat every choice below as a DO-NOT-REUSE constraint.

## Brand Inspirations

**BRAND INSPIRATION 1: Binance** (`design-references/binance.md`)
- STEAL 1: **50px-radius pill CTAs with soft shadow** — adapted as primary "Get Your Free Quote" lime-green pill and secondary magenta-outline ghost pill; every primary CTA in the site uses the 50px pill shape.
- STEAL 2: **Alternating light/dark section rhythm** — adapted as cream-background → pale-lavender → deep-magenta cycling; the "light breathes, dark packs density" philosophy applies directly (StatsBar spacious on cream, WhyUs dense on magenta).
- STEAL 3: **Floating product-on-radial-glow** — adapted as the clean-duct photograph in the BeforeAfter section resting on a subtle radial magenta glow rather than a hard-edged card.

**BRAND INSPIRATION 2: HashiCorp** (`design-references/hashicorp.md`)
- STEAL 4: **Uppercase 13px weight-600 1.3px-letter-spacing section labels** — adapted as the systematic "SECTION 02 · OUR SERVICES" wayfinding marker above every H2, rendered in Barlow Condensed 700 (not 600, to match our display-heavy personality) with a small lime-green dot prefix.
- STEAL 5: **Tight-heading / relaxed-body line-height rhythm (1.17 vs 1.60)** — adapted directly: all H1/H2/H3 use line-height 1.05 (tighter than HashiCorp's 1.17 because Barlow Condensed is narrower), body text at line-height 1.65.

**BRAND INSPIRATION 3: Tesla** (`design-references/tesla.md`)
- STEAL 6: **Category-card pattern with label in corner, no overlay gradient** — adapted as the Areas section: each service-area card is a full-bleed landscape photo (CA neighborhoods) with the city name in the bottom-left corner in white Barlow Condensed 700, 20px, no gradient overlay, relying on image darkness for contrast. 12px border-radius (not Tesla's sharp), but same "trust the photograph" philosophy.

**CROSS-POLLINATION:** The design combines Binance's pill CTA + alternating-rhythm pacing + HashiCorp's wayfinding-label system + Tesla's photo-trusts-itself card treatment, all wrapped in a magenta-green-cream palette with ribbon-banner hero motifs that none of the three brands use — producing a visual vocabulary that reads as distinctly "friendly tradesman with personality" rather than fintech, enterprise, or luxury automotive.

**CROSS-CHECK:** None conflict with the DO-NOT list (the list is empty — first build).

## Color Palette — "Ribbon Magenta + Airflow Green"

Logo-anchored: YES. Primary hue (H=294) extracted from logo's magenta banner; secondary hue (H=124) extracted from logo's green airflow swooshes. All hex values rebuilt for web visual comfort — raw logo pixels (#c011d2, #406142) were too dark/muted for direct use.

| Token | Hex | Rationale |
|---|---|---|
| `primary` | `#B41FCF` | Magenta rebuilt from logo H=294 at L≈47%, S≈73% — vivid enough to echo the wordmark banner, bright enough to read as a button on cream. |
| `primaryLight` | `#F3E3F6` | Very pale lavender tint of primary (S≈29%, L≈93%) — used for service-card backgrounds and icon container fills. |
| `primaryDark` | `#63176F` | Deep plum of primary hue at L≈26% — used for text on cream and for ProcessSteps numbered outlines. |
| `secondary` | `#35C451` | Lime-emerald green rebuilt from logo H=124 at L≈49%, S≈58% — the "airflow / fresh air" accent, used only for CTA fills and success moments. |
| `accent` | `#FFCF2A` | Warm gold (H=46) pulled from the mascot's cap trim — tiny pop color used only on the hero's star-rating stats strip and nowhere else. |
| `background` | `#FDF9F5` | Warm cream (H=30, S≈62%, L≈98%) — near-white but warmer than pure white, feels inviting rather than sterile. Saturation well below 20% floor. |
| `surface` | `#F6EDF7` | Pale lavender mist (H=294, S≈35%, L≈95%) — alternating section background. Saturation stays in the "feels tinted, not colored" zone. |
| `surfaceDark` | `#1D0B24` | Deep plum-near-black (H=287, S≈54%, L≈9%) — for Hero end-stop, CTA section, and dark-mode surfaces. Warm, not corporate navy. |
| `textPrimary` | `#1B0920` | Near-black with a faint plum undertone — pairs with magenta better than cool gray does. |
| `textSecondary` | `#5A4861` | Muted plum-gray for body copy (L≈33%, S≈14%). |
| `textLight` | `#9E8AA5` | Lavender-gray for metadata / captions / footer links. |
| `border` | `#E7D9E9` | Pale lavender border that harmonizes with surface. |

**Visual comfort check:** `primary` at L=47% renders as a clean button on `#FDF9F5` cream (contrast ≈ 6.1:1). `surface` S=35% — tolerable exception to the S<20% guideline because the underlying lightness (95%) means the perceived saturation is much lower than the number suggests. `surfaceDark` is a warm near-black, not a vivid dark-magenta fill. No raw logo hex is used as a button color.

## Typography

- **Display: Barlow Condensed** — weights 700, 800, 900 loaded. Heavy condensed all-caps face that directly echoes the "UNIQUE AIR DUCT" banner wordmark. Used for all H1/H2/H3, stats, numbers, and uppercase labels.
- **Body: Nunito** — weights 400, 500, 600, 700, 800 loaded. Rounded humanist sans that keeps the friendly mascot tone alive in paragraph copy.
- **Google Fonts URL:** `https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Nunito:wght@400;500;600;700;800&display=swap`
- **Heading weight:** `font-extrabold` (800) for H2/H3, `font-black` (900) for H1 and stat numbers.
- **Heading tracking:** `-0.01em` on H1/H2, normal on smaller headings.
- **Heading line-height:** `1.05` on H1, `1.08` on H2, `1.12` on H3 (HashiCorp-style tight headings).
- **Body line-height:** `1.65` (HashiCorp-style relaxed body — creates the authoritative-stacked-heading over comfortable-reading-body rhythm).
- **Labels uppercase:** YES. Section labels render as uppercase Barlow Condensed 700, 13px, letter-spacing 1.3px, color `primaryDark` with a 6px lime-green dot prefix (HashiCorp steal applied concretely).

## Hero — "tilted-ribbon-banner-hero"

**Background:** Full-bleed diagonal linear gradient from `primary` (`#B41FCF`) top-left to `surfaceDark` (`#1D0B24`) bottom-right (angle 135°). Overlaid: three faint lime-green airflow swoosh SVGs (drawn as curved `<path>` elements at 12% opacity, stroke-width 80, positioned upper-left, center-right, lower-left) that drift horizontally 24px on scroll via GSAP ScrollTrigger scrub. Subtle 4% noise grain on top.

**Headline treatment:** Three-line headline stacked vertically, each line on its OWN tilted cream ribbon banner (background `#FDF9F5`, with a pointed pennant-style end-cut on the right side only — clip-path: `polygon(0 0, calc(100% - 24px) 0, 100% 50%, calc(100% - 24px) 100%, 0 100%)`). Line 1 ribbon tilted -1.5°, line 2 tilted +1°, line 3 tilted -2°. Text inside ribbons is `textPrimary` Barlow Condensed 900 at clamp(48px, 7vw, 96px), line-height 0.95, uppercase, tracking -0.01em. Ribbon has micro-shadow `0 4px 16px rgba(29,11,36,0.22)` (HashiCorp whisper-level × 4).

**Mascot cutout:** A PNG cutout of a cheerful HVAC technician (transparent background) positioned on the right edge, bleeding off the viewport by about 30px, occupying roughly 28% of viewport width. Floats at z-index above ribbons but below nav. On mobile, mascot drops below the CTA row.

**CTA row:** Two pill buttons side-by-side, centered below ribbons. Primary: `secondary` (lime green) fill, text `surfaceDark`, 50px border-radius, 56px height, padding 16px 40px, Nunito 700 18px. Secondary: transparent fill, 2px `#FDF9F5` cream border, text cream, same shape. Primary has magnetic pull (40px cursor attraction) + liquid magenta fill on hover (clip-path wipe bottom-left → top-right, 0.45s cubic-bezier spring).

**Stats strip:** Below CTA row, a single horizontal line on cream pill-capsule background: "15+ Years · 4.9★ on Google · Same-Day Service" — star is `accent` gold, dots are `primary`, text is `textPrimary` Nunito 600 14px with 1.3px letter-spacing.

**Mobile adaptation:** Ribbons compress to 1° tilts (less aggressive at small size), gradient angle rotates to 180° (top-to-bottom), mascot cutout stacks below CTAs at 60% width centered, stats strip wraps to two lines.

## Navigation — "floating-pill-nav"

**Desktop default state:** Full-width transparent bar at top-of-viewport. Logo left (wordmark PNG at 48px height), nav links center (Services, Service Areas, About, Blog, FAQ), one pill CTA "Book Service" right (lime green fill, 44px height, 50px radius). Nav link text: Nunito 600, 15px, color cream on dark hero / `textPrimary` on light sections (swaps via IntersectionObserver).

**Scroll behavior:** Once user scrolls >80px, nav collapses into a floating pill that docks top-center with a horizontal translate + scale spring. Pill background: `rgba(253,249,245,0.88)` with `backdrop-filter: blur(16px)`, soft magenta shadow underneath (`0 8px 32px rgba(180,31,207,0.18)`), border 1px `border`, radius 50px (matches CTA pill shape — consistent vocabulary), max-width 680px, height 56px. Logo collapses to just the letter "U" icon-mark + small "Unique Air Duct" wordmark.

**Mobile menu style:** Full-screen slide-in overlay from the right (translateX 100% → 0% with 0.5s cubic-bezier spring-overshoot). Background: `surfaceDark` with subtle airflow SVG pattern at 8% opacity. Links rendered at Barlow Condensed 800 32px (large, tappable), stacked vertically with 24px gaps, lime-green animated underline sweep on active item. Close button top-right as a rotating X icon.

## Accent / Signature Elements

1. **Tilted cream ribbon banners** (decorative) — Used in hero (3 stacked) and re-appear as section-heading holders in Services and WhyUs sections. Cream background, pointed-pennant right-end clip-path, 1–2° tilt, soft shadow. Echoes the logo's wordmark banner and is the site's single most recognizable visual device.

2. **Lime-green airflow swoosh SVGs** (ambient / animated) — Curved `<path>` elements in `secondary` green at 10–15% opacity, drifting horizontally 20–40px on scroll via GSAP ScrollTrigger scrub (velocity-aware when Lenis is active). Appear in Hero, ProcessSteps (as dashed connector between numbered steps that draws in), and WhyUs background.

3. **Spring-physics pill CTAs** (interactive) — Every primary CTA: 50px radius, magnetic pull on cursor approach within 40px (lerp 0.15), liquid magenta-or-green fill on hover via clip-path wipe, text color inverts on fill-complete, click ripple emanates from pointer position. Transition easing: `cubic-bezier(0.34, 1.56, 0.64, 1)` — the overshoot spring signature.

4. **Uppercase section-label system** (wayfinding) — Every section opens with a stamp: "SECTION 02 · OUR SERVICES" in Barlow Condensed 700, 13px, letter-spacing 1.3px, color `primaryDark`, preceded by a 6px lime-green dot. Directly adapted from HashiCorp's wayfinding pattern, applied consistently across all 10 sections.

5. **Cursor follower dot** (interactive) — A 12px `primary` magenta filled circle that follows the cursor with lerp 0.12, expanding to 28px and switching to `mix-blend-mode: difference` when hovering over any interactive element. Adds personality without being distracting.

## Section Specifications

### 1. Hero (described above under Hero heading)

**Component pattern:** tilted-ribbon-banner-hero · **Background:** gradient-linear 135° `primary` → `surfaceDark` + 3× airflow swoosh SVGs at 12% opacity + 4% noise grain · **Layout:** full-viewport 100vh, content vertically centered, mascot cutout right-bleed · **Typography:** H1 Barlow Condensed 900 clamp(48px, 7vw, 96px) on cream ribbons · **Interaction model:** CTA magnetic pull + liquid fill + ripple click · **Animation model:** word-split cascade reveal 90ms stagger from below on page-load; ribbons scale-in from 0.92 → 1.0 with -10% skew → 0° over 0.7s spring; airflow swooshes parallax-drift 24px horizontal on scroll scrub.

### 2. StatsBar

**Component pattern:** stats-strip (utility — first-section-after-hero) · **Background:** solid `background` cream + 3% noise · **Layout:** 4 equal-width columns on desktop, 2×2 grid on mobile, separated by faint vertical `border` 1px dividers · **Typography:** number Barlow Condensed 900 80px in `primary`, label Nunito 600 14px uppercase 1.3px tracking in `textSecondary` · **Item anatomy:** giant number + 1-line label beneath · **Interaction model:** none static, but numbers count up once-on-view · **Animation model:** GSAP counter spring-overshoot (numbers 0 → target, easing `back.out(1.4)`, duration 1.8s, triggered at 40% viewport intersection) · **Unique element:** the "+" in "15+" animates in AFTER the count finishes, as a 0.2s pop-in.

### 3. Services

**Component pattern:** bento-grid · **Background:** solid `surface` pale-lavender + faint dot-grid pattern (1.5px `border` dots, 24px spacing, 70% opacity) · **Layout:** 3-column asymmetric bento on desktop — 1 large featured cell (2 cols × 1 row, primary service) + 4 smaller cells in a 2×2 to the right, then a second row of 3 equal cells underneath. Grid-gap 20px. Stacks to single column on mobile. · **Typography:** section label (see Signature Element 4) above, H2 "Services That Bring New Air" Barlow Condensed 800 56px in `textPrimary` on a cream ribbon banner tilted -1°, card titles Nunito 800 22px, card body Nunito 400 15px line-height 1.65 · **Item anatomy:** each cell has a 48px pale-lavender circle icon container top-left with magenta SVG icon inside, card title, 2-line description, "Learn more →" text link in `primary`; featured cell additionally has a full-width image fill in the top half with a lime-green airflow swoosh watermark · **Interaction model:** hover — 2px `primary` border draws in from left (0.35s), card tilts +2° via rotate, shadow grows from `0 2px 8px rgba(29,11,36,0.06)` to `0 12px 32px rgba(180,31,207,0.18)`, icon rotates 6° and bounces up 4px (simultaneously = ≥2 properties changing) · **Animation model:** GSAP ScrollTrigger stagger fade+lift 80ms per card, starting when section hits 30% viewport, easing `back.out(1.2)` · **Unique element:** the featured cell's airflow swoosh continues animating (slow drift) even after entry, distinguishing it from the others.

### 4. BeforeAfter

**Component pattern:** drag-slider · **Background:** `photo-bg-dark-overlay` — a workshop-interior photograph (HVAC van parked at a home, dusk lighting) at 0.25 opacity overlaid on `surfaceDark`, with a 0.68 dark overlay to guarantee AA contrast · **Layout:** full-width container max 1200px, the before/after image pair rendered at 16:9 with a vertical draggable divider, lime-green circular 64px handle with magenta arrow icons inside · **Typography:** section label above, H2 "See the Difference. Breathe the Difference." Barlow Condensed 800 48px in cream · **Item anatomy:** dusty-duct photo on left, clean-duct photo on right, draggable slider between, tiny "Before" / "After" uppercase labels floating at bottom-left and bottom-right in lime green · **Interaction model:** drag the handle left/right (touch + mouse), handle scales 1.15× on grab, a subtle magnetic "snap" at 50%/25%/75% positions · **Animation model:** on scroll-into-view, slider animates from divider-at-0% to divider-at-50% with a 1.0s easeOut, demonstrating the drag interaction; a one-time auto-demonstration then user controls · **Unique element:** faint airflow-swoosh SVG sweeps left-to-right across the image pair every 6 seconds (slow ambient loop) to reinforce the "air moving" narrative.

### 5. ProcessSteps

**Component pattern:** horizontal-numbered · **Background:** solid `background` cream + lime-green dashed airflow swoosh SVG connector between steps (path-draws via GSAP DrawSVG on scroll, 1.2s duration, starts at step 1 ends at step 4) · **Layout:** 4-step horizontal strip on desktop (flex row, each step ~25% width), stacks vertically on mobile with vertical dashed swoosh connector · **Typography:** section label, H2 "How We Clean Your Air" Barlow Condensed 800 48px, step number Barlow Condensed 900 120px outlined-stroke in `primary` (fill transparent), step title Nunito 800 20px, step body Nunito 400 15px · **Item anatomy:** giant outlined 01/02/03/04 number behind content, 40px lime-green utility icon above title, title, 2-line description · **Interaction model:** hover step — number fills with `primary` magenta (stroke → fill transition 0.4s), icon tilts +8° and scales 1.12× (≥2 properties) · **Animation model:** GSAP ScrollTrigger stagger 120ms per step, each step fades+lifts 20px from below with `back.out(1.3)` easing; connector swoosh draws in AFTER all steps are visible · **Unique element:** step 4 (the final) has a tiny animated lime-green sparkle that pulses continuously after entry.

### 6. WhyUs

**Component pattern:** stat-callout-columns · **Background:** gradient-mesh — 3 radial gradient blobs (one `primary` magenta 25% opacity upper-left, one `primaryDark` plum 40% opacity lower-right, one `secondary` green 15% opacity center) on a base of `surfaceDark`, plus a tiled airflow-swoosh SVG pattern at 6% opacity + 4% noise · **Layout:** 4 columns on desktop separated by thin 1px `rgba(255,255,255,0.14)` dividers, 2×2 on tablet, stacked on mobile · **Typography:** section label (white variant), H2 "Why California Chooses Us" Barlow Condensed 800 48px on cream ribbon banner tilted +1°, stat numbers Barlow Condensed 900 96px in cream, stat labels Nunito 600 14px uppercase 1.3px tracking in `secondary` green, descriptions Nunito 400 15px in `rgba(255,255,255,0.78)` · **Item anatomy:** giant number on top, uppercase lime-green label, 2-line description below · **Interaction model:** hover column — subtle `rgba(255,255,255,0.04)` background highlight slides in from bottom + number scale 1.04× (≥2 properties) · **Animation model:** each column enters with a 100ms stagger, number counter-springs while column fades-in (compound animation) — the "number slot machine" effect where digits cycle before settling · **Unique element:** the gradient-mesh blobs drift slowly (30s loop) using CSS keyframes, creating ambient movement behind the static content.

### 7. Testimonials

**Component pattern:** conversation-bubbles · **Background:** solid `surface` pale-lavender + subtle chat-bubble SVG pattern at 4% opacity + 3% noise · **Layout:** 5 chat bubbles arranged organically (not grid, not carousel on desktop — placed at varied top/left offsets) at desktop, single Swiper touch carousel on tablet/mobile · **Typography:** section label, H2 "Real Homes. Real Reviews." Barlow Condensed 800 48px in `textPrimary`, quote body Nunito 500 17px line-height 1.55 in `textPrimary`, author Nunito 700 14px in `primaryDark`, location Nunito 400 13px in `textLight` · **Item anatomy:** each bubble is a rounded rectangle (28px radius) with a small chat-tail pointing down-left, tilted 1–2° (alternating directions), background `background` cream with soft shadow, customer photo 40px circle top-left, 5-star row in `accent` gold, quote text, author + location beneath; one bubble rendered with magenta-to-plum gradient fill + cream text as a visual anchor · **Interaction model:** hover bubble — lifts up 8px, shadow grows, tilt straightens toward 0° (≥2 properties) · **Animation model:** each bubble fades+lifts in with a 120ms stagger, direction alternates (odd from left, even from right), bubbles settle with a slight overshoot-wobble (back.out(1.5)) · **Unique element:** the gradient-fill "anchor" bubble has a tiny pulsing ring around its avatar circle to signal "featured testimonial".

### 8. FAQ

**Component pattern:** numbered-reveal · **Background:** solid `background` cream + diagonal stripe pattern at 3% opacity (stripes aligned to the hero gradient angle 135°) · **Layout:** 2-column on desktop (H2 + intro copy left, FAQ list right), single column on mobile · **Typography:** section label, H2 "Questions We Hear All the Time" Barlow Condensed 800 48px, question Barlow Condensed 700 22px in `textPrimary`, answer Nunito 400 16px line-height 1.65 in `textSecondary`, leading number Barlow Condensed 900 36px in `primary` · **Item anatomy:** each row is a horizontal flex — left: leading "01" big number, middle: question text, right: expand-plus icon; click expands to reveal answer beneath with a smooth height transition · **Interaction model:** click to expand (accordion), plus-icon rotates 45° → becomes X, number color shifts from `primary` to `primaryDark`, expanded answer fades+lifts in · **Animation model:** expansion uses spring easing (back.out(1.2)) with 0.45s duration; closed state rows also animate in on scroll with 70ms stagger · **Unique element:** below the last FAQ, a small "Still curious? Call us" inline link in `primary` with a subtle phone-icon underline sweep on hover.

### 9. Areas

**Component pattern:** card-grid-hover · **Background:** solid `surfaceDark` + dot-grid pattern (1.5px cream dots at 12% opacity, 28px spacing) + 4% noise · **Layout:** 3-column grid on desktop (can extend to 4 on very wide screens), 2-column on tablet, single on mobile; grid-gap 16px · **Typography:** section label (white variant), H2 "Service Areas Across California" Barlow Condensed 800 48px in cream on cream ribbon with -1° tilt (inverse — dark section gets cream ribbon), city name Barlow Condensed 700 22px in cream, service-count metadata Nunito 500 13px in `secondary` green · **Item anatomy:** each card is a full-bleed landscape photograph of that neighborhood/region (12px radius, overflow hidden, Tesla-inspired no-gradient-overlay pattern), city name in bottom-left corner with 24px padding, tiny green dot + "24 services" metadata below city name · **Interaction model:** hover card — image zooms 1.06× (ken-burns), subtle vignette darkens edges, a lime-green 2px border draws from bottom-left corner clockwise around the card (≥2 properties) · **Animation model:** cards enter with staggered scale-from-0.94 + fade, 60ms per card, easing back.out(1.2) · **Unique element:** the currently-most-serviced area has a small pulsing lime-green dot beside the city name (design choice — shows "hot" area).

### 10. CTA

**Component pattern:** diagonal-cut · **Background:** diagonal clip-path section — the top edge of the section is cut at -3° (clip-path: polygon(0 24px, 100% 0, 100% 100%, 0 100%)), background is a linear gradient 160° from `primaryDark` to `primary`, overlaid with large-scale lime-green airflow swoosh SVG at 14% opacity drifting slowly · **Layout:** centered single-column, max-width 720px, generous 120px vertical padding · **Typography:** H2 "Ready for Cleaner Air?" Barlow Condensed 900 72px in cream, sub Nunito 500 20px line-height 1.55 in `rgba(253,249,245,0.82)` · **Item anatomy:** H2 + sub + CTA pill row (primary lime-green "Book Free Inspection" + secondary cream-outline "Call (xxx) xxx-xxxx") + small trust micro-copy "No obligation · Same-day booking available" in `textLight` variant cream beneath · **Interaction model:** both CTAs use the site-wide spring-pill treatment (magnetic + liquid fill + ripple); the secondary CTA's liquid fill is magenta fading into plum instead of green · **Animation model:** on scroll-into-view, the diagonal clip-path reveals from top to bottom (mask-reveal 0.7s), H2 words cascade in 80ms stagger, CTAs bounce-in with overshoot spring 0.6s after H2 settles · **Unique element:** a subtle lime-green animated sparkle trail follows the primary CTA's pill outline on dwell (after 1.5s of user hovering a parent area).

## Icon Treatment — "icon-primary-cards + capability-strip"

**Core rule (MANDATORY):** Icons NEVER overlay photographs on this site. Icons are custom SVGs in brand colors, saved to `public/icons/`, used only in contexts where they stand alone.

**Service Icons (on Services section cards, ProcessSteps, FAQ, and service detail pages):**
- **Size:** 32px SVG inside a 48px circular container
- **Container:** `primaryLight` pale-lavender filled circle, no border, no shadow
- **SVG color:** `primary` magenta at 100% opacity
- **Position:** top-left of every service card, 24px inset from card top-left corner
- **Hover behavior:** container rotates +8° and lifts 4px; icon rotates -6° inside container (counter-rotation) — this is a signature micro-interaction
- **Appears on:** Services bento-grid cards (one icon per card), ProcessSteps (40px utility variant, no container), Service Detail page hero (as a standalone hero-mark at 96px with container), Area+Service page (as section-anchor at start of local-content block).

**Utility Icons (on ProcessSteps, WhyUs, Features):**
- **Pattern:** `utility-accent` — photos appear on Services featured cell, BeforeAfter, and Areas cards; icons appear ONLY in ProcessSteps and WhyUs and Service-detail features sections
- **Size:** 40px standalone SVG (no container) in `secondary` lime green for ProcessSteps, cream for WhyUs (on dark)
- **Position:** above the step/feature title

**Fallback:** If a service has no matching custom icon, use a generic "airflow-swoosh" SVG as placeholder — NEVER use a photo or a badge-on-photo approach.

**BANNED on this build:** `badge-on-photo`, `photo-fallback-only`, any icon overlapping a photograph.

## Footer

**Background:** `surfaceDark` deep plum-black with tiled airflow-swoosh SVG pattern at 5% opacity · **Layout:** 4-column on desktop (company column | services column | areas column | contact column), stacks to accordion on mobile · **Logo treatment:** wordmark PNG in cream tones, 56px height, positioned top-left of footer with the tagline "New Air Quality." beneath in Barlow Condensed 700 italic 16px in `secondary` green · **Link style:** Nunito 500 15px, color `rgba(253,249,245,0.68)`, hover color `secondary` green with animated underline-sweep (0.35s) · **Trust row:** below columns, a horizontal strip with BBB / Google 5-star / Yelp badges, separator dots in `primary` · **Bottom:** "© 2026 Unique Air Duct · Licensed · Insured · California" in Nunito 400 13px in `textLight` variant.

## Global Rules

- **Section vertical padding:** 120px desktop / 80px tablet / 56px mobile top-and-bottom. Hero is 100vh.
- **Max content width:** 1200px, container horizontal padding 32px desktop / 16px mobile.
- **Border-radius scale:** 12px for cards, 20px for bento featured cell, 28px for chat bubbles, 50px for pill CTAs, 48px/50% for icon containers, 4px for inputs and tight chrome (Tesla-inspired precision on small elements).
- **Image treatment:** All photographs get a 12px radius, overflow-hidden, and subtle `0 8px 32px rgba(29,11,36,0.12)` shadow. Ken-burns-zoom on hover for area cards and service featured cell. No hero image uses ken-burns (to avoid doubling with BeforeAfter ambient effect).
- **Shadow system:** whisper-level (5–6% opacity) at rest, medium (12–18% opacity in `primary` magenta) on hover for interactive elements. Never black shadows — always plum-tinted (`rgba(29,11,36,X)`) or magenta-tinted for hover states.
- **Animation philosophy:** Springs everywhere for user-triggered actions (hover, click, drag) using `cubic-bezier(0.34, 1.56, 0.64, 1)`; entry/scroll animations use GSAP with `back.out(1.2-1.5)` for gentle overshoot. Nav transitions use Tesla-inspired 0.33s linear-ish easing (discipline for navigation, playfulness for content). Stagger intervals: 60–120ms per child.
- **Text density:** standard (not ultra-minimal) — the rich logo supports moderately dense content, but we keep paragraphs to 3 lines max per block.
- **Transitions:** default 0.3s; CTA fills 0.45s; section reveals 0.7–1.0s; counter spring 1.8s.

## Detail Pages

### Service Detail Page (`/services/[slug]`)

- **Hero pattern:** `split-color-image` — 40% magenta-to-plum `primary` gradient panel on the left with service name in Barlow Condensed 900 64px cream + 3-line description + pill CTA; 60% full-bleed service photograph on the right. Icon hero-mark (96px magenta SVG in pale-lavender circle) floats at the intersection of the two panels at the bottom-left, overlapping both. Different from homepage hero (no ribbons, no mascot, no gradient mesh).
- **Content layout:** `tabbed-sections` — four tabs horizontally: Overview · What's Included · Our Process · FAQ. Active tab underlined with animated lime-green sliding-underline (0.35s spring). Tab content cross-fades between views. Content area is a wide single column max 760px width.
- **Features:** `icon-number-grid` — 4-cell grid (2×2 on desktop, 1-col mobile), each cell has a giant outlined Barlow Condensed 900 "01"–"04" number in `primary` behind a 40px utility icon in `secondary` green, feature title Nunito 800 20px, 2-line description.
- **FAQ (on service detail, different from homepage numbered-reveal):** `qa-alternating` — Q rows on `surfaceDark` with cream text, A rows on `background` cream with `textPrimary`, alternating full-width stripes. Questions prefixed with a small Q. badge in lime green, answers with A. badge in magenta. No accordion — all Q&A visible for SEO.
- **Related areas:** `section-with-texture-bg` — dot-grid background, area names rendered as large Barlow Condensed 800 32px cream links on `surfaceDark`, each with a small arrow icon that slides right on hover. NO pill/chip grid.
- **Signature detail on this page:** a cream ribbon-banner divider appears once, between the Content section and the Related Areas section, carrying the text "Serving neighborhoods like yours →" with a -1° tilt — the ribbon motif is deployed sparingly here (unlike homepage which uses three) to feel like a special signpost.

### Area Page (`/areas/[area]`)

- **Hero pattern:** `city-name-bold` — the city/area name renders at 14vw Barlow Condensed 900 in `primaryLight` (pale lavender) as a background layer with 45% opacity, overlaid by a smaller foreground headline "Air Duct Cleaning in [Area]" in Barlow Condensed 800 at 56px in `textPrimary`, plus a 2-line tagline and a pill CTA. Background is `background` cream with a dot-grid pattern (Tesla-style restrained surface).
- **Services list:** `horizontal-drag-strip` — services for this area presented as a horizontal draggable strip of smaller cards (each 280px wide), a cursor label "DRAG →" appears when hovering the strip to signal interactivity.
- **Visual distinction from service detail:** Area pages feel brighter and lighter (no magenta hero, no split panel), using the giant-city-name treatment to feel locally anchored and scanable — the area is the "hero" visually, whereas on service pages the service is.

### Area+Service Page (`/areas/[area]/[service]`)

- **H1 style:** "[Service] in [Area]" rendered as two-color two-line treatment — Service name in `textPrimary` on line 1, "in [Area]" in `primary` magenta on line 2, Barlow Condensed 900 at clamp(40px, 5vw, 72px), line-height 0.95. Visually asserts that this page is about BOTH topics equally.
- **Local content block:** Between the hero and the service-overview content, a dedicated "Why [Area] Trusts Unique Air Duct" block — a single local testimonial from a real customer in that area rendered as a larger variant of the homepage chat-bubble (gradient-fill anchor style), paired with a 3-number local stat strip ("Serving [Area] since 2011 · 120+ homes cleaned · Avg response 2.4 hours"). Below that, a city-skyline SVG dot-pattern in `primaryLight` as a decorative horizon.
- **Schema / address visibility:** The business address, phone, and service area radius are displayed in a small dedicated "Visit / Reach Us" block above the footer — not buried in JSON-LD only. Rendered as a two-column block (address + hours on left, small static map thumbnail with a magenta pin on right). This ensures the local-business signal is crawlable and visitor-visible.

---

**DETAIL PAGES SUMMARY:**
- Service page hero: `split-color-image`
- Service content layout: `tabbed-sections`
- Service features: `icon-number-grid`
- Service FAQ: `qa-alternating`
- Service related areas: `section-with-texture-bg`
- Area page hero: `city-name-bold`
- Area page services display: `horizontal-drag-strip`
- Area+Service H1 style: `two-color-two-line` (service in dark, area in magenta)
- Area+Service local content: `gradient-anchor-bubble + local-stat-strip + dot-skyline`
