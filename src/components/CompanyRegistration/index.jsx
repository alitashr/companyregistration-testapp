import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatchUserDetails, userDetailsActions } from "../../reducers/userDetails.reducer";
import { getAge } from "../../utils/utils";
import CountriesList from "../CountriesList";
import DisplayDetails from "../DisplayDetails";

const CompanyRegistration = () => {
  const dispatchUserDetailsState = useDispatchUserDetails();
  const [showDisplayedDetails, setShowDisplayedDetails] = useState(false);
  const [userDetail, setUserDetail] = useState({
    company: "",
    email: "",
    address: "",
    phone: null,
    age: null,
    about: "",
  });

  const formOnSubmit = (event) => {
    event.preventDefault();
    dispatchUserDetailsState({ type: userDetailsActions.SET_USERDETAILS, payload: { ...userDetail } });
    setShowDisplayedDetails(true);
  };
  const handleDobChange = (e) => {
    const dob = e.target.value;
    if (!dob) return;
    const date = dob.replace(/-/g, "/");
    const age = getAge(date);
    if (age >= 0) setUserDetail({ ...userDetail, age: `${age} years` });
    else {
      alert("Please enter a valid date of birth");
    }
  };
  return (
    <div>
      <Container>
        <h1 className="page-title">Company Registration</h1>
        <Row>
          <Col sm={8}>
            <Form onSubmit={formOnSubmit}>
              <Form.Group className="mb-3" controlId="formCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Company Name"
                  onChange={(e) => setUserDetail({ ...userDetail, company: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setUserDetail({ ...userDetail, email: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  onChange={(e) => setUserDetail({ ...userDetail, address: e.target.value })}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Phone"
                  onChange={(e) => setUserDetail({ ...userDetail, phone: e.target.value })}
                />
              </Form.Group>

              <CountriesList />

              <Form.Group className="mb-3" controlId="formDOB">
                <Form.Label>DOB</Form.Label>
                <Form.Control type="date" placeholder="Date of birth" onChange={handleDobChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAbout">
                <Form.Label>About Yourself</Form.Label>
                <Form.Control
                  maxLength={300}
                  type="text"
                  placeholder="Write something about yourself"
                  onChange={(e) => setUserDetail({ ...userDetail, about: e.target.value })}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {showDisplayedDetails && <DisplayDetails />}
    </div>
  );
};


export default CompanyRegistration;
