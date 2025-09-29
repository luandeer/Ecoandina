import { notFound } from 'next/navigation';

// import type { Metadata } from 'next';
// import NoticeView from '@/modules/notices/NoticeView';
import ProductView from '@/modules/products/ProductView';
import { products } from '@/modules/products/data/products';
import { Metadata } from 'next';
import generateSeoMetadata from '@/lib/generateSeoMetadata';

type PageProps = {
	params: Promise<{ slug: string }>; // params ahora es una promesa
};

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const product = products.find((p) => p.slug === slug);

	if (!product) {
		return generateSeoMetadata({
			title: 'Producto no encontrado | Ecoandina',
			description: 'Este producto no está disponible en el catálogo.',
			canonicalPath: 'productos',
		});
	}

	return generateSeoMetadata({
		title: `${product.title}`,
		description: product.description,
		type: 'article',
		image: product.image.src, // og:image
		canonicalPath: `producto/${slug}`,
	});
}
export default async function page({ params }: PageProps) {
	// await new Promise((resolve) => setTimeout(resolve, 2000));

	const { slug } = await params;
	const product = products.find((p) => p.slug === slug);

	if (!product) {
		notFound(); // 404 si no existe el producto
	}

	return <ProductView product={product} />;
}
