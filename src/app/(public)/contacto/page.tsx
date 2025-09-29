import { DEFAULT_SEO_CONTACT } from '@/common/constants/seo-config';
import generateSeoMetadata from '@/lib/generateSeoMetadata';
import { ContactView } from '@/modules/contact/ContactView';
import React from 'react';

export async function generateMetadata() {
	return generateSeoMetadata({
		title: DEFAULT_SEO_CONTACT.title,
		description: DEFAULT_SEO_CONTACT.description,
		keywords: DEFAULT_SEO_CONTACT.keywords,
	});
}

export default function page() {
	return <ContactView />;
}
