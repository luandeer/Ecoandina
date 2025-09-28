'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@shadcnui/sheet';
import { Button } from '@shadcnui/button';
import logoTrendBlack from '@public/logo.webp';
import Image from 'next/image';
import { socialLinks } from '@/modules/contact/data/redes';

export function MobileMenu() {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="bg-transparent hover:bg-transparent md:hidden"
				>
					<Menu className="size-8 text-black" />
					<span className="sr-only">Abrir menú</span>
				</Button>
			</SheetTrigger>
			<SheetContent className="bg-black w-screen border-none p-0 sm:w-[350px]">
				<div className="flex h-full flex-col items-center justify-center text-white">
					<SheetHeader className="hidden border-b p-6 text-left">
						<div className="flex items-center justify-between">
							<SheetTitle className="text-xl font-bold">
								<Image
									src={logoTrendBlack}
									alt="logo de trendacademy"
									className="h-auto w-[80px] object-contain will-change-transform"
								/>
							</SheetTitle>
							<SheetDescription className="hidden"></SheetDescription>
						</div>
					</SheetHeader>

					<nav className="flex flex-col gap-16">
						<ul className="flex flex-col items-center justify-center gap-4">
							<li>
								<Link
									href="/"
									className="flex items-center gap-3 rounded-lg p-3 uppercase transition-colors"
									onClick={() => setOpen(false)}
								>
									<span className="text-sm font-medium">Inicio</span>
								</Link>
							</li>

							<li>
								<Link
									href="/nosotros"
									className="flex items-center gap-3 rounded-lg p-3 uppercase transition-colors"
									onClick={() => setOpen(false)}
								>
									<span className="text-sm font-medium">Sobre Nosotros</span>
								</Link>
							</li>
							<li>
								<Link
									href="/productos"
									className="flex items-center gap-3 rounded-lg p-3 uppercase transition-colors"
									onClick={() => setOpen(false)}
								>
									<span className="text-sm font-medium">Productos</span>
								</Link>
							</li>
							<li>
								<Link
									href="/noticias"
									className="flex items-center gap-3 rounded-lg p-3 uppercase transition-colors"
									onClick={() => setOpen(false)}
								>
									<span className="text-sm font-medium">Noticias</span>
								</Link>
							</li>
							<li>
								<Link
									href="/contacto"
									className="flex items-center gap-3 rounded-lg p-3 uppercase transition-colors"
									onClick={() => setOpen(false)}
								>
									<span className="text-sm font-medium">Contáctanos</span>
								</Link>
							</li>
							<a
								href="https://wa.me/51977435348?text=Hola%2C%20estoy%20interesado%20en%20conocer%20más%20sobre%20los%20servicios%20de%20su%20agencia."
								className="w-full rounded-full border border-gray-500 bg-transparent px-4 py-2.5 text-sm uppercase"
								onClick={() => setOpen(false)}
								target="_blank"
							>
								Hablemos por WhatsApp
							</a>
						</ul>
						<div className="flex flex-col items-center justify-center gap-4 border-t border-gray-500 pt-4">
							<h3 className="mx-auto max-w-[150px] text-center text-xs font-light text-gray-200">
								Síguenos en nuestras Redes Sociales:
							</h3>
							<div className="flex items-center gap-3">
								{socialLinks.map((social, index) => (
									<a
										key={index}
										href={social.url}
										className="flex items-center"
										onClick={() => setOpen(false)}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											src={social.icon}
											alt={social.name}
											className="h-[20px] w-[20px] object-contain transition-opacity hover:opacity-80"
										/>
									</a>
								))}
							</div>
						</div>
					</nav>
				</div>
			</SheetContent>
		</Sheet>
	);
}
