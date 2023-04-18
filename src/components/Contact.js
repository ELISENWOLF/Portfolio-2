import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser'

import contactImg from '../assets/img/contact-img.svg'
import '../styles/contact.css'

const Contact = () => {
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})
  const form = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();

    setButtonText('Sending...')

    emailjs.sendForm('service_6rphgq1', 'template_ovps2gj', form.current, 'z2yKoW2vaC3BHxFdI')
      .then((result) => {
        setButtonText("Send")
        console.log(result.status);
        if(result.status === 200){
            setStatus({ success: true, message: 'Message sebt successfully.' })
        }else{
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
                <img src={contactImg} alt='Contact Us' />
            </Col>
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
                        <Col sm={4} className='px-1'>
                            <button type='submit'><span>{buttonText}</span></button>
                        </Col>
                        <Col sm={4} className='px-1'>
                        <a href='https://wa.me/+918129831054'>
                            <span className='whatsapp'><BsWhatsapp /></span>
                        </a>
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
        </Row>
      </Container>
    </section>
  )
}

export default Contact

// 
//       <h2>Contact Me</h2>

//       <div className="container contact_container">
//         <div className="contact_options">
//           <article className='contact_option'>
//             <HiOutlineMail className='contact_option_icon' />
//             <h4>Email</h4>
//             <h5>aravindprakash2001@gmail.com</h5>
//             <a href='mailto:aravindprakash2001@gmail.com'>Send a message</a>
//           </article>
//           <article className='contact_option'>
//             <RiMessengerFill className='contact_option_icon' />
//             <h4>Messenger</h4>
//             <h5>Aravind Prakash</h5>
//             <a href='https://m.me/Elisenwolf25/' target='_blank' rel='noreferrer'>Send a message</a>
//           </article>
//           <article className='contact_option'>
//             <BsWhatsapp className='contact_option_icon' />
//             <h4>WhatsApp</h4>
//             <a href='https://wa.me/+918129831054' target='_blank' rel='noreferrer'>Send a message</a>
//           </article>
//         </div>
//         <form ref={form} onSubmit={sendEmail}> {/* */}
//           <input type="text" name='name' placeholder='Your Full Name' required />
//           <input type="email" name="email" placeholder='Your Email' required />
//           <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
//           <button type='submit' className='btn btn-primary'>Send Message</button>
//         </form>
//       </div>