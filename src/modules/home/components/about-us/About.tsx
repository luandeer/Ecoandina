import Image from 'next/image';
import React from 'react';
import about from '@public/about/about.png';
import check from '@public/check-icon.webp';
const About = () => {
	return (
		<div className="w-full">
			<div className="flex items-start">
				<div className="space-y-8 max-w-[600px]">
					<div className="space-y-2">
						<h3 className="text-ecoandina-rojo font-bold">NUESTRA EMPRESA</h3>
						<div className="space-y-2">
							<h2 className="text-3xl font-bold">Somos Ecoandina</h2>
							<div className="w-16 h-[5px] bg-ecoandina-rojo rounded-full"></div>
						</div>
					</div>

					<p className="text-balance">
						Una empresa en constante crecimiento y nos sentimos orgullosos de
						formar parte de las empresas que contribuyen con el progreso de
						nuestro país. Nacimos para acompañar con el soporte técnico
						apropiado en el desarrollo de pequeños, medianos y grandes proyectos
						de construcción a nivel nacional y abastecer de los mejores aditivos
						elaborados en nuestro laboratorio por profesionales altamente
						capacitados y con mucha experiencia en el rubro, cuente con nosotros
						para lograr el objetivo trazado con la mejor calidad deseada.
					</p>
					<ul className="space-y-6">
						<li className="flex items-center gap-3">
							<Image src={check} alt="asdsd" className="object-cover" />{' '}
							Seguimos rigurosos procesos de mejoramiento de calidad
						</li>
						<li className="flex items-center gap-3">
							<Image src={check} alt="asdsd" className="object-cover" />
							Nuestros Productos son Testeados Por Profesionales
						</li>
						<li className="flex items-center gap-3">
							<Image src={check} alt="asdsd" className="object-cover" />
							El nivel de satisfacción de nuestros clientes es de un 100%
						</li>
					</ul>
				</div>
				<div className="relative  ml-auto mt-8">
					<Image
						src={about}
						alt="asdsd"
						className="w-full h-full object-cover pb-4 pl-4 relative z-10 -mt-8 rounded-md"
					/>
					<div className="absolute inset-0 bg-ecoandina-rojo z-0 rounded-md mr-8"></div>
				</div>
			</div>
		</div>
	);
};

export default About;
