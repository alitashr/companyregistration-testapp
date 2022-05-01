import React, { PropTypes } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const CompanyRegistration = (props) => {
  const formOnSubmit = (event) => {
    event.preventDefault();
    console.log("formOnSubmit -> event", event.target);
    const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    console.log("formOnSubmit -> formData", formData);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>
            <Form onSubmit={formOnSubmit}>
              <Form.Group className="mb-3" controlId="formCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Company Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button> */}
              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDOB">
                <Form.Label>DOB</Form.Label>
                <Form.Control type="date" placeholder="Date of birth" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAbout">
                <Form.Label>About Yourself</Form.Label>
                <Form.Control maxLength={300} type="text" placeholder="Write something about yourself" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

CompanyRegistration.propTypes = {};

export default CompanyRegistration;
