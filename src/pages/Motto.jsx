import React from 'react';
import PageLayout from '../components/PageLayout';

const Motto = () => {
  return (
    <PageLayout title="MOTTO">
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">MOTTO OF NCC</h2>
        
        {/* Main Content */}
        <div className="space-y-8">
          {/* Text Content */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <p>
              The need for having motto for the Corps was discussed in the 11th Central Advisory Committee (CAC) meeting held on 11 Aug 1978. The mottos suggested were "Duty and Discipline"; "Duty, Unity and Discipline"; "Duty and Unity"; "Unity and Discipline". The final decision for selection of "Unity and Discipline" as motto for the NCC was taken in the 12th CAC meeting held on 12 Oct 1980.
            </p>
          </div>

          {/* Motto Display */}
          <div className="flex justify-center items-center py-8">
            <div className="text-center">
              <div className="inline-block border-4 border-[#1B5E20] rounded-lg p-8">
                <h3 className="text-3xl font-bold text-[#1B5E20] tracking-wider">
                  UNITY AND DISCIPLINE
                </h3>
              </div>
            </div>
          </div>

          {/* Hindi Translation */}
          <div className="flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#1B5E20] tracking-wider">
                एकता और अनुशासन
              </h3>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Motto;
