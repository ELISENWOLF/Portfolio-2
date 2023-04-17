import React from 'react'
import { Col } from 'react-bootstrap'

import '../styles/projects.css'

const ProjectCards = ({ title, imgUrl, github, demo }) => {
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt={title} />
            <div className='proj-txt'>
                <h4>{title}</h4>
                <div className="proj-btn">
                    <a href={github}>GitHub</a>
                    <a href={demo}>Demo</a>
                </div>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCards