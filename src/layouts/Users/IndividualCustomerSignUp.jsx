import { useFormik } from 'formik'
import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import IndividualCustomerService from '../../services/individualCustomerService'

export default function IndividualCustomerSignUp() {

    let individualCustomerService = new IndividualCustomerService()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            identityNumber: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
        },

        onSubmit: values => {
            console.log(values)
            individualCustomerService.add(values)
        },
    })

    return (
        <div className='my-auto mx-auto' style={{ maxWidth: "500px" }}>
            <form onSubmit={formik.handleSubmit}>
                <Card bg='light' border='primary'>
                    <Card.Header className='text-center'>
                        Bireysel Üye
                    </Card.Header>
                    <Card.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Ad</Form.Label>
                            <Form.Control
                                id='individualCustomer.firstName'
                                name='firstName'
                                value={formik.values.firstName}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text" placeholder="Ad" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Soyad</Form.Label>
                            <Form.Control
                                id='individualCustomer.lastName'
                                name='lastName'
                                value={formik.values.lastName}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text" placeholder="Soyad" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>TC Kimlik Numarası</Form.Label>
                            <Form.Control
                                id='individualCustomer.identityNumber'
                                name='identityNumber'
                                value={formik.values.identityNumber}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text" placeholder="TC Kimlik Numarası" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Telefon Numarası</Form.Label>
                            <Form.Control
                                id='individualCustomer.phoneNumber'
                                name='phoneNumber'
                                value={formik.values.phoneNumber}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text" placeholder="Telefon Numarası" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Mail</Form.Label>
                            <Form.Control
                                id='individualCustomer.email'
                                name='email'
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="email" placeholder="Mail" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Şifre</Form.Label>
                            <Form.Control
                                id='individualCustomer.password'
                                name='password'
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="password" placeholder="Şifre" />
                        </Form.Group>

                    </Card.Body>
                    <Card.Footer className='p-3'>
                        <Button variant='outline-primary' type='submit' >Üye ol</Button>
                    </Card.Footer>
                </Card>
            </form>
        </div>
    )
}
