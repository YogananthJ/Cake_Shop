import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getBirthdayCakesItems } from './BirthdayCakesItems';
import { getWeddingCakesItems } from './WeddingCakesItems';
import { getCupcakesItems } from './CupcakesItems';
import { getPastriesItems } from './Pastries';
import { getCustomCakesItems } from './Customcakes';
import { getSugarFreeItems } from './Sugarfree';

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

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState<null | typeof categories[0]>(null);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});

  // Generate detailed placeholder items for the selected category
  const getItemsForCategory = (category: typeof categories[0]) => {
    switch (category.name) {
      case 'Birthday Cakes':
        return getBirthdayCakesItems();
      case 'Wedding Cakes':
        return getWeddingCakesItems();
      case 'Cupcakes':
        return getCupcakesItems();
      case 'Pastries':
        return getPastriesItems();
      case 'Custom Cakes':
        return getCustomCakesItems();
      case 'Sugar-Free':
        return getSugarFreeItems();
      default:
        return [];
    }
  };

  // Handle size selection per item
  const handleSizeSelect = (itemIdx: number, size: string) => {
    setSelectedSizes(prev => ({ ...prev, [itemIdx]: size }));
  };

  return (
    <div className="min-h-screen bg-gradient-bakery">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-babyPink-500 to-lightBrown-600 bg-clip-text text-transparent mb-4">
            {selectedCategory ? selectedCategory.name : 'Browse Categories'}
          </h1>
          <p className="text-lightBrown-700 text-lg max-w-2xl mx-auto">
            {selectedCategory
              ? `Showing all items in "${selectedCategory.name}"`
              : "Discover our wide range of cake categories to find exactly what you're looking for"}
          </p>
        </div>

        {!selectedCategory ? (
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
                    <span
                      className="text-babyPink-500 hover:text-babyPink-600 font-medium cursor-pointer"
                      onClick={() => setSelectedCategory(category)}
                    >
                      View All →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <button
              className="mb-6 px-4 py-2 bg-babyPink-500 text-white rounded hover:bg-babyPink-600"
              onClick={() => setSelectedCategory(null)}
            >
              ← Back to Categories
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getItemsForCategory(selectedCategory).map((item, idx) => (
                <Card key={idx} className="bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40 object-cover rounded-lg mb-2"
                    />
                    <CardTitle className="text-lg text-lightBrown-800">
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lightBrown-600 mb-2">{item.description}</p>
                    <div className="mb-2">
                      <span className="font-semibold text-lightBrown-800">₹{item.price}</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-sm text-lightBrown-700">Flavor: {item.flavor}</span>
                    </div>
                    <div className="mb-2">
                      <span className="text-sm text-lightBrown-700 mr-2">Size:</span>
                      {item.sizes.map((size, sIdx) => (
                        <button
                          key={sIdx}
                          className={`px-2 py-1 rounded mr-2 text-xs ${
                            selectedSizes[idx] === size
                              ? 'bg-babyPink-500 text-white'
                              : 'bg-babyPink-100 text-babyPink-700 hover:bg-babyPink-200'
                          }`}
                          onClick={() => handleSizeSelect(idx, size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    <button className="mt-2 px-4 py-2 bg-babyPink-500 text-white rounded hover:bg-babyPink-600">
                      Add to Cart
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Categories;