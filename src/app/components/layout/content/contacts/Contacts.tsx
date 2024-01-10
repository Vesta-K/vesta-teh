import React from 'react';
import Image from 'next/image';
import img from './images/map.webp';
import imgBig from './images/map-big.webp';
import {
	adress,
	contact,
} from '@/components/layout/content/contacts/data/contact';
import Title from '@/ui/title';
function Contacts() {
	return (
		<section id={'contacts'} className={'px-1 font-cygro'}>
			<div
				className={
					'space-y-6 rounded-3xl bg-white px-2 pb-6 pt-5 sm:gap-6 sm:px-3 md:space-y-11 md:px-5 lg:px-7 lg:pb-7 lg:pt-6 2xl:px-8 2xl:pb-8 2xl:pt-7 ultraXl:px-[52px] ultraXl:pb-[44px] ultraXl:pt-10'
				}
			>
				<Title title={'Контакты'} />
				<div
					className={
						'flex w-full flex-col justify-stretch gap-3 lg:flex-row xl:gap-5'
					}
				>
					<Image
						alt={'map'}
						priority={true}
						draggable={false}
						src={img}
						className={'w-full sm:hidden'}
					/>
					<Image
						src={imgBig}
						alt={'map_BIG'}
						priority={true}
						draggable={false}
						className={
							'hidden rounded-[20px] border border-color-blue-accent object-cover sm:flex lg:w-[567px] xl:w-[502px] 2xl:w-[678px] ultraXl:w-[901px]'
						}
					/>
					<div
						className={
							'flex w-full flex-col justify-stretch gap-3 sm:flex-row lg:flex-col'
						}
					>
						<div
							className={
								'flex min-h-[182px] basis-1/2 flex-col justify-between gap-10 rounded-[20px] border border-color-border px-3 py-5'
							}
						>
							<div className={'flex flex-row items-center gap-2.5 sm:gap-3'}>
								{adress.icon}
								<h3
									className={
										'text-lg text-color-text-title 2xl:text-xl ultraXl:text-2xl'
									}
								>
									{adress.title}
								</h3>
							</div>
							<a
								className={
									'text-base leading-snug text-color-text-subtitle-inputItem ultraXl:text-xl'
								}
							>
								г. Ростов-на-Дону, ул. Социалистическая 150, офис 4.
							</a>
						</div>
						<div
							className={
								'flex min-h-[182px] w-full basis-1/2 flex-col justify-between gap-10 rounded-[20px] border border-color-border px-3 py-5'
							}
						>
							<div className={'flex flex-row items-center gap-2.5 sm:gap-3'}>
								{contact.icon}
								<h3
									className={
										'text-lg text-color-text-title 2xl:text-xl ultraXl:text-2xl'
									}
								>
									{contact.title}
								</h3>
							</div>
							<div className={'flex flex-col ultraXl:gap-3'}>
								<a
									href={'tel:' + contact.number}
									className={
										'text-base leading-snug text-color-blue-accent hover:text-color-blue-accent-hover 2xl:leading-tight ultraXl:text-xl'
									}
								>
									{contact.number}
								</a>
								<a
									href={'mailto:' + contact.email}
									className={
										'text-base leading-snug text-color-blue-accent hover:text-color-blue-accent-hover ultraXl:text-xl'
									}
								>
									{contact.email}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contacts;
