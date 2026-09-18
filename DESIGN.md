# Design

## The world: a working record

The site is built like a dated engineering log. Its argument is that Griffin checks
his own work, so the design makes evidence and correction legible: claims sit beside
the artifact that proves them, figures sit beside their sources, and a correction is
typeset as a first-class object rather than hidden.

This replaced a dark violet/mint/pink gradient theme that read as generic AI output.
That look is anti-reference, not authority.

## Palette

Ledger paper — the pale green-bar stock of an accounting or computer-form record.
Deliberately **not** warm cream, which is the reflex "tasteful AI" surface.

| Token | Value | Use |
|---|---|---|
| `--paper` | `#EFF2EC` | Page ground |
| `--paper-2` | `#E6EAE2` | Insets: framed plates, the about card |
| `--paper-3` | `#DCE1D7` | Reserved, deepest inset |
| `--ink` | `#15170F` | Primary text (16.0:1) |
| `--ink-2` | `#454A3E` | Body and secondary prose (8.1:1) |
| `--ink-3` | `#666B5D` | Labels, captions, control borders (4.9:1) |
| `--rule` | `#D2D8CA` | Hairline dividers |
| `--rule-firm` | `#AEB6A4` | Emphasised hairlines, scrollbar thumb |
| `--mark` | `#A02F12` | **The only accent.** The correction mark (6.4:1) |

`--mark` is a red pen on a record. It marks corrections, the active nav underline,
the italic accent in the hero, and location lines. It is never decorative fill.

## Type

- **Newsreader** — display and headings. Editorial serif with optical sizing.
- **Public Sans** — body and UI. Workmanlike grotesque; suits a record.
- **IBM Plex Mono** — labels, figures, sources, captions. Data and measurement only,
  never as a costume for "technical."

Avoid Inter, Instrument Sans/Serif, Geist, Fraunces, Plus Jakarta Sans, Space Grotesk
and Mona Sans: all are on the overused-font list and read as the AI default wave.

Micro-labels never go below `0.72rem` (11.5px). Long strings are never uppercased —
uppercase is for short labels only. Tabular numerals everywhere figures appear.

## Composition

- **Hairlines, not cards.** Sections and rows are separated by 1px rules. A heavier
  `--ink` rule opens a group; `--rule` separates items within it.
- **Deliberate scale mismatch.** The lead work entry is set several times larger than
  the two below it. Uniform card grids are banned — they were the old look's failure.
- **Claim / proof pairs.** The method section alternates a serif claim against a prose
  proof with a mono receipt line. Never a claim without its evidence.
- **Framed plates.** Screenshots sit in a `--paper-2` box with a hairline and a mono
  caption; constrained by height so a tall phone shot can't dominate a column.
- **Tables are tables.** The ledger is a real `<table>` with figure, meaning, source.

## Motion

Exactly one authored moment: in the hero's correction block, the wrong value strikes
through and the measured value settles in, once, on load. Everything else is a state
transition under 220ms. No scroll-reveal on every section. `prefers-reduced-motion`
disables the animation and collapses transitions.

## Browser surfaces

Selection, focus ring, scrollbar, link underline offset and tabular numerals are all
themed from the palette rather than left at browser defaults.

## Status

Applied to `index.html` via `record.css`. The three case studies
(`projects/next4.html`, `hirely.html`, `copilot.html`) still run the old `styles.css`
and are pending rollout.
