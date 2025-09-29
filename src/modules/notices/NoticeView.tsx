import Image from 'next/image';
import React from 'react';
import { Container } from '@/common/components/customize/Container';
import { Notice } from './data/notices';

const NoticeView = ({ notice }: { notice: Notice }) => {
	return (
		<>
			<Container size="full" className="sticky top-[110.67px] py-0 px-0">
				<div className="w-full h-[10px] bg-red-600"></div>
			</Container>
			<Container>
				<div>
					{/* Date */}
					<p className="text-red-600 font-bold mb-2">{notice.date}</p>

					{/* Title */}
					<h2 className="text-xl md:text-3xl  font-bold text-gray-900 mb-4 leading-tight">
						{notice.title}
					</h2>
					<div className="w-16 h-[5px] bg-ecoandina-rojo rounded-full mb-4"></div>

					{/* Description */}
					{notice.content.map((paragraph, idx) => (
						<p
							key={idx}
							className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed"
						>
							{paragraph}
						</p>
					))}

					<Image
						src={notice.image}
						alt=""
						className="w-full h-48 md:h-full object-cover"
					/>
				</div>
			</Container>
		</>
	);
};

export default NoticeView;
