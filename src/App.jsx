import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import RootLayout from "./helper/RootLayout/RootLyout";
import { useQuery, gql } from "@apollo/client";
import "./App.css";

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
    ],
  },
]);

const GET_PRODUCTS = gql`
  query brands {
    brands {
      id
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  return (
    <div className=" flex flex-col h-screen">
      {console.log(data)}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
