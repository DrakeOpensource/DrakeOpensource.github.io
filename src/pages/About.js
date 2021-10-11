import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
// Assets
import profilePic from '../assets/images/profile-pics/prof_head_cropped_circle.png';
import pdf from '../assets/publications/eyes/low_k_lasik.pdf'

const About = () => {
  return(
    <div className='about' id='about'>
      <Container>
        <Row>
          <Col lg={4} md={12}>
            <Image src={profilePic} width='250px' alt='Ryan Drake profile image' />
          </Col>

          <Col lg={8} md={12} className='about-info'>
            <div className='about-text'>
              <Row>
                <h4>I'm Ryan</h4>
              </Row>
              <Row>
                <p> I specialize in taking complicated datasets and reducing them down into concrete, actionable, components.
                  I have skills in most data science steps: pre-processing, statistical analysis, machine learning, visualization, and results communication.
                  <br/><br/>
                  After graduating and working for a world class research institution (<a href='https://www.bu.edu/'>Boston University</a>) in machine learning, I am currently looking for full-time opportunities in data.
                  <br/>
                </p>
              </Row>
            </div>
            <div className='about-buttons'>
              <Button
                  className='text-uppercase'
                  variant='secondary-outline'
                  size='xl'
                  href={pdf}>
                  Publications
                </Button>
                <Button
                  className='text-uppercase'
                  variant='secondary-outline'
                  size='xl'>
                  Resume
                </Button>
                <Button
                  className='text-uppercase'
                  variant='secondary-outline'
                  size='xl'
                  href='https://public.tableau.com/app/profile/ryan.drake'
                  target='_blank'>
                  Tableau Public
                </Button>
                <Button
                  className='text-uppercase'
                  variant='secondary-outline'
                  size='xl'
                  href='https://www.github.com/DrakeOpensource/portfolio/'>
                  GitHub
                </Button>

              </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;