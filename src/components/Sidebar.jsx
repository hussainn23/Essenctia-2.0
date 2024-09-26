import React, { useState } from 'react';

const Sidebar = ({ items, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
    onSelect(index); 
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`2xl:w-[381px] xl:w-[250px] h-[64px] border-[0.8px] border-[#DADADA] pl-[26px] flex items-center cursor-pointer hover:bg-[#DADADA] transition-all ${
            selectedIndex === index ? 'bg-[#FEA821]' : ''
          }`}
          onClick={() => handleClick(index)}
        >
          <h4 className='text-[#0E0E0E] font-lexend-deca text-[20px] font-bold leading-[26px] text-left'>
            {item}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
