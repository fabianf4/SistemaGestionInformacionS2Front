import {  useState } from "react"
import { Form, Button, Container, Accordion } from "react-bootstrap"
import connectionApi from "../../configuration/axiosConfiguration"
import ButtonDelete from "../../components/ButtonDelete"
import ButtonUpdate from "../../components/ButtonUpdate"
import BaptismalUpdate from "./Update"

export default function BautismalFind() {
    const [data, setData] = useState([])
    const [edit, setEdit] = useState(false)
    const [dataModify, setDataModify] = useState(null)

    const [formData, setFormData] = useState({
        name: "",
        lastname: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        connectionApi
            .post("baptism/getBaptismToNameLastname", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((response) => {
                setData(response.data.data.baptism)
            })
            .catch((error) => {
                console.log(error.response.data)
            })
    }

    return (
        <>
            {edit ? (
                <BaptismalUpdate data={dataModify} setEdit={setEdit}/>
            ) : (
                <>
                    <h1>Buscar acta de bautismo</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Buscar
                        </Button>
                    </Form>

                    {data?.map((item, i) => {
                        return (
                            <Accordion key={i}>
                                <Accordion.Item eventKey={i}>
                                    <Accordion.Header>
                                        {item.name}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>{item.lastname}</p>
                                        <ButtonDelete
                                            url={"baptism/deleteBaptism"}
                                            book={item.book}
                                            invoice={item.invoice}
                                            number={item.number}
                                        />
                                        <ButtonUpdate changeUpdate={setEdit} data={item} setDataModify={setDataModify}/>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    })}
                </>
            )}
        </>
    )
}
