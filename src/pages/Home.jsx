import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
import BlogContact from '../sections/BlogContact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <BlogContact />
      </main>
      <Footer />
    </>
  );
}