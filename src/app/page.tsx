import Hero from '@/components/layout/content/hero/hero'
import React from 'react'
import UsServices from '@/components/layout/content/usServices/usServices'
import Advantages from '@/components/layout/content/advantages/Advantages'

export default function Home() {
	return (
		<main className="space-y-2 font-cygro sm:pl-[74px] xl:pl-80">
			<Hero />
			<UsServices />
			<Advantages />
		</main>
	)
}
