
const BenefitIcons = () => {
  const benefits = [
    {
      icon: '⚡',
      title: 'Instant Setup',
      description: 'Connect ESP and start building—no plugins, no code.'
    },
    {
      icon: '🧠',
      title: 'Domain-Smart AI',
      description: 'Trains on your product docs and brand voice for hyper-relevant copy.'
    },
    {
      icon: '🔄',
      title: 'CRM Auto-Sync',
      description: 'Push every event & asset straight into your CRM.'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'End-to-end encryption, regional data centres, strict access controls.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#1314FF]/5 to-[#FF6A13]/5 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitIcons;
