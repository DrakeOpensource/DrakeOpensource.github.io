import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav, Container } from 'react-bootstrap';
// Assets
import logo from '../assets/images/logo/favicons/android-chrome-512x512.png';
import useScrollListener from '../components/useScrollListener';


const Header = () => {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    // if (scroll.y === 0) {
    //   _classList.push('navbar--hidden');
    //   setNavClassList(_classList);
    // } else
    if (scroll.y <= 150 && ((scroll.lastY===0) || (scroll.y - scroll.lastY > 0))) {
      _classList.push('navbar--hidden');
      setNavClassList(_classList);
    } else if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push('navbar--hidden');
    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <div>
      <Navbar
        className={navClassList.join(' ')}
        expand='lg' fixed='top'>
        <Container>
          <Link smooth to='/home#landing'>
            <Navbar.Brand className='nav-btn'>
              <img src={logo} width='80px' alt='Home'/>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container >
            <Nav className='justify-content-around'>
              <Nav.Item>
                <Link smooth to='/home#about' className='nav-link'><p>About</p></Link>
              </Nav.Item>
              <Nav.Item>
                <Link smooth to='/home#skills' className='nav-link'><p>Skillset</p></Link>
              </Nav.Item>
              <Nav.Item>
                <Link smooth to='/home#portfolio' className='nav-link'><p>Portfolio</p></Link>
              </Nav.Item>
              <Nav.Item>
                <Link smooth to='/home#contact' className='nav-link'><p>Contact</p></Link>
              </Nav.Item>
            </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;