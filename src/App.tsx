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
import ProfileHomePage from './components/profilePageComponents/ProfileHomePage';
import MintPage from './pages/MintPage';


function App() {
  return (
  <div className="container">
  <Provider store={ store }>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <LandingPage/> } />
          <Route path="/login"  element = { <Login/> } />
          <Route path="/connect"  element = { <ConnectPage/> } />
          <Route path="/profile" element={<AuthRoute />} >
              <Route path="/profile" element={<ProfileHomePage />} />
          </Route>
          <Route path="/mint" element={<AuthRoute />} >
              <Route path="/mint" element={<MintPage />} />
          </Route>
        </Routes>
    </Router>
  </Provider>
  </div>
  );
}

export default App;
