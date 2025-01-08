// src/NewTopic.jsx
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
const Navbar = () => {
  const navigate = useNavigate(); 

  return (
    <nav className="flex justify-between items-center p-4 text-black">
      <div className='flex justify-center items-center'>
        <img src="src/assets/menuleft.png" alt="" />
        <img  className='h-11 w-11' src="src/assets/icon.png" alt="" />
        <button 
          onClick={() => navigate(-1)} 
          className="px-4 py-2 font-semibold text-xl"
        >
         GPT 4o
        </button>
      </div>
      <div>
        <img 
          src="src/assets/export.png" 
          alt="Icon" 
          className="h-11 w-11" 
          onClick={() => navigate('/profile')} 
        />
      </div>
    </nav>
  );
};



const Internal_empty = () => {
  const [inputValue, setInputValue] = useState(''); 
  const navigate = useNavigate(); 
  const [response, setResponse] = useState('');

  const [showInternalPage, setShowInternalPage] = useState(false);

  const handleButtonClick = async () => {
    console.log('Input value:', inputValue);
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/`);
      console.log('API response:', response);
      setResponse(response.data.text);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
       <Navbar /> 
      <section className="grid gap-4">
      <div className="max-lg: ">

<p className='text-center text-semibold mt-14'>How can I help you my friend? 😊️</p>


       
    <div className="bg-white p-4 rounded-full border mt-6 border-gray-200 ">
                    <div className="flex justify-between items-center m-3">
                        <h2 className="text-lg font-semibold text-gray-900">Brainstorm names</h2>
<img src="src/assets/arrow.png" alt="" />                    </div>
                    <p className="text-gray-500 mt-2 text-left m-3">for my fantasy football team with a frog theme</p>
                </div>
                <div className="bg-white p-4 rounded-full border mt-6 border-gray-200 ">
                    <div className="flex justify-between items-center m-3">
                        <h2 className="text-lg font-semibold text-gray-900">Brainstorm names</h2>
<img src="src/assets/arrow.png" alt="" />                    </div>
                    <p className="text-gray-500 mt-2 text-left m-3">for my fantasy football team with a frog theme</p>
                </div>

                <div className="bg-white p-4 rounded-full border mt-6 border-gray-200 ">
                    <div className="flex justify-between items-center m-3">
                        <h2 className="text-lg font-semibold text-gray-900">Brainstorm names</h2>
<img src="src/assets/arrow.png" alt="" />                    </div>
                    <p className="text-gray-500 mt-2 text-left m-3">for my fantasy football team with a frog theme</p>
                </div>

                <div className="bg-white p-4 rounded-full border mt-6 border-gray-200 ">
                    <div className="flex justify-between items-center m-3">
                        <h2 className="text-lg font-semibold text-gray-900">Brainstorm names</h2>
<img src="src/assets/arrow.png" alt="" />                    </div>
                    <p className="text-gray-500 mt-2 text-left m-3">for my fantasy football team with a frog theme</p>
                </div>




                <div className="flex justify-center items-center mt-3  gap-2 w-full">
  
  
 
  <div class="flex px-4 py-3 rounded-full border-2  border-gray-300 overflow-hidden w-full  font-[sans-serif]">
  <input 
                type="text" 
                placeholder="Search ..."
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                className="w-full outline-none bg-transparent text-gray-600 text-sm" 
              />
              <img 
                src="src/assets/Frame.png" 
                alt="Submit" 
                onClick={handleButtonClick} 
                className="cursor-pointer" 
              />
</div>

</div>
</div>
      
      </section>
    </div>
  );
};


const InternalPage = ({ inputValue }) => {
 
  return (
    <div>
       <Navbar />
      <section className="grid gap-4">
      <div className="max-lg: ">
<div>
  <div className='flex justify-start items-center mt-8'><img className='mx-3 h-10 w-10' src="src/assets/avatar.png" alt="" /> You </div>
  <p className='text-left text-green-500 text-lg m-4 '>{inputValue}</p> 
</div>
<div className='flex justify-start items-center mx-4 mt-6'>
<img className=' h-5 w-5' src="src/assets/edit.png.png" alt="" /> <p className='mx-3 text-gray-700'>Edit </p>
<img className=' h-5 w-5' src="src/assets/copy.png.png" alt="" /><p className='mx-3 text-gray-700'> Copy</p>
</div>
<hr class="border-t border-gray-300 my-5 " />


<div className='flex justify-start items-center mx-4 mt-6'>
  <img className='h-8 w-8 mr-5' src="src/assets/icon.png" alt="" /> <p className='font-bold'>Chat Bot AI</p>
</div>
<div className='m-5 text-left'>Once upon a time, in the quaint town of Meadowville, there lived a spirited high school student named Lily. Lily was known for her enthusiasm for learning and her adventurous spirit. One crisp autumn morning, as she set out for school, little did she know that this ordinary day would turn into an extraordinary adventure.
</div>

<div className='flex justify-start items-center mx-4 mt-6'>
<img className=' h-5 w-5' src="src/assets/copy.png.png" alt="" /> <p className='mx-3 text-gray-700'>Edit </p>
<img className=' h-5 w-5' src="src/assets/share.png" alt="" /><p className='mx-3 text-gray-700'> Share</p>
<img className=' h-5 w-5' src="src/assets/re.png" alt="" /><p className='mx-3 text-gray-700'> Regenerate</p>
</div>

<hr class="border-t border-gray-300 my-5 " />


<div className='flex justify-start items-center mx-4 mt-6'>
  <img className='h-8 w-8 mr-5' src="src/assets/avatar.png" alt="" /> <p className='font-bold'>You</p>
</div>
<div className='m-5 text-left text-green-500'>Once upon a time, in the quaint town of Meadowville, there lived a spirited high school student named Lily. Lily was known for her enthusiasm for learning and her adventurous spirit. One crisp autumn morning, as she set out for school, little did she know that this ordinary day would turn into an extraordinary adventure.
</div>

<div className='flex justify-start items-center mx-4 mt-6'>
<img className=' h-5 w-5' src="src/assets/copy.png.png" alt="" /> <p className='mx-3 text-gray-700'>Copy </p>
<img className=' h-5 w-5' src="src/assets/edit.png.png" alt="" /> <p className='mx-3 text-gray-700'>Edit </p>
</div>

<div class="flex px-4 py-3 rounded-full border-2  border-gray-300 overflow-hidden w-full mt-8  font-[sans-serif]">
  <input 
                type="text" 
                placeholder="Ask me anything..."
                className="w-full outline-none bg-transparent text-gray-600 text-sm" 
              />
             
              <img 
                src="src/assets/Frame.png" 
                alt="Submit" 
                className="cursor-pointer" 
                onClick={handleButtonClick} 

              />
</div>

        </div>
        </section>
        {response && (
        <div>
          <h2>API Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};



export default Internal_empty;