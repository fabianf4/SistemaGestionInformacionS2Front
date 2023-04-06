import { createHashRouter } from "react-router-dom"
import PrivateRoute from "./PrivateRouter"

import App from "./App"
import Index from "./pages/Index"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import BaptismalCreate from "./pages/baptismal/Create"
import BaptismalFind from "./pages/baptismal/Find"
import RequestCreate from "./pages/request/Create"
import RequestFindForDate from "./pages/request/FindForDate"

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
                element: <PrivateRoute component={Profile} role={["USER","ADMIN"]}/>
            },
            {
                path: "/baptismal/create",
                element: <PrivateRoute component={BaptismalCreate} role={["ADMIN"]}/>
            },
            {
                path: "/baptismal/find",
                element: <PrivateRoute component={BaptismalFind} role={["ADMIN"]}/>
            },
            {
                path: "/request/createRequest",
                element: <PrivateRoute component={RequestCreate} role={["USER","ADMIN"]}/>
            },
            {
                path: "/request/getRequestsForDay",
                element: <PrivateRoute component={RequestFindForDate} role={["ADMIN"]}/>
            }
        ]
    }
])

export default Router
