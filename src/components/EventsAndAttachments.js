import React, { useState } from 'react'
import { Accordion, Button, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap'
import Tasks from './Tasks';

function EventsAndAttachments() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        setSelectedFile(event.target.files[0])
        if (uploadedFile) {
            setFileName(uploadedFile.name);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(fileName)
        console.log(selectedFile)
        handleClose()

        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const fileData = event.target.result;
                localStorage.setItem('uploadedFile', fileData);
            };

            reader.readAsDataURL(selectedFile);
        }
    }


    return (
        <Container>
            <Row >
                <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Event & Attachments
                            </Accordion.Header>

                            <Accordion.Body>
                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-outline-primary mx-2' onClick={handleShow} >Create</button>
                                    <button className='btn btn-outline-primary'>Manage</button>
                                </div>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Attachments</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{fileName}</td>

                                        </tr>
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                Tasks
                            </Accordion.Header>

                            <Accordion.Body>
                                <Tasks />
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Attachment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => { handleSubmit(e) }}>
                        <Form.Group as={Row}>
                            <Form.Control
                                name='file'
                                type="file" id="file" onChange={handleFileUpload}
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type='submit' >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Form>

                </Modal.Body>

            </Modal>
        </Container>

    )
}

export default EventsAndAttachments