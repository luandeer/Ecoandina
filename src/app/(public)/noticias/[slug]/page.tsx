import { DEFAULT_SEO_NOTICIES } from '@/common/constants/seo-config';
import generateSeoMetadata from '@/lib/generateSeoMetadata';
import { notices } from '@/modules/notices/data/notices';
import NoticeView from '@/modules/notices/NoticeView';
import { Metadata } from 'next';

type PageProps = {
	params: Promise<{ slug: string }>; // params ahora es una promesa
};

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const notice = notices.find((n) => n.slug === slug);

	if (!notice) {
		// SEO por defecto para noticias
		return generateSeoMetadata(DEFAULT_SEO_NOTICIES);
	}

	return generateSeoMetadata({
		title: notice.title,
		description: notice.description,
		image: notice.image.src, // og:image (usa .src de StaticImageData)
		canonicalPath: `noticias/${notice.slug}`,
		type: 'article',
	});
}

export default async function page({ params }: PageProps) {
	// await new Promise((resolve) => setTimeout(resolve, 2000));

	const { slug } = await params;
	const notice = notices.find((n) => n.slug === slug);

	if (!notice) return <p>No encontramos esta noticia.</p>;

	return (
		<div className="relative w-full h-full">
			<NoticeView notice={notice} />
		</div>
	);
}
