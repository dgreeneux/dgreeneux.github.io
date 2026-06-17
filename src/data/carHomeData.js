// ─── Mobile screens ───────────────────────────────────────────────────────────
// Replace `src: null` with your image imports once you have the files:
//   import mob1 from '../assets/car-home/mobile-1.png'
//   then set  src: mob1

export const mobileScreens = [
  {
    id: 'mob-1',
    src: null,
    alt: 'Step 1 – Car and drivers: enter registration plate',
    label: 'Enter reg',
  },
  {
    id: 'mob-2',
    src: null,
    alt: 'Step 2 – About you: personal details',
    label: 'About you',
  },
  {
    id: 'mob-3',
    src: null,
    alt: 'Step 3 – Driving history',
    label: 'Driving history',
  },
  {
    id: 'mob-4',
    src: null,
    alt: 'Step 4 – Your car details (auto-populated)',
    label: 'Car details',
  },
]

// ─── Mobile hotspot annotations ───────────────────────────────────────────────
// x / y are percentage positions within each screen image.

export const mobileHotspots = [
  {
    screenIndex: 0,
    x: '50%',
    y: '52%',
    label: 'Smart reg lookup',
    tooltip:
      'One reg plate replaces 12 manual inputs via DVLA API — the single biggest drop-off reduction in the flow.',
  },
  {
    screenIndex: 1,
    x: '50%',
    y: '42%',
    label: 'Progressive disclosure',
    tooltip:
      'Related questions are grouped and revealed in sequence, reducing perceived form length by ~60%.',
  },
  {
    screenIndex: 2,
    x: '50%',
    y: '36%',
    label: 'Conditional branching',
    tooltip:
      'Answers dynamically filter later questions — users with a clean licence skip 4 steps entirely.',
  },
  {
    screenIndex: 3,
    x: '50%',
    y: '30%',
    label: 'Auto-populated details',
    tooltip:
      'Vehicle make, model and year are shown for confirmation only — no manual entry required.',
  },
]

// ─── Desktop screens ──────────────────────────────────────────────────────────

export const desktopScreens = [
  { id: 'desk-1', src: null, alt: 'Desktop – Quote overview' },
  { id: 'desk-2', src: null, alt: 'Desktop – Cover selection' },
  { id: 'desk-3', src: null, alt: 'Desktop – Quote adjustments' },
  { id: 'desk-4', src: null, alt: 'Desktop – Policy details' },
  { id: 'desk-5', src: null, alt: 'Desktop – About you (final step)' },
]

// ─── Desktop sticky annotations ───────────────────────────────────────────────
// One entry per desktop screen — shown in the sticky left panel.

export const desktopAnnotations = [
  {
    step: '01',
    heading: 'A clear starting point',
    body: 'The quote summary is the anchor of the desktop experience. Users see the full price upfront — before committing to any personal details — building trust from the first screen.',
  },
  {
    step: '02',
    heading: 'Cover that adapts in real time',
    body: 'Selecting or deselecting add-ons instantly updates the quoted price. No "recalculate" step — the system responds to every choice as it is made.',
  },
  {
    step: '03',
    heading: 'Transparent price breakdowns',
    body: 'Each line item in the quote is labelled and expandable. Users can see exactly what they are paying for, reducing call centre contacts about unexpected charges.',
  },
  {
    step: '04',
    heading: 'Policy details at a glance',
    body: 'Key policy terms are surfaced inline rather than buried in PDFs. Excess levels, renewal conditions and exclusions are plain-English and scannable.',
  },
  {
    step: '05',
    heading: 'A smooth path to purchase',
    body: 'The final step is kept deliberately brief — most fields are pre-filled from earlier in the journey, leaving only payment method and confirmation.',
  },
]
