import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, MapPin, Search, Menu as MenuIcon, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/src/context/CartContext';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { totalItems } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Browse', path: '/restaurants' },
    { name: 'Offers', path: '#' },
    { name: 'Near Me', path: '#' },
  ];

  return (
    <div className="min-h-screen bg-background font-body antialiased flex flex-col">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-container">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-12">
            <Link to="/" className="text-2xl font-extrabold tracking-tighter text-zinc-900 font-headline">
              Culinary Editorial
            </Link>
            <nav className="hidden md:flex gap-8 items-center font-headline text-sm font-medium tracking-tight">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 text-zinc-600 hover:bg-zinc-100 transition-colors duration-300 rounded-lg cursor-pointer">
              <MapPin className="w-4 h-4" />
              <span className="text-xs font-semibold">New York, NY</span>
            </div>
            
            <Link to="/checkout">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-[10px]">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            <Avatar className="w-10 h-10 border-2 border-primary-container cursor-pointer">
              <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk0armcfP2qWEnR64_NGurEOwR-yPrMOlMJccZj0zSe0y2svhC4OZl7vgWXAVasEgZGRMGVx6iGZo6w_Xn4-fcJwHwJtwwy-L4PJMgHiMjPI-xr4K_ulP0mEkfud5_Aq9ABFFXA1pH_hVhxvp8AmgSNnO0o3XdylYy9zPoPn8fDxUH-d0GvpdcgkqZyQ-VQHs1s0jD8WYTrn1AX8Xewpm2zi4Smz2iYrbjE3C08gxquW7YDl27rKJBCj0wU96LwYlauIKPrkvNlObG" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <MenuIcon className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetTitle>Menu</SheetTitle>
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-lg font-bold hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-[2rem] mt-12 bg-zinc-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-12 py-16 max-w-7xl mx-auto">
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg font-bold text-zinc-900 font-headline">Culinary Editorial</span>
            <p className="mt-4 text-zinc-500 font-body text-xs leading-relaxed max-w-xs">
              Curating the world's finest culinary experiences, delivered directly to your doorstep with uncompromising style.
            </p>
          </div>
          <div>
            <h4 className="font-headline text-sm font-bold mb-4">Discover</h4>
            <ul className="space-y-3 font-body text-xs leading-relaxed text-zinc-500">
              <li><a className="hover:underline hover:text-primary" href="#">About Us</a></li>
              <li><a className="hover:underline hover:text-primary" href="#">Press</a></li>
              <li><a className="hover:underline hover:text-primary" href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline text-sm font-bold mb-4">Support</h4>
            <ul className="space-y-3 font-body text-xs leading-relaxed text-zinc-500">
              <li><a className="hover:underline hover:text-primary" href="#">Help Center</a></li>
              <li><a className="hover:underline hover:text-primary" href="#">Privacy Policy</a></li>
              <li><a className="hover:underline hover:text-primary" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-headline text-sm font-bold mb-4">Join Our Journey</h4>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <User className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="px-12 py-8 border-t border-zinc-200 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-body text-xs leading-relaxed text-zinc-500">© 2024 Culinary Editorial. All rights reserved.</span>
          <div className="flex gap-6 text-xs text-zinc-500">
            <span>Designed with passion for flavor.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
