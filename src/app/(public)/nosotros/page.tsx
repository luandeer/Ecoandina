import { DEFAULT_SEO_ABOUT } from '@/common/constants/seo-config';
import generateSeoMetadata from '@/lib/generateSeoMetadata';
import { AboutView } from '@/modules/about/AboutView';
import React from 'react';

export async function generateMetadata() {
	return generateSeoMetadata({
		title: DEFAULT_SEO_ABOUT.title,
		description: DEFAULT_SEO_ABOUT.description,
		keywords: DEFAULT_SEO_ABOUT.keywords,
	});
}
export default function page() {
	return <AboutView />;
}
