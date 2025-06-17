
const HowItWorks = () => {
  const steps = [
    {
      icon: '🛠️',
      title: 'Generate',
      subtitle: 'Create Your Campaign with AI',
      description: 'Describe a goal or drop in a brief, and Sootra drafts enterprise-grade emails and landing pages for the campaign in minutes.',
      features: [
        'Atomic Library: 100+ rigorously tested templates and components',
        'On-Brand in One Click: AI for bespoke hero images, copy tweaks or localisation',
        'Every element aligns with brand guidelines automatically'
      ]
    },
    {
      icon: '🔬',
      title: 'Validate',
      subtitle: 'True-to-Device Rendering',
      description: 'Preview on 100+ screens and email clients, including the latest Gmail, Outlook, iOS & foldables.',
      features: [
        'Light/Dark & Accessibility Scan with vision-language model',
        'Flags colour-contrast issues, alt tags, and interactive states',
        'Deliverability & Compliance Guardrails with auto-resolution'
      ]
    },
    {
      icon: '📈',
      title: 'Accelerate',
      subtitle: 'Live Performance Hub',
      description: 'Track opens, clicks, scroll depth and conversion events in real time.',
      features: [
        'Sootra Score™: Proprietary efficiency grade with AI suggestions',
        'Iterate, Republish, Repeat without exporting or re-coding',
        'Real-time optimization and performance insights'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            One Platform—Three Precision Modules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI generation to device validation to performance acceleration—everything you need in one elegant workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm border border-gray-200">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-[#1314FF] font-semibold">{step.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#FF6A13] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#1314FF] to-[#FF6A13] opacity-30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
