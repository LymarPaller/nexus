import { BrowserRouter, Navigate, Outlet, Route, RouterProvider, Routes, createBrowserRouter} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import './styles/main.scss';
import './styles/normalize.scss';
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store/store";

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
          </Routes>

      </BrowserRouter>
    </Provider>

    </>
  )
}

export default App
