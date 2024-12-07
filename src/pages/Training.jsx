import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Download, Search } from 'lucide-react';

const Training = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const materials = [
    {
      serNo: '1',
      division: 'JD/JW',
      subject: 'COMMON SUBJECT',
      topic: 'ORGANIZATION OF NCC',
      downloads: {
        ppt: null,
        pdf: '/materials/organization-ncc.pdf',
        video: '/materials/organization-ncc.mp4',
        mcq: '/materials/organization-ncc-mcq.pdf'
      }
    },
    {
      serNo: '2',
      division: 'JD/JW',
      subject: 'COMMON SUBJECT',
      topic: 'INCENTIVES TO CADETS',
      downloads: {
        ppt: null,
        pdf: '/materials/incentives.pdf',
        video: '/materials/incentives.mp4',
        mcq: null
      }
    },
    {
      serNo: '3',
      division: 'JD/JW',
      subject: 'COMMON SUBJECT',
      topic: 'DUTIES OF NCC CADETS',
      downloads: {
        ppt: null,
        pdf: '/materials/duties.pdf',
        video: null,
        mcq: null
      }
    },
    {
      serNo: '4',
      division: 'JD/JW',
      subject: 'COMMON SUBJECT',
      topic: 'NCC CAMPS TYPES AND CONDUCT',
      downloads: {
        ppt: null,
        pdf: '/materials/camps.pdf',
        video: null,
        mcq: null
      }
    },
    {
      serNo: '5',
      division: 'JD/JW',
      subject: 'COMMON SUBJECT',
      topic: 'NATIONAL INTEGRATION IMPORTANCE AND NECESSITY',
      downloads: {
        ppt: null,
        pdf: '/materials/national-integration.pdf',
        video: null,
        mcq: '/materials/national-integration-mcq.pdf'
      }
    }
  ];

  const filteredMaterials = materials.filter(material => 
    Object.values(material).some(value => 
      value && typeof value === 'string' && 
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const DownloadButton = ({ url }) => {
    if (!url) return <span className="text-gray-400">-</span>;
    return (
      <a 
        href={url}
        className="inline-block text-blue-600 hover:text-blue-800"
        download
      >
        <Download size={20} />
      </a>
    );
  };

  return (
    <PageLayout title="TRAINING">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">TRG-MATERIAL</h2>
        
        {/* Search Bar */}
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0D47A1] text-white">
                <th className="px-4 py-3 text-left">SER NO</th>
                <th className="px-4 py-3 text-left">DIVISION</th>
                <th className="px-4 py-3 text-left">SUBJECT</th>
                <th className="px-4 py-3 text-left">TOPIC</th>
                <th className="px-4 py-3 text-center" colSpan="4">DOWNLOADS</th>
              </tr>
              <tr className="bg-[#1565C0] text-white">
                <th colSpan="4"></th>
                <th className="px-4 py-2 text-center">PPT</th>
                <th className="px-4 py-2 text-center">PDF</th>
                <th className="px-4 py-2 text-center">VIDEO</th>
                <th className="px-4 py-2 text-center">MCQ</th>
              </tr>
            </thead>
            <tbody>
              {filteredMaterials.map((material, index) => (
                <tr 
                  key={material.serNo}
                  className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-4 py-3 border">{material.serNo}</td>
                  <td className="px-4 py-3 border">{material.division}</td>
                  <td className="px-4 py-3 border">{material.subject}</td>
                  <td className="px-4 py-3 border">{material.topic}</td>
                  <td className="px-4 py-3 border text-center">
                    <DownloadButton url={material.downloads.ppt} />
                  </td>
                  <td className="px-4 py-3 border text-center">
                    <DownloadButton url={material.downloads.pdf} />
                  </td>
                  <td className="px-4 py-3 border text-center">
                    <DownloadButton url={material.downloads.video} />
                  </td>
                  <td className="px-4 py-3 border text-center">
                    <DownloadButton url={material.downloads.mcq} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
};

export default Training; 