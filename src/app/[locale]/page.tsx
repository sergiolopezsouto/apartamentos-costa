import Hero from '@/components/Hero';
import Apartments from '@/components/Apartments';
import Activities from '@/components/Activities';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      <Hero />
      <Apartments />
      <Activities />
    </>
  );
}
