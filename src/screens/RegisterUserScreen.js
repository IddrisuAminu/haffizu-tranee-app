import React, { useState, useContext } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Row,
} from "react-bootstrap";
import { UserContext } from "../contexts/UsersContext";

const RegisterUserScreen = () => {
  const { registerUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newuser = {
      name,
      email,
      password,
    };
    registerUser(newuser);
  }

  return (
    <div>
      <Row className="justify-content-md-center">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="justify-center border border-green mt-5 p-3"
        >
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Form.Label>name</Form.Label>
              <FormControl
                placeholder="enter name"
                value={name}
                onChange={(text) => setName(text.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>email</Form.Label>
              <FormControl
                placeholder="enter email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>password</Form.Label>
              <FormControl
                placeholder="enter password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
              />
            </FormGroup>
            <Button type="submit">SIGN UP</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterUserScreen;
