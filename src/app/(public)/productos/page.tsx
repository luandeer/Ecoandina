import { DEFAULT_SEO_PRODUCTS } from '@/common/constants/seo-config';
import generateSeoMetadata from '@/lib/generateSeoMetadata';
import ProductsView from '@/modules/products/ProductsView';
import React from 'react';

export async function generateMetadata() {
	return generateSeoMetadata({
		title: DEFAULT_SEO_PRODUCTS.title,
		description: DEFAULT_SEO_PRODUCTS.description,
		keywords: DEFAULT_SEO_PRODUCTS.keywords,
	});
}

export default function page() {
	return <ProductsView />;
}
