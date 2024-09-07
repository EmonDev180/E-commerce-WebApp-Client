
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../LayOut/MainLayout';

import Products from '../Pages/Products/Products';
import Signin from '../Pages/Signin/Signin';
import SignUp from '../Pages/SignUp/SignUp';
import DashBoard from '../LayOut/DashBoard/DashBoard';

const router = createBrowserRouter([

    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
         
            {
                path:"/",
                element: <Products></Products>,
                loader: () => fetch('https://e-commerce-web-app-server-fawn.vercel.app/productsCount')
            },
            {
                path:"/dashBoard",
                element:<DashBoard></DashBoard>
            },
            {
                path:"/login",
                element:<Signin></Signin>
            },
            {
                path:"signUp",
                element:<SignUp></SignUp>
            }
        ]
    }


])

export default router;