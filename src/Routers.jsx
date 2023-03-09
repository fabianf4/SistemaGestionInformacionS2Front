import { createHashRouter } from "react-router-dom"
import PrivateRoute from "./PrivateRouter"

import App from "./App"
import Index from "./pages/Index"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import BaptismalCreate from "./pages/baptismal/Create"
import BaptismalFinf from "./pages/baptismal/Find"
import BaptismalUpdate from "./pages/baptismal/Update"

const Router = createHashRouter([
    {
        basename: "/",
        element: <App />,
        //errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/profile",
                element: <PrivateRoute component={Profile}/>
            },
            {
                path: "/baptismal/create",
                element: <PrivateRoute component={BaptismalCreate} />
            },
            {
                path: "/baptismal/find",
                element: <PrivateRoute component={BaptismalFinf} />
            },
            {
                path: "/baptismal/update/",
                element: <PrivateRoute component={BaptismalUpdate} />
            }
        ]
    }
])

export default Router
