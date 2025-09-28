import Image from 'next/image';
import React from 'react';
import blog from '@public/notices/blog.png';
import { Container } from '@/common/components/customize/Container';

const NoticeView = () => {
	return (
		<>
			<Container size="full" className="sticky top-[110.67px] py-0 px-0">
				<div className="w-full h-[10px] bg-red-600"></div>
			</Container>
			<Container>
				<div>
					{/* Date */}
					<p className="text-red-600 font-bold mb-2">Lima, julio de 2025</p>

					{/* Title */}
					<h2 className="text-xl md:text-3xl  font-bold text-gray-900 mb-4 leading-tight">
						Econandina impulsa la innovación en aditivos para concreto con nueva
						fórmula ecoeficiente
					</h2>
					<div className="w-16 h-[5px] bg-ecoandina-rojo rounded-full mb-4"></div>

					{/* Description */}
					<p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed ">
						Econandina, empresa peruana especializada en la fabricación y
						comercialización de aditivos para concreto y mortero, ha anunciado
						el desarrollo de una nueva línea de aditivos con enfoque
						ecoeficiente, diseñada para reducir la huella de carbono en obras de
						infraestructura. El nuevo producto, denominado ECO-FIX 400, permite
						reducir el consumo de agua en la mezcla y mejorar la resistencia
						temprana del concreto, lo que se traduce en una mayor productividad
						en obra y una menor emisión de CO₂ en el proceso de curado.
					</p>
					<p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed ">
						Econandina, empresa peruana especializada en la fabricación y
						comercialización de aditivos para concreto y mortero, ha anunciado
						el desarrollo de una nueva línea de aditivos con enfoque
						ecoeficiente, diseñada para reducir la huella de carbono en obras de
						infraestructura. El nuevo producto, denominado ECO-FIX 400, permite
						reducir el consumo de agua en la mezcla y mejorar la resistencia
						temprana del concreto, lo que se traduce en una mayor productividad
						en obra y una menor emisión de CO₂ en el proceso de curado.
					</p>
					<Image
						src={blog}
						alt=""
						className="w-full h-48 md:h-full object-cover"
					/>
				</div>
			</Container>
		</>
	);
};

export default NoticeView;
