// Single source of truth for everything on the site.
// Update your CV here — no component edits needed.

export const profile = {
  name: 'Aung Kaung Sett',
  shortName: 'AKS',
  role: 'Full stack developer',
  location: 'Yangon, Myanmar',

  // Used by both the hero and the splash screen. Drop a new file in
  // /public and change this one line to swap the photo everywhere.
  photo: '/websitepf.jpg',
  // Head-and-shoulders crop out of the full standing shot. photoZoom
  // scales the image up past the frame; photoPosition then slides it so
  // the face lands in the window. Raise the zoom to crop tighter; raise
  // the first position number to move right, the second to move down.
  photoZoom: '440%',
  photoPosition: '60% 10%',

  // The one line under your name. Keep it concrete — what you build, not
  // how passionate you are about it.
  lede: 'I build complete web applications — the interface, the API, and the data underneath.',

  // Two or three short paragraphs. Plain sentences, no emoji, no buzzwords.
  about: [
    'I work in JavaScript across the whole stack — React and TanStack on the front, Node and Express behind it, with MongoDB or Postgres and Sequelize underneath. Lately that has extended into mobile as well.',
    'I started with Java and Spring in 2022 through ITPEC before moving into the JS ecosystem. That backend background still shapes how I design APIs today.',
  ],

  // Served straight from /public — no Google Drive interstitial.
  resume: '/AKS.pdf',
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Kaungsett45' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aung-kaung-sett-4244b721a/',
  },
  { label: 'Email', href: 'mailto:rrocket438@gmail.com' },
]

export const contact = {
  email: 'rrocket438@gmail.com',
  phone: '+95 9663174880',
  extra: [
    { label: 'Instagram', href: 'https://www.instagram.com/rezzwxx' },
    { label: 'X', href: 'https://x.com/kau72149604' },
  ],
}

// Rendered in this order. `to: null` renders as "Present".
export const experience = [
  {
    org: 'Property Seeker Myanmar',
    role: 'Full Stack Engineer',
    logo: '/psm.jpeg',
    // Square lockup with the wordmark stacked inside it — needs the height.
    logoHeight: '4.25rem',
    from: 'Jun 2026',
    to: null,
    points: [
      'Build and maintain both the mobile and the web application.',
      'Ship feature updates and ongoing maintenance across both platforms.',
      'Handle deployment to the server and keep the running services healthy.',
    ],
  },
  {
    org: 'Galaxy Wave',
    role: 'Software Engineer Intern',
    logo: '/gw.jpg',
    logoHeight: '2.25rem',
    from: 'May 2026',
    to: 'Aug 2026',
    points: [
      'Build projects across the stack alongside the engineering team.',
      'Work in video streaming: FFmpeg for transcoding and processing, MediaMTX for stream routing and delivery.',
      'Developing domain knowledge in streaming media pipelines and real-time delivery.',
    ],
  },
  {
    org: 'Code Mal',
    role: 'Content Writer',
    logo: '/codemal.svg',
    logoHeight: '2.5rem',
    from: 'Jan 2024',
    to: 'Jun 2025',
    points: [
      'Wrote technical guides and documentation for a developer audience.',
      'Contributed copy and UI design for nonprofit client websites.',
    ],
  },
]

// Not rendered right now — the Education section was removed from the
// homepage. Kept here so it can be restored without retyping.
export const education = [
  { org: 'Udemy', detail: 'Figma UI/UX: Zero to Hero', year: '2024' },
  {
    org: 'MCPA',
    detail: 'Fundamental IT Engineer Examination (FE)',
    year: '2022',
  },
  { org: 'MCPA', detail: 'IT Passport Examination (IP)', year: '2022' },
  {
    org: 'Princeton',
    detail: 'English Language Proficiency, summer program',
    year: '2019',
  },
  { org: 'YMW Solutions', detail: 'Digital Information Literacy', year: '2019' },
]

// Drives the scrolling logo marquee. Files live in /public.
export const techIcons = [
  { name: 'HTML', src: '/html.svg' },
  { name: 'CSS', src: '/css.svg' },
  { name: 'JavaScript', src: '/js.svg' },
  { name: 'React', src: '/react.svg' },
  { name: 'Tailwind CSS', src: '/tailwind.svg' },
  { name: 'Java', src: '/java.svg' },
  { name: 'Spring', src: '/spring.svg' },
  { name: 'Node.js', src: '/node.svg' },
  { name: 'Firebase', src: '/firebase.svg' },
  { name: 'Figma', src: '/figma.svg' },
  { name: 'Git', src: '/git.svg' },
]

