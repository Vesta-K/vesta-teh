import React from 'react';
import Title from '@/ui/title';

function About() {
	return (
		<section id={'about'} className={'relative px-1 font-cygro'}>
			<div
				className={
					'rounded-3xl bg-white px-2 pb-6 pt-5 sm:gap-6 sm:px-3 md:px-5 lg:px-7 lg:pb-7 lg:pt-6 2xl:px-8 2xl:pb-8 2xl:pt-7 ultraXl:px-[52px] ultraXl:pb-[44px] ultraXl:pt-10'
				}
			>
				<div className={'space-y-6'}>
					<Title title={'О компании'} />
					<figure className={'h-px w-full bg-color-border'} />
					<div
						className={
							'flex flex-col gap-5 lg:flex-row lg:justify-between lg:gap-20 xl:gap-40'
						}
					>
						<p
							className={
								'basis-3/5 text-lg text-color-text-chip-card lg:text-2xl'
							}
						>
							Специалисты «Веста-Тех.РФ» – это сплочённая, квалифицированная,
							работоспособная команда, работающая на достижение общей цели.
							Сотрудники компании имеют опыт в разработке проектно-сметной
							документации, выполнения строительно-монтажных и пусконаладочных
							работ.
						</p>
						<p
							className={
								'basis-3/5 text-base text-color-text-subtitle-inputItem  lg:text-xl'
							}
						>
							«Веста-Тех.РФ» образована в 2019 году. Начав с решения
							узкоспециализированных задач по обследованию строительных
							конструкций и инженерных систем зданий, компания продолжает
							развиваться, открывая новые направления и привлекая специалистов
							высокого уровня, и на сегодняшний день может предложить
							комплексные услуги по техническому присоединению и подготовке
							проектной документации для реконструкции существующих и
							строительства новых зданий.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
