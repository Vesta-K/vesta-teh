'use client';
import React from 'react';
import Logotype from '@/ui/Logotype';
import MenuButton from '@/components/layout/header/ui/menuButton';
import { button } from '@/components/layout/header/sideBar';
import { useAppSelector } from '../../../../lib/redux';
import SideBarButton from '@/ui/sideBarButton';

function Header() {
	let { isOpen } = useAppSelector((state) => state.sideBarReducer);

	return (
		<header
			className={
				'fixed z-50 flex max-h-screen w-screen justify-center overflow-y-scroll p-2 sm:hidden'
			}
		>
			<div
				className={`flex h-fit w-full flex-col items-center justify-between overflow-hidden rounded-xl bg-color-card-hover px-3 py-2`}
			>
				<div className={'flex w-full flex-row items-center justify-between'}>
					<Logotype logoHeader />
					<MenuButton />
				</div>
				<div
					className={`${
						isOpen ? `max-h-[700px]` : 'max-h-0'
					} relative w-full overflow-hidden transition-all duration-500 `}
				>
					<div
						className={
							'flex items-center justify-center rounded-b-2xl bg-color-card-hover p-2 py-16'
						}
					>
						<ul className={'flex flex-col gap-y-1'}>
							{button &&
								button.map(({ id, icon, text }) => (
									<SideBarButton
										className={
											' leading-1 group flex w-full flex-row items-center gap-x-[10px] rounded-[24px] border border-color-border bg-white px-6 py-4 text-xl text-color-sideBarButton-item transition-[background-color] duration-200 target:bg-black hover:bg-color-chip-hover active:text-color-blue-accent sm:text-2xl'
										}
										key={id}
										text={text}
										icon={icon}
										id={id}
									/>
								))}
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
