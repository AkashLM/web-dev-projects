import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/mainlogo.png";
import navIcon1 from "../assets/img/nav-icon2.svg";
import navIcon2 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={8}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={2}>
          <div class="footer-left-services">
          {/* <!-- title --> */}
          <div class="footer-left-services-title">Services offered :</div>

          <div class="footer-left-services-desc">Web Developement.</div>

          <div class="footer-left-services-desc">Mentor Sessions.</div>

          <div class="footer-left-services-desc">WebStack Camps.</div>

          <div class="footer-left-services-desc">UI/UX Developement.</div>
        </div>
        </Col>
        <Col size={12} sm={2}>
        <div class="footer-left-services">
          {/* <!-- title --> */}
          <div class="footer-left-services-title">Felids offered:</div>

          <div class="footer-left-services-desc">E-commerce Projects.</div>

          <div class="footer-left-services-desc">Web-Applications.</div>

          <div class="footer-left-services-desc">Backend Managements.</div>

          <div class="footer-left-services-desc">Front-end Designs.</div>
        </div>
        </Col>

          <Col size={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/AkashLM"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/akashmalekarsde"><img src={navIcon2} alt="Icon" /></a>
              <a href="mailto:malekarakash70@gmail.com"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022@Akash_Malekar || All Rights Reserved </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
