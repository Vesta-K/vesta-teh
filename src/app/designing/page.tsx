import React from 'react';
import Hero from '@/components/layout/content/hero/hero';
import About from '@/designing/components/about/about';
import ServicesDesign from '@/designing/components/servicesDesign/servicesDesign';
import StagesDesign from '@/designing/components/stagesDesign/stagesDesign';
import Contacts from '@/components/layout/content/contacts/Contacts';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Проектирование зданий',
	description:
		'Полный комплекс работ по разработке проектной и рабочей документации, а также различных видов инженерных изысканий для проектирования и строительства объектов любой степени сложности',
	keywords: [
		'Полный комплекс',
		'Проектная документация',
		'Рабочая документация',
		'Инженерные изыскания',
		'Проектирование',
		'Строительство',
		'Объекты',
		'Степень сложности',
		'Проектирование зданий',
	],
};

const textHero = {
	title: 'Проектирование зданий',
	description:
		'Полный комплекс работ по разработке проектной и рабочей документации, а также различных видов инженерных изысканий для проектирования и строительства объектов любой степени сложности',
};

function DesigningPage() {
	return (
		<main className="space-y-2 font-cygro sm:pl-[74px] xl:pl-80">
			<Hero title={textHero.title} description={textHero.description} />
			<About />
			<ServicesDesign />
			<StagesDesign />
			<Contacts />
		</main>
	);
}

export default DesigningPage;
