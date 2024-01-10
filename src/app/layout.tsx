import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import SideBar from '@/components/layout/header/sideBar';
import React from 'react';
import Header from '@/components/layout/header/header';
import StoreProvider from '@/StoreProvider';
import Footer from '@/components/layout/footer/footer';
import SideBarTablet from '@/components/layout/header/sideBarTablet';
import Head from 'next/head';

const cygro = localFont({
	src: [
		{
			path: '../../public/fonts/Cygre-Thin.ttf',
			weight: '100',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Cygre-Light.ttf',
			weight: '200',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Cygre-Book.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Cygre-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Cygre-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Cygre-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Cygre-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Cygre-ExtraBold.ttf',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../../public/fonts/Cygre-Black.ttf',
			weight: '900',
			style: 'normal',
		},
	],
	variable: '--font-cygro',
});
const logoFonts = localFont({
	src: [
		{
			path: '../../public/fonts/MursGothic-WideDark.ttf',
			weight: '800',
			style: 'normal',
		},
	],
	variable: '--font-mursGothic',
});

export const metadata: Metadata = {
	title: 'Веста-тех.РФ',
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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" style={{ scrollBehavior: 'smooth' }}>
			<Head>
				<link rel="favicon" href="/favicon.ico" />
			</Head>
			<body className={`${cygro.variable} ${logoFonts.variable}`}>
				<StoreProvider>
					<Header />
					<SideBar
						classNameLink={
							'group flex cursor-pointer flex-row rounded-[18px] border border-color-border bg-white p-4 hover:bg-color-chip-hover hover:text-color-text-title active:border-color-blue-accent transition-color duration-300'
						}
						className={
							'fixed left-0 top-0 z-10 hidden h-screen w-[320px] flex-col items-center justify-center gap-20 bg-color-card-hover px-2 font-cygro font-normal xl:flex xl:px-4'
						}
					/>
					{children}
					<SideBarTablet />
					<Footer />
				</StoreProvider>
			</body>
		</html>
	);
}
