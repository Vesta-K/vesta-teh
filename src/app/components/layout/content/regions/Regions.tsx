'use client';
import React from 'react';
import { cities } from '@/components/layout/content/regions/data/cities';
import Chip from '@/components/layout/content/regions/ui/Chip';
import Map from '@/components/layout/content/regions/ui/Map';
import Title from '@/ui/title';

function Regions() {
	return (
		<section id={'regions'} className={'px-1 font-cygro'}>
			<div
				className={
					'sm:gap-6sm:px-3 flex flex-col gap-3 rounded-3xl bg-white px-2 pb-6 pt-5 md:px-5 lg:px-7 lg:pb-7 lg:pt-6 2xl:px-8 2xl:pb-8 2xl:pt-7 ultraXl:px-[52px] ultraXl:pb-[44px] ultraXl:pt-10'
				}
			>
				<Title title={'Рабочие регионы'} />

				<div className={'flex flex-col gap-6 md:gap-12 lg:flex-row'}>
					<div className={'flex flex-col gap-3 md:basis-3/5'}>
						<h5
							className={
								'max-w-[436px] pl-1 text-lg leading-9 tracking-wide text-color-text-subtitle-inputItem sm:pl-0 md:text-2xl'
							}
						>
							Перечень городов Ростовской области выполнения работ:
						</h5>
						<figure className={'h-px w-full bg-color-border'} />
						<div
							className={
								'no-scrollbar flex select-none gap-2 overflow-y-scroll md:flex-row md:flex-wrap'
							}
						>
							{cities.map((item, index) => (
								<Chip key={index} city={item} id={index.toString()} />
							))}
						</div>
					</div>
					<Map />
				</div>
			</div>
		</section>
	);
}

export default Regions;
