import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieDetail from './components/MovieDetail';
import Error from './components/Error';
import { lazy } from 'react';
const Home = lazy(() => import("./components/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<Error/>,
   },
  {
    path:"movie/:id",
    element:<MovieDetail/>
  }
]);



function App() {


  return (
    <RouterProvider router={router} />

  )
}

export default App
