import React from "react";
import { Form, Container, Button } from "react-bootstrap";

function AddTrainee() {
  return (
    <Container>
      <Form>
        <Form.Control placeholder="enter a name "></Form.Control>
        <Form.Control placeholder="enter a position "></Form.Control>
        <Form.Control placeholder="enter an email "></Form.Control>
        <Form.Control placeholder="enter a dob "></Form.Control>
        <Form.Control placeholder="enter a city "></Form.Control>
        <Button>SAVE</Button>
      </Form>
    </Container>
  );
}

export default AddTrainee;
