import { useState } from "react"
import "../styles/login.css"
import connectionApi from "../configuration/axiosConfiguration"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        if (!email || !password) {
            return alert("Todos los campos son obligatorios")
        }

        connectionApi
            .post("/user/login", {
                email,
                password
            })
            .then((response) => {
                alert(response.data.message)
                if (response.data.success) {
                    localStorage.setItem("token", response.data.data.token)
                    navigate("/profile")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h2>Autenticarse</h2>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit">Iniciar sesion</Button>
            </Form>
        </>
    )
}
