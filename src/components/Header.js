import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const CoolLink = styled(Link)`
	text-decoration: none;
	color: white;
`;

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" variant="dark" bg="primary">
			<Navbar.Brand>La Azucena</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link as="li">
						<CoolLink to="/">Inicio</CoolLink>
					</Nav.Link>
					<Nav.Link>
						<CoolLink to="/nosotros">Nosotros</CoolLink>
					</Nav.Link>
					<Nav.Link as="li">
						<CoolLink to="/servicios">Servicios</CoolLink>
					</Nav.Link>
					<Nav.Link as="li">
						<CoolLink to="/contacto">Contacto</CoolLink>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
