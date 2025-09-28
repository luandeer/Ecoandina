import Image from 'next/image';
import Link from 'next/link';
import logo from '@public/logo.webp';
import { socialLinks } from '@/modules/contact/data/redes';
import mail from '@public/iconos/mailIcon.webp';
import phone from '@public/iconos/callIco.webp';
import ubicacion from '@public/iconos/ubiIcon.webp';
export default function Footer() {
	return (
		<footer className="bg-black text-white pt-16 px-6 2xl:px-0">
			<div className="max-w-[1440px] mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-[1.5fr_0.5fr] lg:grid-cols-2 gap-8">
					{/* Primera columna */}
					<div className="flex items-start gap-10 lg:gap-20 justify-center   text-sm">
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
							<li>
								<Link
									href="/noticias"
									className="text-gray-300 hover:text-white transition-colors md:hidden block"
								>
									Noticias
								</Link>
							</li>
							<li>
								<Link
									href="/contacto"
									className="text-gray-300 hover:text-white transition-colors md:hidden block"
								>
									Contacto
								</Link>
							</li>
						</ul>

						{/* Segunda columna */}
						<ul className="space-y-3 text-center md:text-start hidden md:block">
							<li>
								<Link
									href="/noticias"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Noticias
								</Link>
							</li>
							<li>
								<Link
									href="/contacto"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Contacto
								</Link>
							</li>
						</ul>

						{/* Tercera columna */}
						<ul className="space-y-3 hidden md:block">
							<li>
								<div className="flex items-center gap-2.5 text-gray-300 ">
									<Image
										src={phone}
										alt="celular"
										className="w-3.5 object-cover"
									/>
									<span className="text-sm">+51 972 161 054</span>
								</div>
							</li>
							<li>
								<div className="flex items-center gap-2.5 text-gray-300">
									<Image
										src={mail}
										alt="celular"
										className="w-3.5 object-cover"
									/>
									<span className="text-sm">
										servicioalcliente@ecoandina-peru.com
									</span>
								</div>
							</li>
							<li>
								<div className="flex items-center gap-2.5 text-gray-300">
									<Image
										src={ubicacion}
										alt="celular"
										className="w-3.5 object-cover"
									/>
									<span className="text-sm">
										Av. Cajamarquilla Mz. E Lt 1 - C; Lt. Pre Urbana Nieveria
										Lurigancho - Chosica - Lima - Perú
									</span>
								</div>
							</li>
						</ul>
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
