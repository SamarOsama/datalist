import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function HeaderDetailsForm() {

    const navigate = useNavigate()

    const Next = () => {
        navigate('/task')
    }

    const [formData, setFormData] = useState({
        formtitle: '',
        formcurrency: '',
        formdesc: '',
        formdoucment: '',
        depertment: '',
    });
    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        localStorage.setItem('userData', JSON.stringify(formData));
        Next()
    };


    // Function to handle input field changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

    };
    return (
        <>
            <Container>
                <Row className='my-3'>
                    <h6>Header Details</h6>
                </Row>
                <Row>
                    <Form onSubmit={handleSubmit}>

                        <Row>
                            <Col>
                                <Form.Group className='mb-3' controlId="formtitle">
                                    <Form.Label>Project Title</Form.Label>
                                    <Form.Control
                                        placeholder='please enter project title'
                                        type="text"
                                        name="formtitle"
                                        value={formData.formtitle}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>

                                <Form.Group className='mb-3' controlId="formcurrency">
                                    <Form.Label>Currency</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="formcurrency"
                                        value={formData.formcurrency}
                                        onChange={handleChange}
                                    >
                                        <option  >Please select a currency</option>
                                        <option value="dollar">dollar</option>
                                        <option value="euro">euro</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>


                        <Row>


                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="formdesc">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={formData.formdesc}
                                        onChange={handleChange} />
                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col md={12}>

                                        <Form.Group className='mb-3' controlId="formdoucment">
                                            <Form.Label>Doucment</Form.Label>
                                            <Form.Control
                                                placeholder='12345'
                                                type="text"
                                                name="formdoucment"
                                                value={formData.formdoucment}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className='mb-3' controlId="depertment">
                                            <Form.Label>Depertment</Form.Label>
                                            <Form.Control
                                                as="select"
                                                name="depertment"
                                                value={formData.depertment}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select a Group</option>
                                                <option value="office">Office</option>
                                                <option value="managers">Managers</option>
                                                <option value="headoffice">Head Office</option>
                                                {/* Add more options as needed */}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formowner" >
                                    <Form.Label>Owner</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="formowner"
                                        value={formData.formowner}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formstrategy" >
                                    <Form.Label>Sourcing Strategy</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="formstrategy"
                                        value={formData.formstrategy}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='my-4'>
                            <Col md={6}>
                                <button className=' light-gray-btn  '>Back</button>
                            </Col>

                            <Col md={3}>
                                <button className='light-blue-btn w-100 '>Save & close</button>
                            </Col>
                            <Col md={3}>
                                <button className='light-blue-btn w-100' type='submit'>Next</button>
                            </Col>
                        </Row>
                    </Form>

                </Row>



            </Container>
        </>
    )
}

export default HeaderDetailsForm