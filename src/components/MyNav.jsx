import { NavLink } from 'react-router-dom'
import { Nav, NavDropdown } from 'react-bootstrap'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function MyNav() {
    const { user } = useContext(UserContext)

    return (
        <>
            <Nav variant="tabs" activeKey="1" onSelect={true}>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/">
                        Inicio
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/register">
                        Registrarse
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/login">
                        Iniciar sesion
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    {user ? (
                        <Nav.Link as={NavLink} to="/profile">
                            Mi perfil
                        </Nav.Link>
                    ) : (
                        <></>
                    )}
                </Nav.Item>
 {user?.role === 'ADMIN' && (
<NavDropdown title="Actas" id="solicitudes-dropdown">
  
    <>
      <NavDropdown title="Bautismo" drop="end">
        <NavDropdown.Item as={NavLink} to="/baptismal/create">
          Crear Acta
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/baptismal/find">
          Buscar Acta
        </NavDropdown.Item>
      </NavDropdown>
      
      <NavDropdown title="Confirmación" drop="end">
        <NavDropdown.Item as={NavLink} to="/confirmation/create">
          Crear Acta
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/confirmation/find">
          Buscar Acta
        </NavDropdown.Item>
      </NavDropdown>
      
      <NavDropdown title="Matrimonio" drop="end">
        <NavDropdown.Item as={NavLink} to="/marriage/create">
          Crear Acta
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/marriage/find">
          Buscar Acta
        </NavDropdown.Item>
      </NavDropdown>
    </>

</NavDropdown>
  )}

                {user?.role == 'USER' || user?.role == 'ADMIN' ? (
                    <NavDropdown title="Solicitud">
                        <NavDropdown.Item
                            as={NavLink}
                            to="/request/createRequest"
                        >
                            Crear
                        </NavDropdown.Item>
                        {user?.role == 'ADMIN' ? (
                            <NavDropdown.Item
                                as={NavLink}
                                to="/request/getRequestsForDay"
                            >
                                Buscar por fecha
                            </NavDropdown.Item>
                        ) : (
                            <></>
                        )}
                    </NavDropdown>
                ) : (
                    <></>
                )}
                {user?.role == 'USER' || user?.role == 'ADMIN' ? (
                <NavDropdown title="Eventos">
                    <NavDropdown.Item as={NavLink} to="/event/findForDate">
                        Buscar
                    </NavDropdown.Item>
                    {user?.role == 'ADMIN' ? (
                        <>
                            <NavDropdown.Item as={NavLink} to="/event/create">
                                Crear
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={NavLink}
                                to="/event/findForDateUsers"
                            >
                                Buscar con usuarios registrados
                            </NavDropdown.Item>
                        </>
                    ) : (
                        <></>
                    )}
                </NavDropdown>
                  ) : (
                    <></>
                )}
            </Nav>
        </>
    )
}
