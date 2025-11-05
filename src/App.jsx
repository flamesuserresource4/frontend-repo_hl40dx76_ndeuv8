import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Steps from './components/Steps';
import LeadForm from './components/LeadForm';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-sky-600" />
            <span className="text-lg font-bold">HomeEase</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-gray-700 sm:flex">
            <a className="hover:text-gray-900" href="#benefits">Benefits</a>
            <a className="hover:text-gray-900" href="#apply">Apply</a>
          </nav>
          <a
            href="#apply"
            className="hidden rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-500/30 transition hover:brightness-110 sm:inline-flex"
          >
            Apply Now
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Benefits />
        <Steps />
        <LeadForm />
      </main>

      <footer className="border-t border-gray-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-600 sm:flex-row">
          <p>© {new Date().getFullYear()} HomeEase Finance. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#apply" className="hover:text-gray-900">Get Started</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
