import React from 'react';
import img from './img.webp';
import Image from 'next/image';
import Title from '@/ui/title';
function About() {
	return (
		<section id={'about'} className={'px-1 font-cygro'}>
			<div
				className={
					'flex flex-col gap-6 rounded-3xl bg-white px-2 pb-6 pt-5 sm:gap-6 sm:px-3 md:flex-row md:px-5 lg:px-7 lg:pb-7 lg:pt-6 2xl:gap-10 2xl:px-8 2xl:pb-8 2xl:pt-7 ultraXl:gap-12 ultraXl:px-[52px] ultraXl:pb-[44px] ultraXl:pt-10'
				}
			>
				<div
					className={
						'flex max-w-[699px] flex-col gap-3 xl:gap-4 2xl:gap-5 ultraXl:max-w-full ultraXl:gap-7'
					}
				>
					<Title title={'Проектирование зданий и сооружений'} />

					<figure className={'h-px w-full bg-color-border'} />
					<p
						className={
							'pl-1 text-base leading-tight tracking-tight text-color-text-subtitle-inputItem sm:pl-0 xl:text-lg xl:leading-[2rem] xl:tracking-tight 2xl:text-xl 2xl:leading-relaxed ultraXl:text-2xl ultraXl:tracking-wide'
						}
					>
						Уникальность нашего подхода состоит в выполнении проекта «под ключ»,
						заказчик получит все необходимые документы для получения разрешения
						на строительство.
					</p>
				</div>
				<Image
					className={'rounded-[16px] object-cover md:w-1/2'}
					src={img}
					priority={true}
					alt="Каска, инструменты и чертеж"
				/>
			</div>
		</section>
	);
}

export default About;
