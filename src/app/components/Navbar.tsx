import { ShoppingCart, Menu, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [cartCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="text-2xl tracking-tight font-light">Tm</h1>
            <div className="h-6 w-1 bg-[#FF3232]" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="hover:text-[#FF3232] transition-colors">Нүүр</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-[#FF3232] transition-colors">Бүтээгдэхүүн</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-[#FF3232] transition-colors">Онцлог</button>
            <button onClick={() => scrollToSection('footer')} className="hover:text-[#FF3232] transition-colors">Холбоо барих</button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="hover:text-[#FF3232] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="relative hover:text-[#FF3232] transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FF3232] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden hover:text-[#FF3232] transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}