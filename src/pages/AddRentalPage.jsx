import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row, Toast, ToastContainer } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import CarLocationService from '../services/carLocationService'
import CarService from '../services/carService'
import RentalService from '../services/rentalService'

export default function AddRentalPage() {

    let { id } = useParams()

    let rentalService = new RentalService()

    const formik = useFormik({
        initialValues: {
            car: { id: "" },
            user: { id: "4" },
            carLocation: { id: "1" },
            rentDate: "",
            returnDate: "",
        },

        onSubmit: values => {
            formik.values.car.id = parseInt(id)
            formik.values.user.id = parseInt(values.user.id)
            formik.values.carLocation.id = parseInt(values.carLocation.id)
            rentalService.add(values).then(result => console.log(result.config.data))
        },
    })

    const [cars, setCars] = useState({})
    const [carLocations, setCarLocations] = useState([])
    const [show, setShow] = useState(false);

    useEffect(() => {
        let carService = new CarService()
        carService.getDto(id).then(result => setCars(result.data))

        let carLocationService = new CarLocationService()
        carLocationService.getAll().then(result => setCarLocations(result.data))
    }, [id])

    const carLocationOption = carLocations.map((carLocation, index) => ({
        key: index,
        text: `${carLocation.location} Havalimanı`,
        value: carLocation.id,
    }))

    return (
        <div>
            <Card text='light' border='secondary' bg='dark' className='p-5'>
                <form onSubmit={formik.handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Car</Form.Label>
                            <Form.Control
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                readOnly
                                placeholder={`${cars.modelYear} Model ${cars.colorName} ${cars.brandName}`}
                                type='text'
                                id="car"
                                name='car.id'
                                value={`${cars.modelYear} Model ${cars.colorName} ${cars.brandName}`}

                            >

                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Location</Form.Label>
                            <Form.Select
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id='carLocation'
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
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Rent Date</Form.Label>
                            <Form.Control
                                placeholder="Enter Model Year"
                                id='rentDate'
                                name='rentDate'
                                type='date'
                                value={formik.values.rentDate}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Return Date</Form.Label>
                            <Form.Control
                                placeholder="Enter Model Year"
                                id='returnDate'
                                name='returnDate'
                                type='date'
                                value={formik.values.returnDate}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>
                    </Row>

                    <Button
                        disabled={!formik.dirty || formik.isSubmitting}
                        variant='outline-light' type='submit'
                        onSubmit={formik.onSubmit}
                        onClick={() => setShow(true)}
                    >
                        Submit
                    </Button>
                </form>
            </Card>

            <ToastContainer className='mb-5 me-3 p-2' position='bottom-end'>
                <Toast bg='dark' className='text-white' onClose={() => setShow(false)} show={show} delay={7000} autohide >
                    <Toast.Header>
                        <strong className="me-auto">Bildirim</strong>
                    </Toast.Header>
                    <Toast.Body>Kiralama Eklendi</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}
