import {
  SiHtml5, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiBootstrap,
  SiNodedotjs, SiPython, SiDjango, SiPhp, SiSpring,
  SiMongodb, SiPostgresql, SiMysql, SiSqlite, SiFirebase, SiSupabase,
  SiJsonwebtokens, SiPandas, SiNumpy, SiPlotly, SiJupyter, SiScikitlearn,
  SiC, SiGnubash, SiDocker, SiGithubpages, SiPostman,
} from 'react-icons/si';
import { FaJava, FaCss3 } from 'react-icons/fa6';
import { Webhook, KeyRound, Database, BarChart3, LineChart, Code2 } from 'lucide-react';

/**
 * Maps each skill label (as used verbatim in utils/data.js) to its icon
 * component and an authentic-ish brand accent color, used only as a subtle
 * hover tint so the grid of logos doesn't turn into a rainbow at rest.
 * A handful of technologies have no real logo (REST APIs, OAuth, generic
 * SQL) — those get a neutral, meaning-appropriate icon instead.
 */
export const skillIcons = {
  // Frontend
  HTML: { Icon: SiHtml5, color: '#E34F26' },
  CSS: { Icon: FaCss3, color: '#3B82F6' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  React: { Icon: SiReact, color: '#61DAFB' },
  'Next.js': { Icon: SiNextdotjs, color: 'currentColor' },
  Bootstrap: { Icon: SiBootstrap, color: '#8B5CF6' },
  'REST APIs': { Icon: Webhook, color: '#3B82F6' },

  // Backend
  'Node.js': { Icon: SiNodedotjs, color: '#5FA04E' },
  Python: { Icon: SiPython, color: '#3B82F6' },
  Django: { Icon: SiDjango, color: '#3FA463' },
  Java: { Icon: FaJava, color: '#E76F00' },
  'Spring Boot': { Icon: SiSpring, color: '#6DB33F' },
  PHP: { Icon: SiPhp, color: '#8892BF' },

  // Databases
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4E9BE0' },
  MySQL: { Icon: SiMysql, color: '#4E9BE0' },
  SQLite: { Icon: SiSqlite, color: '#3ECF8E' },
  Firebase: { Icon: SiFirebase, color: '#FFCA28' },
  Supabase: { Icon: SiSupabase, color: '#3ECF8E' },

  // Auth
  JWT: { Icon: SiJsonwebtokens, color: '#8B5CF6' },
  OAuth: { Icon: KeyRound, color: '#8B5CF6' },
  'Firebase Authentication': { Icon: SiFirebase, color: '#FFCA28' },
  'Firebase Auth': { Icon: SiFirebase, color: '#FFCA28' },

  // Data science
  Pandas: { Icon: SiPandas, color: '#9C7FE0' },
  NumPy: { Icon: SiNumpy, color: '#4DABCF' },
  Matplotlib: { Icon: LineChart, color: '#10B981' },
  Seaborn: { Icon: BarChart3, color: '#10B981' },
  Plotly: { Icon: SiPlotly, color: '#8B5CF6' },
  'Jupyter Notebook': { Icon: SiJupyter, color: '#F37626' },
  Jupyter: { Icon: SiJupyter, color: '#F37626' },
  'Scikit-Learn': { Icon: SiScikitlearn, color: '#F7931E' },
  SQL: { Icon: Database, color: '#3B82F6' },

  // Languages
  C: { Icon: SiC, color: '#8CB4E0' },
  Bash: { Icon: SiGnubash, color: '#4EAA25' },

  // Tools
  Docker: { Icon: SiDocker, color: '#2496ED' },
  'Docker Compose': { Icon: SiDocker, color: '#2496ED' },
  'GitHub Pages': { Icon: SiGithubpages, color: 'currentColor' },
  'Firebase Hosting': { Icon: SiFirebase, color: '#FFCA28' },
  Postman: { Icon: SiPostman, color: '#FF6C37' },
};

export const defaultSkillIcon = { Icon: Code2, color: '#3B82F6' };

export function getSkillIcon(name) {
  return skillIcons[name] ?? defaultSkillIcon;
}
