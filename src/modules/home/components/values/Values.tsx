import { Container } from '@/common/components/customize/Container';
import { Award, Handshake, Target } from 'lucide-react';
import React from 'react';

const Values = () => {
	const valores = [
		{
			icon: Target,
			titulo: 'Innovación Técnica',
			descripcion:
				'Apostamos por la mejora continua y la innovación constante para ofrecer en todos nuestros productos. Nuestros técnicos, marineros y diseñadores nos ayudan a realizar una selección, responsabilidad y confianza. Estos son los pilares que guían cada paso de nuestro trabajo.',
		},
		{
			icon: Award,
			titulo: 'Compromiso con la Calidad',
			descripcion:
				'La excelencia, seguridad y durabilidad son fundamentales. No nos conformamos con lo mínimo, siempre buscamos la perfección en cada detalle. Utilizamos únicamente productos que cumplen los estándares más altos de calidad.',
		},
		{
			icon: Handshake,
			titulo: 'Confianza Profesional',
			descripcion:
				'Somos una empresa orientada a la atención personalizada, soporte técnico especializado y entrega puntual. Nuestro compromiso es que la confianza se construye con responsabilidad y resultados.',
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
						No solo ofrecemos soluciones para la construcción, sino que
						aportamos a la solidez y durabilidad de cada proyecto. Nuestra
						experiencia se enfoca para construir, mantener y desarrollar una
						mejor realidad con especialidad, responsabilidad y confianza. Estos
						son los pilares que guían cada paso de nuestro trabajo.
					</p>
					<div className="w-16 h-[5px] bg-ecoandina-rojo rounded-full mx-auto"></div>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{valores.map((valor, index) => (
						<div
							key={index}
							className="text-center bg-white px-8 pb-8 rounded-[2px]"
						>
							<div className="w-20 h-20 bg-red-600 rounded-[2px] flex items-center justify-center mx-auto -mt-10 mb-6">
								<valor.icon className="w-10 h-10 text-white" />
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
