import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser'

import contactImg from '../assets/img/contact-img.svg'
import mailSend from '../assets/img/send.gif'
import '../styles/contact.css'

const Contact = () => {
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})
  const [image, setImage] = useState(contactImg)
  const form = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();

    setButtonText('Sending...')

    emailjs.sendForm('service_6rphgq1', 'template_ovps2gj', form.current, 'z2yKoW2vaC3BHxFdI')
      .then((result) => {
        setButtonText("Send")
        console.log(result.status);
        if (result.status === 200) {
          setStatus({ success: true, message: 'Message sent successfully.' })
          setImage(mailSend)
          setTimeout(() => {
            setImage(contactImg)
          },5000)
        } else {
          setStatus({ success: false, message: 'Something went wrong, please try again.' })
        }
      }, (error) => {
        console.log(error.text);
        setButtonText("Send")
      });
    e.target.reset();
  };
  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
        <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={handelSubmit}>
              <Row>
                <Col sm={12} className='px-1'>
                  <input type="email" name="email" placeholder='Your Email' required />
                </Col>
                <Col sm={6} className='px-1'>
                  <input type="text" name='name' placeholder='Your Full Name' required />
                </Col>
                <Col sm={6} className='px-1'>
                  <input type='tel' name="number" placeholder='Phone No.' required />
                </Col>
                <Col sm={12} className='px-1'>
                  <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                </Col>
                <Col xxl={6} xl={12} sm={12} className='px-1 contact-btn'>
                  <div>
                    <button type='submit'><span>{buttonText}</span></button>
                  </div>
                  <div>
                    <a href='https://wa.me/+918129831054'>
                      <span className='whatsapp'><BsWhatsapp /></span>
                    </a>
                  </div>
                </Col>
                {
                  status.message &&
                  <Col>
                    <p className={status.result === false ? "danger" : "success"}>{status.mess
                    }</p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
          <Col md={6}>
            <img src={image} alt='Contact Us' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact