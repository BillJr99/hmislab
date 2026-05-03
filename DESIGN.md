---
name: Human-Machine Intelligent Systems Lab
description: Use-inspired ML research, presented warmly and plainly.
colors:
  coral: "#F97171"
  coral-deep: "#F84B4B"
  coral-light: "#FCA5A5"
  notebook-sage: "#A7F3D0"
  warm-linen: "#FBEFE7"
  pale-coral: "#FDF6F0"
  studio-charcoal: "#1C1917"
  studio-slate: "#292524"
  ink: "#292524"
  stone: "#78716C"
  stone-light: "#D6D3D1"
  paper-on-dark: "#F5F0E8"
  mute-on-dark: "#A8A29E"
  border-subtle: "#E7E5E4"
  border-dark: "#44403C"
typography:
  display:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.6rem, 6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.5px"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "2.4rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.5px"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.6rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.3px"
  body:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0.01em"
  subhead:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "2px"
  mono:
    fontFamily: "'JetBrains Mono', 'Courier New', monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  xxl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.paper-on-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "11px 26px"
  button-primary-hover:
    backgroundColor: "{colors.coral-deep}"
    textColor: "{colors.paper-on-dark}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.paper-on-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "11px 26px"
  button-secondary-hover:
    textColor: "{colors.coral-light}"
  big-link:
    backgroundColor: "transparent"
    textColor: "{colors.coral}"
    typography: "{typography.subhead}"
    padding: "0 0 2px 0"
  tag-coral:
    backgroundColor: "rgba(249, 113, 113, 0.12)"
    textColor: "{colors.coral-deep}"
    rounded: "{rounded.full}"
    padding: "4px 13px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.stone}"
    typography: "{typography.label}"
    padding: "8px 12px"
  nav-link-hover:
    textColor: "{colors.coral}"
  eyebrow:
    backgroundColor: "rgba(249, 113, 113, 0.08)"
    textColor: "{colors.coral-light}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 16px"
---

# Design System: Human-Machine Intelligent Systems Lab

## 1. Overview

**Creative North Star: "The Open Studio"**

The HMIS Lab website is an open studio. A research practice with the door propped open: visitors walk through and see what is on the wall, what is on the bench, who is working there. The visual system serves that openness. Warm enough that an undergraduate feels welcomed. Structured enough that the work shows clearly. Restrained enough that the chrome never competes with what is being shown.

The system rejects two opposing failure modes. On one side, the AI-startup aesthetic: neon on black, glassmorphism, gradient text, generic neural-net iconography. The lab works on machine learning; the site cannot look like every ML company's landing page. On the other side, default-Bootstrap-academic: three-column footer, stock-photo hero, card grids of equivalent items. The lab's work is too varied to flatten into uniform tiles.

The going-forward content pattern is **the spread**: a large image on one side, text on the other, with a slight overlap at the seam. Spreads alternate sides down a long page to create rhythm. Storytelling, not cataloging.

**Key Characteristics:**
- A single warm coral as the only true accent, scarce on purpose.
- Stone-and-cream neutrals tinted toward the coral hue. No pure white or black.
- Editorial-flat surfaces. Shadows only as a response to user state.
- Fraunces (variable serif) for display and headlines, Plus Jakarta Sans for body and UI, JetBrains Mono for code.
- Spreads with seam overlap as the primary content pattern; cards are deprecated.
- Restraint is the discipline; warmth is the personality.

## 2. Colors: The Coral and Stone Palette

A small, opinionated palette: a single warm coral as the only true accent, mint as a quiet status-only secondary, and a warm stone-and-cream neutral ramp tinted toward the coral hue.

### Primary

- **Coral** (`#F97171`, `oklch(70% 0.16 22)`): The lab's only true brand color. Used on links, primary buttons, navigation hover, tag tints, and a single moment of color emphasis per spread (an italicized phrase in a hero, a small eyebrow background). Rare on purpose. When it appears, it carries weight.
- **Coral Deep** (`#F84B4B`, `oklch(63% 0.20 22)`): Hover and pressed state for Coral. The same hue, a step darker.
- **Coral Light** (`#FCA5A5`, `oklch(80% 0.10 22)`): For italic emphasis and small accent text on dark surfaces, where Coral itself is too saturated against near-black.

### Secondary

- **Notebook Sage** (`#A7F3D0`, `oklch(90% 0.10 160)`): A quiet, optional accent. The green of a power LED, not a brand color. Reserved for "in-progress" or "live" status moments, and absent from most pages.

### Neutral

