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
import ProfilePage from './pages/ProfilePage';
import MintPage from './pages/MintPage';
import FightersPage from './pages/FightersPage';
import Fight from './pages/FightPage'


function App() {
  const location = window.location.pathname;
  console.log(location);
  
  return (
  <div className="container">
  <Provider store={ store }>
    <Router>
        {location !== '/profile'&&  <Navbar/> }
        <Routes>
          <Route path="/" element={ <LandingPage/> } />
          <Route path="/login"  element = { <Login/> } />
          <Route path="/connect"  element = { <ConnectPage/> } />
          <Route path="/profile" element={<AuthRoute />} >
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/fighters" element={<FightersPage />} />
          </Route>
          <Route path="/mint" element={<AuthRoute />} >
              <Route path="/mint" element={<MintPage />} />
          </Route>

          <Route path="/profile/fight/:id" element={<AuthRoute />} >
              <Route path="/profile/fight/:id" element={<Fight />} />
          </Route>
          
        </Routes>
    </Router>
  </Provider>
  </div>
  );
}

export default App;
