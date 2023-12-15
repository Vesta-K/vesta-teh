import React from 'react'
import Card from '@/ui/card'
import CardUsServices from './ui/Card'

const cardText = [
	'Геодезическая типографическая съемка',
	'Оформление документов для получения технических условий',
	'Прокладка и замена водопроводных и канализационных труб',
	'Получение разрешения на разрытие',
	'Строительство колодцев',
	'Земельные, аварийные, сантехнические работы',
	'Получение актов ввода в эксплуатацию',
	'Строительство водопроводных вводов и канализационных выпусков',
	'Баланс водопотребления и водоотведения',
	'Врезки в центральные сети водопровода и канализации',
	'Санация труб  - протяжка новой трубы взамен старой с возможностью изменения диаметра',
]
function UsServices() {
	return (
		<div id={'usServices'} className={'px-1 font-cygro '}>
			<div className={'rounded-3xl bg-white px-12 pb-7 pt-10'}>
				<div className={'space-y-12'}>
					<h2
						className={'text-2xl leading-10 text-color-text-title md:text-4xl'}
					>
						Наши услуги
					</h2>
					<div className="hidden grid-cols-3 grid-rows-4 gap-4 lg:grid">
						<Card
							className={'max-w-[473px] bg-color-blue-accent'}
							subTitle={
								'Нажмите на кнопку, чтобы ознакомиться с проектными услугами.'
							}
							title={'Проектирование'}
							link
						/>
						{cardText.map((text, index) => (
							<CardUsServices key={index} text={text} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default UsServices
