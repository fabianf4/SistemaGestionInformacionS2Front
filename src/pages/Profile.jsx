import connectionApi from "../configuration/axiosConfiguration"
import { useEffect, useState } from "react"

export default function Profile() {
    const [user, setUser] = useState()

    useEffect(() => {
        connectionApi
            .get("/user/profile", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((response) => {
                setUser(response.data.data.user)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <>
         <div className="row justify-content-center align-items-center">
  <div className="col-md-3 text-center"> 
    <img
      src="./src/images/usuario.png"
      alt="Imagen"
      className="img-fluid rounded-circle img-thumbnail mb-3"
    />
    <div className="card">
      <div className="card-header">
        <b>Perfil</b>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Nombre(s):</b> {user?.name}</li>
        <li className="list-group-item"><b>Apellido(s):</b>  {user?.lastname}</li>
        <li className="list-group-item"><b>Documento:</b> {user?.document}</li>
        <li className="list-group-item"><b>Correo:</b>  {user?.email}</li>
      </ul>
    </div>
  </div>
</div>

  
      </>
    )
}
