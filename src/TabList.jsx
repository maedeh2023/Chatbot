// src/TabList.jsx
import React, { useState } from 'react';

const TabList = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: ' Chat ',image: '/src/assets/chat.png' },
    { id: 'tab2', label: 'Archived',image: '/src/assets/archieve.png' },
    { id: 'tab3', label: 'Images',image: '/src/assets/pic.png' },
  ];

  const cards = {
    tab1: [
      { title: 'How can I forget a bad memory?', content: 'Forgetting a bad memory entirely may be challenging, as memories are complex and deeply ingrained...',edit:'28 mins ago'},
      { title: 'Imagine a student going to school. She has purple hair and...', content: 'This is the content of card 2.' },
      { title: 'Card 3', content: 'This is the content of card 3.'},
    ],
    tab2: [
      { title: 'Card 4', content: 'This is the content of card 4.' },
      { title: 'Card 5', content: 'This is the content of card 5.' },
      { title: 'Card 6', content: 'This is the content of card 6.' },
    ],
    tab3: [
      { title: 'Card 7', content: 'This is the content of card 7.' },
      { title: 'Card 8', content: 'This is the content of card 8.' },
      { title: 'Card 9', content: 'This is the content of card 9.' },
    ],
  };

  return (
    <div className="container mx-auto p-1 mt-5">
      <div className="flex space-x-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`w-full h-14 border-gray-200  border-2 hover:bg-black text-gray-400 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center justify-center ${
              activeTab === tab.id
                ? 'bg-black text-white'
                : 'bg-white text-slate-800'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
           <img src={tab.image} alt={tab.label} className="h-5 w-5" /> 
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {cards[activeTab].map((card, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-left text-sm text-green-500">{card.title}</h3>
            <p className="text-gray-500 mt-2 text-left">
                {card.content}</p>
                <p className='text-gray-400 font-semibold text-left mt-3'>

                {card.edit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabList;