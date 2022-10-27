import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../../pages/Blog/Blog';
import Checkout from '../../pages/Chekout/Checkout';
import CourseDetails from '../../pages/CourseDetails/CourseDetails';
import Courses from '../../pages/Courses/Courses';
import Error404 from '../../pages/Error404/Error404';
import Faq from '../../pages/Faq/Faq';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch('https://b610-lerning-platform-server-side-aroy15.vercel.app/courses')
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader: ()=>fetch('https://b610-lerning-platform-server-side-aroy15.vercel.app/courses')
            },
            {
                path:'/courses/:id',
                element:<CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-aroy15.vercel.app/courses/${params.id}`)
            },
            {
                path:'/blog',
                loader: ()=> fetch('https://b610-lerning-platform-server-side-aroy15.vercel.app/blog'),
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/checkout/:id',
                loader:  ({params}) => fetch(`https://b610-lerning-platform-server-side-aroy15.vercel.app/courses/${params.id}`),
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            },
            {     
                path:'/*',           
                element:<Error404></Error404>
            }
        ]
    }
])