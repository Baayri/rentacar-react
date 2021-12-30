import React from 'react'
import { Button, Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function Navi() {

    const history = useHistory()

    function handleAddCar() {
        history.push("/addCar")
    }

    function handleHome() {
        history.push("/")
    }

    function handleSignUp() {
        history.push("/signUp")
    }

    function handleLogIn() {
        history.push("/LogIn")
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container >
                    <NavbarBrand className='no-select' onClick={handleHome}>
                        RentACar
                    </NavbarBrand>
                    <Nav className='me-auto ms-3'>
                        <Nav.Item >
                            <Button variant='outline-light' onClick={handleAddCar} >Araç Ekle</Button>
                        </Nav.Item>
                    </Nav>
                    <Nav>
                        <Nav.Item>
                            <Button onClick={handleSignUp} variant="outline-light" className='me-2'>Üye Ol</Button>
                            <Button onClick={handleLogIn} variant="outline-light" >Üye Girişi</Button>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
