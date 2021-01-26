import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
	return (
		<>
			<Layout>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/nosotros" component={AboutUs} />
					<Route exact path="/servicios" component={Services} />
					<Route exact path="/contacto" component={Contact} />
				</Switch>
			</Layout>
		</>
	);
};

export default App;
