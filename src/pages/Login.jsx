import { useState } from "react"
import "../styles/login.css"
import connectionApi from "../configuration/axiosConfiguration"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <h2 className="form__title">Autenticarse</h2>
                    <label htmlFor="email" className="form__label">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form__input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password" className="form__label">
                        Contraseña:
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="form__input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="form__button">Iniciar sesion</button>
                </form>
            </div>
        </>
    )
}
