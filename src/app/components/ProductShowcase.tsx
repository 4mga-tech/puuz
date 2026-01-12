import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  colors: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Сагсан бөмбөгийн гутал Pro",
    price: 450000,
    description: "Дээд зэргийн таацтай, сагсан бөмбөгт зориулсан",
    image: "https://images.unsplash.com/photo-1659927386877-55d8bd8d6913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwc25lYWtlcnN8ZW58MXx8fHwxNzY4MTczNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    colors: ['#000000', '#FFFFFF', '#FF3232', '#1a1a1a']
  },
  {
    id: 2,
    name: "Гүйлтийн гутал Elite",
    price: 380000,
    description: "Хөнгөн жинтэй, өндөр уян хатан",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwc2hvZXN8ZW58MXx8fHwxNzY4MTk2MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    colors: ['#FFFFFF', '#000000', '#FF3232', '#4169E1']
  },
  {
    id: 3,
    name: "Хэвийн өдрийн гутал Style",
    price: 320000,
    description: "Тав тухтай, орчин үеийн загвар",
    image: "https://images.unsplash.com/photo-1767589325064-a20f42c1da11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNob2VzfGVufDF8fHx8MTc2ODEyMDI4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    colors: ['#FFFFFF', '#000000', '#FF3232', '#808080']
  }
];

export function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(products[0].colors[0]);

  const currentProduct = products[currentIndex];

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setSelectedColor(products[(currentIndex + 1) % products.length].colors[0]);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setSelectedColor(products[(currentIndex - 1 + products.length) % products.length].colors[0]);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <div className="relative group">
          <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden">
            <img 
              src={currentProduct.image} 
              alt={currentProduct.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevProduct}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextProduct}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Product Indicator */}
          <div className="flex gap-2 justify-center mt-6">
            {products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setSelectedColor(products[idx].colors[0]);
                }}
                className={`h-1 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-[#FF3232]' : 'w-1 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-[#FF3232] uppercase tracking-wider mb-2">Онцлох цуглуулга</p>
            <h2 className="text-4xl md:text-5xl mb-4">{currentProduct.name}</h2>
            <p className="text-gray-600 text-lg">{currentProduct.description}</p>
          </div>

          {/* Color Selector */}
          <div>
            <p className="mb-3">Өнгө сонгох</p>
            <div className="flex gap-3">
              {currentProduct.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-full border-2 transition-all ${
                    selectedColor === color ? 'border-[#FF3232] scale-110' : 'border-gray-300 hover:border-gray-400'
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Өнгө сонгох ${color}`}
                />
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="text-3xl">₮{currentProduct.price.toLocaleString()}</div>

          {/* CTA Button */}
          <button className="bg-[#FF3232] hover:bg-[#E02020] text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg">
            Сагсанд нэмэх
          </button>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
            <div>
              <p className="text-sm text-gray-500">Материал</p>
              <p>Арьс, хялбархан</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Хэмжээ</p>
              <p>38-45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}