
import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-cream-200 shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-babyPink-50 to-cream-50 py-2 px-4 text-sm text-lightBrown-700">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Free delivery in Mumbai & Pune</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>✨ Free delivery on orders above ₹499</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-babyPink-500 to-lightBrown-600 bg-clip-text text-transparent">
              🧁 CakeNest
            </div>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lightBrown-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for cakes, occasions..."
                className="pl-10 pr-4 py-2 w-full rounded-full border-cream-300 focus:border-babyPink-400 focus:ring-babyPink-200"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 transition-colors font-medium">Home</a>
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 transition-colors font-medium">Cakes</a>
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 transition-colors font-medium">Occasions</a>
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 transition-colors font-medium">Gifts</a>
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 transition-colors font-medium">Track Order</a>
            </nav>

            {/* User actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2 text-lightBrown-700 hover:text-babyPink-500">
                <User className="w-4 h-4" />
                <span>Login</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-5 h-5 text-lightBrown-700 hover:text-babyPink-500" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-babyPink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce-gentle">
                    {cartCount}
                  </span>
                )}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lightBrown-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search for cakes..."
              className="pl-10 pr-4 py-2 w-full rounded-full border-cream-300 focus:border-babyPink-400 focus:ring-babyPink-200"
            />
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-cream-200 animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 transition-colors font-medium py-2">Home</a>
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 transition-colors font-medium py-2">Cakes</a>
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 transition-colors font-medium py-2">Occasions</a>
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 transition-colors font-medium py-2">Gifts</a>
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 transition-colors font-medium py-2">Track Order</a>
              <Button className="btn-primary mt-2">
                <User className="w-4 h-4 mr-2" />
                Login / Sign Up
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
