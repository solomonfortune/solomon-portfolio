import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import BlogContact from './sections/BlogContact';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <BlogContact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
