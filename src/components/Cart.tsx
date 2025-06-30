
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingCart, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalAmount, getTotalItems } = useCart();
  const [showQR, setShowQR] = useState(false);
  const [orderNumber] = useState(() => Math.floor(Math.random() * 10000) + 1000);
  
  const totalAmount = getTotalAmount();

  // Generate UPI payment link
  const generateUPILink = () => {
    const upiID = 'cakestore@okaxis';
    const payeeName = 'CakeNest';
    const amount = totalAmount.toFixed(2);
    const note = `Order Payment #${orderNumber}`;
    const currency = 'INR';
    
    return `upi://pay?pa=${upiID}&pn=${encodeURIComponent(payeeName)}&am=${amount}&tn=${encodeURIComponent(note)}&cu=${currency}`;
  };

  const handleUPIPayment = () => {
    const upiLink = generateUPILink();
    console.log('Generated UPI Link:', upiLink);
    
    // For mobile devices, try to open UPI apps
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = upiLink;
    } else {
      // For desktop, show QR code
      setShowQR(true);
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingCart className="w-16 h-16 mx-auto text-lightBrown-400 mb-4" />
        <h3 className="text-xl font-semibold text-lightBrown-800 mb-2">Your cart is empty</h3>
        <p className="text-lightBrown-600">Add some delicious cakes to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-lightBrown-800">Shopping Cart</h2>
        <Badge variant="secondary" className="text-lg px-3 py-1">
          {getTotalItems()} items
        </Badge>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <Card key={`${item.id}-${item.size}`} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lightBrown-800">{item.name}</h3>
                  <p className="text-sm text-lightBrown-600">Size: {item.size}</p>
                  <p className="text-babyPink-600 font-bold">₹{item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-8 text-center font-semibold">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cart Total and Payment */}
      <Card className="bg-gradient-to-r from-cream-50 to-babyPink-50 border-2 border-babyPink-200">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-lightBrown-800">
            Order Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold">Total Amount:</span>
            <span className="text-2xl font-bold text-babyPink-600">₹{totalAmount.toFixed(2)}</span>
          </div>
          
          <div className="space-y-3">
            <Button
              onClick={handleUPIPayment}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 text-lg"
            >
              Pay with UPI - ₹{totalAmount.toFixed(2)}
            </Button>
            
            <Button
              onClick={() => setShowQR(!showQR)}
              variant="outline"
              className="w-full border-2 border-babyPink-300 text-babyPink-600 hover:bg-babyPink-50"
            >
              <QrCode className="w-5 h-5 mr-2" />
              {showQR ? 'Hide QR Code' : 'Show QR Code for Payment'}
            </Button>
          </div>

          {showQR && (
            <Card className="p-6 text-center bg-white">
              <CardContent>
                <h3 className="font-semibold mb-4 text-lightBrown-800">
                  Scan to Pay ₹{totalAmount.toFixed(2)}
                </h3>
                <div className="flex justify-center mb-4">
                  <QRCodeSVG 
                    value={generateUPILink()} 
                    size={200}
                    bgColor="#ffffff"
                    fgColor="#000000"
                  />
                </div>
                <p className="text-sm text-lightBrown-600">
                  Scan this QR code with any UPI app<br />
                  (Google Pay, PhonePe, Paytm)
                </p>
                <div className="mt-4 p-3 bg-cream-100 rounded-lg">
                  <p className="text-xs text-lightBrown-700">
                    <strong>Order #:</strong> {orderNumber}<br />
                    <strong>Amount:</strong> ₹{totalAmount.toFixed(2)} (Fixed)
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Cart;
