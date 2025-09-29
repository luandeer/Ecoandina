import Link from 'next/link';
import React from 'react';
import logo from '@public/logo.webp';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MenuMovil';

const Header = () => {
	return (
		<header className="bg-thedooragency-negro sticky top-0 z-40 w-full overflow-hidden  border-white/30 bg-white">
			<div className="w-full  flex  items-center justify-end ">
				<div className="flex flex-wrap lg:flex-row items-center max-lg:px-2 justify-center lg:justify-start gap-2.5 lg:gap-4 lg:pl-10 bg-ecoandina-rojo max-w-full  lg:max-w-[750px] py-1.5 text-white text-xs w-full clip-diagonal lg:-mr-1">
					<div className="flex items-center gap-1.5">
						<Phone className="w-3 h-3" />
						{/* <span className="md:block hidden">TELÉFONO: </span> */}
						<span>+51 972 161 054</span>
					</div>
					<div className="flex items-center gap-1.5">
						<Mail className="w-3 h-3" />
						{/* <span className="md:block hidden">CORREO:</span> */}
						<span>servicioalcliente@ecoandina-peru.com</span>
					</div>
					<div className="hidden md:flex items-center gap-1.5">
						<MapPin className="w-3 h-3" />
						{/* <span className="md:block hidden">UBICACIÓN:</span> */}
						<span>Cajamarquilla M. E LT.1 Lurigancho - Chosica </span>
					</div>
				</div>
			</div>
			<div className=" mx-auto flex  w-full h-full max-w-[1440px] items-center justify-between px-6 2xl:px-0 py-2">
				<Link href="/" className="max-w-[100px] pb-2">
					<Image
						src={logo}
						alt="logo de trendacademy"
						className="object-cover will-change-transform"
						priority
					/>
				</Link>

				<div className=" h-full flex items-center gap-6">
					<NavLinks />

					{/* Search Icon */}
					<MobileMenu />
				</div>
				{/* <NavLinks /> */}
				{/* <MobileMenu /> */}
			</div>
		</header>
	);
};

export default Header;
