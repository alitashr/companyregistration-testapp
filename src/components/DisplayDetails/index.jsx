import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useUserDetailsState } from "../../reducers/userDetails.reducer";

const DisplayDetails = () => {
  const userDetailsState = useUserDetailsState();
  const userDetails = Object.keys(userDetailsState).filter((key) => {
    return key !== "isLoggedIn";
  });
  return (
    <Container className="display-container">
      <h1 className="page-title"> Details</h1>

      {userDetails.map((key, i) => (
        <Row key={i}>
          <Col sm={4} className="userdetail-key">
            {key}
          </Col>
          <Col sc={8}> : {userDetailsState[key]}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default DisplayDetails;
