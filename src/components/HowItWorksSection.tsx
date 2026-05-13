
const steps = [
  {
    step: '01',
    title: 'Know What You Need',
    description: 'Browse our plain-English coverage guides — comprehensive, drivetrain, electrical, EV battery, roadside, and more. Understand what each policy actually covers before you decide.',
    icon: '📖',
  },
  {
    step: '02',
    title: 'Compare Providers Side by Side',
    description: 'See all six leading providers in one place. We compare claim limits, EV cover, policy tiers, ratings and key inclusions — independently, with no provider paying for placement.',
    icon: '⚖️',
  },
  {
    step: '03',
    title: 'Go Straight to Your Provider',
    description: 'Found the right fit? Click through directly to the provider\'s own website to get an accurate quote for your specific vehicle. No middlemen, no delays.',
    icon: '🔗',
  },
  {
    step: '04',
    title: 'Drive Without the Worry',
    description: 'With the right breakdown cover in place, unexpected mechanical bills stop being a financial crisis. Any vehicle, any driver, any corner of the country.',
    icon: '✅',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">How It Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">We&apos;ve done the research. You make the call. Here&apos;s how to go from confused to covered in four simple steps.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-orange-200 -translate-y-1/2 z-0" style={{ width: 'calc(100% - 2.5rem)', left: 'calc(50% + 2.5rem)' }} />
              )}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-amber-200 transition-all duration-300 relative z-10 h-full flex flex-col">
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">Step {step.step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
