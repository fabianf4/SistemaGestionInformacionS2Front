import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useJwt } from "react-jwt"

const PrivateRoute = ({ component: Component }) => {
    let token = localStorage.getItem("token")
    if (token) {
        const { isExpired } = useJwt(token)

        if (isExpired) {
            token = null
            localStorage.removeItem("token")
        }
    }

    if(!token){
        alert("Su sesión ha expirado, por favor vuelva a iniciar sesión")
    }

    return <>{token ? <Component /> : <Navigate to="/login" />}</>
}

export default PrivateRoute
