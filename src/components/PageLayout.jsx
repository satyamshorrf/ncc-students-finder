import React from 'react';
import Sidebar from './Sidebar';

const PageLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="hidden md:block sticky top-4 self-start">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg p-6 shadow-lg">
            <h1 className="text-2xl font-bold mb-8 text-[#1B5E20]">{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout; 