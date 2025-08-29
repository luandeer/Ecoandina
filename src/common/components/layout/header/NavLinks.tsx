'use client';

import { ActiveLink } from './ActiveLink';
import { useMenuList } from './useMenuList';

export const NavLinks = () => {
	const menuList = useMenuList();

	return (
		<div className="hidden gap-10 md:flex">
			{menuList.map((link) => (
				<ActiveLink key={link.name} {...link} />
			))}
		</div>
	);
};
