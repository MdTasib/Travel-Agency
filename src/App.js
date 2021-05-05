import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/home'><Home /></Route>
        <Route exact path='/destination'><Destination /></Route>
        <Route exact path='/blog'><Blog /></Route>
        <Route exact path='/contact'><Contact /></Route>
        <Route exact path='/login'><Login /></Route>
      </Switch>
    </Router>
  );
}

export default App;
