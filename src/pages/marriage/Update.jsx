import React, { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import connectionApi from "../../configuration/axiosConfiguration"
import Swal from "sweetalert2"

export default function MarriageUpdate({ data, setEdit, setReload }) {
    const [formData, setFormData] = useState({
        book:"",
        invoice:"",
        number:"",
        marrierdate:"",
        namehusband:"",
        lastnamehusband:"",
        fatherhusband:"",
        motherhusband:"",
        placebatptismhusband:"",
        datebatptismhusband:"",
        namewife:"",
        lastnamewife:"",
        fatherwife:"",
        motherwife:"",
        placebatptismwife:"",
        datebatptismwife:"",
        namewitness:"",
        minister:"",
        parson:"",
        annotations:""
    })

    useEffect(() => {
        setFormData((prevState) => Object.assign({}, prevState, data))
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        connectionApi
            .put("marriage/updateMarriage", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((response) => {
                if (response.data.success) {
                    Swal.fire({
                        icon: "success",
                        title: "Acta actualizada",
                        text: response.data.message
                    })
                    setEdit(false)
                    setReload(true)
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
        <Form onSubmit={handleSubmit} className="row justify-content-center g-3 p-4">
            <h2>Actualizar</h2>
            <Form.Group controlId="book" className="col-md-4">
                <Form.Label>Libro</Form.Label>
                <Form.Control
                    type="number"
                    name="book"
                    onChange={handleChange}
                    required
                    disabled
                />
            </Form.Group>

            <Form.Group controlId="invoice" className="col-md-4">
                <Form.Label>Folder</Form.Label>
                <Form.Control
                    type="number"
                    name="invoice"
                    onChange={handleChange}
                    required
                    disabled
                />
            </Form.Group>

            <Form.Group controlId="number" className="col-md-4">
                <Form.Label>Numero</Form.Label>
                <Form.Control
                    type="number"
                    name="number"
                    onChange={handleChange}
                    required
                    disabled
                />
            </Form.Group>

            <Form.Group controlId="marrierdate" className="col-md-4">
                <Form.Label>Fecha Matrimonio</Form.Label>
                <Form.Control
                    type="date"
                    name="marrierdate"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="namehusband" className="col-md-4">
                <Form.Label>Nombre de el esposo</Form.Label>
                <Form.Control
                    type="text"
                    name="namehusband"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="lastnamehusband" className="col-md-2">
                <Form.Label>Apellido Esposo</Form.Label>
                <Form.Control
                    type="text"
                    name="lastnamehusband"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="fatherhusband" className="col-md-2">
                <Form.Label>Nombre del padre(esposo)</Form.Label>
                <Form.Control
                    type="text"
                    name="fatherhusband"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="motherhusband" className="col-md-6">
                <Form.Label>Nombre de la madre(esposo)</Form.Label>
                <Form.Control
                    type="text"
                    name="motherhusband"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="placebatptismhusband" className="col-md-6">
                <Form.Label>Lugar bautismo(esposo)</Form.Label>
                <Form.Control
                    type="text"
                    name="placebatptismhusband"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="datebatptismhusband" className="col-md-6">
                <Form.Label>fecha de bautismo(esposo)</Form.Label>
                <Form.Control
                    type="date"
                    name="datebatptismhusband"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="namewife" className="col-md-6">
                <Form.Label>Nombre de la esposa</Form.Label>
                <Form.Control
                    type="text"
                    name="namewife"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="lastnamewife" className="col-md-6">
                <Form.Label>Apellido de la esposa</Form.Label>
                <Form.Control
                    type="text"
                    name="lastnamewife"
                    onChange={handleChange}
                    required
                />
            </Form.Group>


            <Form.Group controlId="fatherwife" className="col-md-6">
                <Form.Label>Padre(esposa)</Form.Label>
                <Form.Control
                    type="text"
                    name="fatherwife"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="motherwife" className="col-md-6">
                <Form.Label>Madre(esposa)</Form.Label>
                <Form.Control
                    type="text"
                    name="motherwife"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="placebatptismwife" className="col-md-6">
                <Form.Label>Lugar Bautismo(Esposa)</Form.Label>
                <Form.Control
                    type="text"
                    name="placebatptismwife"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="datebatptismwife" className="col-md-6">
                <Form.Label>Fecha bautismo(esposa)</Form.Label>
                <Form.Control
                    type="date"
                    name="datebatptismwife"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="namewitness" className="col-md-6">
                <Form.Label>Testigo</Form.Label>
                <Form.Control
                    type="text"
                    name="namewitness"
                    onChange={handleChange}
                    required
                />
            </Form.Group>


            <Form.Group controlId="minister" className="col-md-6">
                <Form.Label>Ministro</Form.Label>
                <Form.Control
                    type="text"
                    name="minister"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Form.Group controlId="parson" className="col-md-12">
                <Form.Label>Parroco</Form.Label>
                <Form.Control
                    type="text"
                    name="parson"
                    onChange={handleChange}
                    required
                />
            </Form.Group>


            
            <Form.Group controlId="annotations" className="col-md-12">
                <Form.Label>Anotaciones</Form.Label>
                <Form.Control
                    type="textArea"
                    name="annotations"
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="col-md-2">
                Actualizar
            </Button>
        </Form>
    )

}