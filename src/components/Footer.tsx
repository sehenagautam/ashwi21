import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="mt-10 bg-brand-deep text-[#E8DFD4] py-10 pb-5" id="contact">
      <div className="w-[min(1240px,calc(100%-2rem))] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <h3 className="mt-0 text-[#FAF6F1] font-serif text-xl mb-2">Ashwi Furniture</h3>
          <p className="text-[0.9rem] leading-[1.6] text-[#D4C8BC]">Quality furniture directly from factory to your home.</p>
        </div>
        <div>
          <h4 className="mt-0 text-[#FAF6F1] font-serif text-lg mb-2">STORE</h4>
          <a href="/#home" className="block mt-2 text-[#D4C8BC] text-[0.9rem] hover:text-brand transition-colors">Home</a>
          <a href="/#products" className="block mt-2 text-[#D4C8BC] text-[0.9rem] hover:text-brand transition-colors">Products</a>
          <a href="/#categories" className="block mt-2 text-[#D4C8BC] text-[0.9rem] hover:text-brand transition-colors">Categories</a>
          <a href="/#search" className="block mt-2 text-[#D4C8BC] text-[0.9rem] hover:text-brand transition-colors">Search</a>
          <Link to="/contact" className="block mt-2 text-[#D4C8BC] text-[0.9rem] hover:text-brand transition-colors">Contact</Link>
        </div>
        <div>
          <h4 className="mt-0 text-[#FAF6F1] font-serif text-lg mb-2">Policy</h4>
          <Link to="/shipping-returns" className="block mt-2 text-[#D4C8BC] text-[0.9rem] hover:text-brand transition-colors">Shipping & Returns</Link>
          <Link to="/privacy" className="block mt-2 text-[#D4C8BC] text-[0.9rem] hover:text-brand transition-colors">Privacy Policy</Link>
        </div>
      </div>
      <div className="w-[min(1240px,calc(100%-2rem))] mx-auto mt-6 pt-4 border-t border-[rgba(232,223,212,0.2)] flex flex-col md:flex-row items-center md:items-start justify-between gap-2">
        <p className="m-0 text-[#9A8B7E] text-[0.85rem]">© {new Date().getFullYear()} Ashwi Furniture. All rights reserved.</p>
        <a
          href="https://sajedar.com"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-[#D4C8BC] text-[0.85rem] hover:text-brand transition-colors"
        >
          Powered by sajedar.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
