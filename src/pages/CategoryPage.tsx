import { Link, useParams } from 'react-router-dom';
import { Product } from '../App';
import ProductCard from '../components/ProductCard';
import useSeo from '../hooks/useSeo';
import { getCategoryLanding } from '../data/seoCategories';

interface CategoryPageProps {
  products: Product[];
  phone: string;
}

function CategoryPage({ products, phone }: CategoryPageProps) {
  const { slug = '' } = useParams<{ slug: string }>();
  const landing = getCategoryLanding(slug);

  if (!landing) {
    return (
      <main className="w-[min(1240px,calc(100%-2rem))] mx-auto py-10 min-h-[60vh] text-center">
        <h1 className="font-serif text-brand-deep text-[2rem] mb-3">Category not found</h1>
        <Link to="/" className="inline-flex px-6 py-3 bg-brand text-white rounded-lg font-semibold">
          Back to Home
        </Link>
      </main>
    );
  }

  const filtered = products.filter((product) =>
    landing.match(product.category, product.subcategory, product.name)
  );

  useSeo({
    title: `${landing.title} | Ashwi Furniture Factory Nepal`,
    description: landing.description,
    canonical: `https://ashwifurniture.com/categories/${landing.slug}`,
    keywords: `${landing.keywordTheme}, ashwi furniture`
  });

  return (
    <main className="w-[min(1240px,calc(100%-2rem))] mx-auto py-10 min-h-[60vh]">
      <section className="bg-surface border border-line rounded-xl p-6 md:p-8 mb-8">
        <p className="m-0 text-brand tracking-[0.08em] uppercase text-[0.8rem] font-semibold">Category</p>
        <h1 className="m-0 mt-2 text-brand-deep font-serif text-[2rem]">{landing.subtitle}</h1>
        <p className="m-0 mt-3 text-muted leading-[1.7] max-w-[80ch]">{landing.description}</p>
      </section>

      {filtered.length > 0 ? (
        <section className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 items-stretch">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} phone={phone} />
          ))}
        </section>
      ) : (
        <section className="text-center bg-surface border border-line rounded-xl py-16">
          <h2 className="m-0 font-serif text-brand-deep">No products available in this category right now.</h2>
        </section>
      )}
    </main>
  );
}

export default CategoryPage;
