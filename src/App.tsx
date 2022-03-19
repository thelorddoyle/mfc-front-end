//MODULES//HELPERS
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './config/store'
import { AuthRoute } from './helpers/AuthRoute';

//COMPONENTS/PAGES
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage';
import Login from './pages/LoginPage';


function App() {
  return (
  <Provider store={ store }>
    <Router>
        <Navbar/>
        <Routes>
          <Route  path='/' element={<AuthRoute/>}>
              <Route path="/" element={ <FrontPage/> } />
          </Route>
          <Route path="/login"  element = { <Login/> } />
        </Routes>
    </Router>
  </Provider>
  );
}

export default App;
