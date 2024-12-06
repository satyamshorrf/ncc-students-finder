import React from 'react'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full">
      <div className="md:hidden flex items-center justify-center bg-white p-2 border-t border-gray-200">
        <img
          src="https://github.com/user-attachments/assets/71a45bc5-1fd2-4b29-9ac3-f6400efebdd2"
          alt="Placeholder image"
          className="h-8 w-8 mx-1 object-contain"
        />
        <img
          src="https://github.com/user-attachments/assets/f567649d-359f-4034-b838-591231c36a1e"
          alt="Placeholder image"
          className="h-8 w-8 mx-1 object-contain"
        />
        <img
          src="https://github.com/user-attachments/assets/abdba85f-ac54-4578-842a-5fcb862c95d8"
          alt="Placeholder image"
          className="h-8 w-8 mx-1 object-contain"
        />
        <img
          src="https://github.com/user-attachments/assets/612b5187-e911-4a46-a1f5-aeb5070bb8fb"
          alt="Placeholder image"
          className="h-8 w-8 mx-1 object-contain"
        />
      </div>
      <div className="flex items-center ">
        <div className="w-16 h-10 flex items-center justify-center bg-[#1a237e]">
          <img 
            src="https://github.com/user-attachments/assets/a702902e-5f18-46af-a97c-dc02c39cfa13" 
            alt="BISAG-N Logo" 
            className="h-8 w-8 object-contain"
          />
        </div>
        <div className="flex-1 bg-[#1a237e] text-white py-1.5">
          <div className="text-center">
            <p className="text-[11px] leading-tight">
              Conceptualized by HQ DGNCC & Developed by Bhaskaracharya National Institute for Space Applications and Geo-informatics
            </p>
            <p className="text-[11px] leading-tight">
              Ministry of Electronics & Information Technology, Government of India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;