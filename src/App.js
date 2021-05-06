import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/home'><Home /></Route>
          <Route path='/blog'><Blog /></Route>
          <Route path='/contact'><Contact /></Route>
          <Route path='/login'><Login /></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
