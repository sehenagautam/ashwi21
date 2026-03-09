import useSeo from '../hooks/useSeo';

function PrivacyPage() {
  useSeo({
    title: 'Privacy Policy | Ashwi Furniture Factory Nepal',
    description:
      'Read the Ashwi Furniture privacy policy for how inquiry details and customer information are handled responsibly.',
    canonical: 'https://ashwifurniture.com/privacy',
    keywords: 'ashwi furniture privacy policy, furniture website privacy nepal'
  });

  return (
    <main className="w-[min(1240px,calc(100%-2rem))] mx-auto py-10 min-h-[60vh]">
      <section className="max-w-[920px] mx-auto bg-surface border border-line rounded-xl p-8 md:p-12">
        <h1 className="m-0 font-serif text-brand-deep text-[2.1rem]">Privacy Policy</h1>
        <p className="text-muted leading-[1.7] mt-4 mb-0">
          We collect only the contact details necessary to respond to inquiries and support product communication.
          We do not sell personal information. Shared details are used only for order-related support and customer service.
        </p>
        <h2 className="font-serif text-brand-deep text-[1.4rem] mt-8 mb-2">What We Collect</h2>
        <ul className="m-0 pl-5 text-ink leading-[1.8]">
          <li>Name and phone number submitted via inquiry or WhatsApp.</li>
          <li>Order and delivery details required for service.</li>
        </ul>
        <h2 className="font-serif text-brand-deep text-[1.4rem] mt-8 mb-2">How We Use Information</h2>
        <ul className="m-0 pl-5 text-ink leading-[1.8]">
          <li>To respond to product inquiries and order requests.</li>
          <li>To coordinate delivery and support communication.</li>
        </ul>
      </section>
    </main>
  );
}

export default PrivacyPage;
