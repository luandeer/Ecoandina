import { Container } from '@/common/components/customize/Container';
import { Award, Handshake, Target } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import innova from '@public/home/bannerCarousel/Innovacion.png';
import mano from '@public/home/bannerCarousel/mano.png';
import medalla from '@public/home/bannerCarousel/medalla.png';
const Values = () => {
	const valores = [
		{
			icon: innova,
			titulo: 'Innovación Técnica',
			descripcion:
				'Apostamos por la mejora continua y el uso de tecnologías avanzadas en todos nuestros productos. Nuestros aditivos, morteros y soluciones para shotcrete están formulados para responder a los más altos estándares técnicos de la industria.',
		},
		{
			icon: mano,
			titulo: 'Compromiso con la Calidad',
			descripcion:
				'La resistencia, seguridad y durabilidad de una obra comienza en los materiales. Por eso garantizamos un control riguroso en cada lote y en cada entrega, asegurando productos que superan las expectativas de nuestros clientes.',
		},
		{
			icon: medalla,
			titulo: 'Confianza Profesional',
			descripcion:
				'Somos un aliado estratégico en cada proyecto. Brindamos atención personalizada, soporte técnico especializado y entregas puntuales, porque entendemos que la confianza se construye con responsabilidad y resultados concretos.',
		},
	];
	return (
		<Container className="px-0 py-0" size="xl">
			<section className=" px-4 max-w-6xl mx-auto">
				<div className="text-center mb-24">
					<h2 className="text-3xl font-bold text-foreground mb-4">
						Nuestros valores
					</h2>
					<p className=" max-w-[956px] mx-auto leading-relaxed text-sm mb-4">
						No solo proveemos soluciones para la construcción, sino que
						aportamos a la solidez y durabilidad de cada proyecto. Nuestra
						experiencia en aditivos para concreto, morteros y shotcrete nos
						exige trabajar con precisión, responsabilidad y confianza. Estos son
						los pilares que guían cada paso de nuestro trabajo:
					</p>
					<div className="w-16 h-[5px] bg-ecoandina-rojo rounded-full mx-auto"></div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8">
					{valores.map((valor, index) => (
						<div
							key={index}
							className="text-center bg-white px-8 pb-8 rounded-[2px]"
						>
							<div className="w-20 h-20 bg-red-600 rounded-[2px] flex items-center justify-center mx-auto -mt-10 mb-6 p-2">
								<Image
									src={valor.icon}
									alt={valor.titulo}
									className="w-full h-full object-contain"
								/>{' '}
							</div>
							<h3 className=" font-bold mb-3">{valor.titulo}</h3>
							<p className=" text-sm">{valor.descripcion}</p>
						</div>
					))}
				</div>
			</section>
		</Container>
	);
};

export default Values;
