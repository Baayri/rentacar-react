import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Form } from 'react-bootstrap'
import { Link, useHistory, useParams } from 'react-router-dom'
import CarService from '../services/carService'
import defaultImage from '../defaultCarImage.jpg'
import CarLocationService from '../services/carLocationService'
import { useFormik } from 'formik'

export default function FilteredCarList() {

    const { id } = useParams()

    const [cars, setCars] = useState([])
    const [carLocations, setCarLocations] = useState([])

    const history = useHistory()

    const formik = useFormik({
        initialValues: {
            carLocation: { id: "1" },
        },

        onSubmit: values => {
            formik.values.carLocation.id = parseInt(values.carLocation.id)
            history.push(`/carLocation/${values.carLocation.id}`)
        },
    })

    useEffect(() => {
        let carService = new CarService()
        carService.getLocationDto(id).then(result => setCars(result.data))
        let carLocationService = new CarLocationService()
        carLocationService.getAll().then(result => setCarLocations(result.data))
    }, [id])

    const carLocationOption = carLocations.map((carLocation, index) => ({
        key: index,
        text: `${carLocation.location}`,
        value: carLocation.id,
    }))

    return (
        <div>
            <Row>
                <Col md={3}>
                    <form onSubmit={formik.handleSubmit}>
                        <Card >
                            <Card.Header>
                                Şehir
                            </Card.Header>

                            <Card.Body>
                                <Form.Group as={Col}>
                                    <Form.Label>Location</Form.Label>
                                    <Form.Select
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        id="carLocation"
                                        name='carLocation.id'
                                        value={formik.values.carLocation.id}

                                    >
                                        {
                                            carLocationOption.map((option) => {
                                                return (<option key={option.key} value={option.value} >{option.text}</option>)
                                            })
                                        }
                                    </Form.Select>
                                </Form.Group>
                            </Card.Body>
                            <Card.Footer>
                                <Button
                                    variant='outline-dark' type='submit'
                                    onSubmit={formik.onSubmit}
                                >
                                    Submit
                                </Button>
                            </Card.Footer>
                        </Card>
                    </form>
                </Col>
                <Col md={9}>
                    <Row xs={1} md={3} className="g-4">
                        {
                            cars.map(car => (
                                <Col key={car.id}>
                                    <Card text='light' border='danger' bg='dark'>
                                        {car.image_url != null ? <Card.Img variant="top" src={car.image_url} style={{ maxWidth: '400px', maxHeight: '200px' }} className='rounded mx-auto d-block my-3' /> :
                                            <Card.Img variant="top" src={defaultImage} style={{ maxWidth: '400px', maxHeight: '300px' }} className='rounded mx-auto d-block my-3' />
                                        }

                                        <Card.Body>
                                            <Card.Title className='txt-center'>{car.brandName}</Card.Title>
                                            <Card.Text className='txt-center'>
                                                {car.colorName} - {car.modelYear}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Link to={`/carDetails/${car.id}`}><Button variant='outline-light' className='float left'>Detay</Button></Link>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
