import React, { useState } from 'react';

// Bootstrap Components 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'

// CSS 
import './assets/css/style.css'

// Imagens
import DefaultUserImg from './assets/img/defaultUser.jpg'
import Backlogo from './assets/img/backlog.png'

export default function Dashboard(props) {
    return (
        <>
            <Navbar id="navbar" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://backlog.com.br/wp-content/uploads/2019/10/backlog-logo-white-500px.png"
                        width="150"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            </Navbar>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image fluid rouded src={DefaultUserImg}></Image>
                    </Col>
                    <Col md={6}>
                        <h1>Bem-vindo, {props.match.params.user}</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}