import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Share a few details',
    desc: 'Tell us about your income, city, and desired loan amount.'
  },
  {
    title: 'Get pre-approved instantly',
    desc: 'We run a quick eligibility check and show your best offers.'
  },
  {
    title: 'Submit documents & finalize',
    desc: 'Upload KYC and property documents to complete your application.'
  }
];

export default function Steps() {
  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How it works</h2>
          <p className="mt-3 text-gray-600">A seamless journey from application to approval.</p>
        </div>

        <ol className="mx-auto mt-12 max-w-3xl space-y-8">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-gray-600">{s.desc}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600">
                <CheckCircle size={16} />
                <span>No impact on credit score for pre-approval</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
