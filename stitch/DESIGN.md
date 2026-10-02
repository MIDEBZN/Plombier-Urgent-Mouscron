---
name: ApexFlow Plumbing Authority System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d1daf4'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8ff'
  surface-container-highest: '#d9e2fc'
  on-surface: '#121b2e'
  on-surface-variant: '#42474b'
  inverse-surface: '#273044'
  inverse-on-surface: '#edf0ff'
  outline: '#73787c'
  outline-variant: '#c3c7cb'
  surface-tint: '#4c616e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#061e29'
  on-primary-container: '#718795'
  inverse-primary: '#b3cad9'
  secondary: '#ae2a00'
  on-secondary: '#ffffff'
  secondary-container: '#da3700'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#191c1e'
  on-tertiary-container: '#818487'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfe6f5'
  primary-fixed-dim: '#b3cad9'
  on-primary-fixed: '#061e29'
  on-primary-fixed-variant: '#344956'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb4a1'
  on-secondary-fixed: '#3c0800'
  on-secondary-fixed-variant: '#881f00'
  tertiary-fixed: '#e0e3e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#44474a'
  background: '#f9f9ff'
  on-background: '#121b2e'
  surface-variant: '#d9e2fc'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets residential and commercial property owners facing urgent plumbing failures, planned remodels, or seeking verified local mechanical contractors. The design style combines modern high-trust service architecture with aggressive, conversion-optimized utility. It balances the institutional reliability of deep industrial navy with the immediate, visceral urgency of safety-signal flame red. 

The aesthetic is crisp, structured, and pragmatic—eschewing frivolous decorative gradients or floating glassmorphism in favor of high-contrast tactile readability, clear actionable pathways, and reassuring density. Every viewport prioritizes immediate friction reduction: telephone dispatch availability, credential verification, transparent upfront quotes, and 24/7 service confirmation.

## Colors

The palette establishes an immediate hierarchy of trust versus direct action:

- **Primary Navy (`#001621`)**: Anchors visual authority across headers, dark hero overlays, service banners, deep structural footers, and authoritative badge containers.
- **Conversion Red Accent (`#FF4304`)**: Reserved strictly for high-yield interactive targets: Emergency Call CTAs, "Book Plumber Now" triggers, immediate status beacons, and active form validation points. It must never be diluted by decorative background overuse.
- **Surface & Background Neutral (`#F5F7FA`)**: The global page canvas, establishing clean separation against bright white elevated cards (`#FFFFFF`).
- **Base Text Neutral (`#172033`)**: High-contrast body tone for maximum legibility under outdoor, mobile, or glare environments.
- **Muted Text Neutral (`#5E6878`)**: Secondary descriptor, metadata, and form placeholder tone.
- **Structural Border Neutral (`#E4E9F0`)**: Low-contrast architectural line work separating content blocks, schedule selectors, and form components.

## Typography

Plus Jakarta Sans provides high clarity, mechanical stability, and welcoming geometry. Numbers and phone digits benefit from clear, open apertures—vital when customers are reading direct hotline numbers in panic situations.

Headlines leverage heavy weights (`700` and `800`) with tight letter spacing for an authoritative, commercial-grade presence. Body sizes sit at a minimum of `16px` (`body-md`) for universal legibility across moving vehicles, basements, or hurried handheld interactions. Labels and operational badges employ bold weights with subtle positive tracking to distinguish operational status (e.g., "DISPATCHED", "ONLINE NOW", "LICENSED & INSURED") from informational body copy.

## Layout & Spacing

The layout is built around a responsive 12-column grid system restricted to a maximum container width of `1240px` for desktop viewports. This prevents horizontal dispersion of critical form funnels and keeps booking conversion boxes locked within comfortable scan tracks.

- **Desktop (1024px and up)**: 12 columns with `1.5rem` gutters and `2rem` outer margins. Content utilizes asymmetric splits (e.g., 7 columns for service trust proof, 5 columns for persistent conversion capture forms).
- **Tablet (768px – 1023px)**: 8 columns with `1.25rem` gutters and `1.5rem` margins. Complex tables and split panels collapse to stacked 8-column blocks.
- **Mobile (< 768px)**: 4 columns with `1rem` gutters and `1rem` margins. The layout locks the critical Call-to-Action to a fixed viewport bottom bar (`54px` tap target).

Vertical layout cadence follows an 8-point system. Critical transaction clusters maintain tight, related grouping (`space-xs` to `space-md`), while section transitions rely on `space-xl` to enforce clear topical progression.

