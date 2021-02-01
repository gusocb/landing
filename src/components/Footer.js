import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const FooterContainer = styled.div`
  background: #273746;
  margin-bottom: 0;
  padding: 50px 50px;
  height: 50px;
`;

const FooterElement = styled.span`
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Row>
        <Col sm className="text-center">
          <FooterElement>Preguntas Frecuentes</FooterElement>
        </Col>
        <Col sm className="text-center">
          <FooterElement>Reclutamiento</FooterElement>
        </Col>
      </Row>
      <Row>
        <Col sm className="text-center align-middle">
          <FooterElement>
            La Azucena 2021. Todos los derechos reservados.
          </FooterElement>
        </Col>
      </Row>
    </FooterContainer>
  );
};

export default Footer;
