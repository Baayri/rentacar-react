import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import CarService from '../services/carService'
import defaultImage from '../DefaultImage.png'

export default function CarDetailsPage() {

    const { id } = useParams()

    const [car, setCar] = useState({})

    useEffect(() => {
        let carService = new CarService()
        carService.getDto(id).then(result => setCar(result.data))
    }, [id])

    return (
        <div>
            <Card text='light' border='secondary' bg='dark' className='p-5'>
                <Card.Header>
                    {car.image_url != null ? <Card.Img variant="top" src={car.image_url} style={{ maxWidth: '1000px' }} className=' rounded mx-auto d-block my-3' /> :
                        <Card.Img variant="top" src={defaultImage} style={{ maxWidth: '1000px' }} className='rounded mx-auto d-block my-3' />
                    }
                </Card.Header>
                <Card.Body>
                    <Row className='ms-5 me-5' xs={1} md={2}>
                        <Col>
                            <Card text='dark' border='secondary' bg='light' className='mt-2 mb-2'>
                                <Card.Header>
                                    Marka
                                </Card.Header>
                                <Card.Body>
                                    {car.brandName}
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card text='dark' border='secondary' bg='light' className='mt-2 mb-2'>
                                <Card.Header>
                                    Renk
                                </Card.Header>
                                <Card.Body>
                                    {car.colorName}
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card text='dark' border='secondary' bg='light' className='mt-2 mb-2'>
                                <Card.Header>
                                    Üretim yılı
                                </Card.Header>
                                <Card.Body>
                                    {car.modelYear}
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card text='dark' border='secondary' bg='light' className='mt-2 mb-2'>
                                <Card.Header>
                                    Günlük Fiyat
                                </Card.Header>
                                <Card.Body>
                                    {car.dailyPrice}
                                </Card.Body>
                            </Card>
                        </Col>



                    </Row>

                    <Row className='ms-5 me-5'>
                        <Col>
                            <Card text='dark' border='secondary' bg='light' className='my-2'>
                                <Card.Header>
                                    Şehir
                                </Card.Header>
                                <Card.Body>
                                    {car.carLocation}
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                    <Row className='ms-5 me-5'>
                        <Col>
                            <Card text='dark' border='secondary' bg='light' className='my-2'>
                                <Card.Header>
                                    Açıklama
                                </Card.Header>
                                <Card.Body>
                                    {car.description}
                                </Card.Body>
                            </Card>
                        </Col>

                        <div className='mt-2'>
                            <Link to={`addRental/${car.id}`}><Button variant='outline-light' size='lg'>Kirala</Button></Link>
                        </div>


                    </Row>

                </Card.Body>
                <Card.Footer>
                </Card.Footer>
            </Card>
        </div>
    )
}
