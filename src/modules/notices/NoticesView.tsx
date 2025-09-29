import Banner from '@/common/components/customize/Banner';
import { Container } from '@/common/components/customize/Container';
import React from 'react';
import foto from '@public/about/portada-about.png';
import NoticeCard from './components/PreviewNotice';
import { notices } from './data/notices';
export const NoticesView = () => {
	return (
		<>
			<Container size="full" className="py-0 px-0">
				<Banner image={foto} title="Noticias" overlay={false} />
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
			<Container className="pt-4 ">
				<div className="space-y-10">
					{notices.map((notice) => (
						<NoticeCard
							key={notice.slug}
							image={notice.image}
							alt={notice.alt}
							date={notice.date}
							title={notice.title}
							description={notice.description}
							ctaLabel="LEER COMPLETO"
							href={`/noticias/${notice.slug}`}
						/>
					))}
				</div>
			</Container>
		</>
	);
};
