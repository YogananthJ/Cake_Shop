import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import CartSidebar from './CartSidebar';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-cream-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-babyPink-400 to-babyPink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🧁</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-babyPink-500 to-lightBrown-600 bg-clip-text text-transparent">
              CakeNest
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 font-medium transition-colors">Home</a>
            <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 font-medium transition-colors">Cakes</a>
            <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 font-medium transition-colors">Categories</a>
            <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 font-medium transition-colors">Combos</a>
            <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 font-medium transition-colors">About</a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <CartSidebar />
            <Button variant="outline" className="hidden sm:flex">
              Login
            </Button>
            <Button className="btn-primary hidden sm:flex">
              Sign Up
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-cream-200 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 font-medium transition-colors block py-2">Home</a>
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 font-medium transition-colors block py-2">Cakes</a>
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 font-medium transition-colors block py-2">Categories</a>
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 font-medium transition-colors block py-2">Combos</a>
              <a href="#" className="text-lightBrown-700 hover:text-babyPink-500 font-medium transition-colors block py-2">About</a>
              <Button variant="outline" className="w-full justify-center">Login</Button>
              <Button className="btn-primary w-full justify-center">Sign Up</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
