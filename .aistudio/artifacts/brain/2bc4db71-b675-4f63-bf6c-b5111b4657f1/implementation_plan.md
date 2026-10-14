# Index Category Link Affordance & Visual Distinctiveness

Make the category items in the homepage Index immediately recognizable as clickable destinations by styling the category titles in the brand's muted terracotta tone (`#C75B4A`) with tactile interactive feedback, resolving the visual ambiguity where links blended into surrounding body copy.

## User Review & Critical Decisions

> [!IMPORTANT]
> The user confirmed the visual indicator style via interactive questions:
> - **Visual Affordance**: Color the category titles in muted terracotta (`#C75B4A` in light mode, `#DE7B6B` in dark mode for optimal contrast) rather than plain inherited body text.
> - **Scope of Application**: Apply to the Homepage Index categories and ensure corresponding navigation back-links remain intuitive and harmonized.
> - **Interactive Hover & Focus**: Retain the terracotta dotted underline and slight opacity shift on hover/focus to provide tactile feedback across both desktop cursor and mobile tap interactions.

---

## 1. Overview & Core Concept

- **What It Does**: Transforms the homepage Index category items (`Written`, `Spoken`, `Story`, `Blog`, `Elsewhere`) from muted black/gray body copy into prominent, distinct clickable anchors rendered in muted terracotta.
- **Target Audience**: Visitors, investors, journalists, healthcare clinicians, and readers exploring Padmini Janaki's digital identity hub.
- **Key Value**: Delivers zero-ambiguity navigation without compromising the site's quiet editorial restraint, no-card discipline, or humanist typography.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Landing on Homepage (`/`)**:
   - The visitor reads the name, one-line identifier, and biographical positioning text.
   - Reaching the `Index` section, the category titles (`Written`, `Spoken`, `Story`, `Blog`, `Elsewhere`) immediately stand out in warm terracotta (`#C75B4A`).
   - The explanatory text following each dash (`— Books, clinical health tech essays...`) remains in muted graphite (`#6E6B66` / `#9A968F`), creating an intuitive hierarchy between destination and description.
2. **Hover / Focus Interaction**:
   - On hover or keyboard focus, category links transition smoothly (`transition-colors duration-150`), deepening or gaining an underline affordance, with cursor: pointer.
3. **Subpage Navigation**:
   - On nested subpages (`/written`, `/spoken`, `/story`, `/blog`, `/blog/:slug`, `/elsewhere`), the top back-link (`← Padmini Janaki` or `← Blog`) clearly indicates its clickable state with consistent styling and focus rings.

### Visual Styling Specifications
- **Light Theme**:
  - Category Link Text: `#C75B4A` (warm terracotta)
  - Hover State: `#A94838` with subtle terracotta underline (`border-b border-[#C75B4A]`)
- **Dark Theme**:
  - Category Link Text: `#DE7B6B` (optically adjusted warm terracotta for WCAG AA 4.5:1 legibility against `#121212`)
  - Hover State: `#F09B8D` with subtle underline
- **Typography & Layout**:
  - Retain `font-medium text-[17px] sm:text-[18px]`
  - Keep the em-dash separator and description on the same typographic line with natural wrapping.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Direct Terracotta Color on Category Anchors**
  - *Chosen Approach*: Apply `text-[#C75B4A] dark:text-[#DE7B6B]` directly to the `<Link>` element while leaving the descriptive clause in muted gray.
  - *Why*: Directly solves user feedback ("index la ulla catogries ellam link nu theriyalaiye") by utilizing the site's single reserved accent color, avoiding generic blue links or bulky button capsules.
  - *Alternatives Considered*: Underline-only or arrow icons (`→`). Terracotta color delivers immediate pre-attentive recognition before the user even moves their cursor.

- **Decision 2: Optical Contrast Adjustment in Dark Mode**
  - *Chosen Approach*: Use `#DE7B6B` in dark mode instead of raw `#C75B4A`.
  - *Why*: `#C75B4A` against `#121212` has lower contrast (~3.8:1); `#DE7B6B` provides clean $>5.5:1$ contrast while preserving the exact warm terracotta hue.

---

## 4. Technical Architecture & Component Mapping

```
┌───────────────────────────────────────────────────────────────┐
│                          App.tsx                              │
│             (Routes: /, /written, /spoken, /story,            │
│               /blog, /blog/:slug, /elsewhere)                 │
└───────────────────────────────┬───────────────────────────────┘
                                │
                                ▼
┌───────────────────────────────────────────────────────────────┐
│                        Home.tsx                               │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Header: "Padmini Janaki", identifier, positioning text  │  │
│  └─────────────────────────────────────────────────────────┘  │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Section: "Index"                                        │  │
│  │                                                         │  │
│  │  • <Link to="/written" className="index-category-link"> │  │
│  │      Written                                            │  │
│  │    </Link> — Books, clinical health tech essays...      │  │
│  │                                                         │  │
│  │  • <Link to="/spoken" className="index-category-link">  │  │
│  │      Spoken                                             │  │
│  │    </Link> — Keynote talks, TEDx, and podcasts...       │  │
│  │                                                         │  │
│  │  • <Link to="/story" className="index-category-link">   │  │
│  │      Story                                              │  │
│  │    </Link> — Mismatched computers, art, PayPal...       │  │
│  │                                                         │  │
│  │  • <Link to="/blog" className="index-category-link">    │  │
│  │      Blog                                               │  │
│  │    </Link> — Essays and field notes on aging...         │  │
│  │                                                         │  │
│  │  • <Link to="/elsewhere" className="index-category-link">│ │
│  │      Elsewhere                                          │  │
│  │    </Link> — Social dispatches, press profiles...       │  │
│  └─────────────────────────────────────────────────────────┘  │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │ Footer: Direct email contact (pj@livfwomen.com)         │  │
│  └─────────────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────────────┘
```

### Component & Style Implementation Steps
1. **Define Dedicated Utility Class in `src/index.css`**:
   - Create `.index-category-link` with `color: #C75B4A`, `border-bottom: 1px dotted transparent`, and smooth transition.
   - Dark mode support: `color: #DE7B6B`.
   - Hover and focus-visible states: underlined with `#C75B4A` / `#DE7B6B` and visible focus outline for accessibility.
2. **Update `src/pages/Home.tsx`**:
   - Apply the class to each category link in the Index list (`Written`, `Spoken`, `Story`, `Blog`, `Elsewhere`).
3. **Verify Visual Cohesion & Build**:
   - Run compilation and lint checks to ensure strict zero-error adherence.
