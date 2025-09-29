import { DEFAULT_SEO_NOTICIES } from '@/common/constants/seo-config';
import generateSeoMetadata from '@/lib/generateSeoMetadata';
import { NoticesView } from '@/modules/notices/NoticesView';
import React from 'react';

export async function generateMetadata() {
	return generateSeoMetadata({
		title: DEFAULT_SEO_NOTICIES.title,
		description: DEFAULT_SEO_NOTICIES.description,
		keywords: DEFAULT_SEO_NOTICIES.keywords,
	});
}
export default function page() {
	return <NoticesView />;
}
