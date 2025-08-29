import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@public/logo.webp';

export default function Footer() {
	return (
		<footer className="bg-black text-white pt-16 px-6 2xl:px-0">
			<div className="max-w-[1440px] mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Primera columna */}
					<div className="flex items-start gap-20  text-sm">
						<div className="space-y-4">
							<ul className="space-y-3">
								<li>
									<a
										href="#"
										className="text-gray-300 hover:text-white transition-colors"
									>
										Inicio
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-300 hover:text-white transition-colors"
									>
										Nosotros
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-gray-300 hover:text-white transition-colors"
									>
										Productos
									</a>
								</li>
							</ul>
						</div>

						{/* Segunda columna */}
						<div className="space-y-4">
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
						<div className="space-y-4">
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
					<div className="gap-2 w-full flex flex-col items-center justify-center">
						<Link href="/" className="max-w-[100px] w-full h-min pb-2">
							<Image
								src={logo}
								alt="logo de trendacademy"
								className=" object-cover will-change-transform"
							/>
						</Link>{' '}
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-gray-300 hover:text-white transition-colors"
							>
								<Instagram size={20} />
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-white transition-colors"
							>
								<Facebook size={20} />
							</a>
							<a
								href="#"
								className="text-gray-300 hover:text-white transition-colors"
							>
								<Twitter size={20} />
							</a>
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
