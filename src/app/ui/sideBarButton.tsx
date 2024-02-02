'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { sideBarReducer } from '../../lib/reducers/sideBarReducer';
import { useAppDispatch, useAppSelector } from '../../lib/redux';

interface ISideBarButton {
	text?: string;
	className?: string;
	id: string;
	icon?: JSX.Element;
	onClose?: (a: boolean) => void;
	openNav?: boolean;
}
function SideBarButton({
	text,
	className,
	id,
	icon,
	onClose,
	openNav,
}: ISideBarButton) {
	const [openServices, setOpenServices] = useState(false);

	const { isOpen } = useAppSelector((state) => state.sideBarReducer);
	const { setIsOpen } = sideBarReducer.actions;
	const dispatch = useAppDispatch();

	return text === 'Услуги' ? (
		<>
			<div
				className={`${className} -mb-1 flex-col text-xl text-color-text-chip-card active:text-color-blue-accent sm:text-2xl`}
				onClick={() => setOpenServices(!openServices)}
			>
				<div className={'flex w-full flex-row justify-between'}>
					<div
						className={'flex flex-row items-center gap-2.5 sm:gap-4 xl:gap-2.5'}
					>
						{icon}
						{text}
					</div>
					<div className={'self-center sm:hidden xl:block'}>
						<svg
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M19.5 8.75L12 16.25L4.5 8.75"
								stroke="#6F7C8F"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div
				className={`${
					openNav === undefined
						? openServices
							? `max-h-[300px]`
							: 'max-h-0'
						: openNav
						  ? openServices
								? `max-h-[300px]`
								: 'max-h-0'
						  : 'max-h-0'
				} w-full space-y-1 overflow-hidden transition-all duration-500 ease-in-out`}
			>
				<Link
					href={`/designing`}
					className={`${className} mt-1 max-w-[288px] text-xl text-color-text-chip-card active:text-color-blue-accent sm:text-2xl`}
					onClick={() => {
						{
							onClose && onClose(false);
						}
						setOpenServices(false);
						dispatch(setIsOpen(!isOpen));
					}}
				>
					Проектирование зданий
				</Link>
				<Link
					href={`/tehpris`}
					className={`${className} max-w-[288px] text-xl text-color-text-chip-card active:text-color-blue-accent sm:text-2xl`}
					onClick={() => {
						{
							onClose && onClose(false);
						}
						setOpenServices(false);
						dispatch(setIsOpen(!isOpen));
					}}
				>
					Технологическое присоединение
				</Link>
			</div>
		</>
	) : (
		<Link
			href={`/#${id}`}
			className={className}
			onClick={() => {
				{
					onClose && onClose(false);
				}
				dispatch(setIsOpen(!isOpen));
			}}
		>
			<div
				className={`flex w-max cursor-pointer flex-row items-center gap-2.5 whitespace-nowrap text-xl text-color-text-chip-card group-hover:text-color-text-title group-active:text-color-blue-accent sm:gap-4 sm:text-2xl xl:gap-2.5`}
			>
				{icon}
				{text}
			</div>
		</Link>
	);
}

export default SideBarButton;
