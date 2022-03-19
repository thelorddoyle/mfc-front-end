//MODULES//HELPERS
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './config/store'
import { AuthRoute } from './helpers/AuthRoute';

//COMPONENTS/PAGES
import Navbar from './components/Navbar';
import Login from './pages/LoginPage';
import ConnectPage from './pages/ConnectPage';
import LandingPage from './pages/LandingPage';


function App() {
  return (
  <Provider store={ store }>
    <Router>
        <Navbar/>
        <Routes>
          <Route  path='/' element={<AuthRoute/>}>
              <Route path="/" element={ <LandingPage/> } />
          </Route>
          <Route path="/login"  element = { <Login/> } />
          <Route path="/connect"  element = { <ConnectPage/> } />
        </Routes>
    </Router>
  </Provider>
  );
}

export default App;
