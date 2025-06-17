const IntegrationVisual = () => {
  const integrations = [
    { 
      name: 'Gmail', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      ),
      position: 'top-left'
    },
    { 
      name: 'HubSpot', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#FF7A59" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.104c-3.916 0-7.104-3.188-7.104-7.104S8.084 4.896 12 4.896s7.104 3.188 7.104 7.104-3.188 7.104-7.104 7.104zm0-13.5c-3.518 0-6.375 2.857-6.375 6.375S8.482 18.354 12 18.354s6.375-2.857 6.375-6.375S15.518 5.604 12 5.604zm0 10.5c-2.277 0-4.125-1.848-4.125-4.125S9.723 7.854 12 7.854s4.125 1.848 4.125 4.125S14.277 16.104 12 16.104z"/>
        </svg>
      ),
      position: 'top-right'
    },
    { 
      name: 'Slack', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
          <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
          <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"/>
          <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
        </svg>
      ),
      position: 'center-left'
    },
    { 
      name: 'Marketo', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#5C4C9F" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.104c-3.916 0-7.104-3.188-7.104-7.104S8.084 4.896 12 4.896s7.104 3.188 7.104 7.104-3.188 7.104-7.104 7.104zm0-13.5c-3.518 0-6.375 2.857-6.375 6.375S8.482 18.354 12 18.354s6.375-2.857 6.375-6.375S15.518 5.604 12 5.604zm0 10.5c-2.277 0-4.125-1.848-4.125-4.125S9.723 7.854 12 7.854s4.125 1.848 4.125 4.125S14.277 16.104 12 16.104z"/>
        </svg>
      ),
      position: 'center-right'
    },
    { 
      name: 'Outlook', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#0078D4" d="M21.5 2H2.5C1.67 2 1 2.67 1 3.5v17c0 .83.67 1.5 1.5 1.5h19c.83 0 1.5-.67 1.5-1.5v-17c0-.83-.67-1.5-1.5-1.5z"/>
          <path fill="#FFFFFF" d="M12 6.5l-6 3.5v7l6 3.5 6-3.5v-7l-6-3.5z"/>
          <path fill="#0078D4" d="M12 6.5l-6 3.5v7l6 3.5 6-3.5v-7l-6-3.5z"/>
        </svg>
      ),
      position: 'bottom-left'
    },
    { 
      name: 'Salesforce', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#00A1E0" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.104c-3.916 0-7.104-3.188-7.104-7.104S8.084 4.896 12 4.896s7.104 3.188 7.104 7.104-3.188 7.104-7.104 7.104zm0-13.5c-3.518 0-6.375 2.857-6.375 6.375S8.482 18.354 12 18.354s6.375-2.857 6.375-6.375S15.518 5.604 12 5.604zm0 10.5c-2.277 0-4.125-1.848-4.125-4.125S9.723 7.854 12 7.854s4.125 1.848 4.125 4.125S14.277 16.104 12 16.104z"/>
        </svg>
      ),
      position: 'bottom-right'
    }
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left': return 'top-4 left-4';
      case 'top-right': return 'top-4 right-4';
      case 'center-left': return 'top-1/2 left-4 -translate-y-1/2';
      case 'center-right': return 'top-1/2 right-4 -translate-y-1/2';
      case 'bottom-left': return 'bottom-4 left-4';
      case 'bottom-right': return 'bottom-4 right-4';
      default: return '';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sootra seamlessly integrates with your existing workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In this integration section, Sootra AI transforms marketing requirements into 
            landing pages and emails to get traffic, then syncs with HubSpot and Marketo.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-12 relative min-h-[600px] overflow-hidden shadow-2xl border border-gray-100">
            
            {/* Central Sootra AI Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-40 h-40 bg-gradient-to-br from-[#1314FF] to-[#0F0FCC] rounded-full flex items-center justify-center relative shadow-2xl">
                <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
                <div className="absolute inset-0 rounded-full bg-[#1314FF] animate-ping opacity-20"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1314FF] to-[#0F0FCC] animate-pulse opacity-30"></div>
              </div>
              <div className="text-center mt-4">
                <div className="text-white bg-gradient-to-r from-[#1314FF] to-[#0F0FCC] px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg">
                  Sootra AI
                </div>
              </div>
            </div>

            {/* Integration Points */}
            {integrations.map((integration, index) => (
              <div key={index} className={`absolute ${getPositionClasses(integration.position)}`}>
                <div className="flex flex-col items-center space-y-2 group">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-all duration-300 hover:shadow-xl hover:border-[#1314FF]/20">
                    {integration.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
                    {integration.name}
                  </span>
                </div>
              </div>
            ))}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1314FF" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#FF6A13" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#1314FF" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              
              {/* Animated connection lines from center to each integration */}
              <g stroke="url(#connectionGradient)" strokeWidth="3" fill="none">
                <line x1="50%" y1="50%" x2="20%" y2="20%" strokeDasharray="5,5" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="80%" y2="20%" strokeDasharray="5,5" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="20%" y2="50%" strokeDasharray="5,5" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="80%" y2="50%" strokeDasharray="5,5" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="20%" y2="80%" strokeDasharray="5,5" className="animate-pulse" />
                <line x1="50%" y1="50%" x2="80%" y2="80%" strokeDasharray="5,5" className="animate-pulse" />
              </g>
            </svg>

            {/* Process Flow */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/95 backdrop-blur-sm rounded-full px-10 py-4 shadow-xl border border-gray-100">
              <span className="text-sm font-medium text-gray-700">Marketing Requirements</span>
              <span className="text-[#FF6A13] text-xl font-bold">+</span>
              <span className="text-sm font-medium text-[#1314FF]">AI</span>
              <span className="text-gray-400 text-xl font-bold">=</span>
              <span className="text-sm font-medium text-gray-700">LP & Emails</span>
              <span className="text-gray-400 text-xl font-bold">=</span>
              <span className="text-sm font-medium text-gray-700">Traffic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationVisual;
