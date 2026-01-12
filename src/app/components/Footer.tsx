import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4 font-light">Tm</h3>
            <p className="text-gray-400">
              Мэргэжлийн болон сонирхогчдод зориулсан дээд зэргийн спорт гутал.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="mb-4">Дэлгүүр</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#FF3232] transition-colors">Сагсан бөмбөгийн гутал</a></li>
              <li><a href="#" className="hover:text-[#FF3232] transition-colors">Гүйлтийн гутал</a></li>
              <li><a href="#" className="hover:text-[#FF3232] transition-colors">Хэвийн өдрийн гутал</a></li>
              <li><a href="#" className="hover:text-[#FF3232] transition-colors">Захиалгат загвар</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4">Тусламж</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#FF3232] transition-colors">Холбоо барих</a></li>
              <li><a href="#" className="hover:text-[#FF3232] transition-colors">Хүргэлтийн мэдээлэл</a></li>
              <li><a href="#" className="hover:text-[#FF3232] transition-colors">Буцаалт</a></li>
              <li><a href="#" className="hover:text-[#FF3232] transition-colors">Түгээмэл асуулт</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4">Холбоотой байх</h4>
            <p className="text-gray-400 mb-4">Шинэ бүтээгдэхүүн болон урамшууллын мэдээлэл авах.</p>
            <div className="flex gap-4 mb-4">
              <button className="hover:text-[#FF3232] transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="hover:text-[#FF3232] transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="hover:text-[#FF3232] transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="hover:text-[#FF3232] transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Tm. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#FF3232] transition-colors">Нууцлалын бодлого</a>
            <a href="#" className="hover:text-[#FF3232] transition-colors">Үйлчилгээний нөхцөл</a>
          </div>
        </div>
      </div>
    </footer>
  );
}