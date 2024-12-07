import React from 'react';
import PageLayout from '../components/PageLayout';

const Aim = () => {
  const aims = [
    {
      image: "/aim-1.jpg",
      text: "To Create a Human Resource of Organized, Trained and Motivated Youth, To Provide Leadership in all Walks of life and be Always Available for the Service of the Nation."
    },
    {
      image: "/aim-2.jpg",
      text: "To Provide a Suitable Environment to Motivate the Youth to Take Up a Career in the Armed Forces."
    },
    {
      image: "/aim-3.jpg",
      text: "To Develop Character, Comradeship, Discipline, Leadership, Secular Outlook, Spirit of Adventure, and Ideals of Selfless Service amongst the Youth of the Country."
    }
  ];

  return (
    <PageLayout title="AIM">
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">AIM OF NCC</h2>
        
        {/* Introduction Text */}
        <div className="text-gray-700 text-lg leading-relaxed">
          <p>
            The 'Aims' of the NCC laid out in 1988 have stood the test of time and continue to meet the requirements expected of it in the current socio-economic scenario of the country. The NCC aims at developing character, comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless service amongst young citizens. Further, it aims at creating a pool of organized, trained and motivated youth with leadership qualities in all walks of life, who will serve the Nation regardless of which career they choose. Needless to say, the NCC also provides an environment conducive to motivating young Indians to join the armed forces.
          </p>
        </div>

        {/* Aims Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {aims.map((aim, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={aim.image} 
                  alt={`NCC Aim ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-center">
                  {aim.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Aim; 