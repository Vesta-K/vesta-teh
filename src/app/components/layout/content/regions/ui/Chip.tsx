import React from 'react'
import { mapReducer } from '../../../../../../lib/reducers/mapReducer'
import { useAppDispatch, useAppSelector } from '../../../../../../lib/redux'

function Chip({ city, id }: { city: string; id: string }) {
	const { setCity } = mapReducer.actions
	const dispatch = useAppDispatch()
	const { currentCity } = useAppSelector((state) => state.mapReducer)
	return (
		<div
			onClick={() => dispatch(setCity(city))}
			id={id}
			className={`group ${
				city === currentCity
					? 'border-color-blue-accent-hover bg-color-blue-accent'
					: 'border-color-border bg-color-chip hover:bg-color-chip-hover'
			} w-fit cursor-pointer rounded-[18px] border px-[18px] pb-2 pt-1.5 xl:px-6 xl:pb-3 xl:pt-2.5`}
		>
			<p
				className={`whitespace-nowrap ${
					city === currentCity ? 'text-white' : 'text-color-text-chip-card'
				} text-sm sm:text-2xl`}
			>
				{city}
			</p>
		</div>
	)
}

export default Chip
