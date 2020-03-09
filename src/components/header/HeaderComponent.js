import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

export default function HeaderComponent(props) {
    return (
        <Row id="header">
            <Col xs={12} md={6}>
                <Image roundedCircle id="defaultUserImg" src={props.avatar} />
            </Col>
            <Col md={6}>
                <h1>Bem-vindo, {props.userName}</h1>
            </Col>
        </Row>
    )
}