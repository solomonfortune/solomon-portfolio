import { Mail, Phone, PenLine, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons';
import DocumentHeader from '../components/DocumentHeader';
import Reveal from '../components/Reveal';
import { getSkillIcon } from '../utils/skillIcons';
import {
  cvContact,
  cvProfileText,
  cvEducation,
  cvOpenSource,
  cvExperience,
  cvProjects,
  cvSkillGroups,
  cvReferences,
} from '../utils/cvData';
import './Document.css';
import './CV.css';

export default function CV() {
  return (
    <>
      <DocumentHeader label="Curriculum Vitae" />
      <main className="doc-page">
        <div className="container doc-container">
          <Reveal className="doc-masthead">
            <span className="eyebrow">$ cat cv.md</span>
            <h1 className="doc-name">{cvContact.name}</h1>
            <p className="doc-role">{cvContact.role}</p>

            <ul className="doc-contact-row">
              <li><MapPin size={14} /> {cvContact.location}</li>
              <li><Mail size={14} /> <a href={`mailto:${cvContact.email}`}>{cvContact.email}</a></li>
              {cvContact.phones.map((p) => (
                <li key={p}><Phone size={14} /> {p}</li>
              ))}
              <li><GithubIcon size={14} /> <a href={cvContact.github} target="_blank" rel="noreferrer">github.com/solomonfortune</a></li>
              <li><LinkedinIcon size={14} /> <a href={cvContact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><PenLine size={14} /> <a href={cvContact.medium} target="_blank" rel="noreferrer">Medium</a></li>
            </ul>
          </Reveal>

          <Reveal delay={0.05} as="section" className="doc-section">
            <h2 className="doc-heading">Profile</h2>
            <p className="doc-body">{cvProfileText}</p>
          </Reveal>

          <Reveal delay={0.05} as="section" className="doc-section">
            <h2 className="doc-heading">Education</h2>
            <div className="doc-table-wrap">
              <table className="doc-table">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Institution</th>
                    <th>Qualification</th>
                  </tr>
                </thead>
                <tbody>
                  {cvEducation.map((row) => (
                    <tr key={row.institution}>
                      <td data-label="Period">{row.period}</td>
                      <td data-label="Institution">{row.institution}</td>
                      <td data-label="Qualification">{row.qualification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.05} as="section" className="doc-section">
            <h2 className="doc-heading">Open Source Contribution Record — OpenMRS Ecosystem</h2>
            <div className="cv-os-head">
              <p className="cv-os-role">{cvOpenSource.role}</p>
              <span className="pill">{cvOpenSource.period}</span>
            </div>
            <p className="doc-body">{cvOpenSource.intro}</p>

            <div className="cv-repo-list">
              {cvOpenSource.repos.map((repo) => (
                <div key={repo.name} className="cv-repo card">
                  <p className="cv-repo-name">{repo.name}</p>
                  <ul className="doc-bullets">
                    {repo.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <p className="cv-subhead">Community involvement</p>
            <ul className="doc-bullets">
              {cvOpenSource.community.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Reveal>

          <Reveal delay={0.05} as="section" className="doc-section">
            <h2 className="doc-heading">Professional Experience</h2>
            {cvExperience.map((exp) => (
              <div key={exp.org} className="cv-exp-block">
                <div className="cv-os-head">
                  <div>
                    <p className="cv-exp-role">{exp.role}</p>
                    <p className="cv-exp-org">{exp.org}</p>
                  </div>
                  <span className="pill">{exp.period}</span>
                </div>
                <p className="doc-body">{exp.description}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.05} as="section" className="doc-section">
            <h2 className="doc-heading">Academic &amp; Personal Projects</h2>
            <div className="cv-project-list">
              {cvProjects.map((p) => (
                <div key={p.name} className="cv-repo card">
                  <p className="cv-repo-name">{p.name}</p>
                  <p className="doc-body doc-body-tight">{p.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05} as="section" className="doc-section">
            <h2 className="doc-heading">Technical Skills</h2>
            <div className="cv-skills-grid">
              {cvSkillGroups.map((group) => (
                <div key={group.title} className="cv-skill-group">
                  <p className="cv-skill-title">{group.title}</p>
                  <div className="cv-skill-tags">
                    {group.items.map((skill) => {
                      const { Icon, color } = getSkillIcon(skill);
                      return (
                        <span key={skill} className="cv-skill-tag" style={{ '--brand': color }}>
                          <Icon size={14} aria-hidden="true" />
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05} as="section" className="doc-section doc-section-last">
            <h2 className="doc-heading">References</h2>
            {cvReferences.map((ref) => (
              <div key={ref.name} className="cv-reference">
                <p className="cv-reference-name">{ref.name}</p>
                <p className="cv-reference-title">{ref.title}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </main>
    </>
  );
}