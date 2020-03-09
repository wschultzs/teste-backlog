import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import './assets/css/style.css'
import DefaultUserImg from './assets/img/defaultUser.jpg'

import NavbarComponent from '../navbar/Navbar'
import HeaderComponent from '../header/HeaderComponent'

export default function Dashboard(props) {

    const [data, setData] = useState([])
    const [userImg, setUserImg] = useState(DefaultUserImg)
    let valor;

    useEffect(() => {
        if (localStorage.getItem('userImg')) setUserImg(localStorage.getItem('userImg'))
        
        if (localStorage.getItem('newDescription')) {
            setData(JSON.parse(localStorage.getItem('newDescription')))
        } else {
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
        }
    }, [])

    function handleButtonClick(e, id, inputValue) {
        e.preventDefault();

        const newDescription = data.map(val => {
            return val.id === id ? { ...val, description: inputValue } : val
        })

        setData(newDescription)
        localStorage.setItem('newDescription', JSON.stringify(newDescription))
    }

    function handleImgClick(img) {
        setUserImg(img)

        localStorage.setItem('userImg', img)
    }

    return (
        <>
            <NavbarComponent />
            <Container>
                <HeaderComponent avatar={userImg} userName={props.match.params.user} />
                <Row>
                    {data.map(val => (
                        <Col key={val.id} xs={12} md={4} className="mt-3 mb-3">
                            <Card style={{ width: '18rem', boxShadow: "1px 1px 1px #9E9E9E" }}>
                                <Card.Img variant="top" src={val.thumbnailUrl} onClick={() => handleImgClick(val.thumbnailUrl)} />
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