import NoticeView from '@/modules/notices/NoticeView';

type PageProps = {
	params: Promise<{ slug: string }>; // params ahora es una promesa
};

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const { slug } = await params;

//   // Filtra proyectos por slug

//   // Metadata básica
//   const title = `Trabajos de ${slug.replace('-', ' ')}`;
//   const description =
//     filteredProjects.length > 0
//       ? `Explora ${filteredProjects.length} proyectos en la categoría ${slug.replace('-', ' ')}.`
//       : `Actualmente no hay proyectos en la categoría ${slug.replace('-', ' ')}.`;

//   return {
//     metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
//     title,
//     description,
//   };
// }

export default async function page({ params }: PageProps) {
	// await new Promise((resolve) => setTimeout(resolve, 2000));

	const { slug } = await params;
	console.log(slug);
	// if (!VALID_SLUGS.includes(slug)) {
	//   notFound(); // 404 si no existe la categoría
	// }

	return (
		<div className="relative w-full h-full">
			<NoticeView />
		</div>
	);
}
