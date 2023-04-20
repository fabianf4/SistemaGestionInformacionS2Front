import { useState, useEffect } from "react"
import { Form, Button, Accordion } from "react-bootstrap"
import connectionApi from "../../configuration/axiosConfiguration"
import ButtonDelete from "../../components/ButtonDelete"
import ButtonUpdate from "../../components/ButtonUpdate"
import BaptismalUpdate from "./Update"
import Swal from "sweetalert2"


export default function marriageFind() {
    const [data, setData] = useState([])
    const [edit, setEdit] = useState(false)
    const [dataModify, setDataModify] = useState(null)
    const [reload, setReload] = useState(false)

    useEffect(() => {
        if (reload) {
            findData()
            setReload(false)
        }
    }, [reload])

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
        findData()
    }


}