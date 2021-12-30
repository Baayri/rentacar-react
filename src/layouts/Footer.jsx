import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <div >
            <Card bg='dark' text='light'>
                <Container>
                    <Row md={3}>
                        <Col className='mt-3 mb-3'>
                            <Card.Title >
                                Hazırlayanlar
                            </Card.Title>
                            <Card.Text>
                                Muhammed Said Bayri
                            </Card.Text>
                            <Card.Text>
                                Alican Karataş
                            </Card.Text>
                        </Col>

                        <Col className='mt-3 mb-3'>
                            <Card.Title >
                                İletişim
                            </Card.Title>
                            <Card.Text>
                                m.baayri@gmail.com
                            </Card.Text>
                            <Card.Text>
                                qwaratas@gmail.com
                            </Card.Text>
                        </Col>

                        <Col className='mt-3 mb-3'>
                            <Card.Title >
                                Sosyal Medya
                            </Card.Title>
                            <Card.Link href='github.com/Baayri'>
                                github.com/Baayri
                            </Card.Link>
                            <br />
                            <Card.Link href='github.com/alicankrts'>
                                github.com/alicankrts
                            </Card.Link>
                        </Col>

                    </Row>
                    <Card.Footer className='txt-center'>
                        Tüm Hakları Saklıdır &#169;
                    </Card.Footer>
                </Container>
            </Card>
        </div>
    )
}
