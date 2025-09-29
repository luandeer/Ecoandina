import { DEFAULT_SEO_HOME } from '@/common/constants/seo-config';
import generateSeoMetadata from '@/lib/generateSeoMetadata';
import { HomeView } from '@/modules/home/HomeView';

export async function generateMetadata() {
	return generateSeoMetadata({
		title: DEFAULT_SEO_HOME.title,
		description: DEFAULT_SEO_HOME.description,
		// image: DEFAULT_SEO_HOME.image,
		keywords: DEFAULT_SEO_HOME.keywords,
	});
}
export default function Home() {
	return <HomeView />;
}
