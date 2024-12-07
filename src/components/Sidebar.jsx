import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ onItemClick }) => {
  const location = useLocation();
  const menuItems = [
    { 
      title: 'ABOUT NCC',
      path: '/about-ncc',
      bgColor: 'bg-[#43A047]'
    },
    { 
      title: 'DG NCC CORNER',
      path: '/dg-ncc',
      bgColor: 'bg-[#43A047]'
    },
    { 
      title: 'AIM',
      path: '/aim',
      bgColor: 'bg-[#43A047]'
    },
    { 
      title: 'GENESIS',
      path: '/genesis',
      bgColor: 'bg-[#43A047]'
    },
    { 
      title: 'MOTTO',
      path: '/motto',
      bgColor: 'bg-[#43A047]'
    },
    { 
      title: 'CORE VALUES',
      path: '/core-values',
      bgColor: 'bg-[#43A047]'
    },
    { 
      title: 'PLEDGE',
      path: '/pledge',
      bgColor: 'bg-[#43A047]'
    },
    { 
      title: 'NCC FLAG',
      path: '/ncc-flag',
      bgColor: 'bg-[#43A047]'
    },
    { 
      title: 'NCC SONG',
      path: '/ncc-song',
      bgColor: 'bg-[#43A047]'
    },
    { 
      title: 'DOWNLOADS',
      path: '/downloads',
      bgColor: 'bg-[#43A047]'
    },
    { 
      title: 'TRAINING MATERIAL',
      path: '/training',
      bgColor: 'bg-[#43A047]'
    },
  ];

  const handleClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className="w-64 space-y-0.5">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          onClick={handleClick}
          className={`
            block px-6 py-3
            ${location.pathname === item.path 
              ? 'bg-[#2E7D32] text-white' 
              : 'bg-[#43A047] text-white hover:bg-[#2E7D32]'
            }
            ${index === 0 ? 'rounded-t-lg' : ''}
            ${index === menuItems.length - 1 ? 'rounded-b-lg' : ''}
            transition-colors duration-200
            font-medium
            ${location.pathname === item.path ? 'shadow-md' : ''}
          `}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar; 