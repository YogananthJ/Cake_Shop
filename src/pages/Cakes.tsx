
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { Search } from 'lucide-react';

const cakesData = [
  {
    id: 1,
    name: "Chocolate Truffle Cake",
    price: 1200,
    image: "/placeholder.svg",
    category: "Chocolate",
    sizes: ["1kg", "2kg", "3kg"],
    description: "Rich chocolate cake with truffle cream"
  },
  {
    id: 2,
    name: "Vanilla Strawberry Cake",
    price: 1100,
    image: "/placeholder.svg",
    category: "Fruit",
    sizes: ["1kg", "2kg", "3kg"],
    description: "Fresh strawberry cake with vanilla cream"
  },
  {
    id: 3,
    name: "Red Velvet Cake",
    price: 1300,
    image: "/placeholder.svg",
    category: "Premium",
    sizes: ["1kg", "2kg", "3kg"],
    description: "Classic red velvet with cream cheese frosting"
  },
  {
    id: 4,
    name: "Black Forest Cake",
    price: 1400,
    image: "/placeholder.svg",
    category: "Fruit",
    sizes: ["1kg", "2kg", "3kg"],
    description: "Traditional black forest with cherries"
  },
  {
    id: 5,
    name: "Butterscotch Cake",
    price: 1000,
    image: "/placeholder.svg",
    category: "Classic",
    sizes: ["1kg", "2kg", "3kg"],
    description: "Sweet butterscotch flavored cake"
  },
  {
    id: 6,
    name: "Pineapple Cake",
    price: 950,
    image: "/placeholder.svg",
    category: "Fruit",
    sizes: ["1kg", "2kg", "3kg"],
    description: "Fresh pineapple upside-down cake"
  }
];

const categories = ["All", "Chocolate", "Fruit", "Premium", "Classic"];

const Cakes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSize, setSelectedSize] = useState<{ [key: number]: string }>({});
  const { addToCart } = useCart();

  const filteredCakes = cakesData.filter(cake => {
    const matchesSearch = cake.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || cake.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (cake: typeof cakesData[0]) => {
    const size = selectedSize[cake.id] || "1kg";
    addToCart({
      id: cake.id,
      name: cake.name,
      price: cake.price,
      image: cake.image,
      size: size
    });
  };

  const handleSizeChange = (cakeId: number, size: string) => {
    setSelectedSize(prev => ({
      ...prev,
      [cakeId]: size
    }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-babyPink-500 to-lightBrown-600 bg-clip-text text-transparent mb-4">
            Our Delicious Cakes
          </h1>
          <p className="text-lightBrown-600 text-lg">
            Discover our wide range of freshly baked cakes for every occasion
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search cakes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${
                  selectedCategory === category 
                    ? 'bg-babyPink-500 text-white' 
                    : 'hover:bg-babyPink-100'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Cakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCakes.map(cake => (
            <div key={cake.id} className="cake-card p-6">
              <div className="aspect-square bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🧁</span>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-lightBrown-800">{cake.name}</h3>
                  <p className="text-sm text-lightBrown-600">{cake.description}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-babyPink-600">₹{cake.price}</span>
                  <Badge variant="outline" className="text-xs">
                    {cake.category}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-lightBrown-700">Size:</label>
                  <div className="flex gap-2">
                    {cake.sizes.map(size => (
                      <Button
                        key={size}
                        variant={selectedSize[cake.id] === size ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleSizeChange(cake.id, size)}
                        className={selectedSize[cake.id] === size ? 'bg-babyPink-500' : ''}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleAddToCart(cake)}
                  className="btn-primary w-full"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredCakes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lightBrown-600 text-lg">
              No cakes found matching your criteria.
            </p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Cakes;
