import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CreditCard, Lock, Gift, ArrowRight, Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/src/context/CartContext';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { motion } from 'motion/react';

export const Checkout: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();
  const deliveryFee = 4.50;
  const taxes = subtotal * 0.1;
  const total = subtotal + deliveryFee + taxes;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Your cart is empty</h1>
        <p className="text-zinc-500 mb-8">Add some delicious items to get started.</p>
        <Link to="/restaurants">
          <Button className="bg-primary hover:bg-primary-dim text-white px-8 py-6 rounded-xl font-bold">
            Browse Restaurants
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">Review your order</h1>
        <p className="text-zinc-500 font-medium">Step 3 of 3: Secure Checkout</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Checkout Details */}
        <div className="lg:col-span-8 space-y-12">
          {/* 1. Order Summary Section */}
          <section className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Order Summary</h2>
              <Badge variant="secondary" className="bg-primary/10 text-primary font-bold px-3 py-1">
                {cart.length} ITEMS
              </Badge>
            </div>
            
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-6 bg-white p-4 rounded-xl shadow-sm border border-zinc-50">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 object-cover rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900">{item.name}</h3>
                        <p className="text-sm text-zinc-500">{item.category}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-zinc-400 hover:text-red-500"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-4 bg-zinc-100 p-1 rounded-full">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="w-8 h-8 rounded-full bg-white text-primary shadow-sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="font-bold text-sm">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="w-8 h-8 rounded-full bg-white text-primary shadow-sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <span className="font-bold text-lg text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Delivery Address Section */}
          <section className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Delivery Address</h2>
              <Button variant="link" className="text-primary font-bold text-sm p-0">Change</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold text-lg">Work Studio</p>
                    <p className="text-zinc-500 leading-relaxed">422 Editorial Lane, Floor 4<br />Gastronomy District, NY 10012</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-zinc-50">
                  <Lock className="w-4 h-4 text-zinc-400" />
                  <p className="text-sm text-zinc-500 italic">"Gate code: 1234. Please leave at front desk."</p>
                </div>
              </div>
              
              <div className="relative h-48 rounded-xl overflow-hidden bg-zinc-200">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzYeavLmx9SciFe_VylMMZs4-g8e97EInoZc-hQN9j0edDox5y2LcAeIe_GkNql--oj4Licf1oG3x0KIKq5Y74AXIwEAxN8-oUnospby1Z3RjifZSls7sw_MnxbaKYrfM68QfZtHgT6FLFQnDfLjUIqQb8esjCHQLwnmKaWE_RJgk_QncQwDQCIb-MsgFIST0PUW4cENgj_FLKCsvhGvHxi3ZhuykoNOyOTjdQf_ujCeQBKaxNZQiLNlG8_j0gOqJb-pYVFLPMXqKF" 
                  alt="Map Preview" 
                  className="w-full h-full object-cover grayscale opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="text-primary w-10 h-10 fill-current" />
                </div>
              </div>
            </div>
          </section>

          {/* 3. Payment Method Section */}
          <section className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Payment Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Apple Pay */}
              <div className="relative group cursor-pointer border-2 border-primary bg-white p-6 rounded-2xl flex items-center justify-between transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center rounded-lg">
                    <span className="text-white font-bold text-lg"></span>
                  </div>
                  <div>
                    <p className="font-bold">Apple Pay</p>
                    <p className="text-xs text-zinc-500">Default Payment</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
              </div>
              
              {/* Credit Card */}
              <div className="relative group cursor-pointer border-2 border-transparent bg-zinc-100 p-6 rounded-2xl flex items-center justify-between transition-all hover:bg-white hover:border-zinc-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-200 flex items-center justify-center rounded-lg">
                    <CreditCard className="w-6 h-6 text-zinc-500" />
                  </div>
                  <div>
                    <p className="font-bold">Visa •••• 4242</p>
                    <p className="text-xs text-zinc-500">Expires 12/26</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-zinc-300"></div>
              </div>
            </div>
            <Button variant="link" className="mt-6 p-0 text-primary font-bold text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add New Payment Method
            </Button>
          </section>
        </div>

        {/* Right Column: Order Summary & Checkout */}
        <aside className="lg:col-span-4 lg:sticky lg:top-28">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-100">
            <h2 className="text-xl font-bold mb-8">Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-zinc-500">
                <span>Subtotal</span>
                <span className="font-medium text-zinc-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>Delivery Fee</span>
                <span className="font-medium text-zinc-900">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>Taxes & Fees</span>
                <span className="font-medium text-zinc-900">${taxes.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="pt-4 flex justify-between items-end">
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Total Amount</p>
                  <p className="text-3xl font-extrabold text-primary">${total.toFixed(2)}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button className="w-full py-8 bg-primary hover:bg-primary-dim text-white font-bold rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all text-lg flex items-center justify-center gap-3">
                Place Order
                <ArrowRight className="w-5 h-5" />
              </Button>
              <div className="flex items-center justify-center gap-2 text-zinc-400 text-xs">
                <Lock className="w-3 h-3" />
                Secure encrypted transaction
              </div>
            </div>

            {/* Promotional Section */}
            <div className="mt-8 pt-8 border-t border-zinc-100">
              <div className="bg-orange-50 p-4 rounded-xl flex items-center gap-4">
                <Gift className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-sm font-bold text-primary">Promo Code Applied!</p>
                  <p className="text-xs text-primary/80">Free delivery for Editorial Members.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 px-4">
            <p className="text-sm text-center text-zinc-500">
              Need help with your order? <a href="#" className="text-primary font-bold underline">Contact Support</a>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};
