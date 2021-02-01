import React from 'react';
import Slides from './Carousel';
import Footer from './Footer';
import MainMessage from './MainMessage';
import ServicesBanner from './ServicesBanner';

const Home = () => {
	return (
		<>
			<Slides />
			<MainMessage />
			<ServicesBanner />
			<Footer />
		</>
	);
};

export default Home;
