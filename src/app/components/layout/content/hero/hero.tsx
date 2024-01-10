import React from 'react';

function Hero({
	title,
	description,
	description2,
}: {
	title: string;
	description: string;
	description2?: string;
}) {
	return (
		<div
			className={
				'relative flex flex-col gap-7 overflow-clip px-2 pb-[52px] pt-[84px] font-cygro text-white sm:pb-[70px] sm:pl-5 sm:pr-6 sm:pt-[60px] md:pb-[82px] md:pl-6 md:pr-[32px] md:pt-[62px] lg:pb-[120px] lg:pl-[26px] lg:pr-6 lg:pt-[82px] xl:pt-[62px] ultraXl:pb-[144px] ultraXl:pl-[52px] ultraXl:pr-[112px] ultraXl:pt-[96px]'
			}
		>
			<h1
				className={
					'z-10 text-[28px] font-black leading-9 sm:text-5xl md:text-6xl lg:text-8xl 2xl:text-[118px] ultraXl:text-[150px]'
				}
			>
				{title}
			</h1>
			<h3
				className={
					'z-10 max-w-[1216px] text-base font-normal leading-tight tracking-tight text-[#F0F7FF] sm:text-lg lg:text-xl 2xl:text-2xl'
				}
			>
				{description}
				{description2 && (
					<>
						<br />
						{description2}
					</>
				)}
			</h3>
		</div>
	);
}

export default Hero;
