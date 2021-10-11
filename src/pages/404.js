import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header'
import addy404 from '../assets/images/addy/404.jpg'

const NotFound = () => {
    return (
        <>
            <Header />
            <div className='addy-404'>
                <Container className='align-self-center'>
                    <h4>Oh no! This page doesn't exist!</h4>
                    <h6>Try going back to the home page with the links above!</h6>
                    <p>Here's an Addy to cheer you up.</p>
                    <Row>
                        <Col lg={12} >
                            <img src={addy404} alt='doggo'/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default NotFound;
