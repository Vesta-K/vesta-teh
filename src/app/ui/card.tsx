import React from 'react';

interface ICard {
	icon: JSX.Element;

	text: string;
}
function Card({ icon, text }: ICard) {
	return (
		<div
			className={`hidden min-h-[182px] min-w-[210px] flex-col items-start justify-between rounded-[20px] border border-color-border px-3 pb-[32px] pt-5 sm:flex sm:w-5/12 sm:flex-nowrap md:max-w-[220px] 2xl:min-h-[268px] 2xl:max-w-[280px] 2xl:px-6 2xl:py-[32px] ultraXl:min-h-[284px] ultraXl:max-w-[330px]`}
		>
			<span className={''}>{icon}</span>
			<p
				className={
					'2xl:leading-1 text-base leading-tight tracking-tight text-color-text-chip-card 2xl:text-xl 2xl:tracking-tight ultraXl:text-2xl'
				}
			>
				{text}
			</p>
		</div>
	);
}

export default Card;
