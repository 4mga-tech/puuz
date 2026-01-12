import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { AllProducts } from './components/AllProducts';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <AllProducts />
      <Features />
      <Footer />
    </div>
  );
}