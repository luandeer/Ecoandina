'use client';
import React, { useRef } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
// import { useDotButton } from './DotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './Arrows';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';
// import HomePublicStyles from '../../styles/homePublic.module.css';
// import Fade from 'embla-carousel-fade';

import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { useAutoplayProgress } from './useAutoplayProgress';
import Image from 'next/image';
import fondo from '@public/home/bannerCarousel/fondo.png';
import fondo2 from '@public/home/bannerCarousel/fondo.png';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type PropType = {
	options?: EmblaOptionsType;
};

const BannerCarouselHome: React.FC<PropType> = (props) => {
	const { options } = props;
	const progressNode = useRef<HTMLDivElement>(null!); // Usamos "non-null assertion"

	const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });
	// const fade = Fade();
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ ...options, loop: true, containScroll: false },
		[autoplay]
	);

	const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

	// Pasamos handleSlideChange al hook para que se ejecute tras scrollPrev/scrollNext
	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		<section className="relative h-[calc(100dvh-110.67px)] w-full overflow-hidden">
			<div
				className="bg-thedooragency-negro relative h-full w-full"
				ref={emblaRef}
			>
				<div className="flex h-full w-full">
					<div className="flex h-full shrink-0 basis-full items-center justify-center">
						<div className="h-full w-full">
							<Image
								src={fondo}
								alt="fondo de combat"
								className="object-cover w-full h-full"
								fill
								placeholder="blur"
								blurDataURL="data:image/webp;base64,UklGRsgAAABXRUJQVlA4ILwAAAAwBACdASogABAAPpE4mEeloyKhMAgAsBIJYwC7AYvOsq/a93k0ny0uZdAA/v8tERUk2vJ/+sL99U1GZtfeWXGN7InPpjbYqq52PEG3yoH+fs5nctcGbBqa7866+VmvxGmd70a/EalJoUtqnCAEse1xrylc6rDvOweFJoSWW/JT9l7O2x+s8Z1oM38mzWEVgLb+chAmMlr3I8TwhILVBOkMQDMrhom+2ZRkqJ2gO8yrDSbS257wsrGYQ2OAAA=="
							/>
						</div>
					</div>
					<div className="flex h-full shrink-0 basis-full items-center justify-center">
						<div className="relative z-10 h-full w-full">
							<Image
								src={fondo2}
								alt="fondo de combat"
								className="object-cover w-full h-full"
								fill
								placeholder="blur"
								blurDataURL="data:image/webp;base64,UklGRtwAAABXRUJQVlA4INAAAAAQBQCdASogABAAPpE6l0eloyIhMAgAsBIJZwC/P2pVWA6xuZh8u7MQyQLMp7nljJgAAP7/iGTfv4s+HNY3hKrP3aaP+G18UNzYvDvd/s707C7NuNJ7ax52bamqI79k9Jj0NoIdlrn/yiqFyUPCqM2VfJJf0QbL/xyrb5kdCSdbuyi5xOqWHYoGRgF/oQ3r7qOWQd8dq8esUuYZaj/g0mo3LSmD9e9IKwLYenXkvILoVJiwDipILuoDM/lKz1FLL3NUhoDc93xfh2f/FHz0MAAA"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="inset-0  w-full h-full absolute max-w-[1440px] px-6 xl:px-0 mx-auto">
				<div className="absolute top-[20%] max-w-[450px] space-y-2.5">
					<h3 className="text-white text-lg font-bold  text-center min-[500px]:text-start">
						CONSTRUYAMOS JUNTOS
					</h3>
					<h4 className="text-white font-black text-4xl text-balance xl:text-5xl text-center min-[500px]:text-start">
						Especialistas en Aditivos
					</h4>
					<p className="text-white/80  text-center min-[500px]:text-start w-full">
						para concreto, Morteros y Shotcrete.
					</p>
					<Link
						href="/productos"
						className="w-fit flex items-center text-white gap-2 bg-ecoandina-rojo px-8 py-1.5 rounded-[2px] border border-white/60  text-sm uppercase mt-4 max-[499px]:mx-auto"
					>
						Ver productos
					</Link>
				</div>

				<div className="bg-ecoandina-rojo max-w-[640px] min-[500px]:max-w-[400px] w-full absolute bottom-0 right-0 py-6 px-8">
					<h3 className="text-xl xl:text-2xl font-black text-white mb-2">
						Más de 100 proyectos desarrollados
					</h3>
					<p className="text-sm text-white mb-6">
						Contamos con más de 100 proyectos desarrollados en el último año con
						un alto grado de satisfacción en nuestros clientes
					</p>
					<div className="w-full flex items-center justify-end pb-10">
						<Link
							href=""
							className="w-fit flex items-center text-white gap-2 hover:underline text-sm hover:underline-offset-5"
						>
							Ver proyectos{' '}
							<span className="px-2 py-0.5 bg-white">
								<ArrowRight className="size-4 text-ecoandina-rojo" />
							</span>
						</Link>
					</div>
				</div>
			</div>
			<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
			<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
			<div className="fade-in-unique absolute bottom-6 left-1/2 -translate-x-1/2">
				<div
					className={cn('embla__progress', {
						'embla__progress--hidden': !showAutoplayProgress,
					})}
				>
					<div className="embla__progress__bar" ref={progressNode} />
				</div>
			</div>

			{/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn('embla__dot', {
                'embla__dot--selected': index === selectedIndex,
              })}
            />
          ))}
        </div>
      </div> */}
		</section>
	);
};

export default BannerCarouselHome;
