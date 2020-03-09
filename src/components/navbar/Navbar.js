import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function NavbarComponent() {
    return (
        <Navbar id="navbar" variant="dark">
            <Navbar.Brand>
                <img
                    alt=""
                    src='https://backlog.com.br/wp-content/uploads/2019/10/backlog-logo-white-500px.png'
                    width="150"
                    height="30"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
        </Navbar>
    )
}