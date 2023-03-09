import { Button } from "react-bootstrap"
import connectionApi from "../configuration/axiosConfiguration"

export default function ButtonDelete({ url, book, invoice, number }) {
    const handleClick = () => {
        connectionApi
            .delete(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                data: {
                    book,
                    invoice,
                    number
                }
            })
            .then((response) => {
                console.log(response)
                alert(response.data.message)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <Button variant="danger" onClick={handleClick}>
            Eliminar
        </Button>
    )
}
