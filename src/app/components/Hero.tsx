import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
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
    <div id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618677831741-6260a73ff4f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VyJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NjgxOTYzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Гутлын цуглуулга"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-7xl md:text-8xl mb-6 tracking-tight font-light">
          T&A shop
        </h1>
        <div className="h-1 w-32 bg-[#FF3232] mx-auto mb-8" />
        <p className="text-xl md:text-2xl mb-12 text-gray-200">
          udur bolgon hagassain
        </p>
        <button 
          onClick={scrollToProducts}
          className="bg-[#FF3232] hover:bg-[#E02020] text-white px-10 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-2xl"
        >
          Цуглуулга үзэх
        </button>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </div>
  );
}