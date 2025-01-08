// src/Home.jsx
import { useNavigate } from 'react-router-dom';
import React from 'react';
import TabList from './TabList'; 

const Navbar = () => {
  const navigate = useNavigate(); 

  return (
    <nav className="flex justify-between items-center p-4 text-black">
      <div className='flex justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
        </svg>
        <button 
          onClick={() => navigate(-1)} 
          className="px-4 py-2 font-semibold text-xl"
        >
          Back
        </button>
      </div>
      
      <div>
        <img 
          src="src/assets/avatar.png" 
          alt="Icon" 
          className="h-8 w-8" 
          onClick={() => navigate('/profile')} 
        />
      </div>
    </nav>
  );
};

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      <Navbar />
     
      <section className="grid gap-4">
      <div className="max-lg: ">
      <h1 className="text-4xl font-bold  mt-4 text-left">Start a new chat</h1>
   
        <p className="text-4xl font-bold  mt-4 text-left flex items-center justify-start gap-3">with  
        <img 
          src="src/assets/icon.png"
          alt="Welcome" 
          className="h-10 w-10 mr-2"
        />  
        </p>
       
        <div className="flex justify-center items-center mt-3 gap-2 w-full">
  <div className="flex-1">
  <p className=' w-full text-left text-3xl font-bold bg-gradient-to-bl from-green-400 to-blue-800 bg-clip-text text-transparent'>Chat bot AI</p>

  </div>
  <div className="flex-1 ">
    <button
      className="w-full h-14 bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center justify-center"
      type="button"
      onClick={() => navigate('/internal-empty')} 

    >
      <img src="src/assets/Plus 4 1.png" alt="" className="w-6 h-6 mr-2" />
      New Topic
    </button>
  </div>
</div>

<hr class="border-t border-gray-300 my-5 " />

<div className="flex justify-center items-center mt-3  gap-2 w-full">
  <div className="flex-1">
  <p className=' w-full text-left text-xl font-bold mr-3'>History</p>

  </div>
 
  <div class="flex px-4 py-3 rounded-full border-2 border-gray-300 overflow-hidden w-full mx-auto font-[sans-serif]">
        <input type="email" placeholder="Search ..."
          class="w-full outline-none bg-transparent text-gray-600 text-sm" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-gray-600">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
      </div>
  
</div>


<TabList /> 

        </div>
        </section>
    </div>
  );
};

export default Home;