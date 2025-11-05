import React from 'react';
import { Percent, Shield, Clock, Home } from 'lucide-react';

const benefits = [
  {
    icon: Percent,
    title: 'Low Interest Rates',
    desc: 'Access competitive rates tailored to your profile.'
  },
  {
    icon: Clock,
    title: 'Instant Pre-Approval',
    desc: 'Check your eligibility in minutes — no paperwork upfront.'
  },
  {
    icon: Shield,
    title: 'Secure & Transparent',
    desc: 'Clear terms, zero hidden fees, and bank-grade security.'
  },
  {
    icon: Home,
    title: 'Flexible Tenure',
    desc: 'Choose repayment plans that fit your lifestyle.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why choose us</h2>
          <p className="mt-3 text-gray-600">Everything you need to finance your dream home — fast, fair, and hassle-free.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600/10 text-sky-700">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
