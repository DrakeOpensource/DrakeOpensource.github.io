import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

// Assets
import logo from '../assets/images/logo/ml-tree-trans.png'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {

	return (
		<footer id='footer'>
			<Container>
				<Row>
					<Col lg={4} md={12} className='align-self-center'>
					<Link smooth to='/home#landing'>
						<Button
						variant=''>
							<img src={logo} width='70px' alt='Home'/>
						</Button>
					</Link>
					</Col>
					<Col lg={4} md={12} className='align-self-center'>
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
						href='https://www.github.com/DrakeOpensource/Portfolio/'
						target='_blank'>
						<FaGithub size={30} />
						</Button>
					</Col>
					<Col lg={4} md={12} className='align-self-center'>
						<a href='https://www.termsfeed.com/live/709fe6f6-3b49-4960-a105-a8503666bf1e'>Privacy Policy</a>
						<a href='https://www.termsfeed.com/live/6b17cd9d-ffde-4980-9dff-b13f887ef81b'>Terms of Use</a>
					</Col>
				</Row>
				<Row>
					<span className='copyright'>Copyright &copy; 2021 by Ryan Drake</span>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;