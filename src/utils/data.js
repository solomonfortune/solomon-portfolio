export const profile = {
  name: 'Buwule Solomon Fortune',
  handle: 'solomonbuwule',
  role: 'Open Source Evangelist · Frontend Developer · Backend Enthusiast · Aspiring Full-Stack Engineer',
  location: 'Kampala, Uganda',
  email: 'solomonbuwule@gmail.com',
  github: 'https://github.com/solomonfortune',
  linkedin: 'https://www.linkedin.com/in/solomon-buwule-b139a4320',
  medium: 'https://medium.com/@solomonbuwule',
  mediumHandle: '@solomonbuwule',
};

export const bio = `I'm a frontend developer and open-source contributor based in Kampala, coding since 2023 and currently pursuing a BSc in Computer Science at Mbarara University. Most of my work happens inside the OpenMRS ecosystem, an open-source medical record platform used across the developing world, where I build interfaces and fix bugs that ship to real clinics. I care about software that solves real problems, and I'm working toward becoming a full-stack engineer who can take a product from idea to production.`;

export const stats = [
  { label: 'Coding since', value: '2023' },
  { label: 'OpenMRS role', value: 'Volunteer Dev' },
  { label: 'Based in', value: 'Kampala, UG' },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Bootstrap', 'REST APIs'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Python', 'Django', 'Java', 'Spring Boot', 'PHP'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase', 'Supabase'],
  },
  {
    title: 'Authentication',
    items: ['JWT', 'OAuth', 'Firebase Auth'],
  },
  {
    title: 'Data Science',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter', 'Scikit-Learn', 'SQL'],
  },
  {
    title: 'Languages',
    items: ['JavaScript', 'Python', 'Java', 'C', 'SQL', 'Bash', 'TypeScript', 'PHP'],
  },
  {
    title: 'Tools',
    items: ['Docker', 'Docker Compose', 'GitHub Pages', 'Firebase Hosting', 'Postman'],
  },
];

export const education = {
  degree: 'BSc in Computer Science',
  school: 'Mbarara University',
  period: '2023 — 2026',
};

export const experience = [
  {
    org: 'OpenMRS Inc.',
    role: 'Volunteer Developer',
    period: 'Ongoing',
    tag: 'Open Source',
    description:
      'Frontend and backend contributions across the OpenMRS ecosystem — an open-source medical record platform used in clinics across the developing world. Work spans the O3 microfrontend suite and openmrs-core, from UI bugs and new features to CI fixes and REST endpoints.',
    highlights: [
      'Shipped features and fixes across openmrs-esm-core, openmrs-esm-patient-chart, openmrs-esm-patient-management and openmrs-core',
      'Resolved CI failures, flaky tests, and SonarCloud complexity issues alongside feature work',
      'Collaborated with maintainers through code review on real production healthcare software',
    ],
  },
  {
    org: 'Uganda Civil Aviation Authority',
    role: 'IT Support Intern',
    period: 'June 2025 — July 2025',
    tag: 'Internship',
    description:
      'Provided IT support and troubleshooting for internal systems, including network issues, software installations, and hardware maintenance. Assisted in the implementation of new IT policies and procedures.',
    highlights: [],
  },
];

export const projects = [
  {
    name: 'OpenMRS O3 Contributions',
    description:
      'Ongoing frontend and backend work across the OpenMRS O3 microfrontend ecosystem — patient charts, patient search, core authentication flows, and REST services.',
    tags: ['React', 'TypeScript', 'Carbon Design', 'REST'],
    link: 'https://github.com/openmrs',
  },
  {
    name: 'More building in progress',
    description:
      "New projects are underway. This space will grow as they ship — check back, or follow along on GitHub.",
    tags: ['Coming soon'],
    link: profile.github,
  },
];

export const fallbackArticles = [
  {
    title: 'Read my latest writing on Medium',
    description: 'Notes on open-source contribution, frontend engineering, and building in public.',
    link: profile.medium,
    pubDate: null,
  },
];
