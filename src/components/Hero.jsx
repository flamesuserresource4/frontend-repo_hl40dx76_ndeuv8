import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative z-10">
            <span className="inline-flex items-center rounded-full bg-sky-600/10 px-3 py-1 text-sm text-sky-700">Home Loan Made Simple</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
              Move into your dream home faster
            </h1>
            <p className="mt-5 max-w-xl text-lg text-gray-600">
              Get competitive rates, instant pre-approval, and expert support from start to finish.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-sky-600/40"
              >
                Get Started
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 transition hover:bg-gray-50"
              >
                See Benefits
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" alt="Customer avatar" className="h-8 w-8 rounded-full border border-white" />
                <img src="https://i.pravatar.cc/40?img=2" alt="Customer avatar" className="h-8 w-8 rounded-full border border-white" />
                <img src="https://i.pravatar.cc/40?img=3" alt="Customer avatar" className="h-8 w-8 rounded-full border border-white" />
              </div>
              <p>10k+ happy homeowners</p>
            </div>
          </div>

          {/* Visual side with family photo behind new home */}
          <div className="relative h-[520px] w-full overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1800&auto=format&fit=crop"
              alt="Happy family standing in front of their new home"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/70 via-white/20 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
