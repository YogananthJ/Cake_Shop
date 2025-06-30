
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, MapPin, Mail, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-lightBrown-800 to-lightBrown-900 text-white">
      {/* Newsletter section */}
      <div className="bg-gradient-to-r from-babyPink-500 to-babyPink-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">🎂 Stay Sweet with Our Newsletter</h3>
          <p className="text-babyPink-100 mb-6 text-lg">
            Get exclusive offers, new cake launches, and celebration tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-babyPink-100 focus:bg-white/30"
            />
            <Button className="bg-white text-babyPink-600 hover:bg-cream-100 font-semibold px-8">
              Subscribe 🍰
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="space-y-6">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-babyPink-400 to-cream-300 bg-clip-text text-transparent mb-4">
                🧁 CakeNest
              </div>
              <p className="text-lightBrown-300 leading-relaxed">
                Crafting sweet memories since 2020. We believe every celebration deserves a perfect cake made with love and the finest ingredients.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-yellow-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9</span>
              <span className="text-lightBrown-300">(50K+ reviews)</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xl font-bold text-cream-100 mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                'All Cakes',
                'Birthday Cakes',
                'Anniversary Cakes',
                'Designer Cakes',
                'Eggless Cakes',
                'Same Day Delivery',
                'Corporate Orders',
                'Track Your Order'
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-lightBrown-300 hover:text-babyPink-400 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Customer support */}
          <div>
            <h4 className="text-xl font-bold text-cream-100 mb-6">Customer Support</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-babyPink-400" />
                <div>
                  <div className="text-white font-semibold">+91 98765 43210</div>
                  <div className="text-lightBrown-300 text-sm">24/7 Support</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-babyPink-400" />
                <div>
                  <div className="text-white font-semibold">hello@cakenest.com</div>
                  <div className="text-lightBrown-300 text-sm">Quick Response</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-babyPink-400 mt-1" />
                <div>
                  <div className="text-white font-semibold">Delivery Areas</div>
                  <div className="text-lightBrown-300 text-sm">Mumbai, Pune, Delhi, Bangalore</div>
                </div>
              </div>
            </div>
          </div>

          {/* Policies & Features */}
          <div>
            <h4 className="text-xl font-bold text-cream-100 mb-6">Our Promise</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚚</span>
                <div>
                  <div className="text-white font-semibold">Free Delivery</div>
                  <div className="text-lightBrown-300 text-sm">Above ₹499</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <div className="text-white font-semibold">Same Day Delivery</div>
                  <div className="text-lightBrown-300 text-sm">Order before 6 PM</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <div className="text-white font-semibold">Quality Guarantee</div>
                  <div className="text-lightBrown-300 text-sm">100% Fresh</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">💝</span>
                <div>
                  <div className="text-white font-semibold">Surprise Features</div>
                  <div className="text-lightBrown-300 text-sm">Live Cam & Voice Notes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-lightBrown-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-lightBrown-300 text-sm">
              © 2024 CakeNest. All rights reserved. Made with 💖 for sweet celebrations.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-lightBrown-300 hover:text-babyPink-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-lightBrown-300 hover:text-babyPink-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-lightBrown-300 hover:text-babyPink-400 transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
