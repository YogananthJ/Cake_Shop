import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [showLangAlert, setShowLangAlert] = useState(false);

  const handleTutorialClick = () => {
    setShowLangAlert(true);
  };

  const handleLangSelect = (lang: 'english' | 'tamil') => {
    setShowLangAlert(false);
    if (lang === 'english') {
      window.open('https://www.youtube.com/@CakesbyLynz/featured', '_blank');
    } else {
      window.open('https://www.youtube.com/playlist?list=PLX9ciqY-LU_eJpddyoh-OGDWvEO3ob5kQ', '_blank');
    }
  };

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-babyPink-50 via-cream-50 to-lightBrown-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">🎂</div>
        <div className="absolute top-40 right-20 text-4xl opacity-10 animate-bounce-gentle">🧁</div>
        <div className="absolute bottom-20 left-1/4 text-5xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🍰</div>
        <div className="absolute bottom-40 right-10 text-3xl opacity-10 animate-bounce-gentle" style={{ animationDelay: '2s' }}>🎉</div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-babyPink-500 via-babyPink-600 to-lightBrown-600 bg-clip-text text-transparent">
                  Sweet Moments
                </span>
                <br />
                <span className="text-lightBrown-800">Delivered Fresh</span>
              </h1>
              <p className="text-xl text-lightBrown-600 leading-relaxed">
                Crafted with love, delivered with care. Experience the magic of freshly baked cakes for every special occasion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-lg px-8 py-4">
                🛍️ Order Now
              </Button>
              <Button className="btn-secondary text-lg px-8 py-4" onClick={handleTutorialClick}>
                📹 Watch Baking Tutorials
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-cream-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-babyPink-500">50K+</div>
                <div className="text-sm text-lightBrown-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-babyPink-500">500+</div>
                <div className="text-sm text-lightBrown-600">Cake Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-babyPink-500">24/7</div>
                <div className="text-sm text-lightBrown-600">Fresh Delivery</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-gradient-to-br from-white/50 to-cream-100/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Beautiful layered cake"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              
              {/* Floating offer card */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-babyPink-400 to-babyPink-500 text-white p-4 rounded-2xl shadow-lg animate-bounce-gentle">
                <div className="text-sm font-semibold">🎉 Festival Special</div>
                <div className="text-2xl font-bold">30% OFF</div>
              </div>

             
            </div>
          </div>
        </div>

        {/* Quick categories */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-lightBrown-800 mb-2">Shop by Occasion</h3>
            <p className="text-lightBrown-600">Find the perfect cake for every celebration</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Birthday', emoji: '🎂', color: 'from-babyPink-400 to-babyPink-500' },
              { name: 'Anniversary', emoji: '💕', color: 'from-red-400 to-red-500' },
              { name: 'Kids Special', emoji: '🧒', color: 'from-yellow-400 to-yellow-500' },
              { name: 'Designer', emoji: '🎨', color: 'from-purple-400 to-purple-500' },
              { name: 'Eggless', emoji: '🌱', color: 'from-green-400 to-green-500' },
              { name: 'Same Day', emoji: '⚡', color: 'from-blue-400 to-blue-500' },
            ].map((category, index) => (
              <button
                key={category.name}
                className="cake-card p-4 text-center hover:scale-105 transition-transform duration-300 group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={`text-4xl mb-3 p-3 rounded-full bg-gradient-to-r ${category.color} inline-block group-hover:animate-bounce-gentle`}>
                  {category.emoji}
                </div>
                <div className="font-semibold text-lightBrown-800 text-sm">{category.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Language Alert Modal */}
      {showLangAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <div className="text-lg font-semibold mb-4">Choose Language</div>
            <div className="flex gap-4">
              <Button className="btn-primary px-6" onClick={() => handleLangSelect('tamil')}>
                Tamil
              </Button>
              <Button className="btn-secondary px-6" onClick={() => handleLangSelect('english')}>
                English
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
