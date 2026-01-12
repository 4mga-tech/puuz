import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  colors: string[];
  size: string;
  material: string;
  category: string;
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Сагсан бөмбөгийн гутал Pro Max",
    price: 450000,
    description: "Дээд зэргийн таацтай, сагсан бөмбөгт зориулсан мэргэжлийн гутал",
    image: "https://images.unsplash.com/photo-1659927386877-55d8bd8d6913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwc25lYWtlcnN8ZW58MXx8fHwxNzY4MTczNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    colors: ['#000000', '#FFFFFF', '#FF3232', '#1a1a1a'],
    size: "38-45",
    material: "Арьс, хялбархан даавуу",
    category: "Сагсан бөмбөг"
  },
  {
    id: 2,
    name: "Гүйлтийн гутал Elite Runner",
    price: 380000,
    description: "Хөнгөн жинтэй, өндөр уян хатан, урт зайн гүйлтэд тохиромжтой",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwc2hvZXN8ZW58MXx8fHwxNzY4MTk2MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    colors: ['#FFFFFF', '#000000', '#FF3232', '#4169E1'],
    size: "36-46",
    material: "Сүвэрхэг хялбархан",
    category: "Гүйлт"
  },
  {
    id: 3,
    name: "Хэвийн өдрийн гутал Street Style",
    price: 320000,
    description: "Тав тухтай, орчин үеийн загвар, өдөр тутмын өмсөлтөд",
    image: "https://images.unsplash.com/photo-1767589325064-a20f42c1da11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNob2VzfGVufDF8fHx8MTc2ODEyMDI4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    colors: ['#FFFFFF', '#000000', '#FF3232', '#808080'],
    size: "35-44",
    material: "Арьс, резинэн ул",
    category: "Lifestyle"
  },
  {
    id: 4,
    name: "Сагсан бөмбөгийн гутал Air Jump",
    price: 420000,
    description: "Өндөр үсрэлтэд зориулсан агаарын дэр технологитой",
    image: "https://images.unsplash.com/photo-1659927386877-55d8bd8d6913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwc25lYWtlcnN8ZW58MXx8fHwxNzY4MTczNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    colors: ['#FFFFFF', '#000000', '#FF3232'],
    size: "38-46",
    material: "Хялбархан, уян хатан ул",
    category: "Сагсан бөмбөг"
  },
  {
    id: 5,
    name: "Гүйлтийн гутал Speed Boost",
    price: 350000,
    description: "Хурдны гүйлтэнд зориулсан хөнгөн, чанга бүтэцтэй",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwc2hvZXN8ZW58MXx8fHwxNzY4MTk2MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    colors: ['#000000', '#FFFFFF', '#4169E1', '#FF3232'],
    size: "37-45",
    material: "Сүвэрхэг хялбархан",
    category: "Гүйлт"
  },
  {
    id: 6,
    name: "Премиум загварын гутал Luxury",
    price: 580000,
    description: "Дээд зэргийн чанартай арьс, тансаг загварын гутал",
    image: "https://images.unsplash.com/photo-1767589325064-a20f42c1da11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNob2VzfGVufDF8fHx8MTc2ODEyMDI4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    colors: ['#1a1a1a', '#8B4513', '#FFFFFF', '#FF3232'],
    size: "36-44",
    material: "Жинхэнэ арьс, резинэн ул",
    category: "Lifestyle"
  }
];

export function AllProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div id="products" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Нийт бараа</h2>
          <div className="h-1 w-20 bg-[#FF3232] mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Бүх төрлийн спорт гутал</p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image */}
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-xs text-[#FF3232] uppercase tracking-wider mb-2">{product.category}</div>
                <h3 className="text-xl mb-2 group-hover:text-[#FF3232] transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Color Options */}
                <div className="flex gap-2 mb-4">
                  {product.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 rounded-full border-2 border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl">₮{product.price.toLocaleString()}</span>
                  <button className="text-[#FF3232] hover:text-[#E02020] transition-colors">
                    Дэлгэрэнгүй →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Image */}
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-[#FF3232] uppercase tracking-wider mb-2">{selectedProduct.category}</div>
                  <h2 className="text-3xl mb-4">{selectedProduct.name}</h2>
                  <p className="text-gray-600">{selectedProduct.description}</p>
                </div>

                {/* Colors */}
                <div>
                  <p className="mb-3">Өнгөний сонголт</p>
                  <div className="flex gap-3">
                    {selectedProduct.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-12 h-12 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="text-3xl">₮{selectedProduct.price.toLocaleString()}</div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 p-6 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Хэмжээ</p>
                    <p>{selectedProduct.size}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Ангилал</p>
                    <p>{selectedProduct.category}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-500 mb-1">Материал</p>
                    <p>{selectedProduct.material}</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-[#FF3232] hover:bg-[#E02020] text-white py-4 rounded-full transition-all">
                    Захиалах
                  </button>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 border-2 border-gray-300 hover:border-gray-400 rounded-full transition-all"
                  >
                    Хаах
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}