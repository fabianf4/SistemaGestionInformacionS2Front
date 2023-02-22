import { createBrowserRouter, createHashRouter } from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Login from "./pages/Login"

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
            }
        ]
    }
])

export default Router