export const skills = [
  {
    group: 'Frontend',
    items: [
      'React',
      'TanStack',
      'JavaScript',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
  },
  {
    group: 'Backend & data',
    items: [
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Sequelize',
      'Java',
      'Spring',
      'Firebase',
    ],
  },
  {
    group: 'Media & tooling',
    items: ['FFmpeg', 'MediaMTX', 'Git', 'Figma', 'Vite'],
  },
]

// Most recent first.
//
// `architecture` drives the stack diagram: one entry per tier, rendered
// top to bottom. Two tiers or four both work — the diagram follows the
// data. TODO: these are inferred from each project's stack; correct any
// that are wrong.
export const projects = [
  {
    title: 'Univision',
    year: '2026',
    description:
      'An enterprise surveillance platform built during my internship — live camera feeds, recording playback with clip export, roles, and audit logging across locations.',
    stack: ['React', 'TanStack Router', 'Node', 'Express', 'MediaMTX'],
    image: '/univisionmockup.svg',
    architecture: [
      { tier: 'Client', items: ['React', 'TanStack Router'] },
      { tier: 'Service', items: ['Node/Express API', 'MediaMTX streaming'] },
      { tier: 'Data', items: ['Recordings', 'Roles & audit logs'] },
    ],
  },
  {
    title: 'Rublet',
    year: '2024',
    description:
      'A movie streaming platform with full-text search and filtering across the catalogue.',
    stack: ['Java', 'Spring', 'CSS'],
    image: '/moviemockup.svg',
    architecture: [
      { tier: 'Client', items: ['HTML', 'CSS'] },
      { tier: 'Service', items: ['Spring MVC', 'Search & filtering'] },
      { tier: 'Data', items: ['JPA', 'Film catalogue'] },
    ],
    code: 'https://github.com/Kaungsett45/Rublet',
    demo: 'https://drive.google.com/file/d/1kMMMkJqDOxg3yYGkUObZooxXWka_r863/view?usp=sharing',
  },
  {
    title: 'Quizzi',
    year: '2024',
    description:
      'An interactive quiz system with question banks and real-time scoring.',
    stack: ['Java', 'Spring', 'CSS'],
    image: '/quizzimockup.svg',
    architecture: [
      { tier: 'Client', items: ['HTML', 'CSS'] },
      { tier: 'Service', items: ['Spring MVC', 'Scoring engine'] },
      { tier: 'Data', items: ['JPA', 'Question bank'] },
    ],
    code: 'https://github.com/Kaungsett45/QuzziSystem',
    demo: 'https://drive.google.com/file/d/1dS7NgOjawJAhvOGwJJ8wSl1UwvjRwLtT/view?usp=sharing',
  },
  {
    title: 'Quote Generator',
    year: '2024',
    description:
      'A quote generator with shareable cards, built on React and Firebase.',
    stack: ['React', 'Tailwind CSS', 'Firebase'],
    image: '/quotemockup.svg',
    architecture: [
      { tier: 'Client', items: ['React', 'Tailwind CSS'] },
      { tier: 'Service', items: ['Firebase SDK', 'Card generator'] },
      { tier: 'Data', items: ['Firestore'] },
    ],
    code: 'https://github.com/Kaungsett45/quotegenerator',
    demo: 'https://drive.google.com/file/d/1XK7gtD-9WAjZroafdMeEF7cW7B5udbIh/view?usp=sharing',
  },
]

// The "How I build" trace — one real request walked through every layer
// you own. Add or remove stages here and the animation adapts.
export const buildFlow = {
  intro: 'One search request in Rublet, followed the whole way down.',
  stages: [
    {
      layer: 'Client',
      tech: 'React',
      title: 'A query gets typed',
      detail:
        'Input is debounced so a four-letter search costs one request, not four.',
      code: 'GET /api/movies?q=blade',
    },
    {
      layer: 'API',
      tech: 'Spring',
      title: 'The controller validates and delegates',
      detail:
        'Parameters are checked at the edge, so everything past this point can trust its input.',
      code: '@GetMapping("/api/movies")',
    },
    {
      layer: 'Data',
      tech: 'Spring Data',
      title: 'Full-text search across the catalogue',
      detail:
        'Title and description are indexed, and results come back paged rather than all at once.',
      code: 'WHERE MATCH(title, description)',
    },
    {
      layer: 'Client',
      tech: 'React',
      title: 'Results render',
      detail:
        'Keyed rows and a memoised list, with space reserved while loading so nothing jumps.',
      code: '24 results · 90ms',
    },
  ],
}

// Drives the header nav. `id` must match the section's DOM id.
export const sections = [
  { id: 'about', label: 'Intro' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
