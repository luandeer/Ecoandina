import { Container } from '@/common/components/customize/Container';
import Image from 'next/image';
import React from 'react';
import about from '@public/products/foto.png';

const ProductView = () => {
	const products = [
		'Ecoplast 100',
		'Ecoplast 101',
		'Ecoplast 102',
		'Ecoplast 103',
		'Ecoplast SP 7',
	];

	const uses = [
		'Concretos convencionales.',
		'Concretos especiales.',
		'Para climas cálidos.',
		'Para climas fríos.',
		'Prefabricados',
	];
	return (
		<Container size="full" className="bg-ecoandina-rojo ">
			<Container className="grid grid-cols-2   py-0 ">
				<div className="p-16 bg-white my-10">
					<div className="space-y-2 mb-6">
						<h2 className="text-3xl font-bold">
							REDUCTOR DE AGUA PLASTIFICANTES
						</h2>
						<div className="w-16 h-[5px] bg-ecoandina-rojo rounded-full"></div>
					</div>
					<p className="mb-6">
						Los reductores de agua o plastificantes, son soluciones químicos que
						en combinación con el agua reaccionan con el cemento logrando una
						mejor dispersión de las partículas cementicias, envolviendo así las
						partículas de los agregados y formando enlaces cohesivos
						resistentes, que garantizan y mejoran la trabajabilidad de la mezcla
						para una mejor y rápida colocación.
					</p>
					<div className="bg-[#232323] text-white overflow-hidden shadow-lg max-w-md">
						{/* Main content */}
						<div className="grid grid-cols-2 gap-8 p-6">
							{/* Products column */}
							<div>
								<h3 className="font-semibold text-sm mb-3 text-white">
									PRODUCTOS
								</h3>
								<ul className="space-y-1">
									{products.map((product, index) => (
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
									{uses.map((use, index) => (
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
						src={about}
						alt="asdsd"
						className="w-full h-auto object-cover"
					/>
				</div>
			</Container>
		</Container>
	);
};

export default ProductView;
