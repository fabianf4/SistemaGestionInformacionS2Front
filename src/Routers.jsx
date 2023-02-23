import { createBrowserRouter, createHashRouter } from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

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
                element: <Profile />
            }
        ]
    }
])

export default Router
