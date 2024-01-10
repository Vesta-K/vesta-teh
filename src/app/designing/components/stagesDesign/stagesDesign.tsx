import React from 'react';
import { stages } from '@/designing/components/stagesDesign/data/stages';
import StageCard from './ui/stageCard';
import Title from '@/ui/title';

function StagesDesign() {
	return (
		<section id={'stagesDesign'} className={'px-1 font-cygro'}>
			<div
				className={
					'flex flex-col gap-6 rounded-3xl bg-white px-2 pb-6 pt-5 sm:px-3 md:px-5 lg:px-7 lg:pb-7 lg:pt-6 xl:gap-8 2xl:gap-10 2xl:px-8 2xl:pb-8 2xl:pt-7 ultraXl:px-[52px] ultraXl:pb-[44px] ultraXl:pt-10'
				}
			>
				<div className={'flex flex-col gap-6 xl:gap-[32px] 2xl:gap-10'}>
					<Title title={'Этапы проектирования'} />
					<div className={'flex flex-col gap-7 2xl:gap-8'}>
						{stages.map(({ title, description, stage }, index) => (
							<StageCard
								key={index}
								stage={stage}
								title={title}
								description={description}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default StagesDesign;
