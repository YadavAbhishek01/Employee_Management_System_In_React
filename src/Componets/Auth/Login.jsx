import React, { useState } from 'react';

const Login = ({ HandleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submithandler = (e) => {
    e.preventDefault();
    HandleLogin(email, password);
    console.log(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-sky-800 to-sky-500 px-4 sm:px-6">
      <div className="w-full max-w-lg bg-gray-900 bg-opacity-90 backdrop-blur-md rounded-3xl shadow-xl p-8 sm:p-12 border border-sky-400">
        {/* Header */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white text-center mb-8">
          Welcome Back
        </h1>
        <p className="text-center text-gray-300 mb-6 text-lg">
          Enter your credentials to access your dashboard
        </p>

        {/* Form */}
        <form className="flex flex-col gap-5" onSubmit={submithandler}>
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-3 px-5 text-lg sm:text-xl rounded-2xl outline-none bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-400 transition"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full py-3 px-5 text-lg sm:text-xl rounded-2xl outline-none bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-400 transition"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 text-xl sm:text-2xl font-bold rounded-2xl bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white transition"
          >
            Login
          </button>
        </form>

        {/* Footer / Info */}
        <div className="mt-6 text-center text-gray-400 text-sm sm:text-base">
          Forgot your password? <span className="text-sky-400 underline cursor-pointer">Reset it</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
