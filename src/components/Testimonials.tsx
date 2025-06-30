
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b9ce6b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "The Chocolate Truffle Supreme was absolutely divine! My daughter's birthday was made extra special. The live cam feature was so exciting - we watched the whole process!",
      occasion: "Birthday Party",
      cakeOrdered: "Chocolate Truffle Supreme"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Pune",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Surprised my wife with the voice note feature on our anniversary cake. She cried happy tears when she heard my message through the QR code. Simply magical! ❤️",
      occasion: "Anniversary",
      cakeOrdered: "Red Velvet Romance"
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Ahmedabad",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "The mood-based recommender is genius! I was feeling low after a bad day, and it suggested the perfect 'Comfort Chocolate Therapy' cake. It really lifted my spirits! 🍫",
      occasion: "Self Care",
      cakeOrdered: "Comfort Chocolate Therapy"
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Delhi",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Used the surprise delivery feature to send a cake to my mom on Mother's Day. The anonymous delivery and OTP system worked flawlessly. She was so surprised and happy!",
      occasion: "Mother's Day Surprise",
      cakeOrdered: "Classic Vanilla Delight"
    },
    {
      id: 5,
      name: "Meera Jain",
      location: "Bangalore",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      text: "Quality is outstanding! Fresh ingredients, beautiful presentation, and timely delivery. The Rainbow Unicorn cake made my daughter's party unforgettable. Thank you CakeNest! 🦄",
      occasion: "Kids Birthday",
      cakeOrdered: "Rainbow Unicorn Fantasy"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-lightBrown-800 mb-6">
            What Our <span className="bg-gradient-to-r from-babyPink-500 to-babyPink-600 bg-clip-text text-transparent">Happy Customers</span> Say
          </h2>
          <p className="text-lightBrown-600 text-lg max-w-2xl mx-auto">
            Real stories from real customers who made their celebrations memorable with CakeNest
          </p>
        </div>

        {/* Main testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="cake-card p-8 lg:p-12 text-center animate-fade-in-up">
            <CardContent className="space-y-6">
              {/* Customer image */}
              <div className="flex justify-center mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-cream-200"
                />
              </div>

              {/* Rating stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-xl lg:text-2xl text-lightBrown-700 leading-relaxed italic mb-6">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Customer details */}
              <div className="space-y-2">
                <div className="font-bold text-lightBrown-800 text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-lightBrown-600">
                  📍 {testimonials[currentTestimonial].location}
                </div>
                <div className="flex justify-center gap-4 text-sm">
                  <span className="bg-babyPink-100 text-babyPink-700 px-3 py-1 rounded-full">
                    {testimonials[currentTestimonial].occasion}
                  </span>
                  <span className="bg-cream-100 text-lightBrown-700 px-3 py-1 rounded-full">
                    {testimonials[currentTestimonial].cakeOrdered}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial navigation dots */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-babyPink-500 w-8'
                  : 'bg-cream-300 hover:bg-cream-400'
              }`}
            />
          ))}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="text-4xl font-bold text-babyPink-500 mb-2">4.9</div>
            <div className="text-sm text-lightBrown-600">Average Rating</div>
            <div className="flex justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-babyPink-500 mb-2">50K+</div>
            <div className="text-sm text-lightBrown-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-babyPink-500 mb-2">98%</div>
            <div className="text-sm text-lightBrown-600">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-babyPink-500 mb-2">25K+</div>
            <div className="text-sm text-lightBrown-600">5-Star Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
