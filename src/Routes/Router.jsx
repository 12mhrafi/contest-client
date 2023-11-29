import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Dashboard from "../Page/Dashboard/Dashboard";
import Participated from "../Page/Dashboard/Participated";
import AddContest from "../Page/Dashboard/AddContest";
import AddedContest from "../Page/Dashboard/AddedContest";
import ContestSubmitted from "../Page/Dashboard/ContestSubmitted";
import ManageUser from "../Page/Dashboard/ManageUser";
import ManageContest from "../Page/Dashboard/ManageContest";
import ViewDeatails from "../Page/Home/PopularContest/ViewDeatails";
import AllContest from "../Page/AllContest/AllContest";
import ContestDetail from "../Components/AllContestCategory/ContestDetail";
import Payment from "../Page/Payment/Payment";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UserDashboard from "../Page/UserDashboard/UserDashboard";
import RegisteredContest from "../Page/UserDashboard/RegisteredContest";
import WInningContest from "../Page/UserDashboard/WInningContest";
import UserProfile from "../Page/UserDashboard/UserProfile";
import UserUpdate from "../Page/Dashboard/ContestUpdate";
import Blog from "../Page/Blog/Blog";
import Resources from "../Page/Resources/Resources";
import Leaderboard from "../Page/Leaderboard/Leaderboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            index:true,
            path:"/",
            element:<Home/>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/viewDetails/:id",
          loader: ({params}) => fetch(`http://localhost:5000/contests/details/${params.id}`),
          element:<ViewDeatails></ViewDeatails>
        },
        {
          path:"/allContest",
          element: <AllContest></AllContest>
        },
        {
          path:"/contestDetail/:id",
          loader: ({params}) => fetch(`http://localhost:5000/contests/details/${params.id}`),
          element:<PrivateRoute><ContestDetail></ContestDetail></PrivateRoute>
        },
        {
          path:"/payment/:id",
          loader: ({params}) => fetch(`http://localhost:5000/contests/details/${params.id}`),
          element:<Payment></Payment>
        },
        {
          path:"/blog",
          element:<Blog></Blog>
        },
        {
          path:"/resources",
          element:<Resources></Resources>
        },
        {
          path:"/leaderboard",
          element:<Leaderboard></Leaderboard>
        }
     
       
    ]
},
{
  path:"/dashboard",
  element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
  children:[
    {
      index:true,
      path:"/dashboard/participated",
      element:<Participated></Participated>
    },
    {
      path:"/dashboard/AddContest",
      element:<AddContest></AddContest>
    },
    {
      path:"/dashboard/addedContest",
      element:<AddedContest></AddedContest>
    },
    {
      path:"/dashboard/submittedContest",
      element:<ContestSubmitted></ContestSubmitted>
    },
    {
      path: "/dashboard/updateContest/:id",
      loader:({params}) => fetch(`http://localhost:5000/contests/details/${params.id}`),
      element:<UserUpdate></UserUpdate>
    },

    // admin 
    {
      index:true,
      path:"/dashboard/manageUser",
      element:<ManageUser></ManageUser>
    },
    {
      path:"/dashboard/manageContest",
      element: <ManageContest></ManageContest>

    }
    
  ]
},
{
  path:"/userDashboard",
  element:<PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>,
  children:[
    {
      index: "/userDashboard/participated",
      path:"/userDashboard/participated",
      element: <RegisteredContest></RegisteredContest>
    },
    {
      path:"/userDashboard/winningContest",
      element:<WInningContest></WInningContest>
    },
    {
      path: "/userDashboard/userProfile",
      element:<UserProfile></UserProfile>
    },
  ]
}
]);

export default router;