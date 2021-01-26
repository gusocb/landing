import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.jpeg';
import banner3 from '../assets/banner3.jpeg';

const Slides = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={banner1}
					alt="first banner"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={banner2}
					alt="second banner"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={banner3}
					alt="third banner"
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slides;
