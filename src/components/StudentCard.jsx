import React from 'react';
import { Phone, Mail } from 'lucide-react';

const StudentCard = ({ student }) => {
  const handleCall = () => {
    window.location.href = `tel:${student.mobile}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${student.email}`;
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg border border-gray-200 p-6">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-4xl text-gray-500">
            {student.name.charAt(0)}
          </span>
        </div>
      </div>

      {/* Student Details */}
      <div className="space-y-2">
        <div className="text-lg font-semibold text-center mb-4">
          {student.name}
        </div>
        
        <div className="text-sm">
          <p><span className="font-medium">Father's Name:</span> {student.fatherName}</p>
          <p><span className="font-medium">Mother's Name:</span> {student.motherName}</p>
          <p><span className="font-medium">Class Roll No:</span> {student.classRollNo}</p>
          <p><span className="font-medium">Regimental No:</span> {student.regimentalNo}</p>
        </div>

        {/* Contact Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleCall}
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Phone size={18} />
            <span>Call</span>
          </button>
          
          <button
            onClick={handleEmail}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail size={18} />
            <span>Email</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;