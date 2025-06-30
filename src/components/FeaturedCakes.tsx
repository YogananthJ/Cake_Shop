
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Calendar } from 'lucide-react';

const FeaturedCakes = () => {
  const [hoveredCake, setHoveredCake] = useState<number | null>(null);

  const featuredCakes = [
    {
      id: 1,
      name: "Chocolate Truffle Supreme",
      price: 899,
      originalPrice: 1199,
      rating: 4.8,
      reviews: 1205,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Birthday",
      tags: ["Bestseller", "Premium"],
      description: "Rich chocolate layers with truffle filling",
      sizes: ["0.5kg", "1kg", "2kg"],
      isVeg: true
    },
    {
      id: 2,
      name: "Red Velvet Romance",
      price: 799,
      originalPrice: 999,
      rating: 4.9,
      reviews: 890,
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Anniversary",
      tags: ["Romantic", "Classic"],
      description: "Velvety smooth red velvet with cream cheese frosting",
      sizes: ["0.5kg", "1kg", "2kg"],
      isVeg: true
    },
    {
      id: 3,
      name: "Rainbow Unicorn Fantasy",
      price: 1299,
      originalPrice: 1599,
      rating: 4.7,
      reviews: 654,
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Kids",
      tags: ["Designer", "Kids Special"],
      description: "Colorful layers with edible unicorn decorations",
      sizes: ["1kg", "2kg", "3kg"],
      isVeg: true
    },
    {
      id: 4,
      name: "Fruit Forest Delight",
      price: 699,
      originalPrice: 899,
      rating: 4.6,
      reviews: 432,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Healthy",
      tags: ["Fresh Fruits", "Light"],
      description: "Fresh seasonal fruits with light vanilla sponge",
      sizes: ["0.5kg", "1kg", "1.5kg"],
      isVeg: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-lightBrown-800 mb-4">
            Our <span className="bg-gradient-to-r from-babyPink-500 to-babyPink-600 bg-clip-text text-transparent">Featured</span> Cakes
          </h2>
          <p className="text-lightBrown-600 text-lg max-w-2xl mx-auto">
            Handcrafted with premium ingredients, these are our most loved creations that bring joy to every celebration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCakes.map((cake, index) => (
            <Card
              key={cake.id}
              className="cake-card overflow-hidden group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
              onMouseEnter={() => setHoveredCake(cake.id)}
              onMouseLeave={() => setHoveredCake(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {cake.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      className={`${
                        tag === 'Bestseller' ? 'bg-orange-500' :
                        tag === 'Premium' ? 'bg-purple-500' :
                        tag === 'Romantic' ? 'bg-red-500' :
                        tag === 'Designer' ? 'bg-indigo-500' :
                        'bg-green-500'
                      } text-white text-xs font-semibold`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Discount badge */}
                <div className="absolute top-3 right-3 bg-babyPink-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                  {Math.round(((cake.originalPrice - cake.price) / cake.originalPrice) * 100)}% OFF
                </div>

                {/* Veg indicator */}
                <div className="absolute bottom-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  🌱 Veg
                </div>

                {/* Quick add overlay */}
                {hoveredCake === cake.id && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300">
                    <Button className="btn-primary">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Quick Add
                    </Button>
                  </div>
                )}
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-lg text-lightBrown-800 mb-1 group-hover:text-babyPink-600 transition-colors">
                    {cake.name}
                  </h3>
                  <p className="text-sm text-lightBrown-600 mb-3">{cake.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-sm">{cake.rating}</span>
                    </div>
                    <span className="text-xs text-lightBrown-500">({cake.reviews} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-babyPink-600">₹{cake.price}</span>
                    <span className="text-sm text-lightBrown-500 line-through">₹{cake.originalPrice}</span>
                  </div>

                  {/* Size options */}
                  <div className="flex gap-2 mb-4">
                    {cake.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-2 py-1 bg-cream-100 text-lightBrown-700 text-xs rounded-full border border-cream-200"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 btn-primary">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm" className="px-3">
                    <Calendar className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button className="btn-secondary text-lg px-8 py-4">
            View All Cakes →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;
