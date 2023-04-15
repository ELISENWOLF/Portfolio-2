import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
import colorSharp from "../assets/img/color-sharp.png"

// import '../styles/skills.css'

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>What i have learned so far.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="HTML" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="CSS" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="React" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="BootStrap" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={mui} alt="MUI" />
                                <h5>Material UI</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Node" />
                                <h5>Node Js</h5>
                            </div>
                            <div className="item">
                                <img src={mdb} alt="MongoDB" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="SQL"/>
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Git" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills
