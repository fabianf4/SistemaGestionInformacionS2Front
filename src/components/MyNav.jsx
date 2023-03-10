import { NavLink } from "react-router-dom"
import { Nav, NavDropdown } from "react-bootstrap"

export default function MyNav() {
    return (
        <>

            <Nav variant="tabs" activeKey="1" onSelect={true}>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/">
                        Inicio
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/login">
                        Iniciar sesion
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/profile">
                        Mi perfil
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Bautismo">
                    <NavDropdown.Item as={NavLink} to="/baptismal/create">Crear</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/baptismal/find">Buscar</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/baptismal/update">Actualizar</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </>
    )
}
