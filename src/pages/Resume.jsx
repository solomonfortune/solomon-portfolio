import { Mail, Phone, PenLine, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons';
import DocumentHeader from '../components/DocumentHeader';
import Reveal from '../components/Reveal';
import { profile } from '../utils/data';
import {
  resumeSummary,
  resumeHighlights,
  resumeExperience,
  resumeProjects,
  resumeSkills,
  resumeEducation,
} from '../utils/resumeData';
import './Document.css';
import './Resume.css';

export default function Resume() {
  return (
    <>
      <DocumentHeader label="Resume" />
      <main className="doc-page">
        <div className="container doc-container doc-container-narrow">
          <Reveal className="doc-masthead">
            <span className="eyebrow">$ cat resume.md</span>
            <h1 className="doc-name">{profile.name}</h1>
            <p className="doc-role">Frontend Developer · Open Source Contributor</p>

            <ul className="doc-contact-row">
              <li><MapPin size={14} /> {profile.location}</li>
              <li><Mail size={14} /> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><Phone size={14} /> +256 708 771 661</li>
              <li><GithubIcon size={14} /> <a href={profile.github} target="_blank" rel="noreferrer">github.com/solomonfortune</a></li>
              <li><LinkedinIcon size={14} /> <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><PenLine size={14} /> <a href={profile.medium} target="_blank" rel="noreferrer">Medium</a></li>
            </ul>
          </Reveal>

          <Reveal delay={0.05} as="section" className="doc-section">
            <h2 className="doc-heading">Summary</h2>
            <p className="doc-body">{resumeSummary}</p>
          </Reveal>

          <Reveal delay={0.05} as="section" className="doc-section">
            <h2 className="doc-heading">Impact Highlights</h2>
            <ul className="resume-highlights">
              {resumeHighlights.map((h) => (
                <li key={h}><Sparkles size={14} /> <span>{h}</span></li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05} as="section" className="doc-section">
            <h2 className="doc-heading">Experience</h2>
            {resumeExperience.map((exp) => (
              <div key={exp.org} className="resume-exp-block">
                <div className="resume-exp-head">
                  <div>
                    <p className="resume-exp-role">{exp.role}</p>
                    <p className="resume-exp-org">{exp.org}</p>
                  </div>
                  <span className="pill">{exp.period}</span>
                </div>
                <ul className="doc-bullets">
                  {exp.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.05} as="section" className="doc-section">
            <h2 className="doc-heading">Projects</h2>
            <div className="resume-projects">
              {resumeProjects.map((p) => (
                <p key={p.name} className="doc-body doc-body-tight resume-project">
                  <strong>{p.name}</strong> — {p.description}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05} as="section" className="doc-section">
            <h2 className="doc-heading">Technical Skills</h2>
            <div className="resume-skills">
              {resumeSkills.map((group) => (
                <p key={group.title} className="resume-skill-line">
                  <span className="resume-skill-label">{group.title}:</span> {group.items.join(' · ')}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05} as="section" className="doc-section doc-section-last">
            <h2 className="doc-heading">Education</h2>
            <p className="resume-exp-role">{resumeEducation.degree}</p>
            <p className="resume-exp-org">{resumeEducation.school}</p>
            <p className="doc-body doc-body-tight" style={{ marginTop: 4 }}>{resumeEducation.period}</p>
          </Reveal>
        </div>
      </main>
    </>
  );
}