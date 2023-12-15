import React from 'react'
const textHero = {
	title: 'Комплексное сопровождение',
	subtitle:
		'Технического присоединения, оформления, согласования и сдачи в эксплуатацию водоснабжения и канализации, газификации, электроснабжения.',
	subtitleDesigning:
		'Полный комплекс работ по разработке проектной и рабочей документации, а также различных видов инженерных изысканий для проектирования объектов любой степени сложности.',
}

function Hero() {
	return (
		<div
			className={
				'relative flex flex-col gap-7 overflow-clip px-4 pb-20 pt-[84px] font-cygro text-white'
			}
		>
			<h1 className={'z-10 text-[28px] font-black leading-9'}>
				{textHero.title}
			</h1>
			<h3
				className={'z-10 text-base font-normal leading-[2rem] tracking-tight'}
			>
				{textHero.subtitle}
				<br />
				{textHero.subtitleDesigning}
			</h3>
		</div>
	)
}

export default Hero
