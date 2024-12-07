import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import './Project.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "RJ Technologies Web Application",
      description: "Design & Development",
      imgUrl: projImg1,

    },
    {
      title: "Tic Tac Toe",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>The portfolio showcases a diverse range of creative, innovative, and problem-solving projects, from web design to branding and tech solutions. The aim is to transform ideas into impactful, seamless results, pushing boundaries and fostering growth. The portfolio serves as a testament to the individual's skills and dedication, offering opportunities for collaboration and inspiration.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Explore My Creative Developer Journey</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Excellence in Every Project Journey</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Growth Through Every Challenge</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>You’ll discover a diverse range of projects that showcase my skills across various fields.
                          Whether it's a sleek web design, a strategic branding initiative, or an innovative tech solution,
                          each project embodies my commitment to excellence and my relentless pursuit of quality.
                          I take pride in delivering not only visually stunning results but also solutions that are functional,
                          user-centered, and forward-thinking.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Every challenge is an opportunity for growth, and through each project, I strive to push boundaries, learn, and evolve. I invite you to explore these works as a testament to my skills, creativity, and dedication. Whether you're looking for inspiration, collaboration, or a potential partner for your next project, I’m here to help turn your ideas into reality.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}
