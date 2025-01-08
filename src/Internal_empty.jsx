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
  const [definition, setDefinition] = useState('');
  const [showDefinition, setShowDefinition] = useState(false);

  const [showInternalPage, setShowInternalPage] = useState(false);

  const handleButtonClick = async () => {
    console.log('Input value:', inputValue);
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${inputValue}`);
      console.log('API response:', response);
      if (response.data && response.data[0] && response.data[0].meanings) {
        setDefinition(response.data[0].meanings[0].definitions[0].definition);
        setShowDefinition(true);
      }
      setTimeout(() => {
        setShowInternalPage(true);
      }, 2000); // wait for 2 seconds before showing the internal page
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  if (showDefinition) {
    return <InternalPage inputValue={inputValue} definition={definition} showDefinition={showDefinition} handleInputValueChange={handleInputValueChange} />;
  }

  
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
  
  
 
  <div className="flex px-4 py-3 rounded-full border-2  border-gray-300 overflow-hidden w-full  font-[sans-serif]">
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


const InternalPage = ({ inputValue, definition, showDefinition, handleInputValueChange }) => {
 
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
<hr className="border-t border-gray-300 my-5 " />


<div className='flex justify-start items-center mx-4 mt-6'>
  <img className='h-8 w-8 mr-5' src="src/assets/icon.png" alt="" /> <p className='font-bold'>Chat Bot AI</p>
</div>
<div className='m-5 text-left'>{showDefinition && (
           <p>{definition}</p>
        )}
</div>

<div className='flex justify-start items-center mx-4 mt-6'>
<img className=' h-5 w-5' src="src/assets/copy.png.png" alt="" /> <p className='mx-3 text-gray-700'>Edit </p>
<img className=' h-5 w-5' src="src/assets/share.png" alt="" /><p className='mx-3 text-gray-700'> Share</p>
<img className=' h-5 w-5' src="src/assets/re.png" alt="" /><p className='mx-3 text-gray-700'> Regenerate</p>
</div>

<hr className="border-t border-gray-300 my-5 " />





        </div>
        </section>
        <div className="mt-auto">
<div className="flex px-4 py-3 rounded-full border-2  border-gray-300 overflow-hidden w-full mt-8  font-[sans-serif]">
  <input 
                type="text" 
                placeholder="Ask me anything..."
                onChange={handleInputValueChange}
                className="w-full outline-none bg-transparent text-gray-600 text-sm" 
              />
             
              <img 
                src="src/assets/Frame.png" 
                alt="Submit" 
                className="cursor-pointer" 
               

              />
</div>
</div>
        
    </div>
  );
};



export default Internal_empty;