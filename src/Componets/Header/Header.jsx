import React from 'react';

const Header = ({ LoggedInUSerData }) => {
  const logout = () => {
    localStorage.removeItem('loggedInUSer');
    window.location.href = '/';
  };

  return (
    <div className="flex items-center justify-between text-2xl">
      <h1>
        Hii 👋<br />
        {LoggedInUSerData?.name || LoggedInUSerData?.id || 'Admin'}
      </h1>
      <button
        className="bg-red-500 hover:bg-red-600 transition-colors text-white text-xl rounded-xl py-2 px-5"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
