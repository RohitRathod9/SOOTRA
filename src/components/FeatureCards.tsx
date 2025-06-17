
const FeatureCards = () => {
  const features = [
    {
      title: 'Create Emails and Landing Pages with AI',
      description: 'Upload a file, paste a link, or describe your goals – and let Sootra do the rest.',
      highlights: [
        'Generate dynamic, editable email or landing page using our AI',
        'Personalize based on campaign goals, target audience, and brand voice',
        'Enterprise-grade output in minutes, not hours'
      ],
      icon: '🤖',
      color: 'from-blue-50 to-blue-100'
    },
    {
      title: 'Library of 100+ Ready Templates',
      description: 'Choose from curated, high-performing templates for every industry and goal.',
      highlights: [
        'Rigorously tested templates that snap together',
        'Save and customize frequently used designs as reusable components',
        'Inherit your brand system automatically'
      ],
      icon: '📚',
      color: 'from-orange-50 to-orange-100'
    },
    {
      title: 'Visual Testing on 100+ Devices',
      description: 'Get pixel-perfect previews across mobile, tablet, and desktop.',
      highlights: [
        'See how your designs render in Gmail, Outlook, Apple Mail, and more',
        'Light/dark mode toggles and instant feedback',
        'Proprietary Vision-Language Model (VLM) for accuracy'
      ],
      icon: '📱',
      color: 'from-purple-50 to-purple-100'
    },
    {
      title: 'Track Campaign Success',
      description: 'Real-time campaign dashboard to monitor opens, clicks, and conversion goals, heatmaps.',
      highlights: [
        'Identify drop-offs, iterate quickly, and re-test on the go',
        'Every email is graded with a proprietary performance score',
        'Based on structure, content clarity, compliance, accessibility'
      ],
      icon: '📊',
      color: 'from-green-50 to-green-100'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI content generation to comprehensive testing and performance tracking—
            streamline your entire marketing workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#1314FF] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
