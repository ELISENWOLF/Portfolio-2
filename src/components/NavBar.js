import { useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import Music from './Music'
import logo from '../assets/img/wolf_logo.webp'
import '../styles/navbar.css'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

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
          <img src={logo} alt='Logo' /><span className='logoname'>Elisenwolf</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://linkedin.com/in/elisenwolf/' className='linkedin'><FaLinkedinIn className='linkedin' /></a>
              <a href='https://github.com/ELISENWOLF' className='githublogo'><FaGithub className='githublogo' /></a>
              <a href='https://www.instagram.com/elisen_wolf' className='instagram'><FaInstagram className='instagram' /></a>
            </div>
            <Nav.Link href='#connect'>
              <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </Nav.Link>
            <Music />
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar