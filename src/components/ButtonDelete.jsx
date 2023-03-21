import { Button } from "react-bootstrap"
import connectionApi from "../configuration/axiosConfiguration"
import Swal from "sweetalert2"

export default function ButtonDelete({
    url,
    book,
    invoice,
    number,
    setReload
}) {
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
                if (response.data.success) {
                    Swal.fire({
                        icon: "success",
                        title: "Acta eliminada",
                        text: response.data.message
                    })
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
        <Button variant="danger" onClick={handleClick}>
            Eliminar
        </Button>
    )
}
