import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-new.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  const [formState, setFormState]=useState({});
    const changeHandler= (event)=>{
      setFormState({...formState,[event.target.name]:event.target.value});
    }
    console.log(formState);

    const submitHandler=(event)=>{
      event.preventDefault();
      const config={
        SecureToken:"0c136aea-624e-4c73-b477-e9593f76301e",
        To : 'malekarakash70@gmail.com',
        From : formState.email,
        Subject : "Connect with me request ",
        Body : `${formState.fname},${formState.lname}, want to connect with you. Message: ${formState.message}`,
    }

      if(window.Email){
        window.Email.send(config).then(()=> alert("Email send successfully !"));
      }
    }


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={submitHandler}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input style={{borderRadius:"5px"}} type="text" name="fname" value={formState.fname || ""} placeholder="First Name" onChange={changeHandler} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" style={{borderRadius:"5px"}} name="lname" value={formState.lname || ""} placeholder="Last Name" onChange={changeHandler}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" style={{borderRadius:"5px"}} name="email" value={formState.email || ""} placeholder="Email Address" onChange={changeHandler} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" style={{borderRadius:"5px"}} name="phone" value={formState.phone || ""} placeholder="Contact No." onChange={changeHandler}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea style={{borderRadius:"5px"}} rows="6" name="message" value={formState.message || ""} placeholder="Message" onChange={changeHandler}></textarea>
                      <button style={{borderRadius:"5px"}} type="submit"><span>Submit</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
