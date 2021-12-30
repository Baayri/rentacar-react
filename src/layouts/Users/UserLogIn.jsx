import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import UserService from '../../services/userService'

export default function UserLogIn() {

    let userService = new UserService()
    let history = useHistory()


    let [user, setUser] = useState({})

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        onSubmit: values => {
            console.log(values)
            userService.login(values.email, values.password).then(result => setUser(result.data))
            console.log(user)
            if (user.message === 'Corporate') {
                history.push(`corporateUser/${user.data.id}`)

            }
            else if (user.message === 'Individual') {
                history.push(`/individualUser/${user.data.id}`)
            }
        },
    })


    return (
        <div>
            <form onSubmit={formik.handleSubmit} className='my-auto mx-auto' style={{ maxWidth: "500px" }}>
                <Card bg='light' border='warning'>
                    <Card.Header className='text-center'>
                        Üye Girişi
                    </Card.Header>
                    <Card.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Mail</Form.Label>
                            <Form.Control
                                id='email'
                                name='email'
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="email" placeholder="Mail" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Şifre</Form.Label>
                            <Form.Control
                                id='password'
                                name='password'
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="password" placeholder="Şifre" />
                        </Form.Group>

                    </Card.Body>
                    <Card.Footer className='p-3'>
                        <Button variant='outline-primary' type='submit' >Giriş Yap</Button>
                    </Card.Footer>
                </Card>
            </form>
        </div >
    )
}
