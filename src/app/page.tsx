import Hero from '@/components/layout/content/hero/hero';
import React from 'react';
import UsServices from '@/components/layout/content/usServices/usServices';
import Advantages from '@/components/layout/content/advantages/Advantages';
import Regions from '@/components/layout/content/regions/Regions';
import Contacts from '@/components/layout/content/contacts/Contacts';
import About from '@/components/layout/content/about/about';
import { Metadata } from 'next';
const textHero = {
	title: 'Веста-Тех.РФ',
	description:
		'Компания "Веста-Тех.РФ" предлагает взаимовыгодное сотрудничество в области технического присоединения (подключение к инженерным коммуникациям: электросетям, газопроводу, водоснабжению, канализации) и разработки проектно-сметной документации для нового строительства, реконструкции и модернизации существующих зданий и сооружений различного функционального назначения.',
};
export const metadata: Metadata = {
	title: 'Веста-тех',
	description:
		'Компания "Веста-Тех.РФ" предлагает взаимовыгодное сотрудничество в области технического присоединения (подключение к инженерным коммуникациям: электросетям, газопроводу, водоснабжению, канализации) и разработки проектно-сметной документации для нового строительства, реконструкции и модернизации существующих зданий и сооружений различного функционального назначения.',
	keywords: [
		'Веста-Тех',
		'Сотрудничество',
		'Техническое присоединение',
		'Инженерные коммуникации',
		'Электросети',
		'Газопровод',
		'Водоснабжение',
		'Канализация',
		'Проектно-сметная документация',
		'Новое строительство',
		'Реконструкция',
		'Модернизация',
		'Здания и сооружения',
		'Функциональное назначение',
	],
};
export default function Home() {
	return (
		<main className="space-y-2 font-cygro sm:pl-[72px] xl:pl-80">
			<Hero title={textHero.title} description={textHero.description} />
			<UsServices />
			<Advantages />
			<Regions />
			<About />
			<Contacts />
		</main>
	);
}
