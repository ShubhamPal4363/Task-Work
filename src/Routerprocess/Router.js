import { createBrowserRouter } from "react-router-dom";
import App from "../Components/App";
import Home from "../Components/Home";
import Changepass from "../Components/Changepass";
import Forgetpass from '../Components/Forgetpass';
import Login from "../Components/Login";
import Pagenotfound from "../Components/Pagenotfound";
import Register from "../Components/Register";
import Cart from "../Components/Cart";
import Singleproduct from "../Components/Singleproduct";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: ([
            {
                path: '',
                element: <Home />
            },
            {
                path: '/changepassword',
                element: <Changepass />
            },
            {
                path: '/forgetpassword',
                element: <Forgetpass />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/*',
                element: <Pagenotfound />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/singleproduct',
                element: <Singleproduct />
            }
        ])
    }
])

export default Router;
