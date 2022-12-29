import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp" style={{borderRadius:"5px"}}>
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to read my<br></br> latest Blogs &  Updates.</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit} >
                <div className="new-email-bx">
                  <input value={email} type="email" style={{color:"grey"}} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit" style={{borderRadius:"0px 15px 15px 0px"}} onClick={()=>{alert("Currently unavailable. Kindly mail to malekarakash70@gmail.com for any queries.Thank you !")}}>Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
