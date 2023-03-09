import Login from "./pages/Login"
import { Link, Outlet } from "react-router-dom"
import MyNav from "./components/MyNav"
import { Container } from "react-bootstrap"

function App() {
    return (
        <>
            <Container>
                <MyNav />
                <Outlet />
            </Container>
        </>
    )
}

export default App
