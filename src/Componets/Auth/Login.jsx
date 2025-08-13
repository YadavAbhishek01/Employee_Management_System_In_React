import React, { useState } from 'react'; // Import React and useState hook
import { Navigate } from 'react-router-dom'; // (Currently unused) Could be used for redirecting after login

// Login component receives a HandleLogin function as a prop
const Login = ({ HandleLogin }) => {
  // State variables to hold email and password input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Form submission handler
  const submithandler = (e) => {
    e.preventDefault(); // Prevent page reload
    HandleLogin(email, password); // Call parent function with credentials
    console.log(email); // Log email for debugging
    console.log(password); // Log password for debugging
    setEmail(''); // Clear the email input
    setPassword(''); // Clear the password input
  };

  return (
    <div className="container h-screen w-screen flex items-center justify-center ml-20">
      <div className="box border-2 border-sky-500 rounded-2xl flex flex-col p-20">
        {/* Login Form */}
        <form
          className="flex flex-col items-center justify-center gap-3 py-3 px-2"
          onSubmit={submithandler}
        >
          <h1 className="text-5xl font-bold text-sky-800 mb-4">Login</h1>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="input py-3 px-2 text-xl border-zinc-800 rounded-4xl outline-none bg-sky-100"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter your password"
            className="input text-xl border-zinc-800 py-3 px-2 rounded-4xl outline-none bg-sky-100"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} // ⛔ Don't wrap setPassword in Number() — it breaks strings!
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="submitbtn rounded-full bg-sky-600 py-2 px-6 text-white text-2xl mt-3"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
