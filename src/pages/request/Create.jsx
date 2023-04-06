import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import connectionApi from "../../configuration/axiosConfiguration"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function RequestCreate() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        type: "",
        name: "",
        lastname: "",
        birthdate: "",
        fatherName: "",
        motherName: "",
        godfather: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        connectionApi
            .post("/request/createRequest", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((response) => {
                if (response.data.success) {
                    Swal.fire({
                        icon: "success",
                        title: "Solicitud creada",
                        text: response.data.message
                    })
                    navigate("/profile")
                } else {
                    Swal.fire({
                        icon: "error",
                        title: response.data?.message,
                        text: response.data?.data?.errors
                    })
                }
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <Form
            onSubmit={handleSubmit}
            className="row justify-content-center g-3 p-4"
        >
            <Form.Group controlId="type" className="col-md-4">
                <Form.Label>Tipo de acta</Form.Label>
                <Form.Select name="type" onChange={handleChange} required>
                    <option value="">Seleccione una opción</option>
                    <option value="CONFIRMACION">Confirmacion</option>
                    <option value="BAUTISMO">Bautismo</option>
                    <option value="MATRIMONIO">Matrimonio</option>
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="name" className="col-md-4">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="lastname" className="col-md-4">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="birthdate" className="col-md-4">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control
                    type="date"
                    name="birthdate"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="fatherName" className="col-md-4">
                <Form.Label>Nombre del padre</Form.Label>
                <Form.Control
                    type="text"
                    name="fatherName"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="motherName" className="col-md-4">
                <Form.Label>Nombre de la madre</Form.Label>
                <Form.Control
                    type="text"
                    name="motherName"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="godfather" className="col-md-4">
                <Form.Label>Padrino</Form.Label>
                <Form.Control
                    type="text"
                    name="godfather"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="col-md-9">
                Solicitar acta
            </Button>
        </Form>
    )
}
