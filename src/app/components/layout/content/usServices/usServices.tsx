'use client';
import React, { useMemo, useRef, useState } from 'react';
import { useContainerDimensions } from '@/hook/useContainerDimensions';
import CardServices from '@/components/layout/content/usServices/ui/cardServices';
import Title from '@/ui/title';

const cardText = [
	'Геодезическая типографическая съемка',
	'Оформление документов для получения технических условий',
	'Прокладка и замена водопроводных и канализационных труб',
	'Получение разрешения на разрытие',
	'Строительство колодцев',
	'Земельные, аварийные, сантехнические работы',
	'Получение актов ввода в эксплуатацию',
	'Строительство водопроводных вводов и канализационных выпусков',
	'Баланс водопотребления и водоотведения',
	'Врезки в центральные сети водопровода и канализации',
	'Санация труб  - протяжка новой трубы взамен старой с возможностью изменения диаметра',
];

const services = [
	{
		title: 'Проектирование зданий',
		text: 'Разработка проектной и рабочей документации, проведение инженерных изысканий для объектов любой сложности.',
		url: 'designing',
	},
	{
		title: 'Технологическое присоединение',
		text: 'Технические услуги по подключению объектов к сетям и оформлению документов для ввода объектов в эксплуатацию.',
		url: 'tehpris',
	},
];
function UsServices() {
	const [slide, setSlide] = useState<number>(0);
	const refWidth = useRef<HTMLDivElement | null>(null);
	const { width } = useContainerDimensions(refWidth);
	return (
		<section id={'usServices'} className={'relative px-1 font-cygro'}>
			<div
				className={
					'rounded-3xl bg-white px-2 pb-6 pt-5 sm:gap-6 sm:px-3 md:px-5 lg:px-7 lg:pb-7 lg:pt-6 2xl:px-8 2xl:pb-8 2xl:pt-7 ultraXl:px-[52px] ultraXl:pb-[44px] ultraXl:pt-10'
				}
			>
				<div className={'space-y-5 md:space-y-12'}>
					<Title title={'Наши услуги'} />

					<div className="space-y-3">
						<div className={'flex flex-row justify-end gap-3 md:hidden'}>
							<svg
								onClick={() => (slide === 0 ? null : setSlide(slide - 1))}
								width="40"
								height="40"
								viewBox="0 0 40 40"
								fill="none"
								className={` ${
									slide === 0 ? 'text-[#AAB8C9]' : 'text-color-blue-accent'
								} rounded-[100%] transition-colors duration-100 active:bg-color-chip-hover/70`}
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="0.5"
									y="0.5"
									width="39"
									height="39"
									rx="19.5"
									fill="none"
								/>
								<rect
									x="0.5"
									y="0.5"
									width="39"
									height="39"
									rx="19.5"
									stroke="currentColor"
								/>
								<path
									d="M23.75 27.5L16.25 20L23.75 12.5"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<svg
								onClick={() => (slide === 1 ? null : setSlide(slide + 1))}
								width="40"
								height="40"
								className={` ${
									slide === 1 ? 'text-[#AAB8C9]' : 'text-color-blue-accent'
								} rounded-[100%] transition-colors duration-100 active:bg-color-chip-hover/70`}
								viewBox="0 0 40 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="0.5"
									y="0.5"
									width="39"
									height="39"
									rx="19.5"
									fill="none"
								/>
								<rect
									x="0.5"
									y="0.5"
									width="39"
									height="39"
									rx="19.5"
									stroke="currentColor"
								/>
								<path
									d="M16.25 12.5L23.75 20L16.25 27.5"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<div ref={refWidth} className={''}>
							<div className={'overflow-x-scroll md:hidden'}>
								<div
									style={{ transform: `translateX(-${slide * 100}%)` }}
									className={`flex transition duration-500`}
								>
									{width !== 0 &&
										services.map(({ title, text, url }, index) => (
											<div
												key={index}
												style={{ minWidth: `${width}px` }}
												className={'px-1'}
											>
												<CardServices text={text} title={title} url={url} />
											</div>
										))}
								</div>
							</div>
							<div
								className={'hidden gap-2 md:grid md:grid-cols-2 md:grid-rows-1'}
							>
								{services.map(({ title, text, url }, index) => (
									<CardServices
										key={index}
										title={title}
										text={text}
										url={url}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default UsServices;
