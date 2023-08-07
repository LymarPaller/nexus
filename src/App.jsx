import { BrowserRouter, Navigate, Outlet, Route, RouterProvider, Routes, createBrowserRouter} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import './styles/main.scss';
import './styles/normalize.scss';

function App() {

  const currentUser = true;

  const Layout = () => {
    return (
      <>
      <div>
        <Navbar />
        <Outlet />
      </div>
      </>
    )
  };

  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/login"/>
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>,
      children: [
        {
          path:"/",
          element: <HomePage />
        },
        {
          path:"/profile",
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
