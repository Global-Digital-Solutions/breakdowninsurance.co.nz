'use client';

import { useState } from 'react';
import { User, Mail, Phone, Car, DollarSign, Lock, ShieldCheck, Clock, MessageSquare, Gauge } from 'lucide-react';

interface QuoteFormProps {
  mode?: 'compact' | 'full';
}

const vehicleTypes = [
  { value: 'sedan', label: 'Sedan / Hatchback' },
  { value: 'suv', label: 'SUV / 4WD' },
  { value: 'ute', label: 'Ute / Pickup' },
  { value: 'wagon', label: 'Station Wagon' },
  { value: 'van', label: 'Van / People Mover' },
  { value: 'ev', label: 'Electric Vehicle (EV)' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'import', label: 'Japanese Import' },
  { value: 'other', label: 'Other' },
];

const vehicleAges = [
  { value: '0-3', label: 'Under 3 years old' },
  { value: '3-7', label: '3 – 7 years old' },
  { value: '7-10', label: '7 – 10 years old' },
  { value: '10-15', label: '10 – 15 years old' },
  { value: '15+', label: 'Over 15 years old' },
];

const vehicleValues = [
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-10k', label: '$5,000 – $10,000' },
  { value: '10k-20k', label: '$10,000 – $20,000' },
  { value: '20k-40k', label: '$20,000 – $40,000' },
  { value: '40k-60k', label: '$40,000 – $60,000' },
  { value: 'over-60k', label: 'Over $60,000' },
];

const securityBadges = [
  { icon: Lock, label: '256-bit SSL Encrypted' },
  { icon: ShieldCheck, label: 'No Spam Guarantee' },
  { icon: Clock, label: 'Response Within 24hrs' },
];

export default function QuoteForm({ mode = 'full' }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  if (mode === 'compact') {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-5">
          <h3 className="text-white font-bold text-xl">Get Your Free Breakdown Insurance Quote</h3>
          <p className="text-amber-100 text-sm mt-1">Compare NZ breakdown insurers in 2 minutes</p>
        </div>

        <form action="https://shiny-bush-41cd.darinbutler.workers.dev" method="POST" onSubmit={handleSubmit} className="p-6 space-y-4">
          <input type="hidden" name="_next" value="https://breakdowninsurance.co.nz/thank-you/" />
          <input type="hidden" name="_subject" value="New breakdown insurance Quote Request - BreakdownInsurance.co.nz" />
          <input type="hidden" name="_cc" value="butlerdarin@gmail.com" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_honey" style={{ display: 'none' }} />

          <div>
            <label htmlFor="fullName-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input id="fullName-compact" type="text" name="fullName" required className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm" placeholder="John Doe" />
            </div>
          </div>

          <div>
            <label htmlFor="email-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input id="email-compact" type="email" name="email" required className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm" placeholder="john@example.com" />
            </div>
          </div>

          <div>
            <label htmlFor="phone-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input id="phone-compact" type="tel" name="phone" required className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm" placeholder="09 XXX XXXX" />
            </div>
          </div>

          <div>
            <label htmlFor="vehicleType-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Vehicle Type</label>
            <div className="relative">
              <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select id="vehicleType-compact" name="vehicleType" required className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm appearance-none bg-white">
                <option value="">Select vehicle type...</option>
                {vehicleTypes.map((type) => (<option key={type.value} value={type.value}>{type.label}</option>))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="vehicleAge-compact" className="block text-sm font-semibold text-slate-700 mb-1.5">Vehicle Age</label>
            <div className="relative">
              <Gauge className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select id="vehicleAge-compact" name="vehicleAge" required className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm appearance-none bg-white">
                <option value="">Select vehicle age...</option>
                {vehicleAges.map((age) => (<option key={age.value} value={age.value}>{age.label}</option>))}
              </select>
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
            {isSubmitting ? 'Submitting...' : 'Get My Free Quote →'}
          </button>
        </form>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {securityBadges.map((badge) => {
              const BadgeIcon = badge.icon;
              return (
                <div key={badge.label} className="flex items-center gap-1.5">
                  <BadgeIcon className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-xs font-medium text-slate-600">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="quote-form" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 scroll-mt-20">
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 sm:px-10 py-8 sm:py-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Get Your Free Breakdown Insurance Quote</h2>
            <p className="text-amber-100 text-lg">Fill out the form below and a licensed broker will respond within 24 hours</p>
          </div>

          <form action="https://shiny-bush-41cd.darinbutler.workers.dev" method="POST" onSubmit={handleSubmit} className="p-6 sm:p-10">
            <input type="hidden" name="_next" value="https://breakdowninsurance.co.nz/thank-you/" />
            <input type="hidden" name="_subject" value="New breakdown insurance Quote Request - BreakdownInsurance.co.nz" />
            <input type="hidden" name="_cc" value="butlerdarin@gmail.com" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_honey" style={{ display: 'none' }} />

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName-full" className="block text-sm font-semibold text-slate-900 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input id="fullName-full" type="text" name="fullName" required className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base" placeholder="John Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email-full" className="block text-sm font-semibold text-slate-900 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input id="email-full" type="email" name="email" required className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base" placeholder="john@example.com" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone-full" className="block text-sm font-semibold text-slate-900 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input id="phone-full" type="tel" name="phone" required className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base" placeholder="09 XXX XXXX" />
                  </div>
                </div>
                <div>
                  <label htmlFor="vehicleType-full" className="block text-sm font-semibold text-slate-900 mb-2">Vehicle Type</label>
                  <div className="relative">
                    <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select id="vehicleType-full" name="vehicleType" required className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base appearance-none bg-white">
                      <option value="">Select vehicle type...</option>
                      {vehicleTypes.map((type) => (<option key={type.value} value={type.value}>{type.label}</option>))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="vehicleAge-full" className="block text-sm font-semibold text-slate-900 mb-2">Vehicle Age</label>
                  <div className="relative">
                    <Gauge className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select id="vehicleAge-full" name="vehicleAge" required className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base appearance-none bg-white">
                      <option value="">Select vehicle age...</option>
                      {vehicleAges.map((age) => (<option key={age.value} value={age.value}>{age.label}</option>))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="vehicleValue-full" className="block text-sm font-semibold text-slate-900 mb-2">Estimated Vehicle Value</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select id="vehicleValue-full" name="vehicleValue" required className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base appearance-none bg-white">
                      <option value="">Select value range...</option>
                      {vehicleValues.map((val) => (<option key={val.value} value={val.value}>{val.label}</option>))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="vehicleDetails-full" className="block text-sm font-semibold text-slate-900 mb-2">Vehicle Make, Model & Year (Optional)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
                  <textarea id="vehicleDetails-full" name="vehicleDetails" rows={3} className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base resize-none" placeholder="e.g. 2018 Toyota Corolla — any previous issues or specific coverage needs?" />
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all duration-300 text-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:-translate-y-0.5">
                {isSubmitting ? 'Submitting...' : 'Get My Free breakdown insurance Quote →'}
              </button>
            </div>
          </form>

          <div className="bg-slate-50 px-6 sm:px-10 py-6 border-t border-slate-200">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {securityBadges.map((badge) => {
                const BadgeIcon = badge.icon;
                return (
                  <div key={badge.label} className="flex items-center gap-2">
                    <BadgeIcon className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-medium text-slate-600">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
