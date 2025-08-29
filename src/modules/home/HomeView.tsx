import React from 'react';

import BannerCarouselHome from './components/carouselBanner/CarouselMain';
import About from './components/about-us/About';
import { Container } from '@/common/components/customize/Container';
import Values from './components/values/Values';

export const HomeView = () => {
	return (
		<>
			<BannerCarouselHome />
			<Container>
				<About />
			</Container>
			<Container size="full" className="bg-ecoandina-plomo py-16">
				<Values />
			</Container>
		</>
	);
};
