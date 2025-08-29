import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

type PreviewProductProps = {
	image: StaticImageData | string; // Puede ser import local o URL remota
	title: string;
	href: string;
};

const PreviewProduct: React.FC<PreviewProductProps> = ({
	image,
	title,
	href,
}) => {
	return (
		<div className="w-full max-w-[340px] h-auto lg:h-[420px] mx-auto relative group overflow-hidden  shadow-md">
			{/* Imagen con zoom al hover */}
			<Image
				src={image}
				alt={title}
				className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>

			{/* Overlay con fade in */}
			<Link
				href={href}
				className="absolute inset-0 z-10 h-[calc(100%-95px)] flex items-center justify-center 
                   bg-black/0 group-hover:bg-black/40 text-white font-semibold 
                   opacity-0 group-hover:opacity-100 transition-all duration-500"
			>
				Ver productos
			</Link>

			{/* Footer con el título */}
			<div
				className="max-h-[95px] h-full px-4 w-full absolute bottom-0 font-bold 
                      bg-ecoandina-rojo text-white text-center flex items-center justify-center
                      "
			>
				{title}
			</div>
		</div>
	);
};

export default PreviewProduct;
