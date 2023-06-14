import { Col, Container, Row } from 'react-bootstrap'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import logo from '../assets/img/wolf_logo.webp'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer' id='footer'>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={6}>
                        <img src={logo} alt='logo' className='footer-logo' />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href='https://linkedin.com/in/elisenwolf/' className='linkedin'><FaLinkedinIn className='linkedin' /></a>
                            <a href='https://github.com/ELISENWOLF' className='githublogo'><FaGithub className='githublogo' /></a>
                            <a href='https://www.instagram.com/elisen_wolf' className='instagram'><FaInstagram className='instagram' /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer