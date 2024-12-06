import React, { useState } from 'react';

const Header = () => {
  const [searchValues, setSearchValues] = useState({
    search1: '',
    search2: '',
    search3: ''
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search values:', searchValues);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-4">
    

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-2">
          NCC Student Finder 📞
        </h2>

        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                name="search1"
                value={searchValues.search1}
                onChange={handleInputChange}
                placeholder="Enter Name..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="relative">
              <input
                type="number"
                name="search2"
                value={searchValues.search2}
                onChange={handleInputChange}
                placeholder="Enter Class Roll No..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="relative">
              <input
                type="number"
                name="search3"
                value={searchValues.search3}
                onChange={handleInputChange}
                placeholder="Enter Regimental No..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
                Find Now
              </button>
            </div>
          </div>
        </form>
      </div>
<br />

      <div className="">
        <p className="flex items-center p-4 bg-white border- border-t-[40px] border-blue-900">
          National Cadet Corps is a Tri-Services Organisation comprising the Army, Navy and Air Force, engaged in grooming the youth – 'The Leaders of Tomorrow' – into disciplined and patriotic citizens. The genesis of the NCC can be traced back to the First World War when the Britishers created the University Corps as the second line of defense and to have a large pool of trained youth available for employment into the Armed Forces. After independence the present day NCC under the Ministry of Defence came into existence on 16 Apr 1948 through NCC act XXXI, 1948. NCC was formally inaugurated on 15 Jul 1948 as soon as the schools and colleges reopened after summer vacation. The Girls Division of the NCC was started in Jul 1949. In 1950 Air Wing was added on 01 Apr with one Air squadron each at Bombay and Kolkata. The Naval Wing of the NCC was raised in Jul 1952, thus completing the true representation of all services in the Corps. Presently, NCC has approximately 13 Lakhs Cadets under its fold.
        </p>
      </div>
    </div>
  );
};

export default Header;