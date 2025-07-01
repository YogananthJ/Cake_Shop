
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

const specialOccasions = [
  {
    id: 1,
    occasion: "Birthday Party",
    description: "Make birthdays extra special with our custom birthday cakes",
    cakes: [
      { id: 101, name: "Rainbow Birthday Cake", price: 1500, image: "/placeholder.svg", size: "2kg" },
      { id: 102, name: "Cartoon Character Cake", price: 1800, image: "/placeholder.svg", size: "2kg" },
      { id: 103, name: "Number Cake", price: 1600, image: "/placeholder.svg", size: "1.5kg" }
    ],
    color: "from-pink-400 to-purple-500"
  },
  {
    id: 2,
    occasion: "Anniversary",
    description: "Celebrate love with our romantic anniversary cake collection",
    cakes: [
      { id: 201, name: "Heart Shaped Red Velvet", price: 1700, image: "/placeholder.svg", size: "1.5kg" },
      { id: 202, name: "Two Tier Anniversary Cake", price: 2500, image: "/placeholder.svg", size: "3kg" },
      { id: 203, name: "Photo Anniversary Cake", price: 2000, image: "/placeholder.svg", size: "2kg" }
    ],
    color: "from-red-400 to-pink-500"
  },
  {
    id: 3,
    occasion: "Wedding",
    description: "Beautiful multi-tier wedding cakes for your special day",
    cakes: [
      { id: 301, name: "3-Tier Wedding Cake", price: 5000, image: "/placeholder.svg", size: "5kg" },
      { id: 302, name: "Floral Wedding Cake", price: 4500, image: "/placeholder.svg", size: "4kg" },
      { id: 303, name: "Elegant White Wedding Cake", price: 4000, image: "/placeholder.svg", size: "4kg" }
    ],
    color: "from-white to-cream-300"
  },
  {
    id: 4,
    occasion: "Graduation",
    description: "Celebrate academic achievements with themed graduation cakes",
    cakes: [
      { id: 401, name: "Graduation Cap Cake", price: 1400, image: "/placeholder.svg", size: "2kg" },
      { id: 402, name: "Book Stack Cake", price: 1600, image: "/placeholder.svg", size: "2.5kg" },
      { id: 403, name: "Diploma Scroll Cake", price: 1500, image: "/placeholder.svg", size: "2kg" }
    ],
    color: "from-blue-400 to-indigo-500"
  },
  {
    id: 5,
    occasion: "Baby Shower",
    description: "Welcome the little one with adorable baby shower cakes",
    cakes: [
      { id: 501, name: "Baby Cradle Cake", price: 1800, image: "/placeholder.svg", size: "2kg" },
      { id: 502, name: "Baby Bottle Cake", price: 1600, image: "/placeholder.svg", size: "1.5kg" },
      { id: 503, name: "Gender Reveal Cake", price: 1700, image: "/placeholder.svg", size: "2kg" }
    ],
    color: "from-yellow-300 to-orange-400"
  },
  {
    id: 6,
    occasion: "Corporate Events",
    description: "Professional cakes for corporate celebrations and events",
    cakes: [
      { id: 601, name: "Company Logo Cake", price: 2200, image: "/placeholder.svg", size: "3kg" },
      { id: 602, name: "Achievement Award Cake", price: 1900, image: "/placeholder.svg", size: "2.5kg" },
      { id: 603, name: "Team Celebration Cake", price: 2000, image: "/placeholder.svg", size: "3kg" }
    ],
    color: "from-gray-400 to-slate-500"
  }
];

const SpecialOccasions = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (cake: any, occasion: string) => {
    addToCart({
      id: cake.id,
      name: `${cake.name} (${occasion})`,
      price: cake.price,
      image: cake.image,
      size: cake.size
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-babyPink-500 to-lightBrown-600 bg-clip-text text-transparent mb-4">
            Special Occasions
          </h1>
          <p className="text-lightBrown-600 text-lg max-w-2xl mx-auto">
            Make every moment memorable with our specially crafted cakes for life's most important celebrations
          </p>
        </div>

        <div className="space-y-12">
          {specialOccasions.map(occasion => (
            <div key={occasion.id} className="space-y-6">
              <div className="text-center">
                <h2 className={`text-3xl font-bold bg-gradient-to-r ${occasion.color} bg-clip-text text-transparent mb-2`}>
                  {occasion.occasion}
                </h2>
                <p className="text-lightBrown-600">{occasion.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {occasion.cakes.map(cake => (
                  <Card key={cake.id} className="cake-card hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="aspect-square bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-6xl">🎂</span>
                      </div>
                      <CardTitle className="text-lg text-lightBrown-800">{cake.name}</CardTitle>
                      <CardDescription className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {cake.size}
                        </Badge>
                        <span className="text-xl font-bold text-babyPink-600">₹{cake.price}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        onClick={() => handleAddToCart(cake, occasion.occasion)}
                        className="btn-primary w-full"
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-cream-100 to-babyPink-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-lightBrown-800 mb-4">
            Need a Custom Cake?
          </h3>
          <p className="text-lightBrown-600 mb-6 max-w-2xl mx-auto">
            Have a specific design in mind? We offer custom cake design services for any occasion. 
            Contact us to discuss your requirements and make your celebration truly unique.
          </p>
          <Button className="btn-primary">
            Contact for Custom Orders
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SpecialOccasions;
