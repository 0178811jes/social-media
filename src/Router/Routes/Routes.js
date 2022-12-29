import Main from "../../Layout/Main"
import Home from "../../pages/Home/Home"
// import Profile from "../../pages/Profile/Profile";
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';


import { createBrowserRouter } from "react-router-dom";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Profile from "../../pages/Profile/Profile";



export const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/profile',
            element: <PrivetRoute><Profile></Profile></PrivetRoute>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        
      ]
    }
  ])