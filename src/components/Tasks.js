import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'

function Tasks() {
    let datas = [JSON.parse(localStorage.getItem("userData"))]

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <td>Title</td>
                                    <td>Owner</td>
                                    <td>Depertment</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >{datas[0].formtitle}</td>
                                    <td >{datas[0].depertment}</td>
                                    <td >{datas[0].formcurrency}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Tasks