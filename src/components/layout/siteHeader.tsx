import React, { useState, useRef, useEffect } from 'react';
import { LogOut, LogIn } from 'lucide-react';

const SiteHeader = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsPopoverOpen(false);
      }
    };

    if (isPopoverOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopoverOpen]);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login clicked');
    setIsPopoverOpen(false);
  };

  return (
    <header className='bg-white text-gray-800 shadow-md fixed z-[9999] w-full'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              Anti Corruption Portal
            </h1>
          </div>

          {/* Logout Icon with Popover */}
          <div className="relative" ref={popoverRef}>
            <button
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              className="p-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
              aria-label="Logout menu"
            >
              <LogOut className="w-6 h-6" />
            </button>

            {/* Popover */}
            {isPopoverOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50 overflow-hidden border border-gray-200">
                <div className="py-1">
                  <button
                    onClick={handleLogin}
                    className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors duration-150"
                  >
                    <LogIn className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="font-medium">Login</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;