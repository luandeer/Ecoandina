import { Nav } from '../types/nav';

export const NAVIGATION_MENU: Nav[] = [
	{
		name: 'Inicio',
		href: '/',
		matchStart: false,
	},
	{
		name: 'NOSOTROS',
		href: '/nosotros',
		matchStart: false,
	},
	{
		name: 'PRODUCTOS',
		href: '/productos',
		aliases: ['/producto'],
		matchStart: true,
	},
	{
		name: 'NOTICIAS',
		href: '/noticias',
		aliases: ['/noticia'],
		matchStart: true,
	},
	{
		name: 'CONTACTO',
		href: '/contacto',
		matchStart: false,
	},
];
