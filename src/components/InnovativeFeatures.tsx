
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const InnovativeFeatures = () => {
  const features = [
    {
      id: 1,
      title: "🎥 Cake Live Cam",
      subtitle: "Watch Your Cake Being Made",
      description: "Get a live stream of your cake being prepared in our premium kitchen. Watch our master bakers craft your perfect cake in real-time!",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Premium Feature",
      action: "Watch Demo",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      id: 2,
      title: "🎙️ Cake Voice Notes",
      subtitle: "Send Audio Messages",
      description: "Record a personal voice message that gets converted to a QR code and printed on your cake box. The recipient scans to hear your heartfelt message!",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Unique Experience",
      action: "Try Now",
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 3,
      title: "🎭 Mood-Based Recommender",
      subtitle: "Cakes That Match Your Vibe",
      description: "Feeling heartbroken? Celebrating success? Or just need comfort food? Our AI suggests the perfect cake with witty messages for your current mood!",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "AI Powered",
      action: "Find My Cake",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      id: 4,
      title: "🎁 Order a Surprise",
      subtitle: "Anonymous Gift Delivery",
      description: "Send surprise cakes anonymously! Just enter the recipient's number and location. They'll receive an OTP for delivery confirmation. Pure joy guaranteed!",
      image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Surprise Feature",
      action: "Send Surprise",
      gradient: "from-pink-400 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-babyPink-50 via-white to-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-lightBrown-800 mb-6">
            Innovative <span className="bg-gradient-to-r from-babyPink-500 to-purple-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-lightBrown-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of cake ordering with our groundbreaking features that make every celebration extra special
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className="cake-card overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Badge */}
                <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${feature.gradient} text-white font-semibold px-3 py-1`}>
                  {feature.badge}
                </Badge>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-cream-100 font-medium">{feature.subtitle}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-lightBrown-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="flex gap-3">
                  <Button className={`flex-1 bg-gradient-to-r ${feature.gradient} hover:opacity-90 text-white font-semibold`}>
                    {feature.action}
                  </Button>
                  <Button variant="outline" className="border-cream-300 text-lightBrown-700 hover:bg-cream-50">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-babyPink-100 to-cream-100 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-lightBrown-800 mb-4">
              Ready to Experience the Future of Cake Ordering?
            </h3>
            <p className="text-lightBrown-600 mb-6 text-lg">
              Join thousands of happy customers who have already discovered these amazing features
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-lg px-8 py-3">
                🚀 Try All Features
              </Button>
              <Button className="btn-secondary text-lg px-8 py-3">
                📞 Schedule Demo Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeFeatures;
