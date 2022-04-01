//MODULES//HELPERS
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
import ProfileHomePage from './components/profilePageComponents/ProfileHomePage';
import FightersPage from './pages/FightersPage';
import Tournament from './components/profilePageComponents/Tournament';
import Fight from './components/fightersComponents/Fight';
import TournamentsPage from './pages/TournamentsPage';
import RankingsPage from './pages/RankingsPage';
import AccountPage from './pages/AccountPage';

function App() {

    return (
    <Provider store={ store }>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <LandingPage/> } />
                <Route path="/login"  element = { <Login/> } />
                <Route path="/connect"  element = { <ConnectPage/> } />
                <Route path="/profile" element={<AuthRoute />} >
                    <Route path="/profile" element={<ProfilePage />} >
                        <Route path="" element={<ProfileHomePage />} /> 
                        <Route path="fighters" element={<FightersPage /> } />
                        <Route path="fighters/:id" element={<Fight /> } />
                        <Route path="tournaments" element={<TournamentsPage /> } />
                        <Route path="rankings" element={<RankingsPage />} />
                        <Route path="account" element={<AccountPage />} />
                    </Route>
                </Route>
                <Route path="/mint" element={<AuthRoute />} >
                    <Route path="/mint" element={<MintPage />} />
                </Route>
                <Route path="/tournament/:id" element={<AuthRoute />} >
                    <Route path="/tournament/:id" element={<Tournament />} />
                </Route>
            </Routes>

        </Router>
    </Provider>
    );
}

export default App;