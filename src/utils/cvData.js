import { profile } from './data';

export const cvContact = {
  ...profile,
  phones: ['+256 708 771 661', '+256 784 249 609'],
};

export const cvProfileText = `Frontend developer and open-source contributor coding since 2023, currently completing a BSc in Computer Science at Mbarara University. The bulk of my hands-on engineering experience comes from sustained contribution to OpenMRS — an open-source electronic medical record platform deployed in clinics across the developing world — where I've shipped features, fixed production bugs, and resolved CI issues across eight repositories in the ecosystem. I'm working toward becoming a full-stack engineer capable of owning a product from interface to infrastructure.`;

export const cvEducation = [
  {
    period: '2023 – 2026',
    institution: 'Mbarara University of Science and Technology',
    qualification: 'Bachelor of Computer Science (Expected Graduation: October 2026)',
  },
  {
    period: '2020 – 2022',
    institution: 'Merryland High School – Entebbe',
    qualification: 'Uganda Advanced Certificate of Education (UACE)',
  },
  {
    period: '2016 – 2019',
    institution: 'Hilton High School – Mukono',
    qualification: 'Uganda Certificate of Education (UCE)',
  },
  {
    period: '2009 – 2015',
    institution: 'Victory Learning Primary School',
    qualification: 'Primary Leaving Examination (PLE)',
  },
];

export const cvOpenSource = {
  role: 'Volunteer Developer, OpenMRS Inc.',
  period: 'Ongoing',
  intro:
    "Sustained contributor across the O3 microfrontend suite and openmrs-core, working directly with project maintainers through code review on software running in real clinical settings.",
  repos: [
    {
      name: 'openmrs-esm-patient-chart',
      items: [
        'Upgraded transitive ws dependencies to resolve security vulnerabilities (ticket O3-5789), navigating Yarn Berry behavior, Windows line-ending conflicts, and fork sync issues',
        'Fixed asymmetric vertical padding on NumericObs table cells in tablet mode via a Carbon Design System override (ticket O3-5646, PR #1769)',
      ],
    },
    {
      name: 'openmrs-esm-core',
      items: [
        'Designed and implemented a complete 5-step password reset flow — routing, API integration, and CSS-variable-based styling — through multiple rounds of maintainer review (ticket O3-2264)',
      ],
    },
    {
      name: 'openmrs-core',
      items: [
        'Diagnosed and fixed a flaky CI test by correctly saving and restoring Context.runtimeProperties around InitializationFilterE2ETest (TRUNK-6637)',
        'Resolved a setup wizard bug causing password loss, adding a passwordsEntered state flag with reviewer-requested unit test coverage (TRUNK-6645)',
        'Fixed a responsive layout bug where the footer obscured the Continue button on small viewports, via a targeted CSS media query (TRUNK-6644)',
      ],
    },
    {
      name: 'openmrs-module-webservices.rest',
      items: [
        'Implemented EncounterSearchHandler2_8, a new REST search handler, resolving build configuration, module placement, and SonarCloud complexity issues (RESTWS-1025)',
      ],
    },
    {
      name: 'openmrs-esm-patient-management',
      items: [
        'Consolidated two duplicate CompactPatientSearch components into one, resolving the resulting TypeScript and Git workflow conflicts (ticket O3-5717)',
      ],
    },
    {
      name: 'openmrs-module-billing',
      items: [
        'Removed a deprecated timesheet feature end-to-end across all application layers, resolving the resulting CI failures, merge conflicts, and SonarCloud findings',
      ],
    },
    {
      name: 'openmrs-module-o3forms',
      items: [
        'Built a new REST endpoint to filter forms by SpEL applicability rules, including the service, controller, and test layers',
      ],
    },
    {
      name: 'openmrs-esm-billing-app',
      items: [
        'Fixed a Carbon RadioButtonGroup state synchronization bug affecting patients with a prior visit on the billing form',
      ],
    },
  ],
  community: [
    'Actively support new contributors joining the OpenMRS community',
    'Participate in OpenMRS Talk forum discussions, including efforts to improve O3 implementer documentation',
    'Diagnosed and helped resolve a community forum rendering issue specific to Microsoft Edge',
  ],
};

export const cvExperience = [
  {
    role: 'IT Support Intern',
    org: 'Uganda Civil Aviation Authority',
    period: 'June 2025 – July 2025',
    description:
      'Provided IT support in an enterprise setting, applying core technical troubleshooting and customer-facing communication skills alongside foundational software knowledge.',
  },
];

export const cvProjects = [
  {
    name: 'AgroConnect',
    description:
      'React Native / Expo mobile platform for cooperative maize produce management among smallholder farmers in Western Uganda, integrating Firebase and mobile money APIs. Final-year university project; produced full technical report chapters, literature review grounded in Ugandan agricultural policy and technology-adoption research, and UI mockups.',
  },
  {
    name: 'myFeesTracker',
    description:
      'School fees management web application for Ugandan primary and secondary schools, built for Geowise Media using React with client-side data handling.',
  },
  {
    name: 'Malaria Trends in Uganda',
    description:
      'Data analysis presentation examining malaria incidence trends, delivered as part of university coursework — applied statistical and data science methods to a real public health dataset.',
  },
];

export const cvSkillGroups = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Bootstrap', 'REST APIs'] },
  { title: 'Backend', items: ['Node.js', 'Python', 'Django', 'Java', 'Spring Boot', 'PHP'] },
  { title: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase', 'Supabase'] },
  { title: 'Authentication', items: ['JWT', 'OAuth', 'Firebase Auth'] },
  { title: 'Data Science', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter', 'Scikit-Learn', 'SQL'] },
  { title: 'Languages', items: ['JavaScript', 'Python', 'Java', 'C', 'SQL', 'Bash', 'TypeScript', 'PHP'] },
  { title: 'Tools', items: ['Docker', 'Docker Compose', 'GitHub Pages', 'Firebase Hosting', 'Postman'] },
];

export const cvReferences = [
  {
    name: 'Mrs. Susan Nsubuga Musoke',
    title: 'Headteacher, Pillar Junior School',
  },
];