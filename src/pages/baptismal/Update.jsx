import React, { useState, useEffect } from "react"
import { Form, Button, Container } from "react-bootstrap"
import connectionApi from "../../configuration/axiosConfiguration"
import { useNavigate } from "react-router-dom"

let token = null
export default function BaptismalUpdate({data}) {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        book: "",
        invoice: "",
        number: "",
        name: "",
        lastname: "",
        birthdate: "",
        baptismDate: "",
        fatherName: "",
        motherName: "",
        maternalGrandfather: "",
        maternalGrandmother: "",
        paternalGrandfather: "",
        paternalGrandmother: "",
        godfather: "",
        godmother: "",
        minister: "",
        parson: "",
        annotations: ""
    })

    useEffect(() => {
      setFormData(data)
    }, [])
    

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(token)
        connectionApi
            .post("baptism/updateBaptism", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="book">
                <Form.Label>Libro</Form.Label>
                <Form.Control
                    type="number"
                    name="book"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="invoice">
                <Form.Label>Folder</Form.Label>
                <Form.Control
                    type="number"
                    name="invoice"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="number">
                <Form.Label>Numero</Form.Label>
                <Form.Control
                    type="number"
                    name="number"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="lastname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="birthdate">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control
                    type="date"
                    name="birthdate"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="baptismDate">
                <Form.Label>Fecha de bautismo</Form.Label>
                <Form.Control
                    type="date"
                    name="baptismDate"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="fatherName">
                <Form.Label>Nombre del padre</Form.Label>
                <Form.Control
                    type="text"
                    name="fatherName"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="motherName">
                <Form.Label>Nombre de la madre</Form.Label>
                <Form.Control
                    type="text"
                    name="motherName"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="maternalGrandfather">
                <Form.Label>Abuela materna</Form.Label>
                <Form.Control
                    type="text"
                    name="maternalGrandfather"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="maternalGrandmother">
                <Form.Label>Abuelo materno</Form.Label>
                <Form.Control
                    type="text"
                    name="maternalGrandmother"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="paternalGrandfather">
                <Form.Label>Abuelo paterno</Form.Label>
                <Form.Control
                    type="text"
                    name="paternalGrandfather"
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="paternalGrandmother">
                <Form.Label>Abuela paterna</Form.Label>
                <Form.Control
                    type="text"
                    name="paternalGrandmother"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="godfather">
                <Form.Label>Paddrino</Form.Label>
                <Form.Control
                    type="text"
                    name="godfather"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="godmother">
                <Form.Label>Madrina</Form.Label>
                <Form.Control
                    type="text"
                    name="godmother"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="minister">
                <Form.Label>Ministro</Form.Label>
                <Form.Control
                    type="text"
                    name="minister"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="parson">
                <Form.Label>Parroco</Form.Label>
                <Form.Control
                    type="text"
                    name="parson"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="annotations">
                <Form.Label>Anotaciones</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="annotations"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Actualizar
            </Button>
        </Form>
    )
}
