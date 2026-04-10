import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, Truck, ShoppingCart, Plus, Minus, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RESTAURANTS } from '@/src/lib/data';
import { useCart } from '@/src/context/CartContext';
import { motion } from 'motion/react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

export const Menu: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = RESTAURANTS.find(r => r.id === id);
  const { cart, addToCart, updateQuantity, subtotal } = useCart();
  const [activeCategory, setActiveCategory] = useState(restaurant?.categories[0] || '');

  if (!restaurant) return <div className="p-20 text-center">Restaurant not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      {/* Restaurant Hero Info */}
      <section className="relative rounded-2xl overflow-hidden mb-12 bg-zinc-100 group h-80">
        <img 
          src={restaurant.heroImage} 
          className="w-full h-full object-cover brightness-75 transition-transform duration-700 group-hover:scale-105"
          alt={restaurant.name}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Badge className="bg-secondary-fixed text-on-secondary-fixed text-xs font-bold rounded-full mb-3 tracking-widest px-3 py-1">
                PREMIUM DINING
              </Badge>
              <h1 className="text-5xl font-extrabold text-white tracking-tighter mb-2">{restaurant.name}</h1>
              <div className="flex items-center gap-4 text-white/90 font-medium">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-secondary-fixed fill-current" />
                  <span>{restaurant.rating} ({restaurant.reviews / 1000}k reviews)</span>
                </div>
                <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                <div className="flex items-center gap-1">
                  <Truck className="w-4 h-4" />
                  <span>{restaurant.deliveryFee === 0 ? 'Free Delivery' : `$${restaurant.deliveryFee} Delivery`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Menu Content Area */}
        <div className="flex-1 w-full">
          {/* Category Navigation */}
          <div className="sticky top-[88px] z-40 bg-background/95 backdrop-blur-md py-4 mb-8 overflow-x-auto no-scrollbar">
            <div className="flex gap-4 min-w-max">
              {restaurant.categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? 'default' : 'secondary'}
                  className={`rounded-full px-6 font-semibold transition-all ${
                    activeCategory === cat ? 'bg-primary text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {activeCategory === cat && <span className="w-2 h-2 bg-white rounded-full mr-2" />}
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Food Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restaurant.menu
              .filter(item => item.category === activeCategory)
              .map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-zinc-100"
                >
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={item.image} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt={item.name}
                      referrerPolicy="no-referrer"
                    />
                    {item.popular && (
                      <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-primary tracking-tighter">
                        POPULAR
                      </Badge>
                    )}
                    {item.vegetarian && (
                      <Badge className="absolute top-4 left-4 bg-green-500/90 backdrop-blur px-3 py-1 text-xs font-bold text-white tracking-tighter">
                        VEGETARIAN
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-zinc-900">{item.name}</h3>
                      <span className="text-lg font-extrabold text-primary">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-8 h-10 line-clamp-2">
                      {item.description}
                    </p>
                    <Button 
                      onClick={() => addToCart(item)}
                      className="w-full py-6 rounded-xl bg-primary hover:bg-primary-dim text-white font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </Button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Sticky 'Your Order' Sidebar */}
        <aside className="w-full lg:w-96 sticky top-[88px]">
          <div className="bg-zinc-50 rounded-2xl p-8 flex flex-col h-[calc(100vh-140px)] border border-zinc-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-extrabold tracking-tight">Your Order</h2>
              <Badge variant="secondary" className="bg-zinc-200 text-zinc-600 font-bold">
                {cart.length} items
              </Badge>
            </div>

            <ScrollArea className="flex-1 -mx-2 px-2">
              <div className="space-y-6">
                {cart.length === 0 ? (
                  <div className="text-center py-10 text-zinc-400">
                    <ShoppingCart className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p className="text-sm font-medium">Your cart is empty</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-zinc-100">
                        <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between font-bold text-sm mb-1">
                          <span className="line-clamp-1">{item.name}</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="w-6 h-6 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="text-sm font-bold">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="w-6 h-6 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>

            <div className="space-y-4 pt-6 mt-6 border-t border-zinc-200">
              <div className="flex justify-between text-zinc-500 text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-500 text-sm">
                <span>Delivery Fee</span>
                <span className="text-primary font-bold">FREE</span>
              </div>
              <Separator />
              <div className="flex justify-between items-end pt-2">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-extrabold text-primary">${subtotal.toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="block w-full">
                <Button 
                  disabled={cart.length === 0}
                  className="w-full py-7 rounded-xl bg-zinc-900 hover:bg-black text-white font-extrabold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
                >
                  Checkout
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
