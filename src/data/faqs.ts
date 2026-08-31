// Single source of truth. Rendered on the homepage and /contact.
// The FAQPage schema is emitted on the homepage only, so the same structured
// data isn't published at two URLs.
export const faqs = [
  {
    q: "What's a fractional COO?",
    a: "An operator who runs alongside you part-time instead of joining full-time. I get into the business, find what's really holding growth back, and fix it with your team, without the cost of a full-time exec.",
  },
  {
    q: 'Who do you work with?',
    a: "Owner-led businesses, roughly $1M to $20M in revenue, across construction, professional services, healthcare, software, and agencies. If you've become the bottleneck and growth has gotten chaotic, that's my wheelhouse.",
  },
  {
    q: 'What happens on the call?',
    a: "Thirty minutes, no pitch. You tell me where it's stuck, I tell you what I'd fix first. You can run with that yourself, or we can talk about doing it together.",
  },
  {
    q: 'What does it cost?',
    a: "I don't price anything before I understand the problem. Once I do, the price is tied to what fixing it is worth to you rather than to hours. You'll have the number before anything starts, and I'll tell you if I don't think it's worth doing.",
  },
  {
    q: 'Do you work remotely?',
    a: 'Yes. I work remotely with owners across the US, and get on-site when the work calls for it.',
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};