## Elevation & Depth

Visual hierarchy uses functional, low-diffusion ambient shadows tinted with the primary navy hue (`#001621`) rather than lifeless pure black, preserving physical realism and cleanliness.

- **Level 0 (Flat Surface)**: Used for general canvas backgrounds (`#F5F7FA`) and inline text regions.
- **Level 1 (Card & Content Blocks)**: White surfaces (`#FFFFFF`) framed with a `1px` border of `#E4E9F0` combined with a soft, settling shadow: `0 2px 4px rgba(0, 22, 33, 0.04)`.
- **Level 2 (Interactive Floating Modules / Hover States)**: Diagnostic cards, pricing packages, and active selector steps elevate using `0 8px 24px rgba(0, 22, 33, 0.08)` and border highlight `#E4E9F0`.
- **Level 3 (Emergency Conversion Sticky Bars & Overlays)**: High-priority phone dispatch drawers and emergency banners leverage `0 12px 36px rgba(0, 22, 33, 0.16)` to guarantee complete isolation above the content layer.

## Shapes

The design system maintains a consistent roundedness tier of `2` (`0.5rem` / `8px` base radius), delivering a contemporary, clean aesthetic that stays structurally dependable rather than overly playful.

- **Interactive Inputs and Buttons**: Strictly `8px` corner radius. This delivers an ergonomic tap target that naturally frames text while preserving industrial crispness.
- **Service Cards & Container Enclosures**: Default to `rounded-lg` (`1rem` / `16px`) to cleanly segment service categories and review aggregates.
- **Verification Pills & Operational Badges**: Utilize full-pill geometry (`9999px`) to immediately set status tokens apart from structural cards and buttons.

## Components

### Buttons
- **Primary Conversion CTA**: Height: `52px` (mobile: `54px`). Background: `#FF4304`, text: `#FFFFFF`. Font: `label-lg` (Semi-bold). Radius: `8px`. Box-shadow: `0 4px 14px rgba(255, 67, 4, 0.35)`. Hover: `#E03800`.
- **Emergency Call Button**: Height: `54px`. Background: `#001621` or `#FF4304`. Features a leading dynamic phone icon with a subtle pulsing radar dot.
- **Secondary / Outline Button**: Height: `48px`–`52px`. Surface transparent, `1.5px` border in `#001621`, text `#001621`. Radius: `8px`. Hover: Background `#001621`, text `#FFFFFF`.

### Form Fields & Inputs
- **Text & Select Inputs**: Fixed height `52px`. Background: `#FFFFFF`. Border: `1px solid #E4E9F0`. Radius: `8px`. Padding: `0 1rem`. Typography: `body-md`. Placeholder color: `#5E6878`. Focus state: `1.5px solid #001621` with `0 0 0 3px rgba(0, 22, 33, 0.08)`. Error state: `1.5px solid #FF4304`.
- **Primary Telephone Field**: Dedicated high-contrast input featuring pre-set country flags, automatic formatting mask, and an integrated instant-dispatch guarantee badge right below the input line.

### Cards & Service Tiles
- **Standard Service Card**: Background: `#FFFFFF`, border: `1px solid #E4E9F0`, radius: `16px`, padding: `1.5rem`. Contains category icon enclosed in a soft navy tint box (`rgba(0, 22, 33, 0.04)`), an emergency-ready chip if applicable, clear typography, and a distinct arrow link.
- **Pricing / Transparent Scope Card**: Border highlighted on recommended options with a `2px solid #FF4304` top accent stripe and integrated feature checklist.

### Trust Badges & Social Proof
- **Review Aggregate Chip**: White container, `8px` rounded, featuring Google G-icon, 5 filled stars in `#FFB800`, numerical rating (`4.9/5.0`), and total review volume (`1,250+ Verified Reviews`).
- **License & Guarantee Seal**: Pill or soft rectangle, background `#001621`, text `#FFFFFF`, displaying shield checkmark, "Master Plumber License #Verified", and "100% Satisfaction Guarantee".
- **Dispatch Status Beacon**: Small green glowing indicator (`#10B981`) paired with `label-sm` ("3 Crews Available in [City] Today").

### Lists, Checkboxes & Radios
- **Value Checklists**: Custom check marks with `#FF4304` or `#001621` circular backgrounds framing clean white checks; never default browser markers.
- **Radio Selection Blocks**: Full-width interactive tiles (`56px` height) with radio indicators, custom pricing labels, and automatic primary boundary highlight upon selection.