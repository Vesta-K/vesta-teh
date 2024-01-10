import React from 'react';

function StageCard({
	title,
	stage,
	description,
}: {
	title: string;
	description: string;
	stage: string;
}) {
	return (
		<div className={'flex flex-col gap-3 lg:gap-[18px]'}>
			<div className={'flex-row items-start gap-3 lg:flex'}>
				<span
					className={
						'text-xs leading-none tracking-tight text-color-text-subtitle-inputItem ultraXl:text-lg'
					}
				>
					{stage}
				</span>
				<h3
					className={
						'text-lg leading-normal lg:w-2/5 lg:text-xl 2xl:text-2xl 2xl:tracking-wide ultraXl:text-3xl'
					}
				>
					{title}
				</h3>
			</div>
			<figure className={'h-px w-full bg-color-card-hover'} />
			<p
				className={
					'text-base leading-tight tracking-tight text-color-text-subtitle-inputItem lg:w-2/5 lg:self-end lg:text-sm ultraXl:text-lg'
				}
			>
				{description}
			</p>
		</div>
	);
}

export default StageCard;
