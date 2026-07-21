import { profile } from '../utils/data';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="footer-built">Built with React &amp; Vite</span>
      </div>
    </footer>
  );
}
