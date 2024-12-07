import React from 'react';
import PageLayout from '../components/PageLayout';
import { Users, Medal } from 'lucide-react';

const AboutNCC = () => {
  return (
    <PageLayout title="ABOUT NCC">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Our Pride Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <Medal className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">OUR PRIDE</h3>
          </div>
          <p className="text-gray-600 mb-4">
            A few amongst us created their mark on the world stage by achieving the uncommon. 
            Meet these inspiring men and women.
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-800">
            READ MORE
          </button>
        </div>

        {/* The Architects Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-8 h-8 text-blue-500" />
            <h3 className="text-xl font-semibold">THE ARCHITECTS</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Meet the Architects of NCC – Leaders who have been instrumental in nurturing 
            the organization and lending it it's present state and structure.
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-800">
            READ MORE
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutNCC;