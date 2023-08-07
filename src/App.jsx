import { BrowserRouter, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import { Provider } from "react-redux";
import './styles/main.scss';
import './styles/normalize.scss';

function App() {

  const Layout = () => {
    return (
      <>
      <div>
        <Navbar />
        <Outlet />
      </div>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <HomePage />
        },
        {
          path:"/profile:id",
          element: <ProfilePage />
        },
      ]
    },
    { path:"/login", element: <LoginPage /> },
    { path:"/register", element: <RegisterPage /> },
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
