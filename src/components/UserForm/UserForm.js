import React, { useState } from 'react';
import { Link } from "react-router-dom";

// Imports do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Import do CSS e ícones
import './assets/css/UserForm.css';
import { FaUserNinja } from 'react-icons/fa';

function UserForm() {
    const [user, setUser] = useState()

    return (
        <div id="userFormWrapper">
            <Container id="userFormContainer">
                <Form id="userForm">
                    <Form.Group>
                        <FaUserNinja id="userIcon" /> <Form.Label>Nome do Usuário</Form.Label>
                        <Form.Control type="text" onChange={e => setUser(e.target.value)} placeholder="Seja criativo!" />
                    </Form.Group>
                    <Link to={{ pathname: `/dashboard/${user}` }} style={{ color: 'white' }}><Button>Enviar</Button></Link>
                </Form>
            </Container >
        </div>
    )
}

export default UserForm;