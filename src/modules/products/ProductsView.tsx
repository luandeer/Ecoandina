import Banner from '@/common/components/customize/Banner';
import { Container } from '@/common/components/customize/Container';
import React from 'react';
import foto from '@public/about/portada-about.png';
import PreviewProduct from './components/PreviewProduct';
import productImage from '@public/products/product.png';

const ProductsView = () => {
	return (
		<>
			<Container size="full" className="py-0 px-0">
				<Banner image={foto} title="Productos" overlay={false} />
			</Container>
			<Container className="py-16 ">
				<p className="max-w-[781px] mx-auto w-full text-center pb-6">
					GRUPO ECOANDINA SAC, se preocupa en contar con profesionales del mas
					alto nivel, para poder brindar soluciones técnicas a los distintas
					obras de envergadura pequeña mediana y grande; y sobre todo con el mas
					alto nivel humano de grandes valores como la empatía, para tener la
					sensibilidad con cada tipo de persona. Por que sabemos que la
					idiosincrasia es una barrera que muchas veces no permite mantener una
					comunicación fluida para el logro de objetivos.
				</p>
				<div className="w-16 h-[5px] bg-ecoandina-rojo rounded-full mx-auto"></div>
			</Container>
			<Container className="pt-0 grid grid-cols-3 gap-6 max-w-[1000px]">
				<PreviewProduct
					image={productImage}
					title="Reductor de Agua Plastificantes"
					href="/producto/reductor-de-agua-plastificantes"
				/>{' '}
				<PreviewProduct
					image={productImage}
					title="Reductor de Agua Plastificantes"
					href="/producto/reductor-de-agua-plastificantes"
				/>{' '}
				<PreviewProduct
					image={productImage}
					title="Reductor de Agua Plastificantes"
					href="/producto/reductor-de-agua-plastificantes"
				/>{' '}
				<PreviewProduct
					image={productImage}
					title="Reductor de Agua Plastificantes"
					href="/producto/reductor-de-agua-plastificantes"
				/>{' '}
				<PreviewProduct
					image={productImage}
					title="Reductor de Agua Plastificantes"
					href="/producto/reductor-de-agua-plastificantes"
				/>{' '}
				<PreviewProduct
					image={productImage}
					title="Reductor de Agua Plastificantes"
					href="/producto/reductor-de-agua-plastificantes"
				/>{' '}
			</Container>
		</>
	);
};

export default ProductsView;
