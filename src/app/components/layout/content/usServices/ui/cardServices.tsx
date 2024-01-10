import React from 'react';
import Link from 'next/link';

function CardServices({
	title,
	text,
	url,
}: {
	title: string;
	text: string;
	url: string;
}) {
	return (
		<div
			className={
				'ultraXL:pb-7 flex h-[291px] flex-col justify-between gap-5 rounded-[20px] bg-color-blue-accent px-4 pb-6 pt-5 md:px-4 md:pb-6 md:pt-5 ultraXl:px-8 ultraXl:pt-10'
			}
		>
			<div className={'space-y-[14px] md:space-y-7'}>
				<h3
					className={
						'leading-tight tracking-tight text-white sm:text-xl md:text-base md:tracking-[1%] lg:text-lg ultraXl:text-2xl'
					}
				>
					{title}
				</h3>
				<p
					className={
						'text-sm leading-[1.3rem] tracking-tight text-color-chip/95 sm:text-base md:tracking-[2%] lg:text-lg ultraXl:text-xl ultraXl:leading-loose ultraXl:tracking-tight'
					}
				>
					{text}
				</p>
			</div>
			<div>
				<Link href={`/${url}`}>
					<div
						className={
							'float-right flex max-w-[225px] flex-row justify-center gap-1.5 rounded-[16px] bg-white px-6 py-2.5 text-lg leading-normal text-color-blue-accent transition-colors duration-200 hover:bg-color-sideBarButton-hover md:w-full md:max-w-full lg:max-w-[225px] lg:py-4  xl:gap-3'
						}
					>
						Открыть раздел
						<svg
							width={'24'}
							height={'24'}
							className={'h-5 w-5 xl:h-6 xl:w-6'}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75"
								stroke="#2388FF"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default CardServices;
