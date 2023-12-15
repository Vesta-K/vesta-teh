'use client'
import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { sideBarReducer } from '../../lib/reducers/sideBarReducer'
import { useAppDispatch, useAppSelector } from '../../lib/redux'
import useWindowSize from '@/hook/useWindowSize'
import { state } from 'sucrase/dist/types/parser/traverser/base'

interface ISideBarButton {
	text: string
	className?: string
	id: string
	icon?: JSX.Element
	leftposition?: boolean
}
function SideBarButton({
	text,
	className,
	id,
	icon,
	leftposition,
}: ISideBarButton) {
	const { width } = useWindowSize()

	return (
		<Link href={`#${id}`} className={`${className}`}>
			<div
				onClick={(event) => {
					console.log(event.target, event.currentTarget)
				}}
			>
				{icon}
			</div>
			{leftposition ? width > 1140 ? <>{text}</> : null : <>{text}</>}
		</Link>
	)
}

export default SideBarButton
