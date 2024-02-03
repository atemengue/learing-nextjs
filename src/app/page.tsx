import Hero from '@/components/hero';
import homeImg from '/public/home.jpg';

export default function Home() {
  return (
    <Hero
      imgAlt="car factory"
      title="Professionnal Cloud Hosting"
      imgData={homeImg}
    />
  );
}
