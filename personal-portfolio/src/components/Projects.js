import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Youtube Clone ",
      description: "Design & Development",
      imgUrl: projImg1,
      projectLink:"https://youtubeclone70.netlify.app"
    },
    {
      title: "Food Recipy Applications",
      description: "Design & Development",
      imgUrl: projImg2,
      projectLink:"https://msrtastykitchen.ccbp.tech/"
    },
    {
      title: "Testing Chatting Dashboard",
      description: "Design & Development",
      imgUrl: projImg3,
      projectLink:"https://chatapplication70.netlify.app"
    },
    {
      title: "Covid Awareness Website",
      description: "Design & Development",
      imgUrl: projImg4,
      projectLink:"https://covidawarenessakashm.netlify.app"
    },
    {
      title: "Smart Hire",
      description: "Under Developments",
      imgUrl: projImg5,
      projectLink:""
    },
    {
      title: "E-Commerce Landing Page",
      description: "Design & Development",
      imgUrl: projImg6,
      projectLink:""
    },
  ];

  const Blogs = [
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    //   projectLink:""
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    //   projectLink:""
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    //   projectLink:""
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    //   projectLink:""
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    //   projectLink:""
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    //   projectLink:""
    // },
    {}
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have design all projects within latest impactful processess and best coding practices.Also designed for scale and reliability with the future in mind.Also did critical R&D, lay out a path across many versions within prioritized scaling tasks and projects. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"  style={{cursor:"pointer"}}>Latest Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"  style={{cursor:"pointer"}}>Blogs Letters</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"  style={{cursor:"pointer"}}>Fields & About ME</Nav.Link>
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
                    <Row>
                        {
                          Blogs.map((Blogs, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...Blogs}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                      <div class="about-banner-left-content">
                        <div class="about-banner-left-content-languages">
            <div class="language-header">
              &#x25B7; &nbsp; Programming Languages
            </div>

            <div class="language-content">
              <div class="language-content-item">
                <div class="language-name">HTML 5</div>
                <div class="language-bar">
                  <div class="progress-bar">
                    <div class="progress-bar-completed-1"></div>
                  </div>
                </div>
              </div>

              <div class="language-content-item">
                <div class="language-name">CSS</div>
                <div class="language-bar">
                  <div class="progress-bar">
                    <div class="progress-bar-completed-2"></div>
                  </div>
                </div>
              </div>

              <div class="language-content-item">
                <div class="language-name">SASS</div>
                <div class="language-bar">
                  <div class="progress-bar">
                    <div class="progress-bar-completed-3"></div>
                  </div>
                </div>
              </div>
              <div class="language-content-item">
                <div class="language-name">JavaScript</div>
                <div class="language-bar">
                  <div class="progress-bar">
                    <div class="progress-bar-completed-4"></div>
                  </div>
                </div>
              </div>

              <div class="language-content-item">
                <div class="language-name">Tailwind</div>
                <div class="language-bar">
                  <div class="progress-bar">
                    <div class="progress-bar-completed-5"></div>
                  </div>
                </div>
              </div>

              <div class="language-content-item">
                <div class="language-name">PHP</div>
                <div class="language-bar">
                  <div class="progress-bar">
                    <div class="progress-bar-completed-6"></div>
                  </div>
                </div>
              </div>

              <div class="language-content-item">
                <div class="language-name">Python</div>
                <div class="language-bar">
                  <div class="progress-bar">
                    <div class="progress-bar-completed-7"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="about-banner-left-content-frameworks">
          <div class="language-header">
              &#x25B7; &nbsp; Frameworks 
            </div>
            <div class="framework-content-item">
              <div class="framework-name">REACT JS</div>
              <div class="framework-bar">
                <div class="progress-bar">
                  <div class="progress-bar-completed-F1"></div>
                </div>
              </div>
            </div>

            <div class="framework-content-item">
              <div class="framework-name">NODE JS</div>
              <div class="framework-bar">
                <div class="progress-bar">
                  <div class="progress-bar-completed-F2"></div>
                </div>
              </div>
            </div>
            <div class="framework-content-item">
              <div class="framework-name">Mongo DB</div>
              <div class="framework-bar">
                <div class="progress-bar">
                  <div class="progress-bar-completed-F3"></div>
                </div>
              </div>
            </div>

            <div class="framework-content-item">
              <div class="framework-name">Express JS</div>
              <div class="framework-bar">
                <div class="progress-bar">
                  <div class="progress-bar-completed-F4"></div>
                </div>
              </div>
            </div>

            <div class="framework-content-item">
              <div class="framework-name">Bootstrap 5</div>
              <div class="framework-bar">
                <div class="progress-bar">
                  <div class="progress-bar-completed-F6"></div>
                </div>
              </div>
            </div>

          </div>
          </div>
          </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
