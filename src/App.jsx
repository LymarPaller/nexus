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

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <HomePage />
              <Navbar />
            </>
          } />
          <Route path="/profile" element={
            <>
              <ProfilePage />
              <Navbar />
            </>
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
            <>
              <AsideMenu />
              <Navbar />
            </>
          } />
          <Route path="/friends" element={
            <>
              <FriendsPage />
              <Navbar />
            </>
          } />
          <Route path="/save" element={
            <>
              <SavedPage />
              <Navbar />
            </>
          } />

          <Route path="/welcome/:username" element={
            <>
              <WelcomePage />
              <Footer />
            </>
          } />

          <Route path="/memories" element={
            <>
              <MemoriesPage />
              <Navbar />
            </>
          } />

          <Route path="/games" element={
            <>
              <GamesPage />
              <Navbar />
            </>
          } />

          <Route path="/feeds" element={
            <>
              <FeedsPage />
              <Navbar />
            </>
          } />


          <Route path="*" element={
            <>
              <NotFoundPage />
              <Navbar />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App;
