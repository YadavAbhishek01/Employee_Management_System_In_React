import { useContext, useEffect, useState } from 'react';

// Component Imports
import Login from './Componets/Auth/Login';
import Admindashboard from './Componets/Dashboard/Admindashboard';
import Employee from './Componets/Dashboard/Employee';

// Utils for localStorage interaction
import { getLocalStorage, SetLocalStorage } from './Utils/Localstorage';

// Auth context to access employee/admin data
import { AuthContext } from './Context/AuthProvider';

const App = () => {
  // State to store role ("Admin" or "Employee")
  const [user, setUser] = useState(null);

  // Store the full logged-in user object
  const [LoggedInUSer, setLoggedInUser] = useState(null);

  // Get data from context (comes from AuthProvider)
  const Authdata = useContext(AuthContext);

  // On mount or Authdata change, check localStorage for logged in user
  useEffect(() => {
    const loggedInUSer = localStorage.getItem("loggedInUSer");

    if (loggedInUSer) {
      const userdata = JSON.parse(loggedInUSer);
      setUser(userdata.role);             // Set role ("Admin" or "Employee")
      setLoggedInUser(userdata.data);     // Set user details (name, email, etc.)
    }
  }, [Authdata]);

  // Handles login form submission
  const HandleLogin = (email, password) => {
    if (Authdata) {
      // ✅ Try Admin login
      const admin = Authdata.Admin.find(
        (e) => e.email === email && e.password === password
      );

      if (admin) {
        setUser('Admin');
        setLoggedInUser(admin);
        localStorage.setItem(
          'loggedInUSer',
          JSON.stringify({ role: 'Admin', data: admin })
        );
        return;
      }

      // ✅ Try Employee login
      const employee = Authdata.Employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser('Employee');
        setLoggedInUser(employee);
        localStorage.setItem(
          'loggedInUSer',
          JSON.stringify({ role: 'Employee', data: employee })
        );
        return;
      }

      // ❌ If not found, show error
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      {/* Show login screen if not authenticated */}
      {!user && <Login HandleLogin={HandleLogin} />}

      {/* Show admin dashboard */}
      {user === 'Admin' && (
        <Admindashboard LoggedInUSerData={LoggedInUSer} setUser={setUser} />
      )}

      {/* Show employee dashboard */}
      {user === 'Employee' && (
        <Employee LoggedInUSerData={LoggedInUSer} setUser={setUser} />
      )}
    </div>
  );
};

export default App;
