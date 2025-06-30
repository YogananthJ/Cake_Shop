
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedCakes from '@/components/FeaturedCakes';
import InnovativeFeatures from '@/components/InnovativeFeatures';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedCakes />
      <InnovativeFeatures />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
