import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	text-decoration: none;
	color: white;
`;

const Header = () => {
	return (
		<Styles>
			<Navbar collapseOnSelect expand="lg" variant="dark" bg="primary">
				<Navbar.Brand>La Azucena</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav className="ml-auto">
						<Nav.Link>
							<Link to="/">Inicio</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/nosotros">Nosotros</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/servicios">Servicios</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/contacto">Contacto</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Styles>
	);
};

export default Header;
