import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"
import './styles/main.scss';
import './styles/normalize.scss';
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import Test from "./pages/Test"
import { Provider } from "react-redux"

function App() {

  const currentUser = false;

  const router = createBrowserRouter([
    { path:"/login", element: <LoginPage /> },
    { path:"/register", element: <RegisterPage /> }
  ])

  return (
    <>
    <RouterProvider router={router}>
      <BrowserRouter>
        <Routes>

          {/* <Route path="/" element={
            <>
            <LoginPage />
            <Footer />
            </>
          } /> */}

          {/* <Route path="/register" element={
            <>
            <RegisterPage />
            <Footer />
            </>
          } /> */}

          <Route path="/Home" element={
            <>
            <Navbar />
            <HomePage />
            </>
          } />

          <Route path="/profile" element={
            <>
            <Navbar />
            <ProfilePage />
            </>
          } />

          <Route path="/test" element={
            <>
            <Navbar />
            <Test />
            </>
          } />

        </Routes>
      </BrowserRouter>
    </RouterProvider>
      
    </>
  )
}

export default App
