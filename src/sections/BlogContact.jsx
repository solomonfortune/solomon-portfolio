import { Mail, PenLine } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/icons';
import Reveal from '../components/Reveal';
import BlogCard from '../components/BlogCard';
import { useMediumFeed } from '../hooks/useMediumFeed';
import { profile } from '../utils/data';
import './BlogContact.css';

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: GithubIcon, label: 'GitHub', href: profile.github },
  { icon: LinkedinIcon, label: 'LinkedIn', href: profile.linkedin },
];

export default function BlogContact() {
  const { articles, loading } = useMediumFeed(3);

  return (
    <section id="connect" className="section blog-contact">
      <div className="container">
        <Reveal>
          <span className="eyebrow">$ cat contact.md</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-heading">Blog &amp; Contact</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="section-sub">Recent writing from Medium, and the fastest ways to reach me.</p>
        </Reveal>

        <div className="blog-grid">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <div key={i} className="blog-card-skeleton card" />)
            : articles.map((article, i) => (
                <BlogCard key={article.link + i} article={article} delay={0.06 * i} />
              ))}
        </div>

        <Reveal delay={0.1} className="contact-block">
          <div className="contact-cta card">
            <div>
              <h3 className="contact-heading">Let's build something.</h3>
              <p className="contact-copy">
                Open to opportunities, collaboration, and conversations about open-source software.
              </p>
            </div>
            <div className="contact-links">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="contact-link">
                  <Icon size={17} />
                  {label}
                </a>
              ))}
              <a href={profile.medium} target="_blank" rel="noreferrer" className="contact-link">
                <PenLine size={17} />
                Medium
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
