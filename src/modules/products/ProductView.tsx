import { Container } from '@/common/components/customize/Container';
import Image from 'next/image';
import React from 'react';
import { Product } from './data/products';

const ProductView = ({ product }: { product: Product }) => {
	return (
		<Container
			size="full"
			className="bg-ecoandina-rojo max-md:pb-8 max-md:pt-0 max-md:px-0"
		>
			<Container className="grid grid-cols-1 xl:grid-cols-2   py-0 ">
				<div className="p-8 md:p-16 bg-white my-10">
					<div className="space-y-2 mb-6">
						<h2 className="text-xl md:text-3xl font-bold">{product.title}</h2>
						<div className="w-16 h-[5px] bg-ecoandina-rojo rounded-full"></div>
					</div>
					<p className="mb-6">{product.description}</p>
					<div className="bg-[#232323] text-white overflow-hidden shadow-lg max-w-[500px]">
						{/* Main content */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
							{/* Products column */}
							<div>
								<h3 className="font-semibold text-sm mb-3 text-white">
									PRODUCTOS
								</h3>
								<ul className="space-y-1">
									{product?.products?.map((product, index) => (
										<li key={index} className="text-sm text-white">
											{product}
										</li>
									))}
								</ul>
							</div>

							{/* Uses column */}
							<div>
								<h3 className="font-semibold text-sm mb-3 text-white">USOS</h3>
								<ul className="space-y-1">
									{product.uses?.map((use, index) => (
										<li key={index} className="text-sm text-white">
											• {use}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full h-full p-2.5 bg-white shadow-2xl">
					<Image
						src={product.image}
						alt="asdsd"
						className="w-full h-auto object-cover"
					/>
				</div>
			</Container>
		</Container>
	);
};

export default ProductView;
