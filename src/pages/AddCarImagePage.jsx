import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import CarImageService from '../services/carImageService'
import CarService from '../services/carService'

export default function AddCarImagePage() {
    let carImageService = new CarImageService()

    const [file, setFile] = useState({})

    const formik = useFormik({
        initialValues: {
            car: { id: "18" },
            file: "",
        },

        onSubmit: values => {
            formik.values.car.id = parseInt(values.car.id)
            let data = new FormData()
            data.append("file", file)
            console.log(data.entries())
            carImageService.add(10, data)
        },
    })

    function selectedFile(event) {
        console.log(event.target.files[0])
        setFile(event.target.files[0])
    }


    const [cars, setCars] = useState([])

    useEffect(() => {
        let carService = new CarService()
        carService.getAll().then(result => setCars(result.data))
    }, [])

    const carOption = cars.map((car, index) => ({
        key: index,
        text: `${car.modelYear} Model ${car.color.colorName} ${car.brand.brandName}`,
        value: car.id,
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
                                id="car"
                                name='car.id'
                                value={formik.values.car.id}

                            >
                                {
                                    carOption.map((option) => {
                                        return (<option key={option.key} value={option.value} >{option.text}</option>)
                                    })
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>File</Form.Label>
                            <Form.Control
                                multiple
                                type='file'
                                onChange={selectedFile}
                                onBlur={formik.handleBlur}
                                id="file"
                                name='file'
                                value={formik.values.file}

                            >
                            </Form.Control>
                        </Form.Group>
                    </Row>

                    <Button
                        disabled={!formik.dirty || formik.isSubmitting}
                        variant='outline-light' type='submit'
                        onSubmit={formik.onSubmit}
                    >
                        Submit
                    </Button>
                </form>
            </Card>
        </div>
    )
}
