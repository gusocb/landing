import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const ServiceCard = styled(Card)`
	width: 18rem;
	margin-bottom: 20px;
`;

const ServicesContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ServicesBanner = () => {
	return (
		<ServicesContainer>
			<ServiceCard>
				<Card.Body>
					<Card.Title>Pago con tarjeta</Card.Title>
					<Card.Text>Crédito, débito, vales y apoyos CDMX</Card.Text>
				</Card.Body>
			</ServiceCard>
			<ServiceCard>
				<Card.Body>
					<Card.Title>Pago de servicios</Card.Title>
					<Card.Text>
						Totalplay, Izzi, Sky, Telmex, Línea de Captura CDMX
					</Card.Text>
				</Card.Body>
			</ServiceCard>
			<ServiceCard>
				<Card.Body>
					<Card.Title>Recargas</Card.Title>
					<Card.Text>Telcel, AT&T, </Card.Text>
				</Card.Body>
			</ServiceCard>
		</ServicesContainer>
	);
};

export default ServicesBanner;
