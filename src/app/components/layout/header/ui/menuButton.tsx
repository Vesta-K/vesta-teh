'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../lib/redux'
import { sideBarReducer } from '../../../../../lib/reducers/sideBarReducer'

function MenuButton() {
	const { isOpen } = useAppSelector((state) => state.sideBarReducer)
	const { setIsOpen } = sideBarReducer.actions
	const dispatch = useAppDispatch()
	return isOpen ? (
		<svg
			onClick={() => dispatch(setIsOpen(!isOpen))}
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="40" height="40" rx="20" fill="#2388FF" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.2934 11.2933C11.4809 11.106 11.7351 11.0008 12.0001 11.0008C12.2651 11.0008 12.5193 11.106 12.7068 11.2933L20.0001 18.5866L27.2934 11.2933C27.385 11.195 27.4954 11.1162 27.618 11.0615C27.7407 11.0069 27.8731 10.9775 28.0074 10.9751C28.1417 10.9728 28.275 10.9975 28.3996 11.0478C28.5241 11.0981 28.6372 11.1729 28.7321 11.2679C28.8271 11.3628 28.902 11.4759 28.9523 11.6005C29.0026 11.725 29.0273 11.8583 29.0249 11.9926C29.0225 12.1269 28.9931 12.2593 28.9385 12.382C28.8838 12.5046 28.805 12.615 28.7068 12.7066L21.4134 19.9999L28.7068 27.2933C28.805 27.3848 28.8838 27.4952 28.9385 27.6179C28.9931 27.7405 29.0225 27.873 29.0249 28.0072C29.0273 28.1415 29.0026 28.2749 28.9523 28.3994C28.902 28.5239 28.8271 28.637 28.7321 28.732C28.6372 28.8269 28.5241 28.9018 28.3996 28.9521C28.275 29.0024 28.1417 29.0271 28.0074 29.0247C27.8731 29.0223 27.7407 28.993 27.618 28.9383C27.4954 28.8836 27.385 28.8048 27.2934 28.7066L20.0001 21.4133L12.7068 28.7066C12.5172 28.8832 12.2665 28.9794 12.0074 28.9748C11.7483 28.9702 11.5012 28.8653 11.3179 28.6821C11.1347 28.4989 11.0298 28.2517 11.0252 27.9926C11.0206 27.7335 11.1168 27.4828 11.2934 27.2933L18.5868 19.9999L11.2934 12.7066C11.1062 12.5191 11.001 12.2649 11.001 11.9999C11.001 11.7349 11.1062 11.4808 11.2934 11.2933Z"
				fill="white"
			/>
		</svg>
	) : (
		<svg
			onClick={() => dispatch(setIsOpen(!isOpen))}
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="40" height="40" rx="20" fill="#2388FF" />
			<path
				d="M9 16H31M9 25H31"
				stroke="white"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default MenuButton
