import React from 'react';
import PageLayout from '../components/PageLayout';

const NccFlag = () => {
  return (
    <PageLayout title="NCC FLAG">
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">NCC FLAG</h2>
        
        {/* Flag Image Section */}
        <div className="flex justify-center mb-8">
          <div className="w-96 h-64 flex shadow-lg rounded-lg overflow-hidden">
            {/* Red Section */}
            <div className="w-1/3 bg-[#FF4B55]"></div>
            {/* Navy Blue Section with NCC Logo */}
            <div className="w-1/3 bg-[#41479B] flex items-center justify-center">
              <div className="w-20 h-20 relative">
                <img 
                  src="/ncc-logo-gold.png" 
                  alt="NCC Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Light Blue Section */}
            <div className="w-1/3 bg-[#7BD3F7]"></div>
          </div>
        </div>

        {/* Description Text */}
        <div className="text-gray-700 leading-relaxed">
          <p className="mb-4">
            The NCC flag for various units of the NCC was first introduced in 1951. The flag was of same pattern, colour and size as was used by various regiments of the Army. The only difference was that it had the NCC badge and unit designation placed in the centre.
          </p>
          
          <p className="mb-4">
            Later on it was felt that the flag should be in keeping with the inter-service character of the Corps. In 1954 the existing tricolour flag was introduced. The three colours in the flag depict the three services of the Corps, red for the Army, deep blue for the Navy and light blue for the Air Force.
          </p>
          
          <p>
            The letters NCC and the NCC crest in gold in the middle of the flag encircled by a wreath of lotus, give the flag a colourful look and a distinct identity.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default NccFlag;
