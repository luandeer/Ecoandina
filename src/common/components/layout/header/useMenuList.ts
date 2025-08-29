import { NAVIGATION_MENU } from '@/common/data/navigation';
import { usePathname } from 'next/navigation';

export function useMenuList() {
	const pathname = usePathname();

	return NAVIGATION_MENU.map((item) => {
		const aliases = item.aliases ?? [];
		const pathsToCheck = [item.href, ...aliases];

		let active = false;

		if (item.matchStart) {
			active = pathsToCheck.some(
				(path) => pathname === path || pathname.startsWith(`${path}/`)
			);
		} else {
			active = pathsToCheck.some((path) => pathname === path);
		}

		return { ...item, active };
	});
}
