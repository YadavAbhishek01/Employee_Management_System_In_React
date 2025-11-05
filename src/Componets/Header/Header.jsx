import React from 'react';

const Header = ({ LoggedInUSerData, setUser }) => {
  const logout = () => {
    localStorage.removeItem('loggedInUSer');
    setUser('');
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 w-full text-base sm:text-2xl">
      <h1 className="text-lg sm:text-2xl font-semibold">
        Hii 👋<br />
        <span className="text-green-400">{LoggedInUSerData?.name || LoggedInUSerData?.id || 'Admin'}</span>
      </h1>
      <button
        className="bg-red-500 hover:bg-red-600 transition-colors text-white text-base sm:text-xl rounded-xl py-2 px-5 w-full sm:w-auto"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
