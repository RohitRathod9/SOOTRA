
const CompetitiveEdge = () => {
  const features = [
    {
      title: 'HubSpot & Marketo Native',
      description: 'Publish templates, sync tokens, and push analytics back automatically.',
      icon: '🔗'
    },
    {
      title: 'Reusable Playbooks',
      description: 'Save high-performing sequences; roll them out across teams or clients in seconds.',
      icon: '📋'
    },
    {
      title: 'Role-Based Workspaces',
      description: 'Designers, marketers and compliance reviewers collaborate without stepping on toes.',
      icon: '👥'
    },
    {
      title: 'Bank-Level Security',
      description: 'SOC 2, GDPR, encryption in transit and at rest; enterprise SSO ready.',
      icon: '🔒'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Replace Your Tool Stack—Keep Your{' '}
            <span className="text-[#1314FF]">Competitive Edge</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade features that eliminate the need for multiple tools while 
            maintaining the highest standards of security and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#1314FF]/20">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1314FF]/10 to-[#FF6A13]/10 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Proven to Save 10+ Hours per Campaign
              </h3>
              <p className="text-gray-600">
                Real metrics from our early access users across Fortune 500 companies
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1314FF] mb-2">85%</div>
                <div className="text-sm text-gray-600">Faster Campaign Launch</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6A13] mb-2">12hrs</div>
                <div className="text-sm text-gray-600">Average Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1314FF] mb-2">94%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6A13] mb-2">3x</div>
                <div className="text-sm text-gray-600">Campaign Performance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveEdge;
