import './App.css'
import Home from "./components/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieDetail from './components/MovieDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
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
