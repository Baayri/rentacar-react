import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row, Toast, ToastContainer } from 'react-bootstrap'
import { useFormik } from 'formik'
import BrandService from '../services/brandService'
import ColorService from '../services/colorService'
import CarService from '../services/carService'

export default function AddCarPage() {

    let carService = new CarService()

    const formik = useFormik({
        initialValues: {
            brand: { id: "1" },
            color: { id: "1" },
            modelYear: "",
            dailyPrice: "",
            description: "",
        },

        onSubmit: values => {
            formik.values.brand.id = parseInt(values.brand.id)
            formik.values.color.id = parseInt(values.color.id)
            formik.values.modelYear = parseInt(values.modelYear)
            formik.values.dailyPrice = parseInt(values.dailyPrice)
            console.log(values)
            carService.add(values).then(result => console.log(result.config.data))
        },
    })

    const [brands, setBrands] = useState([])
    const [colors, setColors] = useState([])
    const [show, setShow] = useState(false);

    useEffect(() => {
        let brandService = new BrandService()
        brandService.getAll().then(result => setBrands(result.data))

        let colorService = new ColorService()
        colorService.getAll().then(result => setColors(result.data))
    }, [])

    const brandOption = brands.map((brand, index) => ({
        key: index,
        text: brand.brandName,
        value: brand.id,
    }))

    const colorOption = colors.map((color, index) => ({
        key: index,
        text: color.colorName,
        value: color.id,
    }))

    return (
        <div>
            <Card text='light' border='secondary' bg='dark' className='p-5'>
                <form onSubmit={formik.handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Brand</Form.Label>
                            <Form.Select
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id="brand"
                                name='brand.id'
                                value={formik.values.brand.id}

                            >
                                {
                                    brandOption.map((option) => {
                                        return (<option key={option.key} value={option.value} >{option.text}</option>)
                                    })
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Color</Form.Label>
                            <Form.Select
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                id='color'
                                name='color.id'
                                value={formik.values.color.id}
                            >
                                {
                                    colorOption.map((option) => {
                                        return (<option key={option.key} value={option.value} >{option.text}</option>)
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Model Year</Form.Label>
                            <Form.Control
                                placeholder="Enter Model Year"
                                id='modelYear'
                                name='modelYear'
                                value={formik.values.modelYear}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Daily Price</Form.Label>
                            <Form.Control
                                placeholder="Daily Price"
                                id='dailyPrice'
                                name='dailyPrice'
                                value={formik.values.dailyPrice}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            placeholder="Description"
                            id='description'
                            name='description'
                            value={formik.values.description}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                    </Form.Group>

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
                    <Toast.Body>Araç Eklendi!!!</Toast.Body>
                </Toast>
            </ToastContainer>
        </div >
    )
}
