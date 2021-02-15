import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const MyFooter = styled.footer`
	background: #0e859d;
`;

const Footer = () => {
	return (
		<MyFooter className="py-5">
			<Container>
				<p className="m-0 text-center text-white">
					&copy; Todos los derechos reservados. La Azucena 2021.
				</p>
			</Container>
		</MyFooter>
	);
};

export default Footer;
