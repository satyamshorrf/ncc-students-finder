import React from 'react';
import PageLayout from '../components/PageLayout';

const Genesis = () => {
  return (
    <PageLayout title="GENESIS">
      <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">GENESIS</h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            The Cadet Corps Committee which was formed on 29 Sep 1946 with Pt HN Kunzru as chairman held six meetings in South Block, New Delhi. At the same time, Pt HN Kunzru formed sub-committees which were sent on study tours in all the main provinces of pre-independent India including provinces which are now located in Bangladesh and Pakistan. One sub-committee was also sent on tour to Great Britain and France from 15 Feb 1947 to 31 Mar 1947 to study the Youth and Cadet organisations in those countries.
          </p>

          <p>
            The Cadet Corps Committee carried out exhaustive study of the problem of youth in India. Its sub-committees after their tour at home and abroad submitted their report to the Govt of India in Mar 1947. Soon after the report was submitted, a far reaching political development began to impact the country, due to which the Cadet Corps Scheme had to be kept in abeyance. The religious strife which then was at its zenith, ultimately led to the partition of the country into India and Pakistan.
          </p>

          <p>
            On the stroke of midnight of 14/15 Aug 1947, India achieved her independence. Immediately after independence, India was confronted with problems of formidable magnitude concerning not only repatriation of millions of displaced persons from Pakistan but also a full scale invasion of Kashmir by the Armed tribesmen supported by Pakistan. The armed forces had to rush to retrieve Kashmir at a time when they were already pre-occupied with the internal problem of maintaining law and order during the country's initial stage of consolidation.
          </p>

          <p>
            The war in Kashmir and the consequent loss of a portion of Indian territory; the open support of Western Powers to Pakistan in the Security Council of the United Nations, made it more than evident to the Indian leaders that they not only had to strengthen the Armed Forces but also create sufficient strength of reserves, who could take up arms, when required. The gravity of time and event found expression in the Indian Legislature through anxious and pressing demand for military training of young men and women throughout the country.
          </p>

          <div className="flex gap-8 mt-8">
            <div className="w-1/3">
              <img 
                src="/genesis-image.jpg" 
                alt="Historical NCC Image" 
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="w-2/3">
              <p>
                At this juncture, Prime Minister Pt Jawahar Lal Nehru at the behest of Sardar Baldev Singh, the then Defence Minister and Sardar Vallabhbhai Patel, then Home Minister, took out the Kunzuru Committee Report for a serious studyfrom the shelves of the Defence Department. On 05 Dec 1947, after being approved by the Defence Committee, the essence of the Cadet Corps Committee Report was put to the Chief Commissioner and Chief Ministers Conference and Chief Secretaries Conference for their comments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Genesis;
