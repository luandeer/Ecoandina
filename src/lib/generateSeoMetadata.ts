import {
	DEFAULT_APPLICATION_NAME,
	DEFAULT_AUTHORS,
	DEFAULT_DESCRIPTION,
	DEFAULT_KEYWORDS,
} from '@/common/constants/seo-config';

import { Metadata } from 'next';

export type OGType =
	| 'website'
	| 'article'
	| 'book'
	| 'profile'
	| 'music.song'
	| 'music.album'
	| 'music.playlist'
	| 'music.radio_station'
	| 'video.movie'
	| 'video.episode'
	| 'video.tv_show'
	| 'video.other';

type Props = {
	title: string;
	description?: string;
	type?: OGType;
	image?: string;
	keywords?: string[];
	canonicalPath?: string;
};

export const generateSeoMetadata = ({
	title,
	description = DEFAULT_DESCRIPTION,
	type = 'website',
	keywords = DEFAULT_KEYWORDS,
	image,
	canonicalPath,
}: Props): Metadata => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
	const metadataBaseUrl = new URL(baseUrl);
	const canonicalUrl = canonicalPath ? `${baseUrl}/${canonicalPath}` : baseUrl;
	const ogImage = image || `${baseUrl}/opengraph-image.png`;

	return {
		metadataBase: metadataBaseUrl,
		title,
		description,
		keywords,
		alternates: { canonical: canonicalUrl },
		openGraph: {
			title,
			description,
			url: canonicalUrl,
			type,
			locale: 'es_PE',
			images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
		},
		applicationName: DEFAULT_APPLICATION_NAME,
		authors: DEFAULT_AUTHORS,
		creator: DEFAULT_APPLICATION_NAME,
		publisher: DEFAULT_APPLICATION_NAME,
		// themeColor: DEFAULT_THEME_COLOR,
		// colorScheme: DEFAULT_COLOR_SCHEME,
	};
};

export default generateSeoMetadata;
