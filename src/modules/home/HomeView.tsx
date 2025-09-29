import React from 'react';

import BannerCarouselHome from './components/carouselBanner/CarouselMain';
import About from './components/about-us/About';
import { Container } from '@/common/components/customize/Container';
import Values from './components/values/Values';
import CardHome from './components/CardHome';

export const HomeView = () => {
	return (
		<>
			<BannerCarouselHome />
			<div className="max-w-[1200px] block sm:hidden">
				<CardHome />
			</div>
			<Container>
				<About />
			</Container>
			<Container size="full" className="bg-ecoandina-plomo py-16">
				<Values />
			</Container>
		</>
	);
};
