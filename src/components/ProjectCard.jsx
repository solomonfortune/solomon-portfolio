import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import './ProjectCard.css';

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay} className="project-card card">
      <a href={project.link} target="_blank" rel="noreferrer" className="project-card-link">
        <div className="project-card-top">
          <h3 className="project-name">{project.name}</h3>
          <ArrowUpRight size={18} className="project-arrow" />
        </div>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="pill">{tag}</span>
          ))}
        </div>
      </a>
    </Reveal>
  );
}
