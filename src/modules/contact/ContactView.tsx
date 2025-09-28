import React from 'react';
import mail from '@public/iconos/mailIcon.webp';
import phone from '@public/iconos/callIco.webp';
import time from '@public/iconos/HoraIcon.webp';
import ubicacion from '@public/iconos/ubiIcon.webp';
import Image from 'next/image';
import { socialLinks } from './data/redes';
import Link from 'next/link';
import fondo from '@public/contacto/fondo (2).png';
import { ContactForm } from './components/Formulario';
import { Container } from '@/common/components/customize/Container';
export const ContactView = () => {
	return (
		<Container
			size="full"
			className="relative bg-[#05060A]  py-0 z-0 overflow-hidden max-md:px-0"
		>
			<Image
				src={fondo}
				alt="fondo"
				className="object-cover absolute inset-0 object-bottom w-full h-full"
			/>
			<h2 className=" text-4xl md:text-5xl font-black text-center text-white relative z-10 mt-16">
				Contacto
			</h2>
			<Container
				id="contacto"
				className="w-full relative z-10 max-w-[1100px] px-0"
			>
				<div className=" grid w-full  grid-cols-1 gap-16 pb-20  text-white  lg:grid-cols-2">
					<div className="max-md:px-6">
						<div className="flex flex-col gap-2 border-b border-white/30 pb-6">
							<span className="mb-1 text-sm text-gray-300">
								Estamos aquí para ayudarte.
							</span>
							<h3 className="mb-3 text-xl font-semibold text-white">
								¿Tienes dudas sobre nuestros servicios?
							</h3>
							<p className="mb-1 text-sm text-gray-300">
								Puedes escribirnos o llamarnos y te responderemos lo antes
								posible.
							</p>
						</div>
						<div className="grid grid-cols-1 gap-6 border-b border-white/30 py-8 ">
							<div className="flex items-center gap-4">
								<Image
									src={phone}
									alt="celular"
									className="w-5 object-cover lg:w-7"
								/>
								<span className="text-sm">+51 908 805 559</span>
								<span className="text-sm">+51 908 899 508</span>
							</div>
							<div className="flex items-center gap-4">
								<Image
									src={mail}
									alt="celular"
									className="w-5 object-cover lg:w-7"
								/>
								<span className="text-sm">
									servicioalcliente@ecoandina-peru.com
								</span>
							</div>

							<div className="flex items-center gap-4">
								<Image
									src={ubicacion}
									alt="celular"
									className="w-5 object-cover lg:w-7"
								/>
								<span className="text-sm">
									Av. Cajamarquilla Mz. E Lt 1 - C; Lt. Pre Urbana Nieveria
									Lurigancho - Chosica - Lima - Perú
								</span>
							</div>
						</div>

						<div className="flex flex-col gap-4 py-6">
							<h4 className="text-sm text-white">
								Síguenos en nuestras Redes Sociales:{' '}
							</h4>
							<div className="flex items-center gap-4">
								{socialLinks.map((social, index) => (
									<Link
										key={index}
										href={social.url}
										className="flex items-center"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											src={social.icon}
											alt={social.name}
											className="h-[25px] w-[25px] object-contain transition-opacity hover:opacity-80"
										/>
									</Link>
								))}
							</div>
						</div>
					</div>
					<div className="md:border border-gray-400 bg-gradient-to-t from-[#232323] to-[#030107] px-6 py-12 md:rounded-lg lg:px-10">
						<div className="mb-2">
							<h3 className=" mb-2 text-xl font-bold">Envíanos un mensaje</h3>
							<p className="text-sm ">
								Llena el formulario con tus datos y envíanos tu consulta,
								nosotros nos pondremos en contacto a la brevedad posible.
							</p>
						</div>

						<ContactForm />
					</div>
				</div>
			</Container>
		</Container>
	);
};
