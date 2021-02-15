import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import styled from 'styled-components';

const Logo = styled(Image)`
	height: 110px;
	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

const Header = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" variant="light" bg="light">
				<Container>
					<Navbar.Brand>
						<Logo src={logo} alt="La Azucena Logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Item>
								<Nav.Link eventKey="1" as={Link} to="/">
									Inicio
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="2" as={Link} to="/nosotros">
									Nosotros
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									eventKey="3"
									as={Link}
									to="/servicios"
								>
									Servicios
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="4" as={Link} to="/contacto">
									Contacto
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
