import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import HomeLayout from "../layout/HomeLayout";
import Blogs from "../components/blogs/Blogs";
import Profile from "../components/userProfile/Profile";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../layout/AuthLayout";
import CreatePost from "../components/createPost/CreatePost";

const router = createBrowserRouter([
    {
        path:'/',
        element:<PrivateRoute><HomeLayout></HomeLayout></PrivateRoute>,
        children:[
            {
                path:'/',
                element:<Blogs></Blogs>
            },
            {
                path:'/:user',
                element:<Profile></Profile>
            },
            {
                path:'/create_blog',
                element:<CreatePost></CreatePost>
            }
        ]
    },
    {
        path:'/',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])
export default router;

