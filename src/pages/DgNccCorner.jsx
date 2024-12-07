import React from 'react';
import PageLayout from '../components/PageLayout';

const DgNccCorner = () => {
  return (
    <PageLayout title="DG NCC CORNER">
      <div className="bg-[#0D47A1] text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">DG NCC</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="md:w-1/4">
            <div className="bg-[#90CAF9] p-2 rounded-lg">
              <img 
                src="/dg-ncc.jpg" 
                alt="Lieutenant General Gurbirpal Singh" 
                className="w-full rounded"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold mb-4">
              Lieutenant General Gurbirpal Singh, PVSM, AVSM, VSM
            </h3>

            <div className="space-y-4">
              <p>
                1. Lieutenant General Gurbirpal Singh, PVSM, AVSM, VSM was commissioned into The PARACHUTE REGIMENT in 1987. An alumnus of the National Defence Academy, Khadakvasla and the Indian Military Academy, Dehradun. He has attended the Defence Services Staff College in Wellington, the Higher Command Course in Mhow and the National Defence College Course in New Delhi.
              </p>

              <p>
                2. He has been a Company Commander in counter insurgency environment in Nagaland and in the Siachen Glacier. He has commanded a Special Forces Battalion in the intense counter terrorism environment of the Valley Sector in Kashmir and also in the United Nations Interim Force in Lebanon. He has commanded a Mountain Brigade & an Infantry Division on the Line of Control.
              </p>

              <p>
                3. The General Officer has tenanted the appointments of General Staff Officer (Operations) in Sector Headquarters Rashtriya Rifles. He has had two tenures each in Military Operation Directorate and Headquarters Integrated Defence Staff. Besides, he has been an Instructor at the Commando School and Indian Military Training Team.
              </p>

              <p>
                4. An alumnus of the National Cadet Corps, Lieutenant General Gurbirpal Singh, PVSM, AVSM, VSM has now taken over the reins of National Cadet Corps – The premier youth organisation of the country, as its 34th Director General on 27 Sep 2021.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DgNccCorner; 