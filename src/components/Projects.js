import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'

import ProjectCards from './ProjectCards'
import { projects, projects2, projects3 } from '../projects/data'
import coding from '../assets/img/UI Developer.gif'

const Projects = () => {

    return (
        <section className='project' id='projects'>
            <Container>
                <Row className='project-container'>
                    <Col xl={1} className='project-image'>
                        <img src={coding} alt="coding" />
                    </Col>
                    <Col xl={8} md={7} className='project-box'>
                        <h2>Projects</h2>
                        <p>My Recent Works</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">                                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((item, index) => {
                                                return (<ProjectCards
                                                    key={index}
                                                    {...item}
                                                />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects2.map((item, index) => {
                                                return (<ProjectCards
                                                    key={index}
                                                    {...item}
                                                />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Row>
                                        {
                                            projects3.map((item, index) => {
                                                return (<ProjectCards
                                                    key={index}
                                                    {...item}
                                                />
                                                )
                                            })
                                        }
                                    </Row>
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