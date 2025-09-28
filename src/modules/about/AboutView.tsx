import Banner from '@/common/components/customize/Banner';
import { Container } from '@/common/components/customize/Container';
import React from 'react';
import foto from '@public/about/portada-about.png';
import Image from 'next/image';
import n2 from '@public/about/n2.webp';
import n1 from '@public/about/n1.webp';

import eyes from '@public/about/eyes-about.png';
import arrow from '@public/about/arrow-icon-about.png';
export const AboutView = () => {
	return (
		<>
			<Container size="full" className="py-0 px-0">
				<Banner image={foto} title="Nosotros" overlay={false} />
			</Container>
			<Container className="py-16 ">
				<p className="max-w-[781px] mx-auto w-full text-center pb-6">
					Somos ECOANDINA, una empresa en constante crecimiento y nos sentimos
					orgullosos de formar parte de las empresas que contribuyen con el
					progreso de nuestro país. Nacimos para acompañar con el soporte
					técnico apropiado en el desarrollo de pequeños, medianos y grandes
					proyectos de construcción a nivel nacional y abastecer de los mejores
					aditivos elaborados en nuestro laboratorio por profesionales altamente
					capacitados y con mucha experiencia en el rubro, cuente con nosotros
					para lograr el objetivo trazado con la mejor calidad deseada.
				</p>
				<div className="w-16 h-[5px] bg-ecoandina-rojo rounded-full mx-auto"></div>
			</Container>
			<Container className="pt-4 space-y-20">
				<div className="w-full max-w-[1200px] mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10  items-center">
						<div className="space-y-8 max-w-[600px]">
							<div className="space-y-6">
								<Image
									src={arrow}
									alt="asdsd"
									className="size-16 object-cover"
								/>

								<div className="space-y-2">
									<h2 className="text-3xl font-bold">Misión</h2>
									<div className="w-16 h-[5px] bg-ecoandina-rojo rounded-full"></div>
								</div>
							</div>

							<p className="text-balance">
								Ofrecer soluciones a través de la química el concreto a nuestros
								clientes con la mejor tecnología, calidad, construyendo
								relaciones de largo plazo y a la vez estar a la vanguardia del
								cuidado del medio ambiente.
							</p>
						</div>
						<div className="relative  ml-auto mt-8">
							<Image
								src={n1}
								alt="asdsd"
								className="w-full h-full object-cover pb-4 pl-4 relative z-10 -mt-8 rounded-md"
							/>
							<div className="absolute inset-0 bg-ecoandina-rojo z-0 rounded-md mr-8"></div>
						</div>
					</div>
				</div>
				<div className="w-full max-w-[1200px] mx-auto ">
					<div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
						<div className="relative  mr-auto mt-8 order-2 md:order-1">
							<Image
								src={n2}
								alt="asdsd"
								className="w-full h-full object-cover pb-4 pl-4 relative z-10 -mt-8 rounded-md "
							/>
							<div className="absolute inset-0 bg-ecoandina-rojo z-0 rounded-md mr-8"></div>
						</div>
						<div className="space-y-8 max-w-[600px] order-1 md:order-2">
							<div className="space-y-6">
								<Image
									src={eyes}
									alt="asdsd"
									className="size-16 object-cover"
								/>

								<div className="space-y-2">
									<h2 className="text-3xl font-bold">Misión</h2>
									<div className="w-16 h-[5px] bg-ecoandina-rojo rounded-full"></div>
								</div>
							</div>

							<p className="text-balance">
								Ofrecer soluciones a través de la química el concreto a nuestros
								clientes con la mejor tecnología, calidad, construyendo
								relaciones de largo plazo y a la vez estar a la vanguardia del
								cuidado del medio ambiente.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};
