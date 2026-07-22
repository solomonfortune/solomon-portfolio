export const resumeSummary = `Frontend developer with hands-on production experience shipping to OpenMRS, an open-source medical record platform used in clinics across the developing world. Comfortable across the stack — React/TypeScript on the frontend, Node/Python/Java on the backend — and building toward full-stack ownership of products end to end.`;

export const resumeHighlights = [
  'Contributor across 8+ repositories in the OpenMRS open-source ecosystem',
  'Shipped a complete 5-step password reset flow from routing to production',
  'Resolved security vulnerabilities, flaky CI tests, and production UI bugs on software actively used in real clinical settings',
  'Reviewed and merged work directly with project maintainers via GitHub PR workflow',
];

export const resumeExperience = [
  {
    role: 'Volunteer Developer',
    org: 'OpenMRS Inc.',
    period: 'Ongoing',
    bullets: [
      'Built and shipped a 5-step password reset flow (routing, API, styling) through multiple rounds of maintainer code review',
      'Upgraded transitive dependencies to close security vulnerabilities in a patient-facing production module',
      'Fixed a flaky CI test and a setup-wizard data-loss bug in openmrs-core, both with accompanying unit test coverage',
      'Consolidated duplicate components and resolved cross-cutting TypeScript issues in the patient management module',
      'Implemented a new REST search endpoint, resolving build and code-complexity issues flagged by SonarCloud',
    ],
  },
  {
    role: 'IT Support Intern',
    org: 'Uganda Civil Aviation Authority',
    period: 'Jun 2025 – Jul 2025',
    bullets: [
      'Provided IT support in an enterprise setting, applying troubleshooting and technical communication skills',
    ],
  },
];

export const resumeProjects = [
  {
    name: 'AgroConnect',
    description:
      'React Native / Expo app for cooperative farming logistics in Western Uganda, with Firebase and mobile money API integration',
  },
  {
    name: 'myFeesTracker',
    description: 'React-based school fees management tool for Ugandan schools',
  },
];

export const resumeSkills = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'HTML/CSS'] },
  { title: 'Backend', items: ['Node.js', 'Python', 'Django', 'Java', 'Spring Boot'] },
  { title: 'Data', items: ['PostgreSQL', 'MongoDB', 'Firebase', 'Pandas', 'NumPy'] },
  { title: 'Tools', items: ['Git', 'Docker', 'Postman', 'REST APIs'] },
];

export const resumeEducation = {
  degree: 'BSc Computer Science',
  school: 'Mbarara University of Science and Technology',
  period: '2023 – 2026 · Expected Graduation: October 2026',
};