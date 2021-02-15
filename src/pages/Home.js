import React from 'react';
import Slides from '../components/Carousel';
import MainMessage from '../components/MainMessage';
import ServicesBanner from '../components/ServicesBanner';

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
