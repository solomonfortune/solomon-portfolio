import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './DocumentHeader.css';

export default function DocumentHeader({ label }) {
  return (
    <header className="doc-header">
      <div className="container doc-header-inner">
        <Link to="/" className="doc-back">
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>
        <div className="doc-header-right">
          <span className="doc-header-label">{label}</span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}