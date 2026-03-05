import useSeo from '../hooks/useSeo';

function AboutPage() {
  useSeo({
    title: 'About Ashwi Furniture Factory | Kathmandu, Nepal',
    description:
      'Learn about Ashwi Furniture Factory in Kathmandu, Nepal. We offer beautiful furniture with high finishing and payment-after-delivery support.',
    canonical: 'https://ashwifurniture.com/about',
    keywords:
      'about ashwi furniture, furniture factory kathmandu, furniture manufacturer nepal, high finishing furniture nepal'
  });

  return (
    <main className="w-[min(1240px,calc(100%-2rem))] mx-auto py-10 min-h-[60vh]">
      <div className="max-w-[800px] mx-auto bg-surface p-8 md:p-12 rounded-xl border border-line">
        <h1 className="mt-0 tracking-[0.01em] text-brand-deep font-serif text-[2.2rem] mb-5">About Ashwi Furniture Factory</h1>
        <p className="text-[1.05rem] leading-[1.65] text-ink mb-4 font-sans">
          Ashwi Furniture is a Kathmandu-based furniture factory focused on premium finishing,
          reliable durability, and practical modern designs for Nepali homes.
        </p>
        <p className="text-[1.05rem] leading-[1.65] text-ink mb-4 font-sans">
          From compact mandirs to elegant living room furniture, wardrobes, and beds, each piece is
          built with careful workmanship and selected materials to ensure long service life.
        </p>
        <p className="text-[1.05rem] leading-[1.65] text-ink mb-4 font-sans">
          We take payment after delivery, helping customers order with confidence while receiving
          direct support from our factory team.
        </p>
        <div className="mt-8 bg-bg p-6 rounded-lg border border-line">
          <h2 className="mt-0 text-[1.4rem] font-serif text-brand mb-4">Why Choose Us?</h2>
          <ul className="m-0 pl-1 list-none flex flex-col gap-2.5">
            <li className="relative pl-[1.12rem] text-muted text-[1.02rem] before:content-['✓'] before:absolute before:left-0 before:text-success before:font-bold">✨ Factory Direct Pricing</li>
            <li className="relative pl-[1.12rem] text-muted text-[1.02rem] before:content-['✓'] before:absolute before:left-0 before:text-success before:font-bold">✨ Premium Craftsmanship</li>
            <li className="relative pl-[1.12rem] text-muted text-[1.02rem] before:content-['✓'] before:absolute before:left-0 before:text-success before:font-bold">✨ Custom Order Capabilities</li>
            <li className="relative pl-[1.12rem] text-muted text-[1.02rem] before:content-['✓'] before:absolute before:left-0 before:text-success before:font-bold">✨ Reliable Delivery Across Valley</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
