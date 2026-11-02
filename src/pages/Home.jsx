import Seo from '../components/common/Seo';
import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main>
      <Seo
        title="Personality Development & Handwriting Courses in Hubballi"
        description="Expert-led courses in handwriting improvement, calligraphy, graphology, memory skills, English grammar and personality development at Mind Power Academy, Hubballi."
        path="/"
      />
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </main>
  );
}
