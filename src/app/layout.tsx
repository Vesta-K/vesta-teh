import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import SideBar from '@/components/layout/header/sideBar'
import React from 'react'
import Header from '@/components/layout/header/header'
import StoreProvider from '@/StoreProvider'
import { ThemeProvider } from '@material-tailwind/react'

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
})
const logoFonts = localFont({
	src: [
		{
			path: '../../public/fonts/MursGothic-WideDark.ttf',
			weight: '800',
			style: 'normal',
		},
	],
	variable: '--font-mursGothic',
})

export const metadata: Metadata = {
	title: 'Веста-тех',
	description: '',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" style={{ scrollBehavior: 'smooth' }}>
			<body className={`${cygro.variable} ${logoFonts.variable}`}>
				<StoreProvider>
					<Header />

					<SideBar
						leftposition={true}
						classNameLink={
							'leading-1 group flex w-full flex-row items-center gap-x-[10px] rounded-[24px] border border-color-border bg-white px-4 xl:px-6 py-4 text-xl text-color-sideBarButton-item transition-[background-color] duration-200 target:bg-black hover:bg-color-chip-hover active:text-color-blue-accent sm:text-2xl'
						}
						className={
							'fixed left-0 top-0 z-10 hidden h-screen w-fit flex-col items-center justify-center gap-20 bg-color-card-hover px-2 font-cygro font-normal sm:flex xl:px-4'
						}
					/>
					<ThemeProvider>{children}</ThemeProvider>
				</StoreProvider>
			</body>
		</html>
	)
}
