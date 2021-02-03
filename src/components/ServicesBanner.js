import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import credit from '../assets/credit-card.png';
import smarthphone from '../assets/smartphone.png';
import wifi from '../assets/wifi.png';

const ServicesBanner = () => {
	return (
		<Container className="text-center">
			<Row>
				<Col md>
					<Card className="mb-4">
						<Card.Img src={credit} alt="tarjeta" variant="top" />
						<Card.Body>
							<Card.Title>Pago con tarjeta</Card.Title>
							<Card.Text>
								Aceptamos credito, debito, vales y apoyos CDMX
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md>
					<Card className="mb-4">
						<Card.Img src={wifi} alt="tarjeta" variant="top" />
						<Card.Body>
							<Card.Title>Pago de servicios</Card.Title>
							<Card.Text>
								Paga tu teléfono e internet de Telmex, Izzi y
								Totalplay.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md>
					<Card className="mb-4">
						<Card.Img
							src={smarthphone}
							alt="tarjeta"
							variant="top"
						/>
						<Card.Body>
							<Card.Title>Recargas telefónicas</Card.Title>
							<Card.Text>
								Tiempo aire y paquetes Telcel, Movistar, AT&T.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default ServicesBanner;
