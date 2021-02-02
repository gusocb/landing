import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import credit from "../assets/credit-card.png";

const ServicesBanner = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <Card lg={4} md={12} className="mb-4">
            <Card.Img src={credit} alt="tarjeta" variant="top" />
            <Card.Body>
              <Card.Title>Pago con tarjeta</Card.Title>
              <Card.Text>
                Aceptamos credito, debito, vales y apoyos CDMX
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card lg={4} md={12} className="mb-4">
            <Card.Img src={credit} alt="tarjeta" variant="top" />
            <Card.Body>
              <Card.Title>Pago con tarjeta</Card.Title>
              <Card.Text>
                Aceptamos credito, debito, vales y apoyos CDMX
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card lg={4} md={12} className="mb-4">
            <Card.Img src={credit} alt="tarjeta" variant="top" />
            <Card.Body>
              <Card.Title>Pago con tarjeta</Card.Title>
              <Card.Text>
                Aceptamos credito, debito, vales y apoyos CDMX
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesBanner;
