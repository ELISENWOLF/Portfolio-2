import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'

import headerImg from '../assets/img/header-img.svg'
// import '../styles/banner.css'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Frontend Developer', 'Web Developer', 'React Developer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

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
                    <Col xs={12} md={6} xl={7}>
                        <span>Welcome to my Portfolio</span>
                        <h1>
                            {`Hi I'm Aravind `}
                            <span className='wrap'>
                                {text}
                            </span>
                        </h1>
                        <p>Hi, I’m a Front-end developer with a knack in ReactJS, Javascript, HTML, CSS, GitHub and NodeJS. I completed product engineering from School of Accelerated Learning (SOAL) and got my BCA degree from Mahatma Gandhi University. I like problem solving and creating art in my free time.</p>
                        <button onClick={() => console.log('download')}>Download CV <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={headerImg} alt='bannerimage' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner