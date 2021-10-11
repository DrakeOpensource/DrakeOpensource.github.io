import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <Container>
        <Row>
          <Col lg={2} text-center></Col>
          <Col lg={8} className='text-center'>
            <h2 className='contact-heading text-uppercase'>
              Contact
            </h2>
            <div className='contact-body'>
              <p>Feel free to contact me with any question.
              <br/>
              For open source projects please open an issue or pull request on <a href="https://github.com/DrakeOpensource/">Github</a>.
              <br/>
              Otherwise, send me an email at <a href="mailto:ryandrakecommunications@gmail.com">RyanDrakeCommunications@gmail.com</a>.
              </p>
              </div>
          </Col>
        </Row>
        <div className='buttons'>
          <Button
          className='text-uppercase'
          variant='secondary-outline'
          size='xl'
          href='https://github.com/DrakeOpensource/'>
            GitHub
          </Button>

          <Button
          className='text-uppercase'
          variant='secondary-outline'
          size='xl'
          href='mailto:ryandrakecommunications@gmail.com'>
            Mail
          </Button>

        </div>
      </Container>
    </div>
  );
};

export default Contact;