import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
const MainMessage = () => {
  return (
    <Jumbotron>
      <Container>
        <h1 className="display-3">Ya volvimos</h1>
        <p className="lead">
          Para ofrecerte una gran gama de productos y servicios con la calidad
          que nos caracteriza.
        </p>
        <Button variant="primary" size="lg">
          Consulta nuestra ubicación
        </Button>
      </Container>
    </Jumbotron>
  );
};

export default MainMessage;
