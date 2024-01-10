'use client';
import React, { useState } from 'react';
import Logotype from '@/ui/Logotype';
import { button } from '@/components/layout/header/sideBar';
import SideBarButton from '@/ui/sideBarButton';
function SideBarTablet() {
	const [openNav, setOpenNav] = useState<undefined | boolean>();
	return (
		<nav
			onClick={() => setOpenNav(!openNav)}
			className={`fixed ${
				openNav ? 'w-screen bg-black/20 backdrop-blur-sm' : 'w-fit'
			} left-0 top-0 z-50 hidden h-screen transition-all duration-300 sm:flex xl:hidden`}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`${
					openNav ? 'w-[284px]' : 'w-[72px]'
				} flex flex-col items-center bg-color-card-hover p-2 pt-[32px] transition-all duration-300`}
			>
				<div className={''}>
					<Logotype />
				</div>
				<div
					className={`flex h-screen flex-col justify-center transition-all duration-300`}
				>
					<div
						className={`relative ${
							openNav ? 'w-[268px]' : 'w-[56px]'
						} flex flex-col gap-1 overflow-hidden transition-all duration-300`}
					>
						{button.map(({ icon, text, id }, index) => (
							<SideBarButton
								openNav={openNav}
								onClose={setOpenNav}
								key={index}
								id={id}
								text={text}
								icon={icon}
								className={
									'group flex cursor-pointer flex-row rounded-[18px] border border-color-border bg-white p-4 hover:bg-color-chip-hover hover:text-color-text-title active:border-color-blue-accent '
								}
							/>
						))}
					</div>
				</div>
			</div>
			<div
				onClick={() => setOpenNav(!openNav)}
				className={`absolute z-40 h-screen w-[72px] ${openNav && 'hidden'}`}
			></div>
		</nav>
	);
}

export default SideBarTablet;
