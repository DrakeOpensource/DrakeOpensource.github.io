import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// Assets
import logo from '../assets/images/logo/favicons/android-chrome-512x512.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
// Particles
import Particles from "react-particles-js";
import particlesConfig from "../assets/misc/particlesConfig.json";


const Landing = () => {
  return (
    <header className='landing' id='landing'>
        <div id='react-particles'>
          <Particles
            height='125vh'
            width='100vw'
            overflow='hidden'
            params={particlesConfig} />
        </div>
        <Container>
          <Row>
            <Col>
              <div className='landing-text'>
                <div className='title'>
                  <Row>
                    <Col lg={4} md={12} className='align-self-center'>
                      <p>Ryan</p>
                    </Col>
                    <Col lg={4} md={12} className='align-self-center'>
                      <img width="150px" src={logo} alt='' />
                    </Col>
                    <Col lg={4} md={12} className='align-self-center'>
                      <p>Drake</p>
                    </Col>
                  </Row>
                </div>
                <hr />
                <br />
                <Button 
                className='list-inline'
                variant='primary-outline'
                href='https://www.linkedin.com/in/ryan-drake-58090620a/'
                target='_blank'>
                  <FaLinkedin size={30} />
                </Button>
                <Button
                className='list-inline'
                variant='primary-outline'
                href='https://www.github.com/DrakeOpensource/Portfolio'
                target='_blank'>
                  <FaGithub size={30} />
                </Button>
                <br/><br/>
                <p>Welcome the homepage of Ryan Drake.<br/>
                I'm a Google Certified Data Analyst currently seeking full-time and other opportunities.</p>
                <Button
                className='text-uppercase'
                variant='secondary-outline'
                size='xl'
                href='#about'>
                  About
                </Button>
                <Button
                className='text-uppercase'
                variant='secondary-outline'
                size='xl'
                href='#contact'>
                  Contact
                </Button>
              </div>
            </Col>
           </Row>
        </Container>
      
    </header>
  );
};

export default Landing;