import Hero from '@/components/hero';
import reliabilityImg from '/public/reliability.jpg';

export default function ReliabilityPage() {
  return (
    <Hero
      imgAlt="welding"
      title="Super high reliability hosting"
      imgData={reliabilityImg}
    />
  );
}
