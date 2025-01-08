import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";



const App = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState(""); 
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();


 const validEmail = "maedeh@gmail.com";
 const validPassword = "password";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email"); 
      return; 
    }

 
    if (password.length !== 8) {
      setPasswordError("Password must be 8 characters"); 
      return; 
    }

 if (email === validEmail && password === validPassword) {

  navigate("/home");
} else {
  alert("Invalid email or password");
}
};


  
  return (
    <section className="grid gap-4">
      <div className="max-lg: ">
        <img src="src/assets/icon.png" alt="" />
        <h1 className="text-4xl font-bold  mt-4 text-left">Login to your <br/> account</h1>
    <p className="text-left text-gray-500 mt-4">Dont't have an account? <span className="text-green-400">Sign Up</span></p>
      </div>
      <div className="max-w-md">
        <form onSubmit={handleLogin}>
          <div className="mb-4">
          <div className="relative flex items-center">
          <img src="src/assets/Front icon.png" alt="" className="w-6 h-6 absolute ml-3 text-gray-700" />
            <input 
              className="pr-3 pl-10 appearance-none border rounded-xl w-full py-3 px3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            </div>
            {emailError && <p className="text-red-500 text-sm text-left mt-3">{emailError}</p>} {/* Display email error */}

          </div>
          <div className="mb-6">
            <div className="relative flex items-center">
            <img src="src/assets/First.png" alt="" className="w-6 h-6 absolute ml-3 text-gray-700" />
            <input
              className="pr-3 pl-10 appearance-none border rounded-xl w-full py-3 px3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            
            </div>
            {passwordError && <p className="text-red-500 text-sm text-left mt-3">{passwordError}</p>} {/* Display password error */}
        <p className="text-green-500 flex justify-end mt-3">Forget Password?</p>
          </div>
          <div className="flex items-center">
            <button
              className="w-full h-14 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>


          </div>
          
<p className="text-center text-gray-500 pt-6">Or login with </p>
<div className="flex justify-center mt-3 gap-3 w-full">
  <div className="flex-1">
    <button
      className="w-full h-14 bg-gray-200 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center justify-center"
      type="button"
    >
      <img src="src/assets/Group.png" alt="" className="w-6 h-6 mr-2" />
      Google
    </button>
  </div>
  <div className="flex-1">
    <button
      className="w-full h-14 bg-gray-200 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center justify-center"
      type="button"
    >
      <img src="src/assets/facebook.png" alt="" className="w-6 h-6 mr-2" />
      Facebook
    </button>
  </div>
</div>
        </form>

        <p className="text-center mt-20 text-gray-500">Terms of use     |     Privacy policy</p>
      </div>
    </section>
  );
 
}

export default App;