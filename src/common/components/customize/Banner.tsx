import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';

export interface BannerProps {
	image: StaticImageData | string;
	title: string;
	height?: string; // ejemplo: "h-[40vh]" | "h-[60vh]" | "h-auto"
	overlay?: boolean;
	className?: string;
	titleClassName?: string;
}

export const Banner: React.FC<BannerProps> = ({
	image,
	title,
	height = 'h-[40vh]',
	overlay = true,
	className,
	titleClassName = 'text-5xl',
}) => {
	return (
		<div className={cn('relative w-full overflow-hidden', height, className)}>
			{/* Imagen */}
			<Image
				src={image}
				alt={title}
				className="object-cover object-bottom w-full h-full"
			/>

			{/* Overlay opcional */}
			{overlay && <div className="absolute inset-0 bg-black/40 z-0" />}

			{/* Texto */}
			<h2
				className={cn(
					'absolute inset-0 flex items-center justify-center text-white font-black z-10',
					titleClassName
				)}
			>
				{title}
			</h2>
		</div>
	);
};

export default Banner;
