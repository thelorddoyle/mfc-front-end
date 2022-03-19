//MODULES
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './config/store'

//COMPONENTS/PAGES
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage';
import Login from './pages/Login';


function App() {
  return (
  <Provider store={ store }>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <FrontPage/> } />
          <Route path="/login"  element = { <Login/> } />
        </Routes>
    </Router>
  </Provider>
  );
}

export default App;
