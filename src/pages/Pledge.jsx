import React from 'react';
import PageLayout from '../components/PageLayout';

const Pledge = () => {
  return (
    <PageLayout title="PLEDGE">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-12 text-center">PLEDGE</h2>
        
        {/* Pledge Content */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-6 text-gray-800">
            <p className="text-xl font-semibold">
              WE THE CADETS OF THE NATIONAL CADET CORPS,
            </p>
            
            <p className="text-xl font-semibold">
              DO SOLEMNLY PLEDGE THAT WE SHALL ALWAYS UPHOLD THE UNITY OF INDIA.
            </p>
            
            <p className="text-xl font-semibold">
              WE RESOLVE TO BE DISCIPLINED AND RESPONSIBLE CITIZEN OF OUR NATION.
            </p>
            
            <p className="text-xl font-semibold">
              WE SHALL UNDERTAKE POSITIVE COMMUNITY SERVICE IN THE SPIRIT OF SELFLESSNESS
            </p>
            
            <p className="text-xl font-semibold">
              AND CONCERN FOR OUR FELLOW BEINGS.
            </p>
          </div>
        </div>

        {/* Optional: Add decorative elements */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 rounded-full"></div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Pledge;
