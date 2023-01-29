import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Form, Row, Col, Button } from 'react-bootstrap';


class MyAdminArea extends React.Component {
    render() {
        return <div>
            <Alert variant="info">
                <Alert.Heading>imam Hussain a.s institute</Alert.Heading>
                <p>
                    Tutorial of CRUD Application <br />
                    Insert Update Delete and Read Records with images (MySQL)
                </p>
                <hr />
                <p className="mb-0">
                    <a href='https://www.fb.com/iHi.Karachi' target='_blank'>Facebook</a> &nbsp;
                    <a href='https://www.youtube.com/channel/UCa_Hun35Du0kAuWu-zkXyaQ' target='_blank'>Youtube</a>
                </p>
            </Alert>


            <Form>
                <Form.Group style={{ margin: '10px' }} as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col sm="3 m-1">
                        <Form.Control size="lg" type="text" placeholder="Enter ID" />
                    </Col>


                    <Col sm="4 m-1">
                        <Form.Control size="lg" type="text" placeholder="Enter Name" />
                    </Col>


                    <Col sm="3 m-1">
                        <Form.Control size='lg' type="file" />
                    </Col>


                    <Col sm="1 m-1" align='right'>
                        <Button size='lg' variant="primary">
                            Submit
                        </Button>
                    </Col>


                </Form.Group>
            </Form>


            <Form>
                <Form.Group style={{ margin: '10px' }} as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col sm="1 m-1">
                        <img width='150px' src='' ></img>
                        <b>ID: Hello</b>
                        <div>Name: Test Name</div>
                    </Col>
                </Form.Group>
            </Form>
        </div>;
    }
}


export default MyAdminArea;
