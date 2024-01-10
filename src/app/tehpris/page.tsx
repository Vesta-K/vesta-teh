import React from 'react';
import Hero from '@/components/layout/content/hero/hero';
import About from '@/tehpris/components/about/about';
import ServicesTehpris from '@/tehpris/components/servicesTehpris/servicesTehpris';

import Contacts from '@/components/layout/content/contacts/Contacts';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Технологическое присоединение',
	description:
		'Услуги технологического присоединения, оформления, согласования и сдачи в эксплуатацию водоснабжения и канализации, газификации, электроснабжения.',
	keywords: [
		'Техническое присоединение',
		'Водоснабжение',
		'Канализация',
		'Газификация',
		'Электроснабжение',
		'Оформление',
		'Согласование',
		'Сдача в эксплуатацию',
	],
};

const textHero = {
	title: 'Технологическое присоединение',
	description:
		'Услуги технологического присоединения, оформления, согласования и сдачи в эксплуатацию водоснабжения и канализации, газификации, электроснабжения.',
};

function DesigningPage() {
	return (
		<main className="space-y-2 font-cygro sm:pl-[74px] xl:pl-80">
			<Hero title={textHero.title} description={textHero.description} />
			<About />
			<ServicesTehpris />
			<Contacts />
		</main>
	);
}

export default DesigningPage;
