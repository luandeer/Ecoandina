// src/data/products.ts
import productImage from '@public/products/product.png';
import foto from '@public/products/foto.png';

export interface Product {
	slug: string; // para la ruta dinámica
	title: string;
	description: string;
	image: any;
	banner?: any;
	products?: string[];
	uses?: string[];
}

export const products: Product[] = [
	{
		slug: 'reductor-de-agua-plastificantes',
		title: 'Reductor de Agua Plastificantes',
		description:
			'Los reductores de agua o plastificantes, son soluciones químicas que en combinación con el agua reaccionan con el cemento logrando una mejor dispersión de las partículas cementicias...',
		image: foto,
		banner: productImage,
		products: [
			'Ecoplast 100',
			'Ecoplast 101',
			'Ecoplast 102',
			'Ecoplast 103',
			'Ecoplast SP 7',
		],
		uses: [
			'Concretos convencionales.',
			'Concretos especiales.',
			'Para climas cálidos.',
			'Para climas fríos.',
			'Prefabricados',
		],
	},
	{
		slug: 'otro-producto',
		title: 'Otro Producto',
		description: 'Descripción de ejemplo para otro producto...',
		image: productImage,
		products: ['Producto X', 'Producto Y'],
		uses: ['Uso A', 'Uso B'],
	},
];
