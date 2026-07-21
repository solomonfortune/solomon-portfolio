import Reveal from '../components/Reveal';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import { experience, projects } from '../utils/data';
import './Experience.css';

export default function Experience() {
  return (
    <section id="work" className="section experience">
      <div className="container">
        <Reveal>
          <span className="eyebrow">$ ls experience/</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-heading">Experience &amp; Projects</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="section-sub">Where the OpenMRS contributions and internship work live — and what's being built next.</p>
        </Reveal>

        <div className="exp-list">
          {experience.map((exp, i) => (
            <ExperienceCard key={exp.org} exp={exp} delay={0.06 * i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <h3 className="projects-subheading">Projects</h3>
        </Reveal>

        <div className="project-list">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={0.06 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