- **Warm Linen** (`#FBEFE7`, `oklch(95% 0.020 30)`): The body background. Coral-tinted neutral; reads as warm paper, leaning coral rather than yellow.
- **Pale Coral** (`#FDF6F0`, `oklch(97% 0.012 30)`): Alternating section backgrounds and the header bar. A step lighter than Warm Linen, same coral hue, distinguishing sections through tone alone.
- **Studio Charcoal** (`#1C1917`, `oklch(15% 0.005 60)`): The hero and any dramatic dark surfaces. Warm-stone, never neutral gray.
- **Studio Slate** (`#292524`, `oklch(20% 0.005 60)`): The footer background and the ink color for body text on light surfaces. The same warm hue as Studio Charcoal, one step lighter.
- **Stone** (`#78716C`, `oklch(53% 0.005 60)`): Secondary text, captions, metadata, navigation links at rest.
- **Stone Light** (`#D6D3D1`): Tertiary text, faint dividers, photo credits.
- **Paper on Dark** (`#F5F0E8`, `oklch(94% 0.010 70)`): Body text and headlines on dark surfaces. Warm off-white, tinted toward the brand hue.
- **Mute on Dark** (`#A8A29E`): Secondary text on dark surfaces.

### Borders

- **Border Subtle** (`#E7E5E4`): Default rules and dividers on light surfaces.
- **Border Dark** (`#44403C`): Rules and dividers on dark surfaces.

### Named Rules

**The One Coral Rule.** Coral appears on no more than 10% of any given screen. Its rarity is the point. It is the lab's only loud color, and it earns its visibility by being scarce.

**The No Lavender Rule.** Purple and lavender are forbidden. The category-reflex risk for an ML lab site is "AI startup with purple gradients." This site refuses that family entirely. The previous lavender accent (`#C4B5FD`) and its purple text counterpart (`#6B46E0`) are deprecated; migrate any usage to a Coral-tinted equivalent.

**The Tinted Neutrals Rule.** Every neutral in the system is tinted toward warm-stone (hue ~60°) or coral (hue ~22°). Pure neutrals (`#000`, `#FFF`, `#888`) are forbidden — they read as cold against the warm palette and break the system's identity.

## 3. Typography

**Display Font:** Fraunces, variable, optical sizing 9-144 (with Georgia, "Times New Roman", serif fallbacks).
**Body Font:** Plus Jakarta Sans (with "Helvetica Neue", Arial, sans-serif fallbacks).
**Mono Font:** JetBrains Mono (with "Courier New", monospace fallbacks).

**Character:** Fraunces is a variable serif with strong personality at display sizes (heavy stroke contrast, slightly literary `opsz` handling) and steady credibility at headline sizes. Plus Jakarta Sans is a modern humanist sans that reads warmly without leaning techy. JetBrains Mono is technical without being cold. Together: editorial in the headlines, plain-spoken in the body, technical only where literally technical.

### Hierarchy

- **Display** (Fraunces, 700, `clamp(2.6rem, 6vw, 4rem)`, line-height 1.15, letter-spacing -0.5px): Hero titles only. Italic emphasis on a single phrase per hero is permitted and encouraged.
- **Headline** (Fraunces, 700, 2.4rem, 1.2, -0.5px): Page-level h1.
- **Title** (Fraunces, 600, 1.5-1.9rem, 1.3, -0.3px): Section h2. Spread headings.
- **Body** (Plus Jakarta Sans, 400, 1rem, 1.75, 0.01em): The primary reading role. Capped at 65-75ch.
- **Subhead** (Plus Jakarta Sans, 500, 1rem, 1.5, left): h4, inline emphasis, sidebar items.
- **Label** (Plus Jakarta Sans, 600, 0.72rem, 1.2, 2px letter-spacing, uppercase): Eyebrows, h3 section labels, navigation, tags. The site's primary "small loud" element.
- **Mono** (JetBrains Mono, 400, 0.875rem, 1.5): Code, file paths, technical identifiers.

### Named Rules

**The Italic Coral Rule.** When a phrase in a Display title needs emphasis, set it in italic Fraunces and color it Coral Light (on dark) or Coral (on light). One phrase per page maximum. Italic without color is fine; color without italic is not.

**The Body 65ch Rule.** Body text wraps at 65-75ch. Wider lines fail readers; narrower lines fragment thought. Section containers cap at 800px to enforce this.

**The Uppercase-Label Rule.** Uppercase is reserved for the Label role. Headlines, titles, and body never go uppercase. The 2px letter-spacing on Labels is the visual signature; do not reduce it.

