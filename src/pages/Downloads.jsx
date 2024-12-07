import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Download, Search } from 'lucide-react';

const Downloads = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const documents = [
    {
      serNo: '1',
      docType: 'AUTH',
      branch: 'P&C',
      topic: 'NCC ACT 1948',
      subject: 'NCC ACT 1948',
      date: '19/11/2024',
      downloadUrl: '/documents/ncc-act-1948.pdf'
    },
    {
      serNo: '2',
      docType: 'AUTH',
      branch: 'P&C',
      topic: 'NCC RULES',
      subject: 'NCC RULES',
      date: '19/11/2024',
      downloadUrl: '/documents/ncc-rules.pdf'
    },
    {
      serNo: '3',
      docType: 'AUTH',
      branch: 'FINANCE',
      topic: 'CAMPS',
      subject: 'TEST',
      date: '10/10/2024',
      downloadUrl: '/documents/camps.pdf'
    },
    {
      serNo: '4',
      docType: 'GUIDELINE',
      branch: 'P&C',
      topic: 'IMPLEMENTATION GUIDELINES FOR FSFS SD/SW',
      subject: 'FSFS SD/ SW',
      date: '19/11/2024',
      downloadUrl: '/documents/fsfs-guidelines.pdf'
    },
    {
      serNo: '5',
      docType: 'DOCU',
      branch: 'MS',
      topic: 'HIRING',
      subject: 'HIRING OF DATA ENTRY OPERATOR',
      date: '15/10/2024',
      downloadUrl: '/documents/hiring-operator.pdf'
    }
  ];

  const filteredDocuments = documents.filter(doc => 
    Object.values(doc).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <PageLayout title="DOWNLOADS">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">DOWNLOADS-PUBLIC</h2>
        
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
                <th className="px-4 py-3 text-left">DOC TYPE</th>
                <th className="px-4 py-3 text-left">BRANCH</th>
                <th className="px-4 py-3 text-left">TOPIC</th>
                <th className="px-4 py-3 text-left">SUBJECT</th>
                <th className="px-4 py-3 text-left">DATE</th>
                <th className="px-4 py-3 text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredDocuments.map((doc, index) => (
                <tr 
                  key={doc.serNo}
                  className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                >
                  <td className="px-4 py-3 border">{doc.serNo}</td>
                  <td className="px-4 py-3 border">{doc.docType}</td>
                  <td className="px-4 py-3 border">{doc.branch}</td>
                  <td className="px-4 py-3 border">{doc.topic}</td>
                  <td className="px-4 py-3 border">{doc.subject}</td>
                  <td className="px-4 py-3 border">{doc.date}</td>
                  <td className="px-4 py-3 border text-center">
                    <a 
                      href={doc.downloadUrl}
                      className="inline-block text-blue-600 hover:text-blue-800"
                      download
                    >
                      <Download size={20} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Rows per page: 
            <select className="ml-2 border rounded px-2 py-1">
              <option>100</option>
              <option>50</option>
              <option>25</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button className="px-2 py-1 border rounded hover:bg-gray-100">&lt;&lt;</button>
            <button className="px-2 py-1 border rounded hover:bg-gray-100">&lt;</button>
            <button className="px-2 py-1 border rounded hover:bg-gray-100">&gt;</button>
            <button className="px-2 py-1 border rounded hover:bg-gray-100">&gt;&gt;</button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Downloads;
