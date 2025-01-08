import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <p>{message}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate(); 

  return (
    <nav className="flex justify-between items-center p-4 text-black">
      <div className='flex justify-center items-center'>
        <button onClick={() => navigate(-1)}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" ></path>
       
        </svg>
        </button>
        
        <p className="px-4 py-2 font-semibold text-xl">
          Profile & Settings
        </p>
      </div>
      <div>
        <img 
          src="src/assets/menu.png" 
          alt="Icon" 
          className="h-8 w-8" 
        />
      </div>
    </nav>
  );
};


const Profile = () => {
  const [popupMessage, setPopupMessage] = useState(""); 
  const [isPopupVisible, setIsPopupVisible] = useState(false); 

  const handleTextClick = (text) => {
    setPopupMessage(text); 
    setIsPopupVisible(true); 
  };

  const closePopup = () => {
    setIsPopupVisible(false); 
  };




  return (
<div>

    <Navbar />
   <section className="grid gap-4">
      <div className="max-lg: ">
      <div className="flex justify-center items-center mt-3"> 
          <img src="src/assets/avatar.png" alt="" />
        </div>
        <p className='text-center font-bold text-xl mt-3'> Maedeh Jalilnasab</p>

<div>
  <div className='flex justify-between mt-9'>
    <p className='text-left font-semibold text-xl'>Email</p>
    <p className='text-left font-semibold  text-green-500'>maedehjalili16@gmail.com <button><img src="src/assets/arrow.png" alt="" /></button> </p>
  </div>
  <hr class="border-t border-gray-300 my-5 " />

  <div className='flex justify-between' onClick={() => handleTextClick("Theme: System default")}>
              <p className='text-left font-semibold text-xl'>Theme</p>
              <p className='text-left font-semibold text-gray-500'>System default</p>
            </div>
  <hr class="border-t border-gray-300 my-5 " />

  <div className='flex justify-between '>
    <p className='text-left font-semibold text-xl'>Data & Storage</p>
    <p className='text-left font-semibold  text-gray-500'>28% used <button><img src="src/assets/arrow.png" alt="" /></button> </p>
  </div>
  <hr class="border-t border-gray-300 my-5 " />

  <div className='flex justify-between'>
    <p className='text-left font-semibold text-xl'>Change Password</p>
    <p className='text-left font-semibold'><button><img src="src/assets/arrow.png" alt="" /></button> </p>
  </div>
  <hr class="border-t border-gray-300 my-5 " />

  <div className='flex justify-between '>
    <p className='text-left font-semibold text-xl'>Send feedback</p>
    <p className='text-left font-semibold '><button><img src="src/assets/arrow.png" alt="" /></button> </p>
  </div>
  <p className='text-left mt-2 text-sm text-gray-600'>Chatbot AI can make mistakes. Consider checking important information and send us your feedback</p>
</div>






<div className='flex-row justify-center mt-9 '>
<div><p className='text-sm text-gray-600'>Chat Bot AI - Version 2.0.5</p></div>
<div><p className='text-sm text-gray-600 mt-2'>Terms of use  |  Privacy policy</p></div>
</div>
      </div>
    </section>
    {isPopupVisible && <Popup message={popupMessage} onClose={closePopup} />} 


    </div>
  );
};

export default Profile;