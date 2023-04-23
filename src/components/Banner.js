import { useState, useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'

import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import js from '../assets/img/javascript.png'
import react from '../assets/img/reactjs.png'
import bootstrap from '../assets/img/bootstrap.svg'
import mui from '../assets/img/material-ui.png'
import node from '../assets/img/nodejs.png'
import mdb from '../assets/img/mongodb.png'
import sql from '../assets/img/mysql.png'
import git from '../assets/img/git.png'
import CV from '../assets/pdf/CV.pdf';
import '../styles/banner.css'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Frontend Developer', 'Web Developer', 'React Developer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000
    const imgArray = [html, css, js, react, bootstrap, mui, node,
        mdb, sql, git]
    const headerImgRef = useRef(html)

    useEffect(() => {
        let loop = setInterval(() => {
            let random = Math.floor(Math.random() * imgArray.length);
            headerImgRef.current = imgArray[random]
        }, 800)
        return () => { clearInterval(loop) }
    })

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) }
    })

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7} className='left-banner'>
                        <span className='stars'></span>
                        <span className='stars'></span>
                        <span className='stars'></span>
                        <span className='stars'></span>
                        <span className='stars'></span>
                        <span className='stars'></span>
                        <span className='stars'></span>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>
                            Hi I'm Aravind,<br />
                            <span className='wrap'>
                                {text}
                            </span>
                        </h1>
                        <p>Hi, I’m a Front-end developer with a knack in ReactJS, Javascript, HTML, CSS, GitHub and NodeJS. I completed product engineering from School of Accelerated Learning (SOAL) and got my BCA degree from Mahatma Gandhi University. I like problem solving and creating art in my free time.</p>
                        <Col xl={4} md={8} sm={5} xs={10}>
                            <a href={CV} download="Aravind-Resume">Download CV <ArrowRightCircle size={25} /></a>
                        </Col>
                    </Col>
                    
                    <Col xs={12} md={6} xl={5} className='right-banner'>
                        <img src={headerImgRef.current} alt="Header Img" className='image' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner