import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row, Toast, ToastContainer } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import CarService from '../services/carService'
import RentalService from '../services/rentalService'

export default function AddRentalPage() {

    let { id } = useParams()

    const [message, setMessage] = useState("")

    let rentalService = new RentalService()

    const formik = useFormik({
        initialValues: {
            car: { id: "" },
            user: { id: "4" },
            rentDate: "",
            returnDate: "",
        },

        onSubmit: values => {
            formik.values.car.id = parseInt(id)
            formik.values.user.id = parseInt(values.user.id)
            console.log(values)
            rentalService.add(values).then(result => setMessage("Kiralama Eklendi"))
                .catch(error => setMessage("Araç Kirada"))
        },
    })

    const [cars, setCars] = useState({})
    const [show, setShow] = useState(false);

    useEffect(() => {
        let carService = new CarService()
        carService.getDto(id).then(result => setCars(result.data))
    }, [id])

    return (
        <div>
            <Card text='light' border='secondary' bg='dark' className='p-5'>
                <form onSubmit={formik.handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Car</Form.Label>
                            <Form.Control
                                className='text-center'
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
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    )
}