## 4. Elevation

The system is **editorial-flat**. Body content sits on tone, not on shadow. Sections distinguish themselves through alternating background (Warm Linen / Pale Honey), through a 1px Border Subtle where needed, and through generous vertical rhythm. Never through a card-resting shadow.

Shadows appear only as state, not as resting elevation. A focal image in a spread can lift slightly on hover. A portrait photo carries a faint Coral glow ring on hover. Shadows are warm-brown, low-opacity, never blue-gray.

### Shadow Vocabulary

- **Hover Lift** (`box-shadow: 0 4px 8px rgba(41, 37, 36, 0.08), 0 1px 2px rgba(41, 37, 36, 0.04)`): For interactive image surfaces on hover. The same warm-brown `rgba(41, 37, 36, x)` is used throughout — Studio Slate at low opacity.
- **Coral Focus Ring** (`box-shadow: 0 0 0 3px rgba(249, 113, 113, 0.30)`): Keyboard focus indicator for interactive elements. Replaces the browser default outline.
- **Coral Glow** (`box-shadow: 0 0 0 3px rgba(249, 113, 113, 0.15)`): Hover halo for portraits and focal photographs.

### Named Rules

**The Flat-At-Rest Rule.** Surfaces are flat at rest. Shadows appear only as a response to user state — hover, focus, drag. A spread, portrait, or section that carries shadow when nothing is happening is wrong.

**The Warm-Brown Shadow Rule.** All structural shadows use `rgba(41, 37, 36, 0.04-0.10)`, Studio Slate at low opacity. Coral glows use `rgba(249, 113, 113, 0.15-0.30)`. Never `rgb(0, 0, 0)`; never blue-gray.

## 5. Components

### Buttons

- **Shape:** Gentle 8px corner radius (`rounded.sm`). Not pill, not sharp.
- **Primary:** Coral fill, Paper-on-Dark text, Label typography, 11px / 26px padding. On hover: background shifts to Coral Deep with a faint Coral lift shadow and a 1px upward translate.
- **Secondary / Ghost:** Transparent background, 1.5px Paper-on-Dark border at 30% opacity, Paper-on-Dark text. Used only on dark surfaces (typically inside the hero). On hover: border becomes Coral Light, text becomes Coral Light.

### Big Link (text-only CTA)

- **Style:** Plain Coral text, Plus Jakarta Sans semibold, 0.9rem, with a 1.5px transparent bottom border. No background, no padding, no chrome.
- **Hover:** Bottom border becomes Coral. Text shifts to Coral Deep.
- **Use:** Inline secondary actions, "read more" affordances, between-section navigation.

### Tag (pill)

- **Shape:** Pill, `rounded.full`, 4px / 13px padding, Label typography.
- **Style:** Coral-tinted background `rgba(249, 113, 113, 0.12)`, Coral Deep text (`#F84B4B`), 1.5px Coral 40%-opacity border.
- **Hover:** Tint deepens to `rgba(249, 113, 113, 0.22)`, border becomes solid Coral.
- **Migration note:** The current implementation in `css/tags.scss` uses a lavender tint and `#6B46E0` purple text. Per The No Lavender Rule, migrate to the Coral-tinted spec above.

### Portrait

- **Shape:** Circle (`rounded.full`), 150px square (or 100px in mini contexts).
- **Frame:** 2px transparent border at rest. Becomes 2px Coral on hover.
- **Hover:** Image scales 1.05x. Frame becomes Coral. A faint Coral Glow ring is added.
- **Role badge:** A 34px circle (28px in mini) at top-left of the portrait. White or Pale Honey background, Coral Font Awesome icon, 1.5px Border Subtle. Used to label "PI", "Postdoc", "Undergraduate", "Alumnus".

### Spread (the article-style content row)

The signature content pattern. **Replaces card grids** for projects, research, and team highlights.

- **Structure:** Two columns. Image on one side (~55-60% width), text on the other (~40-45%). Image and text **overlap at the seam**: text intrudes into the image column by 60-100px on tablet-and-up widths, creating a deliberate seam-overlap that says "these belong together." The overlap is what the spread *is*.
- **Alternation:** Spreads in a sequence alternate sides. Odd spreads place image left, even spreads place image right. The alternation creates rhythm down a long page.
- **Image:** Generous aspect (4:3 or 3:2). Large enough to be the primary visual element. No outer border, no rounded corners on outer edges. A subtle 12px radius is permitted only on the inner overlapping edge, where the image meets the text.
- **Text column:** Article-style flow. A small Coral eyebrow Label ("PROJECT 03 / 2025"), then a Title in Fraunces, then body paragraphs at body 65ch. May include a Big Link at the end ("Read the paper").
- **Mobile (`<900px`):** Stacks vertically. Image full-width on top, text below, no overlap. Order preserves the alternation as visual variety where appropriate.
- **Hover:** If the image links to a deeper page, the image lifts via Hover Lift on hover. If not, static.

