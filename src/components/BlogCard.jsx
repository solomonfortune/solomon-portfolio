import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import './BlogCard.css';

function formatDate(dateStr) {
  if (!dateStr) return null;
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return null;
  }
}

export default function BlogCard({ article, delay = 0 }) {
  const date = formatDate(article.pubDate);
  return (
    <Reveal delay={delay} className="blog-card card">
      <a href={article.link} target="_blank" rel="noreferrer" className="blog-card-link">
        {date && <span className="blog-date">{date}</span>}
        <h3 className="blog-title">{article.title}</h3>
        <p className="blog-desc">{article.description}</p>
        <span className="blog-read">
          Read on Medium <ArrowUpRight size={14} />
        </span>
      </a>
    </Reveal>
  );
}
