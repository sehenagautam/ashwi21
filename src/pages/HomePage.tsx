import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import CategoryNav from '../components/CategoryNav';
import HeroBanner from '../components/HeroBanner';
import EffortlessCheckout from '../components/EffortlessCheckout';
import PromoBanner from '../components/PromoBanner';
import DesignInspiration from '../components/DesignInspiration';
import { Product } from '../App';
import useSeo from '../hooks/useSeo';

interface HomePageProps {
  products: Product[];
  phone: string;
}

function HomePage({ products, phone }: HomePageProps) {
  useSeo({
    title: 'Ashwi Furniture Factory Nepal | Buy Beds, Sofas, Wardrobes in Kathmandu',
    description:
      'Ashwi Furniture Factory in Kathmandu, Nepal. Explore beds, sofas, wardrobes, mandir units and storage furniture with high-quality finishing and factory-direct support.',
    canonical: 'https://ashwifurniture.com/',
    keywords:
      'furniture factory nepal, buy furniture kathmandu, bed price nepal, wardrobe price nepal, sofa set nepal, ashwi furniture'
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [sortBy, setSortBy] = useState('nameAsc');

  const categories = useMemo(
    () => Array.from(new Set(products.map((item) => item.category))),
    [products]
  );
  const subcategories = useMemo(
    () => Array.from(new Set(products.map((item) => item.subcategory))),
    [products]
  );

  const priceBounds = useMemo(() => {
    const prices = products.map((item) => item.price);
    return {
      min: Math.floor(Math.min(...prices) / 1000) * 1000,
      max: Math.ceil(Math.max(...prices) / 1000) * 1000,
    };
  }, [products]);

  const [minPrice, setMinPrice] = useState(priceBounds.min);
  const [maxPrice, setMaxPrice] = useState(priceBounds.max);

  useEffect(() => {
    const q = searchParams.get('q') || '';
    if (q !== searchTerm) {
      setSearchTerm(q);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return products
      .filter((item) => (selectedCategory === 'all' ? true : item.category === selectedCategory))
      .filter((item) =>
        selectedSubcategory === 'all' ? true : item.subcategory === selectedSubcategory
      )
      .filter((item) => item.price >= minPrice && item.price <= maxPrice)
      .filter((item) => {
        if (!normalizedSearch) return true;
        const haystack = [item.name, item.category, item.subcategory, ...item.tags].join(' ').toLowerCase();
        return haystack.includes(normalizedSearch);
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'nameDesc':
            return b.name.localeCompare(a.name);
          case 'priceAsc':
            return a.price - b.price;
          case 'priceDesc':
            return b.price - a.price;
          case 'ratingDesc':
            return b.rating - a.rating;
          case 'nameAsc':
          default:
            return a.name.localeCompare(b.name);
        }
      });
  }, [searchTerm, selectedCategory, selectedSubcategory, minPrice, maxPrice, sortBy, products]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setMinPrice(priceBounds.min);
    setMaxPrice(priceBounds.max);
    setSortBy('nameAsc');
    setSearchParams({});
  };

  return (
    <main className="w-full" id="home">
      <section id="categories">
        <CategoryNav />
      </section>
      <HeroBanner />
      <EffortlessCheckout />

      {/* Catalog Section */}
      <section className="bg-bg py-16" id="products">
        <div className="w-[min(1240px,calc(100%-2rem))] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center bg-surface p-5 rounded-xl border border-line mb-8 gap-4">
            <h2 className="m-0 text-[1.4rem] font-serif font-black text-brand-deep shrink-0">Our Catalog</h2>
            <div className="flex-1 max-w-[500px] w-full relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true">🔍</span>
              <input
                id="search"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-line bg-bg focus:outline focus:outline-2 focus:outline-brand focus:-outline-offset-1 focus:border-brand font-inherit text-[0.95rem] tracking-[0.01em]"
                type="search"
                placeholder="Search sofas, mandirs, tags..."
                value={searchTerm}
                onChange={(e) => {
                  const value = e.target.value;
                  setSearchTerm(value);
                  if (value.trim()) {
                    setSearchParams({ q: value });
                  } else {
                    setSearchParams({});
                  }
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
            <FilterSidebar
              categories={categories}
              subcategories={subcategories}
              selectedCategory={selectedCategory}
              selectedSubcategory={selectedSubcategory}
              minPrice={minPrice}
              maxPrice={maxPrice}
              bounds={priceBounds}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onCategoryChange={setSelectedCategory}
              onSubcategoryChange={setSelectedSubcategory}
              onMinPriceChange={setMinPrice}
              onMaxPriceChange={setMaxPrice}
              onReset={handleReset}
            />

            <div className="flex flex-col gap-6">
              <div className="text-muted font-bold text-[0.95rem]">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 items-stretch">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} phone={phone} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-[100px] bg-surface rounded-xl border border-line">
                  <span className="text-4xl block mb-4" aria-hidden="true">🏜️</span>
                  <h3 className="m-0 text-[1.4rem] font-serif text-brand mb-2">No products found</h3>
                  <p className="m-0 text-muted">Try adjusting your filters or search term.</p>
                  <button className="mt-4 px-6 py-2.5 rounded-lg border border-line bg-tag-bg text-brand-deep font-semibold tracking-wide hover:bg-brand hover:text-white transition-colors cursor-pointer text-[0.9rem]" onClick={handleReset}>
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <PromoBanner />
      <DesignInspiration />

      <section className="bg-bg pb-16">
        <div className="w-[min(1240px,calc(100%-2rem))] mx-auto bg-surface border border-line rounded-xl p-6 md:p-8">
          <h2 className="m-0 mb-3 text-brand-deep font-serif text-[1.7rem]">Furniture Factory in Kathmandu, Nepal</h2>
          <p className="m-0 text-muted leading-[1.75] text-[0.95rem]">
            Ashwi Furniture is a Nepal-based furniture factory serving high-intent buyers looking for
            beds, sofas, wardrobes, mandir units, and storage furniture in Kathmandu and beyond. Our
            collections are built with quality finishing, practical design, and factory-direct support.
          </p>
          <h3 className="mt-6 mb-2 text-ink font-serif text-[1.2rem]">Popular High-Intent Furniture Searches</h3>
          <ul className="m-0 pl-5 text-[0.93rem] leading-[1.75] text-ink">
            <li>Buy beds in Kathmandu: king beds, queen beds, and modern low beds</li>
            <li>Wardrobe price in Nepal: spacious multi-section wardrobe designs</li>
            <li>Sofa set in Nepal: modern and designer living room furniture options</li>
            <li>Mandir furniture in Nepal with integrated storage and lighting</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/categories/sofas" className="inline-flex px-4 py-2 rounded-lg bg-tag-bg text-brand-deep border border-line font-semibold text-[0.9rem]">Browse Sofas</Link>
            <Link to="/categories/beds" className="inline-flex px-4 py-2 rounded-lg bg-tag-bg text-brand-deep border border-line font-semibold text-[0.9rem]">Browse Beds</Link>
            <Link to="/categories/dining" className="inline-flex px-4 py-2 rounded-lg bg-tag-bg text-brand-deep border border-line font-semibold text-[0.9rem]">Browse Dining</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
