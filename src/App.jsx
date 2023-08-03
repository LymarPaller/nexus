import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/" element={<Footer />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
