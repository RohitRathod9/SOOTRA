
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Final CTA submission:', email);
    // Handle form submission
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1314FF] to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Ready to condense your marketing stack into a{' '}
          <span className="text-[#FF6A13]">single, elegant solution?</span>
        </h2>
        
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Join 500+ product teams, agencies, and marketers who are already 
          building enterprise-grade campaigns with Sootra.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email"
            className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6A13] bg-white/95 backdrop-blur-sm"
            required
          />
          <Button 
            type="submit"
            className="bg-[#FF6A13] hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Request Early Access →
          </Button>
        </form>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            14-day free trial
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Cancel anytime
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-blue-400/20">
          <p className="text-blue-200 mb-4">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white/10 px-4 py-2 rounded text-sm">Fortune 500</div>
            <div className="bg-white/10 px-4 py-2 rounded text-sm">Y Combinator</div>
            <div className="bg-white/10 px-4 py-2 rounded text-sm">Series A+</div>
            <div className="bg-white/10 px-4 py-2 rounded text-sm">Agencies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
