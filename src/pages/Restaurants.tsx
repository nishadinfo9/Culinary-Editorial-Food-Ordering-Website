import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Truck, ArrowRight, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RESTAURANTS } from '@/src/lib/data';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

export const Restaurants: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRestaurants = RESTAURANTS.filter(r => 
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col lg:flex-row gap-12">
      {/* Sidebar Filters */}
      <aside className="w-64 flex-shrink-0 hidden lg:block">
        <div className="sticky top-28 space-y-10">
          <h2 className="font-headline text-2xl font-bold tracking-tight mb-8">Filters</h2>
          
          <section>
            <h3 className="text-primary font-bold tracking-widest uppercase text-[10px] mb-4">Cuisine</h3>
            <div className="space-y-3">
              {['Italian', 'French', 'Japanese', 'Contemporary'].map((cuisine) => (
                <label key={cuisine} className="flex items-center gap-3 group cursor-pointer">
                  <input type="checkbox" className="rounded-sm border-zinc-300 text-primary focus:ring-primary" />
                  <span className="text-sm font-medium text-zinc-600 group-hover:text-primary transition-colors">{cuisine}</span>
                </label>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-primary font-bold tracking-widest uppercase text-[10px] mb-4">Price Range</h3>
            <div className="flex gap-2">
              {['$', '$$', '$$$', '$$$$'].map((price) => (
                <Button key={price} variant="outline" size="sm" className="flex-1 font-bold text-xs hover:border-primary">
                  {price}
                </Button>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-primary font-bold tracking-widest uppercase text-[10px] mb-4">Dietary</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-secondary-fixed text-on-secondary-fixed font-bold text-[10px] px-3 py-1">VEGAN</Badge>
              <Badge variant="outline" className="text-[10px] font-bold px-3 py-1">GLUTEN FREE</Badge>
              <Badge variant="outline" className="text-[10px] font-bold px-3 py-1">ORGANIC</Badge>
            </div>
          </section>

          <Button className="w-full mt-8 py-6 bg-primary hover:bg-primary-dim text-white font-bold rounded-xl shadow-md transition-all text-sm">
            Apply Filters
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Sort and Header */}
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-2">Curated Dining</h1>
            <p className="text-zinc-500 font-light text-lg">Exploring {filteredRestaurants.length} exceptional kitchens in your area.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
              <Input 
                className="pl-10 rounded-full bg-zinc-100 border-none w-64 focus-visible:ring-primary/20"
                placeholder="Search restaurants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 p-1 bg-zinc-100 rounded-xl">
              <Button variant="ghost" size="sm" className="bg-white shadow-sm text-xs font-bold">Popular</Button>
              <Button variant="ghost" size="sm" className="text-xs font-bold text-zinc-500">Rating</Button>
              <Button variant="ghost" size="sm" className="text-xs font-bold text-zinc-500">Nearest</Button>
            </div>
          </div>
        </header>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRestaurants.map((res) => (
            <motion.article 
              key={res.id}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-[1.5rem] overflow-hidden transition-all duration-500 border border-zinc-100 shadow-sm"
            >
              <Link to={`/restaurant/${res.id}`}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={res.image} 
                    alt={res.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Star className="w-3 h-3 text-primary fill-current" />
                    <span className="text-xs font-bold text-zinc-900">{res.rating}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <h3 className="font-headline text-2xl font-bold text-zinc-900 group-hover:text-primary transition-colors">{res.name}</h3>
                      <p className="text-zinc-500 text-sm mt-1">{res.cuisine} • {res.location}</p>
                    </div>
                    <Badge variant="secondary" className="bg-tertiary-container text-on-tertiary-container font-bold text-[10px]">
                      {res.priceRange}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-zinc-400" />
                        <span className="text-xs font-medium text-zinc-500">{res.deliveryTime}</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-zinc-300"></div>
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-zinc-400" />
                        <span className="text-xs font-medium text-zinc-500">
                          {res.deliveryFee === 0 ? 'Free Delivery' : `$${res.deliveryFee} Delivery`}
                        </span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-sm font-medium text-zinc-500">Showing {filteredRestaurants.length} of 128 curated restaurants</p>
          <Button variant="outline" className="px-8 py-6 rounded-full border-zinc-200 text-sm font-bold hover:bg-zinc-50 transition-all">
            Load More Selections
          </Button>
        </div>
      </div>
    </div>
  );
};
