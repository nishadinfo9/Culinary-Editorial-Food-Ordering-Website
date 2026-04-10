import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Pizza, UtensilsCrossed, Beef, IceCream, Star, ArrowRight, MousePointerClick, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  const categories = [
    { name: 'Pizza', icon: Pizza, color: 'bg-secondary-container/20' },
    { name: 'Sushi', icon: UtensilsCrossed, color: 'bg-tertiary-container/40' },
    { name: 'Burgers', icon: Beef, color: 'bg-orange-100' },
    { name: 'Desserts', icon: IceCream, color: 'bg-pink-50' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9i-_s5b5vZwlyKY37HrjVE7ABksIby45qsitSKozhUsMDtkPjgcfoNY2RfwCWKMxqOkCYYtWrb1wzF42LexncCo6FbuRUDsf_bwOM-eHrevNu_6mleDHRg7--0UPiMyDhFiRTrvje5_KxFPXQEEpUn5mQB_qE10mILeRYpfIWE7RxHgsd6DxirLXUpIYEeBYScaQ4QTO80n0gxpS44gcXWd11inDx1q6T4KbIdFgr5TC0CDvmNVedAmrKXs3_wNHNJ7FHpSN4DDlg"
            alt="Gourmet Platter"
            className="w-full h-full object-cover brightness-[0.6]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-8 drop-shadow-xl"
          >
            Crave it. <span className="text-primary-fixed">Order it.</span> Enjoy it.
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/90 backdrop-blur-md p-2 md:p-3 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-2xl mx-auto border border-white/20"
          >
            <div className="flex items-center gap-3 px-4 flex-1 w-full">
              <MapPin className="text-primary w-5 h-5" />
              <Input 
                className="bg-transparent border-none focus-visible:ring-0 text-on-surface placeholder:text-zinc-400 py-6 text-lg"
                placeholder="Enter delivery address"
              />
            </div>
            <Link to="/restaurants" className="w-full md:w-auto">
              <Button className="w-full md:w-auto bg-primary hover:bg-primary-dim text-white px-8 py-7 rounded-xl font-headline font-bold text-lg shadow-lg">
                Find Food
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-24 px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="font-headline text-primary font-bold tracking-widest text-xs uppercase">Curated Collections</span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tighter text-on-surface mt-2">Popular Categories</h2>
          </div>
          <Button variant="link" className="text-primary font-semibold text-lg hover:underline decoration-2 underline-offset-4">
            View All Cuisines
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              whileHover={{ y: -8 }}
              className="group cursor-pointer bg-white rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-xl relative overflow-hidden border border-zinc-100"
            >
              <div className={`absolute -top-4 -right-4 w-24 h-24 ${cat.color} rounded-full transition-transform group-hover:scale-150 duration-700`}></div>
              <cat.icon className="w-12 h-12 text-primary relative z-10" />
              <span className="font-headline font-bold text-lg relative z-10">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-surface-container py-24 px-8 rounded-[3rem] mx-4 md:mx-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-headline text-primary font-bold tracking-widest text-xs uppercase">Simple Rituals</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mt-2">How it Works</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Discover', icon: Search, desc: 'Explore curated menus from top-tier local restaurants and hidden culinary gems.' },
              { title: 'Select & Order', icon: MousePointerClick, desc: 'Choose your favorites and customize every detail with our intuitive interface.' },
              { title: 'Savor the Moment', icon: Utensils, desc: 'Our precise tracking ensures your meal arrives fresh and plated in its prime.' },
            ].map((step) => (
              <div key={step.title} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-zinc-500 font-body leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 min-h-[600px]">
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-2xl overflow-hidden relative group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsT5WRpXvpoU32ThQXtuLbmzirJLpVma2LPShHzdbV5zixvp3RQejp4s_tKeUfHxYpoY8vzSIyyQ3cOxCO3vn9lK14lndaWlWLte1HpqjujuM0HZKHy10dGlErGNET7l5-37H6ccqfywu3N0fqsCzJdOpHaxL7D_9-BJTBnholWQ1vEL5a9suSCytpDNBls5g540kPAnQSiWz6Oaq3xhUUPGghQZ7FqwAAc-Rd3xiZiQDbo1Dxz19W81u1RFztlrtckiQT4ebjupJV"
              alt="Fresh Salad"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit mb-3">Trending Now</span>
              <h3 className="font-headline text-3xl font-extrabold text-white mb-2">The Zen Garden Bowl</h3>
              <p className="text-white/80 font-body max-w-md">Our chef's seasonal masterpiece, featuring locally sourced greens and artisanal citrus vinaigrette.</p>
            </div>
          </div>
          
          <div className="bg-primary text-white rounded-2xl p-8 flex flex-col justify-between group cursor-pointer hover:bg-primary-dim transition-colors">
            <Star className="w-10 h-10" />
            <div>
              <h3 className="font-headline text-xl font-bold mb-2">First Order Offer</h3>
              <p className="text-white/80 font-body text-sm">Enjoy 20% off your inaugural culinary experience with code CULINARY20.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 flex flex-col justify-between border border-zinc-100 shadow-sm overflow-hidden relative">
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <Star className="w-32 h-32" />
            </div>
            <div className="flex gap-1 text-secondary">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <div>
              <h3 className="font-headline text-lg font-bold mb-2">5-Star Quality</h3>
              <p className="text-zinc-500 font-body text-sm leading-relaxed">Rated "The most elegant ordering experience" by Modern Epicurean.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
