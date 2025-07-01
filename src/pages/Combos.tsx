
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Combos = () => {
  const combos = [
    {
      name: 'Birthday Bash Combo',
      description: '1 Birthday Cake + 12 Cupcakes + Party Decorations',
      originalPrice: 2500,
      comboPrice: 1999,
      discount: 20,
      image: '/placeholder.svg',
      items: ['Custom Birthday Cake (1kg)', '12 Assorted Cupcakes', 'Birthday Candles', 'Party Hat Set']
    },
    {
      name: 'Sweet Celebration Pack',
      description: '2 Mini Cakes + 6 Pastries + Gift Box',
      originalPrice: 1800,
      comboPrice: 1399,
      discount: 22,
      image: '/placeholder.svg',
      items: ['2 Mini Chocolate Cakes', '6 Mixed Pastries', 'Premium Gift Box', 'Greeting Card']
    },
    {
      name: 'Office Party Special',
      description: '1 Large Cake + 24 Cupcakes + Beverages',
      originalPrice: 3500,
      comboPrice: 2799,
      discount: 20,
      image: '/placeholder.svg',
      items: ['Large Office Cake (2kg)', '24 Corporate Cupcakes', '4 Cold Beverages', 'Disposable Plates & Forks']
    },
    {
      name: 'Weekend Family Treat',
      description: '1 Family Cake + 8 Donuts + Tea/Coffee',
      originalPrice: 1200,
      comboPrice: 899,
      discount: 25,
      image: '/placeholder.svg',
      items: ['Family Size Vanilla Cake', '8 Glazed Donuts', 'Tea/Coffee for 4', 'Family Napkins Set']
    },
    {
      name: 'Romantic Date Night',
      description: '2 Heart Cakes + Chocolate Box + Wine',
      originalPrice: 2200,
      comboPrice: 1699,
      discount: 23,
      image: '/placeholder.svg',
      items: ['2 Heart-shaped Mini Cakes', 'Premium Chocolate Box', 'Sparkling Grape Juice', 'Rose Petals']
    },
    {
      name: 'Kids Special Combo',
      description: '1 Cartoon Cake + 6 Cookies + Juice Boxes',
      originalPrice: 1500,
      comboPrice: 1199,
      discount: 20,
      image: '/placeholder.svg',
      items: ['Custom Cartoon Cake', '6 Decorated Cookies', '4 Juice Boxes', 'Cartoon Stickers']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bakery">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-babyPink-500 to-lightBrown-600 bg-clip-text text-transparent mb-4">
            Special Combos
          </h1>
          <p className="text-lightBrown-700 text-lg max-w-2xl mx-auto">
            Save more with our carefully curated combo packages perfect for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {combos.map((combo, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
              <CardHeader className="relative">
                <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                  {combo.discount}% OFF
                </Badge>
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl text-lightBrown-800">
                  {combo.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lightBrown-600">{combo.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-lightBrown-800">Includes:</h4>
                  <ul className="text-sm text-lightBrown-600 space-y-1">
                    {combo.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-babyPink-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-babyPink-500">
                        ₹{combo.comboPrice}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ₹{combo.originalPrice}
                      </span>
                    </div>
                    <p className="text-sm text-green-600 font-medium">
                      You save ₹{combo.originalPrice - combo.comboPrice}
                    </p>
                  </div>
                </div>

                <Button className="w-full btn-primary">
                  Add Combo to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Combos;
