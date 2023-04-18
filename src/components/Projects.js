import { Col, Container, Nav, Row,Tab } from 'react-bootstrap'
import TrackVisibility from 'react-on-screen'
import 'animate.css'

import ProjectCards from './ProjectCards'
import projectimg1 from '../assets/img/project-img1.png'
import projectimg2 from '../assets/img/project-img2.webp'
import projectimg4 from '../assets/img/project-img4.webp'
import projectimg6 from '../assets/img/project-img6.webp'
import projectimg8 from '../assets/img/project-img8.webp'

const Projects = () => {
  const projects =[
    {
        title: "Artomic",
        imgUrl:projectimg1,
        github:"https://github.com/ELISENWOLF/artomic-frontend",
        demo:"https://artomic.netlify.app/"
    },
    {
        title: "IMDB Clone",
        imgUrl:projectimg2,
        github:"https://github.com/ELISENWOLF/IMDB_Clone",
        demo:"https://elisen-emdb.netlify.app/"
    },
    {
        title: "INSURE Design",
        imgUrl:projectimg4,
        github:"https://github.com/ELISENWOLF/Insurance_Plum",
        demo:"https://elisen-chat.netlify.app/"
    },
    {
        title: "Slack Clone",
        imgUrl:projectimg6,
        github:"https://github.com/ELISENWOLF/Slack_Clone",
        demo:"https://elisen-chat.netlify.app/"
    }
  ]

  const projects2 = [
    {
        title: "ACME Frontend Design",
        imgUrl:projectimg8,
        github:"https://github.com/ELISENWOLF/Responsive_webpage",
        demo:"https://mitsogoassessment.netlify.app/"
    }
  ]

  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>  
                                <h2>Projects</h2>
                                <p>My Recent Works</p>
                            </div>
                        }
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab one</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((item,index) => {
                                            return(
                                                <ProjectCards 
                                                    key={index}
                                                    {...item}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                {
                                    projects2.map((item,index) => {
                                        return(
                                            <ProjectCards 
                                                key={index}
                                                {...item}
                                            />
                                            )
                                    })
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Projects