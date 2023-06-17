import { useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

import Music from './Music'
import logo from '../assets/img/wolf_logo.webp'
import '../styles/navbar.css'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [aria, setAria] = useState('false')

  const handleChangeAria = () => {
    aria === 'false' ? setAria('true') : setAria('false')
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt='Logo' className='logo_img' />&nbsp;<span className='logoname'>Elisenwolf</span>
        </Navbar.Brand>
        <Navbar.Toggle className='aria' aria-controls="basic-navbar-nav" onClick={() => handleChangeAria()} aria-expanded={aria}>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <Nav.Link href='#connect'>
              <button className='vvd'><span>Let's Connect</span></button>
            </Nav.Link>
            <Music />
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar