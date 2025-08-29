import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
	({ className, size = 'xl', ...props }, ref) => {
		const sizes = {
			sm: 'max-w-screen-sm',
			md: 'max-w-screen-md',
			lg: 'max-w-screen-lg',
			xl: 'max-w-[1440px]',
			'2xl': 'max-w-screen-2xl',
			full: 'max-w-screen',
		};

		return (
			<div
				ref={ref}
				className={cn(
					'w-full mx-auto px-6 2xl:px-0 py-20',
					sizes[size],
					className
				)}
				{...props}
			/>
		);
	}
);

Container.displayName = 'Container';
