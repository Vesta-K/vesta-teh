'use client';
import React from 'react';
import Card from '@/ui/card';
import Title from '@/ui/title';

const dataAdvantagesCard = [
	{
		text: 'Работаем с объектами ЛЮБОГО назначения',
		icon: (
			<svg
				width="46"
				height="44"
				viewBox="0 0 46 44"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="0.5"
					y="0.5"
					width="45"
					height="43"
					rx="21.5"
					stroke="#D6E2F1"
					strokeLinecap="round"
				/>
				<path
					d="M11.5 21.171L22.0611 10.3962C22.5801 9.86795 23.4199 9.86795 23.9377 10.3962L34.5 21.171M14.1538 18.4638V30.6464C14.1538 31.3936 14.7483 32 15.4808 32H20.3462V26.1343C20.3462 25.3871 20.9406 24.7807 21.6731 24.7807H24.3269C25.0594 24.7807 25.6538 25.3871 25.6538 26.1343V32H30.5192C31.2517 32 31.8462 31.3936 31.8462 30.6464V18.4638M18.5769 32H28.3077"
					stroke="#2388FF"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		text: 'Можно заказать услуги дистанционно',
		icon: (
			<svg
				width="46"
				height="44"
				viewBox="0 0 46 44"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="0.5"
					y="0.5"
					width="45"
					height="43"
					rx="21.5"
					stroke="#D6E2F1"
					strokeLinecap="round"
				/>
				<path
					d="M20 27.25V28.257C20 28.6511 19.9224 29.0414 19.7716 29.4055C19.6208 29.7696 19.3997 30.1004 19.121 30.379L18.5 31H27.5L26.879 30.379C26.6003 30.1004 26.3792 29.7696 26.2284 29.4055C26.0776 29.0414 26 28.6511 26 28.257V27.25M32 15.25V25C32 25.5967 31.7629 26.169 31.341 26.591C30.919 27.0129 30.3467 27.25 29.75 27.25H16.25C15.6533 27.25 15.081 27.0129 14.659 26.591C14.2371 26.169 14 25.5967 14 25V15.25M32 15.25C32 14.6533 31.7629 14.081 31.341 13.659C30.919 13.2371 30.3467 13 29.75 13H16.25C15.6533 13 15.081 13.2371 14.659 13.659C14.2371 14.081 14 14.6533 14 15.25M32 15.25V22C32 22.5967 31.7629 23.169 31.341 23.591C30.919 24.0129 30.3467 24.25 29.75 24.25H16.25C15.6533 24.25 15.081 24.0129 14.659 23.591C14.2371 23.169 14 22.5967 14 22V15.25"
					stroke="#2388FF"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		text: 'Работаем официально, по договору',
		icon: (
			<svg
				width="46"
				height="44"
				viewBox="0 0 46 44"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="0.5"
					y="0.5"
					width="45"
					height="43"
					rx="21.5"
					stroke="#D6E2F1"
					strokeLinecap="round"
				/>
				<path
					d="M20 22H23.75M20 25H23.75M20 28H23.75M26.75 28.75H29C29.5967 28.75 30.169 28.5129 30.591 28.091C31.0129 27.669 31.25 27.0967 31.25 26.5V16.108C31.25 14.973 30.405 14.01 29.274 13.916C28.9 13.885 28.5256 13.8583 28.151 13.836M28.151 13.836C28.2174 14.0511 28.2501 14.2749 28.25 14.5C28.25 14.6989 28.171 14.8897 28.0303 15.0303C27.8897 15.171 27.6989 15.25 27.5 15.25H23C22.586 15.25 22.25 14.914 22.25 14.5C22.25 14.269 22.285 14.046 22.35 13.836M28.151 13.836C27.868 12.918 27.012 12.25 26 12.25H24.5C24.0192 12.2501 23.5511 12.4041 23.1643 12.6895C22.7774 12.9749 22.492 13.3767 22.35 13.836M22.35 13.836C21.974 13.859 21.6 13.886 21.226 13.916C20.095 14.01 19.25 14.973 19.25 16.108V18.25M19.25 18.25H15.875C15.254 18.25 14.75 18.754 14.75 19.375V30.625C14.75 31.246 15.254 31.75 15.875 31.75H25.625C26.246 31.75 26.75 31.246 26.75 30.625V19.375C26.75 18.754 26.246 18.25 25.625 18.25H19.25ZM17.75 22H17.758V22.008H17.75V22ZM17.75 25H17.758V25.008H17.75V25ZM17.75 28H17.758V28.008H17.75V28Z"
					stroke="#2388FF"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
	{
		text: 'Выполняем работу под ключ',
		icon: (
			<svg
				width="46"
				height="44"
				viewBox="0 0 46 44"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="0.5"
					y="0.5"
					width="45"
					height="43"
					rx="21.5"
					stroke="#D6E2F1"
					strokeLinecap="round"
				/>
				<path
					d="M26.75 14.25C27.5456 14.25 28.3087 14.5661 28.8713 15.1287C29.4339 15.6913 29.75 16.4544 29.75 17.25M32.75 17.25C32.7501 18.1251 32.5588 18.9897 32.1895 19.783C31.8202 20.5764 31.2818 21.2794 30.6121 21.8427C29.9424 22.406 29.1575 22.816 28.3126 23.0439C27.4677 23.2718 26.5831 23.3121 25.721 23.162C25.158 23.065 24.562 23.188 24.158 23.592L21.5 26.25H19.25V28.5H17V30.75H13.25V27.932C13.25 27.335 13.487 26.762 13.909 26.341L20.408 19.842C20.812 19.438 20.935 18.842 20.838 18.279C20.6962 17.4602 20.726 16.6208 20.9256 15.8141C21.1252 15.0074 21.4902 14.251 21.9975 13.5927C22.5047 12.9345 23.1432 12.3888 23.8724 11.9903C24.6016 11.5917 25.4057 11.349 26.2336 11.2775C27.0616 11.2059 27.8953 11.3072 28.6821 11.5748C29.4688 11.8424 30.1914 12.2705 30.8041 12.832C31.4167 13.3935 31.906 14.0761 32.241 14.8367C32.5759 15.5972 32.7493 16.419 32.75 17.25Z"
					stroke="#2388FF"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
	},
];
function Advantages() {
	const [open, setOpen] = React.useState(3);
	const handleOpen = (value: number) => setOpen(value);

	return (
		<section id={'advantages'} className={'px-1 font-cygro'}>
			<div
				className={
					'flex flex-col gap-3 rounded-3xl bg-white px-2 pb-6 pt-5 sm:gap-6 sm:px-3 md:px-5 lg:px-7 lg:pb-7 lg:pt-6 2xl:px-8 2xl:pb-8 2xl:pt-7 ultraXl:px-[52px] ultraXl:pb-[44px] ultraXl:pt-10'
				}
			>
				<Title title={'Преимущества'} />
				<div className={'flex flex-row flex-wrap gap-2'}>
					<h5
						className={
							'pl-1 text-lg leading-normal tracking-wide text-color-text-subtitle-inputItem sm:pl-0 md:max-w-[339px]'
						}
					>
						Мы стремимся максимально точно понимать и выполнять работы в
						соответствии с потребностями и техническим заданием наших заказчиков
						в установленный срок.
					</h5>
					<div className={'hidden w-[91px] lg:block ultraXl:w-[120px]'} />

					{dataAdvantagesCard.map(({ text, icon }, index) => (
						<Card key={index} text={text} icon={icon} />
					))}

					<div className={'mt-10 w-full sm:hidden'}>
						{/*Accordion*/}
						{dataAdvantagesCard.map(({ text, icon }, index) => (
							<div
								key={index}
								onClick={() =>
									open === index ? handleOpen(-1) : handleOpen(index)
								}
							>
								<div
									className={
										'-mt-7 space-y-5 overflow-hidden rounded-[20px] border border-color-border bg-white px-3 pb-5 pt-5'
									}
								>
									{icon}
									<div
										className={`${
											open === index ? 'max-h-[100px]' : 'max-h-0'
										} relative w-full overflow-hidden transition-all duration-500`}
									>
										<p
											className={`py-5 text-lg ${
												open === index ? 'opacity-100 delay-200' : 'opacity-0'
											} leading-[1.875rem] tracking-wide text-color-text-chip-card transition duration-300`}
										>
											{text}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Advantages;
