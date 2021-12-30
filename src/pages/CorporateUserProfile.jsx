import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import userImage from '../DefaultUser.jpg'
import UserService from '../services/userService'

export default function CorporateUserProfile() {

    const { id } = useParams()

    const [user, setUser] = useState({})

    useEffect(() => {
        let userService = new UserService()
        userService.getById(id).then(result => setUser(result.data))
    }, [id])

    return (
        <div>
            <Card>
                <Card.Header className='text-center'>
                    Kurumsal Üye Profili
                </Card.Header>

                <Card.Body>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Header>
                                    <Card.Img src={userImage} />
                                </Card.Header>
                                <Card.Body className='text-center'>
                                    {user.companyName}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Card>
                                <Card.Body>
                                    <Card>
                                        <Card.Header>
                                            Mail
                                        </Card.Header>
                                        <Card.Body>
                                            {user.email}
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}
