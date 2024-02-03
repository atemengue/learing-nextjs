import Hero from '@/components/hero';
import performanceImg from '/public/performance.jpg';

export default function PerformancePage() {
  return (
    <Hero
      imgAlt="welding"
      title="We serve high performace applications"
      imgData={performanceImg}
    />
  );
}
