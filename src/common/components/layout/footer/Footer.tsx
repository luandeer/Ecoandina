import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@public/logo.webp';
import { socialLinks } from '@/modules/contact/data/redes';

export default function Footer() {
	return (
		<footer className="bg-black text-white pt-16 px-6 2xl:px-0">
			<div className="max-w-[1440px] mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Primera columna */}
					<div className="flex items-start gap-10 lg:gap-20 justify-center   text-sm">
						<div className="space-y-4">
							<ul className="space-y-3 text-center md:text-start">
								<li>
									<Link
										href="/"
										className="text-gray-300 hover:text-white transition-colors"
									>
										Inicio
									</Link>
								</li>
								<li>
									<Link
										href="/nosotros"
										className="text-gray-300 hover:text-white transition-colors"
									>
										Nosotros
									</Link>
								</li>
								<li>
									<Link
										href="/productos"
										className="text-gray-300 hover:text-white transition-colors"
									>
										Productos
									</Link>
								</li>
							</ul>
						</div>

						{/* Segunda columna */}
						<div className="space-y-4 hidden md:block">
							<ul className="space-y-3">
								<li>
									<a
										href="#"
										className="text-gray-300 hover:text-white transition-colors"
									>
										Noticias
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-300 hover:text-white transition-colors"
									>
										Certificaciones
									</a>
								</li>
							</ul>
						</div>

						{/* Tercera columna */}
						<div className="space-y-4 hidden md:block">
							<ul className="space-y-3">
								<li>
									<a
										href="#"
										className="text-gray-300 hover:text-white transition-colors"
									>
										Términos y condiciones
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-300 hover:text-white transition-colors"
									>
										Políticas de privacidad
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-300 hover:text-white transition-colors"
									>
										Políticas de Cookies
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Cuarta columna - Logo y redes sociales */}
					<div className="gap-4 w-full flex flex-col items-center justify-center">
						<Link href="/" className="max-w-[100px] w-full h-min pb-2">
							<Image
								src={logo}
								alt="logo de trendacademy"
								className=" object-cover will-change-transform"
							/>
						</Link>{' '}
						<div className="flex items-center gap-3">
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.url}
									className="flex items-center"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src={social.icon}
										alt={social.name}
										className="h-[24px] w-[24px] object-contain transition-opacity hover:opacity-80"
									/>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-12 py-8 border-t border-gray-800 text-center">
					<p className="text-gray-400 text-sm">©2025 Thedooragency</p>
				</div>
			</div>
		</footer>
	);
}
