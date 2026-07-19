# Ustanova Eleonora — Website Redesign

## Overview

A bold, modern single-page storyteller website for Ustanova Eleonora, a Croatian medical transport and home healthcare company. Built with Angular 17+, featuring a homepage that introduces services with "Explore →" buttons linking to dedicated service pages for deep dives.

## Goals

- Present the company's three core services clearly: medical transport, home healthcare, physical therapy
- Make contact information immediately accessible
- Support 4 languages: Croatian, English, Italian, German
- Bold, fun visual style inspired by multitrim.app — big typography, high contrast, personality

## Site Structure

### Routes

| Path | Page |
|------|------|
| `/` | Homepage (hero, service previews, stats, news, contact) |
| `/sanitetski-prijevoz` | Medical Transport (full detail) |
| `/zdravstvena-njega` | Home Healthcare (full detail) |
| `/fizikalna-terapija` | Physical Therapy (full detail) |
| `/novosti` | News listing |
| `/novosti/:slug` | Individual news article |

### Navigation

Sticky header with: logo, 6 nav links, language switcher (HR/EN/IT/DE), mobile hamburger menu.

## Homepage Sections (top to bottom)

1. **Hero** — Full-screen, bold background image, tagline like *"Medical transport across Europe — with heart."*, subtle animation/parallax
2. **Service Previews** — 3 large cards (image + overlay + short blurb + "Explore →" button)
3. **Stats Bar** — Big numerals: 29+ years, 40+ employees, 40+ vehicles, 9000+ patients/year
4. **News Preview** — Latest 3 articles with thumbnails, link to full news page
5. **Contact Block** — All contact info organized by service (transport, healthcare, physio, accounting) + addresses + GDPR note

## Service Pages

Each has: hero image, detailed description with researched content, key features list, photos, prominent contact CTA, back-to-home link.

### Medical Transport
- Founded 1996, operating since 2005
- 40+ vehicles (14 ambulances), 3 new in June 2025
- All EU coverage, 24/7
- Noise/vibration damping, safety sensors, AC in new fleet

### Home Healthcare
- 29 years experience
- Services: blood draws, pressure/sugar checks, bathing, wound dressing
- Covers Poreč, Umag, Rovinj, Buje area
- Prescription or private arrangement

### Physical Therapy
- In-home sessions
- Advanced techniques and equipment
- Mobility improvement, pain relief, post-injury recovery

## Visual Style

- **Colors**: Deep navy/charcoal backgrounds, white text, warm teal accent (#0D9488 or similar)
- **Typography**: Heavy sans-serif headlines (Inter or Plus Jakarta Sans), clean body text
- **Layout**: Alternating light/dark full-width sections
- **Imagery**: Large photos from existing gallery, bold image cards with overlays
- **Tone**: Confident, warm, human — premium healthcare with personality

## Technical Architecture

- **Framework**: Angular 17+ (standalone components)
- **i18n**: `@angular/localize` or `ngx-translate` with JSON files per language
- **Routing**: Lazy-loaded routes for service pages
- **Build**: Static site (no backend)
- **No authentication, no forms initially** — contact info displayed directly

## Component Tree

```
AppComponent
├── HeaderComponent (logo, nav, language switcher)
├── RouterOutlet
│   ├── HomePage
│   │   ├── HeroComponent
│   │   ├── ServiceCardComponent (×3)
│   │   ├── StatsComponent
│   │   ├── NewsPreviewComponent
│   │   └── ContactBlockComponent
│   ├── MedicalTransportPage
│   ├── HomeHealthcarePage
│   ├── PhysicalTherapyPage
│   ├── NewsPage
│   └── ArticlePage
└── FooterComponent
```

## i18n Strategy

- 4 language files: `hr.json`, `en.json`, `it.json`, `de.json`
- Each translation key maps to UI text
- Language switcher updates router locale and persists choice

## Content to Include

- Company history (Eleonora Pilar, founded 1996, transformed 2003)
- Stats: 29+ years, 40+ staff, 40+ vehicles (14 ambulances), 9000+ patients/yr, 800+ transports/yr
- News articles from existing site
- Contact: phone, email, addresses, hours per service
- GDPR notice
- Social links (Facebook, Instagram)

## Future Considerations (post-v1)

- Contact/booking form
- Live chat
- Online quote calculator for transport
