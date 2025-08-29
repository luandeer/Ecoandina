import Link from 'next/link';
import React from 'react';
import logo from '@public/logo.webp';
import Image from 'next/image';
import { Mail, MapPin, Phone, Search } from 'lucide-react';
import { NavLinks } from './NavLinks';

const Header = () => {
	return (
		<header className="bg-thedooragency-negro sticky top-0 z-40 w-full overflow-hidden  border-white/30 bg-white">
			<div className="w-full  flex items-center justify-end ">
				<div className="flex items-center justify-start pl-10 bg-ecoandina-rojo max-w-[700px] py-1.5 text-white text-xs w-full clip-diagonal -mr-1">
					<div className="flex items-center gap-1">
						<Phone className="w-3 h-3" />
						<span>TELÉFONO: 123-456-7890</span>
					</div>
					<div className="flex items-center gap-1">
						<Mail className="w-3 h-3" />
						<span>CORREO: info@ecoaudina.com</span>
					</div>
					<div className="flex items-center gap-1">
						<MapPin className="w-3 h-3" />
						<span>UBICACIÓN: Ciudad, País</span>
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
					<button className="text-black hover:text-red-200 transition-colors">
						<Search className="w-5 h-5" />
					</button>
				</div>
				{/* <NavLinks /> */}
				{/* <MobileMenu /> */}
			</div>
		</header>
	);
};

export default Header;
