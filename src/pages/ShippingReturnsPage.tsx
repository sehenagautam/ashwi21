import useSeo from '../hooks/useSeo';

function ShippingReturnsPage() {
  useSeo({
    title: 'Shipping & Returns | Ashwi Furniture Factory Nepal',
    description:
      'Read Ashwi Furniture shipping and returns policy for delivery support, timelines, and post-delivery assistance in Nepal.',
    canonical: 'https://ashwifurniture.com/shipping-returns',
    keywords: 'furniture shipping nepal, furniture return policy nepal, ashwi furniture delivery'
  });

  return (
    <main className="w-[min(1240px,calc(100%-2rem))] mx-auto py-10 min-h-[60vh]">
      <section className="max-w-[920px] mx-auto bg-surface border border-line rounded-xl p-8 md:p-12">
        <h1 className="m-0 font-serif text-brand-deep text-[2.1rem]">Shipping & Returns</h1>
        <p className="text-muted leading-[1.7] mt-4 mb-0">
          We provide delivery support across serviceable areas in Nepal. Delivery time depends on product type,
          order volume, and destination.
        </p>
        <h2 className="font-serif text-brand-deep text-[1.4rem] mt-8 mb-2">Delivery</h2>
        <ul className="m-0 pl-5 text-ink leading-[1.8]">
          <li>Delivery schedule is confirmed at the time of order confirmation.</li>
          <li>Large furniture may require coordinated delivery windows.</li>
          <li>Delivery charges may vary by location and item size.</li>
        </ul>
        <h2 className="font-serif text-brand-deep text-[1.4rem] mt-8 mb-2">Returns & Support</h2>
        <ul className="m-0 pl-5 text-ink leading-[1.8]">
          <li>Report any transit damage or issue promptly after delivery.</li>
          <li>Support is provided for product-quality concerns and fulfillment issues.</li>
          <li>Please contact us on WhatsApp for fastest assistance.</li>
        </ul>
      </section>
    </main>
  );
}

export default ShippingReturnsPage;
