import React from 'react';
import Slides from './Carousel';
import MainMessage from './MainMessage';
import ServicesBanner from './ServicesBanner';

const Home = () => {
	return (
		<>
			<Slides />
			<MainMessage />
			<ServicesBanner />
		</>
	);
};

export default Home;
