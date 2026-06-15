export default function Page() {
  const faqs = [
    {
      q: 'Which countries are supported?',
      a: 'We support tax compliance rules for 40+ countries including the US, UK, EU member states, Canada, Australia, and more — with new regions added monthly.'
    },
    {
      q: 'What exactly does it check?',
      a: 'Required fields (VAT/GST numbers, seller/buyer details, invoice date, sequential numbering), tax rate accuracy, currency formatting, and country-specific mandatory disclosures.'
    },
    {
      q: 'Can I check invoices in bulk?',
      a: 'Yes. Upload multiple PDFs or paste invoice data via our API to validate entire batches and download a compliance report in seconds.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Legal &amp; Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Verify Invoices Meet<br />
          <span className="text-[#58a6ff]">Local Tax Requirements</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Instantly validate invoice formatting and required fields against country-specific tax compliance rules. Stop worrying about rejected invoices or audit penalties.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Checking Invoices — $9/mo
          </a>
          <a
            href="#pricing"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            See What&apos;s Included
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span>✓ 40+ countries</span>
          <span>✓ Real-time feedback</span>
          <span>✓ PDF &amp; form input</span>
          <span>✓ Compliance reports</span>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$9</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay compliant</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited invoice checks',
              '40+ country rule sets',
              'PDF upload &amp; form input',
              'Bulk validation via API',
              'Downloadable compliance reports',
              'Email alerts for rule updates',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Invoice Tax Compliance Checker. All rights reserved.
      </footer>
    </main>
  )
}
