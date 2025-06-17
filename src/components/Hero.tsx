
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Early access requested for:', email);
    // Handle form submission
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50/30 px-4 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Enterprise-Grade Campaigns, Minus the Bloat
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="text-[#1314FF]">Sootra</span> — One AI Platform to{' '}
          <span className="relative">
            Design, Test & Launch
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
              <path
                d="M2 10C100 2 200 2 298 10"
                stroke="#FF6A13"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">
          Landing Pages, Emails, and Entire Campaigns at a{' '}
          <span className="font-semibold text-gray-900">Fortune-500 Standard</span>
        </p>

        <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
          Stop juggling design apps, code editors, device labs and analytics dashboards. 
          Sootra's unified, AI-powered workspace builds pixel-perfect assets, validates them on 100+ clients, 
          and tracks every KPI—so you can ship world-class marketing with a single login.
        </p>

        {/* CTA Form */}
        <form onSubmit={handleEarlyAccess} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1314FF] focus:border-transparent"
            required
          />
          <Button 
            type="submit"
            className="bg-[#1314FF] hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Request Early Access →
          </Button>
        </form>

        <p className="text-sm text-gray-500 mb-12">
          Built for product teams, agencies and in-house marketers who demand the cleanest code, 
          the sharpest visuals, and the fastest path from idea to ROI.
        </p>

        {/* Abstract AI Network Visual */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 relative overflow-hidden">
            <div className="grid grid-cols-3 gap-8 items-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                  <span className="text-2xl">🛠️</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Generate</span>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-[#1314FF] rounded-full flex items-center justify-center relative">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    <path d="M2 17L12 22L22 17" />
                    <path d="M2 12L12 17L22 12" />
                  </svg>
                  <div className="absolute inset-0 rounded-full bg-[#1314FF] animate-pulse opacity-30"></div>
                </div>
                <span className="text-sm font-semibold text-[#1314FF]">Sootra AI</span>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Accelerate</span>
              </div>
            </div>
            
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1314FF" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#FF6A13" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#1314FF" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
