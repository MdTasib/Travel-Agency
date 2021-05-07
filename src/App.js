import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Agency from './components/Agency/Agency';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <PrivateRoute path='/blog'>
            <Blog />
          </PrivateRoute>
          <PrivateRoute path='/agency'>
            <Agency />
          </PrivateRoute>
          <PrivateRoute path='/agency/:name'>
            <Agency />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
