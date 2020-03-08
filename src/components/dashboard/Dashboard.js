import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Container, Row, Col, Navbar, Image, Card, Form, Button, Modal } from 'react-bootstrap'
import './assets/css/style.css'
import DefaultUserImg from './assets/img/defaultUser.jpg'

export default function Dashboard(props) {

    const [data, setData] = useState([])
    const [userImg, setUserImg] = useState(DefaultUserImg)
    let valor;

    useEffect(() => {
        const fetchData = () => {
            axios.get('https://jsonplaceholder.typicode.com/photos', {
                params: {
                    _limit: 10
                }
            }).then(response => {
                setData(response.data)
            })
        }
        fetchData()

        if(localStorage.getItem('userImg')) {
            setUserImg(localStorage.getItem('userImg'))
        }
    }, [])

    function handleButtonClick(e, id, inputValue) {
        e.preventDefault();

        const newDescription = data.map(val => {
            return val.id === id ? {...val, description: inputValue} : val
        })

        setData(newDescription)
    }

    function handleImgClick(img) {
        setUserImg(img)

        localStorage.setItem('userImg', img)
    }

    return (
        <>
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
            <Container>
                <Row id="header">
                    <Col xs={12} md={6}>
                        <Image roundedCircle id="defaultUserImg" src={userImg}  />
                    </Col>
                    <Col md={6}>
                        <h1>Bem-vindo, {props.match.params.user}</h1>
                    </Col>
                </Row>
                <Row>
                    {data.map(val => (
                        <Col key={val.id} xs={12} md={4} className="mt-3 mb-3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={val.thumbnailUrl} onClick={() => handleImgClick(val.thumbnailUrl)}/>
                                <Card.Body>
                                    <Card.Title>{val.title}</Card.Title>
                                    {val.description &&
                                        <Card.Text>{val.description}</Card.Text>
                                    }
                                    <Form>
                                        <Form.Group>
                                            <Form.Control type="text" onChange={e => { valor = e.target.value }} placeholder="Mudar descrição" />
                                        </Form.Group>
                                        <Button onClick={e => handleButtonClick(e, val.id, valor)}>Mudar</Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
            )
}