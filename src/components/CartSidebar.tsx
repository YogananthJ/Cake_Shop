
import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Cart from './Cart';

const CartSidebar = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="relative">
          <ShoppingCart className="w-5 h-5" />
          {totalItems > 0 && (
            <Badge 
              className="absolute -top-2 -right-2 bg-babyPink-500 text-white min-w-[20px] h-5 flex items-center justify-center text-xs"
            >
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-lightBrown-800">Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <Cart />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
