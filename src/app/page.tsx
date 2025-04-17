import Navbar from '@/components/Navbar'; 
import Hero from '@/components/Hero';
import Apartments from '@/components/Apartments';
import Activities from '@/components/Activities';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Apartments />
      <Activities />
      <Testimonials />
      <Footer />
    </>
  );
}