### Navigation Link

- **Style:** Plus Jakarta Sans Label, Stone color at rest.
- **Hover:** Color becomes Coral, 2px Coral bottom border appears (top border on mobile per the existing pattern).
- **Active page:** 2px Coral bottom border with Stone text (the underline says "you are here", color says "click somewhere else").

### Header Bar

- **Background:** Pale Honey, with a 1px Border Subtle on the bottom edge. No shadow.
- **Layout:** Logo + lab name on the left in Fraunces 1.35rem semibold (-0.3px letter-spacing). Navigation links on the right in Plus Jakarta Sans Label.
- **Mobile (`<500px`):** Stacks vertically; logo above nav. Nav links become full-width with a 2px transparent left border that turns Coral on hover.

### Hero

- **Background:** Studio Charcoal with an animated coral dot-grid (radial-gradient at 28px tile, drifting 30s linear) and a radial vignette that darkens edges to Studio Charcoal.
- **Eyebrow:** A pill (Eyebrow component) — Coral 40%-bordered, Coral 8% tint, Coral Light Label text.
- **Title:** Display in Paper-on-Dark, with one italic phrase in Coral Light (per The Italic Coral Rule).
- **Subtitle:** Plus Jakarta Sans Body 1.05rem in Mute-on-Dark, 1.7 line-height, max 560px wide.
- **CTAs:** Primary Button + Secondary Button, side-by-side on tablet+, stacked on mobile.

## 6. Do's and Don'ts

### Do:

- **Do** lead with the Spread pattern: image one side, text the other, slight seam overlap.
- **Do** alternate spread sides for rhythm down long pages.
- **Do** use Coral on no more than 10% of any screen.
- **Do** tint every neutral toward warm-stone (60°) or coral (22°). Use the documented hex values; do not introduce new gray ramps.
- **Do** cap body lines at 65-75ch.
- **Do** use Fraunces italic + Coral for one moment of emphasis per hero.
- **Do** use Notebook Sage only for "in-progress" or "live" status, never as decoration.
- **Do** keep surfaces flat at rest. Reserve shadow for hover and focus state only.
- **Do** treat alt text as content for every research and team photo. Describe the work, not "image of person".
- **Do** distinguish sections through alternating Warm Linen / Pale Honey background and vertical rhythm, not through cards.

### Don't:

- **Don't** use lavender, purple, violet, magenta, or any cool accent. The category-reflex for an ML-lab site is "purple AI"; this site refuses that family. Migrate the current `$secondary: #C4B5FD` and `#6B46E0` tag-text usages to the Coral tag spec.
- **Don't** use card grids as the primary content pattern for projects, research, or team. The lab's work is too varied to flatten into uniform tiles. Use Spreads.
- **Don't** use top-stripe or side-stripe colored borders on cards or list items (the current `card.scss` uses `border-top: 3px solid $primary` on large/medium variants). It is a side-stripe-family pattern banned by the impeccable shared design laws. Migrate cards to Spreads, or remove the stripe.
- **Don't** use gradient text or gradient underlines (the current h1 `::after` uses `linear-gradient($primary, $secondary)`). Use a single solid Coral 3px rule, or nothing.
- **Don't** use neon-on-black, glassmorphism, or generic neural-net hero illustrations. The lab works on ML; the site cannot look like every ML company's landing page.
- **Don't** use `#FFFFFF` or `#000000`. The system has a warm tint; pure neutrals read as cold and break the palette.
- **Don't** introduce "Get started" SaaS-landing CTAs, feature-checkmark grids, social-proof bars, or hero-metric templates (big number + small label + supporting stats). This is a research lab, not a product launch.
- **Don't** use em dashes in copy. Use commas, colons, semicolons, periods, or parentheses. Also not `--`.
- **Don't** add cards as the lazy answer for new content. Default to Spreads, prose flow, or portrait grids; if a card is genuinely the right affordance, justify it in the diff.
- **Don't** animate CSS layout properties (width, height, margin). Use transform and opacity. Ease out with exponential curves (ease-out-quart / quint / expo). No bounce, no elastic.
