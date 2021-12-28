import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CarService from '../services/carService'
import defaultImage from '../DefaultImage.png'

export default function CarList() {

    const [cars, setCars] = useState([])


    useEffect(() => {
        let carService = new CarService()
        carService.getAllDto().then(result => setCars(result.data))
    }, [])



    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {
                    cars.map(car => (
                        <Col key={car.id}>
                            <Card text='light' border='danger' bg='dark'>
                                {car.image_url != null ? <Card.Img variant="top" src={car.image_url} style={{ maxWidth: '400px', maxHeight: '200px' }} className='rounded mx-auto d-block my-3' /> :
                                    <Card.Img variant="top" src={defaultImage} style={{ maxWidth: '400px', maxHeight: '200px' }} className='rounded mx-auto d-block my-3' />
                                }

                                <Card.Body>
                                    <Card.Title className='txt-center'>{car.brandName}</Card.Title>
                                    <Card.Text className='txt-center'>
                                        {car.colorName} - {car.modelYear}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={`carDetails/${car.id}`}><Button variant='outline-light' className='float left'>Detay</Button></Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}
