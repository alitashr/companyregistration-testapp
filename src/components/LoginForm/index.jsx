import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { login } from "../../api/pegotecApi";
import { useDispatchUserDetails, userDetailsActions } from "../../reducers/userDetails.reducer";

const LoginForm = () => {
  const dispatchUserDetailsState = useDispatchUserDetails();

  const [email, setEmail] = React.useState("team@pegotec.net");
  const [password, setPassword] = React.useState("12345678");


  const formOnSubmit = (event) => {
    event.preventDefault();
    console.log("formOnSubmit -> email, password", email, password)

    login({ email, password })
      .then((res) => {
        dispatchUserDetailsState({ type: userDetailsActions.SET_ISLOGGEDIN, payload: true });
      })
      .catch((err) => {});
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>
            <Form onSubmit={formOnSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  required
                  type="email"
                  placeholder="Enter email"
                  onChange={handleEmailChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  required
                  type="password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                />
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

LoginForm.propTypes = {};

export default LoginForm;
