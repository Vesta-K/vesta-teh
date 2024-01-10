'use client';
import React, { useState } from 'react';
import Modal from '@/ui/modal/modal';
import { modalReducer } from '../../../../lib/reducers/modalReducer';
import { useAppDispatch, useAppSelector } from '../../../../lib/redux';
import Card from '@/designing/components/servicesDesign/ui/card';
import { serviceData } from '@/designing/components/servicesDesign/data/serviceData';
import Title from '@/ui/title';
function ServicesDesign() {
	const [slide, setSlide] = useState<number>(0);
	const { setOpenModal } = modalReducer.actions;
	const { isVisible } = useAppSelector((state) => state.modalReducer);
	const dispatch = useAppDispatch();
	return (
		<section id={'servicesDesign'} className={'px-1 font-cygro'}>
			<div
				className={
					'flex flex-col gap-6 rounded-3xl bg-white px-2 pb-6 pt-5 sm:gap-6 sm:px-3 md:px-5 lg:px-7 lg:pb-7 lg:pt-6 2xl:px-8 2xl:pb-8 2xl:pt-7 ultraXl:px-[52px] ultraXl:pb-[44px] ultraXl:pt-10'
				}
			>
				<div className={'flex flex-col gap-3'}>
					<Title title={'Услуги по проектированию'} />
					<p
						className={
							'pl-1 text-base leading-tight tracking-tight text-color-text-subtitle-inputItem sm:pl-0 xl:text-lg xl:leading-[2rem] xl:tracking-tight 2xl:text-xl 2xl:leading-relaxed ultraXl:text-2xl ultraXl:tracking-wide'
						}
					>
						Полный комплекс услуг по разработке проектной и рабочей
						документации, а также различных видов инженерных изысканий для
						проектирования и строительства объектов любой степени сложности.
					</p>
				</div>
				<div className={'flex flex-row justify-end gap-3 xl:hidden'}>
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
						onClick={() =>
							slide === serviceData.length - 1 ? null : setSlide(slide + 1)
						}
						width="40"
						height="40"
						className={` ${
							slide === serviceData.length - 1
								? 'text-[#AAB8C9]'
								: 'text-color-blue-accent'
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
				<div className={'flex overflow-x-scroll xl:hidden'}>
					{serviceData.map(({ title, description }, index) => (
						<div
							key={index}
							style={{ transform: `translateX(-${slide * 100}%)` }}
							className={`flex transition duration-500`}
						>
							<Card text={description} title={title} />
						</div>
					))}
				</div>
				<div
					className={
						'hidden grid-cols-3 grid-rows-3 gap-2 xl:grid 2xl:grid-cols-2 2xl:grid-rows-4'
					}
				>
					{serviceData.map(({ title, description }, index) => (
						<Card key={index} text={description} title={title} />
					))}
				</div>
				<p
					className={
						'text-sm leading-tight tracking-tight text-[#AAB8C9] lg:text-base xl:text-lg 2xl:text-xl ultraXl:text-2xl'
					}
				>
					Не нашли нужную услугу. Заполните{' '}
					<a
						onClick={() => dispatch(setOpenModal({ isVisible: !isVisible }))}
						className={
							'cursor-pointer text-sm leading-tight tracking-tight text-color-blue-accent underline hover:text-color-blue-accent-hover lg:text-base xl:text-lg 2xl:text-xl ultraXl:text-2xl'
						}
					>
						форму
					</a>{' '}
					по ссылке и мы вам поможем.
				</p>
			</div>
			{isVisible && <Modal />}
		</section>
	);
}

export default ServicesDesign;
