import { useFormik } from 'formik'
import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import CorporateCustomerService from '../../services/corporateCustomerService'

export default function CorporateCustomerSignUp() {

    let corporateCustomerService = new CorporateCustomerService()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            companyName: "",
        },

        onSubmit: values => {
            console.log(values)
            corporateCustomerService.add(values)
        },
    })

    return (
        <div className='my-auto mx-auto' style={{ maxWidth: "500px" }}>
            <form onSubmit={formik.handleSubmit}>
                <Card bg='light' border='primary'>
                    <Card.Header className='text-center'>
                        Kurumsal Üye
                    </Card.Header>
                    <Card.Body>

                        <Form.Group className="mb-3">
                            <Form.Label>Şirket Adı</Form.Label>
                            <Form.Control
                                id='corporateCustomer.companyName'
                                name='companyName'
                                value={formik.values.companyName}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text" placeholder="Şirket Adı" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Mail</Form.Label>
                            <Form.Control
                                id='corporateCustomer.email'
                                name='email'
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="email" placeholder="Mail" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Şifre</Form.Label>
                            <Form.Control
                                id='corporateCustomer.password'
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
