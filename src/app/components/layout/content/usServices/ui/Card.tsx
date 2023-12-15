import React from 'react'

function CardUsServices({ text }: { text: string }) {
	return (
		<div
			className={`group flex min-h-[284px] flex-col justify-between rounded-[40px] border border-color-border p-8 pt-10 text-xl font-normal leading-loose tracking-tight transition-all duration-200 hover:border-color-blue-accent-hover hover:bg-color-card-hover`}
		>
			<p
				className={
					'text-2xl leading-9 tracking-wide text-color-text-chip-card group-hover:text-color-text-title'
				}
			>
				{text}
			</p>
			<a
				className={
					'cursor-pointer self-end rounded-[16px] bg-color-blue-accent px-6 py-3.5 leading-normal text-white opacity-0 transition-colors duration-200 hover:bg-color-blue-accent-hover group-hover:opacity-100'
				}
			>
				Заказать услугу
			</a>
		</div>
	)
}

export default CardUsServices
