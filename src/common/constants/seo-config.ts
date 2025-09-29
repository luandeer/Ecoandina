// lib/seoConfig.ts

// export const Pages = {
// 	HOME: 'home',
// 	CONTACT: 'contact',
// 	ABOUT: 'about',
// 	BLOG: 'blogs',
// 	PRODUCTS: 'products',
// 	TERMS: 'terms',
// 	PRIVACY: 'privacy',
// 	COMPLAINTS: 'complaints',
// 	LOGIN: 'login',
// 	REGISTER: 'register',
// } as const;

// -----------------------------------------------------------------------------------------------------------
// Configuración base SEO

export const DEFAULT_DESCRIPTION =
	'Ecoandina es una empresa en constante crecimiento, especializada en la fabricación y distribución de aditivos para concreto de alta calidad. Ofrecemos soluciones innovadoras para la construcción, con soporte técnico especializado y un firme compromiso con la sostenibilidad.';

export const DEFAULT_KEYWORDS = [
	'Ecoandina',
	'aditivos para concreto',
	'química del concreto',
	'soluciones de construcción',
	'sostenibilidad',
	'empresa de aditivos',
	'proyectos de construcción',
	'laboratorio de aditivos',
	'tecnología en concreto',
	'industria de la construcción',
];

// export const DEFAULT_THEME_COLOR = "#000000"
// export const DEFAULT_COLOR_SCHEME = "light"
export const DEFAULT_APPLICATION_NAME = 'Ecoandina';
export const DEFAULT_AUTHORS = [
	{
		name: 'Ecoandina',
		url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
	},
];

//-----------------------------------------------------------------------------------------------------------
// Fallbacks por página

export const DEFAULT_SEO_HOME = {
	title: 'Ecoandina',
	description: DEFAULT_DESCRIPTION,
	keywords: DEFAULT_KEYWORDS,
};

export const DEFAULT_SEO_CONTACT = {
	title: 'Contacto | Ecoandina',
	description:
		'¿Necesitas asesoría o una cotización? Contáctanos y nuestro equipo técnico especializado te brindará soluciones en aditivos para concreto adaptadas a tus proyectos de construcción.',
	keywords: [
		'contacto',
		'Ecoandina',
		'cotización',
		'soporte técnico',
		'aditivos para concreto',
	],
};

export const DEFAULT_SEO_ABOUT = {
	title: 'Sobre Nosotros | Ecoandina',
	description:
		'En Ecoandina nos especializamos en aditivos para concreto y soporte técnico para proyectos de construcción. Nuestro laboratorio desarrolla productos de alta calidad, respaldados por profesionales con experiencia y un compromiso con el medio ambiente.',
	keywords: [
		'acerca de',
		'Ecoandina',
		'empresa aditivos concreto',
		'soluciones de construcción',
		'sostenibilidad',
	],
};

export const DEFAULT_SEO_BLOG = {
	title: 'Blog | Ecoandina',
	description:
		'Explora artículos y consejos sobre innovación en aditivos para concreto, tendencias en la industria de la construcción y sostenibilidad en proyectos de infraestructura.',
	keywords: [
		'blog',
		'Ecoandina',
		'aditivos para concreto',
		'construcción sostenible',
		'química del concreto',
	],
};

export const DEFAULT_SEO_PRODUCTS = {
	title: 'Productos | Ecoandina',
	description:
		'Conoce nuestra línea de aditivos para concreto diseñados en nuestro laboratorio para mejorar la calidad, resistencia y durabilidad de tus proyectos de construcción.',
	keywords: [
		'productos Ecoandina',
		'aditivos para concreto',
		'tecnología en concreto',
		'soluciones constructivas',
		'empresa de aditivos',
	],
};

export const DEFAULT_SEO_TERMS = {
	title: 'Términos y Condiciones | Ecoandina',
	description:
		'Revisa los términos y condiciones de uso de la página web y servicios de Ecoandina.',
	keywords: ['términos', 'condiciones', 'uso', 'Ecoandina'],
};

export const DEFAULT_SEO_PRIVACY = {
	title: 'Política de Privacidad | Ecoandina',
	description:
		'Conoce cómo Ecoandina protege tu información personal y la forma en que utilizamos tus datos para brindarte un mejor servicio.',
	keywords: ['privacidad', 'protección de datos', 'Ecoandina'],
};

export const DEFAULT_SEO_COMPLAINTS = {
	title: 'Libro de Reclamaciones | Ecoandina',
	description:
		'Accede al Libro de Reclamaciones de Ecoandina y presenta tu reclamo o queja de manera rápida y sencilla.',
	keywords: ['libro de reclamaciones', 'reclamos', 'quejas', 'Ecoandina'],
};

export const DEFAULT_SEO_NOTICIES = {
	title: 'Noticias | Ecoandina',
	description:
		'Mantente al día con las últimas noticias e innovaciones en aditivos para concreto, construcción sostenible y tecnología aplicada al sector.',
	keywords: [
		'noticias',
		'Ecoandina',
		'aditivos para concreto',
		'construcción sostenible',
		'innovación en construcción',
	],
};
