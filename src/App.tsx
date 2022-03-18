import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import FrontPage from './components/Frontpage'

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar/>
          <Routes>
              <Route path="/" element={<FrontPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
