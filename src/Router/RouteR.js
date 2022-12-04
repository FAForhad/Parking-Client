import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Checkout from '../Components/Checkout/Checkout';
import Home from '../Components/Home/Home';
import Login from '../Components/login/Login';
import Products from '../Components/Products/Products';
import SignUp from '../Components/SignUp/SignUp';
import Users from '../Components/Users/Users';
import Main from './Main';

const RouteR = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/products',
                    element: <Products></Products>
                },
                {
                    path: 'users',
                    element: <Users></Users>
                },
                {
                    path: '/checkout/:id',
                    element: <Checkout></Checkout>,
                    loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
                }
            ]
        },

    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default RouteR;