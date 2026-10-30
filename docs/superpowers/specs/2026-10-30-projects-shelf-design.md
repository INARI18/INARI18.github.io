# Projects section: game shelf

Date: 2026-10-30. Status: approved in conversation, awaiting written review.

## Goal

Replace the fanned card deck in the Projects section with a shelf of game boxes
standing spine-out, like a real game shelf. Every project is readable at a
glance (title, year, category on the spine) without clicking. Hover turns the
box to show its cover; clicking opens it: cover on the left, details on the right.

Keeps the pixel-art / retro-game identity. No WebGL, no new dependencies.

## Out of scope

Named palettes, interactive mug, live GitHub stats, sound. Shuffle and the fan
layout are removed, not preserved as easter eggs.

## Data model

`src/types/index.ts`:

```ts
export type ProjectCategory = 'research' | 'app' | 'web';
export type ProjectLinkKind = 'code' | 'demo' | 'apk' | 'paper';
export type ProjectLink = { kind: ProjectLinkKind; href: string };

export type Project = {
  title: string;
  desc: Bilingual;
  tags: string[];
  year: string;
  category: ProjectCategory;
  cover: string;          // image shown in the cover window
  links: ProjectLink[];   // at least one
  result?: Bilingual;     // one-line outcome, shown only when present
  gallery?: string[];     // extra screenshots, shown only when present
};
```

`emoji` and `repo` are removed. Order in `src/data/projects.ts` is the display order.

Initial data (year and category are best guesses, to be confirmed by Bia):

| Project | Year | Category | Links | Result |
|---|---|---|---|---|
| MulitaMiner | 2025 | research | code, paper (SBSeg 2026) | 2nd Best Paper WRSEG 2025 |
| AnonLFI 2.0 | 2025 | research | code, paper (SBRC 2026) | Best Artifact SBRC 2026 |
| Learn From Incidents | 2025 | web | demo | none |
| SAVE Egress@s | 2024 | web | demo | Registered software at INPI |
| My Daily Pet | 2026 | app | code, apk (latest release) | APK v1.1.0 published |

## Components

```
Projects/Projects.tsx          section header + shelf grid + modal state
GameBox/GameBox.tsx            closed box (button), cover template
GameBoxModal/GameBoxModal.tsx  open box, <dialog>
```

`ProjectCard` is deleted.

### Projects

State: `openIdx: number | null`. Renders `projects.map` into the shelf grid and one
`GameBoxModal` with `project`, `onClose`, `onPrev`, `onNext`. No other state.

### Shelf (CSS in Projects.module.css)

- Flex row, `flex-wrap: wrap`, centered, 4px between boxes. Boxes have fixed
  height (300 desktop, 205 mobile) so every row has the same height. The shelf
  board is a `repeating-linear-gradient` on the background with period = row
  height + row gap, drawing a board band at the bottom of each row.
- Sizes as CSS vars on the shelf: `--spine-w` (52 / 38), `--box-w` (220 / 150),
  `--box-h` (300 / 205).

### GameBox (closed, spine out)

A `<button type="button">` with `aria-label="Open <title>"`, width = spine.
Inside, a 3D body (`transform-style: preserve-3d`) with two faces:

- Spine: on the z=0 plane, `writing-mode: vertical-rl`, year at the top, title
  (Press Start 2P) in the middle, category at the bottom. Background shade per
  category (research / app / web).
- Cover face: the template cover (title band, screenshot window, year and
  category badge), hinged on the spine's right edge and rotated 90deg into the
  shelf, so it is edge-on at rest.
- Hover / focus-visible: the button widens to spine + cover and the body turns
  `rotateY(-78deg)` around the hinge, bringing the cover to the front with the
  spine visible as a sliver. Transition 350ms; none under `prefers-reduced-motion`.
- `@media (hover: none)`: no turn, tap opens the modal directly.

### GameBoxModal (open)

Native `<dialog>` opened with `showModal()` in an effect when `project` is set.
Esc and backdrop click close it (`cancel` and click-on-backdrop handlers).
ArrowLeft / ArrowRight call `onPrev` / `onNext`; they wrap around.

Layout (desktop): two columns, 40 / 60.

- Left: the same cover template as the closed box, larger (280 x 380), static.
- Right: title, `year · category`, description, result line (if any), tags,
  link buttons (one per entry in `links`, labelled by kind), gallery row
  (if any) of thumbnails that open the image in a new tab.
- Footer: prev / next buttons and `n / total`.

Opening animation: the left cover rotates from `rotateY(-30deg)` to `0` over
300ms with `perspective: 1200px` on its wrapper. Disabled under
`prefers-reduced-motion`.

Mobile (<= 768px): the dialog fills the viewport, single column, cover on top
(reduced to 160px wide), content scrolls.

## i18n

Remove `projects.hint`, `projects.shuffle`, `projects.shuffleAria`, `projects.code`.
Add:

- `projects.open(name)`, `projects.close`, `projects.prev`, `projects.next`
- `projects.category: { research, app, web }`
- `projects.link: { code, demo, apk, paper }`
- `projects.result` (label for the result line)

Both `en` and `pt` dictionaries updated; `Dict` type updated accordingly.

## Assets

- `src/assets/projects/pet/` gets `today.png` (cover) and `pets.png`, `pet.png`,
  `weight.png` (gallery) from the My Daily Pet repo `.github/screenshots`.
  Old `pet.jpg` is deleted.
- The Portfolio entry and `portfolio.jpg` are removed: the site itself is not
  listed as a project.
- The other four covers keep their current files.

## My Daily Pet content

- code: `https://github.com/INARI18/My-Daily-Pet` (current link is a 404)
- apk: `https://github.com/INARI18/My-Daily-Pet/releases/latest`
- desc en: "Mobile app to plan and track pets' daily care: baths, walks,
  medication, vaccines and meals, with reminders, weight history and
  veterinary news from PubMed. English and Portuguese, light and dark mode."
- desc pt: equivalent.
- tags: Expo, React Native, TypeScript, Expo Router, Firebase

## Accessibility

- Boxes are buttons, reachable by Tab, opened by Enter / Space.
- Dialog traps focus natively; focus returns to the opening box on close.
- All motion gated by `prefers-reduced-motion`.
- Cover images have `alt=""` (title is already text); gallery images have
  `alt="<title> screenshot n"`.

## Verification

1. `npm run build` passes (includes `tsc --noEmit`).
2. Headless Edge screenshots at 1440 x 900 and 390 x 844: shelf, open modal,
   modal after ArrowRight, modal on mobile.
3. Manual check in screenshots: every title readable on the shelf, no clipped
   tags or links in the modal, shelf boards aligned under each row.
4. Before / after screenshots shown to Bia.

## Addendum (2026-10-30): final decisions

- Two views (shelf and RPG inventory) were built and compared; the inventory
  was removed. The shelf is the final version.
- Shelf: spines in a row, the selected box is turned front at rest; hover
  previews another box; click opens the modal. Boxes 280 x 380, spine 64px.
- Cover: plastic-case look (gradient, translucent rose border, inner
  highlight, spine strip), title in Outfit, category badge, 16:10 screenshot
  window with a soft rose tint, description, pill tags, year label.
- Modal: the opened case. Front = cover, hinge with the title, back cover with
  gallery strip (if any), description, result, tags, links and a bottom bar
  (barcode, year, category, prev / counter / next). Fixed 1000 x 680 on
  desktop; full-screen stacked sheet on phones.
- `PixelIcon` holds the 8x8 category icons and the trophy.
