import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoMarquee from '@/components/LogoMarquee';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Infrastructure from '@/components/Infrastructure';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Stats />
        <Services />
        <Features />
        <Infrastructure />
        <Pricing />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
