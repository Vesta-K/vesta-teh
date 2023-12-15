import React from 'react'
import Link from 'next/link'

interface ICard {
	className?: string
	icon?: JSX.Element
	subTitle?: string
	text?: string
	title?: string
	link?: boolean
}
function Card({ className, icon, text, title, subTitle, link }: ICard) {
	return (
		<div
			className={`${className} ${
				icon ? 'justify-between p-8' : 'justify-between p-8 pt-10'
			} flex min-h-[284px] flex-col rounded-[40px] border border-color-border text-xl font-normal leading-loose tracking-tight`}
		>
			<div
				className={`flex ${
					subTitle ? 'flex-col' : 'flex-row items-center justify-start '
				} gap-3 `}
			>
				{icon}
				<h5
					className={`${subTitle && 'text-color-chip'} ${
						text ? 'text-color-text-title' : 'text-color-text-chip-card'
					} text-2xl leading-loose tracking-wide`}
				>
					{title}
				</h5>
				{subTitle && (
					<h3
						className={'text-lg leading-loose tracking-tight text-color-chip'}
					>
						{subTitle}
					</h3>
				)}
			</div>

			{text && (
				<p
					className={
						'text-[24px] leading-[1.875rem] tracking-wide text-color-text-chip-card'
					}
				>
					{text}
				</p>
			)}
			{link && (
				<div className={'flex flex-row justify-end last:self-end'}>
					<Link href={'#'}>
						<div
							className={
								'flex max-w-[225px] flex-row gap-3 rounded-[16px] bg-white px-6 py-4 text-lg leading-normal text-color-blue-accent transition-colors duration-200 hover:bg-color-sideBarButton-hover'
							}
						>
							Открыть раздел
							<svg
								width="24"
								height="24"
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
			)}
		</div>
	)
}

export default Card
