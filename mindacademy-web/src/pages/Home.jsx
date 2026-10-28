import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </main>
  );
}
