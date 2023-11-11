import React, { useState, useEffect } from 'react';

//Home
import Home from './Screens/Home';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import UserHome from './Screens/UserHome';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import { Auth } from 'aws-amplify';
Amplify.configure(config);
function App() {
  const [user, setUser] = useState(null);
  const checkAuth = async () => {
    try {
      const session = await Auth.currentSession();
      setUser(session);
      return true; 
    } catch (error) {
      setUser(null);
      return false;
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/SignIn" element={user ? (<Navigate to="/UserHome"/>) : (<SignIn/>)}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/UserHome" element={<UserHome/>}/>
      <Route path="/UserHome:id" element={<UserService/>}/>
      </Routes>
    </Router>
  );
}

export default App;
