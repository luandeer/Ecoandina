import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CardHome = () => {
	return (
		<div className="bg-ecoandina-rojo max-w-[640px]  w-full py-6 px-8">
			<h3 className="text-xl xl:text-2xl font-black text-white mb-2">
				Más de 100 proyectos desarrollados
			</h3>
			<p className="text-sm text-white mb-6">
				Contamos con más de 100 proyectos desarrollados en el último año con un
				alto grado de satisfacción en nuestros clientes
			</p>
			<div className="w-full flex items-center justify-end ">
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
	);
};

export default CardHome;
