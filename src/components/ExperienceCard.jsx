import Reveal from './Reveal';
import './ExperienceCard.css';

export default function ExperienceCard({ exp, delay = 0 }) {
  return (
    <Reveal delay={delay} className="exp-card card">
      <div className="exp-card-head">
        <div>
          <h3 className="exp-org">{exp.org}</h3>
          <p className="exp-role">{exp.role}</p>
        </div>
        <span className="pill exp-period">{exp.period}</span>
      </div>

      <p className="exp-desc">{exp.description}</p>

      {exp.highlights.length > 0 && (
        <ul className="exp-highlights">
          {exp.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
    </Reveal>
  );
}
