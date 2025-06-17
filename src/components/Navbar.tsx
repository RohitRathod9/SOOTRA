import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/sootra-logo.png" 
              alt="Sootra Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#1314FF] transition-colors font-medium">
              Features
            </a>
            <a href="#integrations" className="text-gray-600 hover:text-[#1314FF] transition-colors font-medium">
              Integrations
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-[#1314FF] transition-colors font-medium">
              Pricing
            </a>
            <Button className="bg-[#1314FF] hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
              Request Early Access
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-[#1314FF] font-medium">
                Features
              </a>
              <a href="#integrations" className="block px-3 py-2 text-gray-600 hover:text-[#1314FF] font-medium">
                Integrations
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-[#1314FF] font-medium">
                Pricing
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-[#1314FF] hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
                  Request Early Access
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
