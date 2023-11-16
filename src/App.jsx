import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import RootLayout from "./helper/RootLayout/RootLyout";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signin />,
      },
    ],
  },
]);

function App() {
  return (
    <div className=" flex flex-col h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
