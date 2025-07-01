
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Categories = () => {
  const categories = [
    {
      name: 'Birthday Cakes',
      description: 'Perfect cakes for birthday celebrations',
      image: '/placeholder.svg',
      count: 45
    },
    {
      name: 'Wedding Cakes',
      description: 'Elegant cakes for your special day',
      image: '/placeholder.svg',
      count: 32
    },
    {
      name: 'Cupcakes',
      description: 'Individual treats for any occasion',
      image: '/placeholder.svg',
      count: 28
    },
    {
      name: 'Pastries',
      description: 'Fresh and delicious pastries',
      image: '/placeholder.svg',
      count: 56
    },
    {
      name: 'Custom Cakes',
      description: 'Personalized cakes made to order',
      image: '/placeholder.svg',
      count: 23
    },
    {
      name: 'Sugar-Free',
      description: 'Healthy options without compromising taste',
      image: '/placeholder.svg',
      count: 18
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bakery">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-babyPink-500 to-lightBrown-600 bg-clip-text text-transparent mb-4">
            Browse Categories
          </h1>
          <p className="text-lightBrown-700 text-lg max-w-2xl mx-auto">
            Discover our wide range of cake categories to find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl text-lightBrown-800">
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lightBrown-600 mb-4">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-babyPink-500 font-medium">
                    {category.count} items
                  </span>
                  <span className="text-babyPink-500 hover:text-babyPink-600 font-medium cursor-pointer">
                    View All →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
