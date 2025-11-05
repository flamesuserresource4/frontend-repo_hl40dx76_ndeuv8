import React, { useState } from 'react';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    employment: 'salaried',
    income: '',
    amount: ''
  });
  const [consent, setConsent] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) return;
    setLoading(true);
    // In a real app this would POST to the backend
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="apply" className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
          <h3 className="text-2xl font-semibold text-emerald-900">Thanks! Your request is in.</h3>
          <p className="mt-2 text-emerald-700">Our loan specialist will reach out shortly with personalized options.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Submit another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Start your application</h2>
            <p className="mt-3 text-gray-600">Share a few details and we’ll show your best offers right away.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-600"></span> No impact on credit score for pre-approval</li>
              <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-600"></span> Bank-grade data security</li>
              <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-600"></span> 100% online process</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 555 000 1234"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  placeholder="San Francisco"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600/30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Employment</label>
                <select
                  name="employment"
                  value={form.employment}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600/30"
                >
                  <option value="salaried">Salaried</option>
                  <option value="self-employed">Self-employed</option>
                  <option value="freelancer">Freelancer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Monthly income</label>
                <input
                  type="number"
                  name="income"
                  value={form.income}
                  onChange={handleChange}
                  required
                  placeholder="$6,000"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600/30"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Desired loan amount</label>
                <input
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  required
                  placeholder="$250,000"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600/30"
                />
              </div>
            </div>

            <label className="mt-4 flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" className="mt-1" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              I agree to be contacted about my application and accept the privacy policy.
            </label>

            <button
              type="submit"
              disabled={!consent || loading}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-sky-600 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Submitting…' : 'Get pre-approved now'}
            </button>

            <p className="mt-3 text-center text-xs text-gray-500">Takes less than 2 minutes • No impact on credit score</p>
          </form>
        </div>
      </div>
    </section>
  );
}
