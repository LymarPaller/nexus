import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
import WelcomePage from './components/WelcomePage';
import './styles/main.scss';
import './styles/normalize.scss';
import Footer from './components/Footer';
import AsideMenu from './pages/AsideMenu';
import FriendsPage from './pages/FriendsPage';
import SavedPage from './pages/SavedPage';
import MemoriesPage from './pages/MemoriesPage';
import GamesPage from './pages/GamesPage';
import FeedsPage from './pages/FeedsPage';
import NotFoundPage from './pages/NotFoundPage';
import { Provider } from 'react-redux';
import store from './store/store';
import Protected from './components/Protected';
import SearchFriends from './pages/SearchFriends';

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <Protected>
                <HomePage />
                <Navbar />
              </Protected>
            } />
            <Route path="/profile" element={
              <Protected>
                <ProfilePage />
                <Navbar />
              </Protected>
            } />
            <Route path="/login" element={
              <>
                <LoginPage />
                <Footer />
              </>
            } />
            <Route path="/register" element={
              <>
                <RegisterPage />
                <Footer />
              </>
            } />
            <Route path="/aside" element={
              <Protected>
                <AsideMenu />
                <Navbar />
              </Protected>
            } />
            <Route path="/friends" element={
              <Protected>
                <FriendsPage />
                <Navbar />
              </Protected>
            } />
            <Route path="/save" element={
              <Protected>
                <SavedPage />
                <Navbar />
              </Protected>
            } />

            <Route path="/welcome/:username" element={
              <Protected>
                <WelcomePage />
                <Footer />
              </Protected>
            } />

            <Route path="/memories" element={
              <Protected>
                <MemoriesPage />
                <Navbar />
              </Protected>
            } />

            <Route path="/games" element={
              <Protected>
                <GamesPage />
                <Navbar />
              </Protected>
            } />

            <Route path="/feeds" element={
              <Protected>
                <FeedsPage />
                <Navbar />
              </Protected>
            } />

          <Route path="/search" element={
            <Protected>
              <SearchFriends/>
              <Navbar />
            </Protected>
          } />

          <Route
            path="/profile/:userId"
            element={
              <Protected>
                <ProfilePage />
                <Navbar />
              </Protected>
            }
          />
          <Route
            path="*" 
            element={
              <Protected>
                <NotFoundPage />
                <Navbar />
              </Protected>
            }
          />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
