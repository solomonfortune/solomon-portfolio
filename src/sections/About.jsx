import Reveal from '../components/Reveal';
import { bio, skillGroups, education, stats } from '../utils/data';
import { getSkillIcon } from '../utils/skillIcons';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <span className="eyebrow">$ whoami</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-heading">About &amp; Skills</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.1} className="about-bio">
            <p>{bio}</p>

            <dl className="about-stats">
              {stats.map((s) => (
                <div key={s.label} className="about-stat">
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>

            <div className="about-edu card">
              <span className="eyebrow" style={{ marginBottom: 6 }}>Education</span>
              <p className="about-edu-degree">{education.degree}</p>
              <p className="about-edu-meta">{education.school} · {education.period}</p>
            </div>
          </Reveal>

          <div className="about-skills">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={0.05 * i} className="skill-card card">
                <h3 className="skill-card-title">{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((skill) => {
                    const { Icon, color } = getSkillIcon(skill);
                    return (
                      <span key={skill} className="skill-tag" style={{ '--brand': color }}>
                        <Icon className="skill-tag-icon" size={15} aria-hidden="true" />
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
