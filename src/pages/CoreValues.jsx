import React from 'react';
import PageLayout from '../components/PageLayout';

const CoreValues = () => {
  const values = [
    {
      id: 'a',
      text: 'A sense of patriotic commitment to encourage cadets to contribute to national development.'
    },
    {
      id: 'b',
      text: 'Respect for diversities in religion, language, culture, ethnicity, life style and habitat to instill a sense of National unity and social cohesion.'
    },
    {
      id: 'c',
      text: 'Abiding commitment to learn and adhere to the norms and values enshrined in the Indian Constitution.'
    },
    {
      id: 'd',
      text: 'Understanding the value of a just and impartial exercise of authority.'
    },
    {
      id: 'e',
      text: 'Ability to participate in community development and other social programme.'
    },
    {
      id: 'f',
      text: 'A healthy life style free of substance abuse and other unhealthy practices.'
    },
    {
      id: 'g',
      text: 'Sensitivity to the needs of poor and socially disadvantaged fellow citizens.'
    },
    {
      id: 'h',
      text: 'Inculcating habits of restraint and self-awareness.'
    },
    {
      id: 'i',
      text: 'Understanding the values of honesty, truthfulness, self-sacrifice, perseverance and hard work.'
    },
    {
      id: 'j',
      text: 'Respect for knowledge, wisdom and the power of ideas.'
    }
  ];

  return (
    <PageLayout title="CORE VALUES">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">CORE VALUES</h2>
        
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            The NCC is a responsive, learning and continuously evolving organization. Its activity is guided by certain Core Values that we endeavour to instill among all ranks of the NCC. These include the following:
          </p>

          <div className="space-y-4 mt-8">
            {values.map((value) => (
              <div key={value.id} className="flex gap-4 text-gray-700">
                <span className="text-lg font-medium">{value.id}.</span>
                <p className="text-lg">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CoreValues;
