import { Shield, Truck, Award, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Дээд зэргийн чанар",
    description: "Шилдэг материалаас бүтээсэн"
  },
  {
    icon: Truck,
    title: "Үнэгүй хүргэлт",
    description: "Бүх захиалгад дэлхий даяар"
  },
  {
    icon: Award,
    title: "Баталгаат чанар",
    description: "Спортын мэргэжлийн түвшин"
  },
  {
    icon: Sparkles,
    title: "Захиалгат загвар",
    description: "Өөрийн дуртай загвараар"
  }
];

export function Features() {
  return (
    <div id="features" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Яагаад биднийг сонгох вэ</h2>
          <div className="h-1 w-20 bg-[#FF3232] mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl text-center hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF3232]/10 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-[#FF3232]" />
              </div>
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}