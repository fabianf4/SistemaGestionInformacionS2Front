import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import Router from "./Routers"
import { RouterProvider } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={Router} />
    </React.StrictMode>
)
