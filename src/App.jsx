import React from 'react'
import Spline from '@splinetool/react-spline'
import { Heart, ShieldCheck, Users, Clock, Phone, Star, Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur-md bg-white/50 border border-white/40 shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white">
                <Heart className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold text-slate-800">Becared</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-slate-600">
              <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
              <a href="#how" className="hover:text-slate-900 transition-colors">How it works</a>
              <a href="#testimonials" className="hover:text-slate-900 transition-colors">Testimonials</a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="px-4 py-2 rounded-xl text-slate-700 hover:text-slate-900">Sign in</a>
              <a href="#cta" className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">Find a Caregiver</a>
            </div>
            <button className="md:hidden p-2 rounded-xl bg-white/70 border border-white/50 text-slate-700">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/60 via-slate-900/50 to-blue-900/30" />
      {/* Content */}
      <div className="relative z-20 h-full">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-slate-100 ring-1 ring-white/30 backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> Trusted elder care, on your terms
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white tracking-tight">
              Compassionate caregiving for the people you love
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-200/95">
              Becared connects families with thoroughly vetted caregivers. Warm, reliable support at home—personalized to your family’s needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700">
                Get Started
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/20 px-6 py-3 text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/30">
                Explore Features
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-200/90">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="text-sm">4.9/5 average family rating</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-300" />
                <span className="text-sm">Background-checked caregivers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-800">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  )
}

function Features() {
  const data = [
    { icon: Users, title: 'Caregivers you can trust', desc: 'Every professional is identity verified, reference-checked, and continuously reviewed.' },
    { icon: ShieldCheck, title: 'Safety-first platform', desc: 'Secure messaging, protected payments, and clear incident coverage.' },
    { icon: Clock, title: 'Flexible scheduling', desc: 'Book hourly visits or ongoing support with easy rescheduling.' },
    { icon: Phone, title: '24/7 family support', desc: 'You’re never alone—our team is here around the clock for any questions.' },
  ]
  return (
    <section id="features" className="relative bg-gradient-to-b from-blue-50/60 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Warm, professional care—made simple</h2>
          <p className="mt-3 text-slate-600">Designed for peace of mind with clear pricing, transparency, and compassionate support.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { title: 'Share your needs', text: 'Tell us about medical conditions, daily routines, language preferences, and schedule.' },
    { title: 'Match with caregivers', text: 'Browse vetted profiles with experience, availability, and ratings that fit your family.' },
    { title: 'Start care with confidence', text: 'Message, schedule, and manage visits in one place—with ongoing support from our team.' },
  ]
  return (
    <section id="how" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">How it works</h2>
          <p className="mt-3 text-slate-600">A few simple steps to dependable care at home.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">{i + 1}</div>
              <h3 className="mt-6 text-lg font-semibold text-slate-800">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    {
      name: 'Priya K.',
      role: 'Daughter & primary caregiver',
      text: 'Becared helped us find a kind, skilled caregiver for my mom within days. The regular updates gave our family so much peace of mind.',
    },
    {
      name: 'Miguel A.',
      role: 'Grandson',
      text: 'Scheduling was easy and flexible. Our caregiver treats my grandfather like family—professional and incredibly warm.',
    },
    {
      name: 'Helen R.',
      role: 'Family decision maker',
      text: 'Background checks and transparent reviews made the choice simple. We felt supported at every step.',
    },
  ]
  return (
    <section id="testimonials" className="bg-gradient-to-b from-white to-blue-50/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Families feel the difference</h2>
          <p className="mt-3 text-slate-600">Real stories from people we proudly support.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-600">
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
                <Star className="h-5 w-5" />
              </div>
              <p className="mt-4 text-slate-700">“{t.text}”</p>
              <p className="mt-4 text-sm font-medium text-slate-900">{t.name}</p>
              <p className="text-sm text-slate-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="cta" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-700 p-1 shadow-xl">
          <div className="rounded-3xl bg-white/50 p-8 sm:p-12 backdrop-blur">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">Ready to find the right caregiver?</h3>
                <p className="mt-3 text-slate-700">Share a few details and get matched with compassionate, qualified professionals.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="#" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700">Get matched</a>
                  <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-slate-800 ring-1 ring-slate-200 transition hover:bg-slate-50">Talk to our team</a>
                </div>
              </div>
              <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-white/60">
                <form className="grid gap-4">
                  <div>
                    <label className="text-sm text-slate-700">Your name</label>
                    <input type="text" placeholder="Jane Doe" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
                  </div>
                  <div>
                    <label className="text-sm text-slate-700">Email</label>
                    <input type="email" placeholder="jane@email.com" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40" />
                  </div>
                  <div>
                    <label className="text-sm text-slate-700">Care needs</label>
                    <select className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40">
                      <option>Companionship</option>
                      <option>Personal care</option>
                      <option>Mobility support</option>
                      <option>Dementia care</option>
                      <option>Post-hospital support</option>
                    </select>
                  </div>
                  <button type="button" className="mt-2 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700">
                    Request matches
                  </button>
                  <p className="text-xs text-slate-600">By continuing, you agree to our Terms and Privacy Policy.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white">
              <Heart className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold text-slate-800">Becared</span>
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Becared. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
