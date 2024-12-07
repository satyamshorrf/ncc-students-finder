import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ onItemClick }) => {
  const location = useLocation();
  const menuItems = [
    { 
      title: 'ABOUT NCC',
      path: '/about-ncc',
      bgColor: 'bg-[#388E3C]'
    },
    { 
      title: 'DG NCC CORNER',
      path: '/dg-ncc',
      bgColor: 'bg-[#1B5E20]'
    },
    { 
      title: 'AIM',
      path: '/aim',
      bgColor: 'bg-[#388E3C]'
    },
    { 
      title: 'GENESIS',
      path: '/genesis',
      bgColor: 'bg-[#1B5E20]'
    },
    { 
      title: 'MOTTO',
      path: '/motto',
      bgColor: 'bg-[#388E3C]'
    },
    { 
      title: 'CORE VALUES',
      path: '/core-values',
      bgColor: 'bg-[#1B5E20]'
    },
    { 
      title: 'PLEDGE',
      path: '/pledge',
      bgColor: 'bg-[#388E3C]'
    },
    { 
      title: 'NCC FLAG',
      path: '/ncc-flag',
      bgColor: 'bg-[#1B5E20]'
    },
    { 
      title: 'NCC SONG',
      path: '/ncc-song',
      bgColor: 'bg-[#388E3C]'
    },
    { 
      title: 'DOWNLOADS',
      path: '/downloads',
      bgColor: 'bg-[#1B5E20]'
    },
    { 
      title: 'TRAINING MATERIAL',
      path: '/training',
      bgColor: 'bg-[#388E3C]'
    },
  ];

  const handleClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className="w-64 rounded-lg overflow-hidden">
      <div className="bg-white border-2 border-[#388E3C] rounded-t-lg">
        <Link
          to="/about-ncc"
          onClick={handleClick}
          className={`block px-6 py-3 text-[#388E3C] font-semibold ${
            location.pathname === '/about-ncc' ? 'bg-[#E8F5E9]' : ''
          }`}
        >
          ABOUT NCC
        </Link>
      </div>

      <div className="mt-1">
        {menuItems.slice(1).map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={handleClick}
            className={`block px-6 py-3 text-white font-medium transition-colors ${
              location.pathname === item.path 
                ? item.bgColor
                : 'bg-white text-[#388E3C] hover:text-white ' + item.hoverColor
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar; 