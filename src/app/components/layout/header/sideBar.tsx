'use client'
import React from 'react'
import SideBarButton from '@/ui/sideBarButton'
import StoreProvider from '@/StoreProvider'
import Logotype from '@/ui/Logotype'

export const button = [
	{
		id: 'main',
		icon: (
			<svg
				className={'group-active:text-color-blue-accent'}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 11.6632L11.102 1.37815C11.5984 0.873949 12.4016 0.873949 12.8969 1.37815L23 11.6632M3.53846 9.07904V20.7079C3.53846 21.4211 4.10708 22 4.80769 22H9.46154V16.4009C9.46154 15.6877 10.0302 15.1088 10.7308 15.1088H13.2692C13.9698 15.1088 14.5385 15.6877 14.5385 16.4009V22H19.1923C19.8929 22 20.4615 21.4211 20.4615 20.7079V9.07904M7.76923 22H17.0769"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		text: 'Главная',
	},
	{
		id: 'usServices',
		icon: (
			<svg
				className={'group-active:text-color-blue-accent'}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M11.42 15.17L17.25 21C17.75 21.484 18.4202 21.7521 19.1161 21.7465C19.812 21.7408 20.4777 21.4619 20.9698 20.9698C21.4619 20.4777 21.7408 19.812 21.7465 19.1161C21.7521 18.4202 21.484 17.75 21 17.25L15.123 11.373M11.42 15.17L13.916 12.14C14.233 11.756 14.656 11.514 15.124 11.374C15.674 11.21 16.287 11.186 16.867 11.234C17.6488 11.3011 18.4346 11.1627 19.1464 10.8323C19.8582 10.502 20.4712 9.99124 20.9246 9.35081C21.3781 8.71037 21.6562 7.9625 21.7313 7.1814C21.8065 6.4003 21.676 5.61313 21.353 4.898L18.077 8.175C17.5289 8.04826 17.0274 7.77016 16.6296 7.37238C16.2318 6.97459 15.9537 6.4731 15.827 5.925L19.103 2.649C18.3879 2.32596 17.6007 2.19554 16.8196 2.27068C16.0385 2.34582 15.2906 2.62391 14.6502 3.07735C14.0098 3.53079 13.499 4.14381 13.1687 4.8556C12.8383 5.56738 12.6999 6.35317 12.767 7.135C12.858 8.211 12.696 9.399 11.863 10.085L11.761 10.17M11.42 15.17L6.765 20.823C6.53939 21.098 6.2587 21.3227 5.94099 21.4827C5.62329 21.6427 5.27561 21.7344 4.92033 21.7518C4.56505 21.7693 4.21005 21.7122 3.87817 21.5842C3.54629 21.4562 3.24489 21.2602 2.99336 21.0086C2.74184 20.7571 2.54577 20.4557 2.41776 20.1238C2.28976 19.792 2.23266 19.4369 2.25015 19.0817C2.26764 18.7264 2.35932 18.3787 2.51929 18.061C2.67927 17.7433 2.90399 17.4626 3.179 17.237L10.016 11.607L5.909 7.5H4.5L2.25 3.75L3.75 2.25L7.5 4.5V5.909L11.76 10.169L10.015 11.606M18.375 18.375L15.75 15.75M4.867 19.125H4.875V19.133H4.867V19.125Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		text: 'Услуги',
	},
	{
		id: 'advanced',
		icon: (
			<svg
				className={'group-active:text-color-blue-accent'}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M2.25 18L9 11.25L13.306 15.557C14.5507 13.1028 16.6044 11.1534 19.12 10.038L21.86 8.81799M21.86 8.81799L15.92 6.53799M21.86 8.81799L19.58 14.759"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		text: 'Преимущества',
	},
	{
		id: 'region',
		icon: (
			<svg
				className={'group-active:text-color-blue-accent'}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9 6.75001V15M15 9.00001V17.25M15.503 20.748L20.378 18.311C20.759 18.121 21 17.731 21 17.305V4.82001C21 3.98401 20.12 3.44001 19.372 3.81401L15.503 5.74801C15.186 5.90701 14.813 5.90701 14.497 5.74801L9.503 3.25201C9.34682 3.17394 9.17461 3.1333 9 3.1333C8.82539 3.1333 8.65318 3.17394 8.497 3.25201L3.622 5.68901C3.24 5.88001 3 6.27001 3 6.69501V19.18C3 20.016 3.88 20.56 4.628 20.186L8.497 18.252C8.814 18.093 9.187 18.093 9.503 18.252L14.497 20.749C14.814 20.907 15.187 20.907 15.503 20.749V20.748Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		text: 'Рабочие регионы',
	},
	{
		id: 'designing',
		icon: (
			<svg
				className={'group-active:text-color-blue-accent'}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9 12H12.75M9 15H12.75M9 18H12.75M15.75 18.75H18C18.5967 18.75 19.169 18.5129 19.591 18.091C20.0129 17.669 20.25 17.0967 20.25 16.5V6.108C20.25 4.973 19.405 4.01 18.274 3.916C17.9 3.88498 17.5256 3.85831 17.151 3.836M17.151 3.836C17.2174 4.05109 17.2501 4.27491 17.25 4.5C17.25 4.69891 17.171 4.88968 17.0303 5.03033C16.8897 5.17098 16.6989 5.25 16.5 5.25H12C11.586 5.25 11.25 4.914 11.25 4.5C11.25 4.269 11.285 4.046 11.35 3.836M17.151 3.836C16.868 2.918 16.012 2.25 15 2.25H13.5C13.0192 2.25011 12.5511 2.40414 12.1643 2.68954C11.7774 2.97493 11.492 3.3767 11.35 3.836M11.35 3.836C10.974 3.859 10.6 3.886 10.226 3.916C9.095 4.01 8.25 4.973 8.25 6.108V8.25M8.25 8.25H4.875C4.254 8.25 3.75 8.754 3.75 9.375V20.625C3.75 21.246 4.254 21.75 4.875 21.75H14.625C15.246 21.75 15.75 21.246 15.75 20.625V9.375C15.75 8.754 15.246 8.25 14.625 8.25H8.25ZM6.75 12H6.758V12.008H6.75V12ZM6.75 15H6.758V15.008H6.75V15ZM6.75 18H6.758V18.008H6.75V18Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		text: 'Проектирование',
	},
	{
		id: 'contacts',
		icon: (
			<svg
				className={'group-active:text-color-blue-accent'}
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		),
		text: 'Контакты',
	},
]
function SideBar({
	className,
	classNameLink,
	leftposition,
}: {
	className?: string
	classNameLink?: string
	leftposition?: boolean
}) {
	return (
		<StoreProvider>
			<div className={`${className}`}>
				<Logotype></Logotype>
				<ul className={'flex flex-col gap-y-1'}>
					{button &&
						button.map(({ id, icon, text }) => (
							<SideBarButton
								leftposition={leftposition}
								className={classNameLink}
								key={id}
								text={text}
								id={id}
								icon={icon}
							/>
						))}
				</ul>
			</div>
		</StoreProvider>
	)
}

export default SideBar
