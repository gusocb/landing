import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';

const CoolButton = styled(Button)`
	background: #cb7385;
	border: #cb7385;
	&:hover {
		background: #edb7c8;
	}
`;

const MainMessage = () => {
	return (
		<Jumbotron>
			<Container>
				<h1 className="display-3">Ya volvimos</h1>
				<p className="lead">
					Para ofrecerte una gran gama de productos y servicios con la
					calidad que nos caracteriza.
				</p>
				<CoolButton variant="primary" size="lg">
					Consulta nuestra ubicación
				</CoolButton>
			</Container>
		</Jumbotron>
	);
};

export default MainMessage;
