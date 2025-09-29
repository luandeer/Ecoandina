import type { StaticImageData } from 'next/image';

import blog from '@public/notices/blog.png';

export type Notice = {
	slug: string;
	title: string;
	description: string; // para listado
	date: string;
	image: StaticImageData;
	alt: string;
	content: string[]; // párrafos para el detalle
};

export const notices: Notice[] = [
	{
		slug: 'ecoandina-innovacion',
		title:
			'Ecoandina impulsa la innovación en aditivos para concreto con nueva fórmula ecoeficiente',
		description:
			'Ecoandina presenta ECO-FIX 400, un aditivo que reduce la huella de carbono en proyectos de construcción.',
		date: 'Lima, julio de 2025',
		image: blog,
		alt: 'Camión mezclador de concreto en sitio de construcción',
		content: [
			'Ecoandina, empresa peruana especializada en la fabricación y comercialización de aditivos para concreto y mortero, ha anunciado el desarrollo de una nueva línea de aditivos con enfoque ecoeficiente, diseñada para reducir la huella de carbono en obras de infraestructura. El nuevo producto, denominado ECO-FIX 400, permite reducir el consumo de agua en la mezcla y mejorar la resistencia temprana del concreto, lo que se traduce en una mayor productividad en obra y una menor emisión de CO₂ en el proceso de curado.',
			'Gracias a este avance, Ecoandina reafirma su compromiso con el desarrollo sostenible y la innovación en la industria de la construcción, brindando soluciones que no solo mejoran el rendimiento técnico del concreto, sino que también contribuyen a mitigar el impacto ambiental de los proyectos.',
		],
	},
];
