import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center p-4 bg-white border-b-[40px] border-blue-900">
      <div className="flex items-center flex-grow md:flex-grow-0">
        <img
          src="https://github.com/user-attachments/assets/f40e4981-e2ee-4a0b-aac2-181640aa1528"
          alt="NCC logo"
          className="mr-2 md:mr-4 h-12 w-12 md:h-16 md:w-16 object-contain"
        />
        <div className="md:hidden">
          <span className="text-blue-800 text-lg font-semibold">
            NCC INTEGRATED SOFTWARE
          </span>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex items-center">
          <span className="text-red-600 text-xl font-bold mr-2">राष्ट्रीय</span>
          <span className="text-blue-600 text-xl font-bold mr-2">कैडेट</span>
          <span className="text-green-600 text-xl font-bold">कोर</span>
        </div>
        <div className="flex items-center">
          <span className="text-red-600 text-xl font-bold mr-2">NATIONAL</span>
          <span className="text-blue-600 text-xl font-bold mr-2">CADET</span>
          <span className="text-green-600 text-xl font-bold">CORPS</span>
        </div>
      </div>

      <div className="flex-grow text-center hidden md:block">
        <span className="text-blue-600 text-5xl text-pretty">
          NCC INTEGRATED SOFTWARE
        </span>
        <br />
        <span className="text-red-600 text-xl font-bold mr-2">
          एकता और अनुशासन
        </span>
      </div>

      <div className="hidden md:flex items-center">
        <img
          src="https://github.com/user-attachments/assets/71a45bc5-1fd2-4b29-9ac3-f6400efebdd2"
          alt="Placeholder image"
          className="ml-4 h-20 w-70 object-contain"
        />
        <img
          src="https://github.com/user-attachments/assets/f567649d-359f-4034-b838-591231c36a1e"
          alt="Placeholder image"
          className="ml-4 h-20 w-70 object-contain"
        />
        <img
          src="https://github.com/user-attachments/assets/abdba85f-ac54-4578-842a-5fcb862c95d8"
          alt="Placeholder image"
          className="ml-4 h-100 w-70 object-contain"
        />
        <img
          src="https://github.com/user-attachments/assets/612b5187-e911-4a46-a1f5-aeb5070bb8fb"
          alt="Placeholder image"
          className="ml-4 h-100 w-70 object-contain"
        />
      </div>
    </div>
  );
};

export default Navbar;
