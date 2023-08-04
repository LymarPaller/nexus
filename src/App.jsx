import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"
import './styles/main.scss';
import './styles/normalize.scss';
import Navbar from "./components/Navbar"
import AsideRight from "./components/AsideRight"
import AsideLeft from "./components/AsideLeft"
import NewsFeed from "./components/NewsFeed"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={
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

          <Route path="/Home" element={
            <>
            <Navbar />
            <HomePage />
            </>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
