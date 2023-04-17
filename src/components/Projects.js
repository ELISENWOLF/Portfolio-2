import { Col, Container, Nav, Row,Tab } from 'react-bootstrap'

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
        title: "Imdb_Clone",
        imgUrl:projectimg2,
        github:"https://github.com/ELISENWOLF/IMDB_Clone",
        demo:"https://elisen-emdb.netlify.app/"
    },
    {
        title: "INSURE_Design",
        imgUrl:projectimg4,
        github:"https://github.com/ELISENWOLF/Insurance_Plum",
        demo:"https://elisen-chat.netlify.app/"
    },
    {
        title: "Slack_Clone",
        imgUrl:projectimg6,
        github:"https://github.com/ELISENWOLF/Slack_Clone",
        demo:"https://elisen-chat.netlify.app/"
    },
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
                <Col >
                    <h2>Projects</h2>
                    <p>My Recent Works</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center id="pills-tab"'>
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
                                Lorem Ipsum
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                Lorem Ipsum
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