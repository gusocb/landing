import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
const MainMessage = () => {
	return (
		<Jumbotron>
			<h1>Ya volvimos</h1>
			<p>
				Para ofrecerte una gran gama de productos y servicios con la
				calidad que nos caracteriza.
			</p>
			<p>
				<Button variant="primary">Consulta nuestra ubicación</Button>
			</p>
		</Jumbotron>
	);
};

export default MainMessage;
