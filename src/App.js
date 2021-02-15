import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/nosotros" component={AboutUs} />
				<Route exact path="/servicios" component={Services} />
				<Route exact path="/contacto" component={Contact} />
			</Switch>
			<Footer />
		</>
	);
};

export default App;
