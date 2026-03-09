import useSeo from '../hooks/useSeo';

function ContactPage() {
  const displayNumber = '+977 9851406494';
  const whatsappNumber = '9779851406494';
  const message = encodeURIComponent('Hi Ashwi Furniture, I want details about your furniture collection.');

  useSeo({
    title: 'Contact Ashwi Furniture Factory | Kathmandu, Nepal',
    description:
      'Contact Ashwi Furniture for product details, custom furniture inquiries, and direct WhatsApp support in Nepal.',
    canonical: 'https://ashwifurniture.com/contact',
    keywords: 'contact ashwi furniture, furniture factory contact nepal, whatsapp furniture nepal'
  });

  return (
    <main className="w-[min(1240px,calc(100%-2rem))] mx-auto py-10 min-h-[60vh]">
      <div className="max-w-[820px] mx-auto bg-surface border border-line rounded-xl p-8 md:p-12">
        <h1 className="m-0 text-brand-deep font-serif text-[2.2rem]">Contact Ashwi Furniture</h1>
        <p className="mt-3 mb-6 text-muted leading-[1.7]">
          For product details, delivery support, and custom order discussion, contact our team directly.
        </p>

        <div className="bg-bg border border-line rounded-lg p-5 mb-6">
          <p className="m-0 text-muted text-[0.9rem]">Phone / WhatsApp</p>
          <p className="m-0 mt-2 text-brand-deep text-[1.45rem] font-bold">{displayNumber}</p>
        </div>

        <a
          className="inline-flex justify-center items-center rounded-lg font-bold py-3 px-6 text-[1rem] bg-success text-white border border-[#268C4F] hover:bg-[#268C4F] transition-colors"
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to WhatsApp
        </a>
      </div>
    </main>
  );
}

export default ContactPage;